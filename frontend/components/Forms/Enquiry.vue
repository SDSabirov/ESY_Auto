<template>
   <div class="">
      <!-- drawer init and show -->
      <div 
      data-aos = "fade-left"
      data-aos-duration="1200"
      data-aos-delay="8000"
      class="text-center fixed top-[70%] right-0 z-40 ">
         <button
            class="flex content-center items-center text-dark-blue bg-primary-yellow hover:bg-dark-blue hover:text-white focus:ring-4 focus:ring-dark-blue font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button" data-drawer-target="drawer-contact" data-drawer-show="drawer-contact"
            aria-controls="drawer-contact">
            <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
               viewBox="0 0 20 16">
               <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
               <path
                  d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            Enquiry now
         </button>
      </div>

      <!-- drawer component -->
      <div id="drawer-contact"
         class="fixed top-0 left-0  z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-light-bg w-80 dark:bg-gray-800"
         tabindex="-1" aria-labelledby="drawer-contact-label">
         <h5 id="drawer-label"
            class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
               viewBox="0 0 20 16">
               <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
               <path
                  d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>Let's connect !</h5>
         <button type="button" data-drawer-hide="drawer-contact" aria-controls="drawer-contact"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close menu</span>
         </button>
         <form class="mb-6">
            <div class="mb-6">
               <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                  email</label>
               <input type="email" id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-blue focus:border-dark-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com" required />
            </div>
            <div class="mb-6">
               <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                  phone</label>
               <input type="phone" id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-blue focus:border-dark-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0745 5555 555" required />
            </div>
            <div class="mb-6">
               <label for="vehicle reg" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vehicle
                  reg</label>
               <input type="text" id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-blue focus:border-dark-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="WU 30 OHB" required />
            </div>
            <div class="mb-6">
               <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
               <input type="text" id="subject"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-blue focus:border-dark-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Let us know how we can help you" required />
            </div>
            <div class="mb-6">
               <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                  message</label>
               <textarea id="message" rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-dark-blue focus:border-dark-blue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."></textarea>
            </div>
            <button type="submit"
               class="text-dark-blue bg-primary-yellow hover:bg-dark-blue hover:text-white w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send
               message</button>
         </form>
         <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" class="hover:underline">admin@esyauto.com</a>
         </p>
         <p class="text-sm text-gray-500 dark:text-gray-400">
            <a href="#" class="hover:underline">+44(0)793 050 01 01</a>
         </p>
      </div>
   </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})

</script>

<style>

</style>

