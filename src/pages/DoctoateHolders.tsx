
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Calendar, Award, Download } from "lucide-react";

const DoctoateHolders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const doctorates = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar Singh",
      state: "Maharashtra",
      city: "Mumbai",
      year: "2024",
      field: "Social Work",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      achievement: "Outstanding contribution to police-public relationship building",
      certificateNo: "NHGPF/2024/001"
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      state: "Delhi",
      city: "New Delhi",
      year: "2024",
      field: "Women Empowerment",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=300&h=300&fit=crop&crop=face",
      achievement: "Pioneering work in women's safety and empowerment programs",
      certificateNo: "NHGPF/2024/002"
    },
    {
      id: 3,
      name: "Dr. Ahmed Hassan",
      state: "Gujarat",
      city: "Ahmedabad",
      year: "2024",
      field: "Community Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      achievement: "Excellence in community policing and crime prevention",
      certificateNo: "NHGPF/2024/003"
    },
    {
      id: 4,
      name: "Dr. Sunita Patel",
      state: "Rajasthan",
      city: "Jaipur",
      year: "2023",
      field: "Education",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      achievement: "Transformative work in rural education and awareness",
      certificateNo: "NHGPF/2023/015"
    },
    {
      id: 5,
      name: "Dr. Vikram Reddy",
      state: "Telangana",
      city: "Hyderabad",
      year: "2023",
      field: "Healthcare",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
      achievement: "Medical camp organization and healthcare accessibility",
      certificateNo: "NHGPF/2023/016"
    },
    {
      id: 6,
      name: "Dr. Meera Nair",
      state: "Kerala",
      city: "Kochi",
      year: "2023",
      field: "Environmental Conservation",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      achievement: "Green initiatives and environmental awareness campaigns",
      certificateNo: "NHGPF/2023/017"
    },
    {
      id: 7,
      name: "Dr. Arjun Gupta",
      state: "Punjab",
      city: "Chandigarh",
      year: "2022",
      field: "Youth Development",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face",
      achievement: "Drug rehabilitation and youth counseling programs",
      certificateNo: "NHGPF/2022/025"
    },
    {
      id: 8,
      name: "Dr. Kavita Singh",
      state: "Uttar Pradesh",
      city: "Lucknow",
      year: "2022",
      field: "Legal Aid",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
      achievement: "Free legal aid services for underprivileged communities",
      certificateNo: "NHGPF/2022/026"
    }
  ];

  const states = [
    "all", "Maharashtra", "Delhi", "Gujarat", "Rajasthan", "Telangana", 
    "Kerala", "Punjab", "Uttar Pradesh", "Karnataka", "Tamil Nadu"
  ];

  const years = ["all", "2024", "2023", "2022", "2021", "2020"];

  const filteredDoctorates = doctorates.filter(doctorate => {
    const matchesSearch = doctorate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctorate.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctorate.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "all" || doctorate.state === selectedState;
    const matchesYear = selectedYear === "all" || doctorate.year === selectedYear;
    return matchesSearch && matchesState && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Doctorate Holders</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
              Honoring exceptional individuals who have made significant contributions to society and humanity
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <h3 className="text-3xl font-bold">{doctorates.length}+</h3>
                <p className="text-blue-200">Doctorates Awarded</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-blue-200">States Covered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">8+</h3>
                <p className="text-blue-200">Fields of Excellence</p>
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
                placeholder="Search by name, field, or city..."
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
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year === "all" ? "All Years" : year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctorate Holders Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredDoctorates.length} of {doctorates.length} doctorate holders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctorates.map((doctorate) => (
              <Card key={doctorate.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={doctorate.image}
                      alt={doctorate.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                    />
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-600">
                      <Award className="h-3 w-3 mr-1" />
                      {doctorate.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{doctorate.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{doctorate.field}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {doctorate.city}, {doctorate.state}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Awarded in {doctorate.year}
                  </div>
                  <p className="text-sm text-gray-700">{doctorate.achievement}</p>
                  <div className="pt-3 space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      View Certificate
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Certificate No: {doctorate.certificateNo}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredDoctorates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No doctorate holders found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Apply for Doctorate</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Have you made significant contributions to society? Apply for our honorary doctorate program.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DoctoateHolders;
