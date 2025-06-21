
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

const consultationTypes = [
  { value: "assessment", label: "IT Assessment (Free)", duration: "30 min" },
  { value: "consultation", label: "Technical Consultation", duration: "60 min" },
  { value: "planning", label: "Project Planning Session", duration: "90 min" },
  { value: "emergency", label: "Emergency Support", duration: "ASAP" }
];

export const BookingSystem = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    consultationType: "",
    date: "",
    time: "",
    message: "",
  });
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsBooked(true);
      setIsLoading(false);
      toast({
        title: "Consultation Booked!",
        description: "We'll send you a confirmation email shortly.",
      });
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isBooked) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-green-200">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Consultation Booked Successfully!
              </h3>
              <div className="space-y-2 text-gray-600 mb-6">
                <p><strong>Date:</strong> {formData.date}</p>
                <p><strong>Time:</strong> {formData.time}</p>
                <p><strong>Type:</strong> {consultationTypes.find(t => t.value === formData.consultationType)?.label}</p>
              </div>
              <p className="text-gray-600 mb-6">
                We've sent a confirmation email to {formData.email} with all the details 
                including the meeting link for your virtual consultation.
              </p>
              <Button 
                onClick={() => {
                  setIsBooked(false);
                  setFormData({
                    name: "", email: "", phone: "", company: "",
                    consultationType: "", date: "", time: "", message: ""
                  });
                }}
                variant="outline"
              >
                Book Another Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book a Free Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized consultation with our experts to discuss your specific needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span>Schedule Your Consultation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <Label>Consultation Type *</Label>
                  <Select value={formData.consultationType} onValueChange={(value) => handleChange("consultationType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      {consultationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex justify-between items-center w-full">
                            <span>{type.label}</span>
                            <span className="text-sm text-gray-500 ml-4">{type.duration}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label>Preferred Time *</Label>
                    <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {time}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Tell us about your needs</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    placeholder="Describe your current challenges or what you'd like to discuss..."
                  />
                </div>

                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    disabled={isLoading || !formData.name || !formData.email || !formData.consultationType || !formData.date || !formData.time}
                    size="lg"
                    className="px-8"
                  >
                    {isLoading ? "Booking..." : "Book Consultation"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
