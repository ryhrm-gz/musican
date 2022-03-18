import {
  createHashHistory,
  ReactLocation,
  Route,
} from "@tanstack/react-location";
import { Home } from "../pages/Home";
import { Project } from "../pages/Project";

const hashHistory = createHashHistory();
export const location = new ReactLocation({
  history: hashHistory,
});

export const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "project",
    children: [
      {
        path: ":id",
        element: <Project />,
      },
    ],
  },
];
