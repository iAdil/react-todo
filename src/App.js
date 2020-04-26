import React from 'react';
import TodoList from "./components/TodoList";
import {connect} from "react-redux";
import TodoAdd from "./components/TodoAdd";
import logo from './images/logo.png'
function App({todos}) {
	return (
		<div className="container mx-auto mt-2">
			<div className="flex flex-wrap  items-center flex-wrap h-16 mb-3">
				<img src={logo} className="h-8 mr-3"/>
				<h1 className="text-4xl">Todo App</h1>
			</div>
			<TodoAdd />
			<TodoList todos={todos}/>
		</div>
	);
}

const filterTodos = (todos, filter) => {
	switch (filter) {
		case 'all':
			return todos
		case 'completed':
			return todos.filter(todo => todo.completed)
		case 'incomplete':
			return todos.filter(todo => !todo.completed)
		default:
			throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = state => ({
	todos: filterTodos(state.todos.todos, state.todos.filter)
})
export default connect(mapStateToProps, null)(App);
