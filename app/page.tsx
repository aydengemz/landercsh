"use client";
import React from "react";

export default function Home() {
  const redirectLink = "https://glstrck.com/aff_c?offer_id=469&aff_id=11848&source=videos2";

  const handleClick = () => {
    window.location.href = redirectLink; // Redirect to specified URL
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex items-center justify-center"
      onClick={handleClick}
      style={{ cursor: "pointer", touchAction: "none" }} // Disable accidental zooming
    >
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 backdrop-blur-xl bg-opacity-50"></div>
      </div>

      {/* Responsive Full-Screen Video */}
      <div className="relative w-full h-full">
        <video
          src="/csh2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-full min-w-full max-h-screen max-w-screen object-contain"
          style={{
            aspectRatio: "718/1478",
          }}
        />
      </div>

      {/* Overlay to Ensure Clickability */}
      <div className="absolute top-0 left-0 w-full h-full z-10"></div>

      {/* Fallback Message for Unsupported Devices */}
      <noscript>
        <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white text-center z-10">
          Please enable JavaScript to view this content.
        </p>
      </noscript>
    </div>
  );
}
