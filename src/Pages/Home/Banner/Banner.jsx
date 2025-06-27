import { useEffect, useState } from "react";

const images = [
  "public/Banner01.png",
  "public/Banner02.png",
  "public/Banner03.png"
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center mt-22 px-4">
      <div className="w-[80%] max-w-6xl h-[200px] sm:h-[300px] md:h-[400px] lg:h-[480px] xl:h-[520px] relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 flex items-center justify-center">

        {/* Images */}
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Banner ${index + 1}`}
            loading="lazy"
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            } h-full w-auto`}
          />
        ))}

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                current === index ? "bg-[#FFAC1C]" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
