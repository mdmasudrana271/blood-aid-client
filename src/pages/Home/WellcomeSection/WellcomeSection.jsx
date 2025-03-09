import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const WellcomeSection = () => {
  // Text animation variants
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

  return (
    <>
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-center items-center text-center">
          {/* Text Section with Animation */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the section is in view
            className="space-y-6 max-w-3xl mx-auto"
          >
            <motion.p
              variants={textChildVariants}
              className="text-red-600 text-xl sm:text-2xl font-medium uppercase"
            >
              Donate Blood, Save Lives
            </motion.p>
            <motion.h1
              variants={textChildVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight"
            >
              Be a Lifeline, Donate Blood Today
            </motion.h1>
            <motion.p
              variants={textChildVariants}
              className="text-lg sm:text-xl text-gray-700"
            >
              Every drop of blood donated saves lives and offers hope to those
              in need. Your generous act of donating blood can help patients
              with life-threatening conditions and make a difference when it
              matters most.
            </motion.p>
            <motion.p
              variants={textChildVariants}
              className="text-lg sm:text-xl text-gray-700"
            >
              Join our mission to ensure that no one faces a medical emergency
              without the support of a willing blood donor. Together, we can
              save countless lives.
            </motion.p>
          </motion.div>

          <NavLink
            to="/blood-request"
            className="bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 mt-6 z-10"
          >
            Donate Now
          </NavLink>
        </div>

        {/* Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
      </section>
    </>
  );
};

export default WellcomeSection;
