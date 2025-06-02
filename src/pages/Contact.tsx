
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Building, Globe } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["NHGPF Head Office", "123 Peace Avenue", "New Delhi - 110001", "India"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 11 2345 6789", "+91 98765 43210", "Toll Free: 1800-123-4567"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@nhgpf.org", "contact@nhgpf.org", "support@nhgpf.org"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "text-orange-600"
    }
  ];

  const departments = [
    { value: "general", label: "General Inquiry" },
    { value: "doctorate", label: "Doctorate Applications" },
    { value: "awards", label: "Award Nominations" },
    { value: "membership", label: "Membership" },
    { value: "partnerships", label: "Partnerships" },
    { value: "media", label: "Media & Press" },
    { value: "support", label: "Technical Support" }
  ];

  const regionalOffices = [
    {
      region: "North India",
      address: "Sector 17, Chandigarh - 160017",
      phone: "+91 172 123 4567",
      email: "north@nhgpf.org",
      states: ["Punjab", "Haryana", "Himachal Pradesh", "Jammu & Kashmir"]
    },
    {
      region: "West India",
      address: "Bandra West, Mumbai - 400050",
      phone: "+91 22 123 4567",
      email: "west@nhgpf.org",
      states: ["Maharashtra", "Gujarat", "Rajasthan", "Goa"]
    },
    {
      region: "South India",
      address: "T. Nagar, Chennai - 600017",
      phone: "+91 44 123 4567",
      email: "south@nhgpf.org",
      states: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"]
    },
    {
      region: "East India",
      address: "Salt Lake, Kolkata - 700091",
      phone: "+91 33 123 4567",
      email: "east@nhgpf.org",
      states: ["West Bengal", "Odisha", "Jharkhand", "Bihar"]
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <MessageSquare className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Get in touch with us for any inquiries, support, or collaboration opportunities
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5" />
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry category" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              {dept.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Enter the subject of your inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Enter your message or inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`${info.color} mt-1`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">Facebook</Button>
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">LinkedIn</Button>
                  <Button variant="outline" size="sm">YouTube</Button>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Stay updated with our latest news and activities
                </p>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Apply for Doctorate
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Nominate for Award
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Join as Member
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Partnership Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regional Offices */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Offices</h2>
            <p className="text-xl text-gray-600">Find our regional offices across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalOffices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    <span>{office.region}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-600 mt-1" />
                    <p className="text-sm text-gray-700">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-600" />
                    <p className="text-sm text-gray-700">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-600" />
                    <p className="text-sm text-gray-700">{office.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Coverage:</p>
                    <p className="text-xs text-gray-600">{office.states.join(", ")}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Find Us on Map</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive map will be integrated here</p>
                  <p className="text-sm text-gray-500">
                    NHGPF Head Office: 123 Peace Avenue, New Delhi - 110001
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How can I apply for a doctorate?",
                answer: "Visit our Apply for Doctorate page and complete the multi-step application form with all required documents."
              },
              {
                question: "What is the typical response time?",
                answer: "We respond to all inquiries within 24-48 hours during business days."
              },
              {
                question: "Can I nominate someone for an award?",
                answer: "Yes, you can nominate deserving individuals through our Award Nomination form."
              },
              {
                question: "How do I become a member?",
                answer: "Contact our membership team or visit the membership section for detailed information."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
