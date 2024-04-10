import style from './Item.module.css';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
const Item = ({ todo, deleteTodo }) => {
	return (
		<li className={style.list}>
			<div className={style.listItem}>{todo.title}</div>
			<div>
				<button>
					<FaEdit />
				</button>
				<button onClick={() => deleteTodo(todo)}>
					<FaTrash />
				</button>
				<button>
					<FaCheck />
				</button>
			</div>
		</li>
	);
};

export default Item;
