import data from '../assets/data.json';

const useRoomList = () => {
   function createRoomsData(week) {
      const arrWeek = week.value.map((day) => day.day);
      const rooms = getAllRooms();
      getAllReservation(rooms);
      filteredReservation(rooms, arrWeek);
      return rooms;
   }
   return { createRoomsData };
};

function getAllRooms() {
   const result = [];
   data.map((item) => {
      const isEntry = !!result.find((resItem) => resItem.id === item.roomDetails.id);
      if (!isEntry) result.push({ ...item.roomDetails, reservation: [] });
   });
   return result;
}
function getAllReservation(rooms) {
   data.forEach((reserv) => {
      rooms.forEach((room) => {
         if (room.id === reserv.roomDetails.id) {
            room.reservation = [...room.reservation, reserv];
         }
      });
   });
}
function filteredReservation(rooms, arrWeek) {
   rooms.forEach((room) => {
      room.reservation = room.reservation.map((reserv) => {
         let startIndex = null;
         let endIndex = null;
         if (arrWeek.includes(reserv.start)) {
            const index = arrWeek.findIndex((day) => day === reserv.start);
            startIndex = (index + 1) * 2;
         }
         if (arrWeek.includes(reserv.end)) {
            const index = arrWeek.findIndex((day) => day === reserv.end);
            endIndex = (index + 1) * 2;
         }
         if (arrWeek.includes(reserv.start) || arrWeek.includes(reserv.end)) {
            return { ...reserv, startIndex, endIndex };
         }
         return null;
      });
      room.reservation = room.reservation.filter((reserv) => reserv);
   });
}
export default useRoomList;
