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
        <div class="flex-col relative -z-1  md:visible sm:max-md:hidden">
               <img class="absolute bottom-0 right-0 sm:max-md:right-0 " src="/assets/images/illustration-contact.svg" alt="">
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
</script>