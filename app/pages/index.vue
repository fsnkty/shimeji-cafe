<script setup lang="ts">
const { data: latestPost } = await useAsyncData(
  () => 'latest-post',
  () => queryCollection('blog')
    .select('title', 'date', 'description', 'path')
    .order('date', 'DESC')
    .first()
)
</script>

<template>
  <div class="prose relative card max-w-2xl">
    <h1>Welcome to my website!</h1>
    <p>everything's in the nav bar up top</p>
    <h2>latest post</h2>
    <div class="card-block" v-if="latestPost">
      <NuxtLink :to="latestPost.path">
        <h3>{{ latestPost.title }}</h3>
      </NuxtLink>
      <p>{{ latestPost.description }}</p>
    </div>
  </div>
</template>
