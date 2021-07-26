import {createStore} from "redux";
import {createAction, createReducer,configureStore, createSlice } from "@reduxjs/toolkit";

/*

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");


const reducer = (state = ["ss"], action) => {
    switch (action.type) {
        case addTodo.type:
            return [...state, { text: action.payload, id: Date.now() }];
        case deleteTodo.type:
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
} */
/*
const reducer = createReducer([], {
	[addTodo]: (state, action) => {
		state.push({ text:action.payload, id:Date.now() });	
	},
	[deleteTodo]: (state, action)=> 
		state.filter(toDo => toDo.id !== action.payload)
});

const store = configureStore({reducer});

export const actionCreators = {
    addTodo,
    deleteTodo
};
*/

const toDos = createSlice({
    name:"toDosReducer",
    initialState:[],
    reducers:{
        add:(state, action) => {
            state.push({ text:action.payload, id:Date.now() });	
        },
        remove:(state, action) => 
		    state.filter(toDo => toDo.id !== action.payload)
    }
});

const store = configureStore({ reducer: toDos.reducer});

console.log(toDos);

export const {add, remove} = toDos.actions;

export default store;