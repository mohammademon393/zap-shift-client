import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistration = (data) =>{
      const profileImage = data.photo[0];

        registerUser(data.email, data.password)
        .then(result => {
          console.log(result.user);
          // upload image to imgbb
          const formData = new FormData();
          formData.append("image", profileImage);

          const imageApiKey = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Host_Key}`;

          axios
            .post(imageApiKey, formData)
            .then((res) => {
              console.log("after image upload", res.data.data.url);

              // update user profile
              const userProfile = {
                displayName: data.name,
                photoUrl: res.data.data.url,
              };
              updateUserProfile(userProfile)
              .then(()=>{
                console.log('profile update done');
                navigate(location?.state || '/');
              })
              .catch(err =>{
                console.log(err);
              })
            })
            .catch((err) => {
              console.log("Image upload error:", err);
            });

        })
        .catch(error => {
          console.error(error);
        });
    }

    return (
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h2 className="card-title text-3xl pl-6 mt-5">Create an account.</h2>
        <p className="text-gray-500 text-sm pl-6">Welcome to ZapShift!</p>
        <form
          onSubmit={handleSubmit(handleRegistration)}
          className="w-full max-w-sm mx-auto card-body"
        >
          <fieldset className="fieldset">
            {/* Photo field */}
            <label className="label">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input"
              placeholder="Your photo"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is required</p>
            )}

            {/* name field */}
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}

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
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
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
              state={location.state}
              to="/login"
              className="link link-hover text-blue-500 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
        {/* social login */}
        <SocialLogin></SocialLogin>
      </div>
    );
};

export default Register;