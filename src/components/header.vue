<template>
  <header
    class="fixed w-full h-[55px] bg-myColor-themeWhite desktop:px-[120px] py-[10px] z-50 shadow-header"
  >
    <div class="container mx-auto flex justify-between items-center">
      <a href="/"><img class="w-[136px]" src="../assets/images/logo.svg" /></a>
      <nav
        ref="headerNav"
        class="header_nav mobile:hidden desktop:block"
        role="navigation"
        aria-label="메인 메뉴"
      >
        <ul class="flex space-x-4 uppercase bold font-semibold">
          <li>
            <a href="#" @click.prevent="logMessage('Home')">Home</a>
          </li>
          <li>
            <a href="#" @click.prevent="logMessage('About')">About</a>
          </li>
          <li>
            <a href="#" @click.prevent="logMessage('Contact')">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        ref="headerToggle"
        class="header_nav_mobile w-[40px] h-[40px] mobile:block desktop:hidden"
        id="headerToggle"
        aria-controls="primary-menu"
        aria-expanded="false"
        role="button"
        tabindex="0"
        @click="toggleNav"
      >
        <span class="before absolute top-1/2 translate-y-[-6px] block w-[40px] h-[2px] bg-black rounded duration-300"></span>
        <span class="absolute top-1/2 translate-y-[1px] block w-[40px] h-[2px] bg-black rounded"></span>
        <span class="after absolute top-1/2 translate-y-[8px] block w-[40px] h-[2px] bg-black rounded  duration-300"></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const headerToggle = ref(null);
const headerNav = ref(null);

// 토글 함수
const toggleNav = () => {
  if (headerNav.value) {
    headerNav.value.classList.toggle("show");
  }
  if (headerToggle.value) {
    const isExpanded =
      headerToggle.value.getAttribute("aria-expanded") === "true";
    headerToggle.value.setAttribute(
      "aria-expanded",
      isExpanded ? "false" : "true"
    );
  }
};

// 창 크기 변경 시 `show` 제거
const handleResize = () => {
  if (headerNav.value) {
    headerNav.value.classList.remove("show");
  }
  if (headerToggle.value) {
    headerToggle.value.setAttribute("aria-expanded", "false");
  }
};

// 이벤트 리스너 추가 및 제거
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const logMessage = (page) => {
  console.log(`${page} 클릭`);
};
</script>
