<script setup>
import FullCalendar from '@fullcalendar/vue';
import dayGridWeek from '@fullcalendar/daygrid';

const calendarOptions = {
   plugins: [dayGridWeek],
   initialView: 'dayGridWeek',
   events: [
      {
         title: 'The Title',
         start: '2018-09-01',
         end: '2018-09-02',
      },
   ],
};
</script>
<template>
   <div class="container max-w-5xl mt-10">
      <FullCalendar :options="calendarOptions" />
   </div>
</template>
