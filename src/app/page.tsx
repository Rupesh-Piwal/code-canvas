"use client";
import React from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap, Download, Palette, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { DotPattern } from "@/components/dot-pattern";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const features = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Stunning Themes",
      description:
        "Elevate your code with our carefully crafted themes, designed to make your snippets stand out beautifully.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Magic",
      description:
        "Transform your code into visual masterpieces in milliseconds with our optimized processing engine.",
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Easy Export",
      description:
        "Download your creations in multiple formats with a single click, ready to share with the world.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Magic UI Dot Pattern Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "absolute h-full w-full",
            "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
            "opacity-50"
          )}
        />
      </div>

      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #333333 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #1a1a1a 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, #333333 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative">
        <Header />
        <HeroBanner />

        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6 relative">
            <motion.div
              className="absolute -top-12 -right-12"
              animate={{
                y: [-10, 10],
                rotate: [0, 180],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Sparkles className="w-24 h-24 text-gray-700 opacity-10" />
            </motion.div>

            <motion.h2
              {...fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-white"
            >
              Powerful Features
            </motion.h2>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-800/50 rounded-xl opacity-50 group-hover:opacity-100 blur transition-all duration-500" />
                  <div className="relative flex flex-col items-center space-y-4 p-6 rounded-xl bg-transparent border border-gray-900 hover:border-gray-600 transition-all duration-300">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-24 relative">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-gray-800/20 blur-3xl" />
          </motion.div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Ready to Transform Your Code?
                </h2>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-400 leading-relaxed">
                  Join our community of developers creating stunning code
                  presentations that capture attention and inspire.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href="/codetoimage">
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-size-200 rounded-full text-white font-medium text-lg shadow-lg shadow-black/25 hover:shadow-black/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      Get Started Free
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                      initial={false}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
