
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Trophy, Star, Heart, Shield, Briefcase } from "lucide-react";

const Awardees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const awardees = [
    {
      id: 1,
      name: "Inspector Ravi Kumar",
      category: "Police Excellence",
      award: "Outstanding Police Service Award",
      year: "2024",
      description: "Exceptional service in community policing and crime prevention",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      location: "Mumbai Police, Maharashtra",
      icon: Shield
    },
    {
      id: 2,
      name: "Ms. Anjali Verma",
      category: "Social Work",
      award: "Humanity Service Excellence Award",
      year: "2024",
      description: "Pioneering work in women's safety and empowerment programs",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=300&h=300&fit=crop&crop=face",
      location: "Delhi NGO Coalition",
      icon: Heart
    },
    {
      id: 3,
      name: "Dr. Mohammed Ali",
      category: "Healthcare",
      award: "Medical Service Recognition",
      year: "2024",
      description: "Free medical camps and healthcare accessibility initiatives",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      location: "Gujarat Medical Association",
      icon: Heart
    },
    {
      id: 4,
      name: "Mrs. Lakshmi Iyer",
      category: "Education",
      award: "Educational Excellence Award",
      year: "2023",
      description: "Transformative work in rural education and literacy programs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      location: "Karnataka Education Board",
      icon: Star
    },
    {
      id: 5,
      name: "Constable Vikram Singh",
      category: "Police Excellence",
      award: "Bravery and Valor Award",
      year: "2023",
      description: "Heroic actions during emergency response and public safety",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
      location: "Punjab Police",
      icon: Shield
    },
    {
      id: 6,
      name: "Ms. Deepika Nair",
      category: "Environment",
      award: "Green Champion Award",
      year: "2023",
      description: "Environmental conservation and sustainable development projects",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      location: "Kerala Environmental Society",
      icon: Star
    },
    {
      id: 7,
      name: "Mr. Rajesh Patel",
      category: "Business",
      award: "Corporate Social Responsibility Award",
      year: "2022",
      description: "Outstanding corporate contributions to community development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      location: "Patel Industries, Gujarat",
      icon: Briefcase
    },
    {
      id: 8,
      name: "Sister Mary Joseph",
      category: "Social Work",
      award: "Lifetime Achievement in Social Service",
      year: "2022",
      description: "Decades of service to underprivileged communities",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
      location: "Catholic Social Services, Goa",
      icon: Heart
    }
  ];

  const categories = [
    { value: "all", label: "All Categories", color: "bg-gray-600" },
    { value: "Police Excellence", label: "Police Excellence", color: "bg-blue-600" },
    { value: "Social Work", label: "Social Work", color: "bg-red-600" },
    { value: "Healthcare", label: "Healthcare", color: "bg-green-600" },
    { value: "Education", label: "Education", color: "bg-purple-600" },
    { value: "Environment", label: "Environment", color: "bg-emerald-600" },
    { value: "Business", label: "Business", color: "bg-orange-600" }
  ];

  const years = ["all", "2024", "2023", "2022", "2021", "2020"];

  const filteredAwardees = awardees.filter(awardee => {
    const matchesSearch = awardee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         awardee.award.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         awardee.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || awardee.category === selectedCategory;
    const matchesYear = selectedYear === "all" || awardee.year === selectedYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.color : "bg-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Trophy className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Award Recipients</h1>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-8">
              Celebrating exceptional individuals who have made outstanding contributions to society
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <h3 className="text-3xl font-bold">{awardees.length}+</h3>
                <p className="text-yellow-100">Awards Given</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">6</h3>
                <p className="text-yellow-100">Categories</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">5</h3>
                <p className="text-yellow-100">Years Running</p>
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
                placeholder="Search by name, award, or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
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

      {/* Category Pills */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                size="sm"
                className={selectedCategory === category.value ? category.color : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Awardees Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredAwardees.length} of {awardees.length} award recipients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAwardees.map((awardee) => {
              const IconComponent = awardee.icon;
              return (
                <Card key={awardee.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={awardee.image}
                      alt={awardee.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className={`absolute top-4 right-4 ${getCategoryColor(awardee.category)}`}>
                      <IconComponent className="h-3 w-3 mr-1" />
                      {awardee.year}
                    </Badge>
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{awardee.name}</CardTitle>
                    <p className="text-yellow-600 font-semibold">{awardee.award}</p>
                    <Badge variant="outline" className="mx-auto">
                      {awardee.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-700 text-sm">{awardee.description}</p>
                    <p className="text-gray-600 text-sm font-medium">{awardee.location}</p>
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-sm text-gray-500">Awarded in {awardee.year}</span>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {filteredAwardees.length === 0 && (
            <div className="text-center py-12">
              <Trophy className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">No award recipients found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Nominate Someone Special</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Know someone who deserves recognition for their outstanding contributions? Nominate them for our awards.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Nominate Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Awardees;
