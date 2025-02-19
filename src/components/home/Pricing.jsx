// src/components/home/Pricing.jsx
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Monthly",
      price: "3,500",
      duration: "month",
      features: [
        "Full Gym Access",
        "All Equipment Usage",
        "Locker Room Access",
        "Free Parking",
        "Fitness Assessment",
      ],
      popular: false,
      savings: "No commitment required",
    },
    {
      name: "Quarterly",
      price: "7,500",
      duration: "3 months",
      features: [
        "All Monthly Features",
        "₹2,500/month value",
        "Save ₹3,000",
        "Fitness Tracking",
        "Priority Support",
      ],
      popular: false,
      savings: "Save ₹3,000",
    },
    {
      name: "Half Yearly",
      price: "12,500",
      duration: "6 months",
      features: [
        "All Quarterly Features",
        "₹2,083/month value",
        "Save ₹8,500",
        "Nutrition Guide",
        "1 PT Session/month",
      ],
      popular: true,
      savings: "Save ₹8,500",
    },
    {
      name: "Annual",
      price: "15,999",
      duration: "year",
      features: [
        "All Half Yearly Features",
        "₹1,333/month value",
        "Save ₹26,001",
        "2 PT Sessions/month",
        "Guest Passes",
      ],
      popular: false,
      savings: "Best Value - Save ₹26,001",
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
            Membership Plans
            <span className="text-[#FFD700]">.</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose your ideal membership duration
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-lg overflow-hidden ${
                plan.popular
                  ? "bg-gradient-to-b from-[#FFD700]/10 to-black border border-[#FFD700]"
                  : "bg-gray-900/50 border border-gray-800 hover:border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-2xl font-bold text-white">₹</span>
                  <span className="text-4xl font-bold text-white ml-1">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-400 mb-6">per {plan.duration}</p>

                {/* Savings Badge */}
                <div className="bg-green-500/10 text-green-400 text-sm py-1 px-3 rounded-full mb-6 inline-block">
                  {plan.savings}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <svg
                        className="w-4 h-4 mr-3 text-[#FFD700] flex-shrink-0"
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
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
                      : "bg-transparent border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 space-y-4"
        >
          <p className="text-gray-400">
            All plans include access to complete gym facilities and amenities
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-[#FFD700]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-[#FFD700]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
