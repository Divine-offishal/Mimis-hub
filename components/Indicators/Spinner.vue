<template>
  <div
    class="bg-black/50 w-screen h-screen fixed inset-0 flex justify-center items-center z-[9999] backdrop-blur-md"
  >
    <div class="flex flex-col items-center gap-4">
      <span class="loader"></span>
      <h1 class="text-white">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String
})
</script>

<style>
.loader {
  width: 52px;
  height: 52px;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #fcd581 #0000 #fff #0000;
  border-radius: 50%;
  box-sizing: border-box;
  animation: 1s rotate linear infinite;
}
.loader:before,
.loader:after {
  content: "";
  top: 0;
  left: 0;
  position: absolute;
  border: 10px solid transparent;
  border-bottom-color: #fff;
  transform: translate(-10px, 19px) rotate(-35deg);
}
.loader:after {
  border-color: #fcd581 #0000 #0000 #0000;
  transform: translate(32px, 3px) rotate(-35deg);
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
