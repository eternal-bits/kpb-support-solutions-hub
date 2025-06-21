
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  { id: "technical", name: "Technical Support", basePrice: 99 },
  { id: "system", name: "System Administration", basePrice: 199 },
  { id: "security", name: "Cybersecurity", basePrice: 299 },
  { id: "helpdesk", name: "Help Desk Services", basePrice: 149 },
  { id: "software", name: "Software Solutions", basePrice: 399 },
  { id: "cloud", name: "Cloud Services", basePrice: 249 },
];

const addOns = [
  { id: "priority", name: "Priority Support", price: 50 },
  { id: "training", name: "Staff Training", price: 75 },
  { id: "backup", name: "Advanced Backup", price: 30 },
  { id: "monitoring", name: "24/7 Monitoring", price: 100 },
];

export const QuoteCalculator = () => {
  const [companySize, setCompanySize] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", company: "" });
  const [quote, setQuote] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateQuote = () => {
    let total = 0;
    
    // Base service costs
    selectedServices.forEach(serviceId => {
      const service = serviceOptions.find(s => s.id === serviceId);
      if (service) total += service.basePrice;
    });

    // Add-on costs
    selectedAddOns.forEach(addOnId => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (addOn) total += addOn.price;
    });

    // Company size multiplier
    const sizeMultiplier = {
      "small": 1,
      "medium": 1.5,
      "large": 2,
      "enterprise": 3
    }[companySize] || 1;

    total *= sizeMultiplier;
    setQuote(Math.round(total));

    toast({
      title: "Quote Calculated!",
      description: `Your estimated monthly cost is $${Math.round(total)}`,
    });
  };

  const downloadQuote = () => {
    if (!quote) return;
    
    const quoteData = {
      company: contactInfo.company || "N/A",
      contact: contactInfo.name,
      email: contactInfo.email,
      services: selectedServices.map(id => serviceOptions.find(s => s.id === id)?.name).filter(Boolean),
      addOns: selectedAddOns.map(id => addOns.find(a => a.id === id)?.name).filter(Boolean),
      companySize,
      monthlyEstimate: quote,
      generatedOn: new Date().toLocaleDateString()
    };

    const blob = new Blob([JSON.stringify(quoteData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kpb-quote-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Quote Downloaded!",
      description: "Your quote has been saved to your downloads folder.",
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate an estimate for your support needs in just a few clicks
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-6 h-6 text-primary" />
                <span>Quote Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={contactInfo.company}
                    onChange={(e) => setContactInfo({...contactInfo, company: e.target.value})}
                    placeholder="Company name"
                  />
                </div>
              </div>

              {/* Company Size */}
              <div>
                <Label>Company Size</Label>
                <Select value={companySize} onValueChange={setCompanySize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (1-10 employees)</SelectItem>
                    <SelectItem value="medium">Medium (11-50 employees)</SelectItem>
                    <SelectItem value="large">Large (51-200 employees)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (200+ employees)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Services */}
              <div>
                <Label className="text-base font-semibold">Select Services</Label>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  {serviceOptions.map((service) => (
                    <div key={service.id} className="flex items-center space-x-2 p-3 border rounded-lg">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedServices([...selectedServices, service.id]);
                          } else {
                            setSelectedServices(selectedServices.filter(id => id !== service.id));
                          }
                        }}
                      />
                      <div className="flex-1">
                        <Label htmlFor={service.id} className="font-medium">{service.name}</Label>
                        <div className="text-sm text-gray-600">${service.basePrice}/month</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <Label className="text-base font-semibold">Add-ons (Optional)</Label>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  {addOns.map((addOn) => (
                    <div key={addOn.id} className="flex items-center space-x-2 p-3 border rounded-lg">
                      <Checkbox
                        id={addOn.id}
                        checked={selectedAddOns.includes(addOn.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedAddOns([...selectedAddOns, addOn.id]);
                          } else {
                            setSelectedAddOns(selectedAddOns.filter(id => id !== addOn.id));
                          }
                        }}
                      />
                      <div className="flex-1">
                        <Label htmlFor={addOn.id} className="font-medium">{addOn.name}</Label>
                        <div className="text-sm text-gray-600">+${addOn.price}/month</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <div className="flex flex-col items-center space-y-4">
                <Button 
                  onClick={calculateQuote}
                  disabled={!contactInfo.name || !contactInfo.email || selectedServices.length === 0 || !companySize}
                  size="lg"
                  className="px-8"
                >
                  Calculate Quote
                </Button>

                {quote && (
                  <div className="text-center space-y-4 p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                    <div className="text-2xl font-bold text-primary">
                      Estimated Monthly Cost: ${quote}
                    </div>
                    <p className="text-gray-600">
                      This is an estimate. Final pricing may vary based on specific requirements.
                    </p>
                    <Button 
                      onClick={downloadQuote}
                      variant="outline"
                      className="mt-4"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Quote
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
