"use client";

import { Hero } from "./hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { EditedVideos } from "./edited-videos";
import { EditedShorts } from "./edited-shorts";
import { Channels } from "./channels";
import { Calendly } from "./calendly";
import { Footer } from "./footer";

export const Landing = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div>
      <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
        {/* hero */}
        <Hero />
        {/* edited videos */}
        <EditedVideos />
        {/* edited  videos shorts */}
        <EditedShorts />
        {/* channels worked with */}
        <Channels />
        {/* calendly booking page */}
        <Calendly />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};
