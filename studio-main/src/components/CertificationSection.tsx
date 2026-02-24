import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CertificationSection() {
  const certifications = [
    { 
      name: "Certified Penetration Tester", 
      issuer: "Cybertronium (Malaysia)", 
      date: "2025", 
      featured: true,
      link: "https://drive.google.com/file/d/1qHgnmoNPhtzDWepA3y7Q02zGy-kI4-OK/view?usp=sharing" 
    },
    { 
      name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional", 
      issuer: "Oracle", 
      date: "2024", 
      featured: true,
      link: "https://drive.google.com/file/d/1DcR0UGn4E3p0O45pxDB0wLJuadh7fiWq/view?usp=sharing"
    },
    { 
      name: "AWS Cloud Support Associate", 
      issuer: "Coursera", 
      date: "2025", 
      link: "https://drive.google.com/file/d/1ohgpKKxhrUD6MLJ3rTLqZtzyVm-L48vQ/view?usp=sharing" 
    },
    { 
      name: "Java Features", 
      issuer: "Infosys", 
      date: "2025", 
      link: "https://drive.google.com/file/d/1oAojEJbppBCM1n6jqxRaM6BEoruD3DW9/view?usp=sharing" 
    },
    { 
      name: "Python By Example", 
      issuer: "Infosys", 
      date: "2025", 
      link: "https://drive.google.com/file/d/11DXfUolpnENzn5dDL3BlTzQMG0K2MXPX/view?usp=sharing" 
    },
    { 
      name: "Introduction to Machine Learning", 
      issuer: "NPTEL", 
      date: "2025", 
      link: "https://drive.google.com/file/d/1FrgQFn4_aNu8ol7rg4VZEYNbQZdpVo3P/view?usp=sharing" 
    },
    { 
      name: "Programming in Java", 
      issuer: "NPTEL", 
      date: "2024", 
      link: "https://drive.google.com/file/d/1m1gFUjNUDa5ninolrbvaQaGksLRaRuB4/view?usp=sharing" 
    },
    { 
      name: "Aptis ESOL", 
      issuer: "British Council", 
      date: "2024", 
      link: "https://drive.google.com/file/d/1mwo4ExLwad5sDa39AGuc2qeCozaBxq8B/view?usp=sharing" 
    },
    { 
      name: "Acquiring Data", 
      issuer: "NASSCOM", 
      date: "2024", 
      link: "https://drive.google.com/file/d/1S2yhSo-8fruJI34b2uY70SgzzqTg2dZ7/view?usp=sharing" 
    }
  ];

  return (
    <section id="certifications" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-24">
        <div className="lg:w-2/5 space-y-10">
          <div className="space-y-6">
            <h2 className="text-5xl font-headline font-black text-slate-900 leading-tight">
              Professional <br /><span className="text-primary font-cursive">Credentials.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md font-medium">
              Validating my expertise through industry certifications from global technology leaders.
            </p>
          </div>
          
          <div className="relative p-10 bg-primary/5 rounded-3xl border border-primary/10 overflow-hidden">
            <div className="relative space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Award className="w-8 h-8" />
                <span className="font-black text-xl tracking-tight">Top Credential</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 leading-tight">Certified Penetration Tester (Cybertronium)</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Completed intensive technical training on cybersecurity and ethical hacking in Malaysia.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-primary font-black flex items-center gap-2">
                <a href={certifications[0].link} target="_blank" rel="noopener noreferrer">
                  Verify Credential <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className={`group p-6 rounded-3xl border transition-all duration-500 flex flex-col justify-between ${cert.featured ? 'border-primary/40 bg-primary/5' : 'border-slate-100 bg-white hover:border-primary/30'}`}
            >
              <div className="space-y-4">
                <div className={`p-3 w-fit rounded-xl ${cert.featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm leading-snug group-hover:text-primary transition-colors">{cert.name}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cert.issuer}</p>
                    <div className="w-1 h-1 rounded-full bg-slate-200" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cert.date}</p>
                  </div>
                </div>
              </div>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-primary transition-colors"
              >
                Verify <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
