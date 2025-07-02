'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, I don't accept insurance directly. However, I provide a superbill that you can submit to your insurance company for potential reimbursement. This allows me to focus entirely on your care without insurance company restrictions on treatment."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes! I offer virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy is just as effective as in-person sessions and provides the convenience of receiving care from your own comfortable space."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for cancellations or rescheduling. This policy helps ensure that appointment times remain available for all clients and allows me to potentially offer the slot to someone else who may need it."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are 50 minutes long, while couples sessions are typically 75 minutes. This gives us adequate time to explore your concerns thoroughly while maintaining appropriate boundaries."
    },
    {
      question: "What should I expect in our first session?",
      answer: "Our first session will focus on getting to know you and understanding your goals for therapy. We'll discuss your current challenges, relevant history, and work together to create a treatment plan that feels right for you. There's no pressure to share more than you're comfortable with."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Common questions about therapy and my practice
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:text-teal-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}