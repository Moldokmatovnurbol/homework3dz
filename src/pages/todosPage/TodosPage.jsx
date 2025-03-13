import styles from './TodosPage.module.css';
import Todo from '../../components/Todo'

const TodosPage = () => {
    const todos = ["todo 1", "todo 2", "todo 3"];

    return (
        <div className={styles.todos}>
            <h1>Todos Page</h1>
            {todos.map((item, index) => (
                <Todo key={index} todo={item} />
            ))}
        </div>
    );
};

export default TodosPage;