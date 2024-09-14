import { Button } from "./ui/button";

const HeroBanner = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-300">
              Transform Your Code into Images
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Create stunning, shareable images of your code snippets in
              seconds. Perfect for documentation, presentations, and social
              media.
            </p>
          </div>
          <Button
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            size="lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
