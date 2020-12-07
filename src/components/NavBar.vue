<template>
  <div>
    <div
      class="relative max-w-screen-xl pt-8 mx-auto pb-14 sm:pb-14 md:pb-16 lg:pb-18"
    >
      <div class="max-w-screen-xl mx-auto sm:px-6">
        <nav
          class="relative flex items-center justify-between sm:h-10 md:justify-center"
        >
          <div
            class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
          >
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#" aria-label="Home">
                <BaseImg src="square-logo.svg" class="ml-2 mr-4 w-15" />
              </a>
              <div class="flex items-center -mr-2 md:hidden">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  @click="isMenuShown = true"
                >
                  <svg
                    class="w-8 h-8"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:flex md:space-x-10">
            <a
              href="/#examples"
              class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >أمثله</a
            >
            <a
              href="/#how-it-works"
              class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >كيف تعمل</a
            >
            <a
              href="/#benefits"
              class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >ميزات</a
            >
            <a
              href="/#contact-us"
              class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >تواصل بنا</a
            >
          </div>
          <div
            class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-2"
          >
            <span class="inline-flex rounded-md shadow">
              <a
                :href="href"
                class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700"
              >
                إشترك الآن
              </a>
            </span>
          </div>
        </nav>
      </div>
      <!--
            Mobile menu, show/hide based on menu open state.
            
            Entering: "duration-150 ease-out"
              From: "opacity-0 scale-95"
              To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
              From: "opacity-100 scale-100"
              To: "opacity-0 scale-95"
            -->
      <div
        :class="{ hidden: !isMenuShown }"
        class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
      >
        <div class="rounded-lg shadow-md">
          <div
            class="overflow-hidden bg-white rounded-lg shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="flex items-center justify-between px-5 pt-4">
              <!-- <div>
                <div
                  v-html="require('~/assets/square-logo.svg?include')"
                  class="w-auto h-8"
                />
              </div> -->
              <BaseImg src="square-logo.svg" class="w-12" />
              <div class="-mr-6">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-300 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  aria-label="Close menu"
                  @click="isMenuShown = false"
                >
                  <svg
                    class="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3 text-center">
              <NavBarTitles title="أمثله" href="/#examples" />
              <NavBarTitles title="كيف تعمل" href="/#how-it-works" />
              <NavBarTitles title="ميزات" href="/#benefits" />
              <NavBarTitles title="تواصل بنا" href="/#contact-us" />
              <!-- <a
                href="#"
                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                role="menuitem"
                >صمم شعارك</a
              >
              <a
                href="#examples"
                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                role="menuitem"
                >أمثله</a
              >
              <a
                href="#"
                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                role="menuitem"
                >كيف تعمل</a
              >
              <a
                href="#"
                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                role="menuitem"
                >اتصل بنا</a
              > -->
            </div>
            <div>
              <a
                :href="href"
                class="block w-full px-5 py-3 font-medium text-center text-indigo-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-indigo-500 hover:text-white focus:outline-none focus:bg-gray-100 focus:text-indigo-700"
                role="menuitem"
              >
                إشترك الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMenuShown: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
  },
};
</script>