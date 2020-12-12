<template>
  <div class="max-w-screen-lg mx-auto mb-8 text-lg">
    <h2
      class="mb-10 text-2xl font-extrabold leading-8 tracking-tight text-center text-gray-900 mt-28 md:text-3xl sm:leading-10"
    >
      {{ header }}
    </h2>
    <h3 class="px-10 mb-16 text-xl text-center text-gray-500">
      {{ subheader }}
    </h3>
  </div>
</template>

<script>
export default {
  props: ['header', 'subheader'],
};
</script>