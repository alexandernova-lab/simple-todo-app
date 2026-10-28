import React, { useState } from "react";
import { Pencil, Trash2, ClipboardList } from "lucide-react";
import { api } from "../libs/axios.js";
import toast from "react-hot-toast";

const Todos = ({ todos, deletedTodo, updatedTodo }) => {
  const [currentTodo, setCurrentTodo] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  // Open modal and pre-fill the input with the current task title
  const handleOpenModal = (todo) => {
    setCurrentTodo(todo);
    setEditTitle(todo.title);
    document.getElementById("edit_todo_modal").showModal();
  };

  //   Todo Update
  const updateTodo = async (e) => {
    e.preventDefault();
    if (!editTitle.trim()) return;
    try {
      const res = await api.put(`/todos/${currentTodo._id}`, {
        title: editTitle,
      });
      if (res.status === 200) {
        // Update the local state
        updatedTodo(res.data.todo);

        toast.success("Todo updated successfully");
        // Close the modal
        document.getElementById("edit_todo_modal").close();
      }
    } catch (error) {
      console.error("Update error:", error.response?.data || error.message);
      toast.error("Failed to update todo");
    }
  };

  // Todo Delete
  const deleteTodo = async (id) => {
    try {
      const res = await api.delete(`/todos/${id}`);
      if (res.status === 200) {
        deletedTodo(id);
        toast.success("Todo deleted successfully");
      }
    } catch (error) {
      toast.error("Failed to delete todo");
    }
  };
  return (
    <>
      {todos.length === 0 && (
        <div className="card w-full bg-base-100 border border-base-300 shadow-sm p-8 my-6">
          <div className="card-body items-center text-center p-0">
            {/* Icon Badge */}
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
              <ClipboardList className="w-6 h-6" />
            </div>

            {/* Title */}
            <h2 className="card-title text-base-content text-lg font-semibold">
              No tasks yet
            </h2>

            {/* Helpful Description */}
            <p className="text-sm text-base-content/60 max-w-xs mt-1">
              Your task list is clear. Add a new task above to get started on
              your day!
            </p>
          </div>
        </div>
      )}
      <div className="bg-base-100 border border-base-300 rounded-box shadow-md overflow-hidden divide-y divide-base-200">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className=" space-y-2 flex items-center justify-between  p-4 hover:bg-base-200/40 transition-colors"
          >
            <label className="flex items-center gap-3 cursor-pointer flex-1">
              <span className="text-base select-none  text-base-content/40">
                {todo.title}
              </span>
            </label>
            <button
              onClick={() => handleOpenModal(todo)}
              className="btn btn-ghost btn-sm btn-square text-base-content/50 hover:text-primary hover:bg-primary/10 transition-colors"
              title="Edit task"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={() => deleteTodo(todo._id)}
              className="btn btn-ghost btn-sm btn-square text-base-content/50 hover:text-error hover:bg-error/10 transition-colors"
              title="Delete task"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* --- DAISYUI EDIT MODAL --- */}
      <dialog id="edit_todo_modal" className="modal">
        <div className="modal-box bg-base-100 border border-base-300">
          <h3 className="font-bold text-lg text-base-content">Edit Task</h3>

          <form onSubmit={updateTodo} className="py-4">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="input input-bordered w-full bg-base-200 text-base-content focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Update your task..."
              autoFocus
            />

            <div className="modal-action mt-6">
              {/* Close button using method="dialog" */}
              <button
                type="button"
                onClick={() =>
                  document.getElementById("edit_todo_modal").close()
                }
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary px-6">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Backdrop click to close */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Todos;
