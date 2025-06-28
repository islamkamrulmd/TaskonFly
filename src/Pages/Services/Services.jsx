export default function Services() {
    const services = [
      {
        title: "Express & Standard Delivery",
        description:
          "Choose between lightning-fast express or economical standard delivery options. Our team ensures timely and secure shipment of your parcels across cities. Express delivery is ideal for urgent needs, while standard delivery balances speed and affordability. Enjoy door-to-door convenience with real-time tracking. Perfect for eCommerce, gifts, and personal use.",
        icon: "icons/standard.png",
      },
      {
        title: "Nationwide Delivery",
        description:
          "Our wide-reaching network covers every district in Bangladesh. Whether you're in a bustling city or a remote village, we ensure reliable delivery. With verified routes and professional riders, your parcels reach safely. Service is available for businesses and individuals. Experience uninterrupted logistics coverage from anywhere to everywhere.",
        icon: "icons/nationwide.png",
      },
      {
        title: "Fulfillment Solution",
        description:
          "Let us handle your order management, inventory storage, and shipment—all under one roof. Ideal for online sellers and startups looking to scale without hassle. We pack and ship products directly from our warehouse, saving you time and effort. Gain access to efficient backend operations and reduce overhead costs. Focus on growing your business, we'll manage the rest.",
        icon: "icons/fulfillment.png",
      },
      {
        title: "Cash on Delivery",
        description:
          "Boost your sales with our trusted cash-on-delivery system. We collect payment from your customers at the doorstep and transfer it to your account. Our transparent COD process builds customer trust and reduces online payment barriers. Safe handling, real-time updates, and quick settlements included. Serve more customers with flexible payment options.",
        icon: "icons/cash.png",
      },
      {
        title: "Corporate Service",
        description:
          "Tailored logistics support for businesses of all sizes. From document delivery to bulk shipment, our corporate services ensure professionalism and punctuality. Get a dedicated account manager, volume discounts, and monthly invoicing. Ideal for banks, law firms, and service providers. We become your reliable delivery partner with high performance standards.",
        icon: "icons/corporate.png",
      },
      {
        title: "Parcel Return",
        description:
          "Make returns hassle-free with our reverse logistics support. Whether a customer cancels or the parcel is undelivered, we return it promptly and securely. Minimize your losses and improve customer satisfaction. We handle coordination, pickup, and delivery of returns across all zones. Essential for any eCommerce or subscription-based business.",
        icon: "icons/return.png",
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-12 pt-22">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <img
                src={`public/${service.icon}`}
                alt={`${service.title} icon`}
                className="h-12 w-12 mb-3"
              />
              <h3 className="text-lg font-semibold text-[#FFAC1C] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm text-justify leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  