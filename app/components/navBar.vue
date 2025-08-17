<template>
    <div
        class="fixed z-50 left-1/2 -translate-x-1/2 px-2 py-1 gap-2 flex bg-zinc-200 dark:bg-zinc-900 border-x-2 border-b-2 border-zinc-300 dark:border-zinc-700 rounded-b-xl">
        <NuxtLink to="/">
            <NuxtImg src="/mushie.png" alt="Mushie" class="w-6 h-6" />
        </NuxtLink>
        <div class="flex gap-2">
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
        </div>
    </div>
</template>