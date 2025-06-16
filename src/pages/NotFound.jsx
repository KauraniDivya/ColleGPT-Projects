import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-start relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-[linear-gradient(transparent_9px,#22c55e_1px),linear-gradient(90deg,transparent_9px,#22c55e_1px)] bg-[length:100px_100px]"></div>
        </div>
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent blur-[100px]"></div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,197,94,0.07), transparent 80%)`,
        }}
      />

      {/* Text Content - Moved to top */}
      <div className="container mx-auto px-4 pt-20 pb-8 relative z-20">
        <div className="text-center">
          <motion.h1 
            className="text-9xl font-bold text-indigo-600 dark:text-indigo-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            404
          </motion.h1>
          <motion.h2 
            className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Oops! Page Not Found
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The page you're looking for seems to have drifted off into space. Let's get you back on track!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Centered Astronaut with parallax effect */}
      <div className="flex-1 w-full flex items-center justify-center relative">
        <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] select-none pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0, -5, 0],
              x: mousePosition.x * -15,
            }}
            transition={{
              y: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              rotate: {
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <img
              src="https://i.ibb.co/4Z2VV9Zp/image.png"
              alt="Floating Astronaut"
              className="w-full h-full object-contain"
            />

            {/* Shadow beneath astronaut */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-8 md:w-48 md:h-12 lg:w-64 lg:h-16 bg-black/20 dark:bg-black/30 rounded-full blur-md"
              animate={{
                width: [80, 120, 80],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 