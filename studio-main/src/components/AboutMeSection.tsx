"use client";

import { BrainCircuit, Cpu, Target, Shield } from "lucide-react";

export function AboutMeSection() {
  const summary = "I am a pre-final year Computer Science and Engineering student at Panimalar Engineering College, driven by a deep curiosity for how software and smart systems solve real-world problems. My academic journey is marked by projects like the Flood Resistant System using Hydraulic Lift, where I explored connecting theoretical IoT concepts with practical implementations for environmental challenges.";

  const highlights = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Driven by curiosity to solve complex logical puzzles through clean software code."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Smart Systems",
      description: "Bridging the gap between software logic and physical IoT hardware components."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Focused",
      description: "Trained in penetration testing and vulnerability assessment techniques."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Impact Driven",
      description: "Motivated by developing solutions that address real-world environmental challenges."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-5xl font-headline font-black text-slate-900 leading-tight">
              About <br />
              <span className="text-primary font-cursive text-6xl">Jeni Priya T.</span>
            </h2>
            <div className="w-20 h-2 bg-primary/20 rounded-full" />
          </div>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
            <div className="relative group">
              <p className="min-h-[150px] italic text-slate-500 border-l-4 border-primary/20 pl-6">
                "{summary}"
              </p>
            </div>
            <p>
              My academic journey is marked by connecting theoretical IoT concepts with practical implementations. Currently, I'm focusing on strengthening my <span className="font-black text-slate-900">Security &amp; Python development</span> expertise, eager to contribute to innovative tech environments.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-500">
              <div className="p-4 w-fit rounded-2xl bg-primary/10 text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="font-headline font-black text-xl text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
