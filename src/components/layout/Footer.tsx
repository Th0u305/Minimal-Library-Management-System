import { BookOpen, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                BOOK LOVERS
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your ultimate destination for discovering amazing books and
              connecting with fellow readers worldwide.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Authors",
                "Blog",
                "Contact",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      {link}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Categories</h4>
            <ul className="space-y-3">
              {[
                "Fiction",
                "Non-Fiction",
                "Mystery",
                "Romance",
                "Science Fiction",
                "Biography",
              ].map((category) => (
                <li key={category}>
                  <Link to="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      {category}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              Featured Books
            </h4>
            <div className="space-y-4">
              {[
                {
                  title: "The Midnight Library",
                  author: "Matt Haig",
                  price: "$12.99",
                },
                {
                  title: "Atomic Habits",
                  author: "James Clear",
                  price: "$14.99",
                },
              ].map((book, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  {/* <Image
                      src="/placeholder.svg?height=60&width=45"
                      alt={book.title}
                      width={45}
                      height={60}
                      className="rounded-lg"
                    /> */}
                  <div>
                    <h5 className="font-semibold text-sm text-white group-hover:text-purple-400 transition-colors">
                      {book.title}
                    </h5>
                    <p className="text-gray-400 text-xs">{book.author}</p>
                    <p className="text-purple-400 font-bold text-sm">
                      {book.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
