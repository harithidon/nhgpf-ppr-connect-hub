
import { Link } from "react-router-dom";
import { Users, Mail, Calendar } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
