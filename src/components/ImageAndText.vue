<template>
  <div class="p-6 mx-auto md:mx-0 xl:w-1/2">
    <div
      class="flex flex-col items-center justify-center h-full text-center md:items-start sm:flex-row sm:justify-start sm:text-right"
    >
      <!-- <section class="text-gray-700 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-wrap">
            <ImageAndText
              header="١.أدخل اسم الشركه و مجال العمل"
              subheader="زودنا بالمعلومات الأساسية التي نحتاجها لبدء تصميم شعارك المثالي."
              image="gif1.gif"

            />
          </div>
        </div>
      </section> -->
      <BaseImg
        size="md"
        :src="image"
        class="flex-shrink-0 w-64 mb-4 rounded-lg shadow-lg sm:mb-5"
      />
      <div class="flex-grow mr-6 sm:pl-8">
        <h1 class="mb-3 text-xl font-medium text-gray-900 title-font">
          {{ header }}
        </h1>
        <h3 class="mb-4">
          {{ subheader }}
        </h3>
        <span class="inline-flex">
          <a class="text-gray-500"> </a>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['header', 'subheader', 'image'],
};
</script>