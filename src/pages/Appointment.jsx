import { CiCalendar } from "react-icons/ci";
import Header from "../components/Header";
import { SiTicktick } from "react-icons/si";
import { BsExclamationCircle } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Appointment = () => {
     const appointmentShowcase = [
          {
               id: 1,
               title: "Total Booked",
               value: 34,
               time: 8,
               icon: <CiCalendar className="text-2xl text-[#51A2FF]" />,
          },
          {
               id: 2,
               title: "AI Booked",
               value: 28,
               time: "82% of total",
               icon: <SiTicktick className="text-[#05DF72] text-lg" />,
          },
          {
               id: 3,
               title: "Pending",
               value: 3,
               time: "Awaiting confirmation",
               icon: <BsExclamationCircle className="text-[#FDC700] text-lg" />,
          },
     ];

     const appointment = [
          {
               id: 1,
               clientName: "Jane.D",
               phone: "01960685765",
               mail: "admin@gmail.com",
               device: "Apple/Iphone 13pro",
               repairType: "Screen",
               date: "02/06/2026",
               slot: 1,
               startTime: "09:00",
          },
          {
               id: 2,
               clientName: "Jane.D",
               phone: "01960685765",
               mail: "admin@gmail.com",
               device: "Apple/Iphone 13pro",
               repairType: "Screen",
               date: "02/06/2026",
               slot: 1,
               startTime: "09:00",
          },
          {
               id: 3,
               clientName: "Jane.D",
               phone: "01960685765",
               mail: "admin@gmail.com",
               device: "Apple/Iphone 13pro",
               repairType: "Screen",
               date: "02/06/2026",
               slot: 1,
               startTime: "09:00",
          },
          {
               id: 4,
               clientName: "Jane.D",
               phone: "01960685765",
               mail: "admin@gmail.com",
               device: "Apple/Iphone 13pro",
               repairType: "Screen",
               date: "02/06/2026",
               slot: 1,
               startTime: "09:00",
          },
          {
               id: 5,
               clientName: "Jane.D",
               phone: "01960685765",
               mail: "admin@gmail.com",
               device: "Apple/Iphone 13pro",
               repairType: "Screen",
               date: "02/06/2026",
               slot: 1,
               startTime: "09:00",
          },
          {
               id: 6,
               clientName: "Jane.D",
               phone: "01960685765",
               mail: "admin@gmail.com",
               device: "Apple/Iphone 13pro",
               repairType: "Screen",
               date: "02/06/2026",
               slot: 1,
               startTime: "09:00",
          },
     ];

     return (
          <section className="text-white bg-[#152353]">
               <Header nav_title={"Appointment"} />
               <div className="md:p-5 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
                    {appointmentShowcase.map((appoint) => (
                         <div
                              key={appoint.id}
                              className="border rounded-2xl bg-[#111B3C] border-[#2B7FFF33] p-5"
                         >
                              <div className="flex items-center gap-2">
                                   <span>{appoint.icon}</span>
                                   <h2 className="text-sm text-[#90A1B9]">
                                        {appoint.title}
                                   </h2>
                              </div>
                              <h3 className="my-2 text-2xl">{appoint.value}</h3>
                              <h3 className="text-[#90A1B9] text-sm">
                                   {!isNaN(appoint.time) ? (
                                        <span className="text-[#05DF72]">{`+${appoint.time} this week`}</span>
                                   ) : (
                                        appoint.time
                                   )}
                              </h3>
                         </div>
                    ))}
               </div>
               <div className="md:p-5 p-2">
                    <div className="p-5 bg-linear-to-b from-[#1A1A2E] to-[#16213E] rounded-2xl">
                         <h2 className="mb-3">Booking Link</h2>
                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                              <input
                                   type="text"
                                   className="bg-[#0A0A0F80] w-full xl:col-span-10 lg:col-span-9 col-span-12 border border-[#00FF8833] rounded-xl py-2 px-5"
                                   placeholder="https://techstore.com/book?id=store123"
                              />
                              <button className="flex items-center cursor-pointer justify-center gap-4 col-span-12 lg:col-span-3 xl:col-span-2 border border-white/70 bg-[url(Dashboard-things/navi-bg.png)] bg-cover text-[16px] shadow-[inset_0px_0px_12px_white] rounded-xl font-medium p-2 px-3">
                                   <IoCopyOutline className="text-2xl" />
                                   <span>Copy Link</span>
                              </button>
                         </div>
                    </div>
               </div>
               <div className="md:p-5 p-2 overflow-scroll">
                    <table className="border text-center w-full bg-[#111B3C] border-[#2B7FFF33] rounded-2xl overflow-hidden">
                         <thead>
                              <tr className="text-sm border-b border-[#2B7FFF33]">
                                   <th className="font-normal p-3 py-4">
                                        Client Name
                                   </th>
                                   <th className="font-normal p-3 py-4">
                                        Client Phone
                                   </th>
                                   <th className="font-normal p-3 py-4">
                                        Client Mail
                                   </th>
                                   <th className="font-normal p-3 py-4">
                                        Device
                                   </th>
                                   <th className="font-normal p-3 py-4">
                                        Repair Type
                                   </th>
                                   <th className="font-normal p-3 py-4">
                                        Date
                                   </th>
                                   <th className="font-normal p-3 py-4">
                                        Slot no
                                   </th>
                                   <th className="font-normal p-3 py-4">
                                        Start Time
                                   </th>
                              </tr>
                         </thead>
                         <tbody>
                              {appointment.map((appoint) => (
                                   <tr
                                        key={appoint.id}
                                        className="hover:bg-[#152353]/50 border-b border-[#2B7FFF33] w-full"
                                   >
                                        <td className="p-3 py-4 text-[#51A2FF]">
                                             {appoint.clientName}
                                        </td>
                                        <td className="p-3 py-4">
                                             {appoint.phone}
                                        </td>
                                        <td className="p-3 py-4">
                                             {appoint.mail}
                                        </td>
                                        <td className="p-3 py-4">
                                             {appoint.device}
                                        </td>
                                        <td className="p-3 py-4">
                                             {appoint.repairType}
                                        </td>
                                        <td className="p-3 py-4">
                                             {appoint.date}
                                        </td>
                                        <td className="p-3 py-4">
                                             {appoint.slot}
                                        </td>
                                        <td className="p-3 py-4">
                                             {appoint.startTime}
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>

                    <div className="flex items-center justify-center lg:gap-5 gap-2 my-10">
                         <button className="flex items-center gap-2 focus:text-[#51A2FF] cursor-pointer">
                              <MdKeyboardArrowLeft />
                              <span>Previous</span>
                         </button>

                         <button className="focus:text-black text-[#51A2FF] focus:bg-[#A6C8FF] hover:bg-[#A6C8FF]/50 rounded-sm cursor-pointer px-4 py-2">
                              1
                         </button>
                         <button className="focus:text-black text-[#51A2FF] focus:bg-[#A6C8FF] hover:bg-[#A6C8FF]/50 rounded-sm cursor-pointer px-4 py-2">
                              2
                         </button>
                         <button className="focus:text-black text-[#51A2FF] focus:bg-[#A6C8FF] hover:bg-[#A6C8FF]/50 rounded-sm cursor-pointer px-4 py-2">
                              3
                         </button>
                         <button className="hidden md:block focus:text-black text-[#51A2FF] focus:bg-[#A6C8FF] hover:bg-[#A6C8FF]/50 rounded-sm cursor-pointer px-4 py-2">
                              4
                         </button>
                         <button className="hidden md:block focus:text-black text-[#51A2FF] focus:bg-[#A6C8FF] hover:bg-[#A6C8FF]/50 rounded-sm cursor-pointer px-4 py-2">
                              ...
                         </button>
                         <button className="hidden md:block focus:text-black text-[#51A2FF] focus:bg-[#A6C8FF] hover:bg-[#A6C8FF]/50 rounded-sm cursor-pointer px-4 py-2">
                              11
                         </button>

                         <button className="flex items-center gap-2 focus:text-[#51A2FF] cursor-pointer">
                              <span>Next</span>
                              <MdKeyboardArrowRight />
                         </button>
                    </div>
               </div>
          </section>
     );
};

export default Appointment;
