export default function FeatureHighlights() {
    const features = [
      {
        title: "Live Parcel Tracking",
        description:
          "Track your parcels in real-time with detailed updates from pickup to delivery. Stay informed every step of the way.",
        img: "/public/Why-choose-us/live.jpg",
      },
      {
        title: "100% Safe Delivery",
        description:
          "We ensure every parcel is handled with utmost care and delivered securely to its destination, without compromise.",
        img: "/public/Why-choose-us/safe.jpg",
      },
      {
        title: "24/7 Call Support",
        description:
          "Need help? Our dedicated support team is available around the clock to assist with your delivery or queries.",
        img: "/public/Why-choose-us/call.jpg",
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Why Choose Us
        </h2>
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex items-center gap-8"
            >
              {/* Image */}
              <div className="w-28 h-28 flex-shrink-0">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
  
              {/* Dotted Divider */}
              <div className="h-24 border-l-2 border-dotted border-gray-300" />
  
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#FFAC1C] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base text-justify leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  