'use client'

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import Countdown from "./countdown";
import PartnersLogo from "./partnerslogo";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="sticky top-0 z-[1]">
        <Navbar />
      </div>
      <div className="absolute inset-0 z-[0] bg-black/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
      <section className="relative z-1">
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-28 gap-6 sm:gap-8 md:gap-12 text-gray-300">
          <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter font-geist bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent">
              A 24 hours Online Open Innovation Hackathon for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
                Students & Entrepreneurs
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-400">
              Compete in Inohax 1.0 and stand a chance to win a cash prize of INR 10,000!
            </p>
            <div className="flex justify-center items-center">
              <Link href="/registration">
                <h1 className="text-base sm:text-lg text-gray-400 group font-geist mx-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border-[2px] border-white/5 rounded-full flex items-center justify-center w-fit">
                  Register Now
                  <div className="flex overflow-hidden relative justify-center items-center ml-2 w-4 sm:w-5 h-4 sm:h-5">
                    <ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
                    <ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </h1>
              </Link>
            </div>
          </div>
          <div className="mt-8 sm:mt-12">
            <Countdown />
          </div>
          <div className="">
            <PartnersLogo />
          </div>
        </div>
      </section>
    </div>
  );
}
