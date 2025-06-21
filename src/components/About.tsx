
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Target, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose KPB Support Solutions?
              </h2>
              <p className="text-lg text-gray-600">
                With over a decade of experience in providing exceptional support services, 
                we understand what it takes to keep your business running smoothly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Team</h3>
                  <p className="text-gray-600">Certified professionals with extensive industry experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Availability</h3>
                  <p className="text-gray-600">Round-the-clock support when you need it most</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Proactive Monitoring</h3>
                  <p className="text-gray-600">We identify and resolve issues before they impact your business</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8">
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">< 2hr</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
