
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Phone, Mail, Search } from "lucide-react";
import { SearchResults } from "./SearchResults";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(true);
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KPB</span>
              </div>
              <span className="font-bold text-xl text-primary">Support Solutions</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="text-gray-700 hover:text-primary transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </button>
            </nav>

            {/* Search and Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <div className="relative">
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-40 pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <Search className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </form>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@kpbsupport.com</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearchSubmit} className="flex items-center mb-4">
                  <div className="relative flex-1">
                    <Input
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-10"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <Search className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </form>
                <button onClick={() => scrollToSection("home")} className="text-left text-gray-700 hover:text-primary transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection("services")} className="text-left text-gray-700 hover:text-primary transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection("about")} className="text-left text-gray-700 hover:text-primary transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection("testimonials")} className="text-left text-gray-700 hover:text-primary transition-colors">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection("contact")} className="text-left text-gray-700 hover:text-primary transition-colors">
                  Contact
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Search Results Modal */}
      {isSearchOpen && (
        <SearchResults 
          query={searchQuery} 
          onClose={() => {
            setIsSearchOpen(false);
            setSearchQuery("");
          }} 
        />
      )}
    </>
  );
};
