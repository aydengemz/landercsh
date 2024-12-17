"use client"
import React from "react";

export default function LandingPage() {
  const redirectLink = "https://t.afftrackr.com/?yte=ctpq4NGRdY9H9EqNoDVAUY5bKl3pvaM5vQJDRoz7h5U%3d&s2=withcard";

  const handleClick = () => {
    window.location.href = redirectLink;
  };

  return (
    <div
      className="w-full min-h-screen relative flex items-center justify-center cursor-pointer pt-16 md:pt-24"
      onClick={handleClick}
    >
      {/* Gradient Background */}
      <div className="fixed inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, rgba(76, 0, 255, 0.15), rgba(255, 0, 128, 0.15))"
          }}
        />
        <div className="absolute inset-0 backdrop-blur-2xl bg-black bg-opacity-30" />
      </div>

      {/* Background Image */}
      <div className="fixed inset-0">
        <img
          src="/csh2.png"
          alt="Background"
          className="w-full h-full object-contain md:object-cover object-top"
        />
      </div>

      {/* Clickable Overlay */}
      <div className="fixed inset-0 z-10" />

      {/* NoScript Fallback */}
      <noscript>
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-center z-20">
          Please enable JavaScript to view this content.
        </div>
      </noscript>
    </div>
  );
}