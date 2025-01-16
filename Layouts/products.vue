<script setup lang="ts">
import Default from './default.vue';

</script>

<template>

<Default>
    <div>
        <header>
            <nav>
                <nuxt-link to="/products">Products</nuxt-link>
            </nav>
        </header>

        <div>
            <slot></slot>
        </div>
       
    </div>
</Default>

   
</template>



<style scoped>

.router-link-active {
    color: teal;
}

</style>