import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const DiscoverYourBook = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
            📚 Curated Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
            Discover Your Next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Great Read
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Handpicked books from bestselling authors and rising stars
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            {
              title: "The Midnight Library",
              author: "Matt Haig",
              price: "$12.99",
              rating: 4.5,
              image: "/placeholder.svg?height=300&width=200",
              badge: "Bestseller",
            },
            {
              title: "Atomic Habits",
              author: "James Clear",
              price: "$14.99",
              rating: 4.8,
              image: "/placeholder.svg?height=300&width=200",
              badge: "Popular",
            },
            {
              title: "The Seven Husbands",
              author: "Taylor Jenkins",
              price: "$13.99",
              rating: 4.6,
              image: "/placeholder.svg?height=300&width=200",
              badge: "New",
            },
            {
              title: "Where the Crawdads",
              author: "Delia Owens",
              price: "$15.99",
              rating: 4.7,
              image: "/placeholder.svg?height=300&width=200",
              badge: "Award Winner",
            },
            {
              title: "The Silent Patient",
              author: "Alex Michaelides",
              price: "$11.99",
              rating: 4.4,
              image: "/placeholder.svg?height=300&width=200",
              badge: "Thriller",
            },
            {
              title: "Educated",
              author: "Tara Westover",
              price: "$16.99",
              rating: 4.9,
              image: "/placeholder.svg?height=300&width=200",
              badge: "Memoir",
            },
          ].map((book, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <Badge className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 text-xs">
                    {book.badge}
                  </Badge>
                </div>
                <h3 className="font-bold text-sm mb-2 line-clamp-2 text-gray-700">
                  {book.title}
                </h3>
                <p className="text-slate-600 text-xs mb-3">{book.author}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(book.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-600 ml-2 font-medium">
                    ({book.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-purple-600 text-lg">
                    {book.price}
                  </p>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-4"
                  >
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 active:scale-100 transition-transform duration-300">
            Explore All Books
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverYourBook;
