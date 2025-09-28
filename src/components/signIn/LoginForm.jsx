import { useEffect, useState } from "react"
import EntryDiv from "./EntryDiv"

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
        <form className="bg-black/70 w-full lg:w-[35%] h-fit px-14 py-8 transition-all duration-200 ease-linear mt-28">
            <h1 className="text-white font-bold lg:text-4xl mb-10">Sign In</h1>
            <div className="flex flex-col gap-4.5">
                <EntryDiv inputChangeHandler={inputChangeHandler} formData={formData} name="emailOrPhone" placeholder="Email or mobile number" isSmall={isSmall} type="text" errorMsg="Please enter a valid email or mobile number." />

                <EntryDiv inputChangeHandler={inputChangeHandler} formData={formData} name="password" placeholder="Password" isSmall={isSmall} type="password" errorMsg="Your password must contain between 4 and 60 characters." />

                <button type="button" onClick={(e) => e.stopPropagation()} className="w-full bg-[rgb(229,9,20)] text-white font-semibold tracking-wide py-2 rounded text-xl active:scale-95 transform transition-all duration-75 ease-linear cursor-pointer hover:bg-[rgb(202,3,13)] ">Sign In</button>

                
            </div>
        </form>
    )
}

export default LoginForm