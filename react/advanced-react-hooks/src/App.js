import React, { useReducer } from 'react';
import uuid from 'uuid/v4';
import logo from './logo.svg';
import './App.css';

const appReducer = (state, action) => {
	switch (action.type) {
		case 'add': {
			return [
				...state,
				{
					id: uuid(),
					text: '',
					completed: false
				}
			];
		}

		default: {
			return state;
		}
	}
};

const App = () => {
	const [ state, dispatch ] = useReducer(appReducer, []);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<button onClick={() => dispatch({ type: 'add' })}>Add</button>
				<ToDosList items={state} />
			</header>
		</div>
	);
};

export default App;

export const ToDosList = ({ items }) => items.map((item) => <ToDoItem key={item.id} {...item} />);

export const ToDoItem = ({ id }) => <div>{id}</div>;
