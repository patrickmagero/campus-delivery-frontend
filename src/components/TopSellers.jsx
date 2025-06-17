import ProductCategoryCard from './ProductCategoryCard';

export default function TopSellers() {
  const categories = [
    {
      title: 'Foods and Drinks',
      items: [
        { label: 'Dairy Products', image: '/assets/dairyproducts.jpg' },
        { label: 'Bakery Items', image: '/assets/bakery-items.jpeg' },
        { label: 'Beverages', image: '/assets/beverage.jpeg' },
        { label: 'Snacks', image: '/assets/snacks.jpeg' },
      ],
    },
    {
      title: 'Fashion and Clothes',
      items: [
        { label: 'Men’s Clothing', image: '/assets/mens-clothing.jpeg' },
        { label: 'Women’s Clothing', image: '/assets/womens-clothing.jpeg' },
        { label: 'Accessories', image: '/assets/accessories.jpeg' },
        { label: 'Footwear', image: '/assets/footwear.jpeg' },
      ],
    },
    {
      title: 'Beauty and Cosmetics',
      items: [
        { label: 'Skincare', image: '/assets/skincare.jpeg' },
        { label: 'Makeup', image: '/assets/makeup.jpeg' },
        { label: 'Haircare', image: '/assets/haircare.jpeg' },
        { label: 'Fragrances', image: '/assets/fragrances.jpeg' },
      ],
    },
    {
      title: 'Electronics',
      items: [
        { label: 'Mobile Phones', image: '/assets/mobile-phones.jpeg' },
        { label: 'Home Appliances', image: '/assets/home-appliances.jpeg' },
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm text-gray-500">Our Products</p>
            <h2 className="text-3xl font-bold text-gray-800">Our Top Seller Products</h2>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
            View All Products
          </button>
        </div>

        {/* 👇 Horizontal scroll layout starts here */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat, index) => (
            <div key={index} className="min-w-[280px] flex-shrink-0">
              <ProductCategoryCard {...cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
