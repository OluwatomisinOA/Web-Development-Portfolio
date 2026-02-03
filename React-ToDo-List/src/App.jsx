import { useState } from 'react';
import styles from './App.module.css';
import { TodoForm } from './components/ToDoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';
import { TodoFilters } from './components/TodoFilters/TodoFilters';

const TODOS_DEFAULT = [
  {
    id: "1",
    name: "Buy an Ice Cream",
    description: "The white one with chocolate",
    deadline: "2026-02-09",
    priority: "low",
    completed: false,
  },
  {
    id: "2",
    name: "Sell old MacBook Pro 2025",
    description: "Try to sell it on OLX",
    deadline: "2026-02-28",
    priority: "high",
    completed: false,
  },
  {
    id: "3",
    name: "Charge PowerBank",
    description: "For the next travelling",
    deadline: "2026-02-15",
    priority: "medium",
    completed: true,
  },
  {
    id: "4",
    name: "Test Todo Only with name",
    description: "",
    deadline: "",
    priority: "none",
    completed: false,
  }
]

function App() {

  const [todos, setTodos] = useState(TODOS_DEFAULT);
  const [filters, setFilters] = useState({});

  function handleCreate(newTodo) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {id: `${prevTodos.length + 1}`, ...newTodo}
    ])
  }

  function handleUpdate(id, newTodo) {
    setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? newTodo : todo))
  }

  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  function handleFilterTodos(todo) {
    const { completed, priority } = filters;

    return (
      (completed === "" || todo.completed === completed) &&
      (priority === "" || todo.priority === priority)
    )
  } 

  return (

    <div className={styles.App}>

      <header className={styles.Header}>
        <img className={styles.logo} src="/to-do.png" alt="To-Do logo" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        <TodoFilters onFilter={setFilters} />
        <TodoList todos={todos.filter(handleFilterTodos)} onUpdate={handleUpdate} onDelete={handleDelete}/>
      </div>

    </div>

  );
  
}

export default App
