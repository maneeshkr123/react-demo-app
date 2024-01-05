import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Menu } from "./pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>,
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
