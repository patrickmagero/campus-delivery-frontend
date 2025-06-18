// src/components/AboutDelivery.jsx
import { motion } from 'framer-motion';
import { FaClock, FaBoxOpen, FaShippingFast } from 'react-icons/fa';

export default function AboutDelivery() {
  const items = [
    {
      icon: <FaClock className="text-blue-600 text-4xl mb-4" />,
      title: 'How long to wait?',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed aenean purus blandit dapibus sed aliquet bibendum diam sed.',
    },
    {
      icon: <FaBoxOpen className="text-blue-600 text-4xl mb-4" />,
      title: 'What will they bring?',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed aenean purus blandit dapibus sed aliquet bibendum diam sed.',
    },
    {
      icon: <FaShippingFast className="text-blue-600 text-4xl mb-4" />,
      title: 'How will they bring',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed aenean purus blandit dapibus sed aliquet bibendum diam sed.',
    },
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">About Delivery</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-md bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
