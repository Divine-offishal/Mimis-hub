<template>
  <div class="bg-white w-64 h-[22em] rounded-md">
    <div class="w-full h-[17em]">
      <SanityImage
        :asset-id="image"
        auto="format"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="flex justify-between items-center">
      <div class="ml-3 mt-2">
        <h1 class="font-bold" v-if="title.length > 15">{{ title.substring(0, 15) }}...</h1>
        <h1 class="font-bold" v-else>{{ title }}</h1>
        <p class="text-sm opacity-60">Price</p>
      </div>
      <button class="bg-darkRed text-white px-6 h-6 mr-3 rounded-md">
        <NuxtLink to="product/2">
          View
        </NuxtLink>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  price: Number,
  desc: String,
})

console.log('errors', props.title, props.image)
</script>