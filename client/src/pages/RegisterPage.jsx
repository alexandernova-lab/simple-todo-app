import React from "react";

const RegisterPage = () => {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-8 shadow-md">
      <legend className="fieldset-legend text-lg font-semibold px-2">
        Register
      </legend>

      <label className="fieldset-label text-base-content mt-2">Name</label>
      <input
        type="text"
        className="input input-bordered input-md w-full bg-base-100"
        placeholder="name"
      />

      <label className="fieldset-label text-base-content mt-2">Email</label>
      <input
        type="email"
        className="input input-bordered input-md w-full bg-base-100"
        placeholder="email@example.com"
      />

      <label className="fieldset-label text-base-content mt-3">Password</label>
      <input
        type="password"
        className="input input-bordered input-md w-full bg-base-100"
        placeholder="••••••••"
      />

      <button className="btn btn-primary mt-6 w-full shadow-sm">
        Register
      </button>
    </fieldset>
  );
};

export default RegisterPage;
