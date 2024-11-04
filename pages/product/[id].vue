<template>
  <section class="w-screen mt-24 text-darkRed px-5 bg-primary pt-3">
    <IndicatorsSpinner v-if="$isLoading"/>
    <div class="text-xl font-bold flex gap-2">
      <h1 @click="router.push('/')">Home</h1>
      >
      <h1>Product</h1>
    </div>
    <main class="mt-4 md:flex">
      <div class="md:w-5/12 w-screen h-[26rem]">
        <img src="/image/Cardimg.png" alt="" class="w-full h-full object-cover">
      </div>
      <div class="md:w-7/12 w-screen md:pl-16 space-y-10">
        <h1 class="text-4xl font-bold">Product name</h1>
        <h1 class="text-2xl">Category</h1>
        <h1 class="text-2xl">Price</h1>
        <h1 class="text-lg">Rating</h1>
        <button class="w-1/2 bg-lightRed text-accent rounded-md py-2 text-2xl font-bold hover:scale-105 transition-all ease-in-out duration-200">
          Add to cart
        </button>
      </div>
    </main>
    <main class="my-20 w-screen px-4">
      <h1 class="text-center text-3xl font-bold">Just for you</h1>
      <div class="w-full grid grid-cols-2 justify-items-between gap-y-8 mt-6">
        <FYCard/>
        <FYCard/>
        <FYCard/>
        <FYCard/>
      </div>
    </main>
  </section>
</template>

<script setup>
  const router = useRouter();
  const { $isLoading } = useNuxtApp()
</script>