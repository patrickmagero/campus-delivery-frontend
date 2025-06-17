export default function Marketplace() {
  const cards = [
    {
      title: 'Fresh and Local',
      image: '/assets/freshandlocal.jpg',
      href: '#', // Replace with actual link later
    },
    {
      title: 'Explore Services',
      image: '/assets/exploreservices.jpg',
      href: '#',
    },
    {
      title: 'Wholesale Hub',
      image: '/assets/wholesalehub.jpg',
      href: '#',
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Explore Our Marketplace</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="relative h-64 rounded-xl overflow-hidden shadow-md group block"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="underline text-sm">Learn more</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
