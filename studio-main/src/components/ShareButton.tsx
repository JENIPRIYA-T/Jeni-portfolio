"use client";

import { Button } from "@/components/ui/button";
import { Share2, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonProps {
  variant?: "default" | "outline" | "ghost" | "link";
  className?: string;
  showIconOnly?: boolean;
}

export function ShareButton({ variant = "outline", className, showIconOnly = false }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: "Jeni Priya T - Professional Portfolio",
      text: "Check out Jeni Priya T's professional CSE portfolio!",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        toast({
          title: "Link Copied!",
          description: "Portfolio link has been copied to your clipboard.",
        });
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <Button 
      variant={variant} 
      className={className} 
      onClick={handleShare}
      size={showIconOnly ? "icon" : "default"}
    >
      {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
      {!showIconOnly && <span className="ml-2">Share Portfolio</span>}
    </Button>
  );
}
