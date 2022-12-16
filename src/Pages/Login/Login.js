import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';


const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || guser)

    let signInError;

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/"

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    if (loading || gloading) {
        return <Loading></Loading>
    }

    if (error || gerror) {
        signInError = <p className="text-red-500"><small>{error?.message || gerror?.message}</small></p>
    }


    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    };



    return (
        <div className="flex justify-center items-center h-screen">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a Valid Email"
                                    }

                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <p role="alert">  <span class="label-text-alt text-red-500">{errors.email.message}</span></p>}
                                {errors.email?.type === 'pattern' && <p role="alert">  <span class="label-text-alt text-red-500">{errors.email.message}</span></p>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be Six Character or Longer"
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <p role="alert">  <span class="label-text-alt text-red-500">{errors.password.message}</span></p>}
                                {errors.password?.type === 'minLength' && <p role="alert">  <span class="label-text-alt text-red-500">{errors.password.message}</span></p>}
                            </label>
                        </div>
                        {signInError}
                        <input className="btn w-full max-w-xs text-white" type="Submit" Value="Login" />
                    </form>
                    <p><small>New to Doctors Portal? <Link className="text-primary" to="/signup">Create New Account</Link></small></p>
                    <div class="divider">OR</div>
                    <button
                        class="btn btn-outline"
                        onClick={() => signInWithGoogle()}
                    >Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;