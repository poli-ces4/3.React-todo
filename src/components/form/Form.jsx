import style from './Form.module.css';
const Form = ({ inputTodo, setInputTodo }) => {
	return (
		<form onSubmit={() => {}}>
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
