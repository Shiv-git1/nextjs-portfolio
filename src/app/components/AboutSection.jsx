"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.JS</li>
        <li>Node.JS</li>
        <li>Express.JS</li>
        <li>MongoDB</li>
        <li>Next.JS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>Jest Testing</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Bachelors of Engineering</li>
        <li>City Engineering College (VTU)</li>
        <li>Electronics and Communication</li>
        <li>Passed out - 2020</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <Link href="https://www.linkedin.com/in/shiv-shakti-bharti-aab505104/details/certifications/">
        <ul
          style={{
            border: "1px solid white",
            marginBottom: 10,
            padding: 10,
            borderRadius: 4,
          }}
        >
          <li>Fullstack Development Course</li>
          <li>Board Infinity (Online, 2021)</li>
        </ul>

        <ul
          style={{
            border: "1px solid white",
            marginBottom: 10,
            padding: 10,
            borderRadius: 4,
          }}
        >
          <li>CutShort Certified Javascript - Advanced</li>
          <li>Credential ID: 53001</li>
        </ul>

        <ul
          style={{
            border: "1px solid white",
            marginBottom: 10,
            padding: 10,
            borderRadius: 4,
          }}
        >
          <li>Triplebyte Certified Generalist Engineer</li>
          <li>Credential ID: MnIYVGw</li>
        </ul>
      </Link>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image-1.jpg"
          width={500}
          height={500}
          alt="about-me"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

          <p className="text-base lg:text-lg">
            Experienced MERN Stack Developer with two years of hands-on
            expertise in building robust and scalable web applications.
            Proficient in all aspects of the MERN stack . During my tenure, I
            have successfully designed and implemented responsive front-end
            interfaces using React, React Native, integrated complex back-end
            functionality creating REST API with Node.js.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
