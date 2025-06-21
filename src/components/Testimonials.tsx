
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Solutions",
    role: "IT Director",
    content: "KPB Support Solutions has been instrumental in maintaining our IT infrastructure. Their proactive approach has prevented countless issues.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Digital Innovations",
    role: "CEO",
    content: "Outstanding service quality and response times. The team is knowledgeable and always goes above and beyond to help.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Global Enterprises",
    role: "Operations Manager",
    content: "Their 24/7 support has been a game-changer for our business. We can focus on growth knowing our systems are in good hands.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
