import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { lazy } from "react";
// import Home from "./components/home/Home";
const Home = lazy(() => import("./components/home/Home"))
import Layout from "./components/Layout";
import Login from "./components/signIn/Login";
import loginLoader from "./components/signIn/loginLoader";
import Browse from "./components/browse/Browse";
import browseLoader from "./components/browse/browseLoader";

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="login"
        loader={loginLoader}
        element={<Login />}
      />
      <Route
        path="browse"
        loader={browseLoader}
        element={<Browse />}
      />
    </Route>
  ))

  return <RouterProvider router={router} />
}

export default App;