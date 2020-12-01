<template>
  <!-- <div
      class="max-w-screen-xl px-4 py-12 mx-auto text-center sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="space-y-12">
        <ul
          class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
        > -->
  <li class="space-y-6 bg-white">
    <BaseImg
      img-class="w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56"
      size="md"
      :src="image"
      :alt="name"
    />
    <div class="space-y-2">
      <div class="space-y-1 text-xl font-medium leading-6">
        <h4>
          {{ name }}
        </h4>
        <p class="text-lg text-gray-500">
          {{ position }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['name', 'position', 'image'],
};
</script>