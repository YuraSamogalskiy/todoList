import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  console.log(todos)

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
