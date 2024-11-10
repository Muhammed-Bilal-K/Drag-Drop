import { RouterProvider } from "react-router-dom";
import router from "@/presentation/router/Router";

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
