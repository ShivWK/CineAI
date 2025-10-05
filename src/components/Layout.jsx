import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        alert("User logged in");
        console.log(user)
      } else {
        alert("User logged out")
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