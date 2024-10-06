"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Been through:",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Gave me sleepless nights</li>
        <li>Made me get lost in thoughts thinking about you</li>
        <li>Had me going crazy</li>
        <li>Gave me the urge to better self</li>
        <li>And you made me build an entire website for you!</li>
        
      </ul>
    ),
  },
  // {
  //   title: "Education",
  //   id: "education",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>Fullstack Academy of Code</li>
  //       <li>University of California, Santa Cruz</li>
  //     </ul>
  //   ),
  // },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
       
      <Image
              src="/images/about.png"
              alt="hero image"
              className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full display: 'flex', alignItems: 'center', justifyContent: 'center'"
              width={500}
              height={500}
            />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Haya...</h2>
          <p className="text-base lg:text-lg">
            You asked yesterday if I was quitting, well, you concluded that I was. The thing is,
            I am going nowhere, in fact I&apos;m just getting started. You&apos;re miles away from me, with an entire desert and an ocean in between us, but you know what the say,
            mountains don&apos;t meet, but people do.

            <br/> <br/>
            Here&apos;s a recap of what you&apos;ve done to me; 



           
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skill")}
              active={tab === "skills"}
            >
              {" "}
             The Haya Effect:{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton> */}
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
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
