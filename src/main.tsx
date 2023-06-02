import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./routes/NavBar.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MembersDashboard from "./routes/MembersDashboard.tsx";
import { loadTeamsView, loadMemberView } from "./loaders/load.json.tsx";
import TeamsDashboard from "./routes/TeamsDashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: '/members',
        element: <MembersDashboard />,
        loader: loadMemberView
      },
      {
        path: '/teams',
        element: <TeamsDashboard />,
        loader: loadTeamsView
      }
      ,
      {
        path: '/report',
        // element: <TeamsDashboard />,
        // loader: loadTeamsView
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
