"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertDescription } from "./components/alert";
import { DollarSign, ChevronRight } from "lucide-react";

const names = [
  'Ava R.', 'Ethan T.', 'Luna W.', 'Caleb R.', 'Aria K.',
  'Julian P.', 'Piper S.', 'Gabriel L.', 'Sofia G.', 'Alexander T.',
  'Mia M.', 'Logan D.', 'Isabella W.', 'Benjamin R.', 'Charlotte K.',
  'Oliver P.', 'Abigail S.', 'Elijah L.', 'Emily G.', 'William T.',
  'Harper M.', 'Lucas D.', 'Amelia W.', 'Mason R.', 'Evelyn K.',
  'Liam P.', 'Hannah S.', 'Noah L.', 'Abigail G.', 'Ethan T.',
];

const RecentWinner = () => {
  const [visible, setVisible] = useState(true);
  const [currentName, setCurrentName] = useState(names[0]);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const handleResize = () => {
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

  if (!showAlert) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed bottom-4 inset-x-0 mx-auto max-w-xs z-50"
          onClick={() =>
            (window.location.href =
              "https://usetrk.com/aff_c?offer_id=1232&aff_id=11848")
          }
        >
          <Alert className="w-full max-w-xs bg-white shadow-md text-sm sm:text-base p-4 rounded-lg backdrop-blur text-black">
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-[#00D72E]" />
              <AlertDescription className="font-medium">
                <span className="text-[#00D72E] font-semibold">
                  {currentName}
                </span>{" "}
                just received $750!
              </AlertDescription>
            </div>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MainContent = () => {
  const handleAffiliateClick = () => {
    const link2 =
      "https://t.afftrackr.com/?nc2u=pJELZ6g5PmK8Joi6RGG86EsaW8QXV0XGvQJDRoz7h5U%3d&s1=";

    // Redirect to link2 only:
    window.location.href = link2;
  };

  return (
    <div
      className="min-h-screen bg-[#F7FFF9] flex flex-col items-center font-sans"
      onClick={handleAffiliateClick}
    >
      <RecentWinner />

      {/* Top Banner */}
      <div className="w-full bg-[#1FD5EC] py-3 px-7 flex items-center justify-center space-x-4 shadow-md">
        <span className="text-white font-bold text-sm uppercase">
          VERIFIED TIKTOK SPECIAL OFFER
        </span>
        <img src="/ver.png" alt="Verified" className="h-5" />
      </div>

      {/* Logo and Text Section */}
      <div className="w-full max-w-md px-2 py-0 flex items-center justify-center">
        <img
          src="/cashapp-logo.png"
          alt="Cash App Logo"
          className="w-6/7 h-auto object-contain"
        />
      </div>

      {/* Quick Start Guide */}
      <div className="w-full max-w-md px-6 relative mt-2">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-4 py-1 rounded-full z-10">
          <h2 className="font-bold text-s text-white">Quick Start Guide</h2>
        </div>
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          whileHover={{ scale: 1.01 }}
        >
          <ul className="space-y-4">
            {[
              "Click the button below ⚡",
              "Enter your email & info 📝",
              "Complete recommended deals ✍️",
              "Claim reward & repeat 😊",
            ].map((text, index) => (
              <li key={index} className="flex items-center">
                <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                  ✓
                </div>
                <div className="font-bold text-gray-800 text-sm">{text}</div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Get Yours Now Button */}
      <button
        onClick={handleAffiliateClick}
        className="w-4/5 max-w-md bg-gradient-to-r from-[#00D632] to-black text-white py-3 rounded-xl text-lg font-bold mt-4 mb-4 flex items-center justify-center shadow-lg hover:bg-transparent hover:text-[#00D632] transition duration-300"
      >
        <span className="mr-2">GET YOURS NOW</span>
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Image */}
      <div className="w-full max-w-md px-6 mb-6" onClick={handleAffiliateClick}>
        <img
          src="/cshr.jpg"
          alt="Cash Rewards"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

const SurveyLander = () => {
  return <MainContent />;
};

export default SurveyLander;
