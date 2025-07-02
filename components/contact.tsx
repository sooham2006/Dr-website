'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  preferredTime?: string;
  agreeToContact?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what brings you here';
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required';
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agreeToContact: false,
      });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg p-12 shadow-lg">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h2 className="text-3xl font-light text-gray-800 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600">
              Your message has been sent successfully. I'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to begin your journey? Reach out to schedule your free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={errors.name ? 'border-red-500' : ''}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={errors.phone ? 'border-red-500' : ''}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={errors.email ? 'border-red-500' : ''}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  What brings you here? *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={errors.message ? 'border-red-500' : ''}
                  placeholder="Tell me a bit about what you'd like to work on..."
                  rows={4}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred time to reach you *
                </label>
                <Input
                  id="preferredTime"
                  type="text"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  className={errors.preferredTime ? 'border-red-500' : ''}
                  placeholder="e.g., Weekday mornings, Weekend afternoons"
                />
                {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToContact"
                  checked={formData.agreeToContact}
                  onCheckedChange={(checked) => handleInputChange('agreeToContact', checked as boolean)}
                  className={errors.agreeToContact ? 'border-red-500' : ''}
                />
                <label htmlFor="agreeToContact" className="text-sm text-gray-600 leading-relaxed">
                  I agree to be contacted via phone or email to discuss scheduling and answer any questions about therapy services. *
                </label>
              </div>
              {errors.agreeToContact && <p className="text-red-500 text-sm">{errors.agreeToContact}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg rounded-lg transition-colors duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-light text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-teal-600 mt-1 w-5 h-5" />
                  <div>
                    <div className="font-medium text-gray-800">Office Location</div>
                    <div className="text-gray-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-teal-600 mt-1 w-5 h-5" />
                  <div>
                    <div className="font-medium text-gray-800">Phone</div>
                    <div className="text-gray-600">(323) 555-0192</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="text-teal-600 mt-1 w-5 h-5" />
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-gray-600">serena@blakepsychology.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-teal-600 mt-1 w-5 h-5" />
                  <div>
                    <div className="font-medium text-gray-800">Office Hours</div>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div><strong>In-Person:</strong> Tue & Thu, 10 AM–6 PM</div>
                      <div><strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-800 mb-3">Free Consultation</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                I offer a complimentary 15-minute phone consultation to discuss your needs and see if we're a good fit. 
                This is a great opportunity to ask questions and learn more about my approach to therapy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}