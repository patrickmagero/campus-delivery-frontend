export default function ProductCategoryCard({ title, items = [], buttonLink }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between min-h-[300px]">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden mb-2 transform transition duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-yellow-400/40">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>

      <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
        View All Products
      </button>
    </div>
  );
}
