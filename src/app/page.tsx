import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import {Zap, Download, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Picture1 from "@/public/pictures/product1.png"
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="flex-1">
        <HeroBanner />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-700">
                <Palette  className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-white">
                  Multiple Themes
                </h3>
                <p className="text-sm text-gray-300 text-center">
                  Choose from a variety of themes to match your style or brand.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-700">
                <Zap className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-white">
                  Instant Generation
                </h3>
                <p className="text-sm text-gray-300 text-center">
                  Get your code image in seconds with our lightning-fast
                  processing.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-700">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Product Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={Picture1}
                  alt="Code snippet image example 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Code snippet image example 2"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Code snippet image example 3"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-blue-900">
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
              <Button
                className="bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                size="lg"
              >
                Get Started for Free
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
