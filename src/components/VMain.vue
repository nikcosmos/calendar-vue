<script>
import Week from './Main/Week.vue';
import RoomList from './Main/RoomList.vue';
export default {
   components: { Week, RoomList },
};
</script>

<template>
   <div class="container max-w-5xl mt-10">
      <div class="flex flex-col">
         <Week />
         <RoomList />
      </div>
   </div>
</template>
