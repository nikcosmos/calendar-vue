<script>
import VHeader from './components/VHeader.vue';
import VMain from './components/VMain.vue';
import VModal from './components/UI/VModal.vue';
export default {
   components: { VHeader, VMain, VModal },
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
      <VModal />
   </div>
</template>
