<template>
  <a
    href="#"
    v-scroll-to="link"
    class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
    role="menuitem"
  >
    {{ title }}
  </a>
</template>

<script>
export default {
  props: ['title', 'link'],
};
</script>