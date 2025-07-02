export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              About Dr. Serena Blake
            </h2>
            <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-light text-teal-600 mb-2">8+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-light text-teal-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Client Sessions</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Dr. Serena Blake - Professional headshot of a blonde woman in white medical attire with arms crossed, smiling confidently"
                className="rounded-lg shadow-2xl w-96 h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}