"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import InputEmoji from "react-input-emoji";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hey, Haya{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Hello cupcake",
                1000,
                "Hey wifey",
                1000,
                "Hello muffin",
                1000,
                "Hey cheesecake",
                1000,
                "Hello pyromaniac ",
                1000,
                "Hey love",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />


          </h1>

        
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           Sorry you got pissed yesterday...  I know, that was intentional. 😝<br />
           Do you know how Barrack proposed to Michelle? 😂 
           Obama took Michelle to a restaurant, complained how he hated marriage.
            and as you&apos;d expect, Michelle went crazy, and she was so pissed, 
            that&apos;s when Obama knew, she was serious too, Obama then proposed.
        
          </p>
          <p  className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
             </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
             You called me a nerd 😆
            </Link>
            <br />
            <br />
            <p  className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">So, I will do this the nerdiest way possible 😎 <br />     PS: If I make an edit here, this website won&apos;t sell on me 😝</p>

           
            
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full display: 'flex', alignItems: 'center', justifyContent: 'center'"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
