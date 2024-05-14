import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import MyQueries from "../pages/MyQueries/MyQueries";
import MyRecommendations from "../pages/MyRecommendations/MyRecommendations";
import Queries from "../pages/Queries/Queries";
import Recommendations from "../pages/Recommendations/Recommendations";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddQuery from "../pages/AddQuery/AddQuery";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AllRecommendations from "../pages/AllRecommendations/AllRecommendations";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/myRecommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations></MyRecommendations>
          </PrivateRoute>
        ),
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
      },
      {
        path: "/recommendations",
        element: (
          <PrivateRoute>
            <Recommendations></Recommendations>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addQuery",
        element: <AddQuery></AddQuery>,
      },
      {
        path: "/productUpdate/:id",
        element: <UpdatePage></UpdatePage>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/viewRecommendations/:id",
        element: <AllRecommendations></AllRecommendations>,
      },
    ],
  },
]);
