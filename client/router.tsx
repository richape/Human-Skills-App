import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./components/App";
// import About from "./components/About";
import Home from "./components/Home";
import About from "./components/About";
import RegisterForm from "./components/RegisterForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<RegisterForm />} />
    </Route>
  )
)

export default router