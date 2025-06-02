
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.vision': 'Our Vision',
    'nav.founder': 'Founder',
    'nav.ppr': 'PPR',
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.doctorate': 'Doctorate Holders',
    'nav.awards': 'Awards',
    'nav.awardees': 'Awardees',
    'nav.apply_award': 'Apply for Award',
    'nav.members': 'Members',
    'nav.nhgpf_members': 'NHGPF Members',
    'nav.ppr_members': 'PPR Members',
    'nav.apply': 'Apply',
    'nav.apply_doctorate': 'Apply for Doctorate',
    'nav.tieups': 'Tie-ups',
    'nav.contact': 'Contact Us',
    'nav.donate': 'Donate',
    
    // Common
    'common.loading': 'Loading...',
    'common.search': 'Search...',
    'common.filter': 'Filter',
    'common.all': 'All',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view_more': 'View More',
    'common.read_more': 'Read More',
    
    // Hero Section
    'hero.title': 'National Humanity Global Peace Federation',
    'hero.subtitle': 'Building bridges between communities through police-public cooperation and humanitarian services',
    'hero.join_mission': 'Join Our Mission for Global Peace',
    'hero.apply_doctorate': 'Apply for Doctorate',
    'hero.become_member': 'Become a Member',
    'hero.support_cause': 'Support Our Cause',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.vision': 'हमारा दृष्टिकोण',
    'nav.founder': 'संस्थापक',
    'nav.ppr': 'पीपीआर',
    'nav.events': 'कार्यक्रम',
    'nav.gallery': 'गैलरी',
    'nav.doctorate': 'डॉक्टरेट धारक',
    'nav.awards': 'पुरस्कार',
    'nav.awardees': 'पुरस्कार विजेता',
    'nav.apply_award': 'पुरस्कार के लिए आवेदन',
    'nav.members': 'सदस्य',
    'nav.nhgpf_members': 'एनएचजीपीएफ सदस्य',
    'nav.ppr_members': 'पीपीआर सदस्य',
    'nav.apply': 'आवेदन करें',
    'nav.apply_doctorate': 'डॉक्टरेट के लिए आवेदन',
    'nav.tieups': 'साझेदारी',
    'nav.contact': 'संपर्क करें',
    'nav.donate': 'दान करें',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.search': 'खोजें...',
    'common.filter': 'फिल्टर',
    'common.all': 'सभी',
    'common.submit': 'जमा करें',
    'common.cancel': 'रद्द करें',
    'common.save': 'सेव करें',
    'common.edit': 'संपादित करें',
    'common.delete': 'हटाएं',
    'common.view_more': 'और देखें',
    'common.read_more': 'और पढ़ें',
    
    // Hero Section
    'hero.title': 'राष्ट्रीय मानवता वैश्विक शांति संघ',
    'hero.subtitle': 'पुलिस-जन सहयोग और मानवीय सेवाओं के माध्यम से समुदायों के बीच सेतु का निर्माण',
    'hero.join_mission': 'विश्व शांति के हमारे मिशन में शामिल हों',
    'hero.apply_doctorate': 'डॉक्टरेट के लिए आवेदन करें',
    'hero.become_member': 'सदस्य बनें',
    'hero.support_cause': 'हमारे कार्य का समर्थन करें',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
