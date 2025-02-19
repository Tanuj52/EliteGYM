// src/components/common/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-6 block">
              ELITE<span className="text-[#FFD700]">GYM</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transform your body and mind with our state-of-the-art facilities
              and expert guidance.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: "facebook", link: "#" },
                { icon: "instagram", link: "#" },
                { icon: "twitter", link: "#" },
                { icon: "youtube", link: "#" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.link}
                  className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/about" },
                { name: "Programs", path: "/programs" },
                { name: "Schedule", path: "/schedule" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start space-x-3 text-gray-400">
                  <svg
                    className="w-5 h-5 mt-1 text-[#FFD700]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    123 Fitness Street,
                    <br />
                    Your City, State 12345
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-gray-400">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
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
              </li>
              <li>
                <div className="flex items-center space-x-3 text-gray-400">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
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
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Working Hours
            </h3>
            <ul className="space-y-4">
              {[
                { day: "Monday - Friday", hours: "5:00 AM - 11:00 PM" },
                { day: "Saturday", hours: "6:00 AM - 10:00 PM" },
                { day: "Sunday", hours: "6:00 AM - 9:00 PM" },
                { day: "Public Holidays", hours: "8:00 AM - 8:00 PM" },
              ].map((schedule) => (
                <li key={schedule.day} className="text-gray-400">
                  <span className="block text-white">{schedule.day}</span>
                  {schedule.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} ELITEGYM. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-[#FFD700]"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#FFD700]">
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-[#FFD700]"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
