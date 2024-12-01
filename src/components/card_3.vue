<template>
    <div class="w-full mb-10 desktop:mb-16 text-5xl font-black">Lorem ipsum dolor</div>
    <div class="flex flex-col desktop:flex-row desktop:justify-between items-start desktop:items-center space-y-4 desktop:space-y-0">
        <div class="mr-20 flex flex-row w-full p-1 desktop:flex-col desktop:space-x-0 desktop:space-y-4 desktop:w-auto rounded-lg bg-gray-200">
        <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
            :class="[
            'px-4 py-2 rounded-lg font-medium text-center grow desktop:text-left desktop:grow-0',
            activeTab === index ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700'
            ]"
        >
            {{ tab.buttonLabel }}
        </button>
        </div>
        <div class="flex flex-col-reverse w-full grow desktop:flex-row desktop:space-x-6 items-left desktop:items-end desktop:w-auto">
            <div class="m-4 text-gray-700 text-left desktop:mt-0 desktop:max-w-sm desktop:m-0">
                <h2 class="text-xl font-bold mb-2">{{ tabs[activeTab].title }}</h2>
                <p class="text-myColor-description font-light">{{ tabs[activeTab].description }}</p>
            </div>
            <div
                class="w-full h-64 desktop:h-[400px] flex items-center justify-center border rounded-lg bg-gray-200 shadow-inset-soft"
                :style="{ backgroundImage: `url(${tabImagePath(tabs[activeTab].image)})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
            >
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
    data() {
        return {
        activeTab: 0,
        tabs: [
            {
            buttonLabel: 'Menu 1',
            title: 'Image1',
            image: 'img1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
            buttonLabel: 'Menu 2',
            title: 'Image2',
            image: 'img2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
            buttonLabel: 'Menu 3',
            title: 'Image3',
            image: 'img3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ],
        };
    },
    methods: {
        tabImagePath(imageName) {
        return new URL(`../assets/images/${imageName}`, import.meta.url).href;
        },
    },
    };
    </script>
    
    <style scoped>
    
    </style>