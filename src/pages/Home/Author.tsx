import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Author = () => {
    return (
          <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-yellow-200">🏆 Top Authors</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">Most Popular Authors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the literary masters who have captured millions of hearts worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Jane Austen",
                specialty: "Classic Literature",
                image: "/placeholder.svg?height=300&width=300",
                books: "12 books",
                followers: "2.1M",
              },
              {
                name: "Stephen King",
                specialty: "Horror Fiction",
                image: "/placeholder.svg?height=300&width=300",
                books: "65 books",
                followers: "3.5M",
              },
              {
                name: "Agatha Christie",
                specialty: "Mystery",
                image: "/placeholder.svg?height=300&width=300",
                books: "85 books",
                followers: "1.8M",
              },
              {
                name: "J.K. Rowling",
                specialty: "Fantasy",
                image: "/placeholder.svg?height=300&width=300",
                books: "15 books",
                followers: "4.2M",
              },
            ].map((author, index) => (
              <Card
                key={index}
                className="text-center group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    {/* <Image
                      src={author.image || "/placeholder.svg"}
                      alt={author.name}
                      width={300}
                      height={300}
                      className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-purple-100 group-hover:ring-purple-300 transition-all duration-300"
                    /> */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {author.followers}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{author.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{author.specialty}</p>
                  <p className="text-purple-600 text-sm font-medium mb-4">{author.books}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-200 text-purple-600 hover:bg-purple-50 rounded-full bg-transparent"
                  >
                    Follow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    );
};

export default Author;