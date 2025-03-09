import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white py-16">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Branding */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-6">
              <MdBloodtype className="text-6xl text-white" />
              <span className="text-4xl font-semibold text-white ml-4">
                Blood Aid
              </span>
            </div>
            <p className="text-gray-200 text-center sm:text-left mb-6">
              Blood Aid connects donors and recipients, ensuring timely access
              to life-saving donations. Join us in saving lives today.
            </p>
          </div>

          {/* Links Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-4 text-lg">
              <li>
                <a
                  href="/about"
                  className="text-gray-200 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-200 hover:text-white transition duration-300"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <a
                  href="/donation-guide"
                  className="text-gray-200 hover:text-white transition duration-300"
                >
                  Donation Guide
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-200 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Follow Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center sm:justify-start space-x-6 text-2xl">
              <a
                href="https://www.facebook.com/mdabdullamasud.rana"
                target="_blank"
                className="text-gray-200 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/mdmasudrana271"
                target="_blank"
                className="text-gray-200 hover:text-white transition duration-300"
                aria-label="Github"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/md-abdullahalmasud/"
                target="_blank"
                className="text-gray-200 hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Blood Aid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
