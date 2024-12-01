<template>
  <div class="flex flex-col rounded-[5px] shadow-3xl overflow-hidden">
    <img :src="image" alt="Card Image" class="w-full max-h-[192px] object-cover">
    <div class="relative grow max-h-[316px] text_con p-[20px] desktop:p-[30px]">
      <h2 class="text-xl tablet:text-2xl desktop:text-3xl font-black mb-2">{{ title }}</h2>
      <p class="text-lg text-myColor-description desktop:block hidden">{{ description }}</p>
      <div class="desktop:pt-24 pt-0 desktop:text-base text-sm text-myColor-bottomText">{{ bottomText }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps(['title', 'description', 'bottomText', 'image']);
</script>