<script lang="ts" setup>
const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    showLineNumbers: {
        type: Boolean,
        default: false
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})

const copied = ref(false)
const title = computed(() => {
    if (props.filename) return props.filename
    if (props.meta && props.language) return `${props.language} ${props.meta}`
    if (props.language) return props.language
    return 'Code'
})

// Parse meta information for line numbers
const shouldShowLineNumbers = computed(() => {
    return props.meta?.includes('showLineNumbers') || props.showLineNumbers
})

function copyCode() {
    if (props.code) {
        navigator.clipboard.writeText(props.code)
        copied.value = true
        setTimeout(() => copied.value = false, 1500)
    }
}
</script>

<template>
    <div class="rounded-lg border-2 border-zinc-300 dark:border-zinc-700">
        <div class="flex justify-between items-center bg-zinc-200 dark:bg-zinc-900 rounded-lg p-1">
            <span>{{ title }}</span>
            <button @click="copyCode">{{ copied ? 'Copied!' : 'Copy' }}</button>
        </div>
        <pre :class="[$props.class]"><code :class="{ 'show-line-numbers': shouldShowLineNumbers }"><slot /></code></pre>
    </div>
</template>