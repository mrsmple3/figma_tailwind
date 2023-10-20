<template>
  <header-component />
  <div class="relative z-10">
    <img
      src="@/assets/header/BgTeamOffer.png"
      alt="Bg"
      class="pointer-events-none absolute top-0 left-0 bg-no-repeat background w-full h-full"
    />
    <div
      class="flex flex-col items-center pt-[130px] pb-[129px] font-body text-white z-10"
    >
      <div class="flex flex-col items-center max-w-[650px]">
        <span-title
          class="text-title-sm uppercase tracking-wider text-white font-semibold mb-2"
          >Where are here!
        </span-title>
        <h2 class="font-display text-3xl text-center">Our Locations</h2>
      </div>
    </div>
  </div>
  <div class="bg-white z-10">
    <div class="max-w-container mx-auto pt-[124px] pb-[120px] font-body">
      <div class="flex justify-between pt-[46px] relative">
        <img
          src="@/assets/header/BgLocation.png"
          alt="Bg"
          class="pointer-events-none absolute top-0 left-[51px] z-[1]"
        />
        <img
          src="@/assets/header/LocationFirst.png"
          alt="OurService"
          class="z-10 object-contain"
        />
        <div
          class="flex flex-col items-start justify-start max-w-[425px] pt-11"
        >
          <span
            class="text-title-sm font-semibold uppercase tracking-wider text-green-200 mb-[9px]"
            >Columbia
          </span>
          <h2 class="font-display text-2xl text-start max-w-[470px] mb-[50px]">
            Washington D.C
          </h2>
          <div class="flex flex-col gap-[30px] justify-start items-start">
            <div class="flex items-center justify-start gap-[27px]">
              <img src="../assets/header/IconHome.png" alt="Gmail" />
              <div class="flex flex-col gap-2 items-start">
                <h6
                  class="font-display font-bold text-[24px] text-black tracking-wider"
                >
                  Visit Us :
                </h6>
                <span
                  class="text-black font-semibold tracking-wider text-[16px] text-start"
                  >NO.09a, Downtown, SAN DIEAGO, USA</span
                >
              </div>
            </div>
            <div class="flex items-center justify-start gap-[27px]">
              <img src="../assets/header/IconGmail.png" alt="Gmail" />
              <div class="flex flex-col gap-2 items-start">
                <h6
                  class="font-display font-bold text-[24px] text-black tracking-wider"
                >
                  Drop Us :
                </h6>
                <span
                  class="text-black font-semibold tracking-wider text-[16px] text-start"
                  >support@beautyness.com</span
                >
              </div>
            </div>
            <div class="flex items-center justify-start gap-[27px] mb-[20px]">
              <img src="../assets/header/IconPhoneTouch.png" alt="Gmail" />
              <div class="flex flex-col gap-2 items-start">
                <h6
                  class="font-display font-bold text-[24px] text-black tracking-wider"
                >
                  Call Us :
                </h6>
                <span
                  class="text-black font-semibold tracking-wider text-[16px] text-start"
                  >Call: 1-800-123-9999</span
                >
              </div>
            </div>
            <button-reservation class="px-9"
              >MAKE A RESERVATION</button-reservation
            >
          </div>
        </div>
      </div>
      <div class="flex justify-between pt-[120px] relative">
        <div
          class="flex flex-col items-start justify-start max-w-[425px] pt-11"
        >
          <span
            class="text-title-sm font-semibold uppercase tracking-wider text-green-200 mb-[9px]"
            >san francisco
          </span>
          <h2 class="font-display text-2xl text-start max-w-[470px] mb-[50px]">
            New York
          </h2>
          <div class="flex flex-col gap-[30px] justify-start items-start">
            <div class="flex items-center justify-start gap-[27px]">
              <img src="../assets/header/IconHome.png" alt="Gmail" />
              <div class="flex flex-col gap-2 items-start">
                <h6
                  class="font-display font-bold text-[24px] text-black tracking-wider"
                >
                  Visit Us :
                </h6>
                <span
                  class="text-black font-semibold tracking-wider text-[16px] text-start"
                  >NO.09a, Downtown, SAN DIEAGO, USA</span
                >
              </div>
            </div>
            <div class="flex items-center justify-start gap-[27px]">
              <img src="../assets/header/IconGmail.png" alt="Gmail" />
              <div class="flex flex-col gap-2 items-start">
                <h6
                  class="font-display font-bold text-[24px] text-black tracking-wider"
                >
                  Drop Us :
                </h6>
                <span
                  class="text-black font-semibold tracking-wider text-[16px] text-start"
                  >support@beautyness.com</span
                >
              </div>
            </div>
            <div class="flex items-center justify-start gap-[27px] mb-[20px]">
              <img src="../assets/header/IconPhoneTouch.png" alt="Gmail" />
              <div class="flex flex-col gap-2 items-start">
                <h6
                  class="font-display font-bold text-[24px] text-black tracking-wider"
                >
                  Call Us :
                </h6>
                <span
                  class="text-black font-semibold tracking-wider text-[16px] text-start"
                  >Call: 1-800-123-9999</span
                >
              </div>
            </div>
            <button-reservation class="px-9"
              >MAKE A RESERVATION</button-reservation
            >
          </div>
        </div>
        <img
          src="@/assets/header/BgLocation.png"
          alt="Bg"
          class="pointer-events-none absolute top-[76px] right-0 z-[1]"
        />
        <img
          src="@/assets/header/LocationSecond.png"
          alt="OurService"
          class="z-10 object-contain pr-[46px]"
        />
      </div>
      <div class="flex justify-between pt-[120px] relative">
        <img
          src="@/assets/header/BgLocation.png"
          alt="Bg"
          class="pointer-events-none absolute top-[76px] left-[51px] z-[1]"
        />
        <img
          src="@/assets/header/LocationThird.jpg"
          alt="OurService"
          class="z-10 object-contain"
        />
        <div
          class="flex flex-col items-start justify-start max-w-[425px] pt-11"
        >
          <span
            class="text-title-sm font-semibold uppercase tracking-wider text-green-200 mb-[9px]"
            >FRANCE
          </span>
          <h2 class="font-display text-2xl text-start max-w-[470px] mb-[50px]">
            Paris
          </h2>
          <div class="flex flex-col gap-[30px] justify-start items-start">
            <div class="flex items-center justify-start gap-[27px]">
              <img src="../assets/header/IconHome.png" alt="Gmail" />
              <div class="flex flex-col gap-2 items-start">
                <h6
                  class="font-display font-bold text-[24px] text-black tracking-wider"
                >
                  Visit Us :
                </h6>
                <span
                  class="text-black font-semibold tracking-wider text-[16px] text-start"
                  >NO.09a, Downtown, SAN DIEAGO, USA</span
                >
              </div>
            </div>
            <div class="flex items-center justify-start gap-[27px]">
              <img src="../assets/header/IconGmail.png" alt="Gmail" />
              <div class="flex flex-col gap-2 items-start">
                <h6
                  class="font-display font-bold text-[24px] text-black tracking-wider"
                >
                  Drop Us :
                </h6>
                <span
                  class="text-black font-semibold tracking-wider text-[16px] text-start"
                  >support@beautyness.com</span
                >
              </div>
            </div>
            <div class="flex items-center justify-start gap-[27px] mb-[20px]">
              <img src="../assets/header/IconPhoneTouch.png" alt="Gmail" />
              <div class="flex flex-col gap-2 items-start">
                <h6
                  class="font-display font-bold text-[24px] text-black tracking-wider"
                >
                  Call Us :
                </h6>
                <span
                  class="text-black font-semibold tracking-wider text-[16px] text-start"
                  >Call: 1-800-123-9999</span
                >
              </div>
            </div>
            <button-reservation class="px-9"
              >MAKE A RESERVATION</button-reservation
            >
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

<style>
.background {
  z-index: -1;
}
</style>
