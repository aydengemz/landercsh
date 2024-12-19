"use client";
import React from "react";

export default function LandingPage() {
  const redirectLink = "https://t.afftrackr.com/?f5c=7oalGrDCjNbVrVkEg195FAH60J1024fIvQJDRoz7h5U%3d&s1=";

  const handleClick = () => {
    window.location.href = redirectLink;
  };

  return (
    <div
      className="w-screen min-h-screen relative flex items-center justify-center cursor-pointer"
      onClick={handleClick}
      role="button"
      aria-label="Redirect to landing page"
    >
      {/* Background Color */}
      <div className="fixed inset-0 bg-black" />

      {/* Safe Area for Background Image */}
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
        <img
          src="/csh8.png"
          alt="Background"
          className="min-w-full min-h-full object-cover"
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
