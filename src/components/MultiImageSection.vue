<template>
  <div class="bg-gray-50">
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:mx-auto lg:py-16 lg:px-8">
      <div class="mt-2 grid grid-cols-2 gap-0.1 md:grid-cols-5 lg:mt-8">
        <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
          <BaseImg
            size="md"
            class="rounded-md shadow-md"
            src="Dragon-Games.jpg"
          />
        </div>
        <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
          <BaseImg class="rounded-md shadow-md" src="Studio-Tamimi.jpg" />
        </div>
        <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
          <picture>
            <source
              :srcSet="require('~/assets/images/Zahran-Realstate.jpg?webp')"
              type="image/webp"
            />
            <source
              :srcSet="
                require('~/assets/images/Zahran-Realstate.jpg?resize&sizes[]=640&sizes[]=1080&sizes[]=2160')
                  .srcSet
              "
              type="image/jpeg"
            />
            <img
              :src="require('~/assets/images/Zahran-Realstate.jpg')"
              class="rounded-md shadow-md"
              alt="DZahran-Realstate"
            />
          </picture>
        </div>
        <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
          <picture>
            <source
              :srcSet="require('~/assets/images/Unite-Insurance.jpg?webp')"
              type="image/webp"
            />
            <source
              :srcSet="
                require('~/assets/images/Unite-Insurance.jpg?resize&sizes[]=640&sizes[]=1080&sizes[]=2160')
                  .srcSet
              "
              type="image/jpeg"
            />
            <img
              :src="require('~/assets/images/Unite-Insurance.jpg')"
              class="rounded-md shadow-md"
              alt="nite-Insurance"
            />
          </picture>
        </div>
        <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
          <picture>
            <source
              :srcSet="require('~/assets/images/Language-Center.jpg?webp')"
              type="image/webp"
            />
            <source
              :srcSet="
                require('~/assets/images/Language-Center.jpg?resize&sizes[]=640&sizes[]=1080&sizes[]=2160')
                  .srcSet
              "
              type="image/jpeg"
            />
            <img
              :src="require('~/assets/images/Language-Center.jpg')"
              class="rounded-md shadow-md"
              alt="Language-Center"
            />
          </picture>
        </div>
        <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
          <picture>
            <source
              :srcSet="require('~/assets/images/Salwas-Boutique.jpg?webp')"
              type="image/webp"
            />
            <source
              :srcSet="
                require('~/assets/images/Salwas-Boutique.jpg?resize&sizes[]=640&sizes[]=1080&sizes[]=2160')
                  .srcSet
              "
              type="image/jpeg"
            />
            <img
              :src="require('~/assets/images/Salwas-Boutique.jpg')"
              class="rounded-md shadow-md"
              alt="Salwas-Boutique"
            />
          </picture>
        </div>
        <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
          <picture>
            <source
              :srcSet="require('~/assets/images/Maher-Jewlery.jpg?webp')"
              type="image/webp"
            />
            <source
              :srcSet="
                require('~/assets/images/Maher-Jewlery.jpg?resize&sizes[]=640&sizes[]=1080&sizes[]=2160')
                  .srcSet
              "
              type="image/jpeg"
            />
            <img
              :src="require('~/assets/images/Maher-Jewlery.jpg')"
              class="rounded-md shadow-md"
              alt="Maher-Jewlery"
            />
          </picture>
        </div>
        <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
          <picture>
            <source
              :srcSet="require('~/assets/images/Abuhussam-Saloon.jpg?webp')"
              type="image/webp"
            />
            <source
              :srcSet="
                require('~/assets/images/Abuhussam-Saloon.jpg?resize&sizes[]=640&sizes[]=1080&sizes[]=2160')
                  .srcSet
              "
              type="image/jpeg"
            />
            <img
              :src="require('~/assets/images/Abuhussam-Saloon.jpg')"
              class="rounded-md shadow-md"
              alt="Abuhussam-Saloon"
            />
          </picture>
        </div>
        <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
          <picture>
            <source
              :srcSet="require('~/assets/images/Natural-Pharmacy.jpg?webp')"
              type="image/webp"
            />
            <source
              :srcSet="
                require('~/assets/images/Natural-Pharmacy.jpg?resize&sizes[]=640&sizes[]=1080&sizes[]=2160')
                  .srcSet
              "
              type="image/jpeg"
            />
            <img
              :src="require('~/assets/images/Natural-Pharmacy.jpg')"
              class="rounded-md shadow-md"
              alt="Natural-Pharmacy"
            />
          </picture>
        </div>
        <div class="flex justify-center col-span-1 px-4 py-4 max-w-64">
          <picture>
            <source
              :srcSet="require('~/assets/images/Neon-Gaming.jpg?webp')"
              type="image/webp"
            />
            <source
              :srcSet="
                require('~/assets/images/Neon-Gaming.jpg?resize&sizes[]=640&sizes[]=1080&sizes[]=2160')
                  .srcSet
              "
              type="image/jpeg"
            />
            <img
              :src="require('~/assets/images/Neon-Gaming.jpg')"
              class="rounded-md shadow-md"
              alt="Neon-Gaming"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>