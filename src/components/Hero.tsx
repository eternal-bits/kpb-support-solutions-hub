
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users, Phone } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToQuote = () => {
    const element = document.querySelector('[data-section="tools"]');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative pt-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>Trusted by 500+ Businesses</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-primary block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  IT Support Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Get 24/7 expert technical support and cybersecurity solutions that keep your business running smoothly. 
                <strong className="text-gray-900"> 99.9% uptime guaranteed</strong>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
                aria-label="Get started with KPB Support Solutions"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
              <Button 
                onClick={scrollToQuote}
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-all duration-200"
                aria-label="Calculate service quote"
              >
                Calculate Quote
              </Button>
            </div>

            {/* Emergency contact */}
            <div className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-lg border border-red-200">
              <Phone className="w-5 h-5" aria-hidden="true" />
              <div className="text-left">
                <div className="text-sm font-medium">Emergency Support</div>
                <a href="tel:+15551234567" className="text-lg font-bold hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
              <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-primary" aria-hidden="true" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-xs lg:text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-primary" aria-hidden="true" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-xs lg:text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6 text-primary" aria-hidden="true" />
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs lg:text-sm text-gray-600">Clients</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Professional woman working on laptop with KPB Support Solutions technical support"
                className="w-full h-auto rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
                loading="eager"
                width="800"
                height="600"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg animate-bounce">
                <Shield className="w-6 h-6 text-green-500" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg animate-pulse">
                <Clock className="w-6 h-6 text-blue-500" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
