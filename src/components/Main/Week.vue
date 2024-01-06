<script>
import { mapGetters, mapMutations } from 'vuex';
import ArrowLeft from '../Icon/ArrowLeft.vue';
import ArrowRight from '../Icon/ArrowRight.vue';
export default {
   components: { ArrowLeft, ArrowRight },
   computed: {
      ...mapGetters(['getWeek']),
   },
   methods: {
      ...mapMutations(['returnToday', 'prevWeek', 'nextWeek', 'setWeek']),
   },
   mounted() {
      this.setWeek();
   },
};
</script>

<template>
   <div class="w-4/5 self-end">
      <div class="w-full">
         <div class="flex justify-end items-center gap-3 mb-5">
            <button
               class="px-4 py-2 bg-blue-400 hover:bg-blue-500 transition-colors rounded-lg font-bold"
               @click="returnToday"
               type="button">
               Today
            </button>
            <button
               class="px-4 py-2 bg-blue-400 hover:bg-blue-500 transition-colors rounded-lg"
               @click="prevWeek"
               type="button">
               <ArrowLeft />
            </button>
            <button
               class="px-4 py-2 bg-blue-400 hover:bg-blue-500 transition-colors rounded-lg"
               @click="nextWeek"
               type="button">
               <ArrowRight />
            </button>
         </div>
         <div class="grid grid-cols-7 border-black/40 border border-b-0">
            <div
               v-for="(item, index) in getWeek"
               class="p-3 text-center font-medium border-l border-black/40"
               :class="{ 'bg-orange-300': item.isToday, 'border-l-0': index === 0 }">
               {{ item.day }}
            </div>
         </div>
      </div>
   </div>
</template>
