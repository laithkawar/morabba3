<template>
  <!-- prop 'size' is lg -->
  <picture v-if="size == 'lg'">
    <source
      :srcSet="
        require('~/assets/images/' +
          src +
          '?resize&min=320&max=1080&steps=3&format=webp').srcSet
      "
      type="image/webp"
    />
    <source
      :srcSet="
        require('~/assets/images/' + src + '?resize&min=320&max=1080&steps=3')
          .srcSet
      "
      type="image/jpeg"
    />
    <img
      :src="require('~/assets/images/' + src)"
      :class="['w-full', imgClass]"
      :alt="alt"
    />
  </picture>

  <!-- prop 'size' is md -->
  <picture v-else-if="size == 'md'">
    <source
      :srcSet="
        require('~/assets/images/' +
          src +
          '?resize&min=180&max=640&steps=3&format=webp').srcSet
      "
      type="image/webp"
    />
    <source
      :srcSet="
        require('~/assets/images/' + src + '?resize&min=180&max=640&steps=3')
          .srcSet
      "
      type="image/jpeg"
    />
    <img
      :src="require('~/assets/images/' + src)"
      :alt="alt"
      :class="['w-full', imgClass]"
    />
  </picture>

  <!-- prop 'size' is sm -->
  <picture v-else>
    <source
      :srcSet="
        require('~/assets/images/' +
          src +
          '?resize&min=100&max=200&steps=2&format=webp').srcSet
      "
      type="image/webp"
    />
    <source
      :srcSet="
        require('~/assets/images/' + src + '?resize&min=100&max=200&steps=2')
          .srcSet
      "
      type="image/jpeg"
    />
    <img
      :src="require('~/assets/images/' + src)"
      :class="['w-full', imgClass]"
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
    // classes to apply to inner <img> tag
    imgClass: {
      type: String,
      default: '',
    },
  },
};
</script>
