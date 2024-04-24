import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'
import { useState } from 'react'

function Todo({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)

  const handleTextChange = event => {
    setEditedText(event.target.value)
  }

  const handleSaveClick = () => {
    editTodo(todo.id, editedText)
    setIsEditing(false)
  }

  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={handleTextChange} />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <div className={styles.todoText}>{todo.text}</div>
          <RiDeleteBin2Line
            className={styles.deleteIcon}
            onClick={() => deleteTodo(todo.id)}
          />
          <FaCheck
            className={styles.checkIcon}
            onClick={() => toggleTodo(todo.id)}
          />
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  )
}

export default Todo
