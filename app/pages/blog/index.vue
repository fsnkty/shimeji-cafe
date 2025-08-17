<script setup>
const route = useRoute()
// Fetch all posts in the 'blog' directory, sorted by date (newest first)
const { data: posts } = await useAsyncData(route.path, () => {
    return queryCollection('blog')
        .select('title', 'description', 'path')
        .all()
})
</script>

<template>
    <div class="card max-w-2xl">
        <h1>Blog</h1>
        <ul class="flex flex-col gap-4">
            <li v-for="post in posts" :key="post._path">
                <div class="card-block">
                    <NuxtLink :to="post.path">
                        <h2>{{ post.title }}</h2>
                    </NuxtLink>
                    <p>{{ post.description }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
