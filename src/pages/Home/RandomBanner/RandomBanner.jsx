import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const RandomBanner = () => {
  // Text and Button Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-r from-red-600 to-red-800 py-16 text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center items-center text-center">
          {/* Main Heading */}
          <motion.h1
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the heading is in view
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight"
          >
            Save Lives, Donate Blood Today
          </motion.h1>

          {/* Campaign Info Card */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the section is in view
            className="bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-3xl mx-auto mb-6"
          >
            <motion.h2
              variants={textChildVariants}
              className="text-2xl font-semibold mb-4"
            >
              Why Donate Blood?
            </motion.h2>
            <motion.p variants={textChildVariants} className="text-lg mb-4">
              Blood donation is a vital part of medical care. Every time you
              donate, you help save lives. Your blood can provide crucial
              support in surgeries, emergency situations, and treatments for
              patients in need.
            </motion.p>
            <motion.p variants={textChildVariants} className="text-lg">
              No one knows when they might need a blood transfusion. Your
              donation ensures that hospitals have the blood they need to treat
              people in critical conditions.
            </motion.p>
          </motion.div>

          {/* Call to Action Button with New Animation Style */}
          <NavLink to="/blood-request">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover={{
                y: -5, // Moves button upwards on hover for dynamic effect
                boxShadow: "0 4px 20px rgba(255, 255, 255, 0.5)", // Adds a glowing shadow on hover
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="bg-red-600 text-white text-lg font-semibold py-4 px-10 rounded-lg shadow-lg transform hover:bg-red-700 transition-all duration-300"
            >
              Get Involved Now
            </motion.button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default RandomBanner;
