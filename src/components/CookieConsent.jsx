import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay before showing the banner for premium UX feel
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-100 shadow-2xl p-6 flex flex-col gap-4"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">We value your privacy</h4>
                <p className="text-xs text-slate-500 mt-0.5">Cookies help us deliver the best user experience.</p>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className="text-slate-400 hover:text-slate-900 rounded-lg p-1 hover:bg-slate-50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs leading-relaxed text-slate-600">
            We use cookies to analyze website traffic, customize site layout, and assist in marketing. By clicking "Accept", you agree to our use of cookies.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 justify-end text-xs">
            <button
              onClick={handleDecline}
              className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-sky text-white font-semibold shadow-md shadow-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 hover:-translate-y-0.5 transition-all"
            >
              Accept All
            </button>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
