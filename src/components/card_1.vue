<template>
    <div class="relative w-full mx-auto overflow-hidden desktop:max-h-[747px] h-[calc(100vh-55px)] min-h-[530px]">
        <div
        class="flex transition-transform duration-300 h-full"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
            <div
                v-for="(image, index) in images"
                :key="index"
                class="relative w-full flex-shrink-0 bg-cover]"
                :style="{ backgroundImage: `url(${image})`, backgroundSize: `cover`}"
            >
                <div class="flex max-w-[1440px] w-[calc(100%-40px)] desktop:w-width_con mx-auto my-auto items-center h-full">
                    <div class="blur_cover absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
                    <div class="text_con relative w-[532px] text-white z-20">
                        <div class="title desktop:mb-[70px] mb-[40px] desktop:text-7xl text-5xl font-black">Lorem ipsum dolor sit amet,</div>
                        <div class="description desktop:text-3xl text-2xl font-extralight">Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                </div>
            </div>
        </div>
        <button
        class="absolute bottom-[20px] left-[50%] w-[32px] h-[60px] transform -translate-y-1/2 -translate-x-[calc(50%+120px)] desktop:top-1/2 desktop:left-[50px] desktop:-translate-x-1/2 overflow-hidden opacity-50 hover:opacity-100 duration-300"
        @click="prevSlide"
        >
            <div class="top_left absolute top-0 left-0 bg-white w-[3px] h-[30px] origin-bottom-left rotate-45"></div>
            <div class="bottom_left absolute bottom-0 left-0 bg-white w-[3px] h-[30px] origin-top-left -rotate-45"></div>
        </button>
        <button
        class="absolute bottom-[20px] right-[50%] w-[32px] h-[60px] transform -translate-y-1/2 translate-x-[calc(50%+120px)] desktop:top-1/2 desktop:right-[50px] desktop:translate-x-1/2 overflow-hidden opacity-50 hover:opacity-100 duration-300"
        @click="nextSlide"
        >
            <div class="top_right absolute top-0 right-0 bg-white w-[3px] h-[30px] origin-bottom-right -rotate-45"></div>
            <div class="bottom_right absolute bottom-0 right-0 bg-white w-[3px] h-[30px] origin-top-right rotate-45"></div>
        </button>
    </div>
</template>

<script>
export default {
data() {
    return {
    currentSlide: 0,
    images: [],
    };
},
async created() {
    const imageFiles = import.meta.glob('/src/assets/images/*.jpg');
    this.images = await Promise.all(
    Object.keys(imageFiles).map((path) => imageFiles[path]().then((mod) => mod.default))
    );
},
methods: {
    nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
    this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
},
};
</script>

<style scoped>

</style>
