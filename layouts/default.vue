<template>
    <div>
      
        <header>

            <nav>
                <ul class="flex">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products/xxx">Error</NuxtLink></li>
                    <li><NuxtLink to="https://www.youtube.com/watch?v=MA76RDwfjH8">Learn on Youtube</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div>
            <slot></slot>
        </div>
    </div>
</template>



<style scoped>
li{
    margin: 10px;
}
.router-link-active {
    color: teal;
}

</style>