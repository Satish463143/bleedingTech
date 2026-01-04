"use client";
import { Quote,Star } from "lucide-react";
import Image from "next/image";

type TestimonialCardProps = {
    testimonial: any;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    // Use glowColor if color is not available
    const cardColor = "rgb(59, 130, 246, 0.5)";
    
    return (
      <div
        className="relative p-8 lg:p-10 rounded-3xl backdrop-blur-xl border text-center"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
          borderColor: "hsl(var(--border))",
        }}
      >
        {/* Quote icon */}
        <div
          className="absolute top-6 left-6 opacity-10"
          style={{ color: "hsl(var(--primary))" }}
        >
          <Quote className="w-12 h-12" />
        </div>
  
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${cardColor}, transparent)`,
          }}
        />
  
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div
            className="relative w-20 h-20 rounded-full overflow-hidden border-2"
            style={{ borderColor: cardColor }}
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  
        {/* Rating */}
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-current"
              style={{ color: "hsl(var(--primary))" }}
            />
          ))}
        </div>
  
        {/* Review/Quote */}
        <p
          className="text-base lg:text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          "{testimonial.review || testimonial.quote}"
        </p>
  
        {/* Author */}
        <div>
          <h4
            className="text-lg font-bold"
            style={{ color: "hsl(var(--foreground))" }}
          >
            {testimonial.name}
          </h4>
          <p
            className="text-sm"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {testimonial.position || `${testimonial.role}, ${testimonial.company}`}
          </p>
          <span
            className="inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full"
            style={{
              background: "hsl(var(--primary) / 0.1)",
              color: "hsl(var(--primary))",
            }}
          >
            {testimonial.projectType || testimonial.category}
          </span>
        </div>
      </div>
    );
  };
  export default TestimonialCard;