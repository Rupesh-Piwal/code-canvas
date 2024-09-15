import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import { Zap, Download, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#080624]">
      <Header />
      <div className="flex-1">
        <HeroBanner />
        <section className="w-full py-12 md:py-24  bg-[#080624]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-solid border-slate-700  bg-[#ffffff0d]">
                <Palette className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-white">
                  Multiple Themes
                </h3>
                <p className="text-sm text-gray-300 text-center">
                  Choose from a variety of themes to match your style or brand.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-solid border-slate-700  bg-[#ffffff0d]">
                <Zap className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-white">
                  Instant Generation
                </h3>
                <p className="text-sm text-gray-300 text-center">
                  Get your code image in seconds with our lightning-fast
                  processing.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-solid border-slate-700  bg-[#ffffff0d]">
                <Download className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Downloadable</h3>
                <p className="text-sm text-gray-300 text-center">
                  Easily download your code images in various formats for use
                  anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-12 bg-[#080624]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to create stunning code images?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of developers who use CodeSnap to share their
                  code beautifully.
                </p>
              </div>
              <Link
                href="/codetoimage"
                className="bg-gradient-to-b from-[#4D36D0] to-[#8474FE]
 text-[#ffffff] hover:opacity-80 px-6 py-2.5 rounded-lg"
              >
                Get Started for Free
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
