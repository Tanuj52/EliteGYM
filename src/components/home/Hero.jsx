// src/components/home/Hero.jsx
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/hero/gym-hero.jpg"
          alt="Gym Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Accent Line */}
          <div className="w-20 h-1 bg-[#FFD700] mb-8" />

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Push Your Limits
            <br />
            <span className="text-[#FFD700]">Break Barriers</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            Join the ultimate fitness experience with state-of-the-art
            equipment, expert trainers, and a community that pushes you to be
            your best.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-8 py-4 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full" />
              <span className="text-sm uppercase tracking-wider">
                Premium Equipment
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full" />
              <span className="text-sm uppercase tracking-wider">
                Expert Trainers
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full" />
              <span className="text-sm uppercase tracking-wider">
                Elite Training Zones
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
        <span className="text-white text-sm uppercase tracking-widest mb-2">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#FFD700] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
