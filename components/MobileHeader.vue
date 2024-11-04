<template>
  <div class="w-screen h-20 bg-lightRed flex md:hidden border-b border-neutral pt-4 pl-3">
    <div class="flex">
      <img src="/Vector.png"  class="h-12 w-12"/>
      <h1 class="text-neutral ml-3 mt-3 tracking-wide">Mimi's Fashion Hub</h1>
    </div>

    <div class="ml-auto mr-4" @click="handleClick">
      <PhosphorIconList size="40" color="white"/>
    </div>
  </div>

  <nav class="w-1/2 h-screen pt-12 pl-4 fixed top-0 right-0 z-50 bg-darkRed md:hidden block transition-all ease-in-out duration-200" :class="[isOpen ? 'right-0' : 'right-[-400px]']">
    <div class="ml-28" @click="handleClick">
      <PhosphorIconX size="40" color="white"/>
    </div>
    <ul class="text-neutral space-y-10 text-xl ml-6 mt-10">
      <li @click="handleClick" class="my-link">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li @click="handleClick" class="my-link">
        <NuxtLink to="/shop">
          Shop
        </NuxtLink></li>
      <li @click="handleClick" class="my-link">
        <NuxtLink to="/cart">
          Cart
        </NuxtLink></li>
      <!-- <li @click="handleClick">New arrivals</li> -->
      <li @click="handleClick">Sale</li>
      <li @click="handleClick">Amount</li>
    </ul>

    <div class="w-full space-y-4 mt-6">
      <button class="h-12 w-3/4 mx-2 bg-accent text-lightRed mr-5" @click="handleClick">
        <NuxtLink to="/signup">
          Create Account
        </NuxtLink>
      </button>
      <button class="h-12 w-3/4 mx-2 bg-darkRed text-accent mr-5 border-2 border-accent" @click="handleClick">Login</button>
    </div>
  </nav>
</template>

<script setup>
  const isOpen = ref(false)

  const handleClick = () => {
    isOpen.value = !isOpen.value
  }
</script>

<style scoped>
.my-link .router-link-active {
  @apply text-accent underline underline-offset-4 font-bold;
}
</style>