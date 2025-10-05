import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useEffect } from "react";
import { setAuthDetails, setLoggedInStatus } from "../features/loginSlice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
    })
  }, [])

  return (<>
    {/* <Header /> */}
    <Outlet />
    <Footer />
  </>)
}

export default Layout