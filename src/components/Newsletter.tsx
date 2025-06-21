
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive our latest updates and tech insights.",
      });
      setEmail("");
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to Our Newsletter!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for subscribing. You'll receive valuable tech insights, 
                industry updates, and exclusive content from our experts.
              </p>
              <Button 
                variant="outline"
                onClick={() => setIsSubscribed(false)}
              >
                Subscribe Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Tech Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest technology trends, best practices, and exclusive content 
            delivered straight to your inbox. Join over 5,000 professionals.
          </p>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="px-8"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </form>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t">
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Weekly Insights</div>
                  <div className="text-sm text-gray-600">Industry trends & analysis</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Best Practices</div>
                  <div className="text-sm text-gray-600">Expert tips & guides</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Exclusive Content</div>
                  <div className="text-sm text-gray-600">Subscriber-only resources</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
