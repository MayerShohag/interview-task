import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import CallLogs from "../pages/CallLogs";
import Appointment from "../pages/Appointment";
import Settings from "../pages/Settings";
import Error from "../pages/Error";

export const router = createBrowserRouter([
     {
          path: "/",
          Component: App,
          errorElement: Error,
          children: [
               {
                    index: true,
                    Component: Home,
               },
               {
                    path: "/call-logs",
                    Component: CallLogs,
               },
               {
                    path: "/appointment",
                    Component: Appointment,
               },
               {
                    path: "/settings",
                    Component: Settings,
               },
               {
                    path: "/*",
                    Component: Error,
               },
          ],
     },
]);
