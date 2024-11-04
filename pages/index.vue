<template>
  <main class="overflow-hidden">
    <IndicatorsSpinner v-if="$isLoading"/>
    <HomeHero />
    <HomeSection2 />
    <HomePopularTreads />
    <HomePartners />
    <HomeNewsletter />
  </main>
</template>

<script setup>

const { $isLoading } = useNuxtApp()
</script>
