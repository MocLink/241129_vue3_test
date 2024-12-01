<template>
  <main class="pt-[55px]">
    <section id="card_1" class="">
      <Card_1 />
    </section>
    <section id="card_2" class="">
      <div class="mx-auto py-[120px] desktop:py-[160px] container max-w-[1440px] w-[calc(100%-40px)] tablet:w-with_con desktop:w-width_con h-full grid grid-cols-1 gap-6 desktop:grid-cols-4 tablet:grid-cols-2">
        <Card_2
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
        :bottomText="card.bottomText"
        :image="getImage(card.image)"
        />
      </div>
    </section>
    <section id="card_3" class="bg-myColor-themeWhite">
      <div class="mx-auto py-[120px] desktop:py-[160px] max-w-[1440px] w-[calc(100%-40px)] desktop:w-width_con">
        <Card_3/>
      </div>
    </section>
  </main>
</template>

<script setup>
import Card_1 from './card_1.vue';
import Card_2 from './card_2.vue';
import Card_3 from './card_3.vue';


const cards = [
  { id: 1, title: 'Lorem ipsum dolor sit amet,', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,', bottomText: 'Lorem ipsum dolor sit amet,', image: 'img1.jpg' },
  { id: 2, title: 'Lorem ipsum dolor sit amet,', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,', bottomText: 'Lorem ipsum dolor sit amet,', image: 'img2.jpg' },
  { id: 3, title: 'Lorem ipsum dolor sit amet,', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,', bottomText: 'Lorem ipsum dolor sit amet,', image: 'img3.jpg' },
  { id: 4, title: 'Lorem ipsum dolor sit amet,', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,', bottomText: 'Lorem ipsum dolor sit amet,', image: 'img4.jpg' },
];

function getImage(imageName) {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}

</script>
