import { ShieldCheck, HardHat, Award, Target, Briefcase, CheckCircle, User } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-20">

      {/* Intro */}
      <div className="space-y-6">
        <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">About Us</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
          Built for Exceptional Aquatic &amp; Civil Engineering.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          LRAQUA designs, builds, and maintains water systems from premium pools to commercial water infrastructure. We bring technical discipline, premium finishes, and full project delivery for every site.
        </p>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Our team manages every stage &mdash; from design and approvals to construction, testing, and long-term maintenance.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          {
            Icon: HardHat,
            title: "Expert Engineering",
            desc: "Our civil and hydraulic engineers ensure structural integrity and flow precision for every build."
          },
          {
            Icon: ShieldCheck,
            title: "Guaranteed Durability",
            desc: "We stand behind our materials and workmanship, offering up to a 5-year structural warranty."
          },
          {
            Icon: Award,
            title: "Certified Standards",
            desc: "Adhering strictly to ISO guidelines and local civic engineering regulatory standards."
          },
          {
            Icon: Target,
            title: "Client Centric",
            desc: "From transparent pricing to timely delivery, we construct exactly what fits your site requirements."
          }
        ].map((v, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-sky flex items-center justify-center shrink-0">
              <v.Icon className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-base">{v.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Team Profile Section */}
      <div className="border-t border-slate-100 pt-16 space-y-10">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">Our Team &amp; Leadership</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Engineering Credibility</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100">
          {/* Avatar/Photo */}
          <div className="space-y-4">
            <div className="w-full h-64 md:h-52 rounded-2xl bg-gradient-to-br from-slate-100 via-sky-50 to-slate-200 border-2 border-dashed border-sky-200 flex flex-col items-center justify-center p-6 text-center shadow-inner">
              <div className="w-16 h-16 rounded-full bg-white/90 text-brand-sky flex items-center justify-center shadow-sm mb-3">
                <User className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-slate-700">Photo will update soon</span>
              <span className="text-[11px] text-slate-400 mt-1">C. Veerendra</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-slate-900 text-lg">C. Veerendra</h3>
              <p className="text-xs font-semibold text-brand-sky">Civil &amp; Aquatic Project Lead</p>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-sm text-slate-600 leading-relaxed italic">
              "At LR AQUA, we are committed to delivering honest civil engineering and leakproof standards in swimming pool construction and water installations. Every excavation, waterproofing layer, and hydraulic plumbing line is supervised hands-on to ensure lasting durability and complete customer satisfaction."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-700">
              <div className="flex gap-2.5 items-center">
                <Briefcase className="w-5 h-5 text-brand-sky shrink-0" />
                <span>4+ Years Experience (Aquatic &amp; Civil Engineering)</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <HardHat className="w-5 h-5 text-brand-sky shrink-0" />
                <span>Specialized in Pool Hydraulics &amp; Leakproofing</span>
              </div>
            </div>

            <div className="border-t border-slate-200/60 pt-6">
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
                <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-md">RCC Pool Construction</span>
                <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-md">Saltwater Filtration Setup</span>
                <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-md">Pressure Line Leak Detection</span>
                <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-md">Civil Water Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Licenses Section */}
      <div className="border-t border-slate-100 pt-16 space-y-8">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-brand-sky">Trust Indicators</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Certifications &amp; Licenses</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "ISO 9001:2015",
              desc: "Quality Management Systems certified for pool design and water piping civil constructions."
            },
            {
              title: "Class-I Civil License",
              desc: "Government certified Class-I Civil Engineering contractor license in Karnataka and Tamil Nadu."
            },
            {
              title: "BWSSB & TWAD Registry",
              desc: "Registered water plumbing contractor for municipal pipeline setups and filtration attachments."
            }
          ].map((cert, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{cert.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
