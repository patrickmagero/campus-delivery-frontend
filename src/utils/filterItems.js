export function filterItems(products, selectedFilters, priceRange, selectedRating) {
  return products.filter((product) => {
    const normalizedProductCategory = product.category?.trim().toLowerCase();
    const selectedCategories = selectedFilters.category || [];

    // ✅ CATEGORY match
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories
        .map((c) => c.trim().toLowerCase())
        .includes(normalizedProductCategory);

    // ✅ PRICE match
    const price = parseFloat(product.price);
    const priceMatch = price >= priceRange[0] && price <= priceRange[1];

    // ✅ RATING match
    const ratingMatch =
      !selectedRating || Math.floor(product.rating) === selectedRating;

    // Debug output:
    console.log(`[DEBUG] ${product.name} => cat:${categoryMatch}, price:${priceMatch}, rating:${ratingMatch}`);

    return categoryMatch && priceMatch && ratingMatch;
  });
}
