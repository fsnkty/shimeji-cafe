<template>
    <!-- about me -->
    <div class="prose card relative max-w-2xl">
        <NuxtImg src="/mushie.png" alt="Mushie" width={48} height={48} class="absolute -top-7 -right-4 w-12 h-12"
            priority />
        <div class="flex items-center gap-4 mb-4">
            <NuxtImg src="/pfp.png" class="rounded-full w-32 h-32 border-4 border-zinc-300 dark:border-zinc-700"
                width={128} height={128} alt="Profile picture" priority />
            <div>
                <h1>Maddie,"fsnkty"</h1>
                <p>she/her,they/them</p>
            </div>
        </div>
        <div class="w-full flex flex-col gap-4">
            <div class="card-block">
                <h2>About Me</h2>
                <p>trans🏳️‍⚧️, kiwi🥝, software dev with an avoidance to finishing anything.</p><br />
            </div>
            <div class="card-block">
                <h2>Socials / contact</h2>
                <ul>
                    <li>Discord: <a href="https://discordapp.com/users/1127233765471694909">@fsnkty</a></li>
                    <li>Steam: <a href="https://steamcommunity.com/id/fsnkty/">@fsnkty</a></li>
                    <li>GitHub: <a href="https://github.com/fsnkty">@fsnkty</a></li>
                    <li>Email: <a href="mailto:fsnkty@shimeji.cafe">fsnkty@shimeji.cafe</a></li>
                </ul>
                <p>if it's not listed here, please assume its not me</p>
            </div>
        </div>
    </div>
</template>