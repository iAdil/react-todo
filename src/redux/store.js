import rootReducer from "./reducers/rootReducer";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {addDateToLoadedTodos, changeLoadedTodosId} from "./middleware/loadedTodosMiddleware";
// dev tools middleware
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export default createStore(
	rootReducer,
	composeSetup(
		applyMiddleware(thunk, addDateToLoadedTodos, changeLoadedTodosId)
	)
)
