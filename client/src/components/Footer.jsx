import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-400 w-full">
      <div className=" w-full bg-red-400 grid grid-cols-2 gap-y-3 px-5 sm:px-[100px] md:px-[200px] sm:flex justify-between text-sm md:text-md py-5">
        <div className=" flex flex-col text-white gap-3 font-semibold ">
          <p>Featured Blog</p>
          <p>Most Viewed Blog</p>
          <p>Readers Chice</p>
        </div>
        <div className=" flex flex-col text-white gap-3 font-semibold ">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Post</p>
        </div>
        <div className=" flex flex-col text-white gap-3 font-semibold">
          <p>Privacu policies</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Terms & Services</p>
        </div>
      </div>
      <p className="pb-2 text-white font-semibold text-center">
        All right reserved @BlogMarket 2024.
      </p>
    </div>
  );
};

export default Footer;
