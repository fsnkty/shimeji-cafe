<script setup>
const { data: posts } = await useAsyncData(
    () => 'blog-posts',
    () => queryCollection('blog')
        .select('title', 'description', 'path', 'date', 'tags')
        .order('date', 'DESC')
        .all(),
    { server: true }
)
</script>

<template>
    <div class="prose card max-w-2xl">
        <h1>Blog</h1>
        <div class="flex flex-col gap-4">
            <div class="card-block" v-for="post in posts" :key="post.path">
                <NuxtLink :to="post.path">
                    <h2>{{ post.title }}</h2>
                </NuxtLink>
                <p>{{ post.description }}</p>
                <div class="tags">
                    <div v-for="tag in post.tags" :key="post.tags">
                        <NuxtLink :to="tag.query">
                            <p class="tag">{{ tag }}</p>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
