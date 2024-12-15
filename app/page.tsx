"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './components/card';
import { Button } from './components/button';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface ProgressStepProps {
  number: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({ number, title, isActive, isCompleted }) => (
  <motion.div
    className="flex items-center mb-1 w-full pl-4"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: number * 0.1 }}
  >
    <motion.div
      className={`w-8 h-8 rounded-xl flex items-center justify-center mr-3
        ${isCompleted ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 
          isActive ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 
          'bg-gradient-to-r from-gray-100 to-gray-200'}
        text-white font-bold text-lg shadow-lg`}
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {isCompleted ? '✓' : <span className="text-teal-600">{number}</span>}
    </motion.div>
    <span className={`${isCompleted ? 'text-emerald-500' : isActive ? 'text-emerald-500' : 'text-gray-700'} 
      text-lg font-bold tracking-tight`}>
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
    <motion.div 
      className="flex items-center justify-center space-x-2 text-emerald-500 mb-2 bg-gradient-to-r from-emerald-50 to-teal-50 p-2 rounded-2xl shadow-lg backdrop-blur-sm p-4"
      whileHover={{ scale: 1.02 }}
    >
      <span className="text-xl font-bold tracking-wider">
        {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
      </span>
      <span className="text-md">remaining</span>
    </motion.div>
  );
};

const AffiliateButton = () => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative">
    <motion.div
      className="absolute -inset-1 bg-gradient-to-r from-emerald-400/40 to-teal-500/40 rounded-2xl blur-xl"
      animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
    />
    <a href="https://glstrck.com/aff_c?offer_id=1051&aff_id=11848&source=newgen" target="_blank" rel="noopener noreferrer">
      <Button className="relative z-10 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold py-4 px-10 rounded-2xl text-lg flex items-center gap-2 shadow-xl hover:from-emerald-500 hover:to-teal-600 transition-all duration-300">
        Claim Credit Now
        <ExternalLink className="w-5 h-5" />
      </Button>
    </a>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-emerald-50/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/path/to/your/background/image.svg')] opacity-30"></div>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
        <motion.div 
          className="w-full max-w-lg flex flex-col items-center gap-2" // Adjusted gap for smaller margin
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="mb-2 w-28 sm:w-36 md:w-48 rounded-full overflow-visible p-1 relative" // Increased size and reduced margin
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
          <Image
            src="/cash2.png" // Ensure this path is correct and accessible
            alt="Cash App Logo"
            width={150}
            height={150}
            className="object-cover drop-shadow-xl"
          />
                </motion.div>

          <div className="relative text-center w-full max-w-sm py-3">
            <h1 className="relative z-10 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 mb-2">
              $750 Cash App!
            </h1>
          </div>

          <CountdownTimer />

          <Card className="w-full bg-gradient-to-br from-white to-gray-50 rounded-2xl mb-4 border border-emerald-100 shadow-xl">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                3 Simple Steps:
              </h2>
              <ProgressStep number={1} title="Enter Basic Info" isActive={false} isCompleted={false} />
              <ProgressStep number={2} title="Complete 3-5 Deals" isActive={false} isCompleted={false} />
              <ProgressStep number={3} title="Receive Your $750" isActive={false} isCompleted={false} />
            </CardContent>
          </Card>

          <AffiliateButton />

          <div className="flex items-center justify-center mt-4">
          <Image
            src="/ver.png" // Ensure this path is correct and accessible
            alt="Verified by TikTok"
            width={32}
            height={32}
            className="w-8 h-8 mr-2"
          />
            <span className="text-sm text-gray-600">Verified by TikTok</span>
          </div>

          <hr className="my-4 w-full border-t border-gray-300" />

          <div className="mt-6 text-sm text-gray-600">
            <h3 className="font-bold text-emerald-600">Privacy Policy</h3>
            <p>(a) When you opt-into the service, we will send you an email to confirm your signup.</p>
            <p>(b) Our message service will be used for marketing communications (including company updates, events, sales, shopping cart reminders, etc.).</p>
            <p>(c) You can cancel the email service at any time. Just text &quot;STOP&quot; to the short code.</p>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <a href="/privacy-policy" className="underline text-teal-500">Privacy Policy</a> | <a href="/terms-of-service" className="underline text-teal-500">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}