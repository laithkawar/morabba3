<template>
  <!-- For explanation of v-if v-else see https://vuejs.org/v2/guide/conditional.html -->
  <!--  -->
  <!-- if gif filetype -->
  <picture v-if="isGif()">
    <source
      :data-srcset="require('~/assets/images_gif/' + src + '?webp')"
      type="image/webp"
    />
    <img
      :data-src="require('~/assets/images_gif/' + src)"
      class="lazyload"
      :alt="alt"
    />
  </picture>

  <!-- prop 'size' is lg -->
  <picture v-else-if="size == 'lg'">
    <source
      :data-srcset="
        require('~/assets/images/' +
          src +
          '?resize&min=320&max=2160&steps=4&format=webp').srcset
      "
      type="image/webp"
    />
    <source
      :data-srcset="
        require('~/assets/images/' + src + '?resize&min=320&max=1080&steps=3')
          .srcset
      "
      type="image/jpeg"
    />
    <img
      :data-src="require('~/assets/images/' + src)"
      :src="require('~/assets/images/' + src + '?lqip')"
      class="lazyload"
      :alt="alt"
    />
  </picture>

  <!-- prop 'size' is md -->
  <picture v-else-if="size == 'md'">
    <source
      :data-srcset="
        require('~/assets/images/' +
          src +
          '?resize&min=180&max=640&steps=3&format=webp').srcset
      "
      type="image/webp"
    />
    <source
      :data-srcset="
        require('~/assets/images/' + src + '?resize&min=180&max=640&steps=3')
          .srcset
      "
      type="image/jpeg"
    />
    <img
      :data-src="require('~/assets/images/' + src)"
      :src="require('~/assets/images/' + src + '?lqip')"
      class="lazyload"
      :alt="alt"
    />
  </picture>

  <!-- prop 'size' is sm -->
  <picture v-else>
    <source
      :data-srcset="
        require('~/assets/images/' +
          src +
          '?resize&min=100&max=200&steps=2&format=webp').srcset
      "
      type="image/webp"
    />
    <source
      :data-srcset="
        require('~/assets/images/' + src + '?resize&min=100&max=200&steps=2')
          .srcset
      "
      type="image/jpeg"
    />
    <img
      :data-src="require('~/assets/images/' + src)"
      :src="require('~/assets/images/' + src + '?lqip')"
      class="lazyload"
      :alt="alt"
    />
  </picture>
</template>

<script>
export default {
  props: {
    // the name of the image in ~/assets/images folder
    src: {
      type: String,
      default: '',
    },
    // img alt text
    alt: {
      type: String,
      default: '',
    },
    // Size of responsive img
    // sm (max 200px width), md (max 640px width) or lg (max 1080px width)
    size: {
      type: String,
      default: 'md',
    },
    // // classes to apply to inner <img> tag (tailwindcss and so on)
    // imgClass: {
    //   type: String,
    //   default: '',
    // },
  },
  methods: {
    isGif() {
      return this.src.endsWith('.gif');
    },
  },
};
</script>

<style scoped>
picture {
  @apply overflow-hidden;
}

picture img {
  @apply w-full object-cover object-center;
}
</style>