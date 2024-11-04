<template>
  <section class="w-screen h-[80vh] md:mt-24 mt-32 flex justify-center py-4 bg-primary">
    <form class="w-10/12 h-[70vh] border border-darkRed rounded-lg bg-neutral text-darkRed px-6">
      <h1 class="text-center font-bold text-3xl">Welcome back</h1>
      <div class="mt-5">
        <label for="email" class="font-bold">Email</label>
        <input type="text" id="email" placeholder="example@gmail.com" class="w-full bg-primary border border-darkRed h-12 px-4 mt-2">
      </div>
      <div class="mt-5">
        <label for="password" class="font-bold">Password</label>
        <input type="text" id="password" class="w-full bg-primary border border-darkRed h-12 px-4 mt-2">
      </div>
      <button class="bg-lightRed w-full text-primary h-12 mt-5 text-2xl">Submit</button>
    </form>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>