import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { AboutMeSection } from "@/components/AboutMeSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationSection } from "@/components/CertificationSection";
import { ContactSection } from "@/components/ContactSection";
import { ShareButton } from "@/components/ShareButton";
import { BackToTop } from "@/components/BackToTop";
import { 
  Download, 
  Linkedin, 
  Github, 
  Briefcase,
  GraduationCap,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const resumeUrl = "https://drive.google.com/file/d/1RUACvVaW5V8C2flrYGwk5WP7ZJpSIkOI/view?usp=sharing"; 

  const projects = [
    {
      title: "1️⃣ Flood Resistant System using Hydraulic Lift",
      domain: "IoT / Embedded Systems",
      technologies: ["ESP32 / Arduino", "Embedded C", "Sensors", "IoT integration", "Hydraulic mechanism"],
      description: "Designed and developed an IoT-based flood protection mechanism that automatically elevates household platforms using a hydraulic lift when rising water levels are detected. The system aims to minimize property damage in flood-prone areas through real-time sensing and automated response.",
      features: [
        "Water level detection using sensors for real-time monitoring", 
        "Automatic activation of hydraulic lift mechanism", 
        "Microcontroller-based control system", 
        "Compact and cost-effective prototype design", 
        "Suitable for smart city and disaster-management applications"
      ],
      contributions: [
        "Developed the control logic for sensor-based activation",
        "Integrated hardware components with the microcontroller",
        "Tested real-time response for different water levels",
        "Participated in system design and prototype implementation"
      ],
      linkUrl: "https://drive.google.com/file/d/1bG7e3AF4PBZgb5MnA-dTALdDWVAamVjL/view?usp=sharing",
      linkLabel: "View Demo"
    },
    {
      title: "2️⃣ Digital Clock – Python",
      technologies: ["Python", "Tkinter", "datetime", "pytz"],
      description: "A real-time digital clock application that displays Indian Standard Time using a graphical user interface.",
      features: [
        "Live time update every second using after(1000)", 
        "Timezone handling with pytz (Asia/Kolkata)", 
        "12-hour format with AM/PM", 
        "Custom styled UI with Tkinter"
      ],
      contributions: [
        "Implemented real-time clock logic",
        "Configured timezone-based time display",
        "Designed GUI layout and styling"
      ],
      linkUrl: "https://drive.google.com/file/d/18JD6I1pVzMoDZq4H-vjUahW_vO94RQ8L/view?usp=sharing",
      linkLabel: "View Output",
      githubUrl: "https://github.com/JENIPRIYA-T"
    },
    {
      title: "3️⃣ Tic Tac Toe – Python",
      technologies: ["Python", "Tkinter"],
      description: "A two-player GUI-based Tic Tac Toe game with turn tracking and automatic win detection.",
      features: [
        "Interactive 3×3 grid using Tkinter buttons", 
        "Dynamic player turn indicator", 
        "Automatic win detection (Rows/Columns/Diagonals)", 
        "Game reset functionality", 
        "Color-coded player symbols"
      ],
      contributions: [
        "Implemented game logic and win condition algorithm",
        "Designed event-driven UI",
        "Managed game state and reset functionality"
      ],
      linkUrl: "https://drive.google.com/file/d/1qT9a9QYCOI6ABOdZxLTcUbfTJW5Ow1nK/view?usp=sharing",
      linkLabel: "View Output",
      githubUrl: "https://github.com/JENIPRIYA-T"
    },
    {
      title: "4️⃣ Snake Game – Python",
      technologies: ["Python", "Tkinter", "Random module"],
      description: "A classic Snake game with score tracking and collision detection implemented using a GUI.",
      features: [
        "Keyboard-controlled snake movement", 
        "Random food spawning", 
        "Real-time score updates", 
        "Wall and self collision detection", 
        "Game over display with reset option"
      ],
      contributions: [
        "Developed movement and growth logic",
        "Implemented collision detection algorithm",
        "Designed score tracking system",
        "Created dynamic rendering of snake and food"
      ],
      linkUrl: "https://drive.google.com/file/d/1RT7XUMfEKLPoxBPx6cXdc8N6jcJ04u9z/view?usp=sharing",
      linkLabel: "View Output",
      githubUrl: "https://github.com/JENIPRIYA-T"
    },
    {
      title: "5️⃣ Connect Four – Python",
      technologies: ["Python", "Tkinter"],
      description: "A two-player Connect Four game with a graphical interface and automatic winner detection.",
      features: [
        "6×7 interactive game grid", 
        "Mouse-click based disc drop", 
        "Automatic turn switching (Red/Yellow)", 
        "Horizontal, Vertical, Diagonal win detection", 
        "Pop-up winner announcement"
      ],
      contributions: [
        "Implemented disc drop logic using mouse events",
        "Developed 4-in-a-row win detection algorithm",
        "Managed game board state dynamically",
        "Designed GUI using canvas elements"
      ],
      linkUrl: "https://drive.google.com/file/d/1MlNOUg16HnzxyDg2x96UhNriM_dqM7FV/view?usp=sharing",
      linkLabel: "View Output",
      githubUrl: "https://github.com/JENIPRIYA-T"
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10">
      <BackToTop />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-cursive text-primary text-3xl font-bold hover:opacity-80 transition-opacity">
            Jeni Priya T
          </Link>
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <Link href="#about" className="hover:text-primary transition-colors">About Me</Link>
            <Link href="#education" className="hover:text-primary transition-colors">Education</Link>
            <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          </div>
          <div className="flex items-center gap-4">
            <ShareButton variant="ghost" className="hidden sm:flex rounded-full text-primary" showIconOnly />
            <Button asChild variant="default" className="rounded-full px-6 shadow-lg shadow-primary/20">
              <Link href="#contact">
                Let's Connect
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-widest mx-auto">
            <ShieldCheck className="w-3.5 h-3.5" /> CSE • Aspiring Software Engineer
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-headline font-black text-slate-900 leading-[1.1]">
              Hello, I'm <br />
              <span className="font-cursive text-primary text-7xl lg:text-8xl block mt-2">Jeni Priya T</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              A Computer Science student passionate about Cybersecurity and IoT solutions. I build secure, smart systems for a better future.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-5">
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-base shadow-xl shadow-primary/20 group">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Download Resume <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <ShareButton variant="outline" className="h-14 w-14 rounded-full border-primary/20 hover:bg-primary/5" showIconOnly />
              <Button asChild variant="outline" size="icon" className="w-14 h-14 rounded-full border-primary/20 hover:bg-primary/5">
                <Link href="https://www.linkedin.com/in/jenipriya2005" target="_blank">
                  <Linkedin className="w-5 h-5 text-slate-600" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="w-14 h-14 rounded-full border-primary/20 hover:bg-primary/5">
                <Link href="https://github.com/JENIPRIYA-T" target="_blank">
                  <Github className="w-5 h-5 text-slate-600" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-12 pt-8 border-t border-primary/10 max-w-md mx-auto">
            <div className="space-y-1">
              <p className="text-3xl font-black text-slate-900">8.43</p>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">Current CGPA</p>
            </div>
            <div className="w-px h-10 bg-primary/10" />
            <div className="space-y-1">
              <p className="text-3xl font-black text-slate-900">5+</p>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">Core Projects</p>
            </div>
          </div>
        </div>
      </section>

      <AboutMeSection />

      <section id="education" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <h2 className="text-4xl font-headline font-black flex items-center gap-4 text-slate-900">
                <GraduationCap className="w-10 h-10 text-primary" /> Education
              </h2>
              <div className="relative pl-8 border-l-2 border-primary/20">
                <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-md transition-shadow">
                  <div className="absolute -left-[41px] top-10 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm" />
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[11px] font-black rounded-full mb-6">
                    2023 - 2027
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">B.E - Computer Science & Engineering</h3>
                  <p className="text-lg font-headline text-primary font-bold mb-4">Panimalar Engineering College</p>
                  <div className="flex items-center gap-3 py-3 px-4 bg-slate-50 rounded-xl w-fit border border-slate-100">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-black text-slate-700">CGPA: 8.4386</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-4xl font-headline font-black flex items-center gap-4 text-slate-900">
                <Briefcase className="w-10 h-10 text-primary" /> Experience
              </h2>
              <div className="relative pl-8 border-l-2 border-primary/20 space-y-10">
                <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-md transition-shadow">
                  <div className="absolute -left-[41px] top-10 w-5 h-5 rounded-full bg-slate-400 border-4 border-white shadow-sm" />
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[11px] font-black rounded-full mb-4 uppercase tracking-wider">
                    June - July 2024
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">Python Programming Intern</h3>
                  <p className="text-lg font-headline text-primary font-bold mb-4">InternPe</p>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">Developed Python projects including games and automation tasks, strengthening debugging and problem-solving skills.</p>
                </div>

                <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:shadow-md transition-shadow">
                  <div className="absolute -left-[41px] top-10 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm" />
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[11px] font-black rounded-full mb-4 uppercase tracking-wider">
                    November 2024
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">Certified Penetration Tester</h3>
                  <p className="text-lg font-headline text-primary font-bold mb-4">Cybertronium (Malaysia)</p>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">Professional training in vulnerability assessment, ethical hacking, and cybersecurity protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkillsSection />

      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-xl space-y-4">
              <h2 className="text-4xl font-headline font-black text-slate-900">Core Projects</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Showcasing my technical implementations in software development and IoT hardware. Each project highlights specific problem-solving methodologies.
              </p>
            </div>
            <Button asChild variant="link" className="text-primary font-black text-base p-0 group">
              <Link href="https://github.com/JENIPRIYA-T" target="_blank">
                Github Profile <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CertificationSection />

      <ContactSection />

      {/* Footer */}
      <footer className="py-20 border-t border-primary/10 text-center bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <Link href="/" className="font-cursive text-primary text-3xl font-bold hover:opacity-80 transition-opacity">
              Jeni Priya T
            </Link>
            <div className="flex items-center gap-4">
               <ShareButton variant="link" className="text-primary font-bold uppercase tracking-widest text-[10px]" />
            </div>
            <div className="space-y-2">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
                © 2025 Portfolio | Built for Excellence
              </p>
              <p className="text-slate-300 text-[9px] font-bold uppercase tracking-widest">
                Last Updated: March 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
