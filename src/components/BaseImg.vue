<template>
  <picture>
    <source
      :srcSet="
        require('~/assets/images/' +
          src +
          '?resize&min=' +
          min +
          '&max=' +
          max +
          '&steps=' +
          steps +
          '&format=webp').srcSet
      "
      type="image/webp"
    />
    <source
      :srcSet="
        require('~/assets/images/' +
          src +
          '?resize&min=' +
          min +
          '&max=' +
          max +
          '&steps=' +
          steps).srcSet
      "
      type="image/jpeg"
    />
    <img :src="require('~/assets/images/' + src)" class="w-full" :alt="alt" />
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    min: {
      type: Number,
      default: 320,
    },
    max: {
      type: Number,
      default: 1080,
    },
    // default is 4 in https://github.com/dazuaz/responsive-loader
    steps: {
      type: Number,
      default: 3,
    },
  },
  //   data() {
  //     return {
  //       steps: 3,
  //     };
  //   },
};
</script>
