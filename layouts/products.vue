<script setup lang="ts">

</script>

<template>

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

   
</template>



<style scoped>

.router-link-active {
    color: teal;
}

</style>