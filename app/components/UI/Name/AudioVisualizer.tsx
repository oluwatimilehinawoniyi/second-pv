"use client";
import { useRef } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import { Pause, Play } from "lucide-react";

const Visualizer = () => {
  const containerRef = useRef(null);
  const { wavesurfer, isPlaying, isReady, currentTime } = useWavesurfer({
    container: containerRef,
    url: "/audio/name.mp3",
    height: 20,
    waveColor: "#816241",
    progressColor: "#2e2e2e",
    interact: false,
  });

  const onPlayPause = () => {
    wavesurfer?.playPause();
  };

  return (
    <div className="flex w-full items-center gap-4 overflow-hidden rounded-md bg-[#816241] bg-[rgb(var(--foreground-rgb))] px-2 py-1 md:w-3/5">
      <button
        className="block *:fill-[rgb(var(--background-rgb))]"
        onClick={onPlayPause}
      >
        {!isPlaying ? (
          <Play size={18} className="" fill="red" />
        ) : (
          <Pause size={18} />
        )}
      </button>
      <div ref={containerRef} className="w-full"></div>
    </div>
  );
};

export default Visualizer;
