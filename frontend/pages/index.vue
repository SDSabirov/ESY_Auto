<template>
    <div class="bg-light-bg sm:max-md:max-w-screen overflow-x-hidden">
        <!--Home page-->
        <HeaderNavbar />
        <MainHome />
        <MainHomeServices />
        
        <MainServices />
        <MainTestimonials />
        <MainContacts />
         
        <MainFooter />
        <FormsEnquiry />
        <div class="md:flex-col relative -z-1 sm:max-md:hidden bg-light-bg ">
            <img
               class="absolute bottom-0 right-0 -z-2 md:opacity-100 opacity-20" src="/assets/images/illustration-contact.svg" alt="">
        </div> 
        <FormsEnquiry />
        <FormsReview/>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'



onMounted(() => {
    
    initFlowbite();
});

let isSmallScreen = ref(false);


</script>