"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { CaseStudyTeasers } from "@/components/CaseStudyTeasers";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { GlobalMap } from "@/components/GlobalMap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Header />

      <main className="flex-1">
        <HeroSection />

        <ServicesSection />

        <HowIWorkSection />

        <CaseStudyTeasers />

        {/* Testimonials */}
        <section className="py-20 px-6 border-b border-border/40 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-10 text-center">What Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <blockquote className="space-y-4">
                <p className="text-lg font-serif italic text-foreground leading-relaxed">
                  “Emmanuel delivered beyond expectations and communicated clearly throughout the entire re-platforming process.”
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">SF</div>
                  <div>
                    <div className="font-bold text-sm">Startup Founder</div>
                    <div className="text-xs text-muted-foreground">Nairobi, Kenya</div>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="space-y-4">
                <p className="text-lg font-serif italic text-foreground leading-relaxed">
                  “NexuM Labs helped us move from a rough prototype to a scalable production system in just 8 weeks.”
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">HP</div>
                  <div>
                    <div className="font-bold text-sm">Head of Product</div>
                    <div className="text-xs text-muted-foreground">London, UK</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>





        {/* About / Founder */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-display font-bold text-foreground">About the Founder</h2>
              <h3 className="text-xl text-accent font-medium">Emmanuel Njenga — Systems Engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I’m a systems-focused engineer building reliable, maintainable platforms and AI-enhanced products. I partner with founders and technical leaders to move from idea to production with clarity and measurable outcomes.
              </p>
              <p className="text-sm font-medium text-foreground pt-4">
                Based in Nairobi, Kenya. Working globally.<br />
                <span className="text-muted-foreground font-normal">Availability: ~20 hrs/week for new projects.</span>
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="text-accent hover:text-accent/80 font-medium inline-flex items-center transition-colors"
                >
                  Work with me <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
