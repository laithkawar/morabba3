<template>
  <div class="p-2 mx-auto md:mx-0 xl:w-1/2">
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
        class="flex-shrink-0 mb-4 shadow-lg w-72 rounded-xl sm:mb-8"
        img-class="rounded-lg"
      />
      <div class="flex-grow mr-6 sm:pl-0">
        <h2 class="my-6 text-xl font-medium text-gray-900 title-font">
          {{ header }}
        </h2>
        <h3 class="mb-4 ml-2">
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