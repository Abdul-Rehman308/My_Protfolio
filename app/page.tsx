"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/photo";
import SocialLinks from "@/components/ui/socialLinks";
import Statistics from "@/components/ui/statistics";
import { Download } from "lucide-react";

// Home Page: Showcases introduction and highlights of Abdul Rehman

export default function Home() {
  return (
    <div className="bg-bodyColor text-white/80 relative flex">
      <Container className="py-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Section */}
        <div className="text-center xl:text-left order-2 xl:order-none flex flex-col items-center md:items-start gap-2 md:gap-3 md:text-start">
          {/* Name & Profession */}
          <div>
            <h3 className="font-semibold tracking-wider mb-0.5 text-lightSky">
              AI Frontend Developer.
            </h3>
            <h2 className="text-3xl md:text-5xl mb-1 text-white">
              Hello, I&apos;m
            </h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">
              Abdul Rehman
            </h1>
          </div>

          {/* Description */}
          <div className="w-full h-[100px] md:h-[80px] relative md:mt-1">
            <div className="absolute top-0 left-0 w-full h-auto">
              <HomeDescription />
            </div>
          </div>

          {/* Download CV Button */}
          <Button
            className="bg-transparent 
            rounded-full border 
            border-lightSky/50 
            text-lightSky 
            hover:bg-hoverColor 
            hover:text-black hoverEffect mb-2"
            onClick={() => window.open("resume.pdf", "_blank")}
          >
            Download CV <Download />
          </Button>

          {/* Social Links & Statistics */}
          <SocialLinks />
          <Statistics />
        </div>

        {/* Profile Photo */}
        <Photo />
      </Container>
    </div>
  );
}
