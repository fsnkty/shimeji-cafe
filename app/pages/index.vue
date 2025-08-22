<script setup lang="ts">
const { data: latestPost } = await useAsyncData(
  () => 'latest-post',
  () => queryCollection('blog')
    .select('title', 'date', 'description', 'path')
    .order('date', 'DESC')
    .first(),
  { server: true }
)
</script>

<template>
  <div class="prose relative card max-w-2xl">
    <h2>Welcome to my website!</h2>
    <p>everything's in the nav bar up top</p>
    <div v-if="latestPost">
      <h2>latest post</h2>
      <div class="card-block">
        <NuxtLink :to="latestPost.path">
          <h3>{{ latestPost.title }}</h3>
        </NuxtLink>
        <p>{{ latestPost.description }}</p>
      </div>

    </div>
  </div>
</template>
