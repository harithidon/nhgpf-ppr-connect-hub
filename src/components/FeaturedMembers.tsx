
import { Card, CardContent } from "@/components/ui/card";

const FeaturedMembers = () => {
  const members = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "President",
      state: "Maharashtra",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      specialization: "Police Administration"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Vice President",
      state: "Delhi",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b494",
      specialization: "Women Empowerment"
    },
    {
      name: "Dr. Ahmed Khan",
      designation: "Secretary",
      state: "Gujarat",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      specialization: "Community Development"
    },
    {
      name: "Dr. Sunita Patel",
      designation: "Treasurer",
      state: "Rajasthan",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      specialization: "Social Welfare"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of leaders working towards global peace and community development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{member.designation}</p>
                <p className="text-gray-600 text-sm mb-2">{member.state}</p>
                <p className="text-gray-500 text-xs">{member.specialization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMembers;
