import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black text-white py-12 px-6 md:px-24">
     <div>
   <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* logo and others */}
   <div>
        <h1 className="text-3xl font-bold text-red-500">FilmHive</h1>
        <p>
          FilmHive Ltd.
          <br />
          Providing reliable film since 1992
        </p>
      </div>
      {/* Movies  */}
      <div>
        <h6 className="text-lg font-bold uppercase border-b-2 border-red-700 inline-block mb-4">Movies</h6>
        <ul className="mt-4 space-y-2">
          {["Film News", "Action", "Coming Soon", "Most Popular"].map((link, index) =>(
            <li key={index}>
              <Link to={"#"} className="hover:text-orange-500 transition duration-300">{link}</Link>
            </li>
          ))}
       
        </ul>
      </div>

        

      {/* Additional Links */}
      <div>
        <h6 className="text-lg font-bold uppercase border-b-2 border-red-700 inline-block mb-4">Additional Links</h6>
        <ul className="space-y-2 ">
          {["About us", "Contact", "Gallery", "Privacy Policy"].map((link, index)=>(
            <li key={index}>
              <Link to={"#"} className="hover:text-orange-500 transition duration-300">{link}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* NewsLetter and social Links */}
      <div>
        <h6 className="text-lg font-bold uppercase border-b-2 border-red-700 inline-block mb-4">Newsletter</h6>
        <div className="flex items-center space-x-2 border-b border-gray-600 pb-2 mb-4">
            <input
              type="email"
              placeholder="Enter email"
              className="bg-transparent outline-none text-sm  placeholder-gray-400 flex-grow"
            />
            <button className="text-red-500 text-xl">&#8594;</button>
          </div>
          <div className="flex space-x-4">
            <Link to={"#"}>
            <FaXTwitter className="text-white bg-[#1DA1F2] rounded-full p-2 text-3xl" />
            </Link>
            <Link to={"#"}>
            <FaFacebookF className="text-white bg-[#3b5998] rounded-full p-2 text-3xl" />
            </Link>
            <Link to={"#"}>
            <FaInstagram className="text-white bg-[#E1306C] rounded-full p-2 text-3xl" />
            </Link>
            <Link to={"#"}>
              <FaYoutube className="text-white bg-[#FF0000] rounded-full p-2 text-3xl" />
            </Link>
          </div>
      </div>
   </div>
      <div className="footer text-white sm:footer-horizontal footer-center text-base-content pt-4">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by FilmHive
          Industries Ltd
        </p>
      </div>
     </div>
    </footer>
  );
};

export default Footer;
