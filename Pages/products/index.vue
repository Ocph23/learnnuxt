<template>
    <div>
        <h1>Ini Index Products</h1>
       <table class="table">
        <tbody>
            <tr v-for="item in products">
              <td>{{ item.id }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.description }}</td>
              <td> <NuxtLink :to="`/products/${item.id}`" >Detail</NuxtLink> </td>
            </tr>
        </tbody>
       </table>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products',
    title: 'Products',
    description: 'This is the products page',
    image: 'https://example.com/image.jpg'
})


const {data:products} = useFetch('https://fakestoreapi.com/products')




</script>