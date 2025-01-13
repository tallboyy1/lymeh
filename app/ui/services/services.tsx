// "use client";

// import { useState } from "react";

type Service = {
  title: string;
  image: string;
};

// const services: Service[] = [
//   { title: "Marketing Consultancy", image: "/services/marketing.jpg" },
//   { title: "Advertising", image: "/services/advertising.jpg" },
//   { title: "Digital Solutions", image: "/services/digital.jpg" },
//   { title: "Creative Development", image: "/services/creative.jpg" },
//   { title: "Events & Market Activation", image: "/services/events.jpg" },
//   { title: "Public Relations", image: "/services/pr.jpg" },
//   { title: "Production", image: "/services/marketing.jpg" },
//   { title: "Media Management", image: "/services/advertising.jpg" },
//   { title: "Research Development", image: "/services/digital.jpg" },
// ];

// const KeyServices: React.FC = () => {
//   const [hoveredImage, setHoveredImage] = useState<string | null>(null);

//   return (
//     <div
//       className="h-screen w-full bg-black bg-cover bg-center transition-all duration-500"
//       style={{
//         backgroundImage: hoveredImage ? `url(${hoveredImage})` : "none",
//       }}
//     >
//       <div className="h-full w-full bg-black/70 flex flex-col items-center justify-center">
//         <h1 className="text-white text-5xl font-bold mb-12">KEY SERVICES</h1>
//         <ul className="text-white text-xl space-y-4">
//           {services.map((service) => (
//             <li
//               key={service.title}
//               className="cursor-pointer hover:font-bold transition-all"
//               onMouseEnter={() => setHoveredImage(service.image)}
//               onMouseLeave={() => setHoveredImage(null)}
//             >
//               {service.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default KeyServices;

























"use client";

import { useState, useEffect } from "react";


const services: Service[] = [
  { title: "Marketing Consultancy", image: "/services/marketing.jpg" },
  { title: "Advertising", image: "/services/advertising.jpg" },
  { title: "Digital Solutions", image: "/services/digital.jpg" },
  { title: "Creative Development", image: "/services/creative.jpg" },
  { title: "Events & Market Activation", image: "/services/events.jpg" },
  { title: "Public Relations", image: "/services/pr.jpg" },
  { title: "Production", image: "/services/marketing.jpg" },
  { title: "Media Management", image: "/services/advertising.jpg" },
  { title: "Research Development", image: "/services/digital.jpg" },
];


// const services = [
//   { title: "Marketing Consultancy", image: "/images/marketing.jpg" },
//   { title: "Advertising", image: "/images/advertising.jpg" },
//   { title: "Digital Solutions", image: "/images/digital.jpg" },
//   { title: "Creative Development", image: "/images/creative.jpg" },
//   { title: "Events & Market Activation", image: "/images/events.jpg" },
//   { title: "Public Relations", image: "/images/pr.jpg" },
//   { title: "Production", image: "/images/production.jpg" },
//   { title: "Media Management", image: "/images/media.jpg" },
//   { title: "Research Development", image: "/images/research.jpg" },
// ];

const rotatingWords = ["strategize", "create", "execute", "think"];

const KeyServices: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Rotate words at an interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000); // Change words every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-black bg-cover bg-center transition-all duration-500">
      {/* Background Image */}
      <div
        className="h-full w-full bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: hoveredImage ? `url(${hoveredImage})` : "none",
        }}
      >
        <div className="h-full w-full bg-black/70 flex flex-row justify-between items-center px-16">
          {/* Left Section: Animated Text */}
          <div className="text-white text-5xl font-bold">
            <div className="relative h-16 overflow-hidden">
              {/* Static 'We' */}
              <p className="absolute top-0 left-0">We</p>
              {/* Rotating Words */}
              <div className="absolute top-0 left-16">
                {rotatingWords.map((word, index) => (
                  <p
                    key={word}
                    className={`absolute left-0 transform transition-opacity duration-500 ${
                      index === currentWordIndex
                        ? "top-0 opacity-100"
                        : "top-16 opacity-0"
                    }`}
                    style={{
                      transitionTimingFunction: "ease-in-out",
                    }}
                  >
                    {word}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: List */}
          <div>
            <h1 className="text-white text-5xl font-bold mb-8 text-right">KEY SERVICES</h1>
            <ul className="text-white text-xl space-y-4 text-right">
              {services.map((service) => (
                <li
                  key={service.title}
                  className="cursor-pointer hover:font-bold transition-all"
                  onMouseEnter={() => setHoveredImage(service.image)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyServices;
