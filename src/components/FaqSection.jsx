import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How do I place an order?',
    answer: 'You can place an order directly through our website or mobile app. Simply browse, select, and checkout.',
  },
  {
    question: 'Can I cancel or change my order?',
    answer: 'Yes, orders can be modified within 15 minutes after placing them. Visit your orders page to manage it.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept MPesa, credit/debit cards, and campus wallet credits.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">FAQs</h2>
        <p className="text-center text-xl font-semibold mb-10">
          Questions? <span className="text-yellow-600">Look here</span>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Accordion */}
          <div className="md:col-span-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border rounded-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Card */}
          <motion.div
            className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaRegQuestionCircle className="text-4xl text-yellow-600 mb-4" />
            <h4 className="text-lg font-semibold mb-2">You have different questions?</h4>
            <p className="text-sm text-gray-600 mb-4">
              Reach out to us directly. We’re here to answer any questions.
            </p>
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
