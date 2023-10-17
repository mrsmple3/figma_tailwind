<template>
  <header-component />
  <div class="bg-offer-img-left bg-cover relative z-10">
    <img
      src="../assets/header/Background_offer_right.jpg"
      alt="background"
      class="absolute top-0 right-0 offer-img-right"
    />
    <div class="max-w-container mx-auto flex">
      <div class="max-w-lg pt-[235px] pb-[209px] mr-[70px]">
        <div class="flex flex-col mb-6 gap-[7px] font-body">
          <div class="flex gap-2">
            <img src="../assets/header/Icon_i.png" alt="!" />
            <span
              class="text-[15px] text-blue tracking-[10%] leading-[154.5%] uppercase font-semibold"
              >Welcome to Beautyness!!!</span
            >
          </div>
          <div class="">
            <h1 class="text-4xl text-[#141414] max-w-[510px] font-display">
              Beauty is power a smile is its sword.
            </h1>
          </div>
        </div>
        <div class="flex flex-col gap-[34px]">
          <p class="text-black-400 text-[19px] max-w-[508px]">
            There are many variation of passages are Ipsum available, majority
            have suffered alteration in some form.
          </p>
          <button
            class="max-w-[250px] py-6 bg-blue uppercase text-white font-bold text-[14px] leading-4 tracking-[1.68px]"
          >
            Make a reservation
          </button>
        </div>
      </div>
      <div class="pt-[190px]">
        <img
          src="../assets/header/offer_main.png"
          alt="Girl"
          class="shadow-md"
        />
      </div>
    </div>
  </div>
  <div class="max-w-[1200px] mx-auto py-[150px]">
    <div class="grid grid-cols-3 gap-x-[105px]">
      <div class="m-w-[330px] flex flex-col font-body">
        <img
          src="../assets/header/homePageCard_1.png"
          alt="First example"
          class="mb-[26px]"
        />
        <h4 class="text-lg font-display mb-3">Spa & Massage</h4>
        <p class="text-xs text-black-400 mb-[30px]">
          If you are going to use a passage offer Lorem Ipsum, you need to be
          sure hidden in the middle of text.
        </p>
        <button
          class="px-[43px] pb-[19px] pt-[18px] font-extrabold text-[14px] tracking-[1.68px] leading-4 uppercase max-w-max border-2 border-solid border-blue"
        >
          READ MORE
        </button>
      </div>
      <div class="m-w-[330px] flex flex-col font-body">
        <img
          src="../assets/header/homePageCard_2.png"
          alt="First example"
          class="mb-[26px]"
        />
        <h4 class="text-lg font-display mb-3">Hair & Beauty</h4>
        <p class="text-xs text-black-400 mb-[30px]">
          If you are going to use a passage offer Lorem Ipsum, you need to be
          sure hidden in the middle of text.
        </p>
        <button
          class="px-[43px] pb-[19px] pt-[18px] font-extrabold text-[14px] tracking-[1.68px] leading-4 uppercase max-w-max border-2 border-solid border-blue"
        >
          READ MORE
        </button>
      </div>
      <div class="m-w-[330px] flex flex-col font-body">
        <img
          src="../assets/header/homePageCard_2.png"
          alt="First example"
          class="mb-[26px]"
        />
        <h4 class="text-lg font-display mb-3">Body Treatments</h4>
        <p class="text-xs text-black-400 mb-[30px]">
          If you are going to use a passage offer Lorem Ipsum, you need to be
          sure hidden in the middle of text.
        </p>
        <button
          class="px-[43px] pb-[19px] pt-[18px] font-extrabold text-[14px] tracking-[1.68px] leading-4 uppercase max-w-max border-2 border-solid border-blue"
        >
          READ MORE
        </button>
      </div>
    </div>
  </div>
  <div class="bg-[#EBF3F5] z-10">
    <div class="max-w-container mx-auto py-[150px]">
      <div class="flex pt-7 relative justify-between items-start">
        <img
          src="../assets/header/homePageAboutBackground.png"
          alt="Background"
          class="absolute right-0 top-0 background"
        />
        <div class="max-w-[529px] font-body">
          <div class="flex flex-col mb-9">
            <span
              class="text-title-sm uppercase mb-[9px] text-[#5C8692] font-semibold"
              >About Us</span
            >
            <h3 class="text-2xl max-w-[435px] mb-4 font-display">
              The Beauty is about being Comfortable in your own skin!
            </h3>
            <p class="text-xs text-black-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words which don't look even many
              desktop publishing packages.
            </p>
          </div>
          <div class="grid grid-cols-3 gap-[10px]">
            <div
              class="flex flex-col gap-[14px] items-center py-[21px] px-9 border border-[#1E2C30] border-solid max-w-[165px] bg-white"
            >
              <img
                src="../assets/header/IconRelaxPerson.png"
                alt="RelaxPerson"
              />
              <h4 class="text-base font-display text-center">Beauty Experts</h4>
            </div>
            <div
              class="flex flex-col gap-[14px] items-center py-[21px] px-9 border border-[#1E2C30] border-solid max-w-[165px] bg-white"
            >
              <img src="../assets/header/IconRelaxStone.svg" alt="RelaxStone" />
              <h4 class="text-base font-display text-center">Great Services</h4>
            </div>
            <div
              class="flex flex-col gap-[14px] items-center py-[21px] px-9 border border-[#1E2C30] border-solid max-w-[165px] bg-white"
            >
              <img src="../assets/header/IconRelaxOil.png" alt="RelaxOil" />
              <h4 class="text-base font-display text-center">100% Genuine</h4>
            </div>
          </div>
        </div>
        <img src="../assets/header/About.png" alt="PictureExampleLook" />
      </div>
    </div>
  </div>
  <div class="bg-white z-10 relative">
    <img
      src="../assets/header/OurServiceBg.png"
      alt="OurServiceBg"
      class="absolute top-1/2 left-[45%] background"
    />
    <div class="max-w-container mx-auto pt-[145px] font-body">
      <div class="flex flex-col gap-[9px] items-center mb-[50px]">
        <span
          class="text-title-sm uppercase tracking-wider mb-[9px] text-center text-[#5C8692] font-semibold"
          >Our Services</span
        >
        <h3 class="text-2xl font-display text-center max-w-[660px]">
          We are Experienced in making you very Beautiful
        </h3>
      </div>
      <div class="flex justify-between">
        <img
          src="../assets/header/OurServicesFirst.png"
          alt="OurServiceExample"
        />
        <div class="flex flex-col gap-[35px] max-w-[530px] pt-[30px]">
          <div
            class="flex flex-col pb-[22px] border-b border-solid border-[#555555]"
          >
            <h4 class="text-xs font-display font-extrabold">
              Face masks .......................................
              <span class="text-xs text-black-400">from</span> $48.00
            </h4>
            <p class="text-xs text-black-400">
              The versions have evolved over the sometimes by accident.
            </p>
          </div>
          <div
            class="flex flex-col pb-[22px] border-b border-solid border-[#555555]"
          >
            <h4 class="text-xs font-display font-extrabold">
              Geothermal spa .................................
              <span class="text-xs text-black-400">from</span> $54.00
            </h4>
            <p class="text-xs text-black-400">
              The versions have evolved over the sometimes by accident.
            </p>
          </div>
          <div
            class="flex flex-col pb-[22px] border-b border-solid border-[#555555]"
          >
            <h4 class="text-xs font-display font-extrabold">
              Full body massage .............................
              <span class="text-xs text-black-400">from</span> $54.00
            </h4>
            <p class="text-xs text-black-400">
              The versions have evolved over the sometimes by accident.
            </p>
          </div>
          <div
            class="flex flex-col pb-[22px] border-b border-solid border-[#555555]"
          >
            <h4 class="text-xs font-display font-extrabold">
              Sauna relax .......................................
              <span class="text-xs text-black-400">from</span> $73.00
            </h4>
            <p class="text-xs text-black-400">
              The versions have evolved over the sometimes by accident.
            </p>
          </div>
          <button
            class="border-2 border-solid border-[#5C8692] pt-[23px] pb-[24px] text-black text-[14px] font-extrabold tracking-[1.68px] leading-[125%] max-w-[249px]"
          >
            GET AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>
    <div class="max-w-container mx-auto pb-[145px] font-body">
      <div class="flex justify-between">
        <div class="flex flex-col gap-[35px] max-w-[530px] pt-[127px]">
          <div
            class="flex flex-col pb-[22px] border-b border-solid border-[#555555]"
          >
            <h4 class="text-xs font-display font-extrabold">
              Face masks .......................................
              <span class="text-xs text-black-400">from</span> $48.00
            </h4>
            <p class="text-xs text-black-400">
              The versions have evolved over the sometimes by accident.
            </p>
          </div>
          <div
            class="flex flex-col pb-[22px] border-b border-solid border-[#555555]"
          >
            <h4 class="text-xs font-display font-extrabold">
              Geothermal spa .................................
              <span class="text-xs text-black-400">from</span> $54.00
            </h4>
            <p class="text-xs text-black-400">
              The versions have evolved over the sometimes by accident.
            </p>
          </div>
          <div
            class="flex flex-col pb-[22px] border-b border-solid border-[#555555]"
          >
            <h4 class="text-xs font-display font-extrabold">
              Full body massage .............................
              <span class="text-xs text-black-400">from</span> $54.00
            </h4>
            <p class="text-xs text-black-400">
              The versions have evolved over the sometimes by accident.
            </p>
          </div>
          <div
            class="flex flex-col pb-[22px] border-b border-solid border-[#555555]"
          >
            <h4 class="text-xs font-display font-extrabold">
              Sauna relax .......................................
              <span class="text-xs text-black-400">from</span> $73.00
            </h4>
            <p class="text-xs text-black-400">
              The versions have evolved over the sometimes by accident.
            </p>
          </div>
          <button
            class="border-2 border-solid border-[#5C8692] pt-[23px] pb-[24px] text-black text-[14px] font-extrabold tracking-[1.68px] leading-[125%] max-w-[249px]"
          >
            GET AN APPOINTMENT
          </button>
        </div>
        <img
          src="../assets/header/OurServicesSecond.jpg"
          alt="OurServiceExample"
        />
      </div>
    </div>
  </div>
  <div class="bg-[#EDF5F7] z-10 relative">
    <div class="max-w-container mx-auto py-36 font-body">
      <div class="flex flex-col gap-[2px] items-center mb-10">
        <span
          class="text-title-sm uppercase tracking-wider text-center text-[#5C8692] font-semibold"
          >Testimonials</span
        >
        <h3 class="text-2xl font-display text-center max-w-[660px]">
          What our Customers says...
        </h3>
      </div>
      <div class="flex justify-between items-start">
        <div class="max-w-[582px]">
          <div class="py-11 px-12 bg-white">
            <p
              class="max-w-[485px] text-[19px] leading-8 font-normal text-[#141414]"
            >
              “ It is a long established fact that a reader will be tracked
              distracted by the readable content of a page is when looking at
              its layout. The point of using Lorem of distribution it look like
              readable English “
            </p>
          </div>
          <div
            class="min-w-[480px] px-[50px] py-[26px] flex justify-between items-center bg-[#1E2C30]"
          >
            <div class="flex justify-between items-center gap-5">
              <img src="../assets/header/testimanalsAvatarBoy.png" alt="Boy" />
              <div class="flex flex-col justify-start">
                <img
                  src="../assets/header/FiveStars.svg"
                  alt="*****"
                  class="max-w-[81px]"
                />
                <h6
                  class="text-base text-[20px] font-bold font-display text-white"
                >
                  James Williams
                </h6>
                <span
                  class="text-[14px] text-white leading-[160%] tracking-wide"
                  >United States</span
                >
              </div>
            </div>
            <img src="../assets/header/quotationMarks.png" alt="\'\'''" />
          </div>
        </div>
        <div class="max-w-[582px]">
          <div class="py-11 px-12 bg-white">
            <p
              class="max-w-[485px] text-[19px] leading-8 font-normal text-[#141414]"
            >
              “ It is a long established fact that a reader will be tracked
              distracted by the readable content of a page is when looking at
              its layout. The point of using Lorem of distribution it look like
              readable English “
            </p>
          </div>
          <div
            class="min-w-[480px] px-[50px] py-[26px] flex justify-between items-center bg-[#1E2C30]"
          >
            <div class="flex justify-between items-center gap-5">
              <img src="../assets/header/testimanalsAvatarGirl.png" alt="Boy" />
              <div class="flex flex-col justify-start">
                <img
                  src="../assets/header/FiveStars.svg"
                  alt="*****"
                  class="max-w-[81px]"
                />
                <h6
                  class="text-base text-[20px] font-bold font-display text-white"
                >
                  Lieo Jessica
                </h6>
                <span
                  class="text-[14px] text-white leading-[160%] tracking-wide"
                  >United Kingdom</span
                >
              </div>
            </div>
            <img src="../assets/header/quotationMarks.png" alt="\'\'''" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white z-10">
    <div class="max-w-container mx-auto pt-36 font-body pb-40">
      <div class="flex flex-col gap-[9px] items-center mb-11">
        <span
          class="text-title-sm uppercase tracking-wider text-center text-[#5C8692] font-semibold"
          >Our Awesome Benefits</span
        >
        <h3 class="text-2xl font-display text-center max-w-[660px]">
          Actually what you’ll get from
        </h3>
      </div>
      <div class="grid grid-cols-3 gap-[105px] gap-x-[105px] gap-y-[35px]">
        <div class="flex flex-col items-start gap-[25px]">
          <img src="../assets/header/IconRight.png" alt="V" />
          <div class="flex flex-col items-start max-w-[330px]">
            <h3 class="text-lg font-display">Optimised Energy Efficiency</h3>
            <p class="text-xs text-black-400">
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-start gap-[25px]">
          <img src="../assets/header/IconRight.png" alt="V" />
          <div class="flex flex-col items-start max-w-[330px]">
            <h3 class="text-lg font-display">Multi-faceted Water Filtration</h3>
            <p class="text-xs text-black-400">
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-start gap-[25px]">
          <img src="../assets/header/IconRight.png" alt="V" />
          <div class="flex flex-col items-start max-w-[330px]">
            <h3 class="text-lg font-display">
              Uncompromising Quality and Durability
            </h3>
            <p class="text-xs text-black-400">
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-start gap-[25px]">
          <img src="../assets/header/IconRight.png" alt="V" />
          <div class="flex flex-col items-start max-w-[330px]">
            <h3 class="text-lg font-display">
              An Ultra-Pampering Spa Experience
            </h3>
            <p class="text-xs text-black-400">
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-start gap-[25px]">
          <img src="../assets/header/IconRight.png" alt="V" />
          <div class="flex flex-col items-start max-w-[330px]">
            <h3 class="text-lg font-display">
              Easy Care for Unparalleled Enjoyment
            </h3>
            <p class="text-xs text-black-400">
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-start gap-[25px]">
          <img src="../assets/header/IconRight.png" alt="V" />
          <div class="flex flex-col items-start max-w-[330px]">
            <h3 class="text-lg font-display">Optimised Energy Efficiency</h3>
            <p class="text-xs text-black-400">
              The point of using Lorem Ipsum is that using making it look like
              readable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#EDF5F7] z-10">
    <div
      class="max-w-container mx-auto py-[132px] font-body flex items-center justify-between"
    >
      <div class="flex flex-col items-start max-w-[540px]">
        <div
          class="flex flex-col gap-[9px] items-start mb-[14px] max-w-[435px]"
        >
          <span
            class="text-title-sm uppercase tracking-wider text-[#5C8692] font-semibold"
            >Flat Discount
          </span>
          <h3 class="text-2xl font-display max-w-[660px]">
            Claim upto 50% off er on ‍the most popular services...
          </h3>
        </div>
        <p class="text-xs leading-[170%] tracking-normal text-black-400 mb-9">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, buying to injected
          humour, or randomised words.
        </p>
        <div class="flex max-w-[455px]">
          <div
            class="flex flex-col items-start px-10 py-[18px] bg-white gap-[18px]"
          >
            <div class="flex items-start gap-[19px]">
              <img
                src="../assets/header/ThreeNotes.svg"
                alt="..."
                class="pt-2"
              />
              <div class="flex flex-col items-start">
                <h6
                  class="font-extrabold text-[14px] text-black leading-[150%] tracking-[8%]"
                >
                  MAIL US :
                </h6>
                <p class="text-black text-[15px] leading-[150%]">
                  info@beautyness.com
                </p>
              </div>
            </div>
            <div class="flex items-start gap-[19px]">
              <img
                src="../assets/header/ThreeNotes.svg"
                alt="..."
                class="pt-2"
              />
              <div class="flex flex-col items-start">
                <h6
                  class="font-extrabold text-[14px] text-black leading-[150%] tracking-[8%]"
                >
                  CALL US :
                </h6>
                <p class="text-black text-[15px] leading-[150%]">
                  (+22) 123 4568 009
                </p>
              </div>
            </div>
          </div>
          <div class="bg-[#1E2C30] px-[34px] py-3 flex flex-col items-center">
            <span
              class="text-white text-[15px] leading-[175%] tracking-[10%] uppercase mb-[6px]"
              ><span
                class="text-white text-[15px] leading-[175%] tracking-[10%] uppercase mr-[6px]"
                >-</span
              >
              Get Flat
              <span
                class="text-white text-[15px] leading-[175%] tracking-[10%] uppercase ml-[6px]"
                >-</span
              ></span
            >
            <img src="../assets/header/Icon50%.png" alt="50%" class="mb-2" />
            <span class="text-white text-[18px] leading-[175%] tracking-[2%]"
              >Discount</span
            >
          </div>
        </div>
      </div>
      <div
        class="bg-white px-[75px] py-[66px] flex flex-col gap-[15px] shadow-xl w-[550px]"
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
          class="py-6 bg-blue uppercase text-white font-bold text-[14px] leading-[125%] tracking-[1.68px]"
        >
          GET AN APPOINTMENT
        </button>
      </div>
    </div>
  </div>
  <div class="bg-white">
    <div class="max-w-container pt-[145px] pb-[150px] mx-auto font-body">
      <div class="flex flex-col gap-[40px] items-center">
        <div
          class="flex flex-col gap-[9px] items-center mb-[14px] max-w-[435px]"
        >
          <span
            class="text-title-sm uppercase tracking-wider text-[#5C8692] font-semibold"
            >Our Blog
          </span>
          <h3 class="text-2xl font-display max-w-[660px]">Latest Updates</h3>
        </div>
        <div class="flex gap-12 items-start">
          <div class="flex flex-col max-w-[370px]">
            <img src="../assets/header/BlogFirst.png" alt="BlogFirst" />
            <div
              class="bg-[#EDF5F7] px-[26px] py-[30px] flex flex-col items-start"
            >
              <span
                class="text-[13px] leading-[125%] uppercase tracking-[0.78px] text-[#5C8692] font-bold mb-2"
                >11TH AUGUST 2021
                <span class="text-[#272D32] ml-[7px] mr-[10px] text-xs">—</span>
                BY PETER BERGSON
              </span>
              <h5 class="text-base font-display mb-[14px]">
                The energy efficiency of the hydrotherapy or swim
              </h5>
              <p class="text-xs text-black-400">
                The point of using Lorem Ipsum hiter that using making it look
                like others readable will get end.
              </p>
            </div>
          </div>
          <div class="flex flex-col max-w-[370px]">
            <img src="../assets/header/BlogSecond.png" alt="BlogFirst" />
            <div
              class="bg-[#EDF5F7] px-[26px] py-[30px] flex flex-col items-start"
            >
              <span
                class="leading-[125%] text-[13px] uppercase tracking-[0.78px] text-[#5C8692] font-bold mb-2"
                >11TH AUGUST 2021
                <span class="text-[#272D32] ml-[7px] mr-[10px] text-xs">—</span>
                BY PETER BERGSON
              </span>
              <h5 class="text-base font-display mb-[14px]">
                The energy efficiency of the hydrotherapy or swim
              </h5>
              <p class="text-xs text-black-400">
                The point of using Lorem Ipsum hiter that using making it look
                like others readable will get end.
              </p>
            </div>
          </div>
          <div class="flex flex-col max-w-[370px]">
            <img src="../assets/header/BlogThird.png" alt="BlogFirst" />
            <div
              class="bg-[#EDF5F7] px-[26px] py-[30px] flex flex-col items-start"
            >
              <span
                class="leading-[125%] text-[13px] uppercase tracking-[0.78px] text-[#5C8692] font-bold mb-2"
                >11TH AUGUST 2021
                <span class="text-[#272D32] ml-[7px] mr-[10px] text-xs">—</span>
                BY PETER BERGSON
              </span>
              <h5 class="text-base font-display mb-[14px]">
                The energy efficiency of the hydrotherapy or swim
              </h5>
              <p class="text-xs text-black-400">
                The point of using Lorem Ipsum hiter that using making it look
                like others readable will get end.
              </p>
            </div>
          </div>
        </div>
        <button
          class="uppercase px-10 pb-6 pt-[23px] border-2 border-solid border-[#5C8692] text-black text-[14px] font-extrabold tracking-[1.68px] leading-[125%]"
        >
          VIEW MORE STORIES
        </button>
      </div>
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
  z-index: -1;
}
.offer-img-right {
  z-index: -1;
}
</style>
