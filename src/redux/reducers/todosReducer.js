import {
	ADD_TODO,
	LOAD_TODOS,
	REMOVE_ALL_TODOS,
	REMOVE_TODO,
	TOGGLE_FILTER,
	TOGGLE_TODO,
	TOGGLE_TODOS_LOADING
} from "../types";
import {v4} from "uuid";

const initialState = {
	todos: [
		{id: v4(), title: 'First Item', date: new Date()},
		{id: v4(), title: 'Second Item', date: new Date()},
	],
	filter: 'all',
	loading: false,
}

export default function(state=initialState, action){
	switch (action.type) {
		case ADD_TODO:{
			return {...state, todos: [action.payload,...state.todos]}
		}
		case TOGGLE_TODO:{
			const todos = state.todos.map(todo => {
				if(todo.id === action.payload){
					return {...todo, completed: !todo.completed};
				}
				return todo;
			})
			return {...state, todos}
		}
		case REMOVE_TODO:{
			const todos = state.todos.filter(todo => todo.id !== action.payload)
			return {...state, todos}
		}
		case TOGGLE_FILTER:{
			return {
				...state,
				filter: action.payload
			}
		}
		case LOAD_TODOS:{
			return {...state, todos: [...action.payload, ...state.todos]}
		}
		case REMOVE_ALL_TODOS:{
			return {...state, todos: []}
		}
		case TOGGLE_TODOS_LOADING:{
			return {...state, loading: action.payload}
		}
		default:
			return state;
	}
}
