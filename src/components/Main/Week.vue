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
      ...mapMutations(['setWeek']),
   },
   mounted() {
      this.setWeek();
   },
};
</script>

<template>
   <div class="w-4/5 self-end">
      <div class="w-full">
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
