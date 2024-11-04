<template>
  <div class="w-full md:h-72 h-56 border border-darkRed py-4 flex bg-neutral md:px-0 pr-3">
    <div class="w-5/12 h-full ml-2">
      <!-- <img src="image/Cardimg.png" class="w-full h-full object-contain"/> -->
    </div>
    <div class="text-darkRed w-7/12 md:pl-6 pl-3 space-y-5 grid items-stretch">
      <h1 class="md:text-3xl text-xl font-bold">Product name</h1>
      <h1 class="md:text-xl">Category</h1>
      <h1>Price</h1>
      <div class="flex space-x-4">
        <div class="bg-darkRed rounded-l-lg text-neutral p-2 flex items-center justify-center w-12">
          <Left/>
        </div>
        <input type="number" class="p-2 border border-darkRed w-12">
        <div class="bg-darkRed text-neutral rounded-r-lg p-2 flex items-center justify-center w-12">
          <Right/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Left from '../public/image/left.svg'
import Right from '../public/image/right.svg'
</script>

<style lang="scss" scoped>

</style>