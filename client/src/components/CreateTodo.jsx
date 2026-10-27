import { useState } from "react";
import { api } from "../libs/axios.js";
import { toast } from "react-hot-toast";

const CreateTodo = ({ addedTodo }) => {
  const [title, setTitle] = useState("");
  // Todo Create
  const createTodo = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const res = await api.post("/todos/", { title });
      if (res.status === 201) {
        setTitle("");
        toast.success("Task added successfully");
        addedTodo(res.data.todo);
      }
    } catch (error) {
      toast.error("Failed to add task");
    }
  };
  return (
    <>
      <form
        onSubmit={createTodo}
        className="bg-base-200 border border-base-300 rounded-box p-4 shadow-sm flex gap-3 items-center mb-6"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="What needs to be done?"
          className="input input-bordered w-full bg-base-100 text-base-content"
        />
        <button
          type="submit"
          className="btn btn-primary shrink-0 gap-1 px-5 shadow-sm"
        >
          + Add task
        </button>
      </form>
    </>
  );
};

export default CreateTodo;
