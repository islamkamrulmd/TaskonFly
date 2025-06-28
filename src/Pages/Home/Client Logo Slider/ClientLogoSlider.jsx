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

            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 py-2">
                Our Trusted Clients
            </h2>
            <div className="relative">
                {/* Left Gradient Overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gray-800 to-transparent z-10 pointer-events-none" />

                {/* Right Gradient Overlay */}
                <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gray-800 to-transparent z-10 pointer-events-none" />

                <Marquee
                    speed={40}
                    gradient={false}
                    direction="right"
                    pauseOnHover={true}
                    autoFill={true}
                >
                    {clientLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Client ${index + 1}`}
                            className="h-5 w-auto px-4 opacity-80 hover:opacity-100 transition duration-300"
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
