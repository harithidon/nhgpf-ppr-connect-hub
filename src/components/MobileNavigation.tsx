
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Menu, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [awardsOpen, setAwardsOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
    setAboutOpen(false);
    setAwardsOpen(false);
    setMembersOpen(false);
    setApplyOpen(false);
  };

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-800">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 bg-white">
          <SheetHeader className="border-b pb-4">
            <SheetTitle className="text-left">
              <div className="flex items-center space-x-3">
                <img src="/placeholder.svg" alt="NHGPF Logo" className="h-8 w-8" />
                <div>
                  <h2 className="font-bold text-blue-900">NHGPF</h2>
                  <p className="text-xs text-gray-600">National Humanity Global Peace Federation</p>
                </div>
              </div>
            </SheetTitle>
          </SheetHeader>

          <div className="py-4 space-y-2">
            {/* Language Toggle */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Language / भाषा</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="flex items-center gap-1"
              >
                <Globe className="h-4 w-4" />
                {language === 'en' ? 'हिंदी' : 'English'}
              </Button>
            </div>

            {/* Home */}
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('nav.home')}
            </Link>

            {/* About Us Dropdown */}
            <Collapsible open={aboutOpen} onOpenChange={setAboutOpen}>
              <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                {t('nav.about')}
                <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-4 space-y-1">
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive('/about') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t('nav.vision')}
                </Link>
                <Link
                  to="/founder"
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive('/founder') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t('nav.founder')}
                </Link>
                <Link
                  to="/ppr"
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive('/ppr') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t('nav.ppr')}
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Events */}
            <Link
              to="/events"
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/events') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('nav.events')}
            </Link>

            {/* Gallery */}
            <Link
              to="/gallery"
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/gallery') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('nav.gallery')}
            </Link>

            {/* Doctorate Holders */}
            <Link
              to="/doctorate-holders"
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/doctorate-holders') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('nav.doctorate')}
            </Link>

            {/* Awards Dropdown */}
            <Collapsible open={awardsOpen} onOpenChange={setAwardsOpen}>
              <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                {t('nav.awards')}
                <ChevronDown className={`h-4 w-4 transition-transform ${awardsOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-4 space-y-1">
                <Link
                  to="/awardees"
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive('/awardees') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t('nav.awardees')}
                </Link>
                <Link
                  to="/apply-award"
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive('/apply-award') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t('nav.apply_award')}
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Members Dropdown */}
            <Collapsible open={membersOpen} onOpenChange={setMembersOpen}>
              <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                {t('nav.members')}
                <ChevronDown className={`h-4 w-4 transition-transform ${membersOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-4 space-y-1">
                <Link
                  to="/nhgpf-members"
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive('/nhgpf-members') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t('nav.nhgpf_members')}
                </Link>
                <Link
                  to="/ppr-members"
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive('/ppr-members') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t('nav.ppr_members')}
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Apply Dropdown */}
            <Collapsible open={applyOpen} onOpenChange={setApplyOpen}>
              <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                {t('nav.apply')}
                <ChevronDown className={`h-4 w-4 transition-transform ${applyOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-4 space-y-1">
                <Link
                  to="/apply-doctorate"
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive('/apply-doctorate') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t('nav.apply_doctorate')}
                </Link>
                <Link
                  to="/apply-award"
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive('/apply-award') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {t('nav.apply_award')}
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Tie-ups */}
            <Link
              to="/tieups"
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/tieups') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('nav.tieups')}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-lg transition-colors ${
                isActive('/contact') ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('nav.contact')}
            </Link>

            {/* Action Buttons */}
            <div className="pt-4 border-t space-y-2">
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                <Link to="/apply-doctorate" onClick={handleLinkClick}>
                  {t('nav.apply_doctorate')}
                </Link>
              </Button>
              <Button variant="outline" className="w-full border-yellow-400 text-yellow-600 hover:bg-yellow-50">
                <Link to="/donate" onClick={handleLinkClick}>
                  {t('nav.donate')}
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
