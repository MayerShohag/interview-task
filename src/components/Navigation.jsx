import gsap from "gsap";
import { CiCalendar, CiSettings } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import { IoCallOutline, IoFlashOutline, IoHomeOutline } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import { NavLink } from "react-router";

const Navigation = () => {
     const tl = gsap.timeline();
     const closeSidebar = () => {
          tl.to("#nav", {
               x: 320,
               duration: 0.5,
               delay: 0.2,
          });
     };
     return (
          <div className="py-10 relative min-w-80 md:min-w-full h-screen bg-[#111B3C]">
               <button
                    onClick={closeSidebar}
                    className="absolute cursor-pointer md:hidden top-5 right-5 bg-black/40 p-1 rounded-full text-white"
               >
                    <HiXMark className="text-2xl" />
               </button>
               <div className="flex flex-col mt-10 items-center">
                    <div className="bg-linear-180 rounded-xl p-2 from-[#00FF88] to-[#00D4FF]">
                         <IoFlashOutline className="text-4xl" />
                    </div>
                    <nav className="bg-view text-white mt-10 flex flex-col gap-7">
                         <NavLink
                              to={"/"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "border border-white/70 bg-[url(Dashboard-things/navi-bg.png)] bg-cover flex items-center gap-4 text-[16px] shadow-[inset_0px_0px_12px_white] rounded-xl font-medium p-2 px-3"
                                        : "border border-transparent flex items-center gap-4 text-[16px] font-medium p-2 px-3"
                              }
                         >
                              <IoHomeOutline className="text-3xl p-1" />
                              <span>Dashboard Overview</span>
                         </NavLink>
                         <NavLink
                              to={"/call-logs"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "border border-white/70 bg-[url(Dashboard-things/navi-bg.png)] bg-cover flex items-center gap-4 text-[16px] shadow-[inset_0px_0px_12px_white] rounded-xl font-medium p-2 px-3"
                                        : "border border-transparent flex items-center gap-4 text-[16px] font-medium p-2 px-3"
                              }
                         >
                              <IoCallOutline className="text-3xl p-0.5" />
                              <span>Call Logs</span>
                         </NavLink>
                         <NavLink
                              to={"/appointment"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "border border-white/70 bg-[url(Dashboard-things/navi-bg.png)] bg-cover flex items-center gap-4 text-[16px] shadow-[inset_0px_0px_12px_white] rounded-xl font-medium p-2 px-3"
                                        : "border border-transparent flex items-center gap-4 text-[16px] font-medium p-2 px-3"
                              }
                         >
                              <CiCalendar className="text-[30px]" />
                              <span>Appointment</span>
                         </NavLink>
                         <NavLink
                              to={"/settings"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "border border-white/70 bg-[url(Dashboard-things/navi-bg.png)] bg-cover flex items-center gap-4 text-[16px] shadow-[inset_0px_0px_12px_white] rounded-xl font-medium p-2 px-3"
                                        : "border border-transparent flex items-center gap-4 text-[16px] font-medium p-2 px-3"
                              }
                         >
                              <CiSettings className="text-[30px]" />
                              <span>Settings</span>
                         </NavLink>
                    </nav>
               </div>
               <button className="flex z-10 absolute bottom-10 w-10/12 left-5 p-2 px-3 rounded-xl cursor-pointer hover:bg-white/5 items-center gap-4">
                    <PiSignOutBold className="text-2xl text-black" />
                    <span className="text-red-500">Log Out</span>
               </button>
          </div>
     );
};

export default Navigation;
