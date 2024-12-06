"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Clock, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription } from './components/alert';
import { Card, CardContent } from './components/card';
import { Button } from './components/button';

const names = [
  'Ava R.', 'Ethan T.', 'Luna W.', 'Caleb R.', 'Aria K.',
  'Julian P.', 'Piper S.', 'Gabriel L.', 'Sofia G.', 'Alexander T.',
  'Mia M.', 'Logan D.', 'Isabella W.', 'Benjamin R.', 'Charlotte K.',
  'Oliver P.', 'Abigail S.', 'Elijah L.', 'Emily G.', 'William T.',
  'Harper M.', 'Lucas D.', 'Amelia W.', 'Mason R.', 'Evelyn K.',
  'Liam P.', 'Hannah S.', 'Noah L.', 'Abigail G.', 'Ethan T.',
];

interface ProgressStepProps {
  number: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({ number, title, isActive, isCompleted }) => (
  <motion.div
    className="flex items-center mb-2 w-full pl-4"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.25, delay: number * 0.08 }}
  >
    <motion.div
      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-6
        ${isCompleted ? 'bg-[#00D72E]' : isActive ? 'bg-[#00D72E]' : 'bg-white'}
        text-black font-bold text-base sm:text-lg shadow-md`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isCompleted ? '✓' : number}
    </motion.div>
    <span className={`${isCompleted ? 'text-[#00D72E]' : isActive ? 'text-[#00D72E]' : 'text-black'} text-lg sm:text-xl font-semibold`}>
      {title}
    </span>
  </motion.div>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            clearInterval(timer);
            return prev;
          }
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div className="flex items-center justify-center space-x-2 text-[#00D72E] mb-4 bg-white p-3 rounded-lg">
      <Clock className="w-5 h-5" />
      <span className="text-lg font-bold">
        {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
      </span>
      <span>remaining</span>
    </motion.div>
  );
};

const AffiliateButton = () => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative">
    <motion.div
      className="absolute -inset-1 bg-gradient-to-r from-[#00D72E]/40 to-[#00D72E]/40 rounded-lg blur-lg"
      animate={{ scale: [1, 1.02, 1], opacity: [0.5, 0.7, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
    <a href="https://glstrck.com/aff_c?offer_id=1145&aff_id=11848&source=lander2" target="_blank" rel="noopener noreferrer">
      <Button className="relative z-10 bg-gradient-to-r from-[#00D72E] to-[#00D72E] text-black font-semibold py-5 px-14 rounded-full text-lg flex items-center gap-2 shadow-lg hover:from-[#00D72E] hover:to-[#00D72E]">
        Claim Cash Credit
        <ExternalLink className="w-6 h-6" />
      </Button>
    </a>
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-white font-montserrat">
      <RecentWinner />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-white to-white"></div>
        <div
          className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E`)] opacity-20"
        ></div>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center justify-center p-3 sm:p-6">
        <motion.div className="w-full max-w-md flex flex-col items-center gap-2">
          <div className="mb-3 w-28 sm:w-32 md:w-40 rounded-full overflow-visible p-2 relative">
            <img
              src="https://github.com/aydengemz/landerTemp/blob/main/app/cash2.png?raw=true"
              alt="Cash App Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative text-center w-full max-w-xs py-2">
            <h1 className="relative z-10 text-3xl font-bold text-black mb-2">
             $750 Cash Credit!
            </h1>
          </div>

          <CountdownTimer />

          <Card className="w-full bg-white rounded-xl mb-5 border-gray-700">
            <CardContent className="p-5 text-center">
              <h2 className="text-2xl font-bold text-black mb-3">
                3 Simple Steps:
              </h2>
              <ProgressStep number={1} title="Enter Basic Info" isActive={false} isCompleted={false} />
              <ProgressStep number={2} title="Complete 3-5 Deals" isActive={false} isCompleted={false} />
              <ProgressStep number={3} title="Receive Your $750" isActive={false} isCompleted={false} />
            </CardContent>
          </Card>

          <AffiliateButton />
        </motion.div>
      </div>
    </div>
  );
}