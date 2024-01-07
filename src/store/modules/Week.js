import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isoWeek from 'dayjs/plugin/isoWeek';
import toObject from 'dayjs/plugin/toObject';

dayjs.extend(isoWeek);
dayjs.extend(toObject);
dayjs.extend(isToday);

export default {
   state: {
      day: dayjs().isoWeekday(1),
      week: [],
   },
   getters: {
      getWeek(state) {
         return state.week;
      },
      getWeekArr(state) {
         return state.week.map((day) => day.day);
      },
   },
   mutations: {
      setWeek(state) {
         state.week = createWeekArr(state.day);
         this.commit('setReserves');
      },
      nextWeek(state) {
         state.day = dayjs(state.day).isoWeekday(1).add(1, 'w');
         this.commit('setWeek');
      },
      prevWeek(state) {
         state.day = dayjs(state.day).isoWeekday(1).subtract(1, 'w');
         this.commit('setWeek');
      },
      returnToday(state) {
         state.day = dayjs().isoWeekday(1);
         this.commit('setWeek');
      },
   },
};

function createWeekArr(data = '') {
   const result = [];
   for (let i = 1; i < 8; i++) {
      const formatDay = dayjs(data).day(i).format('YYYY-MM-DD');
      result.push({
         day: formatDay,
         isToday: dayjs(formatDay).isToday(),
      });
   }
   return result;
}
