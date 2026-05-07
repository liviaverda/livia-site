"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Sparkles, Building2, HeartPulse, Users, LineChart, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Building health system partnerships that actually move patients",
    tag: "Healthcare Strategy",
  },
  {
    title: "What behavioral health access looks like when referral pathways work",
    tag: "Behavioral Health",
  },
  {
    title: "From field sales to system-level growth: lessons in relationship-led strategy",
    tag: "Leadership",
  },
];

const focusAreas = [
  {
    icon: HeartPulse,
    title: "Behavioral Health Access",
    text: "Expanding access to higher-acuity mental health treatment through scalable, patient-centered partnerships.",
  },
  {
    icon: Building2,
    title: "Health System Partnerships",
    text: "Helping hospitals and health systems build referral pathways, reduce care gaps, and improve continuity after discharge.",
  },
  {
    icon: Users,
    title: "Sales Leadership",
    text: "Developing high-performing teams through strategy, accountability, emotional intelligence, and disciplined execution.",
  },
  {
    icon: LineChart,
    title: "Growth Strategy",
    text: "Turning market intelligence, relationship-building, and operational workflows into measurable growth.",
  },
];

export default function LiviaTresederWebsite() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-stone-50/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-sm font-semibold tracking-[0.22em] text-stone-800">
            LIVIA TRESEDER
          </a>
          <nav className="hidden items-center gap-7 text-sm text-stone-600 md:flex">
            <a href="#about" className="hover:text-stone-950">About</a>
            <a href="#work" className="hover:text-stone-950">Work</a>
            <a href="#writing" className="hover:text-stone-950">Writing</a>
            <a href="#contact" className="hover:text-stone-950">Contact</a>
          </nav>
          <Button asChild className="rounded-full">
            <a href="#contact">Connect</a>
          </Button>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.08fr_0.92fr] md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Healthcare partnerships, behavioral health strategy, and growth leadership
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl">
              Livia Treseder
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-700 md:text-2xl">
              Director of Partnerships focused on building scalable health system relationships that expand access to life-saving behavioral health care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#work">
                  Explore my work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <a href="https://www.linkedin.com/in/livia-treseder/" target="_blank" rel="noopener noreferrer">
                  LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-stone-600">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Salt Lake City, Utah</span>
              <span>Charlie Health</span>
              <span>Health System Partnerships</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-amber-200/60 blur-3xl" />
            <div className="absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-stone-300/70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 via-stone-100 to-amber-100">
                <div className="flex h-full items-center justify-center p-10 text-center text-stone-500">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em]"><img
  src="/livia-treseder.JPG"
  alt="Livia Treseder"
  className="h-full w-full rounded-[2rem] object-cover"
/></p>
                    <p className="mt-3 text-lg font-medium text-stone-700"></p>
                    <p className="mt-2 text-sm"></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="border-y border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">About</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">A relationship-first leader operating at the intersection of care access, strategy, and growth.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-stone-700">
              <p>
                Livia Treseder is a healthcare partnerships and growth leader based in Salt Lake City. Her work focuses on helping health systems improve access to behavioral health care through clearer referral pathways, stronger operational alignment, and scalable partnership models.
              </p>
              <p>
                She brings a background in clinical outreach, sales leadership, market development, and system-level relationship building. Her leadership style blends strategic rigor with emotional intelligence, accountability, and a deep belief that better systems can create better outcomes for patients and families.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">Focus Areas</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Where I create impact</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card key={area.title} className="rounded-3xl border-stone-200 bg-white shadow-sm">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100">
                      <Icon className="h-6 w-6 text-stone-800" />
                    </div>
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                    <p className="mt-3 leading-7 text-stone-600">{area.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="writing" className="bg-stone-900 text-white">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-400">Writing & Ideas</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">Thought leadership topics</h2>
              <p className="mt-4 text-lg leading-8 text-stone-300">
                Use this section to publish articles that reinforce your professional identity and give Google more current, relevant content to associate with your name.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.title} className="rounded-3xl border-white/10 bg-white/5 text-white shadow-none">
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-amber-200">{post.tag}</p>
                    <h3 className="mt-4 text-xl font-semibold leading-7">{post.title}</h3>
                    <a href="#contact" className="mt-6 inline-flex items-center text-sm font-medium text-white/80 hover:text-white">
                      Coming soon <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">Contact</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight">Let’s connect.</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-700">
                  For partnerships, speaking, healthcare strategy conversations, or professional opportunities, connect with Livia Treseder on LinkedIn or reach out directly.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button asChild size="lg" className="rounded-full justify-start px-6">
                <a href="https://www.linkedin.com/in/livia-treseder/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full justify-start px-6">
                  <a href="mailto:liviatreseder@gmail.com">
                    <Mail className="mr-2 h-5 w-5" /> liviatreseder@gmail.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 px-5 py-8 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Livia Treseder. Healthcare partnerships, behavioral health strategy, and growth leadership.
      </footer>
    </div>
  );
}
