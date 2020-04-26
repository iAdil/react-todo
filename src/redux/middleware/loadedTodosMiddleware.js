import {LOAD_TODOS} from "../types";
import {v4 as uuid} from 'uuid'
export function addDateToLoadedTodos() {
	return next => action => {
		if(action.type === LOAD_TODOS){
			action.payload.map(todo => todo.date = new Date())
		}
		return next(action)
	}
}

export function changeLoadedTodosId() {
	return next => action => {
		if(action.type === LOAD_TODOS){
			action.payload.map(todo => todo.id = uuid())
		}
		return next(action)
	}
}
