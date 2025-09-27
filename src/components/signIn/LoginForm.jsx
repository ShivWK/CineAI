import { useState } from "react"

const LoginForm = () => {
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

    return (
        <form className="bg-black/70">
            <h1>Sign In</h1>
            <input
                type="text"
                value={formData.emailOrPhone}
                name="emailOrPhone"
                onChange={inputChangeHandler}
                placeholder="Email or mobile number"
                className=""
            ></input>
        </form>
    )
}

export default LoginForm