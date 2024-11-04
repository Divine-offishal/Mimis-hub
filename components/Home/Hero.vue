<template>
  <div class="pt-24 w-screen md:max-h-screen bg-lightRed flex md:flex-row flex-col-reverse pb-10">
    <div class="lg:ml-24 md:ml-12 xl:w-8/12 md:w-7/12 w-screen">
      <h1 class="md:text-7xl text-4xl text-accent md:mt-20 mt-10 md:text-start text-center">Step into Elegance</h1>
      <div class="lg:w-[37em] md:w-[28em] w-screen md:px-0 px-12">
        <h1 class="md:mt-24 mt-10 text-neutral text-lg tracking-wider md:text-left text-center">Welcome to our world of exquisite fashion, where every thread weaves a story and every ensemble tells a tale. Unveil your unique style and make a statement that is truly yours</h1>
      </div>

      <div class="flex md:justify-start justify-center w-screen" @click="router.push('/shop')">
        <button class="md:w-auto w-[80%] h-12 px-4 bg-accent text-darkRed text-3xl rounded-md mt-10 hover:scale-105 transition-all ease-in-out duration-200">Start shopping</button>
      </div>
    </div>

    <div class="md:ml-auto xl:mr-14 lg:mr-8 xl:w-4/12 md:w-5/12">
      <img src="/image/Heroimg.png" alt="Hero image" class="md:h-[35em] h-[20em] object-cover md:mx-0 mx-auto">
    </div>
  </div>
</template>

<script setup>

const router = useRouter();

</script>

<style lang="scss" scoped>

</style>