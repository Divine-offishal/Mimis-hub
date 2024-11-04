<template>
  <section class="mt-32 min-h-screen">
    <IndicatorsSpinner v-if="$isLoading"/>
    <IndicatorsSpinner v-if="loading"/>
    <div class="my-16 flex justify-center w-full">
      <input type="text" class="h-12 md:w-[32em] w-10/12 md:mx-0 mx-4 border border-darkRed text-black pl-2 text-lg">
      <button class="h-12 px-3 bg-darkRed md:w-auto w-10/12 text-neutral font-bold text-lg">Search</button>
    </div>
    <main class="grid md:grid-cols-3 gap-y-8 justify-items-center">
      <Card v-for="(product, i) in data" :key="i" :title="product.name" :price="product.price" :desc="product.desc" :image="product.image.asset._ref"/>
    </main>
  </section>
</template>

<script setup>
import { ref } from "vue";
const { $isLoading } = useNuxtApp()
const loading = ref(true);
const query = `*[_type == 'product']{name, price, desc, image, category, rating}`
const { data, error } = useSanityQuery(query)

console.log(data.value)
loading.value = false;
</script>

<style lang="scss" scoped>

</style>