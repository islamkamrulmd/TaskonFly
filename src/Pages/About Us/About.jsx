export default function About() {
    const sections = [
      {
        title: "Who We Are",
        description:
          "TaskonFly is a dynamic courier service company dedicated to revolutionizing last-mile logistics in Bangladesh. With an innovative approach and a tech-driven platform, we ensure reliable, fast, and affordable deliveries for individuals, businesses, and eCommerce platforms.",
      },
      {
        title: "Our Mission",
        description:
          "Our mission is to empower businesses and individuals by offering seamless logistics solutions that simplify delivery, reduce operational stress, and increase customer satisfaction. We aim to make every parcel matter with timely and safe delivery.",
      },
      {
        title: "Our Vision",
        description:
          "To become Bangladesh's most reliable and innovative logistics brand that connects people, businesses, and communities with speed and trust. We envision a future where delivery is frictionless, eco-conscious, and fully digital.",
      },
      {
        title: "Our Values",
        description:
          "Integrity, reliability, and innovation are the core of everything we do. We believe in strong customer relationships, fair pricing, and transparent service. At TaskonFly, your parcel is not just a delivery — it's a commitment.",
      },
    ];
  
    return (
      <section className="max-w-6xl mx-auto px-4 py-16 pt-25">
        <h2 className="text-3xl font-bold text-[#FFAC1C] text-center mb-12 drop-shadow">
          About TaskonFly
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#FFAC1C] text-center mb-3 drop-shadow-sm">
                {item.title}
              </h3>
              <p className="text-gray-800 text-sm text-justify leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  