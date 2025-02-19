// src/components/home/Equipment.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Equipment = () => {
  const categories = [
    {
      title: "Strength Training",
      description: "Premium free weights and machines",
      images: [
        "/src/assets/images/equipment/strength/smith-machine.jpg",
        "/src/assets/images/equipment/strength/power-rack.jpg",
        "/src/assets/images/equipment/strength/dumbbells.jpg",
        "/src/assets/images/equipment/strength/bench.jpg",
      ],
      items: ["Smith Machines", "Power Racks", "Dumbbells (2-50kg)", "Benches"],
    },
    {
      title: "Cardio Zone",
      description: "Latest cardio equipment with entertainment",
      images: [
        "/src/assets/images/equipment/cardio/treadmill.jpg",
        "/src/assets/images/equipment/cardio/crosstrainer.jpg",
        "/src/assets/images/equipment/cardio/rower.jpg",
        "/src/assets/images/equipment/cardio/bike.jpg",
      ],
      items: ["Treadmills", "Cross Trainers", "Rowing Machines", "Bikes"],
    },
    {
      title: "Functional Area",
      description: "Space for dynamic workouts",
      images: [
        "/src/assets/images/equipment/functional/kettlebells.jpg",
        "/src/assets/images/equipment/functional/ropes.jpg",
        "/src/assets/images/equipment/functional/trx.jpg",
        "/src/assets/images/equipment/functional/boxes.jpg",
      ],
      items: ["Kettlebells", "Battle Ropes", "TRX Systems", "Plyo Boxes"],
    },
    {
      title: "Recovery Zone",
      description: "Essential recovery equipment",
      images: [
        "/src/assets/images/equipment/recovery/rollers.jpg",
        "/src/assets/images/equipment/recovery/stretch.jpg",
        "/src/assets/images/equipment/recovery/massage.jpg",
        "/src/assets/images/equipment/recovery/yoga.jpg",
      ],
      items: ["Foam Rollers", "Stretching Area", "Massage Guns", "Yoga Mats"],
    },
  ];

  // Custom hook for image slideshow
  const useSlideshow = (images, interval = 3000) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(timer);
    }, [images, interval]);

    return currentIndex;
  };

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
            Premium Equipment
            <span className="text-[#FFD700]">.</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Train with the latest state-of-the-art fitness equipment
          </p>
        </motion.div>

        {/* Equipment Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const currentImageIndex = useSlideshow(category.images);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg"
              >
                {/* Image Slideshow Container */}
                <div className="relative h-[300px] overflow-hidden">
                  {category.images.map((image, imgIndex) => (
                    <div
                      key={image}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        imgIndex === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${category.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>

                  {/* Equipment List */}
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {category.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? "bg-[#FFD700] w-3"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats - Same as before */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {/* ... Stats content ... */}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
