import { NavLink } from "react-router";
import Header from "../components/Header";
import { useState } from "react";

const Settings = () => {
     const [isEditing, setIsEditing] = useState(false);
     const userProfile = {
          name: "Jane.D",
          mail: "admin@gmail.com",
          storename: "Ubreakifix Store",
          storeAddress: "123 Main Street, New York, NY 10001",
     };
     const handleChange = () => {
          // eslint warning escape
     };
     return (
          <section className="bg-[#152353] text-white">
               <Header nav_title={"Settings"} />
               <section className="bg-[#152353] p-5 h-full md:h-screen">
                    <div className="flex lg:gap-10 gap-5 mb-10">
                         <NavLink className="text-lg md:text-2xl" to={"/settings"}>
                              Profile
                         </NavLink>
                         <NavLink className="text-lg md:text-2xl" to={"/settings"}>
                              Password Settings
                         </NavLink>
                    </div>

                    <div>
                         <h2 className="text-xl">Profile Image</h2>
                         <div className="flex items-end gap-3 mt-3">
                              <img
                                   src="Dashboard-things/image.jpg"
                                   alt="profile image"
                                   className="w-25 h-25 object-cover rounded-full"
                              />
                              <div className="shadow-[0_15px_50px_#77C0FF] rounded-2xl">
                                   <button
                                        onClick={() => setIsEditing(true)}
                                        className="border border-white/70 cursor-pointer bg-[url(Dashboard-things/navi-bg.png)] bg-cover flex items-center gap-4 text-[16px] shadow-[inset_0px_0px_12px_white] rounded-2xl font-medium p-2 px-3"
                                   >
                                        Edit Profile
                                   </button>
                              </div>
                         </div>
                         <div className="mt-10">
                              {isEditing ? (
                                   <>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-10">
                                             <label
                                                  htmlFor="fullName"
                                                  className="text-xl"
                                             >
                                                  Full Name
                                                  <input
                                                       type="text"
                                                       className="border border-[#00FF8833] px-5 mt-2 outline-none rounded-xl py-2 bg-[#0A0A0F80] w-full"
                                                       id="fullName"
                                                       value={userProfile.name}
                                                       onChange={handleChange}
                                                  />
                                             </label>
                                             <label
                                                  htmlFor="email"
                                                  className="text-xl"
                                             >
                                                  Email
                                                  <input
                                                       type="email"
                                                       className="border border-[#00FF8833] px-5 mt-2 outline-none rounded-xl py-2 bg-[#0A0A0F80] w-full"
                                                       id="email"
                                                       value={userProfile.mail}
                                                       onChange={handleChange}
                                                  />
                                             </label>
                                             <label
                                                  htmlFor="storeName"
                                                  className="text-xl"
                                             >
                                                  Store Name
                                                  <input
                                                       type="text"
                                                       className="border border-[#00FF8833] px-5 mt-2 outline-none rounded-xl py-2 bg-[#0A0A0F80] w-full"
                                                       id="storeName"
                                                       value={
                                                            userProfile.storename
                                                       }
                                                       onChange={handleChange}
                                                  />
                                             </label>
                                             <label
                                                  htmlFor="storeAddress"
                                                  className="text-xl"
                                             >
                                                  Store Address
                                                  <input
                                                       type="text"
                                                       className="border border-[#00FF8833] px-5 mt-2 outline-none rounded-xl py-2 bg-[#0A0A0F80] w-full"
                                                       id="storeAddress"
                                                       value={
                                                            userProfile.storeAddress
                                                       }
                                                       onChange={handleChange}
                                                  />
                                             </label>
                                        </div>
                                        <div className="flex justify-center mt-20">
                                             <button
                                                  onClick={() =>
                                                       setIsEditing(false)
                                                  }
                                                  className="bg-[#00C950] flex px-20 justify-center py-2 rounded-xl text-2xl font-bold cursor-pointer hover:bg-[#00C950]/80"
                                             >
                                                  Save
                                             </button>
                                        </div>
                                   </>
                              ) : (
                                   <>
                                        <h2 className="font-medium text-lg lg:text-xl flex gap-15 lg:gap-20">
                                             Full Name:{" "}
                                             <span className="font-normal">
                                                  {userProfile.name}
                                             </span>
                                        </h2>
                                        <hr className="border-t border-[#192D71] my-3 max-w-100" />
                                        <h2 className="font-medium text-lg lg:text-xl flex gap-25 lg:gap-31">
                                             Email:{" "}
                                             <span className="font-normal">
                                                  {userProfile.mail}
                                             </span>
                                        </h2>
                                        <hr className="border-t border-[#192D71] my-3 max-w-100" />
                                        <h2 className="font-medium text-lg lg:text-xl flex gap-11 lg:gap-16">
                                             Store Name:{" "}
                                             <span className="font-normal">
                                                  {userProfile.storename}
                                             </span>
                                        </h2>
                                        <hr className="border-t border-[#192D71] my-3 max-w-100" />
                                        <h2 className="font-medium text-lg lg:text-xl flex gap-18 md:gap-6 lg:gap-10">
                                             Store Address:{" "}
                                             <span className="font-normal">
                                                  {userProfile.storeAddress}
                                             </span>
                                        </h2>
                                   </>
                              )}
                         </div>
                    </div>
               </section>
          </section>
     );
};

export default Settings;
