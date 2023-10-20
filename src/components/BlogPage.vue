<template>
  <header-component />
  <div class="relative z-10">
    <img
      src="@/assets/header/BgTeamOffer.png"
      alt="Bg"
      class="pointer-events-none absolute top-0 left-0 bg-no-repeat background w-full h-full"
    />
    <div
      class="flex flex-col items-center pt-[130px] pb-[129px] font-body text-white"
    >
      <div class="flex flex-col items-center max-w-[650px]">
        <span-title
          class="text-title-sm uppercase tracking-wider text-white font-semibold mb-2"
          >GET IN TOUCH WITH US
        </span-title>
        <h2 class="font-display text-3xl text-center">Articles & News</h2>
      </div>
    </div>
  </div>
  <div class="bg-white realtive">
    <div class="max-w-container mx-auto pt-[142px] pb-[120px]">
      <div class="flex flex-col items-center justify-start gap-[60px]">
        <div class="grid grid-cols-3 gap-x-11 gap-y-[60px]">
          <blog-card
            imageSrc="BlogFirst.png"
            imageAlr="BlogFirst"
            title="The energy efficiency of the hydrotherapy or swim"
            description="The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
          />
          <blog-card
            imageSrc="BlogSecond.png"
            imageAlr="BlogSecond"
            title="Tips to improve your body via cleansing"
            description="The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
          />
          <blog-card
            imageSrc="BlogThird.png"
            imageAlr="BlogThird"
            title="Experience the beauty at our beauty spa"
            description="The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
          />
          <blog-card
            imageSrc="BlogFourth.jpg"
            imageAlr="BlogFourth"
            title="The best and perfect skincare strategy"
            description="The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
          />
          <blog-card
            imageSrc="BlogFifth.jpg"
            imageAlr="BlogFifth"
            title="Fell the natural reverse aging process"
            description="The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
          />
          <blog-card
            imageSrc="BlogSixth.jpg"
            imageAlr="BlogSixth"
            title="How to make the make-up stay last"
            description="The point of using Lorem Ipsum hiter that using making it look like others readable will get end."
          />
        </div>
        <button
          class="px-[41px] text-black py-6 uppercase font-bold text-[14px] leading-[125%] tracking-[1.68px] border-2 border-blue border-solid"
        >
          VIEW MORE STORIES
        </button>
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

<style></style>
