<script>
import { mapMutations } from 'vuex';
export default {
   props: ['propIndex', 'reservation'],
   methods: {
      ...mapMutations(['openModal']),
   },
};
</script>

<template>
   <div
      class="grid grid-cols-[repeat(14_,calc(100.1%_/_14))] w-full items-center border-black/40 border-x border-b relative"
      :class="{ 'border-t': propIndex === 0 }">
      <div class="grid grid-cols-7 absolute top-0 left-0 w-full h-full pointer-events-none">
         <span
            v-for="index in 7"
            class="border-l border-black/40"
            :class="{ 'border-l-0': index === 1 }"></span>
      </div>
      <button
         @click="openModal(res)"
         type="button"
         v-for="res in reservation"
         class="h-9 my-2 bg-blue-400 rounded-lg text-center flex justify-center px-2 items-center relative z-10 hover:bg-blue-500 transition-colors"
         :class="{ 'rounded-r-none': !res.endIndex, 'rounded-l-none': !res.startIndex }"
         :style="`grid-column:${res?.startIndex ?? 1}/${res?.endIndex ?? 15}`">
         <span class="text-xs text-center truncate font-bold"> {{ res.name }}</span>
      </button>
   </div>
</template>
