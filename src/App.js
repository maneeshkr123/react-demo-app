import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import { AuthRoute } from "./components/AuthRoute";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedRoute><HomePage/></AuthenticatedRoute>,
  },
  {
    path: "/login",
    element: <AuthRoute><Login/></AuthRoute>,
  },
  {
    path: "*",
    element: <p>There's nothing here: 404!</p>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
