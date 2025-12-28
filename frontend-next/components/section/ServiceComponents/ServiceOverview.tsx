"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation,type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle} from "lucide-react";
import "./ServiceOverview.css";
import Heading from "@/components/common/Heading/Heading";
import {useListAllQuery} from '@/components/api/services.api'

const ServiceOverview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const { data , isLoading, isError } = useListAllQuery({page: 1, limit:999, });
  const services = data?.details || [];

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="services-section"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--bg-foreground) / 0.03) 0%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial glow */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-[700px] h-[700px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Secondary glow */}
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] opacity-15"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.2), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 10px hsl(var(--glow))",
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <Heading head=' Our Expertise' subhead="Comprehensive" title="Digital Solutions" desc="From strategy to execution, we deliver end-to-end services that transform your digital presence and accelerate business growth." />
        {/* Services List */}
        <motion.div
          className="space-y-16 lg:space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service:any, index:number) => (
            <ServiceItem
              key={service._id}
              service={service}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

type ServiceItemProps = {
  service: any;
  index: number;
  isReversed: boolean;
}
// Individual Service Item Component
const ServiceItem = ({ service, index, isReversed }: ServiceItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Side */}
      <div className={`space-y-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
        {/* Service Number & Icon */}
        <div className="flex items-center gap-4">
          <motion.div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-400`}
            style={{
              boxShadow: `0 8px 30px rgb(34, 197, 94, 0.5)`,
            }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <img src={service.icon} className="w-8 h-8 text-white" />
          </motion.div>
          <span
            className="text-sm font-bold px-3 py-1 rounded-full"
            style={{
              background: `rgb(34, 197, 94, 0.5)30`,
              color: "hsl(var(--primary))",
            }}
          >
            0{index + 1}
          </span>
        </div>
        {/* Title */}
        <h3
          className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
          style={{ color: "hsl(var(--foreground))" }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="text-base lg:text-lg leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {service.fullDesc}
        </p>

        {/* Decorative line */}
        <motion.div
          className="w-16 h-1 rounded-full"
          style={{
            background: `linear-gradient(90deg, rgb(34, 197, 94, 0.4), transparent)`,
          }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
      {/* Features Side */}
      <div className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}>
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-4 rounded-3xl blur-3xl -z-10"
          style={{
            background: `radial-gradient(circle, rgb(34, 197, 94, 0.5), transparent 70%)`,
          }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
        {/* Features Card */}
        <motion.div
          className="relative p-6 lg:p-8 rounded-3xl backdrop-blur-xl border overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
            borderColor: isHovered ? service.color : "hsl(var(--border))",
          }}
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, rgb(34, 197, 94, 0.4), transparent)`,
            }}
            animate={{ opacity: isHovered ? 1 : 0.4 }}
            transition={{ duration: 0.3 }}
          />

          {/* Features Header */}
          <h4
            className="text-sm font-semibold uppercase tracking-wider mb-6"
            style={{ color: "hsl(var(--primary))" }}
          >
            What's Included
          </h4>
          {/* Features List */}
          <div className="space-y-4">
            {service.features.map((feature:any, idx:number) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{
                    background: `rgb(34, 197, 94, 0.5)30`,
                  }}
                >
                  <CheckCircle
                    className="w-4 h-4"
                    style={{ color: "hsl(var(--primary))" }}
                  />
                </div>
                <span
                  className="text-sm lg:text-base"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
          {/* Corner accent */}
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at bottom right, rgb(34, 197, 94, 0.5), transparent 70%)`,
            }}
            animate={{ opacity: isHovered ? 0.4 : 0.15 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};



export default ServiceOverview;
