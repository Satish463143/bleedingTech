"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

type Props = {
  service: Service;
  index: number;
}
const ServiceCard: React.FC<Props> = ({ service, index }) => {
    const Icon = service.icon;
  
    return (
      <motion.div
        className="relative group"
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0.9 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
          style={{
            background: `radial-gradient(circle, rgb(59, 130, 246, 0.4), transparent 70%)`,
          }}
        />
  
        {/* Main card container */}
        <motion.div
          className="relative h-full p-8 rounded-3xl backdrop-blur-xl border overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.4))",
            borderColor: "hsl(var(--border))",
          }}
          whileHover={{
            scale: 1.02,
            y: -5,
            borderColor: 'rgb(59, 130, 246, 0.4)',
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Animated gradient border overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, rgb(59, 130, 246, 0.4), transparent)`,
              mixBlendMode: "overlay",
            }}
          />
  
          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, rgb(59, 130, 246, 0.4), transparent)`,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
  
          {/* Icon container with animation */}
          <motion.div
            className={`relative w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400`}
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image src={service.icon as string} alt={service.title} className="w-8 h-8 text-white" />
  
            {/* Icon glow pulse */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, rgb(59, 130, 246, 0.4), transparent)`,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
  
          {/* Service title */}
          <h3
            className="text-xl font-bold mb-3 leading-tight"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {service.title}
          </h3>
  
          {/* Service description */}
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {service.description}
          </p>
  
          {/* Learn more CTA */}
          <Link 
            href="/services#services-section"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300 cursor-pointer relative z-10"
            style={{ color: "hsl(var(--primary))" }}
          >
            <span>Learn more</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
  
          {/* Bottom corner accent */}
          <motion.div
            className="absolute bottom-0 right-0 w-24 h-24 opacity-20"
            style={{
              background: `radial-gradient(circle at bottom right, rgb(59, 130, 246, 0.4), transparent 70%)`,
            }}
          />
  
          {/* Floating mini accent dot */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 rounded-full"
            style={{ background: 'rgb(59, 130, 246, 0.4)' }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        </motion.div>
      </motion.div>
    );
  };
  export default ServiceCard;