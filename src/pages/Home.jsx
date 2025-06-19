import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../components/home/HeroSection";
import MaterialsSection from "../components/home/MaterialsSection";
import PlannerSection from "../components/home/PlannerSection";
import CommunitySection from "../components/home/CommunitySection";
import SuccessStoriesSection from "../components/home/SuccessStoriesSection";
import BlogsSection from "../components/home/BlogsSection";
import ProjectSection from "../components/home/ProjectsSection";

const Home = () => {
  // State management
  const [currentTime, setCurrentTime] = useState("");
  const [currentSection, setCurrentSection] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenDeveloperModal');
    if (!hasSeenModal) {
      setShowInfoModal(true);
      localStorage.setItem('hasSeenDeveloperModal', 'true');
    }
  }, []);

  // Handle modal close
  const handleModalClose = () => {
    setShowInfoModal(false);
  };

  // Refs for sections
  const heroRef = useRef(null);
  const materialsRef = useRef(null);
  const plannerRef = useRef(null);
  const examInfoRef = useRef(null);
  const communityRef = useRef(null);
  const successRef = useRef(null);
  const blogsRef = useRef(null);

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(formattedTime);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  // Handle scroll for section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine current section based on scroll position
      const sections = [
        { ref: heroRef, id: "hero" },
        { ref: materialsRef, id: "materials" },
        { ref: plannerRef, id: "planner" },
        { ref: examInfoRef, id: "examinfo" },
        { ref: communityRef, id: "community" },
        { ref: successRef, id: "success" },
        { ref: blogsRef, id: "blogs" },
      ];

      for (const section of sections) {
        if (!section.ref.current) continue;

        const rect = section.ref.current.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setCurrentSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-inter bg-slate-50 text-slate-900 dark:bg-[#050a14] dark:text-white overflow-x-hidden min-h-screen relative">
      {/* Welcome Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl w-full p-6 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Welcome to Developer Platform! 🚀
              </h2>
              <button
                onClick={handleModalClose}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                This platform showcases real GitHub trending data, live hackathon information, and authentic developer resources. 
                It's an open-source project connecting developers worldwide!
              </p>
              
              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border border-amber-200 dark:border-amber-700/50">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Platform Features:</h3>
                <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300">
                  <li>Real GitHub Trending Repositories</li>
                  <li>Live Global Hackathon Events</li>
                  <li>100M+ Developer Community</li>
                  <li>AI-Powered Project Discovery</li>
                  <li>Open Source Collaboration Hub</li>
                </ul>
              </div>

              <p className="text-sm italic">
                Join millions of developers building the future through open source collaboration and innovation!
              </p>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-medium transition-colors"
              >
                Explore Platform
              </button>
              <a
                href="https://github.com/trending"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-lg font-medium transition-colors"
              >
                View GitHub Trending
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Sections */}
      <HeroSection ref={heroRef} materialsRef={materialsRef} />
      <MaterialsSection ref={materialsRef} />
      <PlannerSection ref={plannerRef} />
      <ProjectSection ref={examInfoRef} />
      <CommunitySection ref={communityRef} />
      <SuccessStoriesSection ref={successRef} />
      <BlogsSection ref={blogsRef} />

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, -10px) scale(1.05);
          }
          50% {
            transform: translate(-5px, 10px) scale(0.95);
          }
          75% {
            transform: translate(-10px, -5px) scale(1.02);
          }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Home;