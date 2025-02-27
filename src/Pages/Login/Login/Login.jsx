import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()
    const from = location?.state?.from?.pathname || '/'

    const [passwordEye, setPasswordEye] = useState(false)
    const showPassword = () => {
        setPasswordEye(!passwordEye)
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
        const { email } = data;
        const { password } = data;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully logged in',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
                navigate(from, {replace:true})
                reset()
            }
        ) 
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
                                Swal.fire({
                                    title: 'Success',
                                    text: 'You have successfully logged in',
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


    return (
        <div className="mx-auto flex justify-center items-center">
            <Helmet>
                <title>DR-Estate | Login</title>
            </Helmet>
            <div className="hero min-h-screen -mt-10 ml-40 w-1/2">
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-black">
                        <div className="w-full p-4 rounded-md sm:p-8 dark:bg-gray-50 dark:text-gray-800 bg-emerald-400 bg-opacity-80">
                            <h2 className="text-3xl font-semibold text-center px-16">Login to your account</h2>
                            <br />
                            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-4 --w-1/2 mx-auto">
                                <div className="space-y-2">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-black text-sm text-start">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="Your@email.com" className="w-full text-black px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("email", { required: true })} />
                                    </div>
                                    <div className="space-y-2 relative">
                                        <div className="flex justify-between">
                                            <label htmlFor="password" className="text-sm text-black">Password</label>
                                        </div>
                                        <input type={(!passwordEye) ? 'password' : 'text'} name="password" id="password" placeholder="*****" className="w-full text-black px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("password", {
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
                                <input type="submit" className="w-full px-8 py-3 font-bold border-black rounded-md border dark:bg-violet-600 dark:text-gray-50" value="Sign in" />
                            </form>

                            <div className="flex items-center w-full my-4">
                                <hr className="w-full border-black dark:text-gray-600" />
                                <p className="px-3 dark:text-gray-600">OR</p>
                                <hr className="w-full border-black dark:text-gray-600" />
                            </div>

                            <div className="my-6 space-y-4">
                                <button onClick={() => handleSocialLogin(signInWithGoogle)} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border border-black rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                    <p>Login with Google</p>
                                </button>
                            </div>



                            <h4 className="text-sm text-center dark:text-gray-600">Do not have account?
                                <Link to={'/register'}><p className="focus:underline hover:underline">Sign up here</p></Link>
                            </h4>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-1/2">
                <img className="overflow-hidden" src="https://i.ibb.co/XCDQKSR/20602937-6325230.jpg" alt="" />
            </div>
        </div>
    );
};

export default Login;