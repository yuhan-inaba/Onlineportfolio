import { createBrowserRouter } from "react-router";
import HomePage from "../components/HomePage";
import PortfolioPage from "../components/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/portfolio/:personId",
    Component: PortfolioPage,
  },
]);
