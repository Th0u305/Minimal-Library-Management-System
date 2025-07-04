import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BlogCard = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
            📖 Reading Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The ReadDown
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert recommendations and reading guides to enhance your literary
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "15 Books You Should Read This Summer",
              description:
                "Discover the perfect summer reading list with page-turners and thought-provoking stories",
              color: "from-yellow-400 to-orange-500",
              icon: "☀️",
            },
            {
              title: "10 Books That Will Change Your Life",
              description:
                "Transform your perspective with these powerful and inspiring reads",
              color: "from-green-500 to-teal-600",
              icon: "🌱",
            },
            {
              title: "25 Books Every Woman Should Read",
              description:
                "Essential reading featuring strong female voices and empowering stories",
              color: "from-pink-500 to-rose-600",
              icon: "👑",
            },
          ].map((article, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div
                  className={`h-48 bg-gradient-to-br ${article.color} flex items-center justify-center text-6xl`}
                >
                  {article.icon}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-purple-200 text-purple-600 hover:bg-purple-50 rounded-full bg-transparent"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
