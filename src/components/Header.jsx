import gsap from "gsap";
import { CiMenuFries } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";

const Header = ({ nav_title }) => {
     const tl = gsap.timeline();
     const sidebar = () => {
          tl.to("#nav", {
               x: -320,
               duration: 0.5,
               delay: 0.2,
          });
     };
     return (
          <header className="bg-[#111B3C] text-white flex items-center h-full justify-between p-3 px-5">
               <div>
                    <h1 className="lg:text-[32px] text-xl md:text-2xl font-normal">
                         {nav_title}
                    </h1>
               </div>
               <div className="flex items-center md:gap-6 gap-3">
                    <span className="cursor-pointer">
                         <FaRegBell className="text-3xl" />
                    </span>
                    <div>
                         <img
                              src="Dashboard-things/image.jpg"
                              alt="profile image"
                              className="lg:w-20 lg:h-20 w-10 h-10 object-cover rounded-full cursor-pointer "
                         />
                    </div>
                    <button className="md:hidden" onClick={sidebar}>
                         <CiMenuFries className="text-2xl" />
                    </button>
               </div>
          </header>
     );
};

export default Header;
