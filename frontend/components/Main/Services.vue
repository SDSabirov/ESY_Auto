<template>
    <div class="container bg-light-bg min-w-full flex-col md:h-fit md:px-40 px-4 py-20 sm:max-md:h-fit">
        <h1 class="w-full font-bold text-[#777777] text-[26px] ">Services</h1>
        <div class="md:flex sm:max-md:flex-col sm:max-md:w-full ">
            <div class="container flex-col md:w-1/2 md:h-fit sm:max-md:w-full sm:max-md:h-screen"> 
                <div class="flex items-center my-8">
                    <div class="bg-primary-yellow p-4 rounded-xl size-20 min-h-20 min-w-20 justify-items-center content-center p-4">
                        <img class="w-full h-full" src="/assets/icons/service-computer2.svg" alt="">
                    </div>
                    <div class="mx-4">
                        <h2 class="text-[18px] font-semibold text-dark-blue">Computer diagnostic</h2>
                        <p class="text-[16px] text-[#777]">Price from 60£</p>
                    </div>
                </div>
                <div class="flex items-center my-8">
                    <div class="bg-dark-blue p-4 rounded-xl size-20 min-h-20 min-w-20 justify-items-center content-center p-4">
                        <img class="w-full h-full" src="/assets/icons/service-car.svg" alt="">
                    </div>
                    <div class="mx-4">
                        <h2 class="text-[18px] font-semibold text-dark-blue  ">Car Service</h2>
                        <p class="text-[16px] text-[#777]">Price from 120£</p>
                    </div>
                </div>
                <div class="flex items-center my-8">
                    <div class="bg-primary-yellow p-4 rounded-xl size-20 min-h-20 min-w-20 justify-center items-center  content-center p-4">
                        <img class="w-full h-full" src="/assets/icons/service-inspection.svg" alt="">
                    </div>
                    <div class="mx-4">
                        <h2 class="text-[18px] font-semibold text-dark-blue">Pre-Purchase Inspection</h2>
                        <p class="text-[16px] text-[#777]">Price from 120£</p>
                    </div>
                </div>
                <div class="flex items-center my-8">
                    <div class="bg-dark-blue p-4 rounded-xl size-20 min-h-20 min-w-20 justify-center items-center content-center p-4">
                        <img class="w-full h-full" src="/assets/icons/service-coding.svg" alt="">
                    </div>
                    <div class="mx-4">
                        <h2 class="text-[18px] font-semibold text-dark-blue">Coding via Software</h2>
                        <p class="text-[16px] text-[#777]">Price from 60£</p>
                    </div>
                </div>
                
                
            </div>

            <div class="container flex-col md:w-1/2 h-fit justify-center allign-center content-center md:relative md:top-[-30px]">
                <div class=" ">
                    <MainGoogleMap />
                </div>
            </div>
        </div>  
    </div>
</template>
<script setup>

</script>