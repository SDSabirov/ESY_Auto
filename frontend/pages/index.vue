<template>
    <div class="bg-light-bg">
        <!--Home page-->
        <HeaderNavbar />
        <MainHome />
        <MainHomeServices />
        <MainServices />
        <MainContacts />
        <FormsEnquiry />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>