<template>
  <div class="flex flex-col items-center justify-start gap-[25px]">
    <img :src="imageSrc" :alt="imageAlt" />
    <div class="max-w-[336px] mx-auto flex flex-col items-center justify-start">
      <h4 class="text-[24px] font-bold font-display mb-1">{{ name }}</h4>
      <span
        class="text-title-sm uppercase tracking-wider text-[#5C8692] mb-2 font-semibold"
        >{{ title }}
      </span>
      <p class="text-xs text-black-400 font-normal leading-7 text-center">
        {{ description }}
      </p>
    </div>
    <div class="flex items-center justify-center gap-[30px]">
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
        src="@/assets/header/twitter.png"
        alt="LinkedIn"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "team-card",
  props: {
    imageSrc: String,
    imageAlt: String,
    name: String,
    title: String,
    description: String,
  },
};
</script>

<style></style>
