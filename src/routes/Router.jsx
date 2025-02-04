import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Articles from "../pages/Articles";
import ArticleDetail from "../pages/ArticleDetail";
import CalorieCalculator from "../pages/CalorieCalculator"
// import ErrorPage from "../pages/ErrorPage";  // Assuming you have this page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/articles/:id",
    element: <ArticleDetail />,
  },
  {
    path: "/CalorieCalculator",
    element: <CalorieCalculator />,
  },
]);

export default router;
