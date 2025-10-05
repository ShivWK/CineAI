import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useEffect } from "react";
import { setAuthDetails, setLoggedInStatus } from "../features/loginSlice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthDetails({
          name: user.displayName,
          email: user.email,
          userId: user.uid,
          accessT: user.stsTokenManager.accessToken,
          refreshT: user.stsTokenManager.refreshToken,
        }))
        dispatch(setLoggedInStatus(true));
      } else {
        dispatch(setAuthDetails({
          name: "",
          email: "",
          userId: null,
          accessT: null,
          refreshT: null,
        }))
        dispatch(setLoggedInStatus(false));
      }

      navigate("/");
    })

    return () => unsubscribe();
  }, [])

  return (<>
    <Header />
    <Outlet />
    <Footer />
  </>)
}

export default Layout