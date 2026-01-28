import { Link } from "react-router";

const Error = () => {
     return (
          <div className="text-white h-screen w-full flex flex-col justify-center items-center">
               <h1 className="text-4xl mb-5">Something went wrong!</h1>
               <div className="shadow-[0_15px_50px_#77C0FF] rounded-2xl">
                    <Link
                         className="border border-white/70 cursor-pointer bg-[url(Dashboard-things/navi-bg.png)] bg-cover flex items-center gap-4 text-[16px] shadow-[inset_0px_0px_12px_white] rounded-2xl font-medium p-2 px-3"
                         to={"/"}
                    >
                         Go Dashboard
                    </Link>
               </div>
          </div>
     );
};

export default Error;
