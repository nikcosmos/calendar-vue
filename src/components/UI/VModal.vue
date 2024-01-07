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
               class="bg-white rounded-lg w-full max-w-md py-5 px-9 pointer-events-auto relative flex flex-col items-start gap-1">
               <button
                  @click.stop="closeModal"
                  type="button"
                  class="absolute top-2 right-2 hover:bg-gray-200 rounded-full p-1 transition-colors">
                  <Close />
               </button>
               <h2 class="text-3xl font-medium mb-5">{{ getModalData.name }}</h2>
               <div class="flex gap-1 items-center">
                  <span class="font-bold">Email:</span>
                  <a
                     target="_blank"
                     :href="'mailto:' + getModalData.email"
                     class="block hover:underline"
                     >{{ getModalData.email }}</a
                  >
               </div>
               <div class="flex gap-1 items-center">
                  <span class="font-bold">Phone:</span>
                  <a
                     :href="'tel:' + getModalData.phone"
                     class="block hover:underline"
                     >{{ getModalData.phone }}</a
                  >
               </div>
               <div class="flex gap-1 items-center">
                  <span class="font-bold">Adults:</span>
                  {{ getModalData.guestInfo.adults }}
               </div>
               <div class="flex gap-1 items-center">
                  <span class="font-bold">Children:</span>
                  {{ getModalData.guestInfo.children }}
               </div>
               <div class="flex gap-1 items-center">
                  <span class="font-bold">Start:</span> {{ getModalData.start }}
               </div>
               <div class="flex gap-1 items-center">
                  <span class="font-bold">End:</span> {{ getModalData.end }}
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
