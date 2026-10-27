import React from "react";
import { Link } from "react-router";
import { NotebookPen } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-200 px-4 shadow-xs">
      {/* Brand / Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost text-xl normal-case font-bold text-primary"
        >
          <NotebookPen />
          DailyNote
        </Link>
      </div>

      {/* Navigation & User Menu */}
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal items-center px-1 gap-1">
          <li>
            <Link to="/login" className="btn btn-ghost btn-sm">
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="btn btn-primary btn-sm text-primary-content"
            >
              Sign Up
            </Link>
          </li>

          {/* User Avatar Badge */}
          <li className="ml-2">
            <div className="avatar avatar-placeholder cursor-pointer p-0">
              <div className="bg-secondary text-secondary-content w-9 rounded-full ring ring-secondary/20 ring-offset-base-100 ring-offset-2">
                <span className="text-xs font-semibold">JD</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
