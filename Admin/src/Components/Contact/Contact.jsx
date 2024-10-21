import React from "react";
import Navbar from "../Navbar/Navbar";
import SideNav from "../../Dashboard/SideNav";
import { useContext } from "react";
import AppContext from "../../State/AppContext";
function Contact() {
  const { contactData, DeletContact } = useContext(AppContext);
  // console.log(contactData);
  return (
    <div>
      <Navbar />
      <SideNav />
      <div className="pl-[300px] pr-[30px] py-[3rem]">
        <div className="grid grid-cols-3 gap-5">
          {contactData?.contacts?.map((contact) => (
            <div
              key={contact?._id}
              className="col-one border-[#9CA3AF] py-[35px] pl-[30px] px-[10px] border-[1.4px] rounded-lg text-left hover:bg-[var(--hover-box--)] cursor-pointer hover:translate-y-[-5px] transition-transform duration-500 ease-in-out bg-white h-[max-content]"
            >
              <h2 className="text-xl font-medium capitalize max-sm:text-base">
                Title : {contact?.fullname}
              </h2>
              <p className="text-base font-medium text-gray-600 my-1">
                Email : {contact?.email}
              </p>
              <p className="text-base font-medium text-gray-600">
                Number : {contact?.number}
              </p>
              <p className="text-sm font-medium text-gray-600 mt-1">
                Description : {contact?.message}
              </p>
              <button
                onClick={() => {
                  if (
                    confirm("Are you sure you want to delet this Project ?")
                  ) {
                    DeletContact(contact?._id);
                  }
                }}
                className="text-white text-sm font-medium px-[14px] py-[7px] rounded-lg bg-red-600 hover:bg-red-800 mt-5"
              >
                <i className="fas fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
