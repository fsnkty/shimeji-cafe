---
title: "Jellyfin setup with nixos"
date: 2025-08-10
description: "how I made jellyfin behave on nixos"
tags: ["nix", "nixos", "self hosting"]
---

# how I made jellyfin behave on nixos
jellyfin, if you arent already familar is a self hostable media streaming service.
It largely works very well but has the occasional issue that requires tweaks n such to get *good enough*.
This post will largely just cover what issues I've encounted and how I got around them with nixos, as well as some general setup info.

## system setup
nixos largely does the heavy lifting with the jellyfin service but there are a couple extra things that need to be done individually. group setup for sane permissions structure & hardware transcoding setup.
### user/group setup
for me this is as simple as creating a generic "media group" like so
```nix
users.groups.media = {
    gid = 1000; # arbitrary ID, 1000 just happens to be what I picked at the time
    members = [ config.users.users.main.name ]; # include the main/admin user of the system
};
```
and then adding the jellyfin user in the service.
`services.jellyfin.group = "media";`{lang="nix"}
### hardware transcoding
this step varies alot but I'll include some 8-9th gen intel specifics as thats what I use.
```nix
boot.kernelParams = [ "i915.enable_guc=2" ];
hardware.graphics = {
  enable = true; # this part is likely needed for all graphics hardware
  extraPackages = [ pkgs.intel-vaapi-driver pkgs.intel-media-driver pkgs. intel-compute-runtime-legacy1 ]; # this stuff is specific to my hardware, google yours for if something similar is needed.
};
# these are both very specific for my hardware, but might be helpful if you also have an older GPU (once you change the value of course)
systemd.services.jellyfin.environment.LIBVA_DRIVER_NAME = "i965";
environment.sessionVariables = { LIBVA_DRIVER_NAME = "i965"; };
```

### package fixes
heres the part we actually address some issues with jellyfin currently,

1. ASS subtitles or anything similarly complex desyncing when moving playback around in the webui
2. nixos specific, "skip intro" plugin setup cannot change the web package as needed as its within the store

for the first point here, its actually fixable by changing a setting on the users side "Always burn in subtitles when transcoding", issue is theres no way to globally apply this to all users within the webui, so instead we modify the source to force the settings value to the correct one for all users
and the latter, we can just add the changes it likes to make in the source before adding the package to the store.
```nix
nixpkgs.overlays = with pkgs; [
  (
    final: prev:
      {
        jellyfin-web = prev.jellyfin-web.overrideAttrs (finalAttrs: previousAttrs: {
          # adds intro skip plugin script ( must be installed in the admin dashboard )
          # forces subtitle burn in when transcoding for all users all clients always
          installPhase = ''
            runHook preInstall
            sed -i "s#</head>#<script src=\"configurationpage?name=skip-intro-button.js\"></script></head>#" dist/index.html
            sed -i "s#f.AlwaysBurnInSubtitleWhenTranscoding=c.A.alwaysBurnInSubtitleWhenTranscoding()#f.AlwaysBurnInSubtitleWhenTranscoding=true#" dist/main.jellyfin.bundle.js
            sed -i "s#{key:"alwaysBurnInSubtitleWhenTranscoding",value:function(e){return void 0!==e?this.set("alwaysBurnInSubtitleWhenTranscoding",e.toString()):(0,o.G4)(this.get("alwaysBurnInSubtitleWhenTranscoding"),!1)}}#{key:"alwaysBurnInSubtitleWhenTranscoding",value:function(e){return true}}#" dist/main.jellyfin.bundle.js
            mkdir -p $out/share
            cp -a dist $out/share/jellyfin-web
            runHook postInstall
          '';
        });
      }
  )
];
```
now I do this with an overlay, which is typically bad practice as if the package is used alot, you end up changing it everywhere and that can cause mass rebuilds, but for this case its only ever used with jellyfin so it makes little to no difference.
for cases where a package may be used else where its best to set the package option of the service to a override of the original.
## networking setup
jellyfin can of course just be accessed locally, but thats likely not what youd want, if you want it to be available on the same local network you could set `services.jellyfin.openFirewall = true`{lang="nix"}, in which case, you're all done.
if however you have a domain, and would like to share the service with others or just generally use it outside of home, you should as recommened by upstream for jellyfin, setup a reverse proxy, Nginx is what I use, like so
```nix
services = {
  # reverse proxy jellyfin
  nginx.virtualHosts."jelly.shimeji.cafe" =
    {
      enableACME = true;
      forceSSL = true;
      locations."/" = {
        proxyPass = "http://localhost:8096";
        proxyWebsockets = true;
      };
    };
};
```
the notable parts here are that
1. you no longer need to openFirewall
2. `proxyWebsockets = true;`{lang="nix"} generally helps fix "syncplay".

enabling ACME and forcing SSL is also good practice, more so with nixos as alot of that certificate handling can be done automatically. if I get around to It I'll link a post that goes more in-depth on nginx and webhosting on nixos here.