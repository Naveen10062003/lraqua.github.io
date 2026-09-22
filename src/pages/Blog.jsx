import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  Calendar, 
  User, 
  Compass, 
  Ruler, 
  CheckCircle2, 
  ZoomIn, 
  X, 
  PhoneCall, 
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import cadPlanImg from "../assets/cad-pool-plan.jpg";

export default function Blog() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">
          Engineering &amp; Design
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
          Aqua Engineering Blog
        </h1>
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
          Real CAD blueprints, hydraulic designs, and practical field implementation from our aquatic engineering team.
        </p>
      </div>

      {/* Featured CAD Implementation Post */}
      <Motion.article
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all space-y-8"
      >
        {/* CAD Blueprint Display with interactive zoom */}
        <div className="relative bg-slate-950 group overflow-hidden border-b border-slate-100">
          <div className="relative aspect-[16/9] w-full max-h-[500px] overflow-hidden flex items-center justify-center bg-slate-900">
            <img 
              src={cadPlanImg} 
              alt="CAD Pool Design and Hydraulic Implementation Blueprint" 
              className="w-full h-full object-contain cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
              onClick={() => setIsZoomed(true)}
            />
          </div>

          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-brand-sky text-white text-[11px] font-extrabold rounded-lg uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              CAD Design &amp; Implementation
            </span>
            <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm text-slate-200 text-[11px] font-semibold rounded-lg border border-slate-700">
              Scale 1:50 Blueprint
            </span>
          </div>

          <button
            onClick={() => setIsZoomed(true)}
            className="absolute bottom-4 right-4 px-3.5 py-2 bg-slate-900/90 hover:bg-slate-900 text-white rounded-xl text-xs font-semibold backdrop-blur-sm border border-slate-700 flex items-center gap-1.5 transition-all shadow-md"
          >
            <ZoomIn className="w-4 h-4 text-sky-400" />
            <span>Click to Enlarge Blueprint</span>
          </button>
        </div>

        {/* Article Content & Engineering Breakdown */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-brand-sky font-bold">
              <User className="w-4 h-4" />
              C. Veerendra
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Design &amp; Execution Plan
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Ruler className="w-4 h-4" />
              CAD Blueprint
            </span>
          </div>

          {/* Title and Intro */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              From CAD Design to Ground Implementation: Precision Swimming Pool &amp; Spa Layout
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every durable, leakproof swimming pool starts with meticulous CAD drafting. Before site excavation begins, our engineers draft millimeter-accurate 2D plan views, hydraulic circulation lines, and 3D depth contour cross-sections to guarantee zero pipe back-pressure and lifetime structural stability.
            </p>
          </div>

          {/* 4-Step Technical Implementation Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {[
              {
                step: "01",
                title: "2D Plan View & Hydraulic Sizing",
                desc: "15.0m curvilinear freeform layout drafted with dedicated SCH 40 PVC suction/return channels, ensuring 120 GPM maximum balanced water circulation."
              },
              {
                step: "02",
                title: "Depth Gradient & Safety Slopes (Sec A-A)",
                desc: "Engineered transition from a 0.0m beach walk-in to 1.2m shallow area and 2.4m deep end, eliminating sudden slope drop-offs."
              },
              {
                step: "03",
                title: "Dual-Chamber Spa & Overflow Integration",
                desc: "3.0m x 2.0m raised spa integration connected with independent multi-port valves, skimmers (SK-1 to SK-3), and automated fill units."
              },
              {
                step: "04",
                title: "Structural Concrete & Rebar Mesh Spec",
                desc: "#4 Rebar @ 200mm c/c with multi-layer penetrant waterproofing and compacted gravel bed to completely prevent hydrostatic ground shifts."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-lg font-black text-brand-sky shrink-0">{item.step}</span>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Engineering Takeaways Box */}
          <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                Want a custom CAD design &amp; structural estimate for your site?
              </h4>
              <p className="text-xs text-slate-500">
                Our lead engineers review your plot dimensions and draft initial hydraulic &amp; structural layouts.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-brand-sky hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Request CAD Consultation</span>
            </Link>
          </div>

        </div>
      </Motion.article>

      {/* Coming Soon Notice for future articles */}
      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold">
          <Clock className="w-3.5 h-3.5 text-brand-sky" />
          <span>More Articles &amp; Project Plans Updating Soon</span>
        </div>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          We are currently documenting additional structural engineering blueprints and civil water features. Check back soon!
        </p>
      </div>

      {/* Lightbox / Fullscreen Modal for Blueprint */}
      <AnimatePresence>
        {isZoomed && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={() => setIsZoomed(false)}
          >
            <div 
              className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-brand-sky" />
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    CAD Pool Blueprint &amp; Hydraulic Layout &mdash; Scale 1:50
                  </h3>
                </div>
                <button
                  onClick={() => setIsZoomed(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-2 sm:p-4 bg-slate-950 rounded-2xl overflow-auto max-h-[80vh] flex items-center justify-center">
                <img 
                  src={cadPlanImg} 
                  alt="CAD Pool Blueprint Full Resolution" 
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
