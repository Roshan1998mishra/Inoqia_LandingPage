import React, { useState } from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import cross from "/assets/cross.svg";

const outfit500 = Outfit({ subsets: ["latin"], weight: "500" });
const outfit600 = Outfit({ subsets: ["latin"], weight: "600" });
const outfit400 = Outfit({ subsets: ["latin"], weight: "400" });

const Modal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to API
    console.log(formData);
    closeModal(); // Close modal after form submission (adjust as needed)
  };

  //--------------------------------------------------//

  return (
    <div>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="border-[8px] border-[#333] inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full min-w-[800px] min-h-[500px]">
              <div className="flex">
                <div className="basis-1/2 p-4">
                  <p className={`talktous ${outfit600.className}`}>
                    Talk to us in Brief?
                  </p>

                  <p className={` shortly ${outfit400.className}`}>
                    Write to us and we will get back to you shortly
                  </p>
                </div>
                <div className="basis-1/2">
                  <form onSubmit={handleSubmit}>
                    <div className="bg-white px-4 pt-5 pb-0 sm:p-6 sm:pb-4">
                      <Image className="cross" src={cross} alt="cross"></Image>
                      <div className="sm:flex sm:items-start">
                        <div className="w-full">
                          <div className="mb-4">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700"
                            ></label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Full Name"
                              className={`mt-4 block w-full border-gray-300  shadow-sm focus:ring-blue-500 focus:border-blue-500 text-[25px] ${outfit500.className}`}
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            ></label>
                            <input
                              placeholder="Email"
                              type="email"
                              name="email"
                              id="email"
                              className={`mt-2 block w-full border-gray-300  shadow-sm focus:ring-blue-500 focus:border-blue-500 text-[22px] ${outfit500.className}`}
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="mb-4">
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-gray-700"
                            ></label>
                            <textarea
                              name="message"
                              id="message"
                              rows="8"
                              type="text"
                              placeholder="Enter Your Message"
                              className={`mt-2 block w-full border-gray-300  shadow-sm focus:ring-black-500 focus:border-blue-500 text-[30px] ${outfit500.className}`}
                              value={formData.message}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto text-[20px] mymessagebtn ${outfit500.className}`}
                      >
                        Enter Your Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
