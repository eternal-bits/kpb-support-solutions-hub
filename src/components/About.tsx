
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Target, Zap, Sparkles, TrendingUp } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-purple-200">
                <Sparkles className="w-4 h-4" />
                <span>About Our Excellence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Why Choose KPB Support Solutions?
              </h2>
              <p className="text-lg text-gray-600">
                With over a decade of experience in providing exceptional support services, 
                we understand what it takes to keep your business running smoothly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Expert Team</h3>
                  <p className="text-gray-600">Certified professionals with extensive industry experience and cutting-edge expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">24/7 Availability</h3>
                  <p className="text-gray-600">Round-the-clock support when you need it most, ensuring zero downtime</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Proactive Monitoring</h3>
                  <p className="text-gray-600">We identify and resolve issues before they impact your business operations</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More About Us
              <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-yellow-50 p-8 rounded-2xl shadow-lg text-center border-2 border-yellow-200 hover:shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer group">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-4 rounded-2xl mx-auto mb-4 w-fit group-hover:animate-bounce">
                <Award className="w-12 h-12 text-white mx-auto" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg text-center border-2 border-green-200 hover:shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-2xl mx-auto mb-4 w-fit group-hover:animate-bounce">
                <Target className="w-12 h-12 text-white mx-auto" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg text-center border-2 border-purple-200 hover:shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl mx-auto mb-4 w-fit group-hover:animate-bounce">
                <Zap className="w-12 h-12 text-white mx-auto" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">&lt; 2hr</div>
              <div className="text-gray-600 font-medium">Response Time</div>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg text-center border-2 border-blue-200 hover:shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl mx-auto mb-4 w-fit group-hover:animate-bounce">
                <CheckCircle className="w-12 h-12 text-white mx-auto" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">99.9%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
