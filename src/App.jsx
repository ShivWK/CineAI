import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { lazy } from "react";
// import Home from "./components/home/Home";
const Home = lazy(() => import("./components/home/Home"))
import Layout from "./components/Layout";

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index  element={<Home />}/>
    </Route>
  ))
  
  return <RouterProvider router={router} />
} 

export default App;