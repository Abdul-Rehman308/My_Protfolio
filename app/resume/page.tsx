"use client";

import PageLayout from "@/components/PageLayout";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import { Briefcase, Calendar, GraduationCap, User, Wrench } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaHtml5, FaCss3, FaFigma, FaJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const tabMenu = [
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "About me", value: "about", icon: User },
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Skills", value: "skills", icon: Wrench },
];

const tabsContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Frontend Developer",
        Description:
          "I learnt Frontend Development with experience of building different websites and web applications involving the use of different technologies such as HTML5 , CSS3 , TypeScript , Next.js , Tailwind ",
        highlights: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Team Leasdership",
        ],
      },

      {
        role: "OOP Developer",
        Description:
          "OOP Developer woorking with JavaScript , TypeScript and Python. I have experience in building different projects and applications.",
        highlights: ["JavaScript", "TypeScript", "Python"],
      },
    ],
  },

  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Intermediate in Computer Science",
        instituation: "Govt. Degree Science College",
        period: "2021 - 2023",
        Description:
          "Started building my base in the emerging field of computer science",
        highlights: [
          "A+ Grade",
          "Stood at 1st position in the class",
          "Topper of the college",
          "One of the best Students of the year",
        ],
      },
      {
        degree: "Matriculation in Computer Science",
        instituation: "Govt. Boys Science Secondary School",
        period: "2019 - 2021",
        Description:
          "Learnt a lot about different branches of Science such as Computer, Chemistry, Mathematics, Physics and many others",
        highlights: [
          "A+ Grade",
          "Topper of the school",
          "One of the best Students of the year",
        ],
      },
    ],
  },

  about: {
    title: "About Me",
    bio: "Passionate software developer with over 1 year of experience in building modern websites and web applications. I specialize in HTML, CSS, and JavaScript. I am a quick learner and a team player who is always looking to grow and improve my skills.",
    interests: [
      "Software Development",
      "Web Development",
      "Open Source Contribution",
      "Mechine Learning",
      "Team Leadership",
      "Artificial Intelligence",
      "Ethetical Hacking",
    ],
    Languages: [
      "Urdu (Native)",
      "English (Professional level)",
      "Hindi (Intermediate)",
      "Arabic(Intermediate)",
    ],
  },

  skills: {
    title: "My Skills",
    describtion:
      "I learnt Frontend Development with experience of building different websites and web applications involving the use of different technologies such as HTML5, CSS3 , JavaScript, TypeScript , Python , Next.js , Tailwind CSS , Figma",
    skillList: [
      { icon: <FaHtml5 color="#E34F26" size={40} />, name: "HTML5" },
      { icon: <FaCss3 color="#1572B6" size={40} />, name: "CSS3" },
      { icon: <FaJs color="#F7DF1E" size={40} />, name: "JavaScript" },
      { icon: <SiTypescript color="#3178C6" size={40} />, name: "TypeScript" },
      { icon: <FaPython color="#3776AB" size={40} />, name: "Python" },
      { icon: <SiNextdotjs color="black" size={40} />, name: "Next.js" },
      {
        icon: <SiTailwindcss color="#06B6D4" size={40} />,
        name: "Tailwind CSS",
      },
      { icon: <FaFigma color="#F24E1E" size={40} />, name: "Figma" },
    ],
  },
};

const resumePage = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="education"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-lightSky hover:bg-lightSky/60 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1 min-h[400px] ">
            {/* Experience */}
            <TabsContent value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.experience.title}
              </motion.h2>
              <div className="space-y-6">
                {tabsContent.experience.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5"
                  >
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="mb-4 text-white">{item.Description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.education.title}
              </motion.h2>
              <div className="space-y-6">
                {tabsContent.education.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6 hover:border-lightSky/30 hover:bg-lightSky/5"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item.degree}</h3>
                        <p className="text-muted-foreground">
                          {item.instituation}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item.Description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent value="about">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.about.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border rounded-lg border-lightSky/20 p-6"
              >
                <p className="mb-6 text-lg">{tabsContent.about.bio}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {tabsContent.about.interests.map((interest, i) => (
                        <Badge key={i} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {tabsContent.about.Languages.map((language, i) => (
                        <Badge key={i} variant="secondary">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* skills */}

            <TabsContent value="skills" className="w-full h-full">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabsContent.skills.title}
              </motion.h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="mb-6 text-lg">
                    {tabsContent.skills.describtion}
                  </p>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {tabsContent.skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-4xl group-hover:text-lightSky transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize text-xs">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default resumePage;
