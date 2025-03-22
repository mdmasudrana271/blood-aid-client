import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [signUpError, setSignUPError] = useState("");
  const handleSignup = (data) => {
    const createdUser = {
      username: data.username,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
    };
    fetch("https://blood-aid-backend.vercel.app/account/register/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createdUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data) {
          toast.success(data.data);
          reset();
        } else {
          toast.error(data.error || "Signup failed");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setSignUPError(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <div className="card overflow-hidden p-5  md:w-6/12 mx-auto w-full shadow-xl bg-base-100 md:my-5">
        <div>
          <h1 className="text-4xl text-center font-bold">Sign up</h1>
          <form className="mt-6" onSubmit={handleSubmit(handleSignup)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                {...register("username", { required: "User Name is required" })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              {errors.username && (
                <p role="alert" className="text-error">
                  {errors.username?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                {...register("first_name", {
                  required: "First Name is required",
                })}
                type="text"
                placeholder="Enter Your First Name"
                className="input input-bordered w-full"
              />
              {errors.first_name && (
                <p role="alert" className="text-error">
                  {errors.first_name?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                {...register("last_name", {
                  required: "Last Name is required",
                })}
                type="text"
                placeholder="Enter Your Last Name"
                className="input input-bordered w-full"
              />
              {errors.last_name && (
                <p role="alert" className="text-error">
                  {errors.last_name?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: "email is required" })}
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p role="alert" className="text-error">
                  {errors.email?.message}
                </p>
              )}
            </div>
            {/* Phone Number Field */}
            {/* <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/, // Basic validation for 10-15 digit numbers
                    message: "Enter a valid phone number",
                  },
                })}
                type="text"
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full"
              />
              {errors.phone && (
                <p role="alert" className="text-error">
                  {errors.phone?.message}
                </p>
              )}
            </div> */}
            <div className="form-control w-full flex justify-between align-center">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must be at least 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                type="password"
                placeholder="******"
                className="input input-bordered w-full"
              />
              {errors.password && (
                <p className="text-error">{errors.password?.message}</p>
              )}
            </div>
            <div className="form-control w-full flex justify-between align-center">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirm_password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "password must be at least 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                type="password"
                placeholder="******"
                className="input input-bordered w-full"
              />
              {errors.confirm_password && (
                <p className="text-error">{errors.confirm_password?.message}</p>
              )}
            </div>
            <p className="text-error">{signUpError}</p>
            <input
              className="btn btn-outline btn-error w-full mt-5 text-xl font-bold"
              value="Signup"
              type="submit"
            />
            <p className="mt-3 text-center">
              Already have an account ?{" "}
              <Link className="text-blue-700" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
