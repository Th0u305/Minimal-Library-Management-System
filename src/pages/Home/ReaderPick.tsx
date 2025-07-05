import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReaderPick = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">
            ❤️ Community Favorites
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
            Picked by Readers
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Books loved and recommended by our amazing reading community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            {
              title: "White Teeth",
              author: "Zadie Smith",
              price: "$13.99",
              rating: 4.3,
              image: "/placeholder.svg?height=300&width=200",
              reviews: "2.1K",
            },
            {
              title: "The Kite Runner",
              author: "Khaled Hosseini",
              price: "$12.99",
              rating: 4.6,
              image: "/placeholder.svg?height=300&width=200",
              reviews: "3.5K",
            },
            {
              title: "Life of Pi",
              author: "Yann Martel",
              price: "$14.99",
              rating: 4.5,
              image: "/placeholder.svg?height=300&width=200",
              reviews: "1.8K",
            },
            {
              title: "The Book Thief",
              author: "Markus Zusak",
              price: "$15.99",
              rating: 4.8,
              image: "/placeholder.svg?height=300&width=200",
              reviews: "4.2K",
            },
            {
              title: "Gone Girl",
              author: "Gillian Flynn",
              price: "$13.99",
              rating: 4.2,
              image: "/placeholder.svg?height=300&width=200",
              reviews: "2.9K",
            },
            {
              title: "The Handmaid's Tale",
              author: "Margaret Atwood",
              price: "$16.99",
              rating: 4.7,
              image: "/placeholder.svg?height=300&width=200",
              reviews: "3.1K",
            },
          ].map((book, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2"
            >
              <CardContent className="p-4">
                <div className="relative mb-4">
                  {/* <Image
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="w-full h-56 object-cover rounded-xl"
                    /> */}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs font-medium text-gray-700">
                      ❤️ {book.reviews}
                    </span>
                  </div>
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
      </div>
    </section>
  );
};

export default ReaderPick;
