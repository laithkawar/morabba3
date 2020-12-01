<template>
  <figure>
    <BaseImg
      size="lg"
      class="object-cover w-full mt-20 mb-20 opacity-50"
      src="Branding-main.jpg"
      alt="'علامة تجارية 'براند العامر للمقاولات"
    />
    <!-- <picture>
      <source
        :srcSet="require('~/assets/images/Branding-main.jpg?webp')"
        type="image/webp"
      />
      <source
        :srcSet="
          require('~/assets/images/Branding-main.jpg?resize&sizes[]=640&sizes[]=1080&sizes[]=2160')
            .srcSet
        "
        type="image/jpeg"
      />
      <img
        :src="require('~/assets/images/Branding-main.jpg')"
        class="object-cover w-full mt-20 mb-20"
      />
    </picture> -->
  </figure>
</template>
