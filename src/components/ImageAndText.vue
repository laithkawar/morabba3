<template>
  <div class="p-6 xl:w-1/2">
    <div
      class="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-right"
    >
      <img
        alt="team"
        class="flex-shrink-0 object-cover object-center w-64 mb-4 rounded-lg shadow-lg h-42 sm:mb-5"
        :src="image"
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
  props: ['header', 'subheader', 'image']
}
</script>