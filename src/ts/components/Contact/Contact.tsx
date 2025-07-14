import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import PageLayout from "../Layout/PageLayout";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("pZfwV-LMNWwY10V98");
  }, []);

  // Validation functions
  const validateName = (name: string): string => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (name.trim().length > 50) return "Name must be less than 50 characters";
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return "Name can only contain letters and spaces";
    return "";
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validateMessage = (message: string): string => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10) return "Message must be at least 10 characters";
    if (message.trim().length > 1000) return "Message must be less than 1000 characters";
    return "";
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });
    
    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);
    
    const newErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    };
    
    setErrors(newErrors);
    
    // Check if there are any errors
    if (nameError || emailError || messageError) {
      return; // Don't submit if there are validation errors
    }
    
    setStatus("sending");

    try {
      const currentTime = new Date().toLocaleString();
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        time: currentTime,
      };

      await emailjs.send("service_apfr53b", "template_x7zatfu", templateParams);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
  <PageLayout>
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 bg-white/10 dark:bg-gray-900/80 rounded-2xl shadow-lg mt-12"
    >
      <h2 className="text-3xl font-bold text-center text-indigo-400 mb-4">
        Contact Me
      </h2>
      <p className="text-center text-gray-400 mb-8 leading-relaxed">
        Feel free to reach out for collaborations, opportunities, or just to say
        hi!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
        <input
          type="text"
            name="name"
          placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`p-3 rounded bg-gray-800/60 text-white border text-left w-full transition-colors ${
              touched.name && errors.name
                ? "border-red-500 focus:ring-2 focus:ring-red-400"
                : "border-gray-700 focus:ring-2 focus:ring-indigo-400"
            }`}
          />
          {touched.name && errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        
        <div>
        <input
          type="email"
            name="email"
          placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`p-3 rounded bg-gray-800/60 text-white border text-left w-full transition-colors ${
              touched.email && errors.email
                ? "border-red-500 focus:ring-2 focus:ring-red-400"
                : "border-gray-700 focus:ring-2 focus:ring-indigo-400"
            }`}
          />
          {touched.email && errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        
        <div>
        <textarea
            name="message"
          placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`p-3 rounded bg-gray-800/60 text-white border text-left w-full transition-colors min-h-[120px] resize-none ${
              touched.message && errors.message
                ? "border-red-500 focus:ring-2 focus:ring-red-400"
                : "border-gray-700 focus:ring-2 focus:ring-indigo-400"
            }`}
          />
          {touched.message && errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "sending" || Object.values(errors).some(error => error !== "")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded shadow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-center text-green-400">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-red-400">
            Error sending message. Please try again.
          </p>
        )}
      </form>
    </motion.section>
  </PageLayout>
);

export default Contact;
