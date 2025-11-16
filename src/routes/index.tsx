// *routes
import type { JSX } from "react";
import Home from "./home";
import NotFound from "./not-found";

interface Route {
  path: string;
  element: JSX.Element;
}

export const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
