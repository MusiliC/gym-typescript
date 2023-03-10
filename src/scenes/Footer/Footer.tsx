import React from "react";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2  md:mt-0">
          <img src={Logo} alt="" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            sequi rerum itaque exercitationem ab quas animi, odit dolores? Nobis
            fuga at velit aperiam labore! Quas!
          </p>
          <p>Evogym all rights reserved</p>
        </div>
        <div className="mt-16 basis-1/4  md:mt-0">
          <div className="font-bold">Links</div>
          <p>Learn More</p>
          <p>Home.</p>
          <p>About.</p>
        </div>
        <div className="mt-16 basis-1/4  md:mt-0">
          <div className="font-bold">Contact Us</div>
          <p>Twitter.</p>
          <p>Gmail.</p>
          <p>Fcebook.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
