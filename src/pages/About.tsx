
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About NHGPF</h1>
          <p className="text-xl max-w-3xl mx-auto">
            National Humanity Global Peace Federation - Building bridges for a peaceful world through 
            community engagement, education, and humanitarian services.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To foster global peace and harmony through innovative programs that bridge the gap between 
                law enforcement and communities, while promoting education, social welfare, and human dignity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Community Engagement & Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                  <span className="text-gray-700">Recognition & Educational Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Global Peace & Cooperation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Humanitarian Services & Support</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Community gathering" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                alt="Vision" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To create a world where communities and law enforcement work hand in hand to ensure 
                safety, justice, and prosperity for all. We envision a society where education, 
                recognition, and humanitarian values guide our collective progress.
              </p>
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">"Building Tomorrow's Peaceful Society Today"</h3>
                  <p className="text-gray-600">
                    Through our integrated approach combining police-public relations, educational 
                    excellence, and community welfare, we're creating lasting positive change.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About PPR Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Police Public Relationship (PPR)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship initiative bridging the gap between law enforcement and communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Community Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regular community meetings, awareness programs, and interactive sessions to build trust 
                  and understanding between police and public.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Specialized training for law enforcement officers on community engagement, 
                  cultural sensitivity, and modern policing methods.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Social Welfare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Joint initiatives for community welfare including health camps, educational support, 
                  and emergency response coordination.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Authenticity */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legal Authenticity & Recognition</h2>
            <p className="text-xl text-gray-600">Officially registered and recognized organization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Badge variant="outline" className="text-lg py-2 px-4 border-blue-600 text-blue-600">
                NGO Registered
              </Badge>
              <p className="text-sm text-gray-600 mt-2">Government of India</p>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="text-lg py-2 px-4 border-green-600 text-green-600">
                Trust Certified
              </Badge>
              <p className="text-sm text-gray-600 mt-2">Legal Trust Status</p>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="text-lg py-2 px-4 border-purple-600 text-purple-600">
                International Presence
              </Badge>
              <p className="text-sm text-gray-600 mt-2">Global Recognition</p>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="text-lg py-2 px-4 border-yellow-600 text-yellow-600">
                Award Winning
              </Badge>
              <p className="text-sm text-gray-600 mt-2">Excellence Awards</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
