export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn practical strategies to manage anxiety and stress through evidence-based techniques. We'll work together to identify triggers, develop coping mechanisms, and create a personalized toolkit for lasting relief.",
      image: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Person practicing mindfulness and relaxation"
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your connections through improved communication and understanding. Whether you're working on romantic relationships, family dynamics, or friendships, we'll focus on building healthier patterns together.",
      image: "https://images.pexels.com/photos/8957561/pexels-photo-8957561.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Couple having a meaningful conversation"
    },
    {
      title: "Trauma Recovery",
      description: "Navigate the path to healing with compassionate, trauma-informed care. Using proven therapeutic approaches, we'll work at your pace to process experiences, build resilience, and reclaim your sense of safety and strength.",
      image: "https://images.pexels.com/photos/6195124/pexels-photo-6195124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Supportive therapy session environment"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">How I Help</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized therapeutic services tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-light text-gray-800 mb-4">Session Information</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-light text-teal-600 mb-2">$200</div>
                <div className="text-gray-600">Individual Session</div>
              </div>
              <div>
                <div className="text-3xl font-light text-teal-600 mb-2">$240</div>
                <div className="text-gray-600">Couples Session</div>
              </div>
              <div>
                <div className="text-lg font-medium text-gray-800 mb-2">Both Available</div>
                <div className="text-gray-600">In-Person & Virtual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}