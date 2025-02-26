"use client";
import React from "react";
import Image from "next/image";
import Banner from "../../public/pictures/banner.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Stars } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotPattern } from "./dot-pattern";
import { ShimmerButton } from "./shimmer-button";


const HeroBanner = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const shimmer = {
    animate: {
      x: ["0%", "100%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen py-16 md:py-24 bg-black overflow-hidden">
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
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #333333 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, #1a1a1a 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, #333333 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative px-4 md:px-6 mx-auto">
        <div className="flex flex-col gap-12 items-center text-center">
          <motion.div
            className="space-y-8 relative"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Floating Elements */}
            <motion.div
              className="absolute -left-12 top-0"
              animate={{
                y: [-15, 15],
                rotate: [0, 180],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Stars className="w-8 h-8 text-[#343B7C] opacity-60" />
            </motion.div>

            <motion.div
              className="absolute -right-8 bottom-0"
              animate={{
                y: [15, -15],
                rotate: [180, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Sparkles className="w-6 h-6 text-[#2A2F5E] opacity-60" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="relative text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none"
            >
              <span className="inline-block bg-gradient-to-br from-white via-gray-400 to-gray-600 bg-clip-text text-transparent pb-2">
                Transform Your Code
              </span>
              <br />
              <span className="inline-block bg-gradient-to-br from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Into Visual Art
              </span>
              
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-[700px] text-[16px] md:text-xl bg-gradient-to-br from-gray-400 to-gray-600 bg-clip-text text-transparent leading-relaxed font-light"
            >
              Create mesmerizing code presentations that capture attention and
              inspire. Your code deserves to be showcased beautifully.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <Link href="/codetoimage">
              <ShimmerButton className="flex items-center gap-2 shadow-lg">
                Start Creating
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </ShimmerButton>
            </Link>
          </motion.div>

          <motion.div
            className="w-full max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Multi-layered Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#343B7C] via-[#4A5190] to-[#2A2F5E] rounded-xl blur-2xl opacity-70" />
              <div className="absolute -inset-2 bg-gradient-to-r from-[#4A5190] via-[#343B7C] to-[#2A2F5E] rounded-xl blur-3xl opacity-40" />

              <motion.div
                className="relative rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={Banner}
                  alt="CodeSnap product preview"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  priority
                />

                {/* Dynamic Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 skew-x-12"
                  variants={shimmer}
                  animate="animate"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1123] to-transparent" />
    </section>
  );
};

export default HeroBanner;
