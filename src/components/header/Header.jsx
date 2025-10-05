import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { selectLoginStatus } from "../../features/loginSlice";
import { useSelector } from "react-redux";

const Header = ({ showSignIn = true }) => {
  const isLoggedIn = useSelector(selectLoginStatus);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("User signed out");
    } catch (err) {
      console.log("error in signing out".err);
    }
  }

  return (
    <header className='absolute top-0 left-0 w-full bg-transparent h-17 max-lg:px-3 lg:h-24 z-50 flex items-center'>
      <div className='w-[1200px] mx-auto flex justify-between items-center'>
        <p className='text-[rgb(229,9,20)] font-semibold text-4xl lg:text-5xl'>CineAI</p>

        {showSignIn && <div className="flex items-center gap-2.5">
          {isLoggedIn
            ? <button onClick={handleSignOut} className='py-0.5 pb-1.5 lg:pb-2 px-3 lg:px-4 rounded bg-[rgb(229,9,20)] text-white font-semibold tracking-wide lg:text-lg flex items-center justify-center cursor-pointer active:scale-95 transform transition-all duration-75 ease-linear'>Sign Out</button>
            : <Link to={"/login"} className='py-0.5 pb-1.5 lg:pb-2 px-3 lg:px-4 rounded bg-[rgb(229,9,20)] text-white font-semibold tracking-wide lg:text-lg flex items-center justify-center cursor-pointer active:scale-95 transform transition-all duration-75 ease-linear'>Sign In</Link>
          }
        </div>}
      </div>
    </header>
  )
}

export default Header;