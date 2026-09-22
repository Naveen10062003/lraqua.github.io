import { MessageSquare } from "lucide-react";
import { motion as Motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Test number
  const message = encodeURIComponent("Hi LRAQUA, I am interested in pool/civil engineering services.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/20 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
    </Motion.a>
  );
}
