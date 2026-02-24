import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Database, Wrench, Shield } from "lucide-react";

export function SkillsSection() {
  const categories = [
    {
      title: "Core Programming",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Java", "Python"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["GitHub", "VS Code", "Eclipse"]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Kali Linux", "Metasploit"]
    },
    {
      title: "Hardware & IoT",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["ESP32 Microcontroller", "Sensor Integration"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 rounded-full font-black uppercase tracking-widest text-[10px]">Technical Stack</Badge>
          <h2 className="text-5xl font-headline font-black text-slate-900">Technical <span className="text-primary font-cursive italic">Skills.</span></h2>
          <p className="text-slate-500 max-w-xl text-lg font-medium">
            Bridging software logic with hardware execution through a versatile technical foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-primary/50 hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="flex flex-col gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary w-fit group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white text-slate-600 rounded-full border border-slate-100 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}