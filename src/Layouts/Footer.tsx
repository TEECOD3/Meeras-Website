import React from "react";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Twitter from "../assets/icons/Twitter";
import Whatsapp from "../assets/icons/Whatsapp";
import { FaLinkedinIn } from "react-icons/fa";
import meerasfooter from "../pages/Home/images/merrasfooterimg.png";

const Footer = () => {
  return (
    <footer className=" bg-blue-900 flex flex-col items-center justify-center pt-8 px-3 lg:pt-20">
      <div className=" flex flex-col md:flex-row-reverse  md:max-w-[83%] mx-auto gap-10 ">
        <div className="flex px-6 md:px-0 justify-between md:justify-around md:flex-1 max-sm:text-sm  text-white font-light md:gap-10 ">
          <ul className="space-y-8 text-md md:text-base grid place-items-start">
            <h4 className="font-bold text-md">Company</h4>
            <li>About us</li>
            <li>About us</li>
            <li>Product</li>
            <li>Blog</li>
          </ul>
          <ul className="space-y-8 md:text-base">
            <h4 className="font-bold ">Contact</h4>
            <li>support@meeras.com</li>
            <li>Whatsapp</li>
            <li>+234 801 2323 332</li>
          </ul>
        </div>
        <div className=" px-4 mt-4 sm:mt-0 md:w-3/6 h-full ">
          <img
            src={meerasfooter}
            className=" h-20 w-20 bg-no-repeat bg-contain "
          ></img>
          <p className="lg:w-2/3 mt-6 text-md sm:text-xl text-white font-light md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            cursus sed nunc eget dictum Sed ornare cursus sed nunc eget dictumd
            nunc eget dictum Sed ornare cursus sed nunc eget dictum
          </p>
          <ul className="flex gap-4 mt-6 ">
            <li className="bg-white h-10 w-10  rounded-full flex items-center justify-center">
              <Facebook />
            </li>
            <li className="bg-white  h-10 w-10   rounded-full flex items-center justify-center">
              <Instagram />
            </li>
            <li className="bg-white h-10 w-10  rounded-full flex items-center justify-center">
              <Twitter />
            </li>
            <li className="bg-white  h-10 w-10   rounded-full flex items-center justify-center">
              <FaLinkedinIn />
            </li>
            <li className="bg-white h-10 w-10    rounded-full flex items-center justify-center">
              <Whatsapp />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 w-3/4 text-center mx-auto text-white font-light">
        <hr className="rounded-10 bg-white/20 w-2/3 mx-auto " />
        <p className="sm:mt-6 mt-2 mb-8 text-sm">
          Copyright 2023 RetailBasics. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
