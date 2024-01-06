import { ref, watchEffect } from 'vue';

import moment from 'moment';

const useWeek = () => {
   const day = ref(moment());
   const week = ref(getWeekArr(day.value));

   function nextWeek() {
      day.value = moment(day.value).add(1, 'w');
   }
   function prevWeek() {
      day.value = moment(day.value).subtract(1, 'w');
   }
   function returnToday() {
      day.value = moment();
   }

   watchEffect(() => {
      week.value = getWeekArr(day.value);
   });

   return { week, returnToday, nextWeek, prevWeek };
};
function getWeekArr(data = '') {
   const result = [];
   for (let i = 1; i < 8; i++) {
      const day = moment(data).day(i).toObject();
      const formatDay = moment(data).day(i).format('YYYY-MM-DD');
      result.push({
         day: formatDay,
         isToday: getIsToday(day),
      });
   }
   return result;
}
function getIsToday(day) {
   const today = moment().toObject();
   const isToday =
      day.date === today.date && day.months === today.months && day.years === today.years;
   return isToday;
}
export default useWeek;
