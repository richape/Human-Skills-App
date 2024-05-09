import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<About />} />
    </Route>
  )
)

export default router