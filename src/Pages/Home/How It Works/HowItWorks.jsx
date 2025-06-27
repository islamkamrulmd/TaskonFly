export default function HowItWorks() {
    const steps = [
      {
        title: "Booking Pick & Drop",
        icon: "Icons/Booking.png",
        description:
          "Easily schedule a pickup and drop-off from your location. Our rider will come to your doorstep, pick up the parcel, and ensure it reaches the destination on time. Designed for ultimate convenience and efficiency, saving both your time and effort.",
      },
      {
        title: "Cash on Delivery",
        icon: "Icons/Cod.png",
        description:
          "Offer your customers a flexible payment option with our secure cash-on-delivery service. We collect cash during delivery and deposit it safely to your account, building trust with your clients and increasing your order success rate.",
      },
      {
        title: "Delivery Hub",
        icon: "Icons/Hub.png",
        description:
          "Your parcels are routed through our strategically located hubs for faster processing and distribution. These hubs ensure package safety, real-time tracking, and optimized delivery routes for quicker delivery outcomes.",
      },
      {
        title: "Booking SME & Corporate",
        icon: "Icons/SME.png",
        description:
          "Special solutions tailored for SMEs and corporate clients. Schedule regular pickups, access volume discounts, and enjoy business-grade support. Designed to meet the high expectations and logistical needs of enterprise customers.",
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <img
                src={`public/${step.icon}`}
                alt={`${step.title} icon`}
                className="h-12 w-12 mb-3"
              />
              <h3 className="text-lg font-semibold text-[#FFAC1C] mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm text-justify leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  