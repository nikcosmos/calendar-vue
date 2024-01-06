export default {
   state: {
      modal: false,
      modalData: null,
   },
   getters: {
      getModalState(state) {
         return state.modal;
      },
      getModalData(state) {
         return state.modalData;
      },
   },
   mutations: {
      openModal(state, payload) {
         state.modal = true;
         state.modalData = payload;
      },
      closeModal(state) {
         state.modal = false;
         state.modalData = [];
      },
   },
};
