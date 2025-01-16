<template>
    <h1>Details</h1>
        <button @click="showImage">ShowImage</button>
        <div class="card m-10">
            Gambar <img class="w-60 " :src="product.image">
            {{ product.title }}
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
const dataView = ref({});
const gambar = ref();
const { data: product } = useFetch('https://fakestoreapi.com/products/' + id.value)
if (!product.value) {
    throw new Error('Not Found')
}

async function showImage() {
    gambar.value = dataView.value;
}

</script>

<style scoped></style>