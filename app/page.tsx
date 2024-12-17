"use client";
import React, { useRef, useEffect } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const redirectLink = "https://glstrck.com/aff_c?offer_id=469&aff_id=11848&source=1video25+";

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.log("Autoplay prevented:", error);
      }
    };
    playVideo();
  }, []);

  const handleClick = () => {
    window.location.href = redirectLink;
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex items-center justify-center"
      onClick={handleClick}
      style={{ cursor: "pointer", touchAction: "none" }}
    >
      {/* Enhanced background effect with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, rgba(76, 0, 255, 0.15), rgba(255, 0, 128, 0.15))",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-2xl bg-opacity-30 bg-black"></div>
      </div>

      {/* Responsive Full-Screen Video with Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Video glow effect container */}
        <div className="relative">
          <div 
            className="absolute inset-0 -m-4 rounded-3xl opacity-50"
            style={{
              filter: "blur(20px)",
            }}
          />
          <video
            ref={videoRef}
            src="/csh2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="relative z-10 max-h-screen max-w-screen object-contain"
            style={{
              aspectRatio: "718/1478",
              height: "100vh",
            }}
          />
        </div>
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