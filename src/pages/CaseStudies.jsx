import { motion as Motion } from "framer-motion";
import { Clock, IndianRupee, MapPin, Calendar, CheckSquare } from "lucide-react";

const CASE_STUDIES = [
  {
    title: "Aqua Haven Resort Infinity Pool",
    location: "Bengaluru, KA",
    timeline: "14 Weeks",
    budget: "₹8.5 Lakhs - ₹10 Lakhs",
    completed: "May 2024",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    beforeDesc: "Rough, unexcavated resort backyard soil with highly uneven slopes and problematic drainage channels.",
    afterDesc: "Fully commissioned premium infinity pool with dual saltwater chlorinator, LED lighting system, and integrated deck landscaping.",
    scope: ["RCC Structural Excavation", "Saltwater Filtration Setup", "Custom Glass Tiling", "Deck Construction"]
  },
  {
    title: "City Park Decorative Water Feature",
    location: "Mysuru, KA",
    timeline: "8 Weeks",
    budget: "₹3.5 Lakhs - ₹4.5 Lakhs",
    completed: "October 2023",
    image: "https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=800&q=80",
    beforeDesc: "Dry, concrete platform in park center with clogged pipeline connections and rusted pump equipment.",
    afterDesc: "Eco-friendly recycling water fountain with anti-algae coatings, automated timer controls, and modern aesthetic illumination.",
    scope: ["Pipeline Replacement", "Fountain Pump Installation", "Aesthetic Masonry", "Automation Controllers"]
  },
  {
    title: "Sunrise Community Clubhouse Pool",
    location: "Chennai, TN",
    timeline: "12 Weeks",
    budget: "₹6 Lakhs - ₹7.2 Lakhs",
    completed: "December 2023",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    beforeDesc: "Standard backyard lawn area requiring approvals and strict structural excavation close to villa foundations.",
    afterDesc: "15x30 ft premium swimming pool built with anti-seepage civil construction, skin-friendly saltwater filtration, and safety railings.",
    scope: ["Structural Approvals", "RCC Anti-seepage Pouring", "Piping & Plumbing setup", "Safety Railings & Entry"]
  }
];

export default function CaseStudies() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
      
      {/* Header */}
      <div className="space-y-6 text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">Our Work</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">Case Studies &amp; Projects</h1>
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
          Explore our real project timelines, budgets, and detailed before/after transformations to understand our standards of civil execution.
        </p>
      </div>

      {/* List */}
      <div className="space-y-16">
        {CASE_STUDIES.map((cs, idx) => (
          <Motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {/* Project Image */}
            <div className="relative min-h-[250px] md:min-h-full">
              <img 
                src={cs.image} 
                alt={cs.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent md:hidden" />
            </div>

            {/* Content details */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Heading */}
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl leading-tight">{cs.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {cs.location}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cs.completed}
                  </span>
                </div>
              </div>

              {/* Stats Block */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Timeline</span>
                  <div className="flex items-center gap-1.5 font-bold text-slate-700 text-sm">
                    <Clock className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>{cs.timeline}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Budget Range</span>
                  <div className="flex items-center gap-1 text-slate-700 font-bold text-sm">
                    <IndianRupee className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>{cs.budget}</span>
                  </div>
                </div>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1.5 p-3.5 bg-red-50/50 border border-red-100/50 rounded-xl">
                  <span className="font-extrabold text-red-700 uppercase tracking-wide text-[9px]">Before Construction</span>
                  <p className="text-slate-600 leading-relaxed">{cs.beforeDesc}</p>
                </div>
                <div className="space-y-1.5 p-3.5 bg-emerald-50/50 border border-emerald-100/50 rounded-xl">
                  <span className="font-extrabold text-emerald-700 uppercase tracking-wide text-[9px]">After Handover</span>
                  <p className="text-slate-600 leading-relaxed">{cs.afterDesc}</p>
                </div>
              </div>

              {/* Scope */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Project Scope</h4>
                <div className="flex flex-wrap gap-2">
                  {cs.scope.map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-50/60 text-brand-blue rounded-lg text-xs font-semibold">
                      <CheckSquare className="w-3.5 h-3.5 text-brand-sky" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Motion.div>
        ))}
      </div>

    </div>
  );
}
