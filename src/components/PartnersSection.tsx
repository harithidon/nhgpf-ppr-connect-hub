
const PartnersSection = () => {
  const partners = [
    { name: "State Police Department", logo: "/placeholder.svg" },
    { name: "Ministry of Social Justice", logo: "/placeholder.svg" },
    { name: "Women Development Corporation", logo: "/placeholder.svg" },
    { name: "Education Board", logo: "/placeholder.svg" },
    { name: "Health Ministry", logo: "/placeholder.svg" },
    { name: "Youth Development Fund", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners & Tie-ups</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Working together with government and non-government organizations to create meaningful impact
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group-hover:scale-105 transform transition-transform">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-16 mx-auto mb-3 grayscale group-hover:grayscale-0 transition-all"
                />
                <p className="text-sm text-gray-600 font-medium">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
