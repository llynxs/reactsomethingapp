import './App.css';
import { TodoList } from './containers/TodoList';
import { Form } from './containers/Form';

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <header className="App-header">
          <h1>Header</h1>
        </header>
        <main className="App-main">
          <section className="App-section">
            <TodoList />
            <Form />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
