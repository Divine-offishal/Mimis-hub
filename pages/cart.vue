<template>
  <section class="min-h-screen w-screen md:mt-24 mt-32 px-4 bg-primary">
    <IndicatorsSpinner v-if="$isLoading"/>
    <h1 class="md:text-5xl text-3xl md:text-left text-center font-bold text-darkRed">Shopping Cart</h1>

    <main class="md:flex mt-6 w-full justify-between">
      <div class="md:w-1/2 w-full mb-10">
        <CartCard/>
      </div>
  
      <div class="md:w-5/12 w-full bg-lightRed h-96 text-primary mr-4 rounded-md text-3xl grid justify-items-stretch p-6 mb-10">
        <h1>Total items</h1>
        <h1>Items price</h1>
        <h1>Shipping</h1>
        <h1>Overall</h1>
      </div>
    </main>

  </section>
</template>

<script setup>
const { $isLoading } = useNuxtApp()
</script>

<style lang="scss" scoped>

</style>