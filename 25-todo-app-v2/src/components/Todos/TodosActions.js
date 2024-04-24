import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

import Button from '../UI/Button'
import styles from './TodosActions.module.css'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
  sortByAlphabet,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
      <Button title="Sort By Alphabet" onClick={sortByAlphabet}>
        <span>sort</span>
      </Button>
    </div>
  )
}

export default TodosActions
