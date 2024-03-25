<template>
    
        <div class="w-full md:h-fit md:px-40 flex-col justify-center bg-dark-blue sm:max-md:flex-col py-10 px-4">

            <div class="flex-col items center w-full justify-center ">
                <h2 class="text-[26px] text-semibold text-white text-center w-full"> What our clients say ?</h2>
                <p class="text-[16px] text-white text-center w-full">We are proud to have served many happy customers. Here
                are some of their reviews.</p>
            </div>
            

            <div id="carousel-chunk">
                <div 
                v-for ="chunk in reviews" :key="chunk"
                class="mt-4 md:flex sm:max-md:flex-col items-center gap-2 transition animate-[fadeLeft_0.5s_ease-in-out]  !hidden"
                >
                    <div v-for="review in chunk" :key="review"
                        class="flex-col justfy-center border border-white rounded p-4 md:w-[33%] sm:max-md:w-full">
                        <div class="flex color-white gap-2 ">
                            <div v-for="star in review.rating" :key="star" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-4 text-warning">
                                    <path fill="white"
                                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </div>
                        </div>
                        <h4 class="text-[16px] text-primary-yellow text-semibold">{{ review.name }}</h4>
                        <p class="text-[16px] text-white text-justify">
                        " {{ review.text }}"
                        </p>
                    </div>
                </div>
            </div>
            

            <div class="flex gap-1 w-full items-center justify-center mt-4">
                <button 
                    v-for="chunk in reviews" :key=chunk>
                    <span 
                        id="indicator"
                        class="flex w-3 h-3 me-3 bg-gray-900 rounded-full">
                    </span>
                </button>
                
            </div>

            <div class="flex gap 2 mt-8 color-white justify-center items-center">
                <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="bg-primary-yellow text-dark-blue px-4 py-2 rounded hover:scale-125" type="button">
                    Leave a review
                </button>
            </div>

            <div class="flex gap 2 mt-8 color-white justify-center items-center">
                <div v-for="star in stars" :key="star">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                        <path fill="white"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                    </svg>
                </div>
                <p class="text-[16px] text-white">Based on {{ numberOfReviews }} reviews</p>
            </div>

        </div>
        

</template>


<script setup>
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';


onMounted(() => {
    initFlowbite();
    carousel();
});
let stars = 5;
let reviews;

let reviews_recieved = [
    {
        name: 'John 1',
        text: 'I had a great experience with ESY Auto. They are very professional and reliable. I would recommend them to anyone.',
        rating: 5
    },
    {
        name: 'John 2',
        text: 'I had a great experience with ESY Auto. They are very professional and reliable. I would recommend them to anyone.',
        rating: 5
    },
    {
        name: 'John 3',
        text: 'I had a great experience with ESY Auto. They are very professional and reliable. I would recommend them to anyone.',
        rating: 5
    },
    {
        name: 'John 4',
        text: 'I had a great experience with ESY Auto. They are very professional and reliable. I would recommend them to anyone.',
        rating: 5
    },
    {
        name: 'John 5',
        text: 'I had a great experience with ESY Auto. They are very professional and reliable. I would recommend them to anyone.',
        rating: 5
    },
    {
        name: 'John 6',
        text: 'I had a great experience with ESY Auto. They are very professional and reliable. I would recommend them to anyone.',
        rating: 5
    },
    {
        name: 'John 7',
        text: 'I had a great experience with ESY Auto. They are very professional and reliable. I would recommend them to anyone.',
        rating: 5
    },
    {
        name: 'John 8',
        text: 'I had a great experience with ESY Auto. They are very professional and reliable. I would recommend them to anyone.',
        rating: 5
    },
    {
        name: 'John 9',
        text: 'I had a great experience with ESY Auto. They are very professional and reliable. I would recommend them to anyone.',
        rating: 5
    },
    {
        name: 'John 10',
        text: 'I had a great experience with ESY Auto. They are very professional and reliable. I would recommend them to anyone.',
        rating: 5
    },
];



//function to split reviews into chunks of 3 for the carousel
function chunkArray(myArray) {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    let chunk_size = 3;
    let myChunk;

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        tempArray.push(myChunk);
    }

    return tempArray;
}

reviews = chunkArray(reviews_recieved);
let numberOfReviews = reviews.length;


function carousel() {
    let carouselChunk = document.getElementById('carousel-chunk');
    let indicator = document.querySelectorAll('#indicator');
    let chunk = carouselChunk.children;
    let i;
    chunk[0].classList.remove('!hidden');
    indicator[0].classList.add('bg-primary-yellow');
    let current = 0;
    setInterval(() => {
        chunk[current].classList.add('!hidden');
        indicator[current].classList.remove('bg-primary-yellow');
        current = (current + 1) % chunk.length;
        chunk[current].classList.remove('!hidden');
        indicator[current].classList.add('bg-primary-yellow');
        
    }, 5000);
}

</script>

<style scoped>
.show {
    visibility: visible;
    animation: fadeLeft 1s;
    
}
@keyframes fadeLeft {
    from {
        opacity: 0;
        transform: translateX(100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
    
}
</style>