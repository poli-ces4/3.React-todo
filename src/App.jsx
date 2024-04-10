import { useState } from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Form from './components/form/Form';
import ListItem from './components/listItem/ListItem';
const App = () => {
	const [inputTodo, setInputTodo] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className={style.container}>
			<div className={style.appwrapper}>
				<div>
					<Header />
				</div>
				<div>
					<Form
						inputTodo={inputTodo}
						setInputTodo={setInputTodo}
						todos={todos}
						setTodos={setTodos}
					/>
				</div>
				<div>
					<ListItem todos={todos} setTodos={setTodos} />
				</div>
			</div>
		</div>
	);
};

export default App;
