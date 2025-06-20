"use client";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";
import { Separator } from "@radix-ui/react-separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Github } from "lucide-react";
import { TbBrandVercel } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import type { StaticImageData } from "next/image";

// Projects Page: Displays Abdul Rehman's featured and recent projects

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: string | StaticImageData;
  githubUrl: string;
  vercleUrl: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Unit Convertor using Python",
    category: "Full Stack",
    description:
      "I have developed a simple Unit Converter application using Python. The tool allows users to convert values between different units such as length (meters, kilometers, miles), weight (kilograms, pounds, grams), and temperature (Celsius, Fahrenheit, Kelvin). The application is designed to be user-friendly and efficient for quick conversions.",
    stack: ["HTML", "CSS", "Python"],
    image: project1,
    githubUrl: "https://github.com/Abdul-Rehman308/Unit_Convertor",
    vercleUrl: "https://unitconvertor-abdul-rehman.streamlit.app/",
  },
  {
    id: "02",
    title: "Growth Mindset Challenge: Web App",
    category: "Full Stack",
    description:
      "I created a Growth Mindset Challenge Web App using Python to promote positive habits and personal development. The app is designed to motivate users by providing them with daily challenges and motivational prompts focused on developing a growth mindset.",
    stack: ["HTML", "CSS", "Python"],
    image: project3,
    githubUrl: "https://github.com/Abdul-Rehman308/Growth-Mindset-Challenge",
    vercleUrl: "https://abdulrehman-growth.streamlit.app/",
  },
  {
    id: "03",
    title: "Calculator App",
    category: "Full Stack",
    description:
      "A simple and clean calculator app that performs basic arithmetic operations on interger as well as floating point numbers.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: project4,
    githubUrl: "https://github.com/Abdul-Rehman308/Calculator",
    vercleUrl: "https://calculator-three-gamma-71.vercel.app/",
  },
  {
    id: "04",
    title: "Password Strength Checker",
    category: "Full Stack",
    description:
      "I developed a Password Strength Checker web application using Python to help users create strong and secure passwords. The app analyzes the input password and evaluates its strength based on key criteria such as length, use of uppercase and lowercase letters, numbers, and special characters.",
    stack: ["HTML", "CSS", "Python"],
    image: project2,
    githubUrl: "https://github.com/Abdul-Rehman308/Analog-Clock",
    vercleUrl: "https://analog-clock-blond-five.vercel.app/",
  },

  {
    id: "05",
    title: "Analog Clock",
    category: "Full Stack",
    description:
      "A simple and clean analogue clock that displays the current time. Using mathematical formula to measure the actual time but making it happen through JS, design provided by CSS.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: project2,
    githubUrl: "https://github.com/Abdul-Rehman308/Analog-Clock",
    vercleUrl: "https://analog-clock-blond-five.vercel.app/",
  },
];

const ProjectPage = () => {
  return (
    <div className="py-6 md:py-12">
      <PageLayout>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightSky/20 hover:border-lightSky/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                      {/* description */}
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <div>
                            <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                              {project.id}
                            </h2>

                            <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                              {project.category} Project
                            </h3>
                            <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal py-4">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                              <ul className="flex flex-wrap gap-2 md:gap-4">
                                {project.stack.map((item, index) => (
                                  <li
                                    key={index}
                                    className="text-xs md:text-base text-lightSky/80"
                                  >
                                    {item}
                                    {index !== project.stack.length - 1 && ","}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Separator className="bg-gray-700 h-px my-4" />

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    size="icon"
                                    className="items-center text-lightSky border border-hoverColor/30 hover:bg-lightSky/10 hover:border-lightSky/70"
                                  >
                                    <Link
                                      href={project.githubUrl}
                                      target="_blank"
                                    >
                                      <Github />
                                      <span className="sr-only">
                                        View Github repository
                                      </span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View on GitHub</p>
                                </TooltipContent>
                              </Tooltip>

                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    size="icon"
                                    className="items-center text-lightSky border border-hoverColor/30 hover:bg-lightSky/10 hover:border-lightSky/70"
                                  >
                                    <Link
                                      href={project.vercleUrl}
                                      target="_blank"
                                    >
                                      <TbBrandVercel />
                                      <span className="sr-only">
                                        View vercle repository
                                      </span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View on vercle</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>

                      {/* image */}
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8">
            <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/50 hover:bg-lightSky/10 hover:border-hoverColor/80 hoverEffect hover:text-white p-5" />
            <CarouselNext className="rounded-md bg-transparent border border-lightSky/50 hover:bg-lightSky/10 hover:border-hoverColor/80 hoverEffect hover:text-white p-5" />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default ProjectPage;
