
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
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2 text-sm hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <a href="tel:+15551234567" className="hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a href="mailto:info@kpbsupport.com" className="hover:underline">
                  info@kpbsupport.com
                </a>
              </div>
            </div>
            <div className="text-sm">
              🔒 Secure • 🛡️ Certified • ⚡ 24/7 Support
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KPB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-primary">KPB Support</span>
                <span className="text-xs text-gray-600 hidden sm:block">Professional Solutions</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              <button 
                onClick={() => scrollToSection("home")} 
                className="text-gray-700 hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
                aria-label="Go to home section"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-gray-700 hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
                aria-label="Go to services section"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-gray-700 hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
                aria-label="Go to about section"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")} 
                className="text-gray-700 hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
                aria-label="Go to testimonials section"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-gray-700 hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
                aria-label="Go to contact section"
              >
                Contact
              </button>
            </nav>

            {/* Desktop Search and CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <div className="relative">
                  <Input
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 pr-10 focus:w-56 transition-all duration-200"
                    aria-label="Search services"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:text-primary transition-colors"
                    aria-label="Submit search"
                  >
                    <Search className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </form>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 px-6"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t bg-white" role="navigation" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearchSubmit} className="flex items-center mb-4">
                  <div className="relative flex-1">
                    <Input
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-10"
                      aria-label="Search services"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      aria-label="Submit search"
                    >
                      <Search className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </form>

                {/* Mobile Navigation Links */}
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="text-left text-gray-700 hover:text-primary transition-colors py-3 border-b border-gray-100"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-left text-gray-700 hover:text-primary transition-colors py-3 border-b border-gray-100"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-left text-gray-700 hover:text-primary transition-colors py-3 border-b border-gray-100"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("testimonials")} 
                  className="text-left text-gray-700 hover:text-primary transition-colors py-3 border-b border-gray-100"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-left text-gray-700 hover:text-primary transition-colors py-3 border-b border-gray-100"
                >
                  Contact
                </button>

                {/* Mobile CTA */}
                <div className="pt-4">
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Get Free Quote
                  </Button>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+15551234567" className="hover:text-primary">+1 (555) 123-4567</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:info@kpbsupport.com" className="hover:text-primary">info@kpbsupport.com</a>
                  </div>
                </div>
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
