<script>
import { mapGetters, mapMutations } from 'vuex';
import RoomName from './RoomName.vue';
import RoomInfo from './RoomInfo.vue';
export default {
   components: { RoomName, RoomInfo },
   computed: {
      ...mapGetters(['getReserves']),
   },
   methods: {
      ...mapMutations(['setReserves']),
   },
   mounted() {
      this.setReserves();
   },
};
</script>

<template>
   <div class="flex flex-col">
      <div
         v-for="(item, index) in getReserves"
         class="flex">
         <RoomName
            :index="index"
            :name="item.name" />
         <RoomInfo
            :prop-index="index"
            :reservation="item.reservation" />
      </div>
   </div>
</template>
