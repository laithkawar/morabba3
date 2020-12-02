<template>
  <div class="flex flex-col items-center p-4 mb-6 text-center md:w-1/3 md:mb-0">
    <!-- <div
            class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-indigo-500 bg-indigo-100 rounded-full"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div> -->
    <!-- <div
      class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-indigo-500 bg-indigo-100 rounded-full"
    > -->
    <BaseImg size="md" :src="image" class="w-12" />
    <!-- </div> -->
    <div class="flex-grow">
      <h2 class="mt-5 mb-3 text-xl text-center text-gray-500">
        {{ header }}
        <!-- ادفع فقط إذا كنت سعيدًا بتصميم الشعار -->
      </h2>
      <p class="text-base leading-relaxed">
        {{ subheader }}
        <!-- Blue bottle crucifix vinyl post-ironic four dollar toast vegan
        taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug
        VHS try-hard. -->
      </p>
      <!-- <a class="inline-flex items-center mt-3 text-indigo-500"
        >Learn More -->
      <!-- <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> -->
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'subheader', 'image'],
};
</script>