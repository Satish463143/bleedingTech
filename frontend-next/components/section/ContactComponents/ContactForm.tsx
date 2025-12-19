"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, User, Mail, MessageSquare, FileText, Loader2, CheckCircle } from "lucide-react";
import "./ContactForm.css";
import { TextAreaInput, TextInputComponent } from "@/components/common/InputBox/InputBox";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useCreateContactsMutation } from "@/components/api/contact.api";

// TypeScript interface for form data
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [createContact] = useCreateContactsMutation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const contactDTO = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(contactDTO),
});

  const contactForm = async (data: FormData) => {
    setLoading(true);
    setIsSubmitted(false);
    try{
      const submitData = {
        ...data,
      }
      const response = await createContact(submitData).unwrap();
      toast.success(response.message || "Message sent successfully!");
      setIsSubmitted(true);
    } catch(exception: any){
      toast.error(exception?.data?.message || "Something went wrong");
    }   
    finally{
      setLoading(false);
    }
   
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--bg-foreground) / 0.03) 0%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] opacity-15"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary-accent) / 0.2), transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Info */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{
                background: "hsl(var(--primary) / 0.1)",
                color: "hsl(var(--primary))",
                border: "1px solid hsl(var(--primary) / 0.2)",
              }}
            >
              Send a Message
            </motion.span>
            
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Let's Discuss Your{" "}
              <span
                className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-accent))] bg-clip-text"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Project
              </span>
            </h2>
            
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Have a project in mind or need consultation? Fill out the form and our team will get back to you within 24 hours. We're excited to hear about your ideas!
            </p>

            {/* Quick info */}
            <div className="space-y-4">
              {[
                { icon: CheckCircle, text: "Free initial consultation" },
                { icon: CheckCircle, text: "Response within 24 hours" },
                { icon: CheckCircle, text: "No obligation quote" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <item.icon
                    className="w-5 h-5"
                    style={{ color: "hsl(var(--primary))" }}
                  />
                  <span style={{ color: "hsl(var(--muted-foreground))" }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.form
              onSubmit={handleSubmit(contactForm as any)}
              className="relative p-8 rounded-3xl backdrop-blur-xl border overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
                borderColor: "hsl(var(--border))",
                boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.1)",
              }}
              variants={itemVariants}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--primary-accent)), transparent)",
                }}
              />

              {/* Form Fields */}
              <div className="space-y-6">
                {/* Full Name */}
                <motion.div variants={itemVariants} className="form-group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    />
                    <TextInputComponent
                    defaultValue=""
                    type="text"
                    control={control}
                    name="name"
                    required={true}
                    errMsg={errors.name?.message as string | null}
                    placeholder="Enter your full name"
                    className ="contact-input w-full pl-12 pr-4 py-4 rounded-xl border outline-none transition-all duration-300"
                    style={{
                      background: "hsl(var(--background) / 0.5)",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                    />
                    
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants} className="form-group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    />
                    <TextInputComponent
                    defaultValue=""
                    type="email"
                    control={control}
                    name="email"
                    required={true}
                    errMsg={errors.email?.message as string | null}
                    placeholder="Enter your email address"
                    className="contact-input w-full pl-12 pr-4 py-4 rounded-xl border outline-none transition-all duration-300"
                      style={{
                        background: "hsl(var(--background) / 0.5)",
                        borderColor: "hsl(var(--border))",
                        color: "hsl(var(--foreground))",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Subject */}
                <motion.div variants={itemVariants} className="form-group">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <FileText
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    />
                    <TextInputComponent
                      defaultValue=""
                      type="number"
                      control={control}
                      name="phone"
                      placeholder="Enter your phone number"
                      required={true}
                      errMsg={errors.phone?.message as string | null}
                      className ="contact-input w-full pl-12 pr-4 py-4 rounded-xl border outline-none transition-all duration-300"
                      style={{
                        background: "hsl(var(--background) / 0.5)",
                        borderColor: "hsl(var(--border))",
                        color: "hsl(var(--foreground))",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants} className="form-group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-4 top-4 w-5 h-5"
                      style={{ color: "hsl(var(--muted-foreground))" }}
                    />
                    <TextAreaInput
                      defaultValue=""
                      placeholder="Tell us about your project, goals, and timeline..."
                      control={control}
                      name="message"
                      required={true}
                      errMsg={errors.message?.message as string | null}
                      row={5}
                      className="contact-input w-full pl-12 pr-4 py-4 rounded-xl border outline-none transition-all duration-300 resize-none"
                      style={{
                        background: "hsl(var(--background) / 0.5)",
                        borderColor: "hsl(var(--border))",
                        color: "hsl(var(--foreground))",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={loading || isSubmitted}
                    className="group relative w-full py-4 px-8 rounded-xl font-bold text-base overflow-hidden disabled:cursor-not-allowed"
                    style={{
                      background: isSubmitted
                        ? "linear-gradient(135deg, #10b981, #059669)"
                        : "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-accent)))",
                      color: "white",
                      boxShadow: "0 10px 40px hsl(var(--glow))",
                    }}
                    whileHover={!loading && !isSubmitted ? { scale: 1.02 } : {}}
                    whileTap={!loading && !isSubmitted ? { scale: 0.98 } : {}}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>

                    {/* Hover overlay */}
                    {!loading && !isSubmitted && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary-accent))] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ zIndex: 0 }}
                      />
                    )}
                  </motion.button>
                </motion.div>
              </div>

              {/* Corner decoration */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
                }}
              />
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

