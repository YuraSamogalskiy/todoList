import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  console.log(todos)
  const addTodoHandler = text => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodoHandler = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const editTodoHandler = (id, newText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter(todo => !todo.isCompleted))
  }

  const alphabetSort = () => {
    const sortedTodos = [...todos].sort((a, b) => a.text.localeCompare(b.text))
    setTodos(sortedTodos)
  }

  const completedTodosCount = todos.filter(todo => todo.isCompleted).length
  console.log(completedTodosCount)

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          sortByAlphabet={alphabetSort}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
        editTodo={editTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}

export default App
