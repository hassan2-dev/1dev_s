import React from "react";
import {  Code, Terminal, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const motionElements = [
    {
      icon: <Code size={48} />,
      title: "Web Development",
      delay: 0.6,
      color: "from-blue-500 to-cyan-500",
      animation: {
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1],
      },
    },
    {
      icon: <Terminal size={48} />,
      title: "Mobile Apps",
      delay: 0.8,
      color: "from-purple-500 to-pink-500",
      animation: {
        y: [0, -10, 0],
        rotate: [0, -5, 5, 0],
        scale: [1, 1.05, 1],
      },
    },
    {
      icon: <Cpu size={48} />,
      title: "Network Solutions",
      delay: 1.0,
      color: "from-green-500 to-emerald-500",
      animation: {
        y: [0, -12, 0],
        rotate: [0, 3, -3, 0],
        scale: [1, 1.08, 1],
      },
    },
  ];

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden sm:my-10">
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(104, 87, 87, 0))]"></div>

        <div className="container mx-auto px-4 md:px-6 z-10 sm:gap-y-10">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full text-center mb-12"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl font-bold text-white mb-6 leading-tight"
              >
                نحول أفكاركم إلى{" "}
                <span className="text-primary-300 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-400">
                  واقع رقمي
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base text-primary-50 mb-8 px-4"
              >
                شركة متخصصة في تطوير المواقع الإلكترونية وتطبيقات الجوال ومشاريع
                التخرج وحلول محاكاة الشبكات
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full mb-12"
            >
              <div className="relative mx-auto w-full max-w-sm">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-full absolute blur-3xl"
                ></motion.div>

                <div className="grid grid-cols-1 gap-6 relative z-10">
                  {motionElements.map((element, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: element.delay }}
                      className="relative"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                          boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full h-36 rounded-2xl shadow-2xl bg-gradient-to-br ${element.color} p-6 flex items-center gap-6 overflow-hidden`}
                      >
                        <motion.div
                          animate={element.animation}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-white relative"
                        >
                          {element.icon}
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: element.delay + 0.2 }}
                          className="text-white text-xl font-semibold"
                        >
                          {element.title}
                        </motion.h3>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col gap-6 w-full max-w-sm"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContact}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full transition-all shadow-lg hover:shadow-primary-500/50"
              >
                تواصل معنا
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
                className="w-full px-8 py-4 bg-transparent border-2 border-primary-300 text-primary-100 hover:bg-primary-300 hover:text-primary-900 rounded-full transition-all"
              >
                خدماتنا
              </motion.button>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/2 text-center md:text-right mb-8 md:mb-0"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              >
                نحول أفكاركم إلى{" "}
                <span className="text-primary-300 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-400">
                  واقع رقمي
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-primary-50 mb-8"
              >
                شركة متخصصة في تطوير المواقع الإلكترونية وتطبيقات الجوال ومشاريع
                التخرج وحلول محاكاة الشبكات
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center md:justify-end gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContact}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full transition-all shadow-lg hover:shadow-primary-500/50"
                >
                  تواصل معنا
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToServices}
                  className="px-8 py-3 bg-transparent border-2 border-primary-300 text-primary-100 hover:bg-primary-300 hover:text-primary-900 rounded-full transition-all"
                >
                  خدماتنا
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <div className="relative mx-auto w-full max-w-md">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-full absolute blur-3xl"
                ></motion.div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {motionElements.map((element, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: element.delay }}
                      className={`relative ${index === 0 ? "col-span-2" : ""}`}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full h-48 rounded-2xl shadow-2xl bg-gradient-to-br ${element.color} p-6 flex flex-col items-center justify-center overflow-hidden`}
                      >
                        <motion.div
                          animate={element.animation}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-white mb-4 relative"
                        >
                          {element.icon}
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: element.delay + 0.2 }}
                          className="text-white text-xl font-semibold"
                        >
                          {element.title}
                        </motion.h3>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

   
      </section>
    </div>
  );
};

export default Hero;
