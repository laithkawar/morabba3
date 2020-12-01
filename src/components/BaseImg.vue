<template>
  <!-- For explanation of v-if v-else see https://vuejs.org/v2/guide/conditional.html -->
  <!--  -->
  <!-- SVGs: default is to include if smaller than 5kb -->
  <!-- For SVGs no img-class can be used, just class -->
  <div
    v-if="isSVG()"
    v-html="require('~/assets/images_svg/' + src + '?include')"
  />

  <!-- if gif filetype, no reponsive sizes generated, just webp and compression -->
  <!-- Note: for GIF, the `size` property is ignored -->
  <picture v-else-if="isGIF()">
    <source
      :data-srcset="require('~/assets/images_gif/' + src + '?webp')"
      type="image/webp"
    />
    <img
      :data-src="require('~/assets/images_gif/' + src)"
      :class="['lazyload', imgClass]"
      :alt="alt"
    />
  </picture>

  <!-- prop 'size' is lg -->
  <picture v-else-if="size == 'lg'">
    <source
      :data-srcset="
        require('~/assets/images/' +
          src +
          '?resize&min=320&max=2160&steps=4&format=webp').srcSet
      "
      type="image/webp"
    />
    <source
      :data-srcset="
        require('~/assets/images/' + src + '?resize&min=320&max=1080&steps=3')
          .srcSet
      "
      type="image/jpeg"
    />
    <img
      :data-src="require('~/assets/images/' + src)"
      :src="require('~/assets/images/' + src + '?lqip')"
      :class="['lazyload', imgClass]"
      :alt="alt"
    />
  </picture>

  <!-- prop 'size' is md -->
  <picture v-else-if="size == 'md'">
    <source
      :data-srcset="
        require('~/assets/images/' +
          src +
          '?resize&min=180&max=640&steps=3&format=webp').srcSet
      "
      type="image/webp"
    />
    <source
      :data-srcset="
        require('~/assets/images/' + src + '?resize&min=180&max=640&steps=3')
          .srcSet
      "
      type="image/jpeg"
    />
    <img
      :data-src="require('~/assets/images/' + src)"
      :src="require('~/assets/images/' + src + '?lqip')"
      :class="['lazyload', imgClass]"
      :alt="alt"
    />
  </picture>

  <!-- prop 'size' is sm -->
  <picture v-else>
    <source
      :data-srcset="
        require('~/assets/images/' +
          src +
          '?resize&min=100&max=200&steps=2&format=webp').srcSet
      "
      type="image/webp"
    />
    <source
      :data-srcset="
        require('~/assets/images/' + src + '?resize&min=100&max=200&steps=2')
          .srcSet
      "
      type="image/jpeg"
    />
    <img
      :data-src="require('~/assets/images/' + src)"
      :src="require('~/assets/images/' + src + '?lqip')"
      :class="['lazyload', imgClass]"
      :alt="alt"
    />
  </picture>
</template>

<script>
export default {
  props: {
    // the name of the image in ~/assets/images or images_svg or images_gif folders
    // choosen automatic based on image extension
    // Use as: <BaseImage src="someimg.gif" ... />
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
    // DOES NOT apply to .gif or .svg
    size: {
      type: String,
      default: 'md',
    },
    // classes to apply to inner <img> tag (tailwindcss and so on)
    // DOES NOT apply to .svg
    // Use as <BaseImage img-class="..." ... />
    imgClass: {
      type: String,
      default: '',
    },
  },
  methods: {
    isGIF() {
      return this.src.endsWith('.gif');
    },
    isSVG() {
      return this.src.endsWith('.svg');
    },
  },
};
</script>

<style scoped>
/* picture {
  @apply overflow-hidden;
} */

picture img {
  @apply object-cover;
  @apply object-center;
}
</style>