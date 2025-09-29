import { useEffect, useState } from "react"
import EntryDiv from "./EntryDiv"

const LoginForm = () => {
    const [isSmall, setSmall] = useState(false);
    const [isSignUP, setSignUp] = useState(false);

    const [formData, setFormData] = useState({
        emailOrPhone: "",
        password: "",
        userName: "",
    });

    const [formError, setFormError] = useState({
        name: {
            error: false,
            errorMsg: "Please enter a valid name."
        },

        emailOrPhone: {
            error: false,
            errorMsg: "Please enter a valid email or mobile number."
        },

        password: {
            error: false,
            errorMsg: "Your password must contain between 4 and 60 characters."
        }
    })

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

    const inputChangeHandler = (e) => {
        setFormData((prv) => {
            return {
                ...prv,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleForgotPasswordClick = () => {
        setFormError((pre => ({
            ...pre,
            password: {
                error: true,
                errorMsg: "New error occurred"
            }
        })))
    }

    console.log(formError)

    return (
        <form className={`bg-black/70 w-full ${isSignUP ? "h-[42rem] lg:h-[44.5rem]" : "h-[38.5rem] lg:h-[41rem]"} overflow-hidden lg:w-[35%] px-8 lg:px-14 py-8 transition-all duration-200 ease-linear mt-18 lg:mt-28`}>
            <h1 className="text-white font-bold text-2xl lg:text-4xl mb-8 lg:mb-10">
                {isSignUP ? "Sign Up" : "Sign In"}
            </h1>
            <div className="flex flex-col gap-4.5">

                {
                    isSignUP && <EntryDiv inputChangeHandler={inputChangeHandler} formData={formData} name="userName" placeholder="Your name" isSmall={isSmall} type="text" errorMsg={formError.name.errorMsg} isError={formError.name.error} />
                }

                <EntryDiv inputChangeHandler={inputChangeHandler} formData={formData} name="emailOrPhone" placeholder="Email or mobile number" isSmall={isSmall} type="text" errorMsg={formError.emailOrPhone.errorMsg} isError={formError.emailOrPhone.error} />

                <EntryDiv inputChangeHandler={inputChangeHandler} formData={formData} name="password" placeholder="Password" isSmall={isSmall} type="password" errorMsg={formError.password.errorMsg} isError={formError.password.error} />

                <button type="button" onClick={(e) => e.stopPropagation()} className="w-full bg-[rgb(229,9,20)] text-white font-semibold tracking-wide py-1.5 lg:py-2 rounded text-lg lg:text-xl active:scale-95 transform transition-all duration-75 ease-linear cursor-pointer hover:bg-[rgb(202,3,13)] ">
                    {isSignUP ? "Sign Up" : "Sign In"}
                </button>

                <span className="font-bold tracking-wider text-gray-300 text-center">OR</span>

                <button type="button" className="text-gary-300 font-semibold text-white tracking-wide w-full bg-white/20 hover:bg-white/10 py-1.5 lg:py-2 rounded text-lg lg:text-xl active:scale-95 transform transition-all duration-75 ease-linear cursor-pointer">Continue with Google</button>

                {
                    !isSignUP && <span onClick={handleForgotPasswordClick} className="text-white font-semibold text-center underline lg:text-lg cursor-pointer hover:text-gray-300 transition-all duration-100 ease-linear select-none">Forgot password?</span>
                }

                <p className="flex items-center gap-1 text-lg">
                    <span className="text-gray-300 font-medium">
                        {isSignUP ? "Already registered?" : "New to CineAi?"}
                    </span>
                    <span onClick={() => setSignUp(!isSignUP)} className="text-white font-bold cursor-pointer">
                        {isSignUP ? "Sign in now" : "Sign up now"}
                    </span>
                </p>

                <p className="text-gray-400 leading-5">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </div>
        </form>
    )
}

export default LoginForm