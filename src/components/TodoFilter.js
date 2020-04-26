import React from 'react';
import {connect} from "react-redux";
import {toggleFilter} from "../redux/actions";

const TodoFilters = ({filter, toggleFilter}) => {
	return (
		<div className="p-2 shadow">
			<h3 className="border-b font-semibold">Filters</h3>
			<div className="flex flex-col mt-3">
				<label>
					<input type="radio" name="filter"  value="all" checked={filter === 'all'} onChange={(e) => toggleFilter(e.target.value)}/> All
				</label>
				<label>
					<input type="radio" name="filter" value="completed" checked={filter === 'completed'} onChange={(e) => toggleFilter(e.target.value)}/> Completed
				</label>
				<label>
					<input type="radio" name="filter" value="incomplete" checked={filter === 'incomplete'} onChange={(e) => toggleFilter(e.target.value)}/> Incomplete
				</label>
			</div>
		</div>
	);
};
const mapStateToProps = state => ({
	filter: state.todos.filter
})
export default connect(mapStateToProps, {toggleFilter})(TodoFilters);
