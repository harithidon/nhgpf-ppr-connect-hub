
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Phone, Mail, User } from "lucide-react";

const NHGPFMembers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedDesignation, setSelectedDesignation] = useState("all");

  const members = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      designation: "President",
      state: "Maharashtra",
      city: "Mumbai",
      specialization: "Police Administration",
      experience: "20 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43210",
      email: "rajesh.kumar@nhgpf.org",
      bio: "Expert in police-public relationship building with extensive experience in community policing."
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      designation: "Vice President",
      state: "Delhi",
      city: "New Delhi",
      specialization: "Women Empowerment",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43211",
      email: "priya.sharma@nhgpf.org",
      bio: "Pioneering advocate for women's rights and safety with focus on community empowerment programs."
    },
    {
      id: 3,
      name: "Dr. Ahmed Khan",
      designation: "Secretary",
      state: "Gujarat",
      city: "Ahmedabad",
      specialization: "Community Development",
      experience: "18 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43212",
      email: "ahmed.khan@nhgpf.org",
      bio: "Community development specialist with expertise in interfaith dialogue and social harmony."
    },
    {
      id: 4,
      name: "Dr. Sunita Patel",
      designation: "Treasurer",
      state: "Rajasthan",
      city: "Jaipur",
      specialization: "Social Welfare",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43213",
      email: "sunita.patel@nhgpf.org",
      bio: "Financial management expert dedicated to transparent and efficient resource utilization."
    },
    {
      id: 5,
      name: "Mr. Vikram Reddy",
      designation: "Joint Secretary",
      state: "Telangana",
      city: "Hyderabad",
      specialization: "Event Management",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43214",
      email: "vikram.reddy@nhgpf.org",
      bio: "Event coordination specialist ensuring successful execution of NHGPF programs and conferences."
    },
    {
      id: 6,
      name: "Ms. Meera Nair",
      designation: "Program Director",
      state: "Kerala",
      city: "Kochi",
      specialization: "Training & Development",
      experience: "14 years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43215",
      email: "meera.nair@nhgpf.org",
      bio: "Training program developer focused on capacity building and skill enhancement initiatives."
    },
    {
      id: 7,
      name: "Dr. Arjun Gupta",
      designation: "Regional Coordinator",
      state: "Punjab",
      city: "Chandigarh",
      specialization: "Youth Development",
      experience: "11 years",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43216",
      email: "arjun.gupta@nhgpf.org",
      bio: "Youth engagement specialist working on programs for drug rehabilitation and career guidance."
    },
    {
      id: 8,
      name: "Mrs. Kavita Singh",
      designation: "Legal Advisor",
      state: "Uttar Pradesh",
      city: "Lucknow",
      specialization: "Legal Affairs",
      experience: "16 years",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43217",
      email: "kavita.singh@nhgpf.org",
      bio: "Legal expert providing guidance on compliance, policy development, and legal aid services."
    }
  ];

  const states = [
    "all", "Maharashtra", "Delhi", "Gujarat", "Rajasthan", "Telangana", 
    "Kerala", "Punjab", "Uttar Pradesh", "Karnataka", "Tamil Nadu"
  ];

  const designations = [
    "all", "President", "Vice President", "Secretary", "Treasurer", 
    "Joint Secretary", "Program Director", "Regional Coordinator", "Legal Advisor"
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "all" || member.state === selectedState;
    const matchesDesignation = selectedDesignation === "all" || member.designation === selectedDesignation;
    return matchesSearch && matchesState && matchesDesignation;
  });

  const getDesignationColor = (designation) => {
    const colors = {
      "President": "bg-red-600",
      "Vice President": "bg-blue-600",
      "Secretary": "bg-green-600",
      "Treasurer": "bg-purple-600",
      "Joint Secretary": "bg-orange-600",
      "Program Director": "bg-indigo-600",
      "Regional Coordinator": "bg-teal-600",
      "Legal Advisor": "bg-gray-600"
    };
    return colors[designation] || "bg-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <User className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NHGPF Members</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
              Meet our dedicated team of leaders and coordinators working towards global peace and community development
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <h3 className="text-3xl font-bold">{members.length}+</h3>
                <p className="text-blue-200">Active Members</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-blue-200">States Covered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-blue-200">Specializations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name, specialization, or city..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state === "all" ? "All States" : state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedDesignation} onValueChange={setSelectedDesignation}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Designation" />
                </SelectTrigger>
                <SelectContent>
                  {designations.map((designation) => (
                    <SelectItem key={designation} value={designation}>
                      {designation === "all" ? "All Designations" : designation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredMembers.length} of {members.length} NHGPF members
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                    />
                    <Badge className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${getDesignationColor(member.designation)}`}>
                      {member.designation}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.specialization}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {member.city}, {member.state}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    Experience: {member.experience}
                  </div>
                  <p className="text-sm text-gray-700">{member.bio}</p>
                  <div className="space-y-2 pt-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {member.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      {member.email}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View Full Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <User className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">No members found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Become part of our mission to create positive change in society. Join NHGPF as a member.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
            Apply for Membership
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NHGPFMembers;
