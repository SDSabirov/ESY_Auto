<template>
    <div class="bg-light-bg">
        <!--Home page-->
        <HeaderNavbar />
        <MainHome />
        <MainHomeServices />
        <MainServices />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>