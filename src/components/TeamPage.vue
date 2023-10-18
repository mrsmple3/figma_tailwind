<template>
  <header-component />
  <div class="relative z-10">
    <img
      src="@/assets/header/BgTeamOffer.png"
      alt="Bg"
      class="pointer-events-none absolute top-0 left-0 bg-no-repeat background w-full h-full"
    />
    <div class="flex flex-col items-center py-[199px] font-body text-white">
      <div class="flex flex-col items-center max-w-[650px]">
        <span-title
          class="text-title-sm uppercase tracking-wider text-white font-semibold mb-2"
          >THE BEAUTY TEAM
        </span-title>
        <h2 class="font-display text-3xl text-center">Beautyness Experts</h2>
      </div>
    </div>
  </div>
  <div class="bg-white relative">
    <div class="max-w-container mx-auto pt-[129px] pb-[151px]">
      <div
        class="flex flex-col itesm-center justify-center gap-[9px] max-w-[659px] mx-auto"
      >
        <span-title
          class="text-title-sm uppercase tracking-wider font-semibold text-center"
          >Meet our Experts</span-title
        >
        <h3 class="font-display text-black text-2xl text-center">
          The amazing women behind Beautyness
        </h3>
      </div>
      <div class="grid grid-rows-3 gap-x-[45px] gap-y-[33px] grid-cols-2">
        <team-card
          imageSrc="@/assets/about/ExpertFirst.png"
          imageAlt="ExpertFirst"
          name="Sherlin D’Cruz"
          title="Beautyness Expert"
          description="I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain"
        />
      </div>
    </div>
  </div>
  <footer-component />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style></style>
