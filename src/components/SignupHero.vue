<template>
  <div class="max-w-screen-lg mx-auto md:flex sm:py-20 md:py-20">
    <div
      class="max-w-screen-md mx-auto md:mr-6 lg:w-1/2 md:w-1/2 sm:w-full sm:max-w-screen-md"
    >
      <div class="text-center">
        <h2
          class="mx-2 text-3xl font-extrabold text-gray-800 sm:mx-0 md:leading-11 sm:text-center md:text-right sm:leading-14 lg:text-4xl"
        >
          صمم علامتك التجارية المثاليه بدقائق!
          <br class="xl:hidden" />
        </h2>
        <p
          class="max-w-sm mx-auto mt-8 text-gray-500 lg:mr-2 sm:text-center md:text-right sm:text-lg md:mt-12 md:text-xl md:max-w-2xl"
        >
          استخدم منصة “مربع” المدعومة بالذكاء الاصطناعي لتصميم شعار بنفسك وبناء
          علامة تجارية تحبها.
        </p>
      </div>
    </div>
    <div
      class="flex-col justify-center min-h-full px-10 md:w-1/2 w-fullflex sm:px-8 md:px-10 lg:px-12"
    >
      <div class="mt-10 md:mt-2 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-6 py-8 bg-indigo-600 rounded-lg shadow sm:px-10">
          <form
            action="https://gmail.us2.list-manage.com/subscribe/post?u=dae534f8b5213e1878378fb2d&amp;id=d0c72289ed"
            method="POST"
          >
            <div>
              <label
                :id="id"
                for="email"
                class="block mt-4 mb-10 text-xl leading-5 text-center text-white font-large"
              >
                أدخل عنوان بريدك الاكتروني
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
                  ابدأ بالتصميم الآن
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
  props: ['id'],
};
</script>