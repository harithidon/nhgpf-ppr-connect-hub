
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Responsive */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            <img src="/placeholder.svg" alt="NHGPF Logo" className="h-8 w-8 md:h-10 md:w-10" />
            <div className="min-w-0">
              <h1 className="font-bold text-base md:text-lg truncate">NHGPF</h1>
              <p className="text-xs text-blue-200 hidden sm:block truncate">
                National Humanity Global Peace Federation
              </p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-1 justify-center">
            <Link to="/" className="hover:text-yellow-300 transition-colors whitespace-nowrap text-sm xl:text-base">
              {t('nav.home')}
            </Link>
            
            <div className="relative group">
              <button className="hover:text-yellow-300 transition-colors whitespace-nowrap text-sm xl:text-base">
                {t('nav.about')} ▾
              </button>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link to="/about" className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {t('nav.vision')}
                </Link>
                <Link to="/founder" className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {t('nav.founder')}
                </Link>
                <Link to="/ppr" className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {t('nav.ppr')}
                </Link>
              </div>
            </div>
            
            <Link to="/events" className="hover:text-yellow-300 transition-colors whitespace-nowrap text-sm xl:text-base">
              {t('nav.events')}
            </Link>
            
            <Link to="/gallery" className="hover:text-yellow-300 transition-colors whitespace-nowrap text-sm xl:text-base">
              {t('nav.gallery')}
            </Link>
            
            <Link to="/doctorate-holders" className="hover:text-yellow-300 transition-colors whitespace-nowrap text-sm xl:text-base">
              {t('nav.doctorate')}
            </Link>
            
            <div className="relative group">
              <button className="hover:text-yellow-300 transition-colors whitespace-nowrap text-sm xl:text-base">
                {t('nav.awards')} ▾
              </button>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link to="/awardees" className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {t('nav.awardees')}
                </Link>
                <Link to="/apply-award" className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {t('nav.apply_award')}
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="hover:text-yellow-300 transition-colors whitespace-nowrap text-sm xl:text-base">
                {t('nav.members')} ▾
              </button>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link to="/nhgpf-members" className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {t('nav.nhgpf_members')}
                </Link>
                <Link to="/ppr-members" className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {t('nav.ppr_members')}
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="hover:text-yellow-300 transition-colors whitespace-nowrap text-sm xl:text-base">
                {t('nav.apply')} ▾
              </button>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link to="/apply-doctorate" className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {t('nav.apply_doctorate')}
                </Link>
                <Link to="/apply-award" className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {t('nav.apply_award')}
                </Link>
              </div>
            </div>
            
            <Link to="/tieups" className="hover:text-yellow-300 transition-colors whitespace-nowrap text-sm xl:text-base">
              {t('nav.tieups')}
            </Link>
            
            <Link to="/contact" className="hover:text-yellow-300 transition-colors whitespace-nowrap text-sm xl:text-base">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Right Side - Language Toggle and Action Buttons */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Language Toggle - Desktop */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="hidden md:flex items-center gap-1 text-white hover:bg-blue-800 text-xs"
            >
              <Globe className="h-3 w-3" />
              {language === 'en' ? 'हिंदी' : 'English'}
            </Button>

            {/* Action Buttons - Responsive */}
            <div className="hidden md:flex space-x-1 lg:space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                className="text-blue-900 border-yellow-400 hover:bg-yellow-400 text-xs lg:text-sm px-2 lg:px-3"
              >
                <Link to="/apply-doctorate">{t('nav.apply_doctorate')}</Link>
              </Button>
              <Button 
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 text-xs lg:text-sm px-2 lg:px-3"
              >
                <Link to="/donate">{t('nav.donate')}</Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
