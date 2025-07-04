import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* <div className="absolute inset-0 bg-black/20"></div> */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6">
          Stay Updated with Literary Magic
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get exclusive book recommendations, author interviews, and special
          offers delivered to your inbox
        </p>
        <div className="max-w-md mx-auto ">
          <div className="flex bg-white/20 backdrop-blur-md rounded-full gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent text-gray-700 border-2 border-slate-300 flex-1"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-6 font-semibold border-2 border-gray-300 hover:scale-105 active:scale-100 transition-transform duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
