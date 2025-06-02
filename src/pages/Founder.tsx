
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Users, Globe } from "lucide-react";

const Founder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Founder</h1>
              <p className="text-xl text-blue-200 mb-8">
                Visionary leader driving global peace through humanity and police-public cooperation
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Founder"
                className="w-64 h-64 rounded-full mx-auto border-8 border-white shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-blue-900 mb-2">Dr. [Founder Name]</CardTitle>
                <CardDescription className="text-lg">
                  Founder & President, National Humanity Global Peace Federation
                </CardDescription>
                <div className="flex justify-center space-x-2 mt-4">
                  <Badge variant="secondary">Humanitarian</Badge>
                  <Badge variant="secondary">Peace Advocate</Badge>
                  <Badge variant="secondary">Social Reformer</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Vision Statement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    "My vision is to create a world where humanity transcends boundaries, where police and public 
                    work hand in hand for peace, and where every individual has the opportunity to contribute 
                    positively to society. Through NHGPF, we aim to bridge gaps, build trust, and foster 
                    an environment of mutual respect and understanding."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Biography</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    With over two decades of experience in social work and community development, our founder 
                    has dedicated their life to creating positive change in society. Starting from grassroots 
                    initiatives, they have built NHGPF into a globally recognized organization that has 
                    impacted thousands of lives.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Their innovative approach to police-public relationship building has been adopted by 
                    multiple states and has significantly improved community policing effectiveness. 
                    Through various programs, they have empowered women, supported differently-abled 
                    individuals, and promoted education and awareness across diverse communities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Key Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Award className="h-6 w-6 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">National Recognition Awards</h4>
                        <p className="text-sm text-gray-600">Multiple awards for social service and community development</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Police-Public Initiatives</h4>
                        <p className="text-sm text-gray-600">Successfully implemented in 15+ states across India</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Heart className="h-6 w-6 text-red-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Humanitarian Work</h4>
                        <p className="text-sm text-gray-600">Directly impacted over 10,000+ lives through various programs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">International Collaboration</h4>
                        <p className="text-sm text-gray-600">Partnerships with global peace organizations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Message from the Founder</h3>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "Every step we take towards building bridges between communities, every hand we extend 
                    in help, and every moment we dedicate to peace brings us closer to a world where 
                    humanity flourishes. Join us in this noble mission, for together we can create 
                    lasting change that transcends generations."
                  </blockquote>
                  <div className="text-right mt-4">
                    <p className="font-semibold text-blue-900">- Founder, NHGPF</p>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Join Our Mission
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
