import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-light mb-4">Dr. Serena Blake, PsyD</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Licensed Clinical Psychologist providing compassionate, evidence-based therapy 
              for anxiety, relationships, and trauma recovery.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact Information</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(323) 555-0192</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>serena@blakepsychology.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5" />
                <span>1287 Maplewood Drive<br />Los Angeles, CA 90026</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Office Hours</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div><strong>In-Person:</strong> Tue & Thu, 10 AM–6 PM</div>
              <div><strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Dr. Serena Blake Psychology. All rights reserved.</p>
          <p className="mt-2">Licensed Clinical Psychologist • California License #PSY12345</p>
        </div>
      </div>
    </footer>
  );
}