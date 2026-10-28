import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { api } from "../libs/axios.js";
import Todos from "../components/Todos.jsx";
import CreateTodo from "../components/CreateTodo.jsx";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await api.get("/todos");
      console.log(res.data.todos);
      setTodos(res.data.todos);
    };
    fetchTodos();
  }, []);

  const addedTodo = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const deletedTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
  };

  const updatedTodo = (updatedTodo) => {
    setTodos(
      todos.map((t) =>
        t._id === updatedTodo._id || t.id === updatedTodo._id ? updatedTodo : t,
      ),
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-8 w-full">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-base-content">My tasks</h1>
      </div>

      {/* Add Task Card */}
      <CreateTodo addedTodo={addedTodo} />

      {/* Task List Container Card */}

      {/* Task Item 1 (Completed) */}
      <Todos
        todos={todos}
        deletedTodo={deletedTodo}
        updatedTodo={updatedTodo}
      />
    </div>
  );
};

export default HomePage;
