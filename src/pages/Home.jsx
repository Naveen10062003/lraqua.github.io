import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { 
  Waves, 
  Sparkles, 
  MapPin, 
  Phone, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  ShieldCheck, 
  Clock, 
  CheckCircle2 
} from "lucide-react";

const SERVICES_PREVIEW = [
  {
    icon: "🏊",
    title: "Swimming Pools",
    desc: "Custom-designed residential and commercial swimming pools built to the highest civil engineering standards.",
  },
  {
    icon: "🌊",
    title: "Water Pools",
    desc: "Decorative and functional water pools for parks, resorts, and urban landscapes.",
  },
  {
    icon: "🧂",
    title: "Saltwater Systems",
    desc: "Eco-friendly saltwater-based pool construction and filtration system installation.",
  },
  {
    icon: "🏗️",
    title: "Civil Construction",
    desc: "End-to-end civil contracting for water infrastructure, drainage, and site development.",
  },
];

const PROJECTS = [
  { name: "Aqua Haven Resort Pool", location: "Bengaluru", year: "2024", type: "Saltwater" },
  { name: "City Park Water Feature", location: "Mysuru", year: "2023", type: "Water Pool" },
  { name: "Sunrise Villas Swimming Complex", location: "Chennai", year: "2023", type: "Swimming Pool" },
  { name: "BlueLagoon Community Pool", location: "Hyderabad", year: "2022", type: "Saltwater" },
];

const NEWS = [
  { tag: "News", title: "LRAQUA wins Best Civil Project Award 2024", date: "Mar 2024" },
  { tag: "Update", title: "New saltwater treatment technology adopted", date: "Jan 2024" },
  { tag: "Event", title: "Open day at Aqua Haven Resort — visit our build", date: "Dec 2023" },
];

const RECOMMENDATIONS = [
  {
    name: "Rohan Mehra",
    role: "Resident, Whitefield (Bengaluru)",
    text: "We wanted a saltwater pool for our kids in Whitefield. Veerendra and his team did an amazing job. No leakages, clean piping, and they finished exactly on budget. Very down-to-earth and helpful team!",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Dr. Ananya Rao",
    role: "Homeowner, Sunrise Community",
    text: "LRAQUA helped us renovate our old clubhouse pool. The pipelines were completely rusted, but their plumbing team fixed everything in 2 weeks. Real professionals who know their work.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Vikram K.",
    role: "Property Owner, Mysuru",
    text: "Built a small custom water feature for our garden. Very clean work, no hidden charges, and they cleaned up the site perfectly before leaving. Highly recommend their services.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [recIndex, setRecIndex] = useState(0);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Details are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  const nextRecommendation = () => {
    setRecIndex((prev) => (prev + 1) % RECOMMENDATIONS.length);
  };

  const prevRecommendation = () => {
    setRecIndex((prev) => (prev - 1 + RECOMMENDATIONS.length) % RECOMMENDATIONS.length);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-blue via-sky-600 to-sky-400 min-h-[600px] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center">
        {/* Waves Overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none bg-bottom bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='%23ffffff' d='M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,100 L0,100Z'/%3E%3C/svg%3E")`
          }}
        />

        <div className="max-w-4xl mx-auto z-10">
          <Motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs sm:text-sm font-semibold text-white tracking-wide uppercase mb-8"
          >
            <Sparkles className="w-4 h-4 text-sky-200" />
            <span>Premium Aquatic Engineering</span>
          </Motion.div>

          <Motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8"
          >
            Building Tomorrow's <br />
            <span className="text-sky-100 bg-clip-text">Water Experiences</span>
          </Motion.h1>

          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-sky-50 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Premier swimming pool design & construction. Civil engineering excellence for residential, commercial & resort projects across India.
          </Motion.p>

          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link 
              to="/services" 
              className="px-8 py-3.5 bg-white text-brand-blue font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all hover:-translate-y-0.5"
            >
              View Services
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3.5 bg-transparent border-2 border-white/80 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Contact Team &rarr;
            </Link>
          </Motion.div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative w-full min-h-[350px] md:min-h-[450px] rounded-3xl overflow-hidden shadow-xl bg-slate-900 flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1600&q=80')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/60 to-transparent" />

          <div className="relative z-10 px-8 py-12 sm:px-12 md:max-w-xl space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-wider text-sky-200">Premium Quality</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Engineered Excellence in Every Drop
            </h2>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
              From concept to completion, we deliver world-class aquatic infrastructure with precision, innovation, and uncompromising quality standards.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="bg-slate-50 border-y border-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "2+", label: "Projects Completed" },
            { num: "4+", label: "Years in Business" },
            { num: "7+", label: "Pools Built" },
            { num: "100%", label: "Client Satisfaction" }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-blue">{stat.num}</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid: Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* Services Preview */}
          <section className="space-y-8">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">What We Do</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Our Core Services</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES_PREVIEW.map((s, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link 
                to="/services" 
                className="inline-flex items-center text-sm font-bold text-brand-sky hover:text-brand-blue group"
              >
                <span>View All Services</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>

          {/* Portfolio List */}
          <section className="space-y-8">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">Portfolio</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Recent Projects</h2>
            </div>

            <div className="space-y-4">
              {PROJECTS.map((p, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-slate-100 rounded-xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm hover:border-slate-200 transition-colors"
                >
                  <div>
                    <h4 className="font-bold text-slate-900">{p.name}</h4>
                    <span className="text-xs text-slate-400 mt-1 block">📍 {p.location} &middot; {p.year}</span>
                  </div>
                  <span className="px-3.5 py-1.5 bg-sky-50 text-brand-sky font-semibold text-xs rounded-lg uppercase tracking-wide">
                    {p.type}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Recommendations / Testimonials Carousel */}
          <section className="space-y-8 bg-sky-50/50 border border-sky-100/50 rounded-3xl p-8 relative">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">Client Recommendations</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Trusted By Leads</h2>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={prevRecommendation} 
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextRecommendation} 
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="min-h-[160px] flex flex-col justify-between">
              <p className="text-base text-slate-700 italic leading-relaxed">
                &ldquo;{RECOMMENDATIONS[recIndex].text}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 mt-6">
                <img 
                  src={RECOMMENDATIONS[recIndex].avatar} 
                  alt={RECOMMENDATIONS[recIndex].name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{RECOMMENDATIONS[recIndex].name}</h4>
                  <p className="text-xs text-slate-500">{RECOMMENDATIONS[recIndex].role}</p>
                </div>
                <div className="ml-auto flex gap-0.5 text-amber-400">
                  {[...Array(RECOMMENDATIONS[recIndex].stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact / Quote Request Form */}
          <section className="space-y-8">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">Get in Touch</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Request a Free Quote</h2>
            </div>

            {submitted ? (
              <Motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-emerald-800 text-lg">Thank you! Your message was sent successfully.</h4>
                <p className="text-sm text-emerald-600">Our engineering team will review your project details and contact you within 24 hours.</p>
              </Motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-brand-sky focus:ring-sky-100'} outline-none focus:ring-4 transition-all text-sm`}
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
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-brand-sky focus:ring-sky-100'} outline-none focus:ring-4 transition-all text-sm`}
                    />
                    {errors.email && <span className="text-xs text-red-500 font-semibold mt-1.5 block">{errors.email}</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Project Details</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your project location, dimensions, type..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-brand-sky focus:ring-sky-100'} outline-none focus:ring-4 transition-all text-sm resize-none`}
                  />
                  {errors.message && <span className="text-xs text-red-500 font-semibold mt-1.5 block">{errors.message}</span>}
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky text-white font-bold text-sm shadow-lg shadow-sky-500/10 hover:shadow-xl hover:shadow-sky-500/20 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Send Message &rarr;
                </button>
              </form>
            )}
          </section>

        </div>

        {/* Sidebar Panel */}
        <aside className="space-y-8">
          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-brand-blue to-brand-sky rounded-2xl p-6 sm:p-8 text-white space-y-6 shadow-xl shadow-sky-500/10">
            <h3 className="font-extrabold text-lg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-200" />
              <span>Why Choose Us?</span>
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                "ISO-certified engineers",
                "Full project oversight",
                "Eco-friendly systems",
                "Free site evaluation",
                "5-year warranty"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="font-extrabold text-sky-200 mt-0.5">&bull;</span>
                  <span className="text-sky-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest News */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900 text-lg">Latest Updates</h3>
            <div className="space-y-6">
              {NEWS.map((n, i) => (
                <div key={i} className="group border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                  <span className="px-2.5 py-1 bg-sky-50 text-brand-sky font-semibold text-[10px] rounded uppercase tracking-wide">
                    {n.tag}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mt-3 leading-snug group-hover:text-brand-sky transition-colors">
                    {n.title}
                  </h4>
                  <span className="text-xs text-slate-400 mt-2 block">{n.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call Widget */}
          <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-700 text-sm">Call Us Directly</h4>
              <span className="font-extrabold text-brand-blue text-lg block mt-1">+91 98765 43210</span>
              <span className="text-xs text-slate-400 mt-1 block flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon–Sat, 9 AM – 6 PM IST</span>
              </span>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
