<template>
  <div class="bg-lightRed w-screen py-6">
    <IndicatorsSpinner v-if="loading" title="Getting products"/>
    <h1 class="text-center text-white text-4xl">Popular threads</h1>
    <div class="mt-10 grid md:grid-cols-3 justify-items-center gap-y-7">
      <Card
        v-for="(product, i) in data"
        :key="i"
        :title="product.name"
        :price="product.price"
        :desc="product.desc"
        :image="product.image.asset._ref"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const loading = ref(true);
const query = `*[_type == 'product']{name, price, desc, image, category, rating}[0...6]`;

const { data, error } = await useSanityQuery(query);

loading.value = false;
</script>
