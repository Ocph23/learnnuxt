<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="/products">Home</nuxt-link>
                <nuxt-link to="/products/5000">Detail</nuxt-link>
            </nav>
        </header>

        <div>
            <slot></slot>
        </div>
        <footer>
            <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                </ul>
        </footer>
    </div>
</template>



<style scoped>

.router-link-active {
    color: teal;
}

</style>