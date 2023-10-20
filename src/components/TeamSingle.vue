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
          >THE EXPERT
        </span-title>
        <h2 class="font-display text-3xl text-center">Creative Beauty Team</h2>
      </div>
    </div>
  </div>
  <div class="bg-white relative">
    <div class="max-w-container mx-auto pt-32 pb-[127px]">
      <div class="flex items-center justify-between">
        <img
          src="@/assets/header/TeamExpertFirstSingle.jpg"
          alt="ExpertFirst"
        />
        <div
          class="flex flex-col items-start justify-start gap-[30px] max-w-[533px]"
        >
          <div class="flex flex-col items-start">
            <span-title class="mb-[7px]">Beautyness Expert Manager</span-title>
            <h3 class="font-display text-black text-2xl mb-4">
              Sherlin D’Cruz
            </h3>
            <p class="text-black-400 text-xs">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injecte
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat.
            </p>
          </div>
          <div class="flex flex-col items-start gap-[15px]">
            <div class="flex gap-[34px] items-center justify-center">
              <img src="@/assets/header/IconCallBlack.png" alt="Call us" />
              <p class="text-base font-display text-black">
                (+22) 1423 585 980
              </p>
            </div>
            <div class="flex gap-[34px] items-center justify-center">
              <img src="@/assets/header/IconMailBlack.png" alt="Call us" />
              <p class="text-base font-display text-black">
                sherlindcruz@gmail.com
              </p>
            </div>
          </div>
          <button-reservation class="px-9">
            Make reservation
          </button-reservation>
          <div class="flex items-center gap-[30px]">
            <img
              class="cursor-pointer"
              src="@/assets/header/facebook-fill.png"
              alt="f"
            />
            <img
              class="cursor-pointer"
              src="@/assets/header/linkedin-fill.png"
              alt="Twitter"
            />
            <img
              class="cursor-pointer"
              src="@/assets/header/twitter.png "
              alt="LinkedIn"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
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
