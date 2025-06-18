import { Link } from 'react-router-dom';

export default function TopSellerServices() {
  const services = [
    {
      title: 'Laundry Pickup',
      description: 'Clean clothes delivered to your door.',
      image: '/assets/laundry.jpg',
      link: '/services/laundry',
    },
    {
      title: 'Tech Repair',
      description: 'Fix phones, laptops and more — fast!',
      image: '/assets/techrepair.jpg',
      link: '/services/tech-repair',
    },
    {
      title: 'Tutoring Services',
      description: 'Find top-rated academic support near you.',
      image: '/assets/tutoring.jpg',
      link: '/services/tutoring',
    },
    {
      title: 'Hair, Nail & Skin',
      description: 'Get pampered with grooming and beauty care.',
      image: '/assets/beauty.jpg',
      link: '/services/beauty',
    },
    {
      title: 'Fun & Event Planning',
      description: 'Plan parties and memorable experiences with ease.',
      image: '/assets/event.jpg',
      link: '/services/events',
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Seller Services</h2>

        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {services.map((service, idx) => (
            <Link
              to={service.link}
              key={idx}
              className="min-w-[250px] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
