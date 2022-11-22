import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
	arrContacts: []
};

const contactSlice = createSlice({
	name: 'contacts',
	initialState: contactsInitialState,
	reducers: {
		addContact(state, action) {
			state.arrContacts.push(action.payload);
		},
		deleteContact(state, action) {
			const index = state.arrContacts.findIndex(el => el.id === action.payload);
			state.arrContacts.splice(index, 1);
		},
		toggleCompleted(state, action) {
			for (const task of state) {
				if (task.id === action.payload) {
					task.completed = !task.completed;
					break;
				}
			}
		},


	},
})

export const { addContact, deleteContact, toggleCompleted } = contactSlice.actions

export const contactReducer = contactSlice.reducer;


