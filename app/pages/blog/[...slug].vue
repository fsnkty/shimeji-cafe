<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(
    () => route.path,
    () => queryCollection('blog')
        .path(route.path)
        .first(),
    { server: true }
)
</script>
<template>
    <div class="prose card max-w-4xl">
        <ContentRenderer v-if="page" :value="page" />
    </div>
</template>
