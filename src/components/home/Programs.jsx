// src/components/home/Programs.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";

const Programs = () => {
  const programs = [
    {
      title: "Personal Training",
      description: "Tailored one-on-one sessions with elite coaches",
      image: "/assets/images/programs/personal-training.jpg",
      features: [
        "Customized Workout Plans",
        "Nutrition Guidance",
        "Progress Tracking",
      ],
    },
    {
      title: "Group Classes",
      description: "Dynamic group sessions for maximum motivation",
      image: "/assets/images/programs/group-classes.jpg",
      features: [
        "HIIT Circuits",
        "Strength Training",
        "Metabolic Conditioning",
      ],
    },
    {
      title: "CrossFit",
      description: "High-intensity functional training programs",
      image: "/assets/images/programs/crossfit.jpg",
      features: ["Olympic Lifting", "Conditioning", "Skill Development"],
    },
    {
      title: "Yoga & Mobility",
      description: "Mind-body connection and recovery",
      image: "/assets/images/programs/yoga.jpg",
      features: ["Power Yoga", "Mobility Flow", "Meditation"],
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Training Programs
            <span className="text-[#FFD700]">.</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose from our range of specialized training programs
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-gray-900/50 border border-gray-800 hover:border-[#FFD700]/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full py-3 px-4 bg-transparent border border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-black transition-all duration-300 text-sm uppercase tracking-wider font-semibold">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="bg-[#FFD700] text-black px-8 py-4 rounded-lg hover:bg-[#FFD700]/90 transition-all duration-300 text-sm uppercase tracking-wider font-semibold">
            View All Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
