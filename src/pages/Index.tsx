
import { Button } from "@/components/ui/button";
import { Users, Award, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import FeaturedMembers from "@/components/FeaturedMembers";
import LatestNews from "@/components/LatestNews";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Latest News Ticker */}
      <LatestNews />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Statistics Section */}
      <StatsSection />

      {/* Call to Action Section - Enhanced Responsiveness */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            {t('hero.join_mission')}
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 w-full sm:w-auto">
              <Link to="/apply-doctorate" className="flex items-center gap-2">
                <Award className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-sm md:text-base">{t('nav.apply_doctorate')}</span>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto"
            >
              <Link to="/membership" className="flex items-center gap-2">
                <Users className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-sm md:text-base">{t('hero.become_member')}</span>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto"
            >
              <Link to="/donate" className="flex items-center gap-2">
                <Home className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-sm md:text-base">{t('hero.support_cause')}</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <FeaturedMembers />

      {/* Partners Section */}
      <PartnersSection />

      {/* Footer - Enhanced Responsiveness */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/placeholder.svg" alt="NHGPF Logo" className="h-8 w-8" />
                <h3 className="font-bold text-lg">NHGPF</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
                National Humanity Global Peace Federation working towards global peace 
                through police-public cooperation and humanitarian services.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Users className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Award className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  <Home className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-base md:text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-yellow-400 transition-colors text-sm md:text-base">About Us</Link></li>
                <li><Link to="/events" className="hover:text-yellow-400 transition-colors text-sm md:text-base">Events</Link></li>
                <li><Link to="/gallery" className="hover:text-yellow-400 transition-colors text-sm md:text-base">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-400 transition-colors text-sm md:text-base">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-base md:text-lg">Programs</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/doctorate-holders" className="hover:text-yellow-400 transition-colors text-sm md:text-base">Doctorate Program</Link></li>
                <li><Link to="/awardees" className="hover:text-yellow-400 transition-colors text-sm md:text-base">Awards</Link></li>
                <li><Link to="/ppr" className="hover:text-yellow-400 transition-colors text-sm md:text-base">Police Public Relations</Link></li>
                <li><Link to="/women-empowerment" className="hover:text-yellow-400 transition-colors text-sm md:text-base">Women Empowerment</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-base md:text-lg">Contact Info</h4>
              <div className="text-gray-300 space-y-2 text-sm md:text-base">
                <p className="break-all">📧 info@nhgpf.org</p>
                <p>📞 +91 XXXX XXXX XX</p>
                <p className="break-words">📍 Your Address Here</p>
                <p className="break-all">🌐 www.nhgpf.org</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-300">
            <p className="text-sm md:text-base">
              &copy; 2024 National Humanity Global Peace Federation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
