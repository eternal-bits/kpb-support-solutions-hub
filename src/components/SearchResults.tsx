
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  content: string;
  category: string;
  url?: string;
}

const searchData: SearchItem[] = [
  {
    id: "1",
    title: "Technical Support Services",
    content: "24/7 technical support for all your IT needs including troubleshooting, maintenance, and system optimization.",
    category: "Services"
  },
  {
    id: "2", 
    title: "System Administration",
    content: "Professional server management and network administration to keep your systems running smoothly.",
    category: "Services"
  },
  {
    id: "3",
    title: "Cybersecurity Solutions",
    content: "Protect your business with advanced security monitoring, threat detection, and vulnerability assessments.",
    category: "Services"
  },
  {
    id: "4",
    title: "Response Time Under 2 Hours",
    content: "We guarantee response times under 2 hours for critical issues with 99.9% success rate.",
    category: "About"
  },
  {
    id: "5",
    title: "Contact Information",
    content: "Phone: +1 (555) 123-4567, Email: info@kpbsupport.com, Available 24/7 for emergency support.",
    category: "Contact"
  },
  {
    id: "6",
    title: "Quote Calculator",
    content: "Get custom pricing estimates based on your company size and service requirements.",
    category: "Tools"
  },
  {
    id: "7",
    title: "Free Consultation",
    content: "Book a free 30-minute consultation to discuss your IT needs and challenges.",
    category: "Booking"
  }
];

interface SearchResultsProps {
  query: string;
  onClose: () => void;
}

export const SearchResults = ({ query, onClose }: SearchResultsProps) => {
  const [results, setResults] = useState<SearchItem[]>([]);

  useEffect(() => {
    if (query.length > 2) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  const handleResultClick = (item: SearchItem) => {
    if (item.category === "Services") {
      scrollToSection("services");
    } else if (item.category === "About") {
      scrollToSection("about");
    } else if (item.category === "Contact") {
      scrollToSection("contact");
    } else if (item.category === "Tools" || item.category === "Booking") {
      // These sections would be on the page if they exist
      const section = document.querySelector(`[data-section="${item.category.toLowerCase()}"]`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClose();
  };

  if (query.length <= 2) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
        <Card className="w-full max-w-2xl mx-4">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Search</h3>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-gray-600">
              Type at least 3 characters to start searching...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <Card className="w-full max-w-2xl mx-4">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">
              Search Results for "{query}"
            </h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {results.length > 0 ? (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleResultClick(item)}
                  className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.content}
                      </p>
                      <span className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No results found for "{query}". Try different keywords.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
