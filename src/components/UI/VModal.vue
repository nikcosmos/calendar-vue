<script>
import { mapGetters, mapMutations } from 'vuex';
import Close from '../Icon/Close.vue';
export default {
   components: {
      Close,
   },
   computed: {
      ...mapGetters(['getModalState', 'getModalData']),
   },
   methods: {
      ...mapMutations(['closeModal']),
   },
};
</script>

<template>
   <div
      v-if="getModalState"
      class="relative z-30">
      <div
         @click.stop="closeModal"
         class="fixed inset-0 bg-black/40"></div>
      <div class="fixed inset-0 overflow-y-auto pointer-events-none">
         <div class="flex items-center justify-center p-4 min-h-full text-center">
            <div
               class="bg-white rounded-lg w-full max-w-md py-3 px-9 pointer-events-auto relative flex flex-col items-center">
               <button
                  @click.stop="closeModal"
                  type="button"
                  class="absolute top-2 right-2 hover:bg-gray-200 rounded-full p-1 transition-colors">
                  <Close />
               </button>
               <h2 class="text-3xl font-medium mb-5">{{ getModalData.name }}</h2>
               <a
                  :href="'mailto:' + getModalData.email"
                  class="block"
                  >{{ getModalData.email }}</a
               >
               <a
                  :href="'tel:' + getModalData.phone"
                  class="block"
                  >{{ getModalData.phone }}</a
               >
               <span class="block font-bold">Guests</span>
               <span class="block">Adults:{{ getModalData.guestInfo.adults }}</span>
               <span class="block">Children:{{ getModalData.guestInfo.children }}</span>
            </div>
         </div>
      </div>
   </div>
</template>
