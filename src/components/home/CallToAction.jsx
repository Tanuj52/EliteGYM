// src/components/home/CallToAction.jsx
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Start Your Fitness Journey
                  <span className="text-[#FFD700]">.</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Take the first step towards a healthier you. Join now and get:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Free Fitness Assessment",
                    "Personalized Workout Plan",
                    "1 Complimentary PT Session",
                    "Access to All Facilities",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 mr-3 text-[#FFD700]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 mr-3 text-[#FFD700]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+91 1234567890</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 mr-3 text-[#FFD700]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>info@elitegym.com</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Form */}
              <div className="bg-black/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Request a Callback
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700]"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 focus:outline-none focus:border-[#FFD700]">
                      <option value="">Preferred Time</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                  <button className="w-full py-3 bg-[#FFD700] text-black rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors duration-300">
                    Request Callback
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
