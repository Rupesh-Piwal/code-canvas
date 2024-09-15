import Image from "next/image";
import Banner from "@/public/pictures/banner.png";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-[#080624]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-7 items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-br from-gray-500 via-purple-400 to-blue-700 bg-clip-text text-transparent">
              Transform Your Code into Images
            </h1>
            <p className="mx-auto max-w-[700px] text-purple-400/1 md:text-lg">
              Create stunning, shareable images of your code snippets in
              seconds. Perfect for documentation, presentations, and social
              media.
            </p>
          </div>
          <Link
            href="/codetoimage"
            className="bg-gradient-to-b from-[#4D36D0] to-[#8474FE]
 text-[#ffffff] hover:opacity-80 px-6 py-2.5 rounded-lg"
          >
            Get Started
          </Link>
          <div className="mt-8 flex justify-center">
            <Image
              src={Banner}
              alt="CodeSnap product preview"
              className="w-[80%] h-auto rounded-xl shadow-[0_0_45px_4px_#844BE0]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
