<template>
  <div
    class="max-w-sm px-16 py-2 mx-auto mb-20 sm:py-2 sm:justify-center sm:mb-28 md:px-20"
  >
    <div class="rounded-md shadow">
      <a
        href="#"
        v-scroll-to="link"
        class="inline-flex items-center justify-center w-full px-2 py-3 text-base font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-8"
      >
        <span v-if="paid">صمم شعار ب١٩.٩٩$</span>
        <span v-else>صمم شعارك الآن</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // the name of the image in ~/assets/images or images_svg or images_gif folders
    // choosen automatic based on image extension
    // Use as: <BaseImage src="someimg.gif" ... />
    link: {
      type: String,
      default: '',
    },

    paid: {
      type: Boolean,
      default: false,
    },
  },
};
</script>