<template>
  <footer class="w-full bg-myColor-footer text-white desktop:text-left mobile:text-center">
    <div class="desktop:block mobile:flex flex-col items-center container max-w-[1440px] w-width_con h-full mx-auto py-[115px]">
      <SvgLogo class="custom-icon mb-[30px]" />
      <p class="font-extralight">Copyrights 2024. <span class="font-semibold">테스트</span> All Rights Reserved</p>
    </div>
  </footer>
</template>


<script>
import SvgLogo from '../assets/images/logo.svg'

export default {
  components: {
    SvgLogo,
  },
};
</script>

<style>
.custom-icon{
  width: 252px;
}
.custom-icon path{
  fill: white !important;
}
</style>