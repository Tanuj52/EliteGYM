// src/components/home/Infrastructure.jsx
import { useEffect, useRef } from "react";

const Infrastructure = () => {
  const sectionRef = useRef(null);

  const facilities = [
    {
      title: "Training Zones",
      description:
        "Specialized areas for strength, cardio, and functional training",
      image: "/src/assets/images/infrastructure/training-zone.jpg",
      stats: "5000+ sq ft",
    },
    {
      title: "Premium Equipment",
      description: "Latest high-end fitness machines and free weights",
      image: "/src/assets/images/infrastructure/equipment.jpg",
      stats: "100+ Machines",
    },
    {
      title: "Recovery Area",
      description: "Dedicated space for stretching and recovery",
      image: "/src/assets/images/infrastructure/recovery.jpg",
      stats: "Full Suite",
    },
    {
      title: "Cardio Deck",
      description:
        "State-of-the-art cardio equipment with entertainment systems",
      image: "/src/assets/images/infrastructure/cardio.jpg",
      stats: "30+ Stations",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".fade-up");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat bg-[url('/path/to/pattern.png')]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            World-Class Infrastructure
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience fitness in a premium environment designed to elevate your
            training
          </p>
        </div>

        {/* Facilities Grid - Updated Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className="group relative overflow-hidden rounded-lg fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container with Reduced Height */}
              <div className="relative h-[350px] lg:h-[400px] overflow-hidden min-h-[200px]">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {/* Enhanced Stats Badge */}
                <div className="inline-block px-4 py-2 bg-[#FFD700] text-black text-sm font-semibold rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  {facility.stats}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {facility.title}
                </h3>

                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {facility.description}
                </p>

                {/* Enhanced Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFB700] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Updated Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { number: "50+", text: "Professional Trainers" },
            { number: "100%", text: "Air Conditioned" },
            { number: "5★", text: "Rated Facility" },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 border border-gray-800 rounded-lg fade-up hover:border-[#FFD700]/40 transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-[#FFD700] mb-2">
                {feature.number}
              </div>
              <div className="text-gray-400 uppercase tracking-wider text-sm font-medium">
                {feature.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
