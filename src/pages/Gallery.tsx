
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Calendar, MapPin } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleries = [
    {
      id: 1,
      title: "Doctorate Ceremony 2024",
      date: "2024-10-20",
      location: "Bangalore",
      category: "doctorate",
      coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      imageCount: 45,
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Women Empowerment Workshop",
      date: "2024-09-15",
      location: "Mumbai",
      category: "empowerment",
      coverImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      imageCount: 32,
      images: [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0a9ba9cd5d2?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Road Safety Campaign",
      date: "2024-08-10",
      location: "Chennai",
      category: "awareness",
      coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      imageCount: 28,
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Police-Public Harmony Meet",
      date: "2024-07-25",
      location: "Delhi",
      category: "conference",
      coverImage: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=400&fit=crop",
      imageCount: 38,
      images: [
        "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Award Ceremony 2024",
      date: "2024-06-12",
      location: "Kolkata",
      category: "awards",
      coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      imageCount: 52,
      images: [
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0a9ba9cd5d2?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Community Outreach Program",
      date: "2024-05-18",
      location: "Hyderabad",
      category: "community",
      coverImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",
      imageCount: 29,
      images: [
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
      ]
    }
  ];

  const categories = [
    { value: "all", label: "All Categories", color: "bg-gray-600" },
    { value: "doctorate", label: "Doctorate Events", color: "bg-blue-600" },
    { value: "awards", label: "Award Ceremonies", color: "bg-yellow-600" },
    { value: "empowerment", label: "Women Empowerment", color: "bg-purple-600" },
    { value: "awareness", label: "Awareness Campaigns", color: "bg-green-600" },
    { value: "conference", label: "Conferences", color: "bg-red-600" },
    { value: "community", label: "Community Programs", color: "bg-indigo-600" }
  ];

  const filteredGalleries = galleries.filter(gallery => 
    selectedCategory === "all" || gallery.category === selectedCategory
  );

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Capturing moments of change, growth, and community building through our various programs and events
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white shadow-sm">
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

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGalleries.map((gallery) => (
              <Card key={gallery.id} className="hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative">
                  <img
                    src={gallery.coverImage}
                    alt={gallery.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => openLightbox(gallery.images[0])}
                      variant="secondary"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Gallery
                    </Button>
                  </div>
                  <Badge className="absolute top-4 right-4">
                    {gallery.imageCount} Photos
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{gallery.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(gallery.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    {gallery.location}
                  </div>
                  
                  {/* Preview Images */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {gallery.images.slice(0, 4).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openLightbox(image)}
                      />
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View All Photos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              onClick={closeLightbox}
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4"
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
