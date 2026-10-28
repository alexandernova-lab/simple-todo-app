import { useContext } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schema/userSchema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { api } from "../libs/axios.js";
import toast from "react-hot-toast";
import AuthContext from "../contexts/AuthContext.jsx";

const LoginPage = () => {
  // AuthContext
  const { dispatch } = useContext(AuthContext);

  // Navigate
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Form Submit
  const submit = async (data) => {
    try {
      const res = await api.post("/users/login", data);
      if (res.status === 200) {
        dispatch({ type: "LOGIN", payload: res.data });
        navigate("/");
        toast.success("Login success");
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };
  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit(submit)}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-8 shadow-md">
        <legend className="fieldset-legend text-lg font-semibold px-2">
          Login
        </legend>

        <label className="fieldset-label text-base-content mt-2">Email</label>
        <input
          {...register("email")}
          type="email"
          className="input input-bordered input-md w-full bg-base-100 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="email@example.com"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <label className="fieldset-label text-base-content mt-3">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          className="input input-bordered input-md w-full bg-base-100 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <button type="submit" className="btn btn-primary mt-6 w-full shadow-sm">
          Login
        </button>
      </fieldset>
    </form>
  );
};

export default LoginPage;
