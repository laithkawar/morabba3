<template>
  <div class="max-w-screen-lg mx-auto mb-8 text-lg">
    <h1
      class="mt-12 mb-12 text-2xl font-extrabold leading-8 tracking-tight text-center text-gray-900 md:text-3xl sm:leading-10"
    >
      {{ header }}
    </h1>
    <p class="px-10 mb-16 text-xl text-center text-gray-500">
      {{ subheader }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['header', 'subheader'],
};
</script>