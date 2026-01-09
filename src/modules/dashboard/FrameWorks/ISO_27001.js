// import React from "react";
// import "./ISO_27001.css";

// const ISO_27001 = () => {
//   const handleScrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   const goTo = (path) => {
//     window.location.href = path;
//   };

//   return (
//     <div className="iso-page-root">
//       {/* HEADER & NAVBAR */}
//       <header className="iso-header">
//         <div className="iso-header-content">
//           <div className="iso-logo-section">
//             <div className="iso-logo-icon">
//               <svg viewBox="0 0 24 24">
//                 <path d="M12 2l7 3v6c0 5-3.5 9.1-7 11-3.5-1.9-7-6-7-11V5l7-3z" />
//               </svg>
//             </div>
//             <div>
//               <p className="iso-logo-text">CalVant</p>
//               <p className="iso-logo-subtext">ISO 27001 Framework</p>
//             </div>
//           </div>

//           <nav className="iso-header-nav">
//             <ul className="iso-nav-links">
//               <li>
//                 <a href="/" className="iso-nav-link">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="iso-nav-link iso-nav-link-btn"
//                   onClick={() => handleScrollTo("iso-overview")}
//                 >
//                   Overview
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="iso-nav-link iso-nav-link-btn"
//                   onClick={() => handleScrollTo("iso-clauses")}
//                 >
//                   Clauses
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="iso-nav-link iso-nav-link-btn"
//                   onClick={() => handleScrollTo("iso-annex-a")}
//                 >
//                   Annex A
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="iso-nav-link iso-nav-link-btn"
//                   onClick={() => handleScrollTo("iso-benefits")}
//                 >
//                   Benefits
//                 </button>
//               </li>
//             </ul>

            

//             <div className="iso-cta-buttons">
//               <button
//                 type="button"
//                 className="iso-btn iso-btn-secondary"
//                 onClick={() => goTo("/login")}
//               >
//                 Login
//               </button>
//               <button
//                 type="button"
//                 className="iso-btn iso-btn-primary"
//                 onClick={() => goTo("/demo")}
//               >
//                 Get a demo
//               </button>
//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* HERO SECTION */}
//       <section className="iso-hero">
//         <div className="iso-hero-inner">
//           <div className="iso-hero-content">
//             <div className="iso-hero-badge">
//               ISO 27001 · Information Security Management System
//             </div>
//             <h1 className="iso-hero-title">
//               Turn ISO 27001 into a living{" "}
//               <span>information security program</span>.
//             </h1>
//             <p className="iso-hero-description">
//               CalVant helps you implement and maintain an ISO 27001‑aligned
//               ISMS with mapped controls, continuous evidence collection, and
//               clear accountability across your organization.
//             </p>

//             <div className="iso-hero-cta">
//               <button
//                 type="button"
//                 className="iso-hero-primary"
//                 onClick={() => goTo("/demo")}
//               >
//                 <svg width="18" height="18" viewBox="0 0 24 24">
//                   <path fill="currentColor" d="M8 5v14l11-7z" />
//                 </svg>
//                 Get a live ISO 27001 demo
//               </button>
//               <button
//                 type="button"
//                 className="iso-hero-secondary"
//                 onClick={() => handleScrollTo("iso-overview")}
//               >
//                 View framework overview
//               </button>
//             </div>
//           </div>

//           <div className="iso-hero-visual">
//             <div className="iso-sphere">
//               <div className="iso-sphere-inner" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* OVERVIEW SECTION */}
//       <section id="iso-overview" className="iso-section">
//         <div className="iso-section-header">
//           <h2>What is ISO 27001?</h2>
//           <p>
//             ISO/IEC 27001 is the leading international standard for establishing,
//             implementing, maintaining and continually improving an Information
//             Security Management System (ISMS).
//           </p>
//         </div>

//         <div className="iso-overview-grid">
//           <div className="iso-overview-card">
//             <div className="iso-card-icon">🔐</div>
//             <h3>Structured ISMS framework</h3>
//             <p>
//               Define scope, context, and objectives. Establish policies,
//               procedures and controls that are proportionate to your
//               organization’s risk profile.
//             </p>
//           </div>

//           <div className="iso-overview-card">
//             <div className="iso-card-icon">📊</div>
//             <h3>Risk‑based decision‑making</h3>
//             <p>
//               Identify threats, vulnerabilities and impacts; evaluate risks; and
//               select treatment options that balance security with business
//               goals.
//             </p>
//           </div>

//           <div className="iso-overview-card">
//             <div className="iso-card-icon">✅</div>
//             <h3>Continuous improvement loop</h3>
//             <p>
//               Use audits, monitoring, incidents and metrics to drive corrective
//               actions and keep controls effective as your environment changes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CLAUSES SECTION */}
//       <section id="iso-clauses" className="iso-section">
//         <div className="iso-section-header">
//           <h2>Core ISO 27001 clauses</h2>
//           <p>
//             Clauses 4–10 form the backbone of your ISMS. They define how
//             security is embedded in your organization, not just which controls
//             you implement.
//           </p>
//         </div>

//         <div className="iso-clauses-container">
//           <div className="iso-clause-grid">
//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 4</span>
//               <h3>Context of the organization</h3>
//               <p>
//                 Understand internal and external issues, interested parties, and
//                 the scope of your ISMS.
//               </p>
//               <ul>
//                 <li>Define ISMS boundaries and applicability.</li>
//                 <li>Align security objectives with business goals.</li>
//                 <li>Identify regulatory, contractual and stakeholder needs.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 5</span>
//               <h3>Leadership and commitment</h3>
//               <p>
//                 Ensure top management is visibly accountable for information
//                 security and the ISMS.
//               </p>
//               <ul>
//                 <li>Assign roles, responsibilities and authorities.</li>
//                 <li>Integrate security into organizational processes.</li>
//                 <li>Provide resources and remove blockers.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 6</span>
//               <h3>Planning and risk management</h3>
//               <p>
//                 Address risks and opportunities for the ISMS and define
//                 measurable information security objectives.
//               </p>
//               <ul>
//                 <li>Maintain a documented risk assessment methodology.</li>
//                 <li>Develop risk treatment plans and SoA.</li>
//                 <li>Plan how objectives will be achieved and measured.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 7</span>
//               <h3>Support</h3>
//               <p>
//                 Provide the resources, competence, awareness, communication and
//                 documented information your ISMS needs.
//               </p>
//               <ul>
//                 <li>Define ISMS roles, skills and training needs.</li>
//                 <li>Run security awareness and communication programs.</li>
//                 <li>Control creation, updates and retention of documents.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 8</span>
//               <h3>Operational planning and control</h3>
//               <p>
//                 Plan, implement and control the processes needed to meet
//                 information security requirements.
//               </p>
//               <ul>
//                 <li>Operate risk treatment plans and Annex A controls.</li>
//                 <li>Manage outsourced processes and suppliers.</li>
//                 <li>Document operational procedures where needed.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clauses 9 &amp; 10</span>
//               <h3>Performance evaluation &amp; improvement</h3>
//               <p>
//                 Measure ISMS performance, run internal audits and management
//                 reviews, and drive continual improvement.
//               </p>
//               <ul>
//                 <li>Monitor KPIs, incidents and non‑conformities.</li>
//                 <li>Conduct regular management reviews.</li>
//                 <li>Implement corrective actions and track outcomes.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ANNEX A SECTION */}
//   <section id="iso-annex-a" className="iso-section">
//         <div className="iso-section-header">
//           <h2>Annex A controls – modernized</h2>
//           <p>
//             The 2022 revision of ISO 27001 organizes information security
//             controls into four high-level themes.
//           </p>
//         </div>

//         <div className="iso-annex-box-wrapper">
//           <div className="iso-annex-intro">
//             <h3>From 14 domains to 4 themes</h3>
//             <p>
//               ISO/IEC 27001:2022 consolidates the original 114 controls into 93
//               updated controls grouped under organizational, people,
//               physical and technological themes.
//             </p>
//           </div>
//         </div>

//         <div className="iso-domains-grid">
//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">Organizational controls</h4>
//             <p className="iso-domain-desc">
//               Policies, governance and processes that define how information
//               security is managed across the organization.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Information security policies and roles</li>
//               <li>Supplier relationships and third‑party risk</li>
//               <li>Risk assessment and treatment methodology</li>
//               <li>Project and change management requirements</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">People controls</h4>
//             <p className="iso-domain-desc">
//               Controls that ensure employees and contractors understand and
//               fulfill their security responsibilities.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Background screening and onboarding</li>
//               <li>Security awareness, training and guidance</li>
//               <li>Disciplinary processes and off‑boarding</li>
//               <li>Segregation of duties and access reviews</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">Physical controls</h4>
//             <p className="iso-domain-desc">
//               Measures that protect facilities, equipment and physical media
//               from unauthorized access or damage.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Secure areas and access management</li>
//               <li>Equipment placement and protection</li>
//               <li>Clear desk and clear screen practices</li>
//               <li>Secure disposal of media and assets</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">Technological controls</h4>
//             <p className="iso-domain-desc">
//               Controls that govern how systems are designed, configured,
//               monitored and protected.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Identity and access management</li>
//               <li>Network, application and endpoint security</li>
//               <li>Cryptography and key management</li>
//               <li>Logging, monitoring and backup strategies</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">New &amp; updated controls</h4>
//             <p className="iso-domain-desc">
//               The 2022 update introduces several new controls that address
//               modern technology and threat trends.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Threat intelligence and secure coding practices</li>
//               <li>Data masking and data leakage prevention</li>
//               <li>Configuration management and monitoring</li>
//               <li>Cloud services and information deletion</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* BENEFITS SECTION */}
//       <section id="iso-benefits" className="iso-section">
//         <div className="iso-section-header">
//           <h2>Business impact of ISO 27001</h2>
//           <p>
//             Beyond certification, a well‑run ISMS helps you reduce risk, build
//             customer trust and enable faster growth.
//           </p>
//         </div>

//         <div className="iso-benefits-grid">
//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">🏢</div>
//             <h3>Win enterprise deals</h3>
//             <p>
//               Many large customers require ISO 27001 certification as a minimum
//               bar for onboarding vendors that handle sensitive data.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">🛡️</div>
//             <h3>Demonstrate robust security</h3>
//             <p>
//               A certified ISMS proves that your security program is systematic,
//               repeatable and externally assessed—not just based on promises.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">⚖️</div>
//             <h3>Support regulatory compliance</h3>
//             <p>
//               ISO 27001 controls align with many regulatory expectations and can
//               support GDPR, HIPAA and other compliance journeys.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">📉</div>
//             <h3>Reduce incident impact</h3>
//             <p>
//               Strong risk assessment, monitoring and incident response help you
//               detect and contain security events faster.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">♻️</div>
//             <h3>Keep security current</h3>
//             <p>
//               Recurring internal audits, reviews and improvements prevent your
//               security posture from becoming outdated or ad‑hoc.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">🤝</div>
//             <h3>Align stakeholders</h3>
//             <p>
//               A documented ISMS clarifies responsibilities for leadership, IT,
//               DevOps, HR, legal and vendors, reducing gaps and overlaps.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* IMPLEMENTATION SECTION */}
//       <section className="iso-section">
//         <div className="iso-section-header">
//           <h2>Your ISO 27001 implementation journey</h2>
//           <p>
//             CalVant guides you from scoping and risk assessments through
//             control implementation, internal audits and certification.
//           </p>
//         </div>

//         <div className="iso-implementation-container">
//           <div className="iso-steps-grid">
//             <div className="iso-step-card">
//               <div className="iso-step-number">1</div>
//               <h3>Define scope &amp; context</h3>
//               <p>
//                 Determine which products, locations, processes and systems are
//                 included in your ISMS.
//               </p>
//               <ul>
//                 <li>Identify assets and data flows.</li>
//                 <li>Document internal and external issues.</li>
//                 <li>List interested parties and obligations.</li>
//               </ul>
//             </div>

//             <div className="iso-step-card">
//               <div className="iso-step-number">2</div>
//               <h3>Assess and treat risks</h3>
//               <p>
//                 Run structured risk assessments to understand threats and
//                 prioritize treatments.
//               </p>
//               <ul>
//                 <li>Define likelihood and impact scales.</li>
//                 <li>Evaluate inherent and residual risk.</li>
//                 <li>Choose treatment options and controls.</li>
//               </ul>
//             </div>

//             <div className="iso-step-card">
//               <div className="iso-step-number">3</div>
//               <h3>Implement Annex A controls</h3>
//               <p>
//                 Roll out organizational, people, physical and technological
//                 controls that address your risks.
//               </p>
//               <ul>
//                 <li>Set policies, standards and procedures.</li>
//                 <li>Implement technical safeguards and tooling.</li>
//                 <li>Train staff and embed processes.</li>
//               </ul>
//             </div>

//             <div className="iso-step-card">
//               <div className="iso-step-number">4</div>
//               <h3>Operate and measure the ISMS</h3>
//               <p>
//                 Monitor control effectiveness and ISMS performance using
//                 metrics, logs and reviews.
//               </p>
//               <ul>
//                 <li>Track incidents, non‑conformities and actions.</li>
//                 <li>Review KPIs and trends with leadership.</li>
//                 <li>Refine controls based on outcomes.</li>
//               </ul>
//             </div>

//             <div className="iso-step-card">
//               <div className="iso-step-number">5</div>
//               <h3>Internal audit &amp; management review</h3>
//               <p>
//                 Verify that your ISMS meets ISO 27001 requirements and is fit
//                 for purpose.
//               </p>
//               <ul>
//                 <li>Plan and execute internal audits.</li>
//                 <li>Summarize findings and improvement needs.</li>
//                 <li>Hold formal management review meetings.</li>
//               </ul>
//             </div>

//             <div className="iso-step-card">
//               <div className="iso-step-number">6</div>
//               <h3>Certification &amp; continual improvement</h3>
//               <p>
//                 Work with an accredited certification body and maintain your
//                 ISMS through surveillance audits.
//               </p>
//               <ul>
//                 <li>Prepare evidence for Stage 1 and Stage 2.</li>
//                 <li>Address non‑conformities and observations.</li>
//                 <li>Keep your ISMS evolving as your business grows.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* AUTOMATION SECTION */}
//       <section className="iso-section">
//         <div className="iso-section-header">
//           <h2>Automate ISO 27001 with CalVant</h2>
//           <p>
//             Replace manual trackers with a single platform that connects your
//             tools, controls and evidence to your ISMS.
//           </p>
//         </div>

//         <div className="iso-automation-grid">
//           <div className="iso-automation-text">
//             <h3>Continuous evidence, zero spreadsheet chaos</h3>
//             <p>
//               CalVant integrates with your cloud, CI/CD, HR and ticketing
//               stack to collect evidence automatically and keep control status
//               live.
//             </p>
//             <ul>
//               <li>Map assets, risks and Annex A controls in one model.</li>
//               <li>
//                 Auto‑link evidence from logs, tickets, scans and HR systems.
//               </li>
//               <li>
//                 Generate audit‑ready views for certification bodies and
//                 customers.
//               </li>
//             </ul>
//           </div>

//           <div className="iso-automation-visual">
//             <div className="iso-automation-placeholder">
//               <span>CalVant ISMS cockpit</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="iso-section">
//         <div className="iso-cta-section">
//           <h2>Ready to make ISO 27001 your growth advantage?</h2>
//           <p>
//             See how CalVant helps you build a modern ISMS, stay continuously
//             compliant and close security‑sensitive deals faster.
//           </p>
//           <div className="iso-cta-buttons">
//             <button
//               type="button"
//               className="iso-cta-btn iso-cta-btn-primary"
//               onClick={() => goTo("/demo")}
//             >
//               Get a demo
//             </button>
//             <button
//               type="button"
//               className="iso-cta-btn iso-cta-btn-secondary"
//               onClick={() => goTo("/contact")}
//             >
//               Talk to an expert
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="iso-footer">
//         <div className="iso-footer-content">
//           <div className="iso-footer-section">
//             <h4>CalVant</h4>
//             <p>
//               A modern compliance and security operations platform designed to
//               help teams operationalize ISO 27001 and adjacent frameworks.
//             </p>
//           </div>

//           <div className="iso-footer-section">
//             <h4>Frameworks</h4>
//             <ul>
//               <li>
//                 <a href="/iso-27001">ISO 27001</a>
//               </li>
//               <li>
//                 <a href="/iso-27701">ISO 27701</a>
//               </li>
//               <li>
//                 <a href="/soc-2">SOC 2</a>
//               </li>
//             </ul>
//           </div>

//           <div className="iso-footer-section">
//             <h4>Product</h4>
//             <ul>
//               <li>
//                 <a href="/features">Features</a>
//               </li>
//               <li>
//                 <a href="/pricing">Pricing</a>
//               </li>
//               <li>
//                 <a href="/templates">Policy templates</a>
//               </li>
//             </ul>
//           </div>

//           <div className="iso-footer-section">
//             <h4>Company</h4>
//             <ul>
//               <li>
//                 <a href="/about">About</a>
//               </li>
//               <li>
//                 <a href="/careers">Careers</a>
//               </li>
//               <li>
//                 <a href="/support">Support</a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="iso-footer-bottom">
//           © {new Date().getFullYear()} CalVant · ISO 27001 · Made in India
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ISO_27001;



// import React, { useState, useRef, useEffect } from "react";
// import { UserCircle2 } from "lucide-react";
// import "./ISO_27001.css";


// // HeaderDropdown must be defined before ISO_27001
// const HeaderDropdown = ({ label, options }) => {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleNavigate = (route) => {
//     setOpen(false);
//     window.location.href = route;
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="header-dropdown" ref={dropdownRef}>
//       <button
//         type="button"
//         className="header-dropdown-trigger"
//         onClick={() => setOpen(!open)}
//       >
//         {label}
//         <span className={`header-dropdown-arrow ${open ? "open" : ""}`}>
//           ▼
//         </span>
//       </button>

//       {open && (
//         <div className="header-dropdown-menu">
//           {options.map((opt) => (
//             <button
//               key={opt.label}
//               className="header-dropdown-item"
//               onClick={() => handleNavigate(opt.route)}
//             >
//               {opt.label}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const ISO_27001 = () => {
//   const handleScrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   const goTo = (path) => {
//     window.location.href = path;
//   };

//   return (
//     <div className="iso-page-root">
//       {/* HEADER & NAVBAR */}
//       <header className="iso-header">
//         <div className="iso-header-content">
//           <div className="iso-logo-section">
//             <div className="iso-logo-icon">
//               <svg viewBox="0 0 24 24">
//                 <path d="M12 2l7 3v6c0 5-3.5 9.1-7 11-3.5-1.9-7-6-7-11V5l7-3z" />
//               </svg>
//             </div>
//             <div>
//               <p className="iso-logo-text">CalVant</p>
//               <p className="iso-logo-subtext">ISO 27001 Framework</p>
//             </div>
//           </div>

//       <nav className="iso-header-nav">
//   <ul className="iso-nav-links">
//     <li>
//       <a href="/" className="iso-nav-link">
//         Home
//       </a>
//     </li>
//     <li>
//       <button
//         type="button"
//         className="iso-nav-link iso-nav-link-btn"
//         onClick={() => handleScrollTo("iso-overview")}
//       >
//         Overview
//       </button>
//     </li>
//     <li>
//       <button
//         type="button"
//         className="iso-nav-link iso-nav-link-btn"
//         onClick={() => handleScrollTo("iso-clauses")}
//       >
//         Clauses
//       </button>
//     </li>
//     <li>
//       <button
//         type="button"
//         className="iso-nav-link iso-nav-link-btn"
//         onClick={() => handleScrollTo("iso-annex-a")}
//       >
//         Annex A
//       </button>
//     </li>
//     <li>
//       <button
//         type="button"
//         className="iso-nav-link iso-nav-link-btn"
//         onClick={() => handleScrollTo("iso-benefits")}
//       >
//         Benefits
//       </button>
//     </li>
//   </ul>

//   <div className="dashboard-header-right">
//     {/* Frameworks dropdown */}
    

//     {/* Templates dropdown */}
    
//   </div>

//   {/* 🔥 FIXED: AUTO-DETECT LOGIN STATUS */}
//   {(() => {
//     // ✅ Define variables HERE (fixes ESLint)
//     const storedUser = JSON.parse(sessionStorage.getItem("user") || "null");
//     const isUserLoggedIn = !!storedUser;
    
//     return isUserLoggedIn && storedUser ? (
//       // ✅ LOGGED IN: Show user card (NO Login button)
//       <div className="iso-user-card">
//         <UserCircle2 size={20} className="iso-user-icon" />
//         <div className="iso-user-info">
//           <span className="iso-user-name">{storedUser.name || "User"}</span>
//           <span className="iso-user-role">
//             {storedUser.department?.name || "Consultant"}
//           </span>
//         </div>
//       </div>
//     ) : (
//       // ✅ NOT LOGGED IN: Show Login button
//       <button
//         type="button"
//         className="iso-btn iso-btn-secondary"
//         onClick={() => goTo("/login")}
//       >
//         Login
//       </button>
//     );
//   })()}

//   <div className="iso-cta-buttons">
//     <button
//       type="button"
//       className="iso-btn iso-btn-primary"
//       onClick={() => goTo("/demo")}
//     >
//       Get a demo
//     </button>
//   </div>
// </nav>
//         </div>
//       </header>

//       {/* HERO SECTION */}
//       <section className="iso-hero">
//         <div className="iso-hero-inner">
//           <div className="iso-hero-content">
//             <div className="iso-hero-badge">
//               ISO 27001 · Information Security Management System
//             </div>
//             <h1 className="iso-hero-title">
//               Turn ISO 27001 into a living{" "}
//               <span>information security program</span>.
//             </h1>
//             <p className="iso-hero-description">
//               CalVant helps you implement and maintain an ISO 27001‑aligned
//               ISMS with mapped controls, continuous evidence collection, and
//               clear accountability across your organization.
//             </p>

//             <div className="iso-hero-cta">
//               <button
//                 type="button"
//                 className="iso-hero-primary"
//                 onClick={() => goTo("/demo")}
//               >
//                 <svg width="18" height="18" viewBox="0 0 24 24">
//                   <path fill="currentColor" d="M8 5v14l11-7z" />
//                 </svg>
//                 Get a live ISO 27001 demo
//               </button>
//               <button
//                 type="button"
//                 className="iso-hero-secondary"
//                 onClick={() => handleScrollTo("iso-overview")}
//               >
//                 View framework overview
//               </button>
//             </div>
//           </div>

//         <div className="iso-hero-visual">
//   {/* 🔥 ISO 27001 COMPLIANCE GAUGE */}
//   <div className="compliance-gauge-container">
//     <div className="gauge-wrapper">
//       {/* Main Gauge */}
//       <div className="compliance-gauge">
//         <svg viewBox="0 0 300 300" className="gauge-svg">
//           <defs>
//             <linearGradient id="gaugeBg" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="rgba(15, 23, 42, 0.3)"/>
//               <stop offset="100%" stopColor="rgba(79, 70, 229, 0.1)"/>
//             </linearGradient>
//             <linearGradient id="gaugeFill" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#4f46e5"/>
//               <stop offset="50%" stopColor="#6366f1"/>
//               <stop offset="100%" stopColor="#a5b4fc"/>
//             </linearGradient>
//           </defs>
          
//           {/* Background Circle */}
//           <circle
//             cx="150"
//             cy="150"
//             r="130"
//             fill="none"
//             stroke="url(#gaugeBg)"
//             strokeWidth="20"
//             strokeLinecap="round"
//             className="gauge-bg"
//           />
          
//           {/* Progress Circle */}
//           <circle
//             cx="150"
//             cy="150"
//             r="130"
//             fill="none"
//             stroke="url(#gaugeFill)"
//             strokeWidth="20"
//             strokeLinecap="round"
//             strokeDasharray="816 816"
//             className="gauge-progress"
//             style={{ strokeDashoffset: 204 }} // 75% complete
//           />
//         </svg>
        
//         {/* Center Content */}
//         <div className="gauge-center">
//           <div className="compliance-badge">ISO 27001</div>
//           <div className="compliance-value">75%</div>
//           <div className="compliance-label">Compliance Achieved</div>
//         </div>
//       </div>
      
//       {/* Live Stats */}
//       <div className="live-stats">
//         <div className="stat-item">
//           <div className="stat-number">93</div>
//           <div className="stat-label">Controls</div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-number">4</div>
//           <div className="stat-label">Themes</div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-number">10</div>
//           <div className="stat-label">Clauses</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
//       </section>

//       {/* OVERVIEW SECTION */}
//       <section id="iso-overview" className="iso-section">
//         <div className="iso-section-header">
//           <h2>What is ISO 27001?</h2>
//           <p>
//             ISO/IEC 27001 is the leading international standard for establishing,
//             implementing, maintaining and continually improving an Information
//             Security Management System (ISMS).
//           </p>
//         </div>

        

//         <div className="iso-overview-grid">
//           <div className="iso-overview-card">
//             <div className="iso-card-icon">🔐</div>
//             <h3>Structured ISMS framework</h3>
//             <p>
//               Define scope, context, and objectives. Establish policies,
//               procedures and controls that are proportionate to your
//               organization’s risk profile.
//             </p>
//           </div>

//           <div className="iso-overview-card">
//             <div className="iso-card-icon">📊</div>
//             <h3>Risk‑based decision‑making</h3>
//             <p>
//               Identify threats, vulnerabilities and impacts; evaluate risks; and
//               select treatment options that balance security with business
//               goals.
//             </p>
//           </div>

//           <div className="iso-overview-card">
//             <div className="iso-card-icon">✅</div>
//             <h3>Continuous improvement loop</h3>
//             <p>
//               Use audits, monitoring, incidents and metrics to drive corrective
//               actions and keep controls effective as your environment changes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CLAUSES SECTION */}
//       <section id="iso-clauses" className="iso-section">
//         <div className="iso-section-header">
//           <h2>Core ISO 27001 clauses</h2>
//           <p>
//             Clauses 4–10 form the backbone of your ISMS. They define how
//             security is embedded in your organization, not just which controls
//             you implement.
//           </p>
//         </div>

//         <div className="iso-clauses-container">
//           <div className="iso-clause-grid">
//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 4</span>
//               <h3>Context of the organization</h3>
//               <p>
//                 Understand internal and external issues, interested parties, and
//                 the scope of your ISMS.
//               </p>
//               <ul>
//                 <li>Define ISMS boundaries and applicability.</li>
//                 <li>Align security objectives with business goals.</li>
//                 <li>Identify regulatory, contractual and stakeholder needs.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 5</span>
//               <h3>Leadership and commitment</h3>
//               <p>
//                 Ensure top management is visibly accountable for information
//                 security and the ISMS.
//               </p>
//               <ul>
//                 <li>Assign roles, responsibilities and authorities.</li>
//                 <li>Integrate security into organizational processes.</li>
//                 <li>Provide resources and remove blockers.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 6</span>
//               <h3>Planning and risk management</h3>
//               <p>
//                 Address risks and opportunities for the ISMS and define
//                 measurable information security objectives.
//               </p>
//               <ul>
//                 <li>Maintain a documented risk assessment methodology.</li>
//                 <li>Develop risk treatment plans and SoA.</li>
//                 <li>Plan how objectives will be achieved and measured.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 7</span>
//               <h3>Support</h3>
//               <p>
//                 Provide the resources, competence, awareness, communication and
//                 documented information your ISMS needs.
//               </p>
//               <ul>
//                 <li>Define ISMS roles, skills and training needs.</li>
//                 <li>Run security awareness and communication programs.</li>
//                 <li>Control creation, updates and retention of documents.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 8</span>
//               <h3>Operational planning and control</h3>
//               <p>
//                 Plan, implement and control the processes needed to meet
//                 information security requirements.
//               </p>
//               <ul>
//                 <li>Operate risk treatment plans and Annex A controls.</li>
//                 <li>Manage outsourced processes and suppliers.</li>
//                 <li>Document operational procedures where needed.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clauses 9 &amp; 10</span>
//               <h3>Performance evaluation &amp; improvement</h3>
//               <p>
//                 Measure ISMS performance, run internal audits and management
//                 reviews, and drive continual improvement.
//               </p>
//               <ul>
//                 <li>Monitor KPIs, incidents and non‑conformities.</li>
//                 <li>Conduct regular management reviews.</li>
//                 <li>Implement corrective actions and track outcomes.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ANNEX A SECTION */}
//       <section id="iso-annex-a" className="iso-section">
//         <div className="iso-section-header">
//           <h2>Annex A controls – modernized</h2>
//           <p>
//             The 2022 revision of ISO 27001 organizes information security
//             controls into four high-level themes.
//           </p>
//         </div>

//         <div className="iso-annex-box-wrapper">
//           <div className="iso-annex-intro">
//             <h3>From 14 domains to 4 themes</h3>
//             <p>
//               ISO/IEC 27001:2022 consolidates the original 114 controls into 93
//               updated controls grouped under organizational, people,
//               physical and technological themes.
//             </p>
//           </div>
//         </div>

//         <div className="iso-domains-grid">
//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">Organizational controls</h4>
//             <p className="iso-domain-desc">
//               Policies, governance and processes that define how information
//               security is managed across the organization.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Information security policies and roles</li>
//               <li>Supplier relationships and third‑party risk</li>
//               <li>Risk assessment and treatment methodology</li>
//               <li>Project and change management requirements</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">People controls</h4>
//             <p className="iso-domain-desc">
//               Controls that ensure employees and contractors understand and
//               fulfill their security responsibilities.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Background screening and onboarding</li>
//               <li>Security awareness, training and guidance</li>
//               <li>Disciplinary processes and off‑boarding</li>
//               <li>Segregation of duties and access reviews</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">Physical controls</h4>
//             <p className="iso-domain-desc">
//               Measures that protect facilities, equipment and physical media
//               from unauthorized access or damage.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Secure areas and access management</li>
//               <li>Equipment placement and protection</li>
//               <li>Clear desk and clear screen practices</li>
//               <li>Secure disposal of media and assets</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">Technological controls</h4>
//             <p className="iso-domain-desc">
//               Controls that govern how systems are designed, configured,
//               monitored and protected.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Identity and access management</li>
//               <li>Network, application and endpoint security</li>
//               <li>Cryptography and key management</li>
//               <li>Logging, monitoring and backup strategies</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">New &amp; updated controls</h4>
//             <p className="iso-domain-desc">
//               The 2022 update introduces several new controls that address
//               modern technology and threat trends.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Threat intelligence and secure coding practices</li>
//               <li>Data masking and data leakage prevention</li>
//               <li>Configuration management and monitoring</li>
//               <li>Cloud services and information deletion</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* BENEFITS SECTION */}
//       <section id="iso-benefits" className="iso-section">
//         <div className="iso-section-header">
//           <h2>Business impact of ISO 27001</h2>
//           <p>
//             Beyond certification, a well‑run ISMS helps you reduce risk, build
//             customer trust and enable faster growth.
//           </p>
//         </div>

//         <div className="iso-benefits-grid">
//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">🏢</div>
//             <h3>Win enterprise deals</h3>
//             <p>
//               Many large customers require ISO 27001 certification as a minimum
//               bar for onboarding vendors that handle sensitive data.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">🛡️</div>
//             <h3>Demonstrate robust security</h3>
//             <p>
//               A certified ISMS proves that your security program is systematic,
//               repeatable and externally assessed—not just based on promises.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">⚖️</div>
//             <h3>Support regulatory compliance</h3>
//             <p>
//               ISO 27001 controls align with many regulatory expectations and can
//               support GDPR, HIPAA and other compliance journeys.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">📉</div>
//             <h3>Reduce incident impact</h3>
//             <p>
//               Strong risk assessment, monitoring and incident response help you
//               detect and contain security events faster.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">♻️</div>
//             <h3>Keep security current</h3>
//             <p>
//               Recurring internal audits, reviews and improvements prevent your
//               security posture from becoming outdated or ad‑hoc.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">🤝</div>
//             <h3>Align stakeholders</h3>
//             <p>
//               A documented ISMS clarifies responsibilities for leadership, IT,
//               DevOps, HR, legal and vendors, reducing gaps and overlaps.
//             </p>
//           </div>
//         </div>
//       </section>

      
//       {/* CTA SECTION */}
//       <section className="iso-section">
//         <div className="iso-cta-section">
//           <h2>Ready to make ISO 27001 your growth advantage?</h2>
//           <p>
//             See how CalVant helps you build a modern ISMS, stay continuously
//             compliant and close security‑sensitive deals faster.
//           </p>
//           <div className="iso-cta-buttons">
//             <button
//               type="button"
//               className="iso-cta-btn iso-cta-btn-primary"
//               onClick={() => goTo("/demo")}
//             >
//               Get a demo
//             </button>
//             <button
//               type="button"
//               className="iso-cta-btn iso-cta-btn-secondary"
//               onClick={() => goTo("/contact")}
//             >
//               Talk to an expert
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="iso-footer">
//         <div className="iso-footer-content">
//           <div className="iso-footer-section">
//             <h4>CalVant</h4>
//             <p>
//               A modern compliance and security operations platform designed to
//               help teams operationalize ISO 27001 and adjacent frameworks.
//             </p>
//           </div>

//           <div className="iso-footer-section">
//             <h4>Frameworks</h4>
//             <ul>
//               <li>
//                 <a href="/iso-27001">ISO 27001</a>
//               </li>
//               <li>
//                 <a href="/iso-27701">ISO 27701</a>
//               </li>
//               <li>
//                 <a href="/soc-2">SOC 2</a>
//               </li>
//             </ul>
//           </div>

//           <div className="iso-footer-section">
//             <h4>Product</h4>
//             <ul>
//               <li>
//                 <a href="/features">Features</a>
//               </li>
//               <li>
//                 <a href="/pricing">Pricing</a>
//               </li>
//               <li>
//                 <a href="/templates">Policy templates</a>
//               </li>
//             </ul>
//           </div>

//           <div className="iso-footer-section">
//             <h4>Company</h4>
//             <ul>
//               <li>
//                 <a href="/about">About</a>
//               </li>
//               <li>
//                 <a href="/careers">Careers</a>
//               </li>
//               <li>
//                 <a href="/support">Support</a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="iso-footer-bottom">
//           © {new Date().getFullYear()} CalVant · ISO 27001 · Made in India
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ISO_27001;




// import React, { useState, useRef, useEffect } from "react";
// import { UserCircle2 } from "lucide-react";
// import "./ISO_27001.css"; 



// const ISO_27001 = () => {
//   const handleScrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   const goTo = (path) => {
//     window.location.href = path;
//   };
// useEffect(() => {
//   window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // or "smooth"
// }, []);

//   return (
//     <div className="iso-page-root procedures-theme">
//       {/* HEADER */}
    
// <header className="iso-header">
//   <div className="iso-header-content">
//     <div className="iso-logo-section">
//       <div className="iso-logo-icon">
//           <img 
//       src="/favicon.png" 
//       alt="CalVant Logo"
//       style={{
//         width: '70%',  
//         height: '70%',
//         objectFit: 'contain'
//       }}
//     />
//       </div>
//       <div>
//         <p className="iso-logo-text">CalVant</p>
//         <p className="iso-logo-subtext">ISO 27001 Framework</p>
//       </div>
//     </div>

//     <nav className="iso-header-nav">
//       <ul className="iso-nav-links">
       
//           <a href="/" className="iso-nav-link">Home</a>
        

//         <li>
//           <button
//             type="button"
//             className="iso-nav-link iso-nav-link-btn"
//             onClick={() => handleScrollTo("iso-overview")}
//           >
//             Overview
//           </button>
//         </li>

//         <li>
//           <button
//             type="button"
//             className="iso-nav-link iso-nav-link-btn"
//             onClick={() => handleScrollTo("iso-clauses")}
//           >
//             Clauses
//           </button>
//         </li>

//         <li>
//           <button
//             type="button"
//             className="iso-nav-link iso-nav-link-btn"
//             onClick={() => handleScrollTo("iso-annex-a")}
//           >
//             Annex A
//           </button>
//         </li>

//         <li>
//           <button
//             type="button"
//             className="iso-nav-link iso-nav-link-btn"
//             onClick={() => handleScrollTo("iso-benefits")}
//           >
//             Benefits
//           </button>
//         </li>
//       </ul>

//       {/* AUTO-DETECT LOGIN STATUS – UNCHANGED */}
//       {(() => {
//         const storedUser = JSON.parse(
//           sessionStorage.getItem("user") || "null"
//         );
//         const isUserLoggedIn = !!storedUser;

//         return isUserLoggedIn && storedUser ? (
//           <div className="iso-user-card">
//             <UserCircle2 size={20} className="iso-user-icon" />
//             <div className="iso-user-info">
//               <span className="iso-user-name">
//                 {storedUser.name || "User"}
//               </span>
//               <span className="iso-user-role">
//                 {storedUser.department?.name || "Consultant"}
//               </span>
//             </div>
//           </div>
//         ) : (
//           <button
//             type="button"
//             className="iso-btn iso-btn-secondary"
//             onClick={() => goTo("/login")}
//           >
//             Login
//           </button>
//         );
//       })()}
//     </nav>
//   </div>
// </header>


// {/* HERO SECTION - PROCEDURES THEME */}
// <section className="iso-hero">
//   <div className="iso-hero-inner">
//     <div className="iso-hero-content">
//       <div className="iso-hero-badge">
//         ISO 27001 · Information Security Management System
//       </div>

//       <h1 className="iso-hero-title">
//         Turn ISO 27001 into a living{" "}
//         <span>information security program</span>.
//       </h1>

//       <p className="iso-hero-description">
//         CalVant helps you implement and maintain an ISO 27001-aligned
//         ISMS with mapped controls, continuous evidence collection, and
//         clear accountability across your organization.
//       </p>
// {/* 
//       <div className="iso-hero-cta">
//         <button
//           type="button"
//           className="iso-hero-primary"
//           onClick={() => goTo("/demo")}
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24">
//             <path fill="currentColor" d="M8 5v14l11-7z" />
//           </svg>
//           Get a live ISO 27001 demo
//         </button>

//         <button
//           type="button"
//           className="iso-hero-secondary"
//           onClick={() => handleScrollTo("iso-overview")}
//         >
//           View framework overview
//         </button>
//       </div> */}


// <div className="iso-hero-cta">
//   {(() => {
//     const storedUser = JSON.parse(sessionStorage.getItem("user") || "null");
//     const isUserLoggedIn = !!storedUser;
//     return !isUserLoggedIn ? (
//       <button
//         type="button"
//         className="iso-hero-primary"
//         onClick={() => goTo("/demo")}
//       >
//         <svg width="18" height="18" viewBox="0 0 24 24">
//           <path fill="currentColor" d="M8 5v14l11-7z" />
//         </svg>
//         Get a live ISO 27001 demo
//       </button>
//     ) : null;
//   })()}
  
//   <button
//     type="button"
//     className="iso-hero-secondary"
//     onClick={() => handleScrollTo("iso-overview")}
//   >
//     View framework overview
//   </button>
// </div>

//       {/* HERO STATS ROW (keep if you had it before, or remove if not needed) */}
//       <div className="iso-hero-stats">
//         <div className="iso-stat-item iso-stat-item-main">
//           <span className="iso-stat-main-label">ISO 27001</span>
//           <span className="iso-stat-main-value">75%</span>
//           <span className="iso-stat-main-sub">COMPLIANCE</span>
//         </div>
//         <div className="iso-stat-item">
//           <span className="iso-stat-number">93</span>
//           <span className="iso-stat-label">Controls</span>
//         </div>
//         <div className="iso-stat-item">
//           <span className="iso-stat-number">4</span>
//           <span className="iso-stat-label">Themes</span>
//         </div>
//         <div className="iso-stat-item">
//           <span className="iso-stat-number">10</span>
//           <span className="iso-stat-label">Clauses</span>
//         </div>
//       </div>
//     </div>

//     {/* 3D ISO ORBIT ILLUSTRATION ON RIGHT */}
//     <div className="iso-hero-visual">
//       <div className="iso-orbit-container">
//         <div className="iso-orbit-background">
//           <div className="iso-orbit-ring iso-orbit-ring-1" />
//           <div className="iso-orbit-ring iso-orbit-ring-2" />
//           <div className="iso-orbit-ring iso-orbit-ring-3" />
//           <div className="iso-orbit-particle iso-orbit-p1" />
//           <div className="iso-orbit-particle iso-orbit-p2" />
//           <div className="iso-orbit-particle iso-orbit-p3" />
//         </div>

//         <div className="iso-orbit-card iso-orbit-card-main">
//           <div className="iso-orbit-main-title">Compliance check</div>
//           <div className="iso-orbit-main-gauge">
//             <div className="iso-orbit-main-circle">
//               <span>98%</span>
//             </div>
//             <p>All systems synced · 93 controls monitored</p>
//           </div>
//         </div>

//         <div className="iso-orbit-card iso-orbit-card-readiness">
//           <div className="iso-orbit-card-label">Readiness check</div>
//           <div className="iso-orbit-readiness-meter">
//             <div className="iso-orbit-readiness-arc" />
//             <div className="iso-orbit-readiness-needle" />
//             <div className="iso-orbit-readiness-value">99.2%</div>
//             <div className="iso-orbit-readiness-sub">ISO readiness</div>
//           </div>
//         </div>

//         <div className="iso-orbit-card iso-orbit-card-badge">
//           <div className="iso-orbit-badge">
//             <span className="iso-orbit-badge-top">ISO</span>
//             <span className="iso-orbit-badge-bottom">27001</span>
//           </div>
//         </div>

//         <div className="iso-orbit-card iso-orbit-card-controls">
//           <div className="iso-orbit-controls-title">Controls</div>
//           <div className="iso-orbit-controls-bars">
//             <div className="iso-orbit-bar iso-orbit-bar-ok">
//               <span className="iso-orbit-bar-label">26 Passing</span>
//             </div>
//             <div className="iso-orbit-bar iso-orbit-bar-warn">
//               <span className="iso-orbit-bar-label">3 Critical</span>
//             </div>
//             <div className="iso-orbit-bar iso-orbit-bar-fail">
//               <span className="iso-orbit-bar-label">1 Failing</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* ALL EXISTING SECTIONS - SAME CONTENT, NEW STYLING */}
//       <section id="iso-overview" className="iso-section">
//         <div className="iso-section-header">
//           <h2>What is ISO 27001?</h2>
//           <p>
//             ISO/IEC 27001 is the leading international standard for establishing,
//             implementing, maintaining and continually improving an Information
//             Security Management System (ISMS).
//           </p>
//         </div>

//         <div className="iso-overview-grid">
//           <div className="iso-overview-card">
//             <div className="iso-card-icon">🔐</div>
//             <h3>Structured ISMS framework</h3>
//             <p>
//               Define scope, context, and objectives. Establish policies,
//               procedures and controls that are proportionate to your
//               organization's risk profile.
//             </p>
//           </div>

//           <div className="iso-overview-card">
//             <div className="iso-card-icon">📊</div>
//             <h3>Risk‑based decision‑making</h3>
//             <p>
//               Identify threats, vulnerabilities and impacts; evaluate risks; and
//               select treatment options that balance security with business
//               goals.
//             </p>
//           </div>

//           <div className="iso-overview-card">
//             <div className="iso-card-icon">✅</div>
//             <h3>Continuous improvement loop</h3>
//             <p>
//               Use audits, monitoring, incidents and metrics to drive corrective
//               actions and keep controls effective as your environment changes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CLAUSES, ANNEX A, BENEFITS - SAME CONTENT, NEW `iso-*` CLASSES */}
//       <section id="iso-clauses" className="iso-section">
//         <div className="iso-section-header">
//           <h2>Core ISO 27001 clauses</h2>
//           <p>
//             Clauses 4–10 form the backbone of your ISMS. They define how
//             security is embedded in your organization, not just which controls
//             you implement.
//           </p>
//         </div>

//         <div className="iso-clauses-container">
//           <div className="iso-clause-grid">
//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 4</span>
//               <h3>Context of the organization</h3>
//               <p>
//                 Understand internal and external issues, interested parties, and
//                 the scope of your ISMS.
//               </p>
//               <ul>
//                 <li>Define ISMS boundaries and applicability.</li>
//                 <li>Align security objectives with business goals.</li>
//                 <li>Identify regulatory, contractual and stakeholder needs.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 5</span>
//               <h3>Leadership and commitment</h3>
//               <p>
//                 Ensure top management is visibly accountable for information
//                 security and the ISMS.
//               </p>
//               <ul>
//                 <li>Assign roles, responsibilities and authorities.</li>
//                 <li>Integrate security into organizational processes.</li>
//                 <li>Provide resources and remove blockers.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 6</span>
//               <h3>Planning and risk management</h3>
//               <p>
//                 Address risks and opportunities for the ISMS and define
//                 measurable information security objectives.
//               </p>
//               <ul>
//                 <li>Maintain a documented risk assessment methodology.</li>
//                 <li>Develop risk treatment plans and SoA.</li>
//                 <li>Plan how objectives will be achieved and measured.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 7</span>
//               <h3>Support</h3>
//               <p>
//                 Provide the resources, competence, awareness, communication and
//                 documented information your ISMS needs.
//               </p>
//               <ul>
//                 <li>Define ISMS roles, skills and training needs.</li>
//                 <li>Run security awareness and communication programs.</li>
//                 <li>Control creation, updates and retention of documents.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clause 8</span>
//               <h3>Operational planning and control</h3>
//               <p>
//                 Plan, implement and control the processes needed to meet
//                 information security requirements.
//               </p>
//               <ul>
//                 <li>Operate risk treatment plans and Annex A controls.</li>
//                 <li>Manage outsourced processes and suppliers.</li>
//                 <li>Document operational procedures where needed.</li>
//               </ul>
//             </div>

//             <div className="iso-clause-card">
//               <span className="iso-clause-number">Clauses 9 & 10</span>
//               <h3>Performance evaluation & improvement</h3>
//               <p>
//                 Measure ISMS performance, run internal audits and management
//                 reviews, and drive continual improvement.
//               </p>
//               <ul>
//                 <li>Monitor KPIs, incidents and non‑conformities.</li>
//                 <li>Conduct regular management reviews.</li>
//                 <li>Implement corrective actions and track outcomes.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="iso-annex-a" className="iso-section">
//         <div className="iso-section-header">
//           <h2>Annex A controls – modernized</h2>
//           <p>
//             The 2022 revision of ISO 27001 organizes information security
//             controls into four high-level themes.
//           </p>
//         </div>

//         <div className="iso-annex-box-wrapper">
//           <div className="iso-annex-intro">
//             <h3>From 14 domains to 4 themes</h3>
//             <p>
//               ISO/IEC 27001:2022 consolidates the original 114 controls into 93
//               updated controls grouped under organizational, people,
//               physical and technological themes.
//             </p>
//           </div>
//         </div>

//         <div className="iso-domains-grid">
//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">Organizational controls</h4>
//             <p className="iso-domain-desc">
//               Policies, governance and processes that define how information
//               security is managed across the organization.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Information security policies and roles</li>
//               <li>Supplier relationships and third‑party risk</li>
//               <li>Risk assessment and treatment methodology</li>
//               <li>Project and change management requirements</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">People controls</h4>
//             <p className="iso-domain-desc">
//               Controls that ensure employees and contractors understand and
//               fulfill their security responsibilities.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Background screening and onboarding</li>
//               <li>Security awareness, training and guidance</li>
//               <li>Disciplinary processes and off‑boarding</li>
//               <li>Segregation of duties and access reviews</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">Physical controls</h4>
//             <p className="iso-domain-desc">
//               Measures that protect facilities, equipment and physical media
//               from unauthorized access or damage.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Secure areas and access management</li>
//               <li>Equipment placement and protection</li>
//               <li>Clear desk and clear screen practices</li>
//               <li>Secure disposal of media and assets</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">Technological controls</h4>
//             <p className="iso-domain-desc">
//               Controls that govern how systems are designed, configured,
//               monitored and protected.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Identity and access management</li>
//               <li>Network, application and endpoint security</li>
//               <li>Cryptography and key management</li>
//               <li>Logging, monitoring and backup strategies</li>
//             </ul>
//           </div>

//           <div className="iso-domain-card">
//             <h4 className="iso-domain-title">New & updated controls</h4>
//             <p className="iso-domain-desc">
//               The 2022 update introduces several new controls that address
//               modern technology and threat trends.
//             </p>
//             <ul className="iso-domain-controls">
//               <li>Threat intelligence and secure coding practices</li>
//               <li>Data masking and data leakage prevention</li>
//               <li>Configuration management and monitoring</li>
//               <li>Cloud services and information deletion</li>
//             </ul>
//           </div>
//         </div>
        
//       </section>

//       <section id="iso-benefits" className="iso-section">
//         <div className="iso-section-header">
//           <h2>Business impact of ISO 27001</h2>
//           <p>
//             Beyond certification, a well‑run ISMS helps you reduce risk, build
//             customer trust and enable faster growth.
//           </p>
//         </div>

//         <div className="iso-benefits-grid">
//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">🏢</div>
//             <h3>Win enterprise deals</h3>
//             <p>
//               Many large customers require ISO 27001 certification as a minimum
//               bar for onboarding vendors that handle sensitive data.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">🛡️</div>
//             <h3>Demonstrate robust security</h3>
//             <p>
//               A certified ISMS proves that your security program is systematic,
//               repeatable and externally assessed—not just based on promises.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">⚖️</div>
//             <h3>Support regulatory compliance</h3>
//             <p>
//               ISO 27001 controls align with many regulatory expectations and can
//               support GDPR, HIPAA and other compliance journeys.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">📉</div>
//             <h3>Reduce incident impact</h3>
//             <p>
//               Strong risk assessment, monitoring and incident response help you
//               detect and contain security events faster.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">♻️</div>
//             <h3>Keep security current</h3>
//             <p>
//               Recurring internal audits, reviews and improvements prevent your
//               security posture from becoming outdated or ad‑hoc.
//             </p>
//           </div>

//           <div className="iso-benefit-card">
//             <div className="iso-benefit-icon">🤝</div>
//             <h3>Align stakeholders</h3>
//             <p>
//               A documented ISMS clarifies responsibilities for leadership, IT,
//               DevOps, HR, legal and vendors, reducing gaps and overlaps.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="iso-section">
//         <div className="iso-cta-section">
//           <h2>Ready to make ISO 27001 your growth advantage?</h2>
//           <p>
//             See how CalVant helps you build a modern ISMS, stay continuously
//             compliant and close security‑sensitive deals faster.
//           </p>
//           {/* <div className="iso-cta-buttons">
//             <button
//               type="button"
//               className="iso-cta-btn iso-cta-btn-primary"
//               onClick={() => goTo("/demo")}
//             >
//               Get a demo
//             </button>
//             <button
//               type="button"
//               className="iso-cta-btn iso-cta-btn-secondary"
//               onClick={() => goTo("/contact")}
//             >
//               Talk to an expert
//             </button>
//           </div> */}

//           <div className="iso-cta-buttons">
//   {(() => {
//     const storedUser = JSON.parse(sessionStorage.getItem("user") || "null");
//     const isUserLoggedIn = !!storedUser;
//     return !isUserLoggedIn ? (
//       <button
//         type="button"
//         className="iso-cta-btn iso-cta-btn-primary"
//         onClick={() => goTo("/demo")}
//       >
//         Get a demo
//       </button>
//     ) : null;
//   })()}
  
//   <button
//     type="button"
//     className="iso-cta-btn iso-cta-btn-secondary"
//     onClick={() => goTo("/contact")}
//   >
//     Talk to an expert
//   </button>
// </div>

//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="iso-footer">
//         <div className="iso-footer-content">
//           <div className="iso-footer-section">
//             <h4>CalVant</h4>
//             <p>
//               A modern compliance and security operations platform designed to
//               help teams operationalize ISO 27001 and adjacent frameworks.
//             </p>
//           </div>

//           <div className="iso-footer-section">
//             <h4>Frameworks</h4>
//             <ul>
//               <li><a href="/iso-27001">ISO 27001</a></li>
//               <li><a href="/iso-27701">ISO 27701</a></li>
//               <li><a href="/soc-2">SOC 2</a></li>
//             </ul>
//           </div>

//           <div className="iso-footer-section">
//             <h4>Product</h4>
//             <ul>
//               <li><a href="/features">Features</a></li>
//               <li><a href="/pricing">Pricing</a></li>
//               <li><a href="/templates">Policy templates</a></li>
//             </ul>
//           </div>

//           <div className="iso-footer-section">
//             <h4>Company</h4>
//             <ul>
//               <li><a href="/about">About</a></li>
//               <li><a href="/careers">Careers</a></li>
//               <li><a href="/support">Support</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="iso-footer-bottom">
//           © {new Date().getFullYear()} CalVant· ISO 27001 · Made in India[file:1]
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ISO_27001;




import React, { useState, useRef, useEffect } from "react";
import {
  UserCircle2,
  ShieldCheck,
  BarChart3,
  RefreshCw,
  Building2,
  Shield,
  Scale,
  TrendingDown,
  Recycle,
  Handshake,
} from "lucide-react";
import "./ISO_27001.css";

const ISO_27001 = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goTo = (path) => {
    window.location.href = path;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // or "smooth"
  }, []);

  return (
    <div className="iso-page-root procedures-theme">
      {/* HEADER */}
      <header className="iso-header">
        <div className="iso-header-content">
          <div className="iso-logo-section">
            <div className="iso-logo-icon">
              <img
                src="/favicon.png"
                alt="CalVant Logo"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <p className="iso-logo-text">CalVant</p>
              <p className="iso-logo-subtext">ISO 27001 Framework</p>
            </div>
          </div>

          <nav className="iso-header-nav">
            <ul className="iso-nav-links">
              <a href="/" className="iso-nav-link">
                Home
              </a>

              <li>
                <button
                  type="button"
                  className="iso-nav-link iso-nav-link-btn"
                  onClick={() => handleScrollTo("iso-overview")}
                >
                  Overview
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="iso-nav-link iso-nav-link-btn"
                  onClick={() => handleScrollTo("iso-clauses")}
                >
                  Clauses
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="iso-nav-link iso-nav-link-btn"
                  onClick={() => handleScrollTo("iso-annex-a")}
                >
                  Annex A
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="iso-nav-link iso-nav-link-btn"
                  onClick={() => handleScrollTo("iso-benefits")}
                >
                  Benefits
                </button>
              </li>
            </ul>

            {/* AUTO-DETECT LOGIN STATUS – UNCHANGED */}
            {(() => {
              const storedUser = JSON.parse(
                sessionStorage.getItem("user") || "null"
              );
              const isUserLoggedIn = !!storedUser;

              return isUserLoggedIn && storedUser ? (
                <div className="iso-user-card">
                  <UserCircle2 size={20} className="iso-user-icon" />
                  <div className="iso-user-info">
                    <span className="iso-user-name">
                      {storedUser.name || "User"}
                    </span>
                    <span className="iso-user-role">
                      {storedUser.department?.name || "Consultant"}
                    </span>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className="iso-btn iso-btn-secondary"
                  onClick={() => goTo("/login")}
                >
                  Login
                </button>
              );
            })()}
          </nav>
        </div>
      </header>

      {/* HERO SECTION - PROCEDURES THEME */}
      <section className="iso-hero">
        <div className="iso-hero-inner">
          <div className="iso-hero-content">
            <div className="iso-hero-badge">
              ISO 27001 · Information Security Management System
            </div>

            <h1 className="iso-hero-title">
              Turn ISO 27001 into a living{" "}
              <span>information security program</span>.
            </h1>

            <p className="iso-hero-description">
              CalVant helps you implement and maintain an ISO 27001-aligned ISMS
              with mapped controls, continuous evidence collection, and clear
              accountability across your organization.
            </p>

            <div className="iso-hero-cta">
              {(() => {
                const storedUser = JSON.parse(
                  sessionStorage.getItem("user") || "null"
                );
                const isUserLoggedIn = !!storedUser;
                return !isUserLoggedIn ? (
                  <button
                    type="button"
                    className="iso-hero-primary"
                    onClick={() => goTo("/demo")}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                    Get a live ISO 27001 demo
                  </button>
                ) : null;
              })()}

              <button
                type="button"
                className="iso-hero-secondary"
                onClick={() => handleScrollTo("iso-overview")}
              >
                View framework overview
              </button>
            </div>

            {/* HERO STATS ROW */}
            <div className="iso-hero-stats">
              <div className="iso-stat-item iso-stat-item-main">
                <span className="iso-stat-main-label">ISO 27001</span>
                <span className="iso-stat-main-value">75%</span>
                <span className="iso-stat-main-sub">COMPLIANCE</span>
              </div>
              <div className="iso-stat-item">
                <span className="iso-stat-number">93</span>
                <span className="iso-stat-label">Controls</span>
              </div>
              <div className="iso-stat-item">
                <span className="iso-stat-number">4</span>
                <span className="iso-stat-label">Themes</span>
              </div>
              <div className="iso-stat-item">
                <span className="iso-stat-number">10</span>
                <span className="iso-stat-label">Clauses</span>
              </div>
            </div>
          </div>

          {/* 3D ISO ORBIT ILLUSTRATION ON RIGHT */}
          <div className="iso-hero-visual">
            <div className="iso-orbit-container">
              <div className="iso-orbit-background">
                <div className="iso-orbit-ring iso-orbit-ring-1" />
                <div className="iso-orbit-ring iso-orbit-ring-2" />
                <div className="iso-orbit-ring iso-orbit-ring-3" />
                <div className="iso-orbit-particle iso-orbit-p1" />
                <div className="iso-orbit-particle iso-orbit-p2" />
                <div className="iso-orbit-particle iso-orbit-p3" />
              </div>

              <div className="iso-orbit-card iso-orbit-card-main">
                <div className="iso-orbit-main-title">Compliance check</div>
                <div className="iso-orbit-main-gauge">
                  <div className="iso-orbit-main-circle">
                    <span>98%</span>
                  </div>
                  <p>All systems synced · 93 controls monitored</p>
                </div>
              </div>

              <div className="iso-orbit-card iso-orbit-card-readiness">
                <div className="iso-orbit-card-label">Readiness check</div>
                <div className="iso-orbit-readiness-meter">
                  <div className="iso-orbit-readiness-arc" />
                  <div className="iso-orbit-readiness-needle" />
                  <div className="iso-orbit-readiness-value">99.2%</div>
                  <div className="iso-orbit-readiness-sub">ISO readiness</div>
                </div>
              </div>

              <div className="iso-orbit-card iso-orbit-card-badge">
                <div className="iso-orbit-badge">
                  <span className="iso-orbit-badge-top">ISO</span>
                  <span className="iso-orbit-badge-bottom">27001</span>
                </div>
              </div>

              <div className="iso-orbit-card iso-orbit-card-controls">
                <div className="iso-orbit-controls-title">Controls</div>
                <div className="iso-orbit-controls-bars">
                  <div className="iso-orbit-bar iso-orbit-bar-ok">
                    <span className="iso-orbit-bar-label">26 Passing</span>
                  </div>
                  <div className="iso-orbit-bar iso-orbit-bar-warn">
                    <span className="iso-orbit-bar-label">3 Critical</span>
                  </div>
                  <div className="iso-orbit-bar iso-orbit-bar-fail">
                    <span className="iso-orbit-bar-label">1 Failing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="iso-overview" className="iso-section">
        <div className="iso-section-header">
          <h2>What is ISO 27001?</h2>
          <p>
            ISO/IEC 27001 is the leading international standard for
            establishing, implementing, maintaining and continually improving an
            Information Security Management System (ISMS).
          </p>
        </div>

        <div className="iso-overview-grid">
          <div className="iso-overview-card">
            <div className="iso-card-icon">
              <ShieldCheck size={32} />
            </div>
            <h3>Structured ISMS framework</h3>
            <p>
              Define scope, context, and objectives. Establish policies,
              procedures and controls that are proportionate to your
              organization's risk profile.
            </p>
          </div>

          <div className="iso-overview-card">
            <div className="iso-card-icon">
              <BarChart3 size={32} />
            </div>
            <h3>Risk‑based decision‑making</h3>
            <p>
              Identify threats, vulnerabilities and impacts; evaluate risks; and
              select treatment options that balance security with business
              goals.
            </p>
          </div>

          <div className="iso-overview-card">
            <div className="iso-card-icon">
              <RefreshCw size={32} />
            </div>
            <h3>Continuous improvement loop</h3>
            <p>
              Use audits, monitoring, incidents and metrics to drive corrective
              actions and keep controls effective as your environment changes.
            </p>
          </div>
        </div>
      </section>

      {/* CLAUSES */}
      <section id="iso-clauses" className="iso-section">
        <div className="iso-section-header">
          <h2>Core ISO 27001 clauses</h2>
          <p>
            Clauses 4–10 form the backbone of your ISMS. They define how
            security is embedded in your organization, not just which controls
            you implement.
          </p>
        </div>

        <div className="iso-clauses-container">
          <div className="iso-clause-grid">
            <div className="iso-clause-card">
              <span className="iso-clause-number">Clause 4</span>
              <h3>Context of the organization</h3>
              <p>
                Understand internal and external issues, interested parties, and
                the scope of your ISMS.
              </p>
              <ul>
                <li>Define ISMS boundaries and applicability.</li>
                <li>Align security objectives with business goals.</li>
                <li>Identify regulatory, contractual and stakeholder needs.</li>
              </ul>
            </div>

            <div className="iso-clause-card">
              <span className="iso-clause-number">Clause 5</span>
              <h3>Leadership and commitment</h3>
              <p>
                Ensure top management is visibly accountable for information
                security and the ISMS.
              </p>
              <ul>
                <li>Assign roles, responsibilities and authorities.</li>
                <li>Integrate security into organizational processes.</li>
                <li>Provide resources and remove blockers.</li>
              </ul>
            </div>

            <div className="iso-clause-card">
              <span className="iso-clause-number">Clause 6</span>
              <h3>Planning and risk management</h3>
              <p>
                Address risks and opportunities for the ISMS and define
                measurable information security objectives.
              </p>
              <ul>
                <li>Maintain a documented risk assessment methodology.</li>
                <li>Develop risk treatment plans and SoA.</li>
                <li>Plan how objectives will be achieved and measured.</li>
              </ul>
            </div>

            <div className="iso-clause-card">
              <span className="iso-clause-number">Clause 7</span>
              <h3>Support</h3>
              <p>
                Provide the resources, competence, awareness, communication and
                documented information your ISMS needs.
              </p>
              <ul>
                <li>Define ISMS roles, skills and training needs.</li>
                <li>Run security awareness and communication programs.</li>
                <li>Control creation, updates and retention of documents.</li>
              </ul>
            </div>

            <div className="iso-clause-card">
              <span className="iso-clause-number">Clause 8</span>
              <h3>Operational planning and control</h3>
              <p>
                Plan, implement and control the processes needed to meet
                information security requirements.
              </p>
              <ul>
                <li>Operate risk treatment plans and Annex A controls.</li>
                <li>Manage outsourced processes and suppliers.</li>
                <li>Document operational procedures where needed.</li>
              </ul>
            </div>

            <div className="iso-clause-card">
              <span className="iso-clause-number">Clauses 9 & 10</span>
              <h3>Performance evaluation & improvement</h3>
              <p>
                Measure ISMS performance, run internal audits and management
                reviews, and drive continual improvement.
              </p>
              <ul>
                <li>Monitor KPIs, incidents and non‑conformities.</li>
                <li>Conduct regular management reviews.</li>
                <li>Implement corrective actions and track outcomes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ANNEX A */}
      <section id="iso-annex-a" className="iso-section">
        <div className="iso-section-header">
          <h2>Annex A controls – modernized</h2>
          <p>
            The 2022 revision of ISO 27001 organizes information security
            controls into four high-level themes.
          </p>
        </div>

        <div className="iso-annex-box-wrapper">
          <div className="iso-annex-intro">
            <h3>From 14 domains to 4 themes</h3>
            <p>
              ISO/IEC 27001:2022 consolidates the original 114 controls into 93
              updated controls grouped under organizational, people, physical
              and technological themes.
            </p>
          </div>
        </div>

        <div className="iso-domains-grid">
          <div className="iso-domain-card">
            <h4 className="iso-domain-title">Organizational controls</h4>
            <p className="iso-domain-desc">
              Policies, governance and processes that define how information
              security is managed across the organization.
            </p>
            <ul className="iso-domain-controls">
              <li>Information security policies and roles</li>
              <li>Supplier relationships and third‑party risk</li>
              <li>Risk assessment and treatment methodology</li>
              <li>Project and change management requirements</li>
            </ul>
          </div>

          <div className="iso-domain-card">
            <h4 className="iso-domain-title">People controls</h4>
            <p className="iso-domain-desc">
              Controls that ensure employees and contractors understand and
              fulfill their security responsibilities.
            </p>
            <ul className="iso-domain-controls">
              <li>Background screening and onboarding</li>
              <li>Security awareness, training and guidance</li>
              <li>Disciplinary processes and off‑boarding</li>
              <li>Segregation of duties and access reviews</li>
            </ul>
          </div>

          <div className="iso-domain-card">
            <h4 className="iso-domain-title">Physical controls</h4>
            <p className="iso-domain-desc">
              Measures that protect facilities, equipment and physical media
              from unauthorized access or damage.
            </p>
            <ul className="iso-domain-controls">
              <li>Secure areas and access management</li>
              <li>Equipment placement and protection</li>
              <li>Clear desk and clear screen practices</li>
              <li>Secure disposal of media and assets</li>
            </ul>
          </div>

          <div className="iso-domain-card">
            <h4 className="iso-domain-title">Technological controls</h4>
            <p className="iso-domain-desc">
              Controls that govern how systems are designed, configured,
              monitored and protected.
            </p>
            <ul className="iso-domain-controls">
              <li>Identity and access management</li>
              <li>Network, application and endpoint security</li>
              <li>Cryptography and key management</li>
              <li>Logging, monitoring and backup strategies</li>
            </ul>
          </div>

          <div className="iso-domain-card">
            <h4 className="iso-domain-title">New & updated controls</h4>
            <p className="iso-domain-desc">
              The 2022 update introduces several new controls that address
              modern technology and threat trends.
            </p>
            <ul className="iso-domain-controls">
              <li>Threat intelligence and secure coding practices</li>
              <li>Data masking and data leakage prevention</li>
              <li>Configuration management and monitoring</li>
              <li>Cloud services and information deletion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="iso-benefits" className="iso-section">
        <div className="iso-section-header">
          <h2>Business impact of ISO 27001</h2>
          <p>
            Beyond certification, a well‑run ISMS helps you reduce risk, build
            customer trust and enable faster growth.
          </p>
        </div>

        <div className="iso-benefits-grid">
          <div className="iso-benefit-card">
            <div className="iso-benefit-icon">
              <Building2 size={32} />
            </div>
            <h3>Win enterprise deals</h3>
            <p>
              Many large customers require ISO 27001 certification as a minimum
              bar for onboarding vendors that handle sensitive data.
            </p>
          </div>

          <div className="iso-benefit-card">
            <div className="iso-benefit-icon">
              <Shield size={32} />
            </div>
            <h3>Demonstrate robust security</h3>
            <p>
              A certified ISMS proves that your security program is systematic,
              repeatable and externally assessed—not just based on promises.
            </p>
          </div>

          <div className="iso-benefit-card">
            <div className="iso-benefit-icon">
              <Scale size={32} />
            </div>
            <h3>Support regulatory compliance</h3>
            <p>
              ISO 27001 controls align with many regulatory expectations and can
              support GDPR, HIPAA and other compliance journeys.
            </p>
          </div>

          <div className="iso-benefit-card">
            <div className="iso-benefit-icon">
              <TrendingDown size={32} />
            </div>
            <h3>Reduce incident impact</h3>
            <p>
              Strong risk assessment, monitoring and incident response help you
              detect and contain security events faster.
            </p>
          </div>

          <div className="iso-benefit-card">
            <div className="iso-benefit-icon">
              <Recycle size={32} />
            </div>
            <h3>Keep security current</h3>
            <p>
              Recurring internal audits, reviews and improvements prevent your
              security posture from becoming outdated or ad‑hoc.
            </p>
          </div>

          <div className="iso-benefit-card">
            <div className="iso-benefit-icon">
              <Handshake size={32} />
            </div>
            <h3>Align stakeholders</h3>
            <p>
              A documented ISMS clarifies responsibilities for leadership, IT,
              DevOps, HR, legal and vendors, reducing gaps and overlaps.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="iso-section">
        <div className="iso-cta-section">
          <h2>Ready to make ISO 27001 your growth advantage?</h2>
          <p>
            See how CalVant helps you build a modern ISMS, stay continuously
            compliant and close security‑sensitive deals faster.
          </p>

          <div className="iso-cta-buttons">
            {(() => {
              const storedUser = JSON.parse(
                sessionStorage.getItem("user") || "null"
              );
              const isUserLoggedIn = !!storedUser;
              return !isUserLoggedIn ? (
                <button
                  type="button"
                  className="iso-cta-btn iso-cta-btn-primary"
                  onClick={() => goTo("/demo")}
                >
                  Get a demo
                </button>
              ) : null;
            })()}

            <button
              type="button"
              className="iso-cta-btn iso-cta-btn-secondary"
              onClick={() => goTo("/contact")}
            >
              Talk to an expert
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="iso-footer">
        <div className="iso-footer-content">
          <div className="iso-footer-section">
            <h4>CalVant</h4>
            <p>
              A modern compliance and security operations platform designed to
              help teams operationalize ISO 27001 and adjacent frameworks.
            </p>
          </div>

          <div className="iso-footer-section">
            <h4>Frameworks</h4>
            <ul>
              <li>
                <a href="/iso-27001">ISO 27001</a>
              </li>
              <li>
                <a href="/iso-27701">ISO 27701</a>
              </li>
              <li>
                <a href="/soc-2">SOC 2</a>
              </li>
            </ul>
          </div>

          <div className="iso-footer-section">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/templates">Policy templates</a>
              </li>
            </ul>
          </div>

          <div className="iso-footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="iso-footer-bottom">
          © {new Date().getFullYear()} CalVant· ISO 27001 · Made in India[file:1]
        </div>
      </footer>
    </div>
  );
};

export default ISO_27001;
