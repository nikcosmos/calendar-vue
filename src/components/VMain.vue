<script>
import Week from './Main/Week.vue';
import Reserves from './Main/Reserves.vue';
import Actions from './Main/Actions.vue';
export default {
   components: { Week, Reserves, Actions },
};
</script>

<template>
   <div class="container max-w-5xl mt-10 overflow-hidden">
      <Actions />
      <div class="flex flex-col overflow-auto">
         <div class="flex flex-col min-w-[994px]">
            <Week />
            <Reserves />
         </div>
      </div>
   </div>
</template>
