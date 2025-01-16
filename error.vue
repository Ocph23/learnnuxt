<template>
    <div class="flex  justify-center items-center  h-screen">
        <div class="card  text-center">
            <div class=" text-5xl">
                {{ error.statusCode }}
            </div>
            <div>
                {{ error.message }}</div>
        </div>
    </div>
</template>

<script setup>
defineProps(['error']);

// const handleClearError = clearError({redirect:'/'});


</script>

<style scoped>
.card {
    background-color: rgb(52, 171, 226);
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.xl');
    margin: 20px;
}
</style>