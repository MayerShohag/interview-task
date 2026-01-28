import { IoCallOutline, IoDocumentTextOutline } from "react-icons/io5";
import Header from "../components/Header";
import { FiClock, FiPlayCircle } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const CallLogs = () => {
     const callList = [
          {
               id: 1,
               number: "+1 (555) 345-6789",
               dateTime: "2025-12-16 • 09:42 AM",
               receive: (
                    <span className="bg-[#00C95033] text-[#05DF72] px-4 border border-[#00C9504D] py-2 rounded-xl">
                         AI Resolved
                    </span>
               ),
               callTime: "5:23",
               quote: "Quote Provided",
               service: "Screen",
               icon: (
                    <span className="bg-linear-120 from-[#2B7FFF] p-2.5 rounded-xl to-[#00B8DB]">
                         <IoCallOutline className="text-2xl" />
                    </span>
               ),
          },
          {
               id: 2,
               number: "+1 (555) 345-6789",
               dateTime: "2025-12-16 • 09:42 AM",
               receive: (
                    <span className="bg-[#FB2C3633] text-[#FF8904] px-4 border border-[#FF69004D] py-2 rounded-xl">
                         Warm Transfer
                    </span>
               ),
               callTime: "5:23",
               quote: "Escalated to technician",
               service: "Software",
               icon: (
                    <span className="bg-linear-120 from-[#2B7FFF] p-2.5 rounded-xl to-[#00B8DB]">
                         <IoCallOutline className="text-2xl" />
                    </span>
               ),
          },
          {
               id: 3,
               number: "+1 (555) 345-6789",
               dateTime: "2025-12-16 • 09:42 AM",
               receive: (
                    <span className="bg-[#2B7FFF33] text-[#51A2FF] px-4 border border-[#2B7FFF4D] py-2 rounded-xl">
                         Appointment
                    </span>
               ),
               callTime: "5:23",
               quote: "Appointment Booked",
               service: "Battery",
               icon: (
                    <span className="bg-linear-120 from-[#2B7FFF] p-2.5 rounded-xl to-[#00B8DB]">
                         <IoCallOutline className="text-2xl" />
                    </span>
               ),
          },
          {
               id: 4,
               number: "+1 (555) 345-6789",
               dateTime: "2025-12-16 • 09:42 AM",
               receive: (
                    <span className="bg-[#FF150033] text-[#FF0404] px-4 border border-[#FF69004D] py-2 rounded-xl">
                         Dropped
                    </span>
               ),
               callTime: "5:23",
               quote: "Call Dropped",
               service: "Unknown",
               icon: (
                    <span className="bg-linear-120 from-[#2B7FFF] p-2.5 rounded-xl to-[#00B8DB]">
                         <IoCallOutline className="text-2xl" />
                    </span>
               ),
          },
          {
               id: 5,
               number: "+1 (555) 345-6789",
               dateTime: "2025-12-16 • 09:42 AM",
               receive: (
                    <span className="bg-[#00C95033] text-[#05DF72] px-4 border border-[#00C9504D] py-2 rounded-xl">
                         AI Resolved
                    </span>
               ),
               callTime: "5:23",
               quote: "Quote Provided",
               service: "Screen",
               icon: (
                    <span className="bg-linear-120 from-[#2B7FFF] p-2.5 rounded-xl to-[#00B8DB]">
                         <IoCallOutline className="text-2xl" />
                    </span>
               ),
          },
     ];

     const transcript = [
          {
               id: 1,
               assistant:
                    "Thank you for calling UBreakiFix! How can I help you today?",
               customer:
                    "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?",
          },
          {
               id: 2,
               assistant:
                    "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?",
               customer: "Yes, please! When are you available?",
          },
          {
               id: 3,
               assistant:
                    "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?",
          },
     ];

     const [callObject, setCallObject] = useState(callList.slice(0, 1));

     return (
          <section className="bg-[#152353] text-white">
               <Header nav_title={"Call Logs & History"} />
               <section className="md:p-5 p-2 grid grid-cols-1 xl:grid-cols-2 gap-5">
                    <div className="">
                         <div className="relative">
                              <input
                                   className="border border-[#2B7FFF33] w-full bg-[#0F172B80] placeholder:text-[#62748E] pr-5 pl-15 py-2 outline-none rounded-xl"
                                   placeholder="Search by phone number, issue type..."
                                   type="search"
                                   name=""
                                   id=""
                              />
                              <span className="absolute top-2.5 text-xl left-9 text-[#90A1B9]">
                                   <CiSearch />
                              </span>
                         </div>
                         <div className="bg-[#0F172B80] border-[#2B7FFF33] border mt-5 rounded-2xl">
                              <h2 className="text-xl border-b border-[#2B7FFF33] p-5">
                                   Call List
                              </h2>
                              <div className="flex flex-col md:gap-4">
                                   {callList.map((list) => (
                                        <div
                                             key={list.id}
                                             className="p-5 hover:bg-[#0F172B80] cursor-pointer"
                                             onClick={() =>
                                                  setCallObject([list])
                                             }
                                        >
                                             <div className="flex flex-col md:flex-row items-start justify-between mb-2">
                                                  <div className="flex gap-3">
                                                       {list.icon}
                                                       <div>
                                                            <h2 className="text-[16px]">
                                                                 {list.number}
                                                            </h2>
                                                            <h3 className="text-[12px] text-[#90A1B9]">
                                                                 {list.dateTime}
                                                            </h3>
                                                       </div>
                                                  </div>
                                                  <span className="inline-block mt-5 md:mt-2 mb-2 text-[12px]">
                                                       {list.receive}
                                                  </span>
                                             </div>
                                             <div className="text-[#90A1B9] text-sm md:text-[16px] flex gap-4 md:gap-8">
                                                  <div className="flex items-center gap-1">
                                                       <FiClock />
                                                       {list.callTime}
                                                  </div>
                                                  <div className="flex items-center gap-1">
                                                       <SiTicktick />
                                                       {list.quote}
                                                  </div>
                                                  <span className="bg-[#2B7FFF33] px-3 rounded text-[#51A2FF] py-1">
                                                       {list.service}
                                                  </span>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
                    <div className="mt-5 lg:mt-0">
                         <div className="flex justify-center md:gap-5 gap-2 text-sm md:text-[16px] md:justify-end">
                              <select
                                   name=""
                                   id=""
                                   className="border border-[#2B7FFF33] bg-[#0F172B80] py-2.5 rounded-xl px-3"
                              >
                                   <option value="">All Type</option>
                              </select>
                              <select
                                   name=""
                                   id=""
                                   className="border border-[#2B7FFF33] bg-[#0F172B80] py-2.5 rounded-xl px-3"
                              >
                                   <option value="">All Issues</option>
                              </select>
                              <select
                                   name=""
                                   id=""
                                   className="border border-[#2B7FFF33] bg-[#0F172B80] py-2.5 rounded-xl px-3"
                              >
                                   <option value="">Today</option>
                              </select>
                         </div>
                         <div className="bg-[#0F172B80] border-[#2B7FFF33] border mt-5 rounded-2xl">
                              <h2 className="text-xl border-b border-[#2B7FFF33] p-5">
                                   Call Details
                              </h2>
                              <div className="p-5">
                                   {callObject.map((list) => (
                                        <div
                                             key={list.id}
                                             className="grid grid-cols-1 gap-5 lg:grid-cols-2"
                                        >
                                             <div>
                                                  <span className="text-[#90A1B9] text-sm">
                                                       Phone Number
                                                  </span>
                                                  <h2 className="text-[16px]">
                                                       {list.number}
                                                  </h2>
                                             </div>
                                             <div>
                                                  <span className="text-[#90A1B9] text-sm">
                                                       Duration
                                                  </span>
                                                  <h2 className="text-[16px]">
                                                       {list.callTime}
                                                  </h2>
                                             </div>
                                             <div>
                                                  <span className="text-[#90A1B9] text-sm">
                                                       Date & Time
                                                  </span>
                                                  <h2 className="text-[16px]">
                                                       {list.dateTime}
                                                  </h2>
                                             </div>
                                             <div>
                                                  <span className="text-[#90A1B9] text-sm">
                                                       Issue Type
                                                  </span>
                                                  <h2 className="text-[16px]">
                                                       {list.service}
                                                  </h2>
                                             </div>
                                             <div>
                                                  <span className="text-[#90A1B9] inline-block text-sm">
                                                       Call Type
                                                  </span>
                                                  <h2 className="text-[16px] mt-2.5">
                                                       {list.receive}
                                                  </h2>
                                             </div>
                                             <div className="col-span-2">
                                                  <span className="text-[#90A1B9] text-sm">
                                                       Outcome
                                                  </span>
                                                  <h2 className="text-[16px]">
                                                       {list.quote}
                                                  </h2>
                                             </div>
                                        </div>
                                   ))}
                                   <button className="bg-linear-to-r flex mt-8 cursor-pointer items-center justify-center gap-2 text-[16px] text-[#C27AFF] rounded-2xl w-full from-[#AD46FF33] to-[#F6339A33] border border-[#AD46FF4D] py-3">
                                        <FiPlayCircle />
                                        <span>Play Audio Recording</span>
                                   </button>
                              </div>
                              <div className="p-5">
                                   <h2 className="flex items-center gap-2">
                                        <IoDocumentTextOutline className="text-[#51A2FF] text-2xl" />
                                        <span className="text-[16px]">
                                             Conversation Transcript
                                        </span>
                                   </h2>
                                   <div className="bg-[#1D293D80] p-5 mt-5 rounded-2xl">
                                        {transcript.map((message) => (
                                             <div
                                                  key={message.id}
                                                  className="flex flex-col"
                                             >
                                                  <div className="mb-3">
                                                       <h3 className="text-[#05DF72] text-sm">
                                                            AI Assistant:{" "}
                                                       </h3>
                                                       <p className="text-[12px]">
                                                            {message.assistant}
                                                       </p>
                                                  </div>
                                                  <div className="mb-3">
                                                       <h3 className="text-[#51A2FF] text-sm">
                                                            {message.customer &&
                                                                 "Customer: "}
                                                       </h3>
                                                       <p className="text-[12px]">
                                                            {message?.customer}
                                                       </p>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </section>
     );
};

export default CallLogs;
