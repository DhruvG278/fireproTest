"use client";
import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  FileText,
  Clock,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";

const benefits = [
  {
    title: "Accelerated Timelines",
    description:
      "Automate repetitive tasks to handle multiple mega-projects effortlessly, with multiple designers ensuring rapid turnarounds compliant with AHJ codes.",
    icon: Clock,
  },
  {
    title: "Cost & Sustainability Savings",
    description:
      "Achieve 20-30% reductions in materials and energy through optimized recommendations, while our error-minimizing features cut rework by 15-20%.",
    icon: Leaf,
  },
  {
    title: "Enhanced Compliance & Reliability",
    description:
      "NICET IV-certified processes guarantee designs meet NFPA, IFC, IBC, and OSHA standards—reducing AHJ revisions and fostering long-term partnerships.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Collaboration",
    description:
      "Integrate with our client portal for real-time sharing, making it easy to outsource takeoffs, designs, and submittals without expanding your team.",
    icon: Users,
  },
];

const FireAlarmSoftwarePage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
          style={{ color: "var(--color-logo)" }}
        >
          ProTech's Revolutionary AutoCAD Fire Alarm Plugin
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl font-light text-gray-300 max-w-4xl"
        >
          Unlock unparalleled speed and accuracy with ProTech CDS’s proprietary
          LISP-based plugin — delivering{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-semibold">
            50% faster workflows, 15-20% error reduction
          </span>{" "}
          and{" "}
          <span className="underline decoration-[var(--color-logo)] decoration-2">
            20-30% sustainability savings
          </span>
        </motion.h2>

        {/* Background effect */}
        <div className="absolute inset-0 -z-10 bg-[url('/dummy-fire-bg.jpg')] bg-cover bg-center opacity-10" />
      </section>

      {/* Intro */}
      <section className="px-6 md:px-20 py-16 max-w-6xl mx-auto space-y-6 leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300"
        >
          At{" "}
          <span className="text-[var(--color-logo)] font-bold">
            ProTech CDS
          </span>{" "}
          (Complete Design System), we’re transforming fire protection
          engineering with cutting-edge tools that empower our design team to
          handle mega-projects with unmatched precision. Our{" "}
          <span className="italic">AutoCAD Fire Protection Plugin (v1.7)</span>{" "}
          automates everything from device placement to compliance audits —
          reducing design time by up to 50%.
        </motion.p>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-r from-[#111] to-[#222] px-6 md:px-20 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-[var(--color-logo)]">
          Key Features of the Plugin
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Zap size={40} />,
              title: "Automated Device Insertion & Wiring",
              desc: "Insert and address devices (smoke detectors, horns, strobes) with sequential labeling, auto-routing, and NFPA 72 compliant spacing.",
            },
            {
              icon: <Shield size={40} />,
              title: "Compliance & Code Audits",
              desc: "Built-in checks for NFPA 72/96/17A with real-time gap detection — ensuring 99% first-pass AHJ approvals.",
            },
            {
              icon: <FileText size={40} />,
              title: "Error Reduction & Calculations",
              desc: "AI-assisted voltage drop, battery sizing, and suppression agent calcs with datasheet-driven accuracy.",
            },
            {
              icon: <Leaf size={40} />,
              title: "Sustainability Optimization",
              desc: "Recommends eco-friendly components and calculates 20–30% water/energy savings aligned with OSHA and green standards.",
            },
            {
              icon: <Users size={40} />,
              title: "Team Collaboration & Scalability",
              desc: "Export/import device lists, multi-user edits, revision tracking, and batch processing across large drawings.",
            },
            {
              icon: <Shield size={40} />,
              title: "Kitchen Hood & Suppression Tools",
              desc: "Draw NFPA 96 compliant hood layouts, insert nozzles/cylinders, and auto-generate risers for commercial kitchens.",
            },
            {
              icon: <FileText size={40} />,
              title: "Reporting & Exports",
              desc: "Generate BOMs, legends, multi-page PDF submittals, and estimates for AHJ packages and internal cost tracking.",
            },
            {
              icon: <Zap size={40} />,
              title: "Advanced Automation",
              desc: "Auto-place devices by IBC occupancy group, bulk insert by room area, and generate ADA/NFPA compliant mounting diagrams.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07, rotateX: 6, rotateY: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] 
                   shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_rgba(211,187,68,0.6)]
                   border border-gray-800 hover:border-[var(--color-logo)] transform-gpu"
            >
              <div className="text-[var(--color-logo)] mb-4">{f.icon}</div>
              <h4 className="text-lg font-bold mb-2">{f.title}</h4>
              <p className="text-gray-400 text-sm">{f.desc}</p>

              {/* glowing background accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[var(--color-logo)]/10 to-transparent opacity-0 hover:opacity-100 blur-xl transition" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-[#111] to-[#222] text-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-logo)]">
          Why ProTech Beats Competitors Like FireCAD and AlarmCAD
        </h2>

        <p className="max-w-3xl mx-auto text-center text-gray-300 mb-16">
          While tools like FireCAD and AlarmCAD provide solid fire alarm design
          support, ProTech’s plugin surpasses them with deeper, AI-optimized
          automation that’s lightweight, user-friendly, and cost-effective. If
          you know AutoCAD, you already know ProTech — no retraining required.
        </p>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* ProTech Card */}
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 6, rotateY: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative p-8 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] 
                 shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_40px_rgba(211,187,68,0.6)]
                 border border-gray-700 hover:border-[var(--color-logo)] transform-gpu"
          >
            <h3 className="text-xl font-bold text-[var(--color-logo)] mb-6">
              ProTech Plugin
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <strong>Automation Depth:</strong> 28+ commands for end-to-end
                workflows, AI optimizations cut design time by 50%.
              </li>
              <li>
                <strong>Compliance Integration:</strong> Real-time NFPA
                72/96/17A audits with automated gap detection.
              </li>
              <li>
                <strong>Error Reduction:</strong> 15–20% fewer errors via AI
                validation, revision tracking, and datasheet-driven calcs.
              </li>
              <li>
                <strong>Sustainability:</strong> 20–30% savings with
                eco-friendly recommendations.
              </li>
              <li>
                <strong>Collaboration:</strong> Multi-user edits, batch
                processing for 100+ drawings, revision stamps.
              </li>
              <li>
                <strong>Training:</strong> Zero learning curve — if you know
                AutoCAD, you know ProTech.
              </li>
              <li>
                <strong>Pricing:</strong> Flexible yearly or lifetime;
                lightweight, runs on standard AutoCAD (2018+).
              </li>
            </ul>

            {/* Glow Accent */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[var(--color-logo)]/10 to-transparent 
                      opacity-0 hover:opacity-100 blur-xl transition"
            />
          </motion.div>

          {/* FireCAD Card */}
          <div className="p-8 rounded-2xl bg-[#181818] shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-red-400 ">
                FireCAD Limitations
              </h3>
              <p className="text-gray-400">(Based on public information)</p>
            </div>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <strong>Automation:</strong> Limited to parts/risers; lacks
                AI-driven workflows.
              </li>
              <li>
                <strong>Compliance:</strong> General AHJ focus, no detailed
                automated gap checks.
              </li>
              <li>
                <strong>Error Reduction:</strong> No quantified AI-assisted
                error reduction.
              </li>
              <li>
                <strong>Sustainability:</strong> No green compliance features.
              </li>
              <li>
                <strong>Collaboration:</strong> Basic support; limited
                scalability.
              </li>
              <li>
                <strong>Training:</strong> Requires orientation; retraining
                likely for new hires.
              </li>
              <li>
                <strong>Pricing:</strong> ~$1,890/year; higher system demands.
              </li>
            </ul>
          </div>

          {/* AlarmCAD Card */}
          <div className="p-8 rounded-2xl bg-[#181818] shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-blue-400 ">
                AlarmCAD Limitations
              </h3>
              <p className="text-gray-400">(Based on public information)</p>
            </div>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <strong>Automation:</strong> Conventional/addressable support,
                but lacks suppression risers & sustainability.
              </li>
              <li>
                <strong>Compliance:</strong> NEC/NFPA calcs supported, but
                manual sheet interpretation required.
              </li>
              <li>
                <strong>Error Reduction:</strong> No AI-driven validation; risk
                of manual oversights.
              </li>
              <li>
                <strong>Sustainability:</strong> No eco-optimization.
              </li>
              <li>
                <strong>Collaboration:</strong> No CSV export/import or
                auto-revision tracking.
              </li>
              <li>
                <strong>Training:</strong> Steep learning curve; webinars,
                dedicated sessions needed.
              </li>
              <li>
                <strong>Pricing:</strong> Not public; higher RAM/system
                requirements; likely subscription-based.
              </li>
            </ul>
          </div>
        </div>

        <p className="max-w-4xl mx-auto mt-16 text-center text-gray-400 text-sm">
          <strong>ProTech’s edge:</strong> Seamless AutoCAD integration,
          zero-training barrier, AI-powered error reduction, and sustainability
          focus — delivering superior value without the costs and complexities
          of competitors.
        </p>
      </section>
      <section className="py-20 px-6 bg-gradient-to-br  overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1),transparent_60%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-12"
          >
            Benefits for{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Big Contractors & Architects
            </span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-yellow-600/40 p-8 transform hover:-translate-y-2 transition-all duration-300 border border-gray-700"
                >
                  {/* 3D glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                  {/* Content */}
                  <div className="relative flex flex-col items-start space-y-4">
                    <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-600">
                      <Icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <ContactUsSection />
    </div>
  );
};

export default FireAlarmSoftwarePage;
