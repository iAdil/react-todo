import {
	ADD_TODO,
	LOAD_TODOS,
	REMOVE_ALL_TODOS,
	REMOVE_TODO,
	TOGGLE_FILTER,
	TOGGLE_TODO,
	TOGGLE_TODOS_LOADING
} from "./types";

export const addTodo = todo => ({
	type: ADD_TODO,
	payload: todo
})

export const removeTodo = todo => ({
	type: REMOVE_TODO,
	payload: todo
})

export const toggleTodo = id => ({
	type: TOGGLE_TODO,
	payload: id
})

export const toggleFilter = filter => ({
	type: TOGGLE_FILTER,
	payload: filter
})

export const loadTodos = () => {
	return async dispatch => {
		dispatch(toggleTodosLoading(true))
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(response => response.json())
			.then(json => {
				setTimeout(() => {
					dispatch(toggleTodosLoading(false))
					dispatch({
						type: LOAD_TODOS,
						payload: json
					})
				}, 1000)
			})
	}
}

export const toggleTodosLoading = (status) => ({
	type: TOGGLE_TODOS_LOADING,
	payload: status
})

export const removeAllTodos = filter => ({
	type: REMOVE_ALL_TODOS
})
