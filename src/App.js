import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FiTrash2, FiGithub, FiLinkedin } from 'react-icons/fi';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => setTodo(e.target.value);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodoList([...todoList, { id: uuid(), todo: todo, completed: false }]);
    setTodo('');
  };

  const onDelete = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  const handleCheck = (id) => {
    const newTodoList = todoList.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(newTodoList);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="title">🎉 My WishList App</h1>
        <div className="input-section">
          <input
            value={todo}
            onChange={handleChange}
            placeholder="Enter your wish"
            className="input-box"
            onKeyDown={e => e.key === 'Enter' && addTodo()}
          />
          <button className="add-btn" onClick={addTodo}>Add</button>
        </div>
        <div className="list-section">
          {todoList.length > 0 ? (
            todoList.map(todo => (
              <div className="todo-item" key={todo.id}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleCheck(todo.id)}
                    className="checkbox"
                  />
                  <span className={todo.completed ? 'strike-through' : ''}>
                    {todo.todo}
                  </span>
                </label>
                <button className="delete-btn" onClick={() => onDelete(todo.id)}>
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))
          ) : (
            <div className="empty-list">No wishes yet. Add your first wish!</div>
          )}
        </div>
      </div>
      <footer className="footer">
        <span>Made by <strong>Tanjil Alam</strong></span>
        <span className="footer-links">
          <a href="https://github.com/Heykcer" target="_blank" rel="noopener noreferrer">
            <FiGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/tanjilalam/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={22} />
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;