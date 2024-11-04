<template>
  <section class="w-screen md:mt-24 mt-32 flex justify-center py-4 bg-primary">
    <form class="w-10/12 border border-darkRed rounded-lg bg-neutral text-darkRed px-6">
      <h1 class="text-center font-bold text-3xl">Create account</h1>
      <div class="mt-5">
        <label for="userName" class="font-bold">User name</label>
        <input type="text" id="userName" placeholder="John Doe" class="w-full bg-primary border border-darkRed h-12 px-4 mt-2">
      </div>
      <div class="mt-5">
        <label for="email" class="font-bold">Email</label>
        <input type="text" id="email" placeholder="example@gmail.com" class="w-full bg-primary border border-darkRed h-12 px-4 mt-2">
      </div>
      <div class="mt-5">
        <label for="password" class="font-bold">Password</label>
        <input type="text" id="password" class="w-full bg-primary border border-darkRed h-12 px-4 mt-2">
      </div>
      <div class="mt-5">
        <label for="cPassword" class="font-bold">Confirm password</label>
        <input type="text" id="cPassword" class="w-full bg-primary border border-darkRed h-12 px-4 mt-2">
      </div>
      <button class="bg-lightRed w-full text-primary h-12 mt-5 text-2xl">Submit</button>
      <h1 class="text-center mt-7 font-bold text-2xl">OR create with</h1>

      <div class="flex justify-center space-x-5 my-8">
        <div class="w-32 h-32 bg-lightRed text-primary rounded-md grid justify-items-center items-center">
          <span>
            <Google class="text-4xl"/>
            <h1 class="font-bold">Google</h1>
          </span>
        </div>
        <div class="grid justify-items-center items-center w-32 h-32 bg-primary border border-lightRed text-lightRed rounded-md">
          <div>
            <Github class="text-4xl"/>
            <h1>Github</h1>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
  import Google from '../public/image/google.svg'
  import Github from '../public/image/github.svg'
</script>
