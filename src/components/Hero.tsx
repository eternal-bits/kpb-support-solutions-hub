
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users, Phone, Sparkles } from "lucide-react";

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
      className="relative pt-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 min-h-screen flex items-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Enhanced trust badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 rounded-full text-sm font-medium border-2 border-green-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <Shield className="w-5 h-5 animate-pulse" aria-hidden="true" />
              <span className="font-semibold">✨ Trusted by 500+ Businesses</span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-primary block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
                  IT Support Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Get 24/7 expert technical support and cybersecurity solutions that keep your business running smoothly. 
                <strong className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"> 99.9% uptime guaranteed</strong>.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-0"
                aria-label="Get started with KPB Support Solutions"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 animate-bounce" aria-hidden="true" />
              </Button>
              <Button 
                onClick={scrollToQuote}
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-purple-300 text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                aria-label="Calculate service quote"
              >
                Calculate Quote
              </Button>
            </div>

            {/* Enhanced emergency contact */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 px-6 py-4 rounded-xl border-2 border-red-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <Phone className="w-6 h-6 animate-pulse" aria-hidden="true" />
              <div className="text-left">
                <div className="text-sm font-medium">🚨 Emergency Support</div>
                <a href="tel:+15551234567" className="text-lg font-bold hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8">
              <div className="text-center bg-gradient-to-br from-white to-purple-50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-white" aria-hidden="true" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">99.9%</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Uptime</div>
              </div>
              <div className="text-center bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <Clock className="w-6 h-6 lg:w-7 lg:h-7 text-white" aria-hidden="true" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Support</div>
              </div>
              <div className="text-center bg-gradient-to-br from-white to-green-50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                  <Users className="w-6 h-6 lg:w-7 lg:h-7 text-white" aria-hidden="true" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">500+</div>
                <div className="text-sm lg:text-base text-gray-600 font-medium">Clients</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Professional woman working on laptop with KPB Support Solutions technical support"
                className="w-full h-auto rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 group-hover:scale-105 border-4 border-gradient-to-r from-purple-200 to-blue-200"
                loading="eager"
                width="800"
                height="600"
              />
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl shadow-xl animate-bounce border-2 border-white">
                <Shield className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-400 to-purple-500 p-4 rounded-2xl shadow-xl animate-pulse border-2 border-white">
                <Clock className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div className="absolute top-1/2 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl shadow-lg animate-spin border-2 border-white">
                <Sparkles className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
