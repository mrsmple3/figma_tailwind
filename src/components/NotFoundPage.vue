<template>
  <header-component />
  <div class="relative z-10">
    <img
      src="@/assets/header/Background404Offer.png"
      alt="Bg"
      class="pointer-events-none absolute top-0 left-0 bg-no-repeat background"
    />
    <div
      class="flex flex-col items-center pt-[130px] pb-[111px] font-body text-white"
    >
      <div class="flex flex-col items-center max-w-[650px]">
        <span class="text-title-sm uppercase tracking-wider text-white mb-2"
          >Page Not Found
        </span>
        <h2 class="font-display text-3xl text-center">404 Error Page</h2>
      </div>
    </div>
  </div>
  <div class="relative">
    <img
      src="@/assets/header/Background404.png"
      alt="Bg"
      class="absolute top-0 left-0 min-h-full"
    />
    <div
      class="max-w-[563px] mx-auto flex flex-col items-center py-[333px] pb-[269px] font-body relative"
    >
      <img src="@/assets/header/404.png" class="mb-[39px]" />
      <h3 class="text-black text-xl mb-4 text center font-display">
        Page not Found!!!
      </h3>
      <p
        class="text-center text-[19px] leading-[30px] tracking-tight text-black-400 mb-[39px]"
      >
        The page you are looking for doesn't exist. Please try searching for
        some other page, or return to the website's homepage to find what you're
        looking for.
      </p>
      <router-link
        to="/"
        class="text-[14px] text-white leading-4 tracking-wider px-16 py-6 bg-blue-400"
      >
        BACK TO HOME
      </router-link>
    </div>
  </div>
  <footer-component />
</template>

<script>
import FooterComponent from "./FooterComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  name: "NotFoundPage",
};
</script>
