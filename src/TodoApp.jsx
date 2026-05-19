import { useState, useEffect } from 'react';
import './App.css';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Cargar desde localStorage al montar
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch (error) {
        console.error('Error al cargar todos:', error);
      }
    }
  }, []);

  // Guardar en localStorage cada vez que cambien los todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Agregar nueva tarea
  const addTodo = () => {
    if (input.trim() === '') {
      alert('Por favor, escribe una tarea');
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: new Date().toLocaleString('es-ES'),
    };

    setTodos([newTodo, ...todos]);
    setInput('');
  };

  // Eliminar tarea
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Marcar como completada
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Iniciar edición
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditValue(text);
  };

  // Guardar edición
  const saveEdit = (id) => {
    if (editValue.trim() === '') {
      alert('La tarea no puede estar vacía');
      return;
    }
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editValue } : todo
      )
    );
    setEditingId(null);
    setEditValue('');
  };

  // Cancelar edición
  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  // Filtrar tareas
  const getFilteredTodos = () => {
    if (filter === 'active') {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === 'completed') {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  // Limpiar completadas
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Eliminar todas
  const clearAll = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar todas las tareas?')) {
      setTodos([]);
    }
  };

  // Calcular estadísticas
  const stats = {
    total: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="app">
      <div className="header">
        <h1>📝 Mi Lista de Tareas</h1>
        <p className="subtitle">Organiza tu día con estilo</p>
      </div>

      <div className="container">
        {/* Estadísticas */}
        <div className="stats">
          <div className="stat">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-number">{stats.active}</span>
            <span className="stat-label">Activas</span>
          </div>
          <div className="stat">
            <span className="stat-number">{stats.completed}</span>
            <span className="stat-label">Completadas</span>
          </div>
        </div>

        {/* Formulario de entrada */}
        <div className="input-form">
          <div className="input-group">
            <input
              type="text"
              className="todo-input"
              placeholder="Añade una nueva tarea..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button className="btn-add" onClick={addTodo}>
              ➕ Añadir
            </button>
          </div>
          <span className="char-count">{input.length}/50 caracteres</span>
        </div>

        {/* Filtros */}
        <div className="filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todas ({stats.total})
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Activas ({stats.active})
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completadas ({stats.completed})
          </button>
        </div>

        {/* Lista de tareas */}
        {filteredTodos.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🎯</span>
            <p>
              {filter === 'all' && '¡No hay tareas! Añade una para comenzar'}
              {filter === 'active' && '¡No hay tareas activas! Felicidades 🎉'}
              {filter === 'completed' && '¡No hay tareas completadas!'}
            </p>
          </div>
        ) : (
          <div className="todos-container">
            <ul className="todos-list">
              {filteredTodos.map((todo) => (
                <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      className="todo-checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    {editingId === todo.id ? (
                      <input
                        type="text"
                        className="todo-edit-input"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') saveEdit(todo.id);
                          if (e.key === 'Escape') cancelEdit();
                        }}
                        autoFocus
                      />
                    ) : (
                      <div>
                        <span className="todo-text">{todo.text}</span>
                        <span className="todo-date">{todo.createdAt}</span>
                      </div>
                    )}
                  </div>

                  {editingId === todo.id ? (
                    <div className="todo-actions">
                      <button
                        className="btn-edit"
                        onClick={() => saveEdit(todo.id)}
                        title="Guardar"
                      >
                        ✅
                      </button>
                      <button
                        className="btn-delete"
                        onClick={cancelEdit}
                        title="Cancelar"
                      >
                        ❌
                      </button>
                    </div>
                  ) : (
                    <div className="todo-actions">
                      <button
                        className="btn-edit"
                        onClick={() => startEdit(todo.id, todo.text)}
                        title="Editar"
                      >
                        ✏️
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => deleteTodo(todo.id)}
                        title="Eliminar"
                      >
                        🗑️
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Acciones */}
        {todos.length > 0 && (
          <div className="actions" style={{ marginTop: '1.5rem' }}>
            {stats.completed > 0 && (
              <button className="btn-clear" onClick={clearCompleted}>
                🧹 Limpiar completadas ({stats.completed})
              </button>
            )}
            {todos.length > 0 && (
              <button className="btn-clear-all" onClick={clearAll}>
                🗑️ Eliminar todas
              </button>
            )}
          </div>
        )}
      </div>

      <div className="footer">
        <p>💡 Tus tareas se guardan automáticamente en tu navegador</p>
      </div>
    </div>
  );
}
