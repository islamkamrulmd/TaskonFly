import Marquee from "react-fast-marquee";

export default function ClientLogoSlider() {
  const clientLogos = [
    "/Brands/amazon.png",
    "/Brands/amazon_vector.png",
    "/Brands/casio.png",
    "/Brands/moonstar.png",
    "/Brands/randstad.png",
    "/Brands/start.png",
    "/Brands/start-people.png",
  ];

  return (
    <section className="relative bg-gray-800 py-4 mt-10 rounded-xl mx-4 md:mx-10 shadow-md overflow-hidden">
      <h2 className="text-lg md:text-xl font-semibold text-[#FFAC1C] text-center mb-3">
        Our Trusted Clients
      </h2>

      {/* Marquee wrapper with fade edges */}
      <div className="relative">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gray-800 to-transparent z-10 pointer-events-none rounded-l-xl" />
        
        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gray-800 to-transparent z-10 pointer-events-none rounded-r-xl" />

        <Marquee
          speed={40}
          gradient={false} // We'll use custom gradients instead
          direction="right"
          pauseOnHover={true}
          className="flex items-center"
        >
          {clientLogos.map((logo, index) => (
            <div key={index} className="mx-5">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-8 w-auto opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
