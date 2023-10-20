<template>
  <header-component />
  <div class="relative background">
    <img
      src="@/assets/header/BgTeamOffer.png"
      alt="Bg"
      class="pointer-events-none absolute top-0 left-0 bg-no-repeat background w-full h-full"
    />
    <div
      class="flex flex-col items-center pt-[130px] pb-[332px] font-body text-white"
    >
      <div class="flex flex-col items-center max-w-[875px]">
        <span-title
          class="text-title-sm uppercase tracking-wider text-white font-semibold mb-2"
          >By Jessica Smith / Beauty & Wellness
        </span-title>
        <h2 class="font-display text-3xl text-center">
          Certified Health Professionals & Community Medicine
        </h2>
      </div>
    </div>
  </div>
  <div class="max-w-container mx-auto -mt-[278px]">
    <img
      src="@/assets/header/BlogSingleBigPage.jpg"
      alt="Our Blog"
      class="mb-[50px] shadow-lg"
    />
    <div class="flex justify-start items-start gap-[94px] pb-[119px]">
      <div
        class="flex flex-col items-start justify-start gap-[27px] bg-[#EFFCFF] py-[39px] px-[34px] border-[5px] border-solid border-blue-400"
      >
        <div class="flex items-center justify-start gap-6">
          <img
            src="@/assets/header/testimanalsAvatarBoy.png"
            alt="Blog of Chris Jericho"
          />
          <div class="flex flex-col items-start">
            <h6
              class="font-display font-bold text-[20px] text-black leading-[160%]"
            >
              Author - Chris Jericho
            </h6>
            <span
              class="text[16px] tracking-[0.38px] leading-[154%] font-normal"
              >Chairman & Director</span
            >
          </div>
        </div>
        <p class="text-black-400 text-xs max-w-[341px] tracking-[0.36px]">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend tools that generator
          on the Internet.
        </p>
        <div class="flex items-center gap-[15px]">
          <h6
            class="font-display font-bold text-[20px] text-black leading-[160%]"
          >
            Share us on :
          </h6>
          <div class="flex items-center justify-end gap-[10px]">
            <img src="@/assets/header/1.png" alt="f" />
            <img src="@/assets/header/2.png" alt="Twitter" />
            <img src="@/assets/header/3.png" alt="LinkedIn" />
            <img src="@/assets/header/4.png" alt="Instagram" />
          </div>
        </div>
      </div>
      <div class="max-w-[694px] flex flex-col items-start">
        <p class="text-black-400 text-xs tracking-[0.36px] mb-[13px]">
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </p>
        <h3 class="text-2xl text-black font-display mb-[13px]">
          Take a look to our collections
        </h3>
        <p class="text-black-400 text-xs tracking-[0.36px] mb-[30px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing.
        </p>
        <ul
          class="flex flex-col items-start gap-[26px] font-body list-disc text-black-400 text-xs tracking-[0.36px] pl-[22px] mb-[50px]"
        >
          <li class="indent-[5px]">
            Health Care is committed to the pillars of academic health care
          </li>
          <li class="indent-[5px]">
            We will strengthen local health care and improve delivery system
          </li>
          <li class="indent-[5px]">
            Providing optimal multidisciplinary health care and developing
          </li>
        </ul>
        <div class="flex flex-col items-center gap-[14px] mb-[50px]">
          <img src="@/assets/header/BlogContentImg.png" alt="Img" />
          <span class="text-black-400 text-xs text-center"
            >Face Massage - Skin Care</span
          >
        </div>
        <h3 class="text-2xl text-black font-display mb-[13px]">
          Feel Like Home With Best Beauty Tips
        </h3>
        <p class="text-black-400 text-xs tracking-[0.36px] mb-[40px]">
          It was popularised in the 1960s with the release of Letraset
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <div
          class="bg-[#EFFCFF] border-l-[28px] border-solid border-blue-400 py-[35px] pl-[43px] pr-[45.88px] mb-[40px]"
        >
          <p class="text-xs tracking-[0.36px] text-black">
            “Crowdsource term sheet freemium beta stealth responsive web design
            niche market rock star channels. Supply chain market graphical user
            interface assets.”
          </p>
        </div>
        <ul
          class="flex flex-col text-xs text-black-400 list-decimal gap-[24px]"
        >
          <li class="max-w-[540px]">
            Your wellness goals and the areas of preference, then unwind with a
            customized.
          </li>
          <li>
            Discover better health & wellness by using our beautician ratings &
            reviews to make your choice.
          </li>
          <li class="max-w-[600px]">
            Professionals team is trained to provide you with the care and
            support you need during this difficult time.
          </li>
          <li>
            We will fax the requested records directly to the Qualified
            Beautician.
          </li>
        </ul>
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
