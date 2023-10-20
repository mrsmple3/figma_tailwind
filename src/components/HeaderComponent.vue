<template>
  <header
    class="flex flex-row justify-between items-center max-w-[1800px] mx-auto bg-white h-[125px]"
  >
    <div class="flex flex-row items-center gap-9">
      <router-link to="/" class="flex flex-row gap-3 font-display"
        ><img src="../assets/header/Logo.png" alt="Logo" class="w-8" />
        <span class="text-[28px] font-bold leading-9"
          >Beautyness</span
        ></router-link
      >

      <div class="flex flex-row gap-3 items-center">
        <img src="../assets/header/Phone.png" alt="phone" class="w-5 h-5" />
        <span class="font-body text-xs whitespace-nowrap font-semibold">
          Call Us - (+22) 123 456 7890</span
        >
      </div>
    </div>
    <div class="flex flex-row gap-8 items-center">
      <nav>
        <ul class="flex flex-row gap-16 text-xs">
          <router-link to="/">
            <li class="cursor-pointer">Home</li>
          </router-link>
          <div>
            <li
              class="flex justify-between items-center gap-1 cursor-pointer relative"
              @mouseover="isOver = true"
              @mouseleave="isOver = false"
            >
              Pages
              <img
                class="object-cover max-w-[20px] transition-transform duration-200"
                src="../assets/header/down-arrow.png"
                alt="V"
              />
              <div
                v-show="isOver"
                class="z-20 flex items-center px-4 py-2 absolute top-7 -left-24 max-w-max transition-all bg-[#EFFCFF] border-2 border-solid border-blue-400"
              >
                <div
                  class="flex flex-col items-start gap-2 border-r-2 border-solid border-blue-400"
                >
                  <router-link to="/service">
                    <span
                      class="text-xs text-black font-semibold whitespace-nowrap p-3"
                      >Service</span
                    >
                  </router-link>
                  <hr
                    class="border-[0.5px] border-solid border-blue-400 w-full"
                  />
                  <router-link to="/service-single">
                    <span
                      class="text-xs text-black font-semibold whitespace-nowrap p-3"
                      >Service-Single</span
                    >
                  </router-link>
                </div>
                <div
                  class="flex flex-col items-start gap-2 border-r-2 border-solid border-blue-400"
                >
                  <router-link to="/team">
                    <span
                      class="text-xs text-black font-semibold whitespace-nowrap p-3"
                      >Team</span
                    >
                  </router-link>
                  <hr
                    class="border-[0.5px] border-solid border-blue-400 w-full"
                  />
                  <router-link to="/team-single">
                    <span
                      class="text-xs text-black font-semibold whitespace-nowrap p-3"
                      >Team-Single</span
                    >
                  </router-link>
                </div>
                <div
                  class="flex flex-col items-start gap-2 border-r-2 border-solid border-blue-400"
                >
                  <router-link to="/blog">
                    <span
                      class="text-xs text-black font-semibold whitespace-nowrap p-3"
                      >Blog</span
                    >
                  </router-link>
                  <hr
                    class="border-[0.5px] border-solid border-blue-400 w-full"
                  />
                  <router-link to="/blog-single">
                    <span
                      class="text-xs text-black font-semibold whitespace-nowrap p-3"
                      >Blog-Single</span
                    >
                  </router-link>
                </div>
                <router-link to="/location">
                  <span
                    class="text-xs text-black font-semibold whitespace-nowrap p-3"
                    >Location</span
                  >
                </router-link>
              </div>
            </li>
          </div>

          <router-link to="/about">
            <li class="cursor-pointer">About</li>
          </router-link>
          <router-link to="/services">
            <li class="cursor-pointer">Services</li>
          </router-link>
          <router-link to="/contact">
            <li class="cursor-pointer">Contact</li>
          </router-link>
        </ul>
      </nav>
      <ul class="flex felx-row gap-[30px] item-center max-h-[100px]">
        <li>
          <img
            src="../assets/header/facebook-fill.png"
            alt="f"
            class="max-w-[100px]"
          />
        </li>
        <li>
          <img
            src="../assets/header/linkedin-fill.png"
            alt="in"
            class="max-w-[100px]"
          />
        </li>
        <li>
          <img
            src="../assets/header/twitter.png"
            alt="T"
            class="max-w-[100px]"
          />
        </li>
      </ul>
      <button
        class="flex felx-row gap-3 item-center px-8 py-4 font-[14px] leading-4 tracking-widest font-body text-white bg-blue-400"
      >
        <img src="../assets/header/Calendar.png" alt="📅" /> RESERVATION
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOver: false,
    };
  },
};
</script>
