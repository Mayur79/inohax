import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import Countdown from "./countdown";
import PartnersLogo from "./partnerslogo";
export default function Hero() {
    return (
        <div className="relative">
            <div className="sticky top-6 z-[1]">
                <Navbar />
            </div>
            <div className="absolute top-0 z-[0] h-screen w-screen bg-black/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
            <section className="relative max-w-full mx-auto z-1">
                <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 text-gray-300 md:px-8">
                    <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
                        <h2 className="text-sm tracking-tighter font-geist bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent mx-auto md:text-6xl">
                            A 24 hours Online Open Innovation Hackathon for{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
                                Students & Entrepreneurs
                            </span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-400">
                            Compete in Inohax 1.0 and stand a chance to win a cash prize of INR 10,000!
                        </p>
                        <div className="flex justify-center items-center">
                            <Link href="/registration">
                                <h1 className="text-lg text-gray-400 group font-geist mx-auto px-6 py-3 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border-[2px] border-white/5 rounded-full flex items-center justify-center w-fit">
                                    Register Now
                                    <div className="flex overflow-hidden relative justify-center items-center ml-2 w-5 h-5">
                                        <ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
                                        <ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
                                    </div>
                                </h1>
                            </Link>
                        </div>
                    </div>
                    <Countdown />
                    <PartnersLogo />
                </div>
            </section>
        </div>
    );
}
