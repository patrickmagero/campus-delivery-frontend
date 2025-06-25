export function filterItems(items, filters, priceRange, rating) {
  return items.filter((item) => {
    const { category, price, rating: itemRating } = item;

    const categoryMatch = Object.entries(filters).some(([group, list]) =>
      list.includes(category)
    );

    const priceMatch =
      typeof price === "number" &&
      price >= priceRange[0] &&
      price <= priceRange[1];

    const ratingMatch = rating ? itemRating >= rating : true;

    return categoryMatch && priceMatch && ratingMatch;
  });
}
