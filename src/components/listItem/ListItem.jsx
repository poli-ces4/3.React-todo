import Item from '../item/Item';

const ListItem = ({ todos, setTodos }) => {
	const deleteTodo = ({ id }) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};
	return (
		<div>
			{todos.map(todo => (
				<Item key={todo.id} todo={todo} deleteTodo={deleteTodo} />
			))}
		</div>
	);
};

export default ListItem;
