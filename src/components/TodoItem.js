import React from 'react';
import connect from "react-redux/es/connect/connect";
import {removeTodo, toggleTodo} from "../redux/actions";

const TodoItem = ({todo, toggleTodo, removeTodo}) => {
	return (
		<div className={`mb-3 p-3 flex justify-between  items-center shadow ${todo.completed && 'opacity-75'}`}>
			<div className="">
				<input type="checkbox" defaultChecked={todo.completed} id={`todo-${todo.id}`} onChange={() => toggleTodo(todo.id)}/>
			</div>
			<div className="ml-4 w-full">
				<label htmlFor={`todo-${todo.id}`} className={`block w-full text-lg ${todo.completed && 'line-through'}`}>
					{todo.title}
				</label>
			</div>
			<div className="text-gray-600 text-xs italic">{todo.date.toLocaleDateString ()}</div>
			<button className="bg-red-600 text-white text-xs px-2 ml-4 rounded " onClick={(e) => removeTodo(todo.id)}>
				<span className="align-text-bottom">remove</span>
			</button>
		</div>
	);
};

export default connect(null, {toggleTodo, removeTodo})(TodoItem);
