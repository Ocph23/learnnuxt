<template>
    <h1>Details</h1>
        <button @click="showImage">ShowImage</button>
        <div :class="bg" class="card p-5 m-5 m-10 rounded-md shadow-lg ">
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
const bg = ref("bg-white");
const { data: product } = useFetch('https://fakestoreapi.com/products/' + id.value)



async function showImage() {
   bg.value ="bg-red-500";
}

</script>

<style scoped></style>