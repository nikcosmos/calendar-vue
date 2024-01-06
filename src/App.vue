<script>
import VHeader from './components/VHeader.vue';
import VMain from './components/VMain.vue';
export default {
   components: { VHeader, VMain },
};
</script>

<template>
   <div
      id="app"
      class="min-h-screen flex flex-col">
      <VHeader />
      <main class="flex-auto">
         <VMain />
      </main>
   </div>
</template>
