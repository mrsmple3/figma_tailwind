<template>
  <div class="flex flex-col max-w-[370px]">
    <img :src="require('@/assets/header/' + imageSrc)" :alt="imageAlt" />
    <div class="bg-[#EDF5F7] px-[26px] py-[30px] flex flex-col items-start">
      <span
        class="text-[13px] leading-[125%] uppercase tracking-[0.78px] text-[#5C8692] font-bold mb-2"
        >11TH AUGUST 2021
        <span class="text-[#272D32] ml-[7px] mr-[10px] text-xs">—</span>
        BY PETER BERGSON
      </span>
      <h5 class="text-base font-display mb-[14px]">
        {{ title }}
      </h5>
      <p
        class="text-xs text-black-400 cursor-pointer max-w-[317px]"
        :class="{ three_note: isTruncated }"
        @click="isTruncated = !isTruncated"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-card",
  props: {
    imageSrc: String,
    imageAlt: String,
    title: String,
    description: String,
  },
};
</script>

<style>
.three_note {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
