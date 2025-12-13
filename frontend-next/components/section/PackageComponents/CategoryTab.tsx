"use client";
import { motion } from "framer-motion";

type CategoryTabProps = {
    category: any;
    isActive: boolean;
    onClick: () => void;
}
const CategoryTab = ({ category, isActive, onClick }: CategoryTabProps) => {
    const Icon = category.icon;
  
    return (
      <motion.button
        className={`category-tab ${isActive ? "active" : ""}`}
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        style={{
          "--category-color": category.color,
        } as React.CSSProperties}
      >
        <div className="category-tab-icon">
          <Icon className="w-5 h-5" />
        </div>
        <span className="category-tab-label">{category.title}</span>
        {isActive && (
          <motion.div
            className="category-tab-indicator"
            layoutId="categoryIndicator"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </motion.button>
    );
  };

export default CategoryTab;