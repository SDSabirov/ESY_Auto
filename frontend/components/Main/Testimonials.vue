<template>
    <div class="w-full md:h-fit md:px-40 md:flex-col justify-center bg-dark-blue sm:max-md:flex-col  py-10 px-4">
    
      <h2 class="text-[26px] text-semibold text-white text-center w-full"> What our clients say ?</h2>  
      <div class="mt-4 flex items-center gap-2 ">
        <div class="flex-col justfy-center border border-white rounded p-4 ">
            <div class="flex color-white gap-2">
                <div v-for="star in stars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="white"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                    </svg>
                </div>
            </div>
            <h4 class="text-[16px] text-primary-yellow text-semibold">John </h4>
            <p class="text-[16px] text-white">
                "I had a great experience with ESY Auto. They are very professional and reliable. 
                I would recommend them to anyone."
            </p>
        </div>

        <div class="flex-col justfy-center border border-white rounded p-4 ">
            <div class="flex color-white gap-2">
                <div v-for="star in stars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="white"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                    </svg>
                </div>
            </div>
            <h4 class="text-[16px] text-primary-yellow text-semibold">John </h4>
            <p class="text-[16px] text-white">
                "I had a great experience with ESY Auto. They are very professional and reliable. 
                I would recommend them to anyone."
            </p>
        </div>

        <div class="flex-col justfy-center border border-white rounded p-4 ">
            <div class="flex color-white gap-2">
                <div v-for="star in stars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="white"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                    </svg>
                </div>
            </div>
            <h4 class="text-[16px] text-primary-yellow text-semibold">John </h4>
            <p class="text-[16px] text-white">
                "I had a great experience with ESY Auto. They are very professional and reliable. 
                I would recommend them to anyone."
            </p>
        </div>
      </div>
      
      <div class="flex gap 2 mt-8 color-white justify-center items-center">
        <div v-for="star in stars">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
            <path fill="white"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
        </div>
        <p class="text-[16px] text-white">Based on {{reviews}} reviews</p>
      </div>

    </div>

</template>


<script setup>
let stars = 5;
let reviews = 3;

</script>
