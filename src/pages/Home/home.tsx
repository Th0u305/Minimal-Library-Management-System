import BlogCard from "./BlogCard";
import BookCategory from "./BookCategory";
import CTASection from "./CTASection";
import DiscoverYourBook from "./DiscoverYourBook";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import ReaderPick from "./ReaderPick";
import Stats from "./Stats";
import Author from "./Author";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Hero />
      <Stats />
      <DiscoverYourBook />
      <BookCategory />
      <BlogCard />
      <ReaderPick />
      <Author />
      <CTASection />
      <NewsLetter />
    </div>
  );
}
