<script>
import { mapMutations } from 'vuex';
import ArrowLeft from '../Icon/ArrowLeft.vue';
import ArrowRight from '../Icon/ArrowRight.vue';
export default {
   components: { ArrowLeft, ArrowRight },
   methods: {
      ...mapMutations(['returnToday', 'prevWeek', 'nextWeek']),
   },
};
</script>

<template>
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
</template>
