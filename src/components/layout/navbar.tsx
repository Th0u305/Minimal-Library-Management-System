import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { BookOpen, Menu, ShoppingCart, Search } from 'lucide-react'

export const Navbar = () => {
  

  return (
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                BOOK LOVERS
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {[
            {
              title: "Home",
              path: "/",
            },
            {
              title: "All Books",
              path : "/allBooks"
            },
            {
              title : "Add Book",
              path : "/addBook"
            },
            {
              title : "borrowSummary",
              path : "/borrowSummary"
            },
          ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-purple-50">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-purple-50">
                <ShoppingCart  className="w-5 h-5" />
              </Button>
              <Button className="md:hidden" variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
  )
}