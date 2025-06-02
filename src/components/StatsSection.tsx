
import { Users, Award, Calendar, Home } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "People Helped",
      color: "text-blue-600"
    },
    {
      icon: Award,
      number: "500+",
      label: "Doctorates Awarded",
      color: "text-yellow-600"
    },
    {
      icon: Calendar,
      number: "200+",
      label: "Police Public Tie-ups",
      color: "text-green-600"
    },
    {
      icon: Home,
      number: "1,000+",
      label: "Women Empowered",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Making a difference in communities worldwide through our various programs and initiatives
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-opacity-10 rounded-full mb-4`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
