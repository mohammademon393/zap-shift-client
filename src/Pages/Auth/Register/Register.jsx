import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';

const Register = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const { registerUser } = useAuth();

    const handleRegistration = (data) =>{
        console.log('after registration', data);
        registerUser(data.email, data.password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.error(error);
        });
    }

    return (
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <h2 className="card-title text-3xl pl-6 mt-5">Welcome to Zap-Shift</h2>
          <p className="text-gray-500 text-sm pl-6">
            Please create an account to get started with Zap-Shift and manage
            your work shifts efficiently.
          </p>
          <form
            onSubmit={handleSubmit(handleRegistration)}
            className="w-full max-w-sm mx-auto card-body"
          >
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}

              {/* password field */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must be at least one uppercase, one lowercase, one
                  number and one spaical simbol.
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              {/* submit button */}
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p className="text-gray-500 font-medium px-5">
              Already you have an account?{" "}
              <Link
                to="/login"
                className="link link-hover text-blue-500 font-semibold"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
    );
};

export default Register;