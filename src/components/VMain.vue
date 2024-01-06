<script>
import { mapGetters, mapMutations } from 'vuex';
import ArrowLeft from './Icon/ArrowLeft.vue';
import ArrowRight from './Icon/ArrowRight.vue';
export default {
   components: { ArrowLeft, ArrowRight },
   methods: {
      ...mapMutations(['setWeek', 'returnToday', 'prevWeek', 'nextWeek', 'setRooms']),
   },
   computed: {
      ...mapGetters(['getWeekState', 'getRooms']),
   },
   mounted() {
      this.setWeek();
      this.setRooms();
   },
};
</script>

<template>
   <div class="container max-w-5xl mt-10">
      <div class="flex flex-col">
         <div class="w-4/5 self-end">
            <div class="w-full">
               <div class="flex justify-end items-center gap-3 mb-5">
                  <button
                     class="px-4 py-2 bg-teal-500 rounded-lg font-bold"
                     @click="returnToday"
                     type="button">
                     Today
                  </button>
                  <button
                     class="px-4 py-2 bg-teal-500 rounded-lg"
                     @click="prevWeek"
                     type="button">
                     <ArrowLeft />
                  </button>
                  <button
                     class="px-4 py-2 bg-teal-500 rounded-lg"
                     @click="nextWeek"
                     type="button">
                     <ArrowRight />
                  </button>
               </div>
               <div class="grid grid-cols-7">
                  <div
                     class="p-3 border border-black border-r-0 last:border-r text-center font-medium"
                     :class="{ 'bg-teal-300': item.isToday }"
                     v-for="item in getWeekState">
                     {{ item.day }}
                  </div>
               </div>
            </div>
         </div>
         <div class="flex flex-col">
            <div
               v-for="item in getRooms"
               class="flex">
               <div
                  class="px-4 py-6 border-black border border-b-0 last:border-b font-bold basis-1/5 flex-none">
                  {{ item.name }}
               </div>
               <div class="grid grid-cols-[repeat(14_,1fr)] w-full">
                  <div
                     v-for="res in item.reservation"
                     class="h-9 bg-blue-500 rounded-lg text-center flex justify-between px-4 items-center"
                     :class="{ 'rounded-r-none': !res.endIndex, 'rounded-l-none': !res.startIndex }"
                     :style="`grid-column:${res?.startIndex ?? 1}/${res?.endIndex ?? 15}`">
                     <span> {{ res.name }}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
