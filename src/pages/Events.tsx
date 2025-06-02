
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Clock, Users, Search } from "lucide-react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "Annual Police-Public Harmony Conference 2024",
      date: "2024-12-15",
      time: "09:00 AM",
      location: "New Delhi Convention Center",
      category: "conference",
      status: "upcoming",
      description: "A comprehensive conference bringing together police officials and community leaders to discuss innovative approaches to community policing.",
      attendees: 500,
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Women Empowerment Workshop",
      date: "2024-11-28",
      time: "10:00 AM",
      location: "Mumbai Community Center",
      category: "workshop",
      status: "upcoming",
      description: "Empowering women through skill development, legal awareness, and entrepreneurship opportunities.",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Doctorate Ceremony - Batch 2024",
      date: "2024-10-20",
      time: "11:00 AM",
      location: "Bangalore International Center",
      category: "ceremony",
      status: "past",
      description: "Honorary doctorate presentation ceremony recognizing outstanding contributions to social service.",
      attendees: 300,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Road Safety Awareness Campaign",
      date: "2024-09-15",
      time: "08:00 AM",
      location: "Chennai Traffic Junction",
      category: "campaign",
      status: "past",
      description: "Community-wide road safety awareness program with police collaboration and public participation.",
      attendees: 1000,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop"
    }
  ];

  const categories = [
    { value: "all", label: "All Events" },
    { value: "conference", label: "Conferences" },
    { value: "workshop", label: "Workshops" },
    { value: "ceremony", label: "Ceremonies" },
    { value: "campaign", label: "Campaigns" }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === "upcoming");
  const pastEvents = filteredEvents.filter(event => event.status === "past");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Programs</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Join us in our mission to build stronger communities through engaging events and meaningful programs
            </p>
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
                placeholder="Search events..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  size="sm"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-green-600">
                      Upcoming
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      Expected: {event.attendees} attendees
                    </div>
                    <Button className="w-full">Register Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No upcoming events found.</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-gray-600">
                      Completed
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} attendees
                    </div>
                    <Button variant="outline" className="w-full">View Gallery</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No past events found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
