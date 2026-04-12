import { useEffect, useRef, useState } from "react";

import HeroSection from "../component/wedding/HeroSection";
import PhotoSlider from "../component/wedding/PhotoSlider";
import SacredBlessing from "../component/wedding/SacredBlessing";
import OurStory from "../component/wedding/OurStory";
import WeddingEvents from "../component/wedding/WeddingEvents";
import VenueSection from "../component/wedding/VenueSection";
import FamilyInvitation from "../component/wedding/FamilyInvitation";
import ClosingSection from "../component/wedding/ClosingSection";
import VideoSection from "@/component/wedding/VideoSection";

import music from "@/assets/music.mp3";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // ✅ Play music (works because user already clicked on Landing page)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    audio.play()
      .then(() => setIsPlaying(true))
      .catch((err) => {
        console.log("Audio play failed:", err);
      });
  }, []);

  // ✅ Toggle music
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main className="overflow-x-hidden relative">

      {/* 🎵 GLOBAL AUDIO (clean, no hacks) */}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      {/* 🎵 MUSIC CONTROL BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-5 right-5 z-50 px-4 py-2 bg-black/40 text-white rounded-full backdrop-blur-md hover:bg-black/60 transition"
      >
        {isPlaying ? "🔇" : "🎵"}
      </button>

      {/* 📄 PAGE CONTENT */}
      <HeroSection />
      <VideoSection />
      <PhotoSlider />
      <SacredBlessing />
      <OurStory />
      <WeddingEvents />
      <VenueSection />
      <FamilyInvitation />
      <ClosingSection />

    </main>
  );
};

export default Index;