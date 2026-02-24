"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Constructing a detailed body for the email
    const emailBody = `Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`;
    
    // Creating the mailto URL for direct redirection to the user's mailbox
    const mailtoUrl = `mailto:jenipriya2005@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${encodeURIComponent(emailBody)}`;
    
    // Attempt to open the mail client
    try {
      window.location.href = mailtoUrl;
      toast({
        title: "Redirecting to Mail",
        description: "Opening your email application to send the message.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not open email client. Please manually email jenipriya2005@gmail.com",
      });
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-5xl font-headline font-black text-slate-900 leading-tight">
              Let's <br />
              <span className="text-primary font-cursive text-6xl">Connect.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-md">
              I'm currently seeking internship and placement opportunities. Feel free to reach out for collaborations or inquiries.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                <p className="font-black text-slate-900">jenipriya2005@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                <p className="font-black text-slate-900">+91 98401 86253</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                <p className="font-black text-slate-900">Chennai, India</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button asChild variant="outline" className="h-14 w-14 rounded-2xl border-primary/20 hover:bg-primary hover:text-white transition-all">
              <Link href="https://www.linkedin.com/in/jenipriya2005" target="_blank">
                <Linkedin className="w-6 h-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-14 w-14 rounded-2xl border-primary/20 hover:bg-primary hover:text-white transition-all">
              <Link href="https://github.com/JENIPRIYA-T" target="_blank">
                <Github className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-primary/5 border border-slate-100">
          <h3 className="text-2xl font-black text-slate-900 mb-8">Send me a Message</h3>
          <form className="space-y-8" onSubmit={handleSendEmail}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Name</label>
                <Input 
                  placeholder="John Doe" 
                  className="bg-slate-50 border-none focus-visible:ring-primary h-14 rounded-2xl px-6"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-slate-50 border-none focus-visible:ring-primary h-14 rounded-2xl px-6"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</label>
              <Input 
                placeholder="Placement Opportunity" 
                className="bg-slate-50 border-none focus-visible:ring-primary h-14 rounded-2xl px-6"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Message</label>
              <Textarea 
                placeholder="Hi Jeni, I'm reaching out to discuss..." 
                className="min-h-[160px] bg-slate-50 border-none focus-visible:ring-primary resize-none rounded-2xl p-6"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl h-16 font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 transition-all active:scale-95">
              <Send className="w-5 h-5" /> Send the Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
