
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Calendar, Mail, Home, Images, Contact } from "lucide-react";
import { Link } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import FeaturedMembers from "@/components/FeaturedMembers";
import LatestNews from "@/components/LatestNews";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg" alt="NHGPF Logo" className="h-10 w-10" />
              <div>
                <h1 className="font-bold text-lg">NHGPF</h1>
                <p className="text-xs text-blue-200">National Humanity Global Peace Federation</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
              <div className="relative group">
                <button className="hover:text-yellow-300 transition-colors">About Us ▾</button>
                <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/about" className="block px-4 py-2 hover:bg-blue-50">Our Vision</Link>
                  <Link to="/founder" className="block px-4 py-2 hover:bg-blue-50">Founder</Link>
                  <Link to="/ppr" className="block px-4 py-2 hover:bg-blue-50">PPR</Link>
                </div>
              </div>
              <Link to="/events" className="hover:text-yellow-300 transition-colors">Events</Link>
              <Link to="/gallery" className="hover:text-yellow-300 transition-colors">Gallery</Link>
              <Link to="/doctorate-holders" className="hover:text-yellow-300 transition-colors">Doctorate Holders</Link>
              <div className="relative group">
                <button className="hover:text-yellow-300 transition-colors">Awards ▾</button>
                <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/awardees" className="block px-4 py-2 hover:bg-blue-50">Awardees</Link>
                  <Link to="/apply-award" className="block px-4 py-2 hover:bg-blue-50">Apply for Award</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="hover:text-yellow-300 transition-colors">Members ▾</button>
                <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/nhgpf-members" className="block px-4 py-2 hover:bg-blue-50">NHGPF Members</Link>
                  <Link to="/ppr-members" className="block px-4 py-2 hover:bg-blue-50">PPR Members</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="hover:text-yellow-300 transition-colors">Apply ▾</button>
                <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/apply-doctorate" className="block px-4 py-2 hover:bg-blue-50">Apply for Doctorate</Link>
                  <Link to="/apply-award" className="block px-4 py-2 hover:bg-blue-50">Apply for Award</Link>
                </div>
              </div>
              <Link to="/tieups" className="hover:text-yellow-300 transition-colors">Tie-ups</Link>
              <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact Us</Link>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" className="text-blue-900 border-yellow-400 hover:bg-yellow-400">
                <Link to="/apply-doctorate">Apply for Doctorate</Link>
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                <Link to="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Latest News Ticker */}
      <LatestNews />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Statistics Section */}
      <StatsSection />

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Mission for Global Peace</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Together we can build stronger communities through police-public cooperation, 
            education, and humanitarian services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
              <Link to="/apply-doctorate" className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Apply for Doctorate
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link to="/membership" className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Become a Member
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link to="/donate" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Support Our Cause
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <FeaturedMembers />

      {/* Partners Section */}
      <PartnersSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/placeholder.svg" alt="NHGPF Logo" className="h-8 w-8" />
                <h3 className="font-bold text-lg">NHGPF</h3>
              </div>
              <p className="text-gray-300 mb-4">
                National Humanity Global Peace Federation working towards global peace 
                through police-public cooperation and humanitarian services.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-300 hover:text-yellow-400"><Users className="h-5 w-5" /></a>
                <a href="#" className="text-gray-300 hover:text-yellow-400"><Mail className="h-5 w-5" /></a>
                <a href="#" className="text-gray-300 hover:text-yellow-400"><Calendar className="h-5 w-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
                <li><Link to="/events" className="hover:text-yellow-400">Events</Link></li>
                <li><Link to="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/doctorate-holders" className="hover:text-yellow-400">Doctorate Program</Link></li>
                <li><Link to="/awardees" className="hover:text-yellow-400">Awards</Link></li>
                <li><Link to="/ppr" className="hover:text-yellow-400">Police Public Relations</Link></li>
                <li><Link to="/women-empowerment" className="hover:text-yellow-400">Women Empowerment</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-300 space-y-2">
                <p>📧 info@nhgpf.org</p>
                <p>📞 +91 XXXX XXXX XX</p>
                <p>📍 Your Address Here</p>
                <p>🌐 www.nhgpf.org</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 National Humanity Global Peace Federation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
