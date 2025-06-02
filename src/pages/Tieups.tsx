
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Handshake, Award, MapPin, ExternalLink } from "lucide-react";

const Tieups = () => {
  const partners = [
    {
      id: 1,
      name: "State Police Department Maharashtra",
      type: "Government Agency",
      category: "Law Enforcement",
      description: "Strategic partnership for community policing initiatives and police-public relationship building programs.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
      since: "2020",
      location: "Maharashtra, India",
      projects: ["Community Policing", "Safety Awareness", "Crime Prevention"],
      status: "Active"
    },
    {
      id: 2,
      name: "Ministry of Social Justice & Empowerment",
      type: "Government Ministry",
      category: "Social Welfare",
      description: "Collaboration on women empowerment, disability support, and social welfare programs across multiple states.",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
      since: "2019",
      location: "New Delhi, India",
      projects: ["Women Empowerment", "Disability Support", "Rural Development"],
      status: "Active"
    },
    {
      id: 3,
      name: "Women Development Corporation",
      type: "Government Agency",
      category: "Women Empowerment",
      description: "Joint initiatives for women's safety, skill development, and entrepreneurship programs in rural and urban areas.",
      logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
      since: "2021",
      location: "Multiple States",
      projects: ["Skill Development", "Self-Help Groups", "Safety Programs"],
      status: "Active"
    },
    {
      id: 4,
      name: "National Education Board",
      type: "Educational Institution",
      category: "Education",
      description: "Partnership for educational initiatives, literacy programs, and awareness campaigns in underserved communities.",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop",
      since: "2018",
      location: "Pan India",
      projects: ["Literacy Programs", "Awareness Campaigns", "Skill Training"],
      status: "Active"
    },
    {
      id: 5,
      name: "Global Peace Foundation International",
      type: "International NGO",
      category: "Peace & Harmony",
      description: "International collaboration for peace building, conflict resolution, and humanitarian assistance programs.",
      logo: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=200&h=200&fit=crop",
      since: "2022",
      location: "International",
      projects: ["Peace Building", "Conflict Resolution", "International Aid"],
      status: "Active"
    },
    {
      id: 6,
      name: "Youth Development Fund",
      type: "Development Agency",
      category: "Youth Development",
      description: "Programs focused on youth skill development, career guidance, and preventing drug abuse among teenagers.",
      logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop",
      since: "2020",
      location: "Northern India",
      projects: ["Career Guidance", "Drug Prevention", "Sports Development"],
      status: "Active"
    },
    {
      id: 7,
      name: "Healthcare Mission India",
      type: "Healthcare NGO",
      category: "Healthcare",
      description: "Medical camps, health awareness programs, and healthcare accessibility initiatives in rural areas.",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop",
      since: "2019",
      location: "Rural India",
      projects: ["Medical Camps", "Health Awareness", "Healthcare Access"],
      status: "Active"
    },
    {
      id: 8,
      name: "Environmental Conservation Society",
      type: "Environmental NGO",
      category: "Environment",
      description: "Green initiatives, tree plantation drives, and environmental awareness programs for sustainable development.",
      logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop",
      since: "2021",
      location: "Pan India",
      projects: ["Tree Plantation", "Clean Energy", "Environmental Awareness"],
      status: "Active"
    }
  ];

  const partnershipTypes = [
    { type: "Government Agency", count: 3, color: "bg-blue-600" },
    { type: "NGO", count: 3, color: "bg-green-600" },
    { type: "Educational Institution", count: 1, color: "bg-purple-600" },
    { type: "International Organization", count: 1, color: "bg-orange-600" }
  ];

  const benefits = [
    {
      icon: Handshake,
      title: "Collaborative Impact",
      description: "Joint initiatives create larger impact and reach more beneficiaries effectively."
    },
    {
      icon: Users,
      title: "Resource Sharing",
      description: "Shared resources, expertise, and networks amplify program effectiveness."
    },
    {
      icon: Award,
      title: "Credibility & Trust",
      description: "Partnerships with established organizations enhance credibility and public trust."
    },
    {
      icon: Building,
      title: "Sustainable Growth",
      description: "Long-term partnerships ensure sustainable growth and continuous improvement."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Handshake className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partnerships</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Building stronger communities through strategic partnerships and collaborative initiatives
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <h3 className="text-3xl font-bold">{partners.length}+</h3>
                <p className="text-green-100">Active Partners</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-green-100">States Covered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">25+</h3>
                <p className="text-green-100">Joint Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Categories</h2>
            <p className="text-xl text-gray-600">Diverse partnerships across multiple sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.type}</h3>
                  <p className="text-3xl font-bold text-gray-900">{type.count}</p>
                  <p className="text-gray-600">Partners</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Working together with leading organizations to create meaningful change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <Card key={partner.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-600">
                    {partner.status}
                  </Badge>
                  <Badge className="absolute top-4 left-4" variant="outline">
                    Since {partner.since}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <Badge variant="secondary">{partner.type}</Badge>
                    <Badge variant="outline">{partner.category}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 text-sm">{partner.description}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {partner.location}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Projects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.projects.map((project, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Partnership Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of joining our mission for global peace and community development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Process</h2>
            <p className="text-xl text-gray-600">Simple steps to become our partner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Initial Contact", description: "Reach out to us with your partnership proposal" },
              { step: 2, title: "Assessment", description: "We evaluate mutual goals and compatibility" },
              { step: 3, title: "Agreement", description: "Formalize partnership terms and responsibilities" },
              { step: 4, title: "Implementation", description: "Begin collaborative projects and initiatives" }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Handshake className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our network of partners and make a lasting impact on communities worldwide
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Become a Partner
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Download Partnership Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tieups;
