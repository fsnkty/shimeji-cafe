<template>
    <div class="flex flex-col gap-4">
        <!-- about me -->
        <div class="prose card relative max-w-lg">
            <NuxtImg src="/mushie.webp" alt="Mushie" width="48" height="48" class="absolute -top-7 -right-4 w-12 h-12"
                loading="eager" />
            <h1>about me</h1>
            <div class="flex items-center gap-4 mb-4">
                <NuxtImg src="/pfp.webp" class="rounded-full w-32 h-32 border-4 border-zinc-300 dark:border-zinc-700"
                    width="128" height="128" alt="Profile picture" loading="eager" />
                <div>
                    <h2>fsnkty</h2>
                    <p>they/them</p>
                    <p>kiwi🥝, software dev.</p><br />
                </div>
            </div>
            <div class="w-full flex flex-col gap-4">
                <div class="card-block">
                    <h2>Socials / contact</h2>
                    <ul>
                        <li>Discord: <a href="https://discordapp.com/users/1127233765471694909">@fsnkty</a></li>
                        <li>Steam: <a href="https://steamcommunity.com/id/fsnkty/">/id/fsnkty</a></li>
                        <li>GitHub: <a href="https://github.com/fsnkty">/fsnkty</a></li>
                        <li>Email: <a href="mailto:fsnkty@shimeji.cafe">fsnkty@shimeji.cafe</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="prose card relateive max-w-md gap-4 flex flex-col">
            <h2>about shimeji.cafe</h2>
            <div class="card-block">
                <h2>theme</h2>
                <ul>
                    <li>background image: <NuxtLink to="https://holedigging.club">holedigging.club</NuxtLink>
                    </li>
                    <li>font: <NuxtLink to="https://azukifont.com/font/azuki.html">azuki</NuxtLink>
                    </li>
                    <li>rest of the styling stuff is mine ^^</li>
                </ul>
            </div>
            <div class="card-block">
                <h2>other</h2>
                <ul>
                    <li>made using nuxt. blog built on nuxt/content</li>
                    <li>currently running on cloudflare workers & D1</li>
                    <li>source code available on <NuxtLink to="https://github.com/fsnkty/shimeji-cafe">github</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>