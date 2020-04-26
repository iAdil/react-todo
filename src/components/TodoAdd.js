import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import {addTodo} from "../redux/actions";
import connect from "react-redux/es/connect/connect";
class TodoAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: ''
		}
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		const {todo} = this.state;
		if(!todo.trim()){
			return false;
		}
		const newTodoItem = {
			id: uuid(),
			title: todo,
			date: new Date()
		}
		this.props.addTodo(newTodoItem)
		this.setState({todo: ''})
	}

	render() {
		return (
			<div className="mb-4">
				<form onSubmit={this.handleSubmit}>
					<div className="flex ">
						<input type="text" className="flex-grow  p-2 border border-r-0  border-blue-300 outline-none" id="todo" name="todo" placeholder="What to do?" value={this.state.todo} onChange={this.handleChange} />

						<button type="submit" className="bg-blue-300 p-3 rounded-r outline-none font-semibold">Add +</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(null, {addTodo})(TodoAdd);
