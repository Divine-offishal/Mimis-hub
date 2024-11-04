// In your `plugin/router.js` file
export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  const isLoading = ref(false);

  router.beforeEach((to, from, next) => {
    isLoading.value = true;
    next();
  });

  router.afterEach(() => {
    isLoading.value = false;
  });

  return {
    provide: {
      isLoading
    }
  }
});
