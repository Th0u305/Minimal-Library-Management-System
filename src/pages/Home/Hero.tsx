import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-pink-900/90"></div>
      {/* <Image src="/placeholder.svg?height=800&width=1200" alt="Hero background" fill className="object-cover" /> */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
          ✨ Discover Amazing Stories
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Meet Your Next
          <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Favorite Author
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Discover amazing stories, connect with talented writers, and embark on
          literary adventures that will transform your world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:scale-105 active:scale-100 transition-transform duration-300">
            Discover Books
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-transparent hover:scale-105 active:scale-100 transition-transform duration-300"
          >
            Browse Authors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
