import { IoCallOutline } from "react-icons/io5";
import Header from "../components/Header";
import { LuBot } from "react-icons/lu";
import { GoArrowSwitch, GoDotFill } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import Graph from "../sections/Graph";

const Home = () => {
     const stats = [
          {
               id: 1,
               title: "Total Calls Today",
               value: 127,
               icon: (
                    <span className="bg-linear-120 from-[#2B7FFF] p-2.5 rounded-xl to-[#00B8DB]">
                         <IoCallOutline className="text-2xl" />
                    </span>
               ),
               profit: +12,
          },
          {
               id: 2,
               title: "AI-Handled Calls",
               value: 98,
               icon: (
                    <span className="bg-linear-120 from-[#AD46FF] p-2.5 rounded-xl to-[#F6339A]">
                         <LuBot className="text-2xl" />
                    </span>
               ),
               profit: +77,
          },
          {
               id: 3,
               title: "Warm Transfer",
               value: 23,
               icon: (
                    <span className="bg-linear-120 from-[#FF6900] p-2.5 rounded-xl to-[#FB2C36]">
                         <GoArrowSwitch className="text-2xl" />
                    </span>
               ),
               profit: +18,
          },
          {
               id: 4,
               title: "Appointments Booked",
               value: 34,
               icon: (
                    <span className="bg-linear-120 from-[#00C950] p-2.5 rounded-xl to-[#00BC7D]">
                         <CiCalendar className="text-2xl" />
                    </span>
               ),
               profit: +8,
          },
          {
               id: 5,
               title: "Missed/Failed Calls",
               value: 6,
               icon: (
                    <span className="bg-linear-120 from-[#FB2C36] p-2.5 rounded-xl to-[#FF2056]">
                         <FaRegCircleXmark className="text-2xl" />
                    </span>
               ),
               profit: -3,
          },
          {
               id: 6,
               title: "Avg Call Duration",
               value: "3:42",
               icon: (
                    <span className="bg-linear-120 from-[#615FFF] p-2.5 rounded-xl to-[#2B7FFF]">
                         <FiClock className="text-2xl" />
                    </span>
               ),
               profit: +15,
          },
     ];

     const Activity = [
          {
               id: 1,
               title: "AI booked appointment for iPhone 13 screen repair",
               time: "2 min ago",
               icon: <GoDotFill className="text-[#05DF72] text-xl" />,
          },
          {
               id: 2,
               title: "Warm transfer to technician - Software issue",
               time: "5 min ago",
               icon: <GoDotFill className="text-[#FF8904] text-xl" />,
          },
          {
               id: 3,
               title: "Quote provided for iPad battery replacement",
               time: "8 min ago",
               icon: <GoDotFill className="text-[#05DF72] text-xl" />,
          },
          {
               id: 4,
               title: "Call dropped after 12 seconds",
               time: "15 min ago",
               icon: <GoDotFill className="text-[#FF6467] text-xl" />,
          },
     ];

     const repairRequest = [
          {
               id: 1,
               title: "Screen Repair",
               request: 156,
               fill: 65,
          },
          {
               id: 2,
               title: "Battery Replacement",
               request: 89,
               fill: 40,
          },
          {
               id: 3,
               title: "Back Glass Repair",
               request: 67,
               fill: 30,
          },
          {
               id: 4,
               title: "Software Issues",
               request: 45,
               fill: 25,
          },
     ];

     return (
          <section className="bg-[#152353] text-white">
               <Header nav_title="Dashboard Overview" />
               <section className="md:p-5 p-2">
                    <section className="bg-[#152353] text-white h-full grid grid-cols-1 lg:grid-cols-3 gap-5">
                         {stats.map((stat) => (
                              <div
                                   key={stat.id}
                                   className="border flex items-start justify-between p-5 rounded-2xl bg-[#111B3C] border-[#2B7FFF33] shadow-2xl"
                              >
                                   <div>
                                        <span className="text-[#90A1B9] text-sm font-normal">
                                             {stat.title}
                                        </span>
                                        <h2 className="text-3xl mt-2 mb-5 text-white font-normal">
                                             {stat.value}
                                        </h2>
                                        <h4
                                             className={`${stat.profit > 0 ? "text-[#05DF72]" : "text-red-500"} text-sm font-normal`}
                                        >
                                             {stat.profit > 0 && "+"}
                                             {stat.profit}%
                                        </h4>
                                   </div>
                                   {stat.icon}
                              </div>
                         ))}
                    </section>

                    <section className="border bg-[#111B3C] border-[#2B7FFF33] rounded-2xl shadow-2xl text-white w-full mt-5 p-5">
                         <div className="flex justify-between">
                              <div>
                                   <h2 className="md:text-xl text-[16px] mb-1">
                                        Call Trends - This Week
                                   </h2>
                                   <h3 className="text-[#90A1B9] text-[12px] md:text-sm">
                                        Total: 472 calls
                                   </h3>
                              </div>
                              <select
                                   name="thisWeek"
                                   id="thisWeek"
                                   className="border border-[#2B7FFF33] bg-[#1D293D] px-3 h-fit py-3 text-sm rounded-xl"
                              >
                                   <option
                                        className="bg-white text-black"
                                        value="thisWeek"
                                   >
                                        This Week
                                   </option>
                                   <option
                                        className="bg-white text-black"
                                        value="2ndWeek"
                                   >
                                        2nd Week
                                   </option>
                              </select>
                         </div>

                         <div className="w-full h-40 lg:h-80 mt-5">
                              <Graph />
                         </div>
                    </section>

                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                         <div className="bg-[#111B3C] mt-5 rounded-2xl p-5 border shadow-2xl border-[#2B7FFF33]">
                              <h2 className="text-xl">Recent Activity</h2>
                              <div className="mt-5 flex flex-col gap-3">
                                   {Activity.map((activity) => (
                                        <div
                                             key={activity.id}
                                             className="flex items-start gap-2 bg-[#1D293D80] p-2 rounded-xl py-3"
                                        >
                                             <span>{activity.icon}</span>
                                             <div>
                                                  <h2 className="text-sm mb-1">
                                                       {activity.title}
                                                  </h2>
                                                  <h3 className="text-[12px] text-[#7A8BA4]">
                                                       {activity.time}
                                                  </h3>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                         <div className="bg-[#111B3C] mt-5 rounded-2xl p-5 border shadow-2xl border-[#2B7FFF33]">
                              <h2 className="text-xl">Top Repair Requests</h2>
                              <div className="mt-5 flex flex-col gap-3">
                                   {repairRequest.map((req) => (
                                        <div key={req.id}>
                                             <div className="flex items-center mb-2 justify-between">
                                                  <h2 className="text-[14px]">
                                                       {req.title}
                                                  </h2>
                                                  <h3 className="text-[14px] text-[#C0CCDD]">
                                                       {req.request} requests
                                                  </h3>
                                             </div>
                                             <progress
                                                  value={req.fill}
                                                  max={100}
                                                  className="w-full"
                                             ></progress>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </section>
               </section>
          </section>
     );
};

export default Home;
