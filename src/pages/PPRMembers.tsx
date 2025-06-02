
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Shield, Users, Phone, Star } from "lucide-react";

const PPRMembers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const pprMembers = [
    {
      id: 1,
      name: "Inspector Ravi Kumar",
      type: "Police Officer",
      rank: "Inspector",
      department: "Mumbai Police",
      state: "Maharashtra",
      city: "Mumbai",
      zone: "Zone-1 (South Mumbai)",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43210",
      specialization: "Community Policing",
      achievements: "Reduced crime rate by 30% in assigned area"
    },
    {
      id: 2,
      name: "Mrs. Anjali Verma",
      type: "Public Representative",
      rank: "Community Leader",
      department: "RWA President",
      state: "Delhi",
      city: "New Delhi",
      zone: "Central Delhi",
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43211",
      specialization: "Women Safety",
      achievements: "Organized 50+ safety awareness programs"
    },
    {
      id: 3,
      name: "Sub-Inspector Vikram Singh",
      type: "Police Officer",
      rank: "Sub-Inspector",
      department: "Gujarat Police",
      state: "Gujarat",
      city: "Ahmedabad",
      zone: "West Zone",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43212",
      specialization: "Traffic Management",
      achievements: "Implemented innovative traffic solutions"
    },
    {
      id: 4,
      name: "Dr. Sunita Patel",
      type: "Public Representative",
      rank: "Social Worker",
      department: "NGO Coordinator",
      state: "Rajasthan",
      city: "Jaipur",
      zone: "Pink City Area",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43213",
      specialization: "Child Protection",
      achievements: "Rescued and rehabilitated 200+ children"
    },
    {
      id: 5,
      name: "Constable Ramesh Kumar",
      type: "Police Officer",
      rank: "Constable",
      department: "Telangana Police",
      state: "Telangana",
      city: "Hyderabad",
      zone: "Cyberabad",
      experience: "6 years",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43214",
      specialization: "Cyber Crime",
      achievements: "Solved 100+ cyber crime cases"
    },
    {
      id: 6,
      name: "Ms. Meera Nair",
      type: "Public Representative",
      rank: "Volunteer Coordinator",
      department: "Youth Organization",
      state: "Kerala",
      city: "Kochi",
      zone: "Marine Drive Area",
      experience: "7 years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43215",
      specialization: "Youth Engagement",
      achievements: "Trained 500+ youth volunteers"
    },
    {
      id: 7,
      name: "Head Constable Arjun Singh",
      type: "Police Officer",
      rank: "Head Constable",
      department: "Punjab Police",
      state: "Punjab",
      city: "Chandigarh",
      zone: "Sector 17-22",
      experience: "18 years",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43216",
      specialization: "Drug Prevention",
      achievements: "Led successful anti-drug campaigns"
    },
    {
      id: 8,
      name: "Mrs. Kavita Sharma",
      type: "Public Representative",
      rank: "Legal Aid Volunteer",
      department: "Legal Aid Society",
      state: "Uttar Pradesh",
      city: "Lucknow",
      zone: "Hazratganj Area",
      experience: "9 years",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
      phone: "+91 98765 43217",
      specialization: "Legal Assistance",
      achievements: "Provided free legal aid to 1000+ cases"
    }
  ];

  const states = [
    "all", "Maharashtra", "Delhi", "Gujarat", "Rajasthan", "Telangana", 
    "Kerala", "Punjab", "Uttar Pradesh", "Karnataka", "Tamil Nadu"
  ];

  const types = ["all", "Police Officer", "Public Representative"];

  const filteredMembers = pprMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "all" || member.state === selectedState;
    const matchesType = selectedType === "all" || member.type === selectedType;
    return matchesSearch && matchesState && matchesType;
  });

  const getTypeColor = (type) => {
    return type === "Police Officer" ? "bg-blue-600" : "bg-green-600";
  };

  const getTypeIcon = (type) => {
    return type === "Police Officer" ? Shield : Users;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <Shield className="h-12 w-12" />
              <Users className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">PPR Members</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
              Police-Public Relationship members working together to build stronger, safer communities
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <h3 className="text-3xl font-bold">{pprMembers.filter(m => m.type === "Police Officer").length}</h3>
                <p className="text-blue-200">Police Officers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">{pprMembers.filter(m => m.type === "Public Representative").length}</h3>
                <p className="text-blue-200">Public Representatives</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-blue-200">Active Zones</p>
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
                placeholder="Search by name, department, specialization..."
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
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{pprMembers.filter(m => m.type === "Police Officer").length}</p>
              <p className="text-sm text-gray-600">Police Officers</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{pprMembers.filter(m => m.type === "Public Representative").length}</p>
              <p className="text-sm text-gray-600">Public Representatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredMembers.length} of {pprMembers.length} PPR members
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => {
              const IconComponent = getTypeIcon(member.type);
              return (
                <Card key={member.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="relative mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                      />
                      <Badge className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${getTypeColor(member.type)}`}>
                        <IconComponent className="h-3 w-3 mr-1" />
                        {member.type === "Police Officer" ? "Police" : "Public"}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-indigo-600 font-medium">{member.rank}</p>
                    <Badge variant="outline">{member.specialization}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {member.city}, {member.state}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield className="h-4 w-4 mr-2" />
                      {member.department}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Zone:</strong> {member.zone}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Experience:</strong> {member.experience}
                    </div>
                    <div className="flex items-start text-sm text-gray-600">
                      <Star className="h-4 w-4 mr-2 mt-1 text-yellow-500" />
                      <span>{member.achievements}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 pt-2">
                      <Phone className="h-4 w-4 mr-2" />
                      {member.phone}
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Contact Member
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <div className="flex justify-center space-x-2 mb-4">
                <Shield className="h-16 w-16 text-gray-400" />
                <Users className="h-16 w-16 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">No PPR members found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Shield className="h-8 w-8" />
            <Users className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Join Police-Public Partnership</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Bridge the gap between police and public. Become part of our PPR initiative for safer communities.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Join as Police Officer
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Join as Public Representative
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PPRMembers;
