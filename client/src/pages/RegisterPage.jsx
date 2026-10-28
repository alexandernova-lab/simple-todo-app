import { useForm } from "react-hook-form";
import { registerSchema } from "../schema/userSchema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../libs/axios.js";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const RegisterPage = () => {
  // Naviage
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  // Handle Register Form
  const submit = async (data) => {
    try {
      const res = await api.post("/users/register", data);
      if (res.status === 201) {
        navigate("/login");
        toast.success("Register success");
      }
    } catch (error) {
      toast.error("Register failed");
    }
  };
  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit(submit)}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-8 shadow-md">
        <legend className="fieldset-legend text-lg font-semibold px-2">
          Register
        </legend>

        <label className="fieldset-label text-base-content mt-2">Name</label>
        <input
          {...register("name")}
          type="text"
          className="input input-bordered input-md w-full bg-base-100 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="name"
        />
        {errors.name && <p className=" text-error">{errors.name.message}</p>}

        <label className="fieldset-label text-base-content mt-2">Email</label>
        <input
          {...register("email")}
          type="email"
          className="input input-bordered input-md w-full bg-base-100 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder="email@example.com"
        />
        {errors.email && <p className=" text-error">{errors.email.message}</p>}

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
          <p className=" text-error">{errors.password.message}</p>
        )}

        <button type="submit" className="btn btn-primary mt-6 w-full shadow-sm">
          Register
        </button>
      </fieldset>
    </form>
  );
};

export default RegisterPage;
