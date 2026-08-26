"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProjectImageSlider({
  image,
  video,
  title,
  background,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    }
  }, []);
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-3xl`}
    >
      {video ? (
        <video
          ref={videoRef}
          className="h-full w-full p-5 bg-gray-100 rounded-md"
          controls
          controlsList="nodownload"
          disablePictureInPicture
          playsInline
          muted
          preload="metadata"
          poster={image}
          aria-label={`${title} project video`}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          alt={title}
          src={image}
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          className=" rounded-md"
          priority
        />
      )}
    </div>
  );
}
