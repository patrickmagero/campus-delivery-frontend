export default function ServiceFilterSidebar({ selectedCategory, setSelectedCategory }) {
  const categories = [
    "Cleaning",
    "Laundry",
    "Tutoring",
    "Repairs",
    "Transport",
    "Other",
  ];

  const handleSelect = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="w-60 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Filter Services</h2>

      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => handleSelect(cat)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
