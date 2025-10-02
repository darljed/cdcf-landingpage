"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] })

const Hero = () => {
  const scrollToMission = () => {
    document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-church.jpg"
          alt="CDC Church Community"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <h1 className="font-serif text-3xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          WELCOME TO
        </h1>
        <h1 className={`${inter.className} text-center text-yellow-500 text-5xl md:text-7xl font-bold py-4`} >
          Christ-Driven Christian Fellowship
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-light">
          A Christ-driven community growing in faith and love
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToMission}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Join Us This Sunday
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToMission}
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm bg-primary-foreground/10 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center">

        <button
          onClick={scrollToMission}
          className="absolute bottom-[-50px] animate-bounce text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
