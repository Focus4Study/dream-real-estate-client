import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Registration = () => {

    const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const [passwordEye, setPasswordEye] = useState(false)
    const showPassword = () => {
        setPasswordEye(!passwordEye)
    }
    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photoURL: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data) {
                                    console.log('user added');
                                    Swal.fire({
                                        title: 'Success',
                                        text: 'You have successfully registered',
                                        icon: 'success',
                                        confirmButtonText: 'Continue'
                                    })
                                }
                            })
                            navigate('/')
            })
            .catch(
                error => {
                    console.log(error),
                        Swal.fire({
                            title: 'Error',
                            text: 'Sorry something went wrong',
                            icon: 'error',
                            confirmButtonText: 'Close'
                        })
                }

            )
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onTouched'
    });

    const onSubmit = data => {
        const { name } = data;
        const { email } = data;
        const { password } = data;
        const { photoURL } = data;
        reset()

        createUser(email, password, name)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(name, photoURL)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email,
                            photoURL: photoURL
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added');
                                    Swal.fire({
                                        title: 'Success',
                                        text: 'You have successfully registered',
                                        icon: 'success',
                                        confirmButtonText: 'Continue'
                                    })
                                }
                            })
                            navigate('/')
                    })

            })
            .catch(
                error => {
                    console.log(error),
                        Swal.fire({
                            title: 'Error',
                            text: 'Sorry something went wrong',
                            icon: 'error',
                            confirmButtonText: 'Close'
                        })
                }

            )
    }


    return (
        <div className="mx-auto flex justify-center items-center">
            <Helmet>
                <title>DR-Estate | Registration</title>
            </Helmet>
            <div className="hero min-h-screen -mt-10 ml-40">
                <div className="hero-content text-center text-black">
                    <div className="py-10">
                        <div className="w-full p-4 rounded-md sm:p-8 dark:bg-gray-50 dark:text-gray-800 bg-emerald-400 bg-opacity-80">
                            <h2 className="mb-3 text-3xl font-semibold text-center px-16">Register a new Account</h2>
                            <br />
                            <form noValidate="" onSubmit={handleSubmit(onSubmit)} action="" className="space-y-8 -w-1/2 mx-auto">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="Name" required className="block text-sm text-start">Name</label>
                                        <input type="text" name="name" id="name" placeholder="Your Name Here" className="w-full px-3 py-2 text-black border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("name", { required: true })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="photoURL" required className="block text-sm text-start">Photo URL</label>
                                        <input type="text" name="photoURL" id="photoURL" placeholder="Your Photo Url here" className="w-full px-3 py-2 text-black border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("photoURL", { required: true })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" required className="block text-sm text-start">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="Your@email.com" className="w-full text-black px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("email", { required: true })} />
                                    </div>
                                    <div className="space-y-2 relative">
                                        <div className="flex">
                                            <label htmlFor="password" className="text-sm">Password</label>
                                        </div>
                                        <input type={(!passwordEye) ? 'password' : 'text'} name="password" id="password" placeholder="*****" className="w-full text-black px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                            {...register("password", {
                                                required: true,
                                                pattern: {
                                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{6,}$/,
                                                    message: 'Password must be at least 6 characters long and contain at least one uppercase letter, one special character, and one numeric digit.'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Password must be at least 6 characters long'
                                                }
                                            })} required />
                                        {errors.password && <p className="text-red-600 font-bold max-w-96 text-wrap mx-auto">{errors.password.message}</p>}
                                        <div className="absolute right-3 top-7">
                                            {
                                                (passwordEye === false) ? <IoEyeOff className="text-2xl text-black" onClick={showPassword} /> : <IoEye className="text-2xl text-black" onClick={showPassword} />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" className="w-full px-8 py-3 font-semibold rounded-md border border-black dark:bg-violet-600 dark:text-gray-50" value="Register" />
                            </form>

                            <div className="flex items-center w-1/2 my-4 mx-auto">
                                <hr className="w-full border-black dark:text-gray-600" />
                                <p className="px-3 dark:text-gray-600">OR</p>
                                <hr className="w-full border-black dark:text-gray-600" />
                            </div>

                            <div className="my-6 space-y-4 min-w-1/2 mx-auto">
                                <button onClick={() => handleSocialLogin(signInWithGoogle)} aria-label="Register with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border border-black rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                    <p>Register with Google</p>
                                </button>
                            </div>
                            <p className="text-sm text-center dark:text-gray-600">Already have an account?
                                <Link to={'/login'}><span href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Login here</span></Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <img className="overflow-hidden" src="https://i.ibb.co/JQ5Xd5L/12217759-4934425.jpg" alt="" />
            </div>
        </div>
    );
};

export default Registration;