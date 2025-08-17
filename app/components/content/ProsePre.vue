<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
    filename: String,
    language: String,
    meta: String
})
const copied = ref(false)
const codeEl = ref(null)
const title = computed(() => props.filename || props.language || 'Code')
function copyCode() {
    navigator.clipboard.writeText(codeEl.value.textContent)
    copied.value = true
    setTimeout(() => copied.value = false, 1500)
}
</script>

<template>
    <div class="rounded-lg border-2 border-zinc-300 dark:border-zinc-700">
        <div class="flex justify-between items-center bg-zinc-200 dark:bg-zinc-900 rounded-lg p-2">
            <span>{{ title }}</span>
            <button class="text-blue-500 hover:underline" @click="copyCode">{{ copied ? 'Copied!' : 'Copy' }}</button>
        </div>
        <pre><code ref="codeEl"><slot /></code></pre>
    </div>
</template>