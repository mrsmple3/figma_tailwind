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
        <span
          class="text-title-sm uppercase tracking-wider text-white mb-2 font-semibold"
          >GET IN TOUCH WITH US
        </span>
        <h2 class="font-display text-3xl text-center">
          We Are Ready To Assist You In 24x7
        </h2>
      </div>
    </div>
  </div>
  <div class="bg-white z-10">
    <div class="max-w-container mx-auto pt-36 pb-[118px] font-body">
      <div class="flex justify-between pt-[41px] relative">
        <img
          src="../assets/header/BgContactTouch.png"
          alt="Bg"
          class="pointer-events-none absolute top-0 left-[45px] background"
        />
        <img
          src="../assets/header/TouchImg.png"
          alt="OurService"
          class="z-10 object-contain"
        />
        <div class="flex flex-col items-start justify-start max-w-[534px]">
          <span
            class="text-title-sm font-semibold uppercase tracking-wider text-green-200 mb-[9px]"
            >GET IN TOUCH WITH US
          </span>
          <h2 class="font-display text-3xl text-start max-w-[435px] mb-[23px]">
            We Are Ready To Assist You In 24x7
          </h2>
          <p class="text-xs text-black text-start mb-[43px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to many
            desktop publishing packages.
          </p>
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
            <div class="flex items-center justify-start gap-[27px]">
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#EBF3F5] z-10">
    <div class="max-w-[1010px] mx-auto py-[120px]">
      <div
        class="flex flex-col items-center justify-center max-w-[622px] mx-auto mb-[65px]"
      >
        <span
          class="text-title-sm font-semibold uppercase tracking-wider text-green-200 mb-1"
          >SCHEDULE YOUR PRESENCE
        </span>
        <h2 class="font-display text-3xl text-center max-w-[453px] mb-[20px]">
          Make an Appointment
        </h2>
        <p class="text-xs text-black-400 text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div
        class="bg-white px-[75px] py-[66px] flex flex-col gap-[15px] shadow-md"
      >
        <div class="relative">
          <label
            v-if="!isFocused.name"
            for="name"
            class="absolute left-[15px] top-1/2 -translate-y-1/2 flex gap-[15px] pointer-events-none"
            ><img src="../assets/header/IconUser.png" alt="User" />
            <span class="text-xs leading-[160%] tracking-normal text-black-400"
              >Name</span
            ></label
          >
          <input
            name="name"
            type="text"
            class="px-[15px] py-[18px] border border-solid border-blue w-full outline-none"
            placeholder="     "
            @focus="isFocused.name = true"
            @blur="isFocused.name = false"
          />
        </div>
        <div class="relative">
          <label
            v-if="!isFocused.email"
            for="name"
            class="absolute left-[15px] top-1/2 -translate-y-1/2 flex gap-[15px] pointer-events-none"
            ><img src="../assets/header/IconMail.png" alt="User" />
            <span class="text-xs leading-[160%] tracking-normal text-black-400"
              >Email</span
            ></label
          >
          <input
            name="name"
            type="text"
            class="px-[15px] py-[18px] border border-solid border-blue w-full outline-none"
            placeholder="     "
            @focus="isFocused.email = true"
            @blur="isFocused.email = false"
          />
        </div>
        <div class="relative">
          <label
            v-if="!isFocused.phone"
            for="name"
            class="absolute left-[15px] top-1/2 -translate-y-1/2 flex gap-[15px] pointer-events-none"
            ><img src="../assets/header/IconPhone.png" alt="User" />
            <span class="text-xs leading-[160%] tracking-normal text-black-400"
              >Phone</span
            ></label
          >
          <input
            name="name"
            type="text"
            class="px-[15px] py-[18px] border border-solid border-blue w-full outline-none"
            placeholder="     "
            @focus="isFocused.phone = true"
            @blur="isFocused.phone = false"
          />
        </div>
        <div class="relative">
          <label
            v-if="!isFocused.service"
            for="name"
            class="absolute left-[15px] top-1/2 -translate-y-1/2 flex gap-[15px] pointer-events-none"
            ><img src="../assets/header/IconBook.png" alt="User" />
            <span class="text-xs leading-[160%] tracking-normal text-black-400"
              >Service You Need</span
            ></label
          >
          <input
            name="name"
            type="text"
            class="px-[15px] py-[18px] border border-solid border-blue w-full outline-none"
            placeholder="     "
            @focus="isFocused.service = true"
            @blur="isFocused.service = false"
          />
        </div>
        <div class="relative">
          <label
            v-if="!isFocused.note"
            for="name"
            class="absolute left-[15px] top-[18px] flex gap-[15px] pointer-events-none"
            ><img src="../assets/header/IconEdit.svg" alt="User" />
            <span class="text-xs leading-[160%] tracking-normal text-black-400"
              >Any Note For Us</span
            ></label
          >
          <input
            name="name"
            type="text"
            class="px-[15px] py-[18px] pb-28 border border-solid border-blue w-full outline-none"
            placeholder="     "
            @focus="isFocused.note = true"
            @blur="isFocused.note = false"
          />
        </div>
        <button
          class="px-[109px] py-6 bg-blue uppercase text-white font-bold text-[14px] leading-[125%] tracking-[1.68px]"
        >
          GET AN APPOINTMENT
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
  data() {
    return {
      isFocused: {
        name: false,
        email: false,
        phone: false,
        service: false,
        note: false,
      },
    };
  },
};
</script>

<style>
.background {
  z-index: 0;
}
</style>
