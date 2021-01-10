<template>
  <div class="max-w-screen-lg mx-auto md:flex sm:py-20">
    <div
      class="max-w-screen-md mx-auto md:mr-8 lg:w-1/2 md:w-1/2 sm:w-full sm:max-w-screen-md"
    >
      <div class="text-center">
        <h1
          :id="id"
          class="mx-4 text-3xl font-extrabold text-gray-800 sm:mx-0 md:leading-11 sm:text-center md:text-right sm:leading-14 lg:text-4xl"
        >
          <span v-if="paidheader"
            >قم بتصميم شعار مثالي بدقائق بسعر منافس!
          </span>
          <span v-else>قم بتصميم شعار مثالي بدقائق!</span>

          <br class="xl:hidden" />
        </h1>
        <h2
          class="max-w-sm px-6 mx-auto mt-12 text-center text-gray-500 sm:px-0 md:mx-1 lg:mr-2 md:text-right sm:text-lg md:mt-12 md:text-xl md:max-w-2xl"
        >
          إستخدم موقع تصميم شعار مدعوم بالذكاء الاصطناعي لتصميم شعار فوري بنفسك
          وبناء علامة تجارية مثاليه.
        </h2>
      </div>
    </div>
    <div
      class="flex-col justify-center min-h-full px-8 md:w-1/2 w-fullflex sm:px-8 md:px-10 lg:px-12"
    >
      <div class="mt-20 md:mt-2 md:-ml-2 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-6 py-8 bg-indigo-600 rounded-lg shadow sm:px-10">
          <form
            action="https://gmail.us2.list-manage.com/subscribe/post?u=dae534f8b5213e1878378fb2d&amp;id=d0c72289ed"
            method="POST"
          >
            <input
              type="hidden"
              :value="paid ? 'YES' : 'NO'"
              name="PAID"
              id="mce-PAID"
            />
            <div>
              <label
                for="email"
                class="block mt-4 mb-10 text-xl leading-8 text-center text-white font-large"
              >
                أدخل عنوان بريدك الاكتروني لتبدأ.
              </label>
              <div class="mt-2 rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  name="EMAIL"
                  required
                  class="block w-full px-3 pt-4 pb-3 text-left placeholder-gray-400 transition duration-150 ease-in-out border border-gray-900 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  class="flex justify-center w-full px-3 pt-3 pb-2 font-medium text-indigo-800 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md text-md hover:bg-indigo-150 hover:text-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  <span v-if="paid">صمم شعار ب١٩.٩٩$</span>
                  <span v-else>صمم شعارك الآن</span>
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // the name of the image in ~/assets/images or images_svg or images_gif folders
    // choosen automatic based on image extension
    // Use as: <BaseImage src="someimg.gif" ... />
    id: {
      type: String,
      default: '',
    },

    paid: {
      type: Boolean,
      default: false,
    },

    paidheader: {
      type: Boolean,
      default: false,
    },
  },
};
</script>