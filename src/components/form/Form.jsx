import style from './Form.module.css';
import uuid4 from 'uuid4';
const Form = ({ inputTodo, setInputTodo, todos, setTodos }) => {
	const handlerSubmit = e => {
		e.preventDefault();
		const newTodo = {
			id: uuid4(),
			title: inputTodo,
			completed: false,
		};
		setTodos([...todos, newTodo]);
		setInputTodo('');
	};
	return (
		<form onSubmit={handlerSubmit}>
			<input
				className={style.taskInput}
				type='text'
				name='task'
				placeholder='Enter todo'
				value={inputTodo}
				onChange={e => setInputTodo(e.target.value)}
			/>
			<button type='submit' className={style.button}>
				Add
			</button>
		</form>
	);
};

export default Form;
