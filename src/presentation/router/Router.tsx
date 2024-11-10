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
        path: "/home",
        element: (
          <React.Suspense fallback={<h1>Loading</h1>}>
            <>
              <h1>
                hello
              </h1>
            </>
          </React.Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
