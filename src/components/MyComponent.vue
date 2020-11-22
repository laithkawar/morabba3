<template>
  <div>
    <button
      class="px-4 py-2 mb-5 font-bold text-white bg-blue-700 rounded hover:bg-blue-800"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'i am a button'
    }
  }
}
</script>