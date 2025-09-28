import { useState, useRef } from "react";
import { CircleX } from "lucide-react";

const EntryDiv = ({
    formData,
    inputChangeHandler,
    placeholder,
    name,
    isSmall,
    type,
    errorMsg
}) => {
    const [move, setMove] = useState(false);
    const [error, setError] = useState("");
    const InputRef = useRef(null);

    const divClickHandler = () => {
        InputRef.current.focus();
    }

    const focusHandler = () => {
        setError("");
        setMove(true);
    }

    const blurHandler = () => {
        if (formData[name].length === 0) {
            setMove(false);
            setError(errorMsg);
        } else {

        }
    }

    return (
        <div>
            <div onClick={divClickHandler} className={`Relative h-16 rounded border ${error ? "border-red-500" : "border-gray-400"} w-full p-2 cursor-text`}>
                <input
                    ref={InputRef}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    type={type}
                    value={formData.emailOrPhone}
                    name={name}
                    onChange={inputChangeHandler}
                    className="relative -bottom-5 w-full border-none outline-none text-white font-semibold text-lg"
                ></input>
                <p className={`relative text-gray-300 font-medium tracking-wide ${move ? "bottom-8" : "text-xl bottom-4.5"} transition-all duration-150 ease-linear`}>{placeholder}</p>
            </div>
            {
                error && (
                    <p className="text-red-500 text-xs lg:text-sm font-medium tracking-wide mt-2 flex items-center gap-1">
                        <CircleX size={isSmall ? 18 : 20} />
                        <span>{error}</span>
                    </p>
                )
            }
        </div>
    )
}

export default EntryDiv