
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="NHGPF Logo" className="h-10 w-10" />
            <div>
              <h1 className="font-bold text-lg">NHGPF</h1>
              <p className="text-xs text-blue-200">National Humanity Global Peace Federation</p>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link>
            <div className="relative group">
              <button className="hover:text-yellow-300 transition-colors">About Us ▾</button>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
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
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link to="/awardees" className="block px-4 py-2 hover:bg-blue-50">Awardees</Link>
                <Link to="/apply-award" className="block px-4 py-2 hover:bg-blue-50">Apply for Award</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-yellow-300 transition-colors">Members ▾</button>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link to="/nhgpf-members" className="block px-4 py-2 hover:bg-blue-50">NHGPF Members</Link>
                <Link to="/ppr-members" className="block px-4 py-2 hover:bg-blue-50">PPR Members</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-yellow-300 transition-colors">Apply ▾</button>
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link to="/apply-doctorate" className="block px-4 py-2 hover:bg-blue-50">Apply for Doctorate</Link>
                <Link to="/apply-award" className="block px-4 py-2 hover:bg-blue-50">Apply for Award</Link>
              </div>
            </div>
            <Link to="/tieups" className="hover:text-yellow-300 transition-colors">Tie-ups</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
