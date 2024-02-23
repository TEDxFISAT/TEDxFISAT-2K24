import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const page = () => {
  return (
    <>
      <footer className="w-full flex bg-black h-80 justify-between">
        <div className="h-full justify-center ml-28 flex flex-col">
          <h1 className="text-3xl">
            Ted<span>x</span>FISAT
          </h1>
          <p>
            This independent TEDx event<br></br>
            is operated under license<br></br>
            from TED.
          </p>

          <div className="flex space-x-8 text-3xl mt-10">
            <FaInstagram className="hover:cursor:pointer transition transform duration-300 hover:text-red-600 " />
            <FaLinkedin className="hover:cursor:pointer transition transform duration-300 hover:text-red-600 " />
            <FaYoutube className="hover:cursor:pointer transition transform duration-300 hover:text-red-600 " />
          </div>
        </div>

        <div className="mr-28 flex space-y-3  flex-col items-center justify-center h-full bottom-0">
          <div className="w-96 rounded-2xl h-48 bg-red-500"></div>
          <p>
            Federal Institute of Science and Technology,<br></br>
            Mookannoor,Angamaly,Eranakulam,<br></br>Kerala,India-653523
          </p>
        </div>
      </footer>
    </>
  );
};

export default page;
