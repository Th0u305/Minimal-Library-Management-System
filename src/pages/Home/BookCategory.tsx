import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const BookCategory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            🎯 Find Your Genre
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore different genres and discover books that match your
            interests
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
          {[
            {
              title: "Fiction",
              image: "/placeholder.svg?height=300&width=250",
              color: "from-blue-500 to-cyan-500",
              books: "2.5K+",
            },
            {
              title: "Biography",
              image: "/placeholder.svg?height=300&width=250",
              color: "from-green-500 to-emerald-500",
              books: "1.2K+",
            },
            {
              title: "History",
              image: "/placeholder.svg?height=300&width=250",
              color: "from-orange-500 to-red-500",
              books: "800+",
            },
            {
              title: "Mystery",
              image: "/placeholder.svg?height=300&width=250",
              color: "from-purple-500 to-pink-500",
              books: "1.8K+",
            },
          ].map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 py-0"
            >
              <CardContent className="p-0 relative">
                <div className="relative h-64 overflow-hidden">
                  {/* <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      width={250}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    /> */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}
                  ></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {category.books} books available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCategory;
