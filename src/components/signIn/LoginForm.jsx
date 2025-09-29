import { useEffect, useState } from "react"
import EntryDiv from "./EntryDiv"
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [isSmall, setSmall] = useState(false);
    const [formData, setFormData] = useState({
        emailOrPhone: "",
        password: ""
    })

    const inputChangeHandler = (e) => {
        setFormData((prv) => {
            return {
                ...prv,
                [e.target.name]: e.target.value,
            }
        })
    }

    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth <= 768) {
                setSmall(true);
            } else {
                setSmall(false);
            }
        }

        resizeHandler();

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, [])

    return (
        <form className="bg-black/70 w-full h-[41rem] lg:h-[42rem] overflow-hidden lg:w-[35%] px-8 lg:px-14 py-8 transition-all duration-200 ease-linear mt-18 lg:mt-28">
            <h1 className="text-white font-bold text-2xl lg:text-4xl mb-8 lg:mb-10">Sign In</h1>
            <div className="flex flex-col gap-4.5">
                <EntryDiv inputChangeHandler={inputChangeHandler} formData={formData} name="emailOrPhone" placeholder="Email or mobile number" isSmall={isSmall} type="text" errorMsg="Please enter a valid email or mobile number." />

                <EntryDiv inputChangeHandler={inputChangeHandler} formData={formData} name="password" placeholder="Password" isSmall={isSmall} type="password" errorMsg="Your password must contain between 4 and 60 characters." />

                <button type="button" onClick={(e) => e.stopPropagation()} className="w-full bg-[rgb(229,9,20)] text-white font-semibold tracking-wide py-1.5 lg:py-2 rounded text-lg lg:text-xl active:scale-95 transform transition-all duration-75 ease-linear cursor-pointer hover:bg-[rgb(202,3,13)] ">Sign In</button>

                <span className="font-bold tracking-wider text-gray-300 text-center">OR</span>

                <button type="button" className="text-gary-300 font-semibold text-white tracking-wide w-full bg-white/20 hover:bg-white/10 py-1.5 lg:py-2 rounded text-lg lg:text-xl active:scale-95 transform transition-all duration-75 ease-linear cursor-pointer">Continue with Google</button>

                <span className="text-white font-semibold text-center underline lg:text-lg cursor-pointer hover:text-gray-300 transition-all duration-100 ease-linear">Forgot password?</span>

                <p className="flex items-center gap-1 text-lg">
                    <span className="text-gray-300 font-medium">New to CineAi?</span>
                    <Link className="text-white font-bold">Sign up now.</Link>
                </p>

                <p className="text-gray-400 leading-5">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </div>
        </form>
    )
}

export default LoginForm