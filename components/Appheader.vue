<template>
  <nav class="h-16 w-screen bg-lightRed md:flex hidden pt-3 pl-3 pb-2 border-b border-neutral">
    <div class="flex cursor-pointer" @click="router.push('/')">
      <img src="/Vector.png"  class="h-12 w-12"/>
      <h1 class="text-neutral ml-3 mt-3 tracking-wide">Mimi's Fashion Hub</h1>
    </div>

    <ul class="flex gap-x-6 mx-auto text-neutral text-xs mt-4">
      <li class="my-link">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li class="my-link">
        <NuxtLink to="/shop">Shop</NuxtLink>
      </li>
      <li class="my-link">
        <NuxtLink to="/cart">Cart</NuxtLink>
      </li>
      <!-- <li>New Arrivals</li> -->
      <li>Sale</li>
      <li>Account</li>
    </ul>

    <div class="text-neutral flex space-x-2 mr-5" v-if="$auth.loggedIn">
      <div class="w-10 h-10 rounded-full overflow-hidden">
        <!-- <img src="image/Cardimg.png" alt="" class="w-full h-full object-cover"> -->
      </div>
      <h1 class="mt-2">{{ $auth.user.name }}</h1>
    </div>

    <div class="flex mt-3" v-else>
      <button class="h-7 w-auto px-2 bg-accent text-lightRed mr-5">
        <NuxtLink to="/api/register" external>
          Create Account
        </NuxtLink>
      </button>
      <button class="h-7 w-auto px-2 bg-lightRed text-accent mr-5 border-2 border-accent">
        <NuxtLink to="/api/login" external>
          Login
        </NuxtLink>

        <!-- {{ $auth.user }} -->
      </button>
    </div>
  </nav>
</template>

<script setup>
// import Vector from 'assets/svg/Vector.svg'
const route = useRoute()
const router = useRouter()

console.log(route.name)
// console.log(auth.user)
</script>

<style scoped>
.my-link .router-link-active {
  @apply text-accent underline underline-offset-4 font-bold;
}
</style>