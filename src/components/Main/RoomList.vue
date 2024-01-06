<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
   computed: {
      ...mapGetters(['getRooms']),
   },
   methods: {
      ...mapMutations(['setRooms']),
   },
   mounted() {
      this.setRooms();
   },
};
</script>

<template>
   <div class="flex flex-col">
      <div
         v-for="(item, index) in getRooms"
         class="flex">
         <div
            class="px-4 py-6 font-bold basis-1/5 flex-none border-b border-l border-black/40 flex items-center"
            :class="{ 'border-t': index === 0 }">
            {{ item.name }}
         </div>
         <div
            class="grid grid-cols-[repeat(14_,calc(100.1%_/_14))] w-full items-center border-black/40 border-x border-b relative"
            :class="{ 'border-t': index === 0 }">
            <div class="grid grid-cols-7 absolute top-0 left-0 w-full h-full pointer-events-none">
               <span
                  v-for="index in 7"
                  class="border-l border-black/40"
                  :class="{ 'border-l-0': index === 1 }"></span>
            </div>
            <button
               type="button"
               v-for="res in item.reservation"
               class="h-9 my-2 bg-blue-400 rounded-lg text-center flex justify-center px-2 items-center relative z-10 hover:bg-blue-500 transition-colors"
               :class="{ 'rounded-r-none': !res.endIndex, 'rounded-l-none': !res.startIndex }"
               :style="`grid-column:${res?.startIndex ?? 1}/${res?.endIndex ?? 15}`">
               <span class="text-xs text-center truncate font-bold"> {{ res.name }}</span>
            </button>
         </div>
      </div>
   </div>
</template>
