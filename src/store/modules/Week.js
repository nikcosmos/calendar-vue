import moment from 'moment';

export default {
   state: {
      day: moment(),
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
         this.commit('setRooms');
      },
      nextWeek(state) {
         state.day = moment(state.day).add(1, 'w');
         this.commit('setWeek');
      },
      prevWeek(state) {
         state.day = moment(state.day).subtract(1, 'w');
         this.commit('setWeek');
      },
      returnToday(state) {
         state.day = moment();
         this.commit('setWeek');
      },
   },
};
function createWeekArr(data = '') {
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
