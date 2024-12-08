import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import ProtectedRoute from "@/presentation/router/ProtectedRoute";
import ErrorPage from "@/presentation/pages/Error/ErrorPage";
import HomeLayout from "../pages/Home/HomePage";
import useLazyReload from "@/hooks/useLazyReload";
const SignInPage = useLazyReload(
  () => import("@/presentation/pages/Auth/SignIn/SignInPage")
);


const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/signIn",
    element: (
      <React.Suspense fallback={<h1>Loading</h1>}>
        <SignInPage />
      </React.Suspense>
    ),
  },
  {
    path: "/",
    element: (
      // <ProtectedRoute>
        <React.Suspense fallback={<h1>Loading</h1>}>
          <HomeLayout />
        </React.Suspense>
      // </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<h1>Loading</h1>}>
            <>
              <div>
                hello
              </div>
            </>
          </React.Suspense>
        ),
      },
      {
        path: "/task",
        element: (
          <React.Suspense fallback={<h1>Loading</h1>}>
            <>
              <div>
                task
              </div>
            </>
          </React.Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
