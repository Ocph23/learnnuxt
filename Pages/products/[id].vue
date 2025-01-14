<template>
    <div>
        param value :{{ id }}
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'products',
    title: 'Products',
    description: 'This is the products page',
    image: 'https://example.com/image.jpg'
})


var reoute = useRoute();

const id = ref(reoute.params.id);

</script>

<style scoped>

</style>