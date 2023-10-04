"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello I am{" "}
            </span>

            <br />

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Shiv",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "ReactJS Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "React Native Developer",
                1000,
                "UI/UX Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am currently working for Wissen Infotech as Junior Software
            Engineer. <br />I have been working for 2 years, working on projects
            using MERN Stack <br />
            and React Native.
          </p>

          <div>
            <Link
              href={"https://www.linkedin.com/in/shiv-shakti-bharti-aab505104"}
              className="px-6 mb-2 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 bg-white hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              href={"/ShivResumeUpdated.pdf"}
              style={{
                width: "100%",
                maxWidth: 200,
                minWidth: 100,
                fontSize: "1rem",
                marginTop: 20,
              }}
              target="blank"
              rel="noopener noreferrer"
              download
              className="cursor-pointer block bg-blue  border-0 px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 bg-transparent hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className="rounded-full bg-[#181818] w-[250px] h-[250px] 
              lg:w-[400px] lg:h-[400px] relative"
          >
            <Image
              src="/images/hero-image.jpg"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={360}
              height={360}
              style={{ borderRadius: 180 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
