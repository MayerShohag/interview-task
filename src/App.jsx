import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

const App = () => {
     return (
          <div className="bg-view h-screen overflow-x-hidden relative grid grid-cols-1 md:grid-cols-12 w-full">
               <div
                    id="nav"
                    className="absolute z-30 left-full md:static top-0 md:col-start-1 md:col-end-5 lg:col-end-4 xl:col-end-3 md:border-r md:border-[#2B7FFF33]"
               >
                    <Navigation />
               </div>
               <div className="md:col-start-5 md:col-end-13 xl:col-start-3 lg:col-start-4 lg:col-end-13 overflow-y-scroll scroll-hidden min-w-0">
                    <Outlet />
               </div>
          </div>
     );
};

export default App;
