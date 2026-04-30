import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {register, handleSubmit, formState:{ errors }} = useForm();
    const { signInUser } = useAuth();

    const handleLogin =(data)=>{
        console.log('after click', data)
        signInUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            
        })
        .catch(error =>{
            console.log(error.message);
            
        })
    }

    return (
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="fieldset">
            {/* email field */}
            <label className="label">Email</label>
            <input 
              type="email" 
              {...register("email", { required: true })} 
              className="input" 
              placeholder="Email" 
            />
            {
                errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
            }

            {/* password field */}
            <label className="label">Password</label>
            <input 
              type="password" 
              {...register("password", { required: true, minLength: 6,})} 
              className="input" 
              placeholder="Password" 
            />
            {
                errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
            }
            {
                errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be at least 6 characters</p>
            }
            {/* {
                errors.password?.type === 'pattern' && <p className='text-red-500'>Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character</p>
            }
             */}

            {/* submit & forgot */}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    );
};

export default Login;