<template>
  <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
    <BaseImg
      class="w-full"
      img-class="w-full rounded-md shadow-md"
      :src="image"
      :alt="name"
    />
  </div>
</template>

<script>
export default {
  props: ['name', 'image'],
};
</script>