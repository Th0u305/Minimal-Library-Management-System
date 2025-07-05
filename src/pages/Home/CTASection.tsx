import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-pink-900/90">
      {/* <div className="absolute inset-0 bg-gray/50"></div> */}
      {/* <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Reading background"
          fill
          className="object-cover opacity-30"
        /> */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
          🌟 Join the Community
        </Badge>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Join Our Reading
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
            Community
          </span>
        </h2>
        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Connect with fellow book lovers, share reviews, discover hidden gems,
          and be part of a community that celebrates the magic of reading.
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Facebook, color: "hover:text-blue-400" },
            { icon: Twitter, color: "hover:text-blue-400" },
            { icon: Instagram, color: "hover:text-pink-400" },
            { icon: Youtube, color: "hover:text-red-400" },
          ].map((social, index) => (
            <div
              key={index}
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 group"
            >
              <social.icon
                className={`w-6 h-6 text-white ${social.color} transition-colors duration-300`}
              />
            </div>
          ))}
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg rounded-full shadow-lg hover:scale-105 active:scale-100 transition-transform duration-300">
          Join Community
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
