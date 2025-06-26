export function filterItems(items, filters, priceRange, selectedRating) {
  return items.filter((item) => {
    const price = parseFloat(item.price); // Ensure numeric comparison

    // 🟡 CATEGORY FILTER
    const selectedCategories = filters.category || [];
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    // 🟡 PRICE FILTER
    const matchesPrice =
      price >= priceRange[0] && price <= priceRange[1];

    // 🟡 RATING FILTER
    const matchesRating =
      selectedRating === null ||
      Math.floor(item.rating) === selectedRating;

    // ✅ Final condition
    return matchesCategory && matchesPrice && matchesRating;
  });
}
