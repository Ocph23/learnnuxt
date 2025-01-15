<template>
    <div>
      Gambar  <img :src="dataView.value.image">
       {{dataView.value.title}}
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
const dataView = ref();

const {data:product} = useFetch('https://fakestoreapi.com/products/'+id.value)
dataView.value=product;
if(!product.value){
    createError({statusCode:404, statusMessage:"test"})
}

</script>

<style scoped>

</style>