
import { useState, useEffect } from "react";

const LatestNews = () => {
  const [currentNews, setCurrentNews] = useState(0);

  const newsItems = [
    "🎓 New Doctorate Program Applications Open - Apply Now!",
    "🏆 NHGPF Receives Excellence Award for Community Service",
    "🚓 New Police-Public Partnership Program Launched in 5 States",
    "👩 Women Empowerment Workshop Scheduled for Next Month",
    "🤝 International Collaboration Agreement Signed with Global Peace Foundation"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  return (
    <div className="bg-yellow-400 text-blue-900 py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="font-bold mr-4 whitespace-nowrap">📢 LATEST NEWS:</span>
          <div className="flex-1 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentNews * 100}%)` }}
            >
              <div className="flex">
                {newsItems.map((news, index) => (
                  <div key={index} className="min-w-full whitespace-nowrap">
                    {news}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
