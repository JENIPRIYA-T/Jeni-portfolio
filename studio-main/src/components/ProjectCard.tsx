"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, CheckCircle2, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  domain?: string;
  technologies: string[];
  description: string;
  features: string[];
  contributions: string[];
  linkUrl: string;
  linkLabel: string;
  githubUrl?: string;
}

export function ProjectCard({ 
  title, 
  domain,
  technologies, 
  description, 
  features,
  contributions,
  linkUrl,
  linkLabel,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 border border-slate-100 rounded-[32px] bg-white flex flex-col h-full">
      <CardHeader className="pb-4 pt-8 px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Details</span>
          </div>
          {domain && (
            <Badge variant="secondary" className="text-[9px] font-black uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-600 border-none">
              {domain}
            </Badge>
          )}
        </div>
        <CardTitle className="font-headline text-2xl text-slate-900 font-black group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-8 flex-grow space-y-6">
        <div className="space-y-3">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</p>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            {description}
          </p>
        </div>
        
        <div className="space-y-3">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Technologies Used</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-[10px] font-bold text-primary bg-primary/5 px-3 py-1 rounded-md border border-primary/10">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-50">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" /> My Contributions
          </p>
          <ul className="space-y-2">
            {contributions.map((contribution, idx) => (
              <li key={idx} className="text-xs text-slate-600 font-medium flex gap-2">
                <span className="text-primary">•</span>
                {contribution}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pb-8 px-8 flex flex-col gap-6">
        <div className="w-full space-y-3">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Key Features</p>
          <div className="flex flex-wrap gap-2">
            {features.map((feat, idx) => (
              <Badge key={idx} variant="outline" className="text-[9px] font-bold text-slate-500 border-slate-200 px-2 py-0.5 rounded-lg bg-slate-50/50">
                {feat}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <Button asChild variant="outline" className="w-full rounded-xl gap-2 border-primary/20 hover:bg-primary hover:text-white transition-all group/btn">
            <Link href={linkUrl} target="_blank">
              <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> {linkLabel}
            </Link>
          </Button>
          {githubUrl && (
            <Button asChild variant="secondary" className="w-full rounded-xl gap-2 border-none bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all">
              <Link href={githubUrl} target="_blank">
                <Github className="w-4 h-4" /> View Code
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
