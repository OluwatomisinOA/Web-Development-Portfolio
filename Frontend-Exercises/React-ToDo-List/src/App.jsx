import styles from './App.module.css';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';
import { TodoFilters } from './components/TodoFilters/TodoFilters';
import { useTodos } from './hooks/todo';
import { Alert } from './components/Alert/Alert';
import { Loader } from './components/Loader/Loader';

function App() {
  
  const todos = useTodos();

  return (

    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.logo} src="/to-do.png" alt="To-Do logo" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        {todos.isLoading && <Loader />}
        {!!todos.error.message && (
          <Alert onClear={todos.error.clear}>{todos.error.message}</Alert>
        )}
        <TodoForm onCreate={todos.create} />
        <TodoFilters onFilter={todos.filter} />
        <TodoList
          todos={todos.data}
          onUpdate={todos.update}
          onDelete={todos.delete}
        />
      </div>

    </div>

  );
  
}

export default App;