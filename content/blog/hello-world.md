---
title: "Hello World"
date: 2025-08-09
description: "My very first post in Nuxt!"
---

# Hello!!

This is my first blog post with my new website project.
I'll throw different elements in here to test with as I add features n stuff

# h1 test
## h2 test
### h3 test


codeblock test

`export blah`

codeblock test styled

`export blah`{lang="bash"}

## codeblock example
lang nix, lines 2,3 highlighted & showLineNumbers enabled
```nix [nix to deep INI] {2,4} showLineNumbers
gendeepINI = toINI {
  mkKeyValue =
    let
      sep = "=";
    in
    k: v:
    if isAttrs v then
      concatStringsSep "\n" (
        collect isString (
          mapAttrsRecursive (
            path: value:
            "${escape [ sep ] (concatStringsSep "\\" ([ k ] ++ path))}${sep}${mkValueStringDefault { } value}"
          ) v
        )
      )
    else
      mkKeyValueDefault { } sep k v;
};
```
lang bash, no highlights, no line numbers
```bash [Example Bash Script]
#!/bin/bash
check_number() {
    if [ $((${1} % 2)) -eq 0 ]; then
        echo "${1} is even"
    else
        echo "${1} is odd"
    fi
}

echo "Number checker script"

for i in {1..5}; do
    check_number $i
done
```
## table test
| Key | Type      | Description |
| --- | --------- | ----------- |
| 1   | Wonderful | Table       |
| 2   | Wonderful | Data        |
| 3   | Wonderful | Website     |