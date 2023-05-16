import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { 
    contactsArr: [],
    isLoading: false,
    error: null,
   },
   extraReducers: {
        [fetchContact.pending]: handlePending,
        [fetchContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          state.contactsArr = action.payload;
        },
        [fetchContact.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          state.contactsArr.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          const index = state.contactsArr.findIndex(
            contact => contact.id === action.payload.id
          );
          state.contactsArr.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
        [toggleCompleted.pending]: handlePending,
        [toggleCompleted.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          const index = state.contactsArr.findIndex(
            contact => contact.id === action.payload.id
          );
          state.contactsArrs.splice(index, 1, action.payload);
        },
        [toggleCompleted.rejected]: handleRejected,
      },
    });
    
    export const contactReducer = contactSlice.reducer;





//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.contactsArr.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.contactsArr.findIndex(
//         contact => contact.id === action.payload
//       );
//       if (index !== -1) {
//         state.contactsArr.splice(index, 1);
//       }
//     },
//   },
// });

// export const { addContact, deleteContact } = contactSlice.actions;


// import { createSlice } from "@reduxjs/toolkit";
// import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchTasks.pending]: handlePending,
//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchTasks.rejected]: handleRejected,
//     [addTask.pending]: handlePending,
//     [addTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addTask.rejected]: handleRejected,
//     [deleteTask.pending]: handlePending,
//     [deleteTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [deleteTask.rejected]: handleRejected,
//     [toggleCompleted.pending]: handlePending,
//     [toggleCompleted.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1, action.payload);
//     },
//     [toggleCompleted.rejected]: handleRejected,
//   },
// });

// export const tasksReducer = tasksSlice.reducer;
