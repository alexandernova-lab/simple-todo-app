import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const HomePage = () => {
  return (
    <div className="max-w-xl mx-auto p-6 mt-8 w-full">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-base-content">My tasks</h1>
        <p className="text-sm text-base-content/60 mt-1 font-medium">
          2 of 3 remaining
        </p>
      </div>

      {/* Add Task Card */}
      <div className="bg-base-200 border border-base-300 rounded-box p-4 shadow-sm flex gap-3 items-center mb-6">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="input input-bordered w-full bg-base-100 text-base-content"
        />
        <button className="btn btn-primary shrink-0 gap-1 px-5 shadow-sm">
          + Add task
        </button>
      </div>

      {/* Task List Container Card */}
      <div className="bg-base-100 border border-base-300 rounded-box shadow-md overflow-hidden divide-y divide-base-200">
        {/* Task Item 1 (Completed) */}
        <div className="flex items-center justify-between p-4 hover:bg-base-200/40 transition-colors">
          <label className="flex items-center gap-3 cursor-pointer flex-1">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary checkbox-sm rounded"
            />
            <span className="text-base select-none line-through text-base-content/40">
              Review pull requests
            </span>
          </label>
          <button
            className="btn btn-ghost btn-sm btn-square text-base-content/50 hover:text-error hover:bg-error/10 transition-colors"
            title="Delete task"
          >
            🗑️
          </button>
        </div>

        {/* Task Item 2 */}
        <div className="flex items-center justify-between p-4 hover:bg-base-200/40 transition-colors">
          <label className="flex items-center gap-3 cursor-pointer flex-1">
            <input
              type="checkbox"
              className="checkbox checkbox-primary checkbox-sm rounded"
            />
            <span className="text-base select-none text-base-content font-medium">
              Plan the week ahead
            </span>
          </label>
          <button
            className="btn btn-ghost btn-sm btn-square text-base-content/50 hover:text-error hover:bg-error/10 transition-colors"
            title="Delete task"
          >
            🗑️
          </button>
        </div>

        {/* Task Item 3 */}
        <div className="flex items-center justify-between p-4 hover:bg-base-200/40 transition-colors">
          <label className="flex items-center gap-3 cursor-pointer flex-1">
            <input
              type="checkbox"
              className="checkbox checkbox-primary checkbox-sm rounded"
            />
            <span className="text-base select-none text-base-content font-medium">
              Reply to design feedback
            </span>
          </label>
          <button
            className="btn btn-ghost btn-sm btn-square text-base-content/50 hover:text-error hover:bg-error/10 transition-colors"
            title="Delete task"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
