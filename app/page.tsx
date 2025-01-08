"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertDescription } from "./components/alert";
import { DollarSign, Clock, ChevronRight } from "lucide-react";

const names = [
  'Ava R.', 'Ethan T.', 'Luna W.', 'Caleb R.', 'Aria K.',
  'Julian P.', 'Piper S.', 'Gabriel L.', 'Sofia G.', 'Alexander T.',
  'Mia M.', 'Logan D.', 'Isabella W.', 'Benjamin R.', 'Charlotte K.',
  'Oliver P.', 'Abigail S.', 'Elijah L.', 'Emily G.', 'William T.',
  'Harper M.', 'Lucas D.', 'Amelia W.', 'Mason R.', 'Evelyn K.',
  'Liam P.', 'Hannah S.', 'Noah L.', 'Abigail G.', 'Ethan T.',
];

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => (
  <motion.div
    className="fixed inset-0 bg-gradient-to-b from-green-300 to-green-500 flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    <motion.img
      src="/c2.png"
      alt="Cash Logo"
      className="w-32 h-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => setTimeout(onComplete, 800)} // Shortened delay
    />
  </motion.div>
);

const RecentWinner = () => {
  const [visible, setVisible] = useState(true);
  const [currentName, setCurrentName] = useState(names[0]);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized, showAlert:', window.innerHeight > 600);
      setShowAlert(window.innerHeight > 600);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentName(names[Math.floor(Math.random() * names.length)]);
        setVisible(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!showAlert) {
    console.log('showAlert is false, alert will not be rendered.');
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed top-4 inset-x-0 mx-auto max-w-xs text-black"
        >
          <Alert className="w-full max-w-xs bg-white shadow-md text-sm sm:text-base p-4 rounded-lg backdrop-blur text-black">
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-[#00D72E]" />
              <AlertDescription className="font-medium">
                <span className="text-[#00D72E] font-semibold">{currentName}</span> just received $750!
              </AlertDescription>
            </div>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const MainContent = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 29, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          return prev.minutes === 0 ? prev : { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAffiliateClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    window.location.href = "https://t.afftrackr.com/?f5c=7oalGrDCjNbVrVkEg195FAH60J1024fIvQJDRoz7h5U%3d&s1=";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center font-sans">
      <RecentWinner />

      <div className="w-full max-w-md space-y-4 px-4 mb-20">
        <br></br>
        <br></br>
        <div className="text-center space-y-2">
        <motion.div onClick={handleAffiliateClick} whileHover={{ scale: 1.02 }}>
          <img src="/logo.PNG" alt="Cash Rewards" className="w-full rounded-lg shadow-lg" />
        </motion.div>

        <div className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-semibold">
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>

        </div>


        <motion.div 
          className="p-4 bg-white shadow-lg rounded-lg space-y-3"
          onClick={handleAffiliateClick}
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="font-bold text-gray-800 text-lg flex items-center">
            Quick Start Guide <ChevronRight className="ml-2 w-4 h-4 text-green-500" />
          </h2>
          <ul className="space-y-2">
            {[
              { text: "Complete 2-3 required deals", highlight: "Earn up to $750" },
              { text: "Provide a valid email address", highlight: "For instant notification" },
              { text: "Ensure you are 18 years or older", highlight: "Required" }
            ].map((item, index) => (
              <li key={index} className="flex items-center bg-gray-50 p-2 rounded-lg">
                <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2">
                  ✓
                </div>
                <div>
                  <div className="font-medium text-gray-800 text-sm">{item.text}</div>
                  <div className="text-xs text-green-600">{item.highlight}</div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="fixed bottom-4 left-0 right-0 px-4 flex justify-center z-50">
  <motion.button
    onClick={handleAffiliateClick}
    className="w-full max-w-md bg-green-500 text-white py-3 rounded-full text-lg font-bold relative overflow-hidden flex items-center justify-center" // Add 'flex items-center'
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{
        scale: 2,
        opacity: [0, 0.2, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      }}
      style={{
        background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)"
      }}
    />
    <span className="mr-2">Start Earning Now</span> {/* Add margin to the right of the text */}
    <ChevronRight className="w-6 h-6 text-white" /> {/* ChevronRight icon */}
  </motion.button>
</div>


        <motion.div 
          className="p-4 bg-white shadow-lg rounded-lg space-y-3 mb-16"
          onClick={handleAffiliateClick}
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="font-bold text-gray-800 text-lg flex items-center">
            Common Questions <ChevronRight className="ml-2 w-4 h-4 text-green-500" />
          </h2>
          {[
            {
              q: "How long do the deals take?",
              a: "Quick 10-20 minute completion time per deal"
            },
            {
              q: "What are deals?",
              a: "Simple tasks like app downloads, surveys, or trial subscriptions with specific reward goals"
            },
            {
              q: "How many deals do I need?",
              a: "Complete as many as you want - rewards sent upon completion"
            }
          ].map((item, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-green-600 text-sm">{item.q}</h3>
              <p className="text-gray-700 mt-1 text-xs sm:text-sm">{item.a}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const SurveyLander = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AnimatePresence>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <MainContent />
      )}
    </AnimatePresence>
  );
};

export default SurveyLander;
