import styles from './App.module.css'
import { TodoForm } from './components/ToDoForm/TodoForm';

function App() {

  return (

    <div className={styles.App}>

      <header className={styles.Header}>
        <img className={styles.logo} src="/to-do.png" alt="To-Do logo" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm />
      </div>

    </div>

  );
  
}

export default App
