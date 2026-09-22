import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Phone, ShieldCheck, Waves } from "lucide-react";

const SERVICES = [
  {
    icon: "🏊",
    title: "Swimming Pools",
    desc: "Custom-designed residential and commercial swimming pools built to the highest civil engineering standards.",
    features: ["Custom shapes & sizes", "Tiling & finishing", "Filtration systems", "LED lighting"],
    price: "Starting ₹4,50,000",
    path: "/services/construction"
  },
  {
    icon: "🌊",
    title: "Water Pools",
    desc: "Decorative and functional water pools for parks, resorts, and urban landscapes.",
    features: ["Landscape integration", "Fountain systems", "Water circulation", "Anti-algae coating"],
    price: "Starting ₹2,80,000",
    path: "/services/design"
  },
  {
    icon: "🧂",
    title: "Saltwater Systems",
    desc: "Eco-friendly saltwater-based pool construction and filtration system installation.",
    features: ["Chlorine-free water", "Salt chlorinators", "pH auto-control", "Skin-friendly finish"],
    price: "Starting ₹5,20,000",
    path: "/services/design"
  },
  {
    icon: "🏗️",
    title: "Civil Construction",
    desc: "End-to-end civil contracting for water infrastructure, drainage, and site development.",
    features: ["Site assessment", "Structural design", "Drainage systems", "RCC construction"],
    price: "Get Custom Quote",
    path: "/services/construction"
  },
  {
    icon: "🔧",
    title: "Pool Maintenance",
    desc: "Annual and monthly maintenance contracts to keep your pool clean, safe, and operational.",
    features: ["Water testing", "Chemical balancing", "Equipment checks", "Emergency support"],
    price: "Starting ₹8,000/mo",
    path: "/services/plumbing"
  },
  {
    icon: "🎨",
    title: "Pool Renovation",
    desc: "Modernize your existing pool with new tiles, lighting, automation, and structural upgrades.",
    features: ["Retiling & resurfacing", "Automation upgrades", "Structural repair", "Design refresh"],
    price: "Starting ₹1,20,000",
    path: "/services/construction"
  },
];

const PROCESS = [
  { step: "01", title: "Site Visit", desc: "Our engineer visits your site for a free inspection and feasibility check." },
  { step: "02", title: "Design & Quote", desc: "We provide a detailed design plan and transparent cost estimate." },
  { step: "03", title: "Construction", desc: "Our civil team builds with precision, on schedule and on budget." },
  { step: "04", title: "Handover", desc: "We hand over a fully tested, clean, and ready-to-use pool." },
];

export default function Services() {
  return (
    <div className="bg-slate-50/50">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-brand-blue to-brand-sky py-20 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
        <div 
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none bg-bottom bg-no-repeat bg-cover opacity-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 60'%3E%3Cpath fill='%23fafafb' d='M0,30 C360,70 720,0 1080,30 C1260,50 1380,20 1440,30 L1440,60 L0,60Z'/%3E%3C/svg%3E")`
          }}
        />
        <div className="max-w-4xl mx-auto z-10 relative space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky-100">
            Our Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Everything Water. Everything Civil.
          </h1>
          <p className="text-sm sm:text-base text-sky-50/90 max-w-xl mx-auto leading-relaxed">
            From luxury swimming pools to large-scale civil water infrastructure &mdash; LRAQUA delivers end-to-end solutions with quality and precision.
          </p>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Service Cards */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">What we do</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Comprehensive Aquatic Solutions</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((s, idx) => (
                <Motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-brand-blue to-brand-sky h-1" />
                  <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-4xl block mb-4">{s.icon}</span>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">{s.desc}</p>

                      <div className="grid grid-cols-2 gap-2 pb-4">
                        {s.features.map((f, i) => (
                          <div key={i} className="flex gap-2 items-center text-slate-600 text-xs font-medium">
                            <span className="text-brand-sky font-bold">&bull;</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto gap-2">
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-brand-blue">{s.price}</span>
                        <Link to={s.path} className="text-[10px] font-bold text-brand-sky hover:underline mt-0.5">
                          View details &rarr;
                        </Link>
                      </div>
                      <Link to="/contact" className="px-4 py-2.5 bg-gradient-to-r from-brand-blue to-brand-sky text-white font-bold text-xs rounded-lg hover:shadow-md hover:shadow-sky-500/10 transition-all cursor-pointer">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Right Banner/Sidebar */}
          <div className="relative min-h-[500px] rounded-3xl overflow-hidden shadow-xl bg-slate-900 flex items-end p-8 lg:sticky lg:top-28">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1543417000-14c6689179f6?auto=format&fit=crop&w=1200&q=80')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="relative z-10 space-y-6 w-full">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sky">Featured Insight</span>
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                Trusted Water Infrastructure Expertise
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                Our teams deliver turnkey pool, drainage, and saltwater systems with a focus on durability, safety, and elegant design for every project.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "ISO-certified engineers",
                  "Full project oversight",
                  "Eco-friendly systems",
                  "Free site evaluation",
                  "5-year warranty"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-brand-sky flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-slate-100/60 border-y border-slate-200/50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">Our Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((p) => (
              <div key={p.step} className="text-center space-y-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto text-brand-sky font-extrabold text-sm">
                  {p.step}
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{p.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-sky-50 border-t border-sky-100 py-16 lg:py-20 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-3xl inline-block">💧</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue">
            Ready to Build Your Dream Pool?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Talk to our civil engineers today. Free site inspection for all new enquiries in Bengaluru, Mysuru, and Chennai.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <button className="px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-sky text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-500/10 hover:shadow-xl hover:shadow-sky-500/20 transition-all cursor-pointer">
              Book Free Inspection
            </button>
            <button className="px-6 py-3 bg-white border border-brand-blue text-brand-blue font-bold text-sm rounded-xl hover:bg-slate-50 transition-all cursor-pointer">
              📞 Call Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
