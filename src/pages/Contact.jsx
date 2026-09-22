import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { CheckCircle2, Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    projectType: "swimming-pool", 
    location: "", 
    budget: "", 
    message: "" 
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.location.trim()) tempErrors.location = "Location/City is required";
    if (!formData.budget.trim()) tempErrors.budget = "Approx. budget is required";
    if (!formData.message.trim()) tempErrors.message = "Message details are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ 
          name: "", 
          email: "", 
          projectType: "swimming-pool", 
          location: "", 
          budget: "", 
          message: "" 
        });
      }, 4000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      
      {/* Contact info column */}
      <div className="space-y-10">
        <div className="space-y-6">
          <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">Contact Us</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">Get In Touch</h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
            Have questions about pool construction or a civil engineering project? Speak with our project engineers today.
          </p>
        </div>

        <div className="space-y-6 text-sm">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Headquarters</h4>
              <p className="text-slate-500 mt-1">3J8W+4R8, BDS Nagar, Kothanur, Bengaluru, Karnataka 560077</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Call Center</h4>
              <p className="text-slate-500 mt-1">+91 98765 43210</p>
              <span className="text-xs text-slate-400 mt-1 block flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon–Sat, 9 AM – 6 PM IST</span>
              </span>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Email Support</h4>
              <p className="text-slate-500 mt-1">info@lraqua.in</p>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm h-64 relative bg-slate-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.195316335198!2d77.6416801!3d13.0550478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11d61d15bf73%3A0xbc4e578fb06b0070!2sLR%20Aqua%20Constructions!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="LRAQUA Bengaluru Headquarters Location Map"
          />
        </div>
      </div>

      {/* Form column */}
      <div>
        {submitted ? (
          <Motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3"
          >
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h4 className="font-bold text-emerald-800 text-lg">Inquiry Sent Successfully!</h4>
            <p className="text-sm text-emerald-600">We appreciate you reaching out. Our civil estimator will contact you within 24 hours.</p>
          </Motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="font-extrabold text-slate-900 text-lg">Request Project Cost Estimate</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-brand-sky'} outline-none focus:ring-4 focus:ring-sky-100 transition-all text-sm`}
                />
                {errors.name && <span className="text-xs text-red-500 font-semibold mt-1.5 block">{errors.name}</span>}
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-brand-sky'} outline-none focus:ring-4 focus:ring-sky-100 transition-all text-sm`}
                />
                {errors.email && <span className="text-xs text-red-500 font-semibold mt-1.5 block">{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-sky outline-none focus:ring-4 focus:ring-sky-100 transition-all text-sm bg-white"
                >
                  <option value="swimming-pool">Swimming Pool Construction</option>
                  <option value="water-pool">Decorative Water Park/Pool</option>
                  <option value="saltwater">Saltwater Chlorination Upgrade</option>
                  <option value="plumbing">Hydraulic loop / Plumbing repair</option>
                  <option value="maintenance">Annual Maintenance Contract</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Project Location (City/Area)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Whitefield, Bengaluru"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.location ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-brand-sky'} outline-none focus:ring-4 focus:ring-sky-100 transition-all text-sm`}
                />
                {errors.location && <span className="text-xs text-red-500 font-semibold mt-1.5 block">{errors.location}</span>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Approximate Budget (INR)</label>
              <input 
                type="text" 
                placeholder="e.g. Rs. 5 Lakhs"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${errors.budget ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-brand-sky'} outline-none focus:ring-4 focus:ring-sky-100 transition-all text-sm`}
              />
              {errors.budget && <span className="text-xs text-red-500 font-semibold mt-1.5 block">{errors.budget}</span>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Project Description</label>
              <textarea 
                rows={4} 
                placeholder="Include specifications e.g., dimensions, site access, timelines..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-brand-sky'} outline-none focus:ring-4 focus:ring-sky-100 transition-all text-sm resize-none`}
              />
              {errors.message && <span className="text-xs text-red-500 font-semibold mt-1.5 block">{errors.message}</span>}
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky text-white font-bold text-sm shadow-lg shadow-sky-500/10 hover:shadow-xl hover:shadow-sky-500/20 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Estimate Request</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
