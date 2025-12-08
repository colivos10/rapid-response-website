import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organizationType: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.organizationType || !formData.name || !formData.email) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in organization type, name, and email.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", formData);
      
      setIsSubmitted(true);
      toast({
        title: "Demo Request Sent",
        description: "We'll be in touch within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 lg:py-24" data-testid="section-contact">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Card className="p-12">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Your demo request has been received. Our team will contact you within 24 hours 
              to schedule a personalized demonstration.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
              data-testid="button-submit-another"
            >
              Submit Another Request
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-24" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Request a Demo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Rapid Response can transform emergency services in your region. 
            Our team will walk you through a personalized demonstration.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <Card className="lg:col-span-3 p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="organizationType">Organization Type</Label>
                <Select
                  value={formData.organizationType}
                  onValueChange={(value) => handleChange("organizationType", value)}
                >
                  <SelectTrigger 
                    id="organizationType" 
                    className="mt-2"
                    data-testid="select-organization-type"
                  >
                    <SelectValue placeholder="Select your organization type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government Agency</SelectItem>
                    <SelectItem value="private-ambulance">Private Ambulance Service</SelectItem>
                    <SelectItem value="police">Police / Emergency Services</SelectItem>
                    <SelectItem value="city-council">City Council / Municipality</SelectItem>
                    <SelectItem value="health-center">Private Health Center</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="mt-2"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@organization.com"
                    className="mt-2"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  className="mt-2"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  data-testid="input-phone"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your organization and what you're hoping to achieve..."
                  className="mt-2 min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  data-testid="textarea-message"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit-demo"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Request Demo
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>30-minute personalized demo tailored to your organization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Discussion of your specific coverage challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Review of implementation process and timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>No commitment required</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:contact@rapidresponse.cl" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover-elevate active-elevate-2 p-2 rounded-md -mx-2"
                  data-testid="link-email"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@rapidresponse.cl</span>
                </a>
                <a 
                  href="tel:+56212345678" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover-elevate active-elevate-2 p-2 rounded-md -mx-2"
                  data-testid="link-phone"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+56 2 1234 5678</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground p-2 -mx-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Santiago, Chile</span>
                </div>
              </div>
            </Card>

            <p className="text-xs text-muted-foreground text-center">
              Response within 24 business hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
