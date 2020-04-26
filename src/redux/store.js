import rootReducer from "./reducers/rootReducer";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {addDateToLoadedTodos, changeLoadedTodosId} from "./middleware/loadedTodosMiddleware";
export default createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, addDateToLoadedTodos, changeLoadedTodosId),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)
