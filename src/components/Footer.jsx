import React from "react";
import { logo, social1, social2, social3 } from "../assets";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] text-footerBody font-source-sans py-24 px-[50px] md:px-[100px] flex flex-col md:flex-row gap-16">
      <div className="md:w-[25%]">
        <img src={logo} className="max-md:w-[75px] max-md:m-auto" alt="logo" />
      </div>

      <div className="md:w-[25%] flex flex-col gap-4">
        <h4 className="text-heading font-bold text-sm md:text-lg">
          Contact Us
        </h4>
        <p className="md:text-sm text-xs">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p className="md:text-sm text-xs">example2020@gmail.com</p>
        <p className="md:text-sm text-xs">(904) 443-0343</p>
      </div>

      <div className="md:w-[25%] flex flex-col md:items-center gap-4">
        <ul className="flex flex-col gap-4">
          <li>
            <h4 className="text-heading font-bold text-sm md:text-lg">More</h4>
          </li>
          <li className="md:text-sm text-xs">About Us</li>
          <li className="md:text-sm text-xs">Products</li>
          <li className="md:text-sm text-xs">Career</li>
          <li className="md:text-sm text-xs">Contact Us</li>
        </ul>
      </div>

      <div className="md:w-[25%] flex flex-col-reverse md:flex-col justify-between items-center md:items-end">
        <div>
          <h4 className="text-heading font-bold text-sm md:text-lg max-md:hidden">
            Social Links
          </h4>
          <div className="py-3 flex gap-9">
            <div>
              <img src={social3} alt="instagram logo" />
            </div>
            <div>
              <img src={social2} alt="twitter logo" />
            </div>
            <div>
              <img src={social1} alt="facebook logo" />
            </div>
          </div>
        </div>
        <p className="font-roboto md:text-sm text-xs">
          © 2022 Food Truck Example
        </p>
      </div>
    </footer>
  );
}
