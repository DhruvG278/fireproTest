export default function TermsAndConditions() {
  return (
    <div className="bg-[var(--color-primary)] text-[var(--color-text)] min-h-screen py-12 px-6 md:px-20">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-logo)] mb-4">
          ProTech CDS Terms and Conditions
        </h1>
        <p className="text-lg italic">
          Your Agreement for Accessing Our AI-Driven Fire Protection Services
        </p>
      </header>

      {/* Effective Date */}
      <div className="text-sm text-gray-300 text-center mb-8">
        <p>Effective Date: September 1, 2025</p>
      </div>

      <main className="max-w-5xl mx-auto space-y-10 leading-relaxed">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-logo)] mb-4">
            Introduction
          </h2>
          <p>
            Welcome to ProTech CDS (Complete Design System), located at
            www.protechcds.com. These Terms and Conditions govern your use of
            our website, client portal, and services, including AI-driven
            takeoffs, designs, submittals, and proprietary software (e.g.,
            AutoCAD Fire Alarm Plugin). By accessing or using our services, you
            agree to be bound by these terms. If you do not agree, please
            refrain from using our platform.
          </p>
        </section>

        {/* Services Provided */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-logo)] mb-4">
            Services Provided
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We offer comprehensive fire protection engineering services,
              including takeoffs, fire alarm designs, sprinkler/suppression
              systems, BIM modeling, and AHJ submittals, compliant with codes
              like NFPA 13/72, IFC, IBC, and OSHA.
            </li>
            <li>
              Our proprietary AutoCAD plugin enhances design efficiency,
              available via yearly subscription or lifetime deal—contact us for
              pricing details.
            </li>
            <li>
              Additional services (e.g., site visits, PE sealing) are subject to
              project-based pricing with no hidden fees for revisions on
              small/single-quote projects.
            </li>
          </ul>
        </section>

        {/* Use of Services */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-logo)] mb-4">
            Use of Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You may use our services for lawful purposes only, providing
              accurate project data (e.g., floor plans, AHJ requirements) to
              ensure compliance and quality.
            </li>
            <li>
              The client portal is for authorized users only; sharing login
              credentials violates these terms.
            </li>
            <li>
              Our software is licensed for internal use by your team—reverse
              engineering or distribution is prohibited.
            </li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-logo)] mb-4">
            Intellectual Property
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All designs, takeoffs, and software (e.g., AutoCAD plugin) remain
              ProTech CDS property until full payment is received.
            </li>
            <li>
              You retain ownership of uploaded project data (e.g., .dwg files),
              which we handle confidentially and do not share or advertise.
            </li>
            <li>
              Our deliverables use your title blocks and branding as requested.
            </li>
          </ul>
        </section>

        {/* Limitations of Liability */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-logo)] mb-4">
            Limitations of Liability
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Services are provided "as is," with no warranty for specific
              outcomes (e.g., AHJ approval timelines). NICET IV/PE reviews
              ensure compliance, but final approval rests with the AHJ.
            </li>
            <li>
              ProTech CDS is not liable for delays due to client-provided data
              inaccuracies or third-party actions (e.g., AHJ processing).
            </li>
            <li>
              Maximum liability is limited to the service fee paid for the
              affected project.
            </li>
          </ul>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-logo)] mb-4">
            Termination
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We may suspend or terminate access if terms are breached (e.g.,
              unauthorized software use).
            </li>
            <li>
              You may cancel services with written notice, though non-refundable
              deposits apply.
            </li>
          </ul>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-logo)] mb-4">
            Governing Law
          </h2>
          <p>
            These terms are governed by California law. Disputes will be
            resolved in San Diego County courts.
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-logo)] mb-4">
            Changes to Terms
          </h2>
          <p>
            Updates to these terms will be posted on www.protechcds.com with the
            effective date. Continued use constitutes acceptance.
          </p>
        </section>
      </main>
    </div>
  );
}
