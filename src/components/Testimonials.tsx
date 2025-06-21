
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Solutions",
    role: "IT Director",
    content: "KPB Support Solutions has been instrumental in maintaining our IT infrastructure. Their proactive approach has prevented countless issues.",
    rating: 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Michael Chen",
    company: "Digital Innovations",
    role: "CEO",
    content: "Outstanding service quality and response times. The team is knowledgeable and always goes above and beyond to help.",
    rating: 5,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Emily Rodriguez",
    company: "Global Enterprises",
    role: "Operations Manager",
    content: "Their 24/7 support has been a game-changer for our business. We can focus on growth knowing our systems are in good hands.",
    rating: 5,
    color: "from-green-500 to-emerald-500"
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-purple-200">
            <Heart className="w-4 h-4" />
            <span>Client Love</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients who've experienced excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50 group cursor-pointer">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                  ))}
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 font-medium">{testimonial.role}</div>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}>
                    {testimonial.company}
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200">
                    <ThumbsUp className="w-4 h-4 text-green-600 inline mr-2" />
                    <span className="text-green-700 text-sm font-medium">Verified Review</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
