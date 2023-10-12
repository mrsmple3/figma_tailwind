<template>
  <header-component />
  <div class="relative z-10">
    <img
      src="@/assets/header/BgContactOffer.png"
      alt="Bg"
      class="pointer-events-none absolute top-0 left-0 bg-no-repeat background"
    />
    <div
      class="flex flex-col items-center pt-[172px] pb-[133px] font-body text-white"
    >
      <div class="flex flex-col items-center max-w-[650px]">
        <span class="text-title-sm uppercase tracking-wider text-white mb-2"
          >GET IN TOUCH WITH US
        </span>
        <h2 class="font-display text-3xl text-center">
          We Are Ready To Assist You In 24x7
        </h2>
      </div>
    </div>
  </div>
  <div class="bg-white z-10"></div>
  <footer-component />
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped></style>
