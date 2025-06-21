
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What types of businesses do you support?",
        answer: "We support businesses of all sizes, from small startups to large enterprises. Our services are scalable and can be customized to meet the specific needs of any industry."
      },
      {
        question: "Do you offer 24/7 support?",
        answer: "Yes, we provide 24/7 support for critical issues. Our support team is available around the clock to ensure your business operations continue smoothly."
      },
      {
        question: "How quickly can you respond to support requests?",
        answer: "Our standard response time is under 2 hours for urgent issues and within 24 hours for non-critical requests. Priority support customers receive even faster response times."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What operating systems do you support?",
        answer: "We support all major operating systems including Windows, macOS, Linux distributions, and mobile platforms (iOS and Android)."
      },
      {
        question: "Can you help with cloud migration?",
        answer: "Absolutely! We specialize in cloud migration services for AWS, Azure, Google Cloud, and other platforms. We handle everything from planning to execution and ongoing management."
      },
      {
        question: "Do you provide cybersecurity services?",
        answer: "Yes, we offer comprehensive cybersecurity services including threat detection, vulnerability assessments, security audits, and implementation of security protocols."
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "How is your pricing structured?",
        answer: "Our pricing is based on the services you need and the size of your organization. We offer flexible monthly plans and custom enterprise packages. Use our quote calculator for an estimate."
      },
      {
        question: "Do you offer contracts or month-to-month billing?",
        answer: "We offer both options. You can choose flexible month-to-month billing or save with annual contracts. No long-term commitments required."
      },
      {
        question: "Is there a setup fee?",
        answer: "Setup fees vary depending on the complexity of your requirements. Many of our standard services have no setup fee, while custom implementations may include one-time setup costs."
      }
    ]
  }
];

export const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (key: string) => {
    setOpenItems(prev => 
      prev.includes(key) 
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and support
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredFAQ.map((category) => (
              <div key={category.category}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const key = `${category.category}-${index}`;
                    const isOpen = openItems.includes(key);
                    
                    return (
                      <Card key={key} className="overflow-hidden">
                        <Button
                          variant="ghost"
                          onClick={() => toggleItem(key)}
                          className="w-full p-6 text-left hover:bg-gray-50 justify-between h-auto"
                        >
                          <span className="font-medium text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </Button>
                        {isOpen && (
                          <CardContent className="pt-0 pb-6 px-6">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {filteredFAQ.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No FAQ items found matching "{searchTerm}". Try a different search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
