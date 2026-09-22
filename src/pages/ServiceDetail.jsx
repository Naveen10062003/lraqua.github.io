import { useParams, Link, Navigate } from "react-router-dom";
import { HardHat, CheckCircle2, ChevronLeft, Phone, Calendar } from "lucide-react";

const SERVICES_DATA = {
  construction: {
    title: "Construction & Structural RCC",
    subtitle: "Turnkey Civil Pool Construction",
    icon: "🏗️",
    desc: "End-to-end RCC structural civil excavation, reinforcement laying, high-grade concrete pouring, and anti-leakage plastering. Built to withstand shifting ground pressures.",
    features: [
      "Heavy RCC structural design with soil testing coordination",
      "Premium leakage-proof double coating plastering",
      "Premium glass tile finish and deck alignment",
      "5-Year structural warranty on RCC integrity"
    ],
    timeline: "12-16 Weeks",
    budget: "Starting ₹4,50,000",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  },
  plumbing: {
    title: "Plumbing & Piping Infrastructure",
    subtitle: "Hydraulic Loop & Drainage Systems",
    icon: "🔧",
    desc: "Precision hydraulic engineering ensuring correct pipe dimensions, zero pressure drops, optimal turnover rates, and leakproof joints using high-pressure schedule-80 PVC.",
    features: [
      "Hydraulic calculation design to eliminate pump strain",
      "Leak-proof high-pressure schedule-80 PVC lines",
      "Main drains, skimmers, and inlet piping positioning",
      "Backwash and sand filter multi-port valve configurations"
    ],
    timeline: "2-4 Weeks",
    budget: "Starting ₹1,20,000",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  design: {
    title: "Water Supply & Filtration Design",
    subtitle: "Eco-Friendly Water Circulation",
    icon: "🧂",
    desc: "Designing eco-conscious saltwater sanitation, active circulation loops, overflow channels, and mechanical/chemical filtration plant setups for crystal clear water.",
    features: [
      "Skin-friendly saltwater chlorinator unit installations",
      "Sizing sand/glass media filters for high turnovers",
      "Automated pH balance dosing systems",
      "Under-water LED illumination controller wiring"
    ],
    timeline: "3-5 Weeks",
    budget: "Starting ₹2,80,000",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80"
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES_DATA[id];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-12">
      
      {/* Back Button */}
      <Link 
        to="/services" 
        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-sky hover:text-brand-blue transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        <span>Back to Services</span>
      </Link>

      {/* Hero Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-slate-100 pb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{service.icon}</span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-sky">{service.subtitle}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{service.title}</h1>
          <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
        </div>
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-64 rounded-3xl object-cover shadow-md border border-slate-100"
        />
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Core Specs */}
        <div className="md:col-span-2 space-y-6">
          <h3 className="font-bold text-slate-900 text-lg">Key Deliverables</h3>
          <div className="space-y-4">
            {service.features.map((feat, i) => (
              <div key={i} className="flex gap-3 items-start text-sm text-slate-600 font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Estimation sidebar */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Avg. Duration</span>
              <span className="font-bold text-slate-800 text-sm">{service.timeline}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Estimation</span>
              <span className="font-extrabold text-brand-blue text-lg block mt-0.5">{service.budget}</span>
            </div>
          </div>

          <div className="border-t border-slate-200/60 pt-6 space-y-3">
            <Link 
              to="/contact" 
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-gradient-to-r from-brand-blue to-brand-sky text-white font-bold text-xs rounded-xl shadow-md shadow-sky-500/10 hover:shadow-lg transition-all text-center"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Site Survey</span>
            </Link>
            <a 
              href="tel:+919876543210" 
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-white border border-slate-200 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-50 transition-all text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Engineer</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
