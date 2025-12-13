import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";


type PackageCardProps = {
    pkg: any;
    index: string;
    categoryColor: string;
}

const PackageCard = ({ pkg, index, categoryColor }: PackageCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <motion.div
        className={`package-card ${pkg.popular ? "popular" : ""} ${pkg.isCustom ? "custom" : ""}`}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: Number(index) * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          "--card-accent": categoryColor,
        } as React.CSSProperties}
      >
        {/* Popular Badge */}
        {pkg.popular && (
          <div className="package-popular-badge">
            <Star className="w-3 h-3" />
            <span>Most Popular</span>
          </div>
        )}
  
        {/* Card Glow */}
        <motion.div
          className="package-card-glow"
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
        />
  
        {/* Top Accent Line */}
        <div className="package-card-accent" />
  
        {/* Card Content */}
        <div className="package-card-content">
          {/* Tier & Price */}
          <div className="package-card-header">
            <h3 className="package-tier">{pkg.tier}</h3>
            <p className="package-price">{pkg.price}</p>
          </div>
  
          {/* Description */}
          <p className="package-description">{pkg.description}</p>
  
          {/* Features */}
          <ul className="package-features">
            {pkg.features.map((feature: string, idx: number) => (
              <motion.li
                key={idx}
                className="package-feature"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
              >
                <div className="feature-check">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
  
          {/* CTA Button */}
          <motion.button
            className={`package-cta ${pkg.isCustom ? "custom-cta" : ""}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href ="/contact-us">{pkg.isCustom ? "Contact Us" : "Get This Package"}</Link>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    );
  };
export default PackageCard;