import { motion } from "framer-motion";

const PlaceholderCard = () => (
  <motion.div
    className="h-56 bg-gray-100 rounded-2xl border border-gray-300 shadow-sm"
    animate={{ opacity: [0.4, 1, 0.4] }}
    transition={{
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export default function EmptyProductGrid({ count = 6 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <PlaceholderCard key={i} />
      ))}
    </>
  );
}
