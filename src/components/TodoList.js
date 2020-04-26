import React from 'react';
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilter";
import {loadTodos, removeAllTodos} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {CustomPreloader, Dots} from 'react-preloaders';


const TodoList = ({todos}) => {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.todos.loading)
	return(
		<div className="bg-gray-100 rounded p-4">
			<h2 className="text-2xl mb-5">Todos List <span className="font-bold">({todos.length})</span></h2>
			<div className="flex">
				<div className="w-4/5">
					{todos.length <= 0 &&
						<div className="text-red-600">You don't have any todo items.</div>
					}
					{todos.length > 0 &&
						todos.map(todo => <TodoItem todo={todo} key={todo.id}/>)
					}
				</div>
				<div className="w-1/5 ml-3">
					<TodoFilters />
					<button onClick={() => dispatch(loadTodos())}
					        className="bg-blue-800 w-full text-white p-2 mt-2 rounded disabled:opacity-75"
					        disabled={loading}>
						{loading ? <span>Loading...</span> : <span>Load Todos</span>}
					</button>
					<button onClick={() => dispatch(removeAllTodos())}
					        className="bg-red-700 w-full text-white p-2 mt-2 rounded disabled:opacity-75"
					        disabled={todos.length <= 0}>Clear Todos List</button>
				</div>

			</div>
		</div>
	)
};

export default TodoList;
