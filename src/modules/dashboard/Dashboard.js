// import React, { useState, useEffect, useRef } from 'react';
// import { useHistory } from 'react-router-dom';
// import './Dashboard.css';
// import {
//   ShieldCheck, FileText, Activity, LogIn, UserCircle2, Lock, LogOut,
//   TrendingUp, CheckCircle, AlertCircle, Users, Zap, BarChart3, ToolCase,
//   BookCheck, ChevronDown, Play, Menu, X
// } from 'lucide-react';
// import ChangePasswordModal from './ChangePasswordModal';
// import ISO27001 from './FrameWorks/ISO_27001';
// import ISO27701 from './FrameWorks/ISO_27701';
// import Procedures from './Template/Procedures';
// import Policies from './Template/Policies';
// import SprintoReplica from './SprintoReplica';

// const Hero3DEarth = ({ isLoggedIn, user }) => {
//   const [mounted, setMounted] = useState(false);
//   const history = useHistory();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <section className={`hero-section ${mounted ? 'hero-loaded' : ''}`}>
//       <div className="hero-inner">
//         <div className="hero-text">
//           <span className="hero-badge">
//             {isLoggedIn ? `Welcome back, ${user?.name}` : 'Security Team'}
//           </span>
//           <h1 className="hero-title">SafeSphere Enterprise Risk & Compliance Intelligence</h1>
//           <p className="hero-description">
//             A unified control plane for risk assessment, documentation, and compliance automation.
//             Visualize your security posture across frameworks like ISO 27001 and NIST in real time.
//           </p>
//           <div className="hero-cta-row">
//             {isLoggedIn ? (
//               <button
//                 className="hero-cta-primary"
//                 onClick={() => history.push('/risk-assessment')}
//               >
//                 Go to Risk Dashboard
//               </button>
//             ) : (
//               <>
//                 <button
//                   className="hero-cta-primary"
//                   onClick={() => history.push('/login')}
//                 >
//                   Get Started
//                 </button>
//                 <button
//                   className="hero-cta-secondary"
//                   onClick={() => history.push('/demo')}
//                 >
//                   <LogIn size={16} />
//                   Get a Demo
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//         <div className="hero-meta">
//           <span>ISO 27001 • NIST CSF • SOC 2</span>
//           <span>Continuous monitoring • Audit-ready evidence</span>
//         </div>
//       </div>
//       <div className="hero-visual" style={{ order: 2 }}>
//         <div className="hero-sphere">
//           <div className="hero-sphere-inner"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const CoreCards = () => {
//   const history = useHistory();
//   const cards = [
//     {
//       title: 'Risk Assessment',
//       description: 'Continuously score, prioritize, and track risks across assets, vendors, and business units.',
//       icon: ShieldCheck,
//       size: 26
//     },
//     {
//       title: 'Documentation Management',
//       description: 'Centralize policies, procedures, and evidence with version control and review workflows.',
//       icon: FileText,
//       size: 26
//     },
//     {
//       title: 'Gap Assessment',
//       description: 'Map ISO and NIST controls, highlight gaps, and generate implementation roadmaps.',
//       icon: Activity,
//       size: 26
//     }
//   ];

//   return (
//     <section className="corecards-section">
//       <div className="corecards-header">
//         <h2>Core Intelligence Pillars</h2>
//         <p>Everything starts with understanding risk, documenting controls, and closing compliance gaps. SafeSphere unifies all three.</p>
//       </div>
//       <div className="corecards-grid">
//         {cards.map((card, idx) => (
//           <div key={card.title} className={`corecard corecard-${idx}`}>
//             <div className="corecard-icon">
//               <card.icon size={card.size} />
//             </div>
//             <h3>{card.title}</h3>
//             <p>{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const SplitEarthSection = () => (
//   <section className="split-section">
//     <div className="split-text">
//       <h2>Compliance Intelligence in Motion</h2>
//       <p>SafeSphere continuously ingests signals from your cloud, infrastructure, and business processes. Controls are auto-mapped to ISO 27001 and NIST CSF so you always know what's in place, what's drifting, and what's at risk.</p>
//       <ul>
//         <li>Automated control mapping and evidence suggestions</li>
//         <li>Live posture snapshots across all frameworks</li>
//         <li>Scenario views for audits, board reviews, and incidents</li>
//       </ul>
//     </div>
//     <div className="split-visual">
//       <div className="split-sphere">
//         <div className="split-sphere-inner"></div>
//       </div>
//       <div className="split-orbit-ring"></div>
//     </div>
//   </section>
// );

// const RotatingFeatures = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const features = [
//     { name: 'Team Collaboration Hub', icon: Users, short: 'Coordinate tasks, approvals, and evidence in a single workspace.' },
//     { name: 'Continuous Risk Monitoring', icon: TrendingUp, short: 'Detect control drift and critical risks in real time across assets.' },
//     { name: 'Enterprise Grade Security', icon: ShieldCheck, short: 'Zero trust access, strong encryption, and multi region resilience.' },
//     { name: 'Intelligence Analytics', icon: BarChart3, short: 'Surface trends, hotspots, and prioritized remediation with AI.' },
//     { name: 'Custom Reporting', icon: FileText, short: 'Generate audit ready, stakeholder friendly reports on demand.' }
//   ];

//   const anglePerItem = 360 / features.length;
//   const radius = 230;
//   const center = 270;

//   const handleCenterClick = () => setActiveIndex(null);

//   return (
//     <section className="rot-pro-section flex justify-center">
//       <SprintoReplica />
//     </section>
//   );
// };

// const WhySafeSphere = () => {
//   const history = useHistory();
//   const pillars = [
//     {
//       title: 'Reduce Risk & Compliance Burden',
//       icon: ShieldCheck,
//       size: 24,
//       desc: 'Consolidate tools, automate evidence, and remove spreadsheet work from your security team.'
//     },
//     {
//       title: 'Accelerate Compliance Readiness',
//       icon: TrendingUp,
//       size: 24,
//       desc: 'Pre-built templates and guided workflows shorten ISO and SOC 2 timelines from months to weeks.'
//     },
//     {
//       title: 'Cut Operational Costs',
//       icon: Zap,
//       size: 24,
//       desc: 'Reuse evidence across frameworks and automate follow-ups to cut manual hours by up to 50%.'
//     },
//     {
//       title: 'Improve Security Posture',
//       icon: BarChart3,
//       size: 24,
//       desc: 'Risk scoring and continuous monitoring keep your posture live, not locked in last year\'s report.'
//     },
//     {
//       title: 'Improve Gaps from Findings',
//       icon: ToolCase,
//       size: 24,
//       desc: 'Transform audit findings into actionable tasks. Track remediation progress and automatically close compliance gaps.'
//     },
//     {
//       title: 'All Documents at One Place',
//       icon: BookCheck,
//       size: 24,
//       desc: 'A centralized repository for all policies, procedures, and evidence. Maintain version control and simplify document retrieval.'
//     }
//   ];

//   return (
//     <section className="why-section">
//       <div className="why-header">
//         <h2>Why SafeSphere</h2>
//         <p>Four pillars designed for modern security and compliance teams.</p>
//       </div>
//       <div className="why-grid">
//         {pillars.map((p, idx) => (
//           <div key={p.title} className={`why-card why-card-${idx}`}>
//             <div className="why-icon">
//               <p.icon size={p.size} />
//             </div>
//             <h3>{p.title}</h3>
//             <p>{p.desc}</p>
//           </div>
//         ))}
//       </div>
//       <div className="hero-inner" style={{ width: '100%' }}>
//         <div className="hero-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
//           <div className="hero-cta-row" style={{ display: 'flex', justifyContent: 'center' }}>
//             <button
//               className="hero-cta-secondary"
//               onClick={() => history.push('/demo')}
//               style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}
//             >
//               <LogIn size={16} />
//               Get a Demo
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ExtraFeaturesLongScroll = () => {
//   const items = [
//     { title: 'Automated Evidence Collection', desc: 'Connect cloud providers and ticketing tools to auto-pull screenshots, logs, and approvals.' },
//     { title: 'Framework Mapping (ISO, NIST)', desc: 'One control library mapped across frameworks so you never duplicate work.' },
//     { title: 'Role-Based Access Control', desc: 'Give auditors, executives, and engineers tailored views without exposing sensitive data.' },
//     { title: 'Compliance Dashboards', desc: 'See real-time coverage, residual risk, and exceptions in a single pane of glass.' },
//     { title: 'Audit Trail Logs', desc: 'Immutable timelines for every change, ready for regulators and internal reviews.' },
//     { title: 'Secure Cloud Architecture', desc: 'Built for AWS with encryption, segmentation, and hardened services.' },
//     { title: 'AI-Driven Recommendations', desc: 'Let SafeSphere surface next-best actions based on your controls and incidents.' }
//   ];

//   return (
//     <section className="extra-section">
//       <div className="extra-inner">
//         <h2>Built for Enterprise-Grade Compliance</h2>
//         <p>As you scroll, SafeSphere reveals everything your team needs from evidence capture to AI insights.</p>
//         <div className="extra-grid">
//           {items.map((item, idx) => (
//             <div key={item.title} className={`extra-card extra-card-${idx}`}>
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const HeaderDropdown = ({ label, options }) => {
//   const history = useHistory();
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleNavigate = (route) => {
//     setOpen(false);
//     history.push(route);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     if (open) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [open]);

//   return (
//     <div className="header-dropdown" ref={dropdownRef}>
//       <button
//         className="header-dropdown-trigger"
//         onClick={() => setOpen(prev => !prev)}
//       >
//         <span>{label}</span>
//         <ChevronDown size={16} className={`header-dropdown-icon ${open ? 'open' : ''}`} />
//       </button>
//       {open && (
//         <div className="header-dropdown-menu">
//           {options.map(opt => (
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

// const Dashboard = () => {
//   const history = useHistory();
//   const user = JSON.parse(sessionStorage.getItem('user'));
//   const [showChangePassword, setShowChangePassword] = useState(false);
//   const [expandedFaq, setExpandedFaq] = useState(null);
//   const [counters, setCounters] = useState({
//     companies: 0,
//     risks: 0,
//     compliance: 0
//   });

//   useEffect(() => {
//     let interval;
//     if (counters.companies < 500) {
//       interval = setInterval(() => {
//         setCounters(prev => ({
//           ...prev,
//           companies: Math.min(prev.companies + 10, 500),
//           risks: Math.min(prev.risks + 100, 50000),
//           compliance: Math.min(prev.compliance + 1, 99)
//         }));
//       }, 20);
//     }
//     return () => clearInterval(interval);
//   }, [counters]);

//   // LOGGED-IN VIEW - WITH LOGOUT BUTTON, REMOVED DEMO BUTTONS AND 6 SECTIONS
//   if (user) {
//     return (
//       <div className="dashboard-signed-in">
//         <header className="dashboard-header">
//           <div className="dashboard-header-content">
//             <div className="dashboard-logo-section">
//               <div className="dashboard-logo-icon">
//                 <ShieldCheck className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h1 className="dashboard-logo-text">SAFESPHERE</h1>
//                 <p className="dashboard-logo-subtext">Enterprise Risk & Compliance Platform</p>
//               </div>
//             </div>

//             <div className="dashboard-header-right">
//               <HeaderDropdown
//                 label="Frameworks"
//                 options={[
//                   { label: 'ISO 27001', route: '/iso-27001' },
//                   { label: 'ISO 27701', route: '/iso-27701' }
//                 ]}
//               />
//               <HeaderDropdown
//                 label="Templates"
//                 options={[
//                   { label: 'Policy Templates', route: '/PoliciesPage' },
//                   { label: 'Risk Templates', route: '/risk-templates' }
//                 ]}
//               />

//               <div className="dashboard-user-card">
//                 <UserCircle2 className="text-indigo-600 w-5 h-5" />
//                 <div className="dashboard-user-info">
//                   <span className="dashboard-user-name">{user.name} User</span>
//                   <span className="dashboard-user-role">{user.department?.name} Consultant</span>
//                 </div>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                   <button
//                     onClick={() => setShowChangePassword(true)}
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '6px',
//                       padding: '8px 12px',
//                       fontSize: '12px',
//                       fontWeight: '500',
//                       color: '#4b5563',
//                       backgroundColor: 'transparent',
//                       border: 'none',
//                       borderRadius: '6px',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.color = '#1f2121';
//                       e.target.style.backgroundColor = '#f3f4f6';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.color = '#4b5563';
//                       e.target.style.backgroundColor = 'transparent';
//                     }}
//                   >
//                     <Lock className="w-4 h-4" />
//                     Change Password
//                   </button>
//                   <button
//                     onClick={() => {
//                       sessionStorage.removeItem('user');
//                       history.push('/login');
//                     }}
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '6px',
//                       padding: '8px 12px',
//                       fontSize: '12px',
//                       fontWeight: '500',
//                       color: '#dc2626',
//                       backgroundColor: 'transparent',
//                       border: 'none',
//                       borderRadius: '6px',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.color = '#b91c1c';
//                       e.target.style.backgroundColor = '#fee2e2';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.color = '#dc2626';
//                       e.target.style.backgroundColor = 'transparent';
//                     }}
//                   >
//                     <LogOut className="w-4 h-4" />
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="dashboard-main">
//           <Hero3DEarth isLoggedIn={true} user={user} />
//           <CoreCards />
//           <SplitEarthSection />
//           <RotatingFeatures />
//           <WhySafeSphere />

//           <section className="dashboard-tiles-section">
//             <h3 className="dashboard-section-title">Core Modules</h3>
//             <div className="dashboard-tiles-grid">
//               {[
//                 {
//                   label: 'Risk Management',
//                   route: '/risk-assessment',
//                   description: 'Identify, analyze, and mitigate organizational risks before they impact your business.',
//                   icon: ShieldCheck,
//                   color: 'from-blue-500 to-blue-600',
//                   bgColor: 'bg-blue-50',
//                   iconColor: 'text-blue-600'
//                 },
//                 {
//                   label: 'Documentation',
//                   route: '/documentation',
//                   description: 'Maintain audit-ready documentation and ensure compliance with industry standards.',
//                   icon: FileText,
//                   color: 'from-purple-500 to-purple-600',
//                   bgColor: 'bg-purple-50',
//                   iconColor: 'text-purple-600'
//                 },
//                 {
//                   label: 'Gap Assessment',
//                   route: '/gap-assessment',
//                   description: 'Evaluate compliance gaps and get actionable insights for your organization.',
//                   icon: Activity,
//                   color: 'from-cyan-500 to-cyan-600',
//                   bgColor: 'bg-cyan-50',
//                   iconColor: 'text-cyan-600'
//                 }
//               ].map(({ label, route, description, icon: Icon, color, bgColor, iconColor }) => (
//                 <div
//                   key={label}
//                   className="dashboard-tile"
//                   onClick={() => history.push(route)}
//                   role="button"
//                   tabIndex={0}
//                   onKeyPress={e => e.key === 'Enter' && history.push(route)}
//                 >
//                   <div className={`dashboard-tile-icon-wrapper ${bgColor}`}>
//                     <Icon className={`w-12 h-12 ${iconColor}`} />
//                   </div>
//                   <h3 className="dashboard-tile-title">{label}</h3>
//                   <p className="dashboard-tile-description">{description}</p>
//                   <div className={`dashboard-tile-accent bg-gradient-to-r ${color}`} />
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="dashboard-features-section">
//             <div className="dashboard-features-header">
//               <h3 className="dashboard-section-title">Powerful Features</h3>
//               <p className="dashboard-features-subtitle">Everything you need to manage risk and compliance at enterprise scale</p>
//             </div>
//             <div className="dashboard-features-grid">
//               {[
//                 { title: 'Continuous Risk Monitoring', description: 'Track vulnerabilities and security events in real-time across your entire infrastructure.', icon: TrendingUp },
//                 { title: 'Automated Compliance Checks', description: 'Stay audit-ready with automated control mapping and evidence collection.', icon: CheckCircle },
//                 { title: 'Intelligent Analytics', description: 'AI-powered insights help you identify trends, predict risks, and make data-driven decisions.', icon: BarChart3 },
//                 { title: 'Team Collaboration Hub', description: 'Assign tasks, track progress, and collaborate seamlessly with your security team.', icon: Users },
//                 { title: 'Custom Reporting', description: 'Generate executive reports with actionable insights for stakeholders.', icon: FileText },
//                 { title: 'Enterprise-Grade Security', description: 'Bank-level encryption and compliance with SOC 2, ISO 27001, and GDPR standards.', icon: ShieldCheck }
//               ].map((feature, idx) => (
//                 <div key={idx} className="dashboard-feature-card">
//                   <div className="dashboard-feature-icon">
//                     <feature.icon size={24} />
//                   </div>
//                   <h4 className="dashboard-feature-title">{feature.title}</h4>
//                   <p className="dashboard-feature-description">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="dashboard-metrics-section">
//             <h3 className="dashboard-section-title">Our Impact</h3>
//             <div className="dashboard-metrics-grid">
//               <div className="dashboard-metric-card">
//                 <div className="dashboard-metric-value">{counters.companies}</div>
//                 <div className="dashboard-metric-label">Organizations Protected</div>
//                 <div className="dashboard-metric-bar">
//                   <div className="dashboard-metric-fill" style={{ width: `${(counters.companies / 500) * 100}%` }} />
//                 </div>
//               </div>
//               <div className="dashboard-metric-card">
//                 <div className="dashboard-metric-value">{counters.risks.toLocaleString()}</div>
//                 <div className="dashboard-metric-label">Risks Identified & Mitigated</div>
//                 <div className="dashboard-metric-bar">
//                   <div className="dashboard-metric-fill" style={{ width: `${(counters.risks / 50000) * 100}%` }} />
//                 </div>
//               </div>
//               <div className="dashboard-metric-card">
//                 <div className="dashboard-metric-value">{counters.compliance}%</div>
//                 <div className="dashboard-metric-label">Average Compliance Improvement</div>
//                 <div className="dashboard-metric-bar">
//                   <div className="dashboard-metric-fill" style={{ width: `${counters.compliance}%` }} />
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="dashboard-integrations-section">
//             <h3 className="dashboard-section-title">Integrations You Love</h3>
//             <p className="dashboard-section-subtitle">SafeSphere works seamlessly with 100+ enterprise tools</p>
//             <div className="dashboard-integrations-grid">
//               {[
//                 { name: 'AWS', logo: 'aws-logo' },
//                 { name: 'Azure', logo: 'azure-logo' },
//                 { name: 'Google Cloud', logo: 'gcp-logo' },
//                 { name: 'ServiceNow', logo: 'servicenow-logo' },
//                 { name: 'Okta', logo: 'okta-logo' },
//                 { name: 'Slack', logo: 'slack-logo' }
//               ].map((integration, idx) => (
//                 <div key={idx} className="dashboard-integration-card">
//                   <div className="dashboard-integration-logo">{integration.logo}</div>
//                   <div className="dashboard-integration-name">{integration.name}</div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </main>

//         <footer className="dashboard-footer">
//           <div className="dashboard-footer-content">
//             <div className="dashboard-footer-section">
//               <h4>SafeSphere</h4>
//               <p>Enterprise Risk & Compliance Management Platform</p>
//             </div>
//             <div className="dashboard-footer-section">
//               <h4>Product</h4>
//               <ul>
//                 <li><a href="/risk-management">Risk Management</a></li>
//                 <li><a href="/compliance">Compliance</a></li>
//                 <li><a href="/gap-assessment">Gap Assessment</a></li>
//               </ul>
//             </div>
//             <div className="dashboard-footer-section">
//               <h4>Company</h4>
//               <ul>
//                 <li><a href="/about">About</a></li>
//                 <li><a href="/blog">Blog</a></li>
//                 <li><a href="/careers">Careers</a></li>
//               </ul>
//             </div>
//             <div className="dashboard-footer-section">
//               <h4>Legal</h4>
//               <ul>
//                 <li><a href="/privacy">Privacy</a></li>
//                 <li><a href="/terms">Terms</a></li>
//                 <li><a href="/security">Security</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="dashboard-footer-bottom">
//             © {new Date().getFullYear()} SafeSphere. All rights reserved. Made in India
//           </div>
//         </footer>

//         {showChangePassword && (
//           <ChangePasswordModal onClose={() => setShowChangePassword(false)} />
//         )}
//       </div>
//     );
//   }

//   // GUEST VIEW - EXACTLY ORIGINAL (100% UNCHANGED)
//   return (
//     <div className="dashboard-guest">
//       <header className="dashboard-header">
//         <div className="dashboard-header-content">
//           <div className="dashboard-logo-section">
//             <div className="dashboard-logo-icon">
//               <ShieldCheck className="w-7 h-7 text-white" />
//             </div>
//             <div>
//               <h1 className="dashboard-logo-text">SAFESPHERE</h1>
//               <p className="dashboard-logo-subtext">Enterprise Risk & Compliance Platform</p>
//             </div>
//           </div>

//           <div className="dashboard-header-right">
//             <HeaderDropdown
//               label="Frameworks"
//               options={[
//                 { label: 'ISO 27001', route: '/iso-27001' },
//                 { label: 'ISO 27701', route: '/iso-27701' }
//               ]}
//             />
//             <HeaderDropdown
//               label="Templates"
//               options={[
//                 { label: 'Policies', route: '/policies' },
//                 { label: 'Procedures', route: '/procedures' }
//               ]}
//             />
//             <button className="dashboard-login-btn" onClick={() => history.push('/login')}>
//               <LogIn className="w-4 h-4" />
//               Login
//             </button>
//           </div>
//         </div>
//       </header>

//       <main className="dashboard-main">
//         <Hero3DEarth isLoggedIn={false} user={null} />
//         <CoreCards />
//         <SplitEarthSection />
//         <RotatingFeatures />
//         <WhySafeSphere />
//         <ExtraFeaturesLongScroll />

//         <section className="dashboard-guest-modules">
//           <h3 className="dashboard-section-title">Explore Key Modules</h3>
//           <div className="dashboard-tiles-grid">
//             {[
//               {
//                 label: 'Risk Management',
//                 description: 'Identify, analyze, and mitigate organizational risks before they impact your business.',
//                 icon: ShieldCheck,
//                 color: 'from-blue-500 to-blue-600',
//                 bgColor: 'bg-blue-50',
//                 iconColor: 'text-blue-600'
//               },
//               {
//                 label: 'Documentation',
//                 description: 'Maintain audit-ready documentation and ensure compliance with industry standards.',
//                 icon: FileText,
//                 color: 'from-purple-500 to-purple-600',
//                 bgColor: 'bg-purple-50',
//                 iconColor: 'text-purple-600'
//               },
//               {
//                 label: 'Gap Assessment',
//                 description: 'Evaluate compliance gaps and get actionable insights for your organization.',
//                 icon: Activity,
//                 color: 'from-cyan-500 to-cyan-600',
//                 bgColor: 'bg-cyan-50',
//                 iconColor: 'text-cyan-600'
//               }
//             ].map(({ label, description, icon: Icon, color, bgColor, iconColor }) => (
//               <div key={label} className="dashboard-tile dashboard-tile-disabled">
//                 <div className={`dashboard-tile-icon-wrapper ${bgColor}`}>
//                   <Icon className={`w-12 h-12 ${iconColor}`} />
//                 </div>
//                 <h3 className="dashboard-tile-title">{label}</h3>
//                 <p className="dashboard-tile-description">{description}</p>
//                 <div className={`dashboard-tile-accent bg-gradient-to-r ${color}`} />
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="dashboard-guest-features">
//           <div className="dashboard-features-header">
//             <h3 className="dashboard-section-title">Powerful Features</h3>
//             <p className="dashboard-features-subtitle">Everything you need to manage risk and compliance at enterprise scale</p>
//           </div>
//           <div className="dashboard-features-grid">
//             {[
//               { title: 'Continuous Risk Monitoring', description: 'Track vulnerabilities and security events in real-time across your entire infrastructure.', icon: TrendingUp },
//               { title: 'Automated Compliance Checks', description: 'Stay audit-ready with automated control mapping and evidence collection.', icon: CheckCircle },
//               { title: 'Intelligent Analytics', description: 'AI-powered insights help you identify trends, predict risks, and make data-driven decisions.', icon: BarChart3 },
//               { title: 'Team Collaboration Hub', description: 'Assign tasks, track progress, and collaborate seamlessly with your security team.', icon: Users },
//               { title: 'Custom Reporting', description: 'Generate executive reports with actionable insights for stakeholders.', icon: FileText },
//               { title: 'Enterprise-Grade Security', description: 'Bank-level encryption and compliance with SOC 2, ISO 27001, and GDPR standards.', icon: ShieldCheck }
//             ].map((feature, idx) => (
//               <div key={idx} className="dashboard-feature-card">
//                 <div className="dashboard-feature-icon">
//                   <feature.icon size={24} />
//                 </div>
//                 <h4 className="dashboard-feature-title">{feature.title}</h4>
//                 <p className="dashboard-feature-description">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="dashboard-metrics-section">
//           <h3 className="dashboard-section-title">Our Impact</h3>
//           <div className="dashboard-metrics-grid">
//             <div className="dashboard-metric-card">
//               <div className="dashboard-metric-value">{counters.companies}</div>
//               <div className="dashboard-metric-label">Organizations Protected</div>
//               <div className="dashboard-metric-bar">
//                 <div className="dashboard-metric-fill" style={{ width: `${(counters.companies / 500) * 100}%` }} />
//               </div>
//             </div>
//             <div className="dashboard-metric-card">
//               <div className="dashboard-metric-value">{counters.risks.toLocaleString()}</div>
//               <div className="dashboard-metric-label">Risks Identified & Mitigated</div>
//               <div className="dashboard-metric-bar">
//                 <div className="dashboard-metric-fill" style={{ width: `${(counters.risks / 50000) * 100}%` }} />
//               </div>
//             </div>
//             <div className="dashboard-metric-card">
//               <div className="dashboard-metric-value">{counters.compliance}%</div>
//               <div className="dashboard-metric-label">Average Compliance Improvement</div>
//               <div className="dashboard-metric-bar">
//                 <div className="dashboard-metric-fill" style={{ width: `${counters.compliance}%` }} />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="dashboard-video-section">
//           <h3 className="dashboard-section-title">See SafeSphere in Action</h3>
//           <div className="dashboard-video-container">
//             <div className="dashboard-video-placeholder">
//               <Play className="w-16 h-16 text-white" />
//               <p>Compliance Management Demo</p>
//             </div>
//           </div>
//           <div className="dashboard-video-description">
//             <h4>Watch how SafeSphere streamlines compliance management</h4>
//             <ul className="dashboard-video-points">
//               <li>Real-time risk dashboard</li>
//               <li>Automated compliance checks</li>
//               <li>Custom report generation</li>
//               <li>Team collaboration features</li>
//             </ul>
//           </div>
//         </section>

//         <section className="dashboard-integrations-section">
//           <h3 className="dashboard-section-title">Integrations You Love</h3>
//           <p className="dashboard-section-subtitle">SafeSphere works seamlessly with 100+ enterprise tools</p>
//           <div className="dashboard-integrations-grid">
//             {[
//               { name: 'AWS', logo: 'aws-logo' },
//               { name: 'Azure', logo: 'azure-logo' },
//               { name: 'Google Cloud', logo: 'gcp-logo' },
//               { name: 'ServiceNow', logo: 'servicenow-logo' },
//               { name: 'Okta', logo: 'okta-logo' },
//               { name: 'Slack', logo: 'slack-logo' }
//             ].map((integration, idx) => (
//               <div key={idx} className="dashboard-integration-card">
//                 <div className="dashboard-integration-logo">{integration.logo}</div>
//                 <div className="dashboard-integration-name">{integration.name}</div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="dashboard-testimonials-section">
//           <h3 className="dashboard-section-title">What Our Customers Say</h3>
//           <div className="dashboard-testimonials-grid">
//             {[
//               { name: 'Sarah Johnson', role: 'CISO, Fortune 500 Tech', quote: 'SafeSphere transformed our compliance process. We reduced audit time by 70%.' },
//               { name: 'Michael Chen', role: 'Risk Manager, Financial Services', quote: 'The real-time monitoring capabilities are exceptional. We catch potential risks before they become issues.' },
//               { name: 'Emily Rodriguez', role: 'Compliance Officer, Healthcare', quote: 'SafeSphere made HIPAA compliance effortless. The automated checks save us countless hours.' }
//             ].map((testimonial, idx) => (
//               <div key={idx} className="dashboard-testimonial-card">
//                 <div className="dashboard-testimonial-stars">★★★★★</div>
//                 <p className="dashboard-testimonial-quote">"{testimonial.quote}"</p>
//                 <div className="dashboard-testimonial-author">
//                   <div className="dashboard-testimonial-avatar">{testimonial.name[0]}</div>
//                   <div>
//                     <div className="dashboard-testimonial-name">{testimonial.name}</div>
//                     <div className="dashboard-testimonial-role">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="dashboard-faq-section">
//           <h3 className="dashboard-section-title">Frequently Asked Questions</h3>
//           <div className="dashboard-faq-grid">
//             {[
//               { question: 'How long does it take to implement SafeSphere?', answer: 'Most organizations are up and running within 2-4 weeks. Our onboarding team provides full support.' },
//               { question: 'Is SafeSphere compliant with industry standards?', answer: 'Yes! SOC 2 Type II certified, ISO 27001 compliant, GDPR ready, and supports HIPAA, NIST, and CIS frameworks.' },
//               { question: 'Can SafeSphere integrate with our existing tools?', answer: 'Absolutely. SafeSphere integrates with 100+ enterprise tools including AWS, Azure, ServiceNow, Okta, and Slack.' },
//               { question: 'What kind of support do you offer?', answer: 'We provide 24/7 enterprise support, dedicated account managers, and regular training sessions.' },
//               { question: 'How is pricing structured?', answer: 'Pricing is based on the number of assets monitored and features used. Contact our sales team for a custom quote.' }
//             ].map((faq, idx) => (
//               <div key={idx} className={`dashboard-faq-item ${expandedFaq === idx ? 'expanded' : ''}`}>
//                 <button
//                   className="dashboard-faq-question"
//                   onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
//                 >
//                   <span>{faq.question}</span>
//                   <ChevronDown className="w-5 h-5" />
//                 </button>
//                 {expandedFaq === idx && (
//                   <div className="dashboard-faq-answer">{faq.answer}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="dashboard-trust-section">
//           <h4 className="dashboard-trust-title">Enterprise-Grade Trust</h4>
//           <p className="dashboard-trust-subtitle">Trusted by the world's leading security teams</p>
//           <div className="dashboard-trust-badges">
//             <span className="dashboard-trust-badge">🔐 SOC 2 Type II</span>
//             <span className="dashboard-trust-badge">📋 ISO 27001</span>
//             <span className="dashboard-trust-badge">🌍 GDPR Ready</span>
//             <span className="dashboard-trust-badge">🏥 HIPAA Compliant</span>
//             <span className="dashboard-trust-badge">🏛️ NIST Aligned</span>
//             <span className="dashboard-trust-badge">✅ CIS Frameworks</span>
//           </div>
//         </section>

//         <section className="dashboard-final-cta">
//           <h3 className="dashboard-cta-title">Ready to Transform Your Compliance?</h3>
//           <p className="dashboard-cta-subtitle">Join 500+ organizations managing risk smarter with SafeSphere</p>
//           <div className="dashboard-cta-buttons">
//             <button onClick={() => history.push('/login')} className="dashboard-cta-primary">
//               Get Started Today
//             </button>
//           </div>
//         </section>
//       </main>

//       <footer className="dashboard-footer">
//         <div className="dashboard-footer-content">
//           <div className="dashboard-footer-section">
//             <h4>SafeSphere</h4>
//             <p>Enterprise Risk & Compliance Management Platform</p>
//           </div>
//           <div className="dashboard-footer-section">
//             <h4>Product</h4>
//             <ul>
//               <li><a href="/risk-management">Risk Management</a></li>
//               <li><a href="/compliance">Compliance</a></li>
//               <li><a href="/gap-assessment">Gap Assessment</a></li>
//             </ul>
//           </div>
//           <div className="dashboard-footer-section">
//             <h4>Company</h4>
//             <ul>
//               <li><a href="/about">About</a></li>
//               <li><a href="/blog">Blog</a></li>
//               <li><a href="/careers">Careers</a></li>
//             </ul>
//           </div>
//           <div className="dashboard-footer-section">
//             <h4>Legal</h4>
//             <ul>
//               <li><a href="/privacy">Privacy</a></li>
//               <li><a href="/terms">Terms</a></li>
//               <li><a href="/security">Security</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="dashboard-footer-bottom">
//           © {new Date().getFullYear()} SafeSphere. All rights reserved. Made in India
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;






import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import {
  ShieldCheck,
  FileText,
  Activity,
  LogIn,
  UserCircle2,
  Lock,
  LogOut,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Users,
  Zap,
  BarChart3,
  ToolCase,
  BookCheck,
  ChevronDown,
  Play,
  Menu,
  X,
} from "lucide-react";
import ChangePasswordModal from "./ChangePasswordModal";
import ISO27001 from "./FrameWorks/ISO_27001";
import ISO27701 from "./FrameWorks/ISO_27701";
import Procedures from "./Template/Procedures";
import Policies from "./Template/Policies";
import SprintoReplica from "./SprintoReplica";

// ============================================
// MEDIA QUERY HOOK FOR RESPONSIVE DESIGN
// ============================================
const useMediaQuery = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = React.useState(
    window.innerWidth <= 480
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, isSmallMobile };
};

// ============================================
// HERO SECTION COMPONENT
// ============================================
const Hero3DEarth = ({ isLoggedIn, user }) => {
  const [mounted, setMounted] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={`hero-section ${mounted ? "hero-loaded" : ""}`}>
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge">
            {isLoggedIn ? `Welcome back, ${user?.name}` : "Security Team"}
          </span>
          <h1 className="hero-title">
            CalVant Enterprise Risk & Compliance Intelligence
          </h1>
          <p className="hero-description">
A centralized system for managing risk reviews, audit evidence, and automated compliance, offering real-time visibility into your security and data privacy posture across standards and frameworks such as ISO 27001,           ISO 42001, SOC, and others.
          </p>
          <div className="hero-cta-row">
            {isLoggedIn ? (
              <button
                className="hero-cta-primary"
                onClick={() => history.push("/risk-assessment")}
              >
                Go to Risk Dashboard
              </button>
            ) : (
              <>
                <button
                  className="hero-cta-primary"
                  onClick={() => history.push("/login")}
                >
                  Get Started
                </button>
                <button
                  className="hero-cta-secondary"
                  onClick={() => history.push("/demo")}
                >
                  <LogIn size={16} />
                  Get a Demo
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-sphere">
          <div className="hero-sphere-inner"></div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// CORE CARDS COMPONENT
// ============================================
const CoreCards = ({ isLoggedIn, history }) => {
  const cards = [
    {
      title: "Risk Assessment",
      description: "Identifies, evaluates, and prioritizes risks, ensuring continuous tracking across assets, vendors, and business units.",
      icon: ShieldCheck,
      size: 26,
      route: isLoggedIn ? "/risk-assessment" : "/login"
    },
    {
      title: "Documentation Management",
      description: "Centralized document management system ensures policies, procedure and evidences remain up to date and protected from unintended changes.",
      icon: FileText,
      size: 26,
      route: isLoggedIn ? "/documentation" : "/login"
    },
    {
      title: "Gap Assessment",
      description: "Evaluate your controls against ISO and other standards, highlight gaps, and guide implementation with a clear roadmap.",
      icon: Activity,
      size: 26,
      route: isLoggedIn ? "/gap-assessment" : "/login"
    },
  ];

  const handleCardClick = (route) => {
    history.push(route);
  };

  return (
    <section className="corecards-section">
      <div className="corecards-header">
        <h2>Core Intelligence Pillars</h2>
        <p>The process of risk management begins with understanding risk, documenting controls, and closing compliance gaps. 
CalVant aligns all three in one unified approach.
</p>
      </div>
      <div className="corecards-grid">
        {cards.map((card, idx) => (
          <div 
            key={card.title} 
            className={`corecard corecard-${idx}`}
            role="button"
            tabIndex={0}
            onClick={() => handleCardClick(card.route)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleCardClick(card.route);
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className="corecard-icon">
              <card.icon size={card.size} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================
// SPLIT EARTH SECTION COMPONENT
// ============================================
const SplitEarthSection = ({ isLoggedIn, history }) => (
  <section className="split-section">
    <div className="split-text">
      <h2>Compliance Intelligence in Motion</h2>
      <p>
        CalVant continuously ingests signals from your cloud, infrastructure,
        and business processes. Controls are auto-mapped to ISO 27001 and NIST
        CSF so you always know what's in place, what's drifting, and what's at
        risk.
      </p>
      <ul>
        <li>Automated control mapping and evidence suggestions</li>
        <li>Live posture snapshots across all frameworks</li>
        <li>Scenario views for audits, board reviews, and incidents</li>
      </ul>
    </div>
    <div className="split-visual">
      <div className="split-sphere">
        <div className="split-sphere-inner"></div>
      </div>
      <div className="split-orbit-ring"></div>
    </div>
    {!isLoggedIn && (
      <div
        style={{ textAlign: "center", marginTop: "30px", gridColumn: "1 / -1" }}
      >
        <button
          className="hero-cta-secondary"
          onClick={() => history.push("/demo")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
          }}
        >
          <LogIn size={16} />
          Get a Demo
        </button>
      </div>
    )}
  </section>
);

// ============================================
// ROTATING FEATURES COMPONENT
// ============================================
const RotatingFeatures = ({ isLoggedIn, history }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="rot-pro-section flex justify-center">
      <SprintoReplica />
      {!isLoggedIn && (
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            width: "100%",
            position: "absolute",
            bottom: "20px",
          }}
        >
          <button
            className="hero-cta-secondary"
            onClick={() => history.push("/demo")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
            }}
          >
            <LogIn size={16} />
            Get a Demo
          </button>
        </div>
      )}
    </section>
  );
};

// ============================================
// WHY CalVant COMPONENT
// ============================================
const WhyCalVant= ({ isLoggedIn, history }) => {
  const pillars = [
    {
      title: "Built for Enterprise-Grade Compliance",
      icon: ShieldCheck,
      size: 24,
      desc: "CalVant offers an integrated platform that supports your team at every step, from capturing evidence to gaining meaningful insights.",
    },
    {
      title: "Automated Evidence Collection",
      icon: TrendingUp,
      size: 24,
      desc: "The incorporation of automated ticketing systems with cloud services enables instant collection of relevant logs, screenshots and documents, along with employee approvals.",
    },
    {
      title: "Framework Mapping",
      icon: Zap,
      size: 24,
      desc: "Multiple regulatory standards and controls frameworks can be managed and monitored in one location, thus avoiding the duplication of work.",
    },
    {
      title: "Role-Based Access Control",
      icon: BarChart3,
      size: 24,
      desc: "Auditors, executives, and engineers should have role-based access to ensure they can access only the information required for their responsibilities while protecting sensitive data.",
    },
    {
      title: "Compliance Dashboards",
      icon: ToolCase,
      size: 24,
      desc: "Within the enterprise, have a monitoring and visualisation of real-time compliance status across all departments, teams and regions.",
    },
    {
      title: "Audit Trail Logs",
      icon: BookCheck,
      size: 24,
      desc: "Our processes are fully documented and audited, thereby ensuring that every phase of production can be traced. Every action is recorded so that full accountability can be guaranteed.",
    },
        {
      title: "Secure Cloud Architecture",
      icon: BookCheck,
      size: 24,
      desc: "Using AWS, data is encrypted and segmented to safeguard it from malicious attacks and unauthorized access, and has been fitted with hardened security controls.",
    },
        {
      title: "Actionable AI Insights",
      icon: BookCheck,
      size: 24,
      desc: "Intelligent analysis of your company's control maturity, risk exposure and incident trends provides you with recommendations for improvement.",
    }
  ];

  return (
    <section className="why-section">
      <div className="why-header">
        <h2>Why CalVant</h2>
        <p>Four pillars designed for modern security and compliance teams.</p>
      </div>
      <div className="why-grid">
        {pillars.map((p, idx) => (
          <div key={p.title} className={`why-card why-card-${idx}`}>
            <div className="why-icon">
              <p.icon size={p.size} />
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
      {!isLoggedIn && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            className="hero-cta-secondary"
            onClick={() => history.push("/demo")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
            }}
          >
            <LogIn size={16} />
            Get a Demo
          </button>
        </div>
      )}
    </section>
  );
};

// ============================================
// EXTRA FEATURES COMPONENT
// ============================================
const ExtraFeaturesLongScroll = ({ isLoggedIn, history }) => {
  const items = [
    {
      title: "Automated Evidence Collection",
      desc: "Connect cloud providers and ticketing tools to auto-pull screenshots, logs, and approvals.",
    },
    {
      title: "Framework Mapping (ISO, NIST)",
      desc: "One control library mapped across frameworks so you never duplicate work.",
    },
    {
      title: "Role-Based Access Control",
      desc: "Give auditors, executives, and engineers tailored views without exposing sensitive data.",
    },
    {
      title: "Compliance Dashboards",
      desc: "See real-time coverage, residual risk, and exceptions in a single pane of glass.",
    },
    {
      title: "Audit Trail Logs",
      desc: "Immutable timelines for every change, ready for regulators and internal reviews.",
    },
    {
      title: "Secure Cloud Architecture",
      desc: "Built for AWS with encryption, segmentation, and hardened services.",
    },
    {
      title: "AI-Driven Recommendations",
      desc: "Let CalVant surface next-best actions based on your controls and incidents.",
    },
  ];

  return (
    <section className="extra-section">
      <div className="extra-inner">
        <h2>Built for Enterprise-Grade Compliance</h2>
        <p>
          As you scroll, CalVant reveals everything your team needs from
          evidence capture to AI insights.
        </p>
        <div className="extra-grid">
          {items.map((item, idx) => (
            <div key={item.title} className={`extra-card extra-card-${idx}`}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        {!isLoggedIn && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              className="hero-cta-secondary"
              onClick={() => history.push("/demo")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
              }}
            >
              <LogIn size={16} />
              Get a Demo
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// ============================================
// RESPONSIVE HEADER DROPDOWN COMPONENT
// ============================================
const HeaderDropdown = ({ label, options }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isMobile } = useMediaQuery();

  const handleNavigate = (route) => {
    setOpen(false);
    history.push(route);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Hide on mobile
  if (isMobile) return null;

  return (
    <div
      className="header-dropdown"
      ref={dropdownRef}
      style={{ position: "relative" }}
    >
      <button
        className="header-dropdown-trigger"
        onClick={() => setOpen((prev) => !prev)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 12px",
          background: "transparent",
          border: "1px solid rgba(148, 163, 184, 0.35)",
          borderRadius: "8px",
          color: "#e5e7eb",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.25s ease",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(15, 23, 42, 0.9)";
          e.target.style.borderColor = "#4f46e5";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.borderColor = "rgba(148, 163, 184, 0.35)";
        }}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          style={{
            transition: "transform 0.25s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "8px",
            background: "rgba(15, 23, 42, 0.98)",
            border: "1px solid rgba(148, 163, 184, 0.35)",
            borderRadius: "8px",
            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.9)",
            zIndex: 1000,
            minWidth: "180px",
          }}
        >
          {options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleNavigate(opt.route)}
              style={{
                display: "block",
                width: "100%",
                padding: "10px 12px",
                background: "transparent",
                border: "none",
                color: "#e5e7eb",
                fontSize: "14px",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(79, 70, 229, 0.2)";
                e.target.style.color = "#4f46e5";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#e5e7eb";
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================
// MAIN DASHBOARD COMPONENT
// ============================================
const Dashboard = () => {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const { isMobile, isSmallMobile } = useMediaQuery();
  const [counters, setCounters] = useState({
    companies: 0,
    risks: 0,
    compliance: 0,
  });
useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // or "smooth"
}, []);

  useEffect(() => {
    let interval;
    if (counters.companies < 500) {
      interval = setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          companies: Math.min(prev.companies + 10, 500),
          risks: Math.min(prev.risks + 100, 50000),
          compliance: Math.min(prev.compliance + 1, 99),
        }));
      }, 20);
    }
    return () => clearInterval(interval);
  }, [counters]);

  // ============================================
  // LOGGED-IN USER VIEW
  // ============================================
  if (user) {
    return (
      <div className="dashboard-signed-in">
        {/* RESPONSIVE HEADER */}
        <header
          className="dashboard-header"
          style={{
            padding: isMobile ? "10px 12px" : "16px 24px",
          }}
        >
          <div
            className="dashboard-header-content"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: isMobile ? "8px" : "24px",
              flexWrap: isMobile ? "wrap" : "nowrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* LOGO SECTION */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "6px" : "12px",
                flex: isMobile ? 1 : "initial",
              }}
            >
              <div
                style={{
                  width: isMobile ? "36px" : "44px",
                  height: isMobile ? "36px" : "44px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #ffffffff, #ffffffff)",
                  boxShadow: "0 4px 16px rgba(79, 70, 229, 0.55)",
                  flexShrink: 0,
                }}
              >
                {/* Replace ShieldCheck with this img tag */}
                <img
                  src="favicon.png"
                  alt="CalVant Logo"
                  style={{
                    width: "90%", // Adjust this to control how much space the logo takes
                    height: "90%",
                    objectFit: "contain",
                  }}
                />
              </div>
              {!isMobile && (
                <div>
                  <h1
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      letterSpacing: "0.05em",
                      color: "#f9fafb",
                      margin: 0,
                    }}
                  >
                    CalVant
                  </h1>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#9ca3af",
                      fontWeight: "500",
                      letterSpacing: "0.03em",
                      margin: 0,
                    }}
                  >
                    Enterprise Risk & Compliance Platform
                  </p>
                </div>
              )}
            </div>

            {/* HEADER RIGHT - DROPDOWNS & USER */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "6px" : "16px",
                flexDirection: isMobile ? "row-reverse" : "row",
              }}
            >
              {/* DROPDOWNS - Hidden on mobile */}
              {!isMobile && (
                <>
                  <HeaderDropdown
                    label="Frameworks"
                    options={[
                      { label: "ISO 27001", route: "/iso-27001" },
                      { label: "ISO 27701", route: "/iso-27701" },
                    ]}
                  />
                  <HeaderDropdown
                    label="Templates"
                    options={[
                      { label: "Policy Templates", route: "/policies" },
                      { label: "Procedures", route: "/procedures" },
                    ]}
                  />
                </>
              )}

              {/* USER CARD */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: isMobile ? "4px" : "12px",
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1px solid rgba(148, 163, 184, 0.35)",
                  borderRadius: isMobile ? "6px" : "8px",
                  padding: isMobile ? "6px 8px" : "10px 16px",
                  transition: "all 0.25s ease",
                }}
              >
                <UserCircle2
                  className="text-indigo-600"
                  size={isMobile ? 20 : 24}
                />

                {/* USER INFO - Hidden on mobile */}
                {!isMobile && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#f9fafb",
                      }}
                    >
                      {user.name}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        color: "#9ca3af",
                        fontWeight: "500",
                      }}
                    >
                      {user?.department?.name ?? user?.role ?? "User"}
                    </span>
                  </div>
                )}

                {/* BUTTONS */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "row" : "row",
                    gap: isMobile ? "6px" : "8px",
                  }}
                >
                  {/* CHANGE PASSWORD BUTTON */}
                  <button
                    onClick={() => setShowChangePassword(true)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: isMobile ? "2px" : "6px",
                      padding: isMobile ? "4px 6px" : "8px 12px",
                      fontSize: isMobile ? "10px" : "12px",
                      fontWeight: "500",
                      color: "#4b5563",
                      backgroundColor: "transparent",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#1f2121";
                      e.target.style.backgroundColor = "#f3f4f6";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#4b5563";
                      e.target.style.backgroundColor = "transparent";
                    }}
                    title={isMobile ? "Change Password" : ""}
                  >
                    <Lock size={isMobile ? 12 : 16} />
                    {!isMobile && "Change Password"}
                  </button>

                  {/* LOGOUT BUTTON */}
                  <button
                    onClick={() => {
                      sessionStorage.removeItem("user");
                      history.push("/login");
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: isMobile ? "2px" : "6px",
                      padding: isMobile ? "4px 6px" : "8px 12px",
                      fontSize: isMobile ? "10px" : "12px",
                      fontWeight: "500",
                      color: "#dc2626",
                      backgroundColor: "transparent",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#b91c1c";
                      e.target.style.backgroundColor = "#fee2e2";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#dc2626";
                      e.target.style.backgroundColor = "transparent";
                    }}
                    title={isMobile ? "Logout" : ""}
                  >
                    <LogOut size={isMobile ? 12 : 16} />
                    {!isMobile && "Logout"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="dashboard-main">
          <Hero3DEarth isLoggedIn={true} user={user} />
          <CoreCards isLoggedIn={true} history={history} />
          <SplitEarthSection isLoggedIn={true} history={history} />
          <RotatingFeatures isLoggedIn={true} history={history} />
          <WhyCalVant isLoggedIn={true} history={history} />

          <section className="dashboard-tiles-section">
            <h3 className="dashboard-section-title">Core Modules</h3>
            <div className="dashboard-tiles-grid">
              {[
                {
                  label: "Risk Management",
                  route: "/risk-assessment",
                  description:
                    "Identify, analyze, and mitigate organizational risks before they impact your business.",
                  icon: ShieldCheck,
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-50",
                  iconColor: "text-blue-600",
                },
                {
                  label: "Documentation",
                  route: "/documentation",
                  description:
                    "Maintain audit-ready documentation and ensure compliance with industry standards.",
                  icon: FileText,
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50",
                  iconColor: "text-purple-600",
                },
                {
                  label: "Gap Assessment",
                  route: "/gap-assessment",
                  description:
                    "Evaluate compliance gaps and get actionable insights for your organization.",
                  icon: Activity,
                  color: "from-cyan-500 to-cyan-600",
                  bgColor: "bg-cyan-50",
                  iconColor: "text-cyan-600",
                },
              ].map(
                ({
                  label,
                  route,
                  description,
                  icon: Icon,
                  color,
                  bgColor,
                  iconColor,
                }) => (
                  <div
                    key={label}
                    className="dashboard-tile"
                    onClick={() => history.push(route)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === "Enter" && history.push(route)}
                  >
                    <div className={`dashboard-tile-icon-wrapper ${bgColor}`}>
                      <Icon className={`w-12 h-12 ${iconColor}`} />
                    </div>
                    <h3 className="dashboard-tile-title">{label}</h3>
                    <p className="dashboard-tile-description">{description}</p>
                    <div
                      className={`dashboard-tile-accent bg-gradient-to-r ${color}`}
                    />
                  </div>
                )
              )}
            </div>
          </section>

          <section className="dashboard-features-section">
            <div className="dashboard-features-header">
              <h3 className="dashboard-section-title">Powerful Features</h3>
              <p className="dashboard-features-subtitle">
                Everything you need to manage risk and compliance at enterprise
                scale
              </p>
            </div>
            <div className="dashboard-features-grid">
              {[
                {
                  title: "Continuous Risk Monitoring",
                  description:
                    "Track vulnerabilities and security events in real-time across your entire infrastructure.",
                  icon: TrendingUp,
                },
                {
                  title: "Automated Compliance Checks",
                  description:
                    "Stay audit-ready with automated control mapping and evidence collection.",
                  icon: CheckCircle,
                },
                {
                  title: "Intelligent Analytics",
                  description:
                    "AI-powered insights help you identify trends, predict risks, and make data-driven decisions.",
                  icon: BarChart3,
                },
                {
                  title: "Team Collaboration Hub",
                  description:
                    "Assign tasks, track progress, and collaborate seamlessly with your security team.",
                  icon: Users,
                },
                {
                  title: "Custom Reporting",
                  description:
                    "Generate executive reports with actionable insights for stakeholders.",
                  icon: FileText,
                },
                {
                  title: "Enterprise-Grade Security",
                  description:
                    "Bank-level encryption and compliance with SOC 2, ISO 27001, and GDPR standards.",
                  icon: ShieldCheck,
                },
              ].map((feature, idx) => (
                <div key={idx} className="dashboard-feature-card">
                  <div className="dashboard-feature-icon">
                    <feature.icon size={24} />
                  </div>
                  <h4 className="dashboard-feature-title">{feature.title}</h4>
                  <p className="dashboard-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-metrics-section">
            <h3 className="dashboard-section-title">Our Impact</h3>
            <div className="dashboard-metrics-grid">
              <div className="dashboard-metric-card">
                <div className="dashboard-metric-value">
                  {counters.companies}
                </div>
                <div className="dashboard-metric-label">
                  Organizations Protected
                </div>
                <div className="dashboard-metric-bar">
                  <div
                    className="dashboard-metric-fill"
                    style={{ width: `${(counters.companies / 500) * 100}%` }}
                  />
                </div>
              </div>
              <div className="dashboard-metric-card">
                <div className="dashboard-metric-value">
                  {counters.risks.toLocaleString()}
                </div>
                <div className="dashboard-metric-label">
                  Risks Identified & Mitigated
                </div>
                <div className="dashboard-metric-bar">
                  <div
                    className="dashboard-metric-fill"
                    style={{ width: `${(counters.risks / 50000) * 100}%` }}
                  />
                </div>
              </div>
              <div className="dashboard-metric-card">
                <div className="dashboard-metric-value">
                  {counters.compliance}%
                </div>
                <div className="dashboard-metric-label">
                  Average Compliance Improvement
                </div>
                <div className="dashboard-metric-bar">
                  <div
                    className="dashboard-metric-fill"
                    style={{ width: `${counters.compliance}%` }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="dashboard-integrations-section">
            <h3 className="dashboard-section-title">Integrations You Love</h3>
            <p className="dashboard-section-subtitle">
            CalVant works seamlessly with 100+ enterprise tools
            </p>
            <div className="dashboard-integrations-grid">
              {[
                "AWS",
                "Azure",
                "Google Cloud",
                "ServiceNow",
                "Okta",
                "Slack",
              ].map((name, idx) => (
                <div key={idx} className="dashboard-integration-card">
                  <div className="dashboard-integration-logo">{name}</div>
                  <div className="dashboard-integration-name">{name}</div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="dashboard-footer">
          <div className="dashboard-footer-content">
            <div className="dashboard-footer-section">
              <h4>CalVant</h4>
              <p>Enterprise Risk & Compliance Management Platform</p>
            </div>
            <div className="dashboard-footer-section">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="/risk-management">Risk Management</a>
                </li>
                <li>
                  <a href="/compliance">Compliance</a>
                </li>
                <li>
                  <a href="/gap-assessment">Gap Assessment</a>
                </li>
              </ul>
            </div>
            <div className="dashboard-footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
              </ul>
            </div>
            <div className="dashboard-footer-section">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="/privacy">Privacy</a>
                </li>
                <li>
                  <a href="/terms">Terms</a>
                </li>
                <li>
                  <a href="/security">Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dashboard-footer-bottom">
            © {new Date().getFullYear()} CalVant. All rights reserved. Made
            in India
          </div>
        </footer>

        {showChangePassword && (
          <ChangePasswordModal onClose={() => setShowChangePassword(false)} />
        )}
      </div>
    );
  }

  // ============================================
  // GUEST USER VIEW
  // ============================================
  return (
    <div className="dashboard-guest">
      {/* RESPONSIVE HEADER FOR GUESTS */}
      <header
        className="dashboard-header"
        style={{
          padding: isMobile ? "10px 12px" : "16px 24px",
        }}
      >
        <div
          className="dashboard-header-content"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: isMobile ? "8px" : "24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* LOGO SECTION */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "6px" : "12px",
              flex: isMobile ? 1 : "initial",
            }}
          >
            <div
              style={{
                width: isMobile ? "36px" : "44px",
                height: isMobile ? "36px" : "44px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #ffffffff, #ffffffff)",
                boxShadow: "0 4px 16px rgba(79, 70, 229, 0.55)",
                flexShrink: 0,
              }}
            >
              <img
                src="favicon.png"
                alt="CalVant Logo"
                style={{
                  width: "70%", // Adjust this to control how much space the logo takes
                  height: "70%",
                  objectFit: "contain",
                }}
              />
            </div>
            {!isMobile && (
              <div>
                <h1
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    color: "#f9fafb",
                    margin: 0,
                  }}
                >
                  CalVant
                </h1>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#9ca3af",
                    fontWeight: "500",
                    letterSpacing: "0.03em",
                    margin: 0,
                  }}
                >
                  Enterprise Risk & Compliance Platform
                </p>
              </div>
            )}
          </div>

          {/* HEADER RIGHT */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "6px" : "16px",
            }}
          >
            {!isMobile && (
              <>
                <HeaderDropdown
                  label="Frameworks"
                  options={[
                    { label: "ISO 27001", route: "/iso-27001" },
                    { label: "ISO 27701", route: "/iso-27701" },
                  ]}
                />
                <HeaderDropdown
                  label="Templates"
                  options={[
                    { label: "Policies", route: "/policies" },
                    { label: "Procedures", route: "/procedures" },
                  ]}
                />
              </>
            )}

            {/* LOGIN BUTTON */}
            <button
              onClick={() => history.push("/login")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "2px" : "6px",
                padding: isMobile ? "6px 10px" : "8px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(148, 163, 184, 0.45)",
                background: "rgba(15, 23, 42, 0.9)",
                color: "#f9fafb",
                fontSize: isMobile ? "10px" : "12px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(15, 23, 42, 1)";
                e.target.style.borderColor = "#4f46e5";
                e.target.style.boxShadow = "0 8px 24px rgba(79, 70, 229, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(15, 23, 42, 0.9)";
                e.target.style.borderColor = "rgba(148, 163, 184, 0.45)";
                e.target.style.boxShadow = "none";
              }}
            >
              <LogIn size={isMobile ? 12 : 16} />
              {!isMobile && "Login"}
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <Hero3DEarth isLoggedIn={false} user={null} />
        <CoreCards isLoggedIn={false} history={history} />
        <SplitEarthSection isLoggedIn={false} history={history} />
        <RotatingFeatures isLoggedIn={false} history={history} />
        <WhyCalVant isLoggedIn={false} history={history} />
        <ExtraFeaturesLongScroll isLoggedIn={false} history={history} />

        {/* <section className="dashboard-guest-modules">
          <h3 className="dashboard-section-title">Explore Key Modules</h3>
          <div className="dashboard-tiles-grid">
            {[
              {
                label: "Risk Management",
                description:
                  "Identify, analyze, and mitigate organizational risks before they impact your business.",
                icon: ShieldCheck,
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                iconColor: "text-blue-600",
              },
              {
                label: "Documentation",
                description:
                  "Maintain audit-ready documentation and ensure compliance with industry standards.",
                icon: FileText,
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
              },
              {
                label: "Gap Assessment",
                description:
                  "Evaluate compliance gaps and get actionable insights for your organization.",
                icon: Activity,
                color: "from-cyan-500 to-cyan-600",
                bgColor: "bg-cyan-50",
                iconColor: "text-cyan-600",
              },
            ].map(
              ({
                label,
                description,
                icon: Icon,
                color,
                bgColor,
                iconColor,
              }) => (
                <div
                  key={label}
                  className="dashboard-tile dashboard-tile-disabled"
                >
                  <div className={`dashboard-tile-icon-wrapper ${bgColor}`}>
                    <Icon className={`w-12 h-12 ${iconColor}`} />
                  </div>
                  <h3 className="dashboard-tile-title">{label}</h3>
                  <p className="dashboard-tile-description">{description}</p>
                  <div
                    className={`dashboard-tile-accent bg-gradient-to-r ${color}`}
                  />
                </div>
              )
            )}
          </div>
        </section> */}
<section className="dashboard-guest-modules">
  <h3 className="dashboard-section-title">Explore Key Modules</h3>
  <div className="dashboard-tiles-grid">
    {[
      {
        label: "Risk Management",
        description:
          "Identify, analyze, and mitigate organizational risks before they impact your business.",
        icon: ShieldCheck,
        color: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        route: "/risk-assessment",
      },
      {
        label: "Documentation",
        description:
          "Maintain audit-ready documentation and ensure compliance with industry standards.",
        icon: FileText,
        color: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
        route: "/documentation",
      },
      {
        label: "Gap Assessment",
        description:
          "Evaluate compliance gaps and get actionable insights for your organization.",
        icon: Activity,
        color: "from-cyan-500 to-cyan-600",
        bgColor: "bg-cyan-50",
        iconColor: "text-cyan-600",
        route: "/gap-assessment",
      },
    ].map(({ label, description, icon: Icon, color, bgColor, iconColor, route }) => (
      <div
        key={label}
        className="dashboard-tile"
        role="button"
        tabIndex={0}
        onClick={() => history.push("/login")}
        onKeyPress={(e) => {
          if (e.key === "Enter") history.push("/login");
        }}
      >
        <div className={`dashboard-tile-icon-wrapper ${bgColor}`}>
          <Icon className={`w-12 h-12 ${iconColor}`} />
        </div>
        <h3 className="dashboard-tile-title">{label}</h3>
        <p className="dashboard-tile-description">{description}</p>
        <div className={`dashboard-tile-accent bg-gradient-to-r ${color}`} />
      </div>
    ))}
  </div>
</section>

        <section className="dashboard-features-section">
          <div className="dashboard-features-header">
            <h3 className="dashboard-section-title">Powerful Features</h3>
            <p className="dashboard-features-subtitle">
              Everything you need to manage risk and compliance at enterprise
              scale
            </p>
          </div>
          <div className="dashboard-features-grid">
            {[
              {
                title: "Continuous Risk Monitoring",
                description:
                  "Track vulnerabilities and security events in real-time across your entire infrastructure.",
                icon: TrendingUp,
              },
              {
                title: "Automated Compliance Checks",
                description:
                  "Stay audit-ready with automated control mapping and evidence collection.",
                icon: CheckCircle,
              },
              {
                title: "Intelligent Analytics",
                description:
                  "AI-powered insights help you identify trends, predict risks, and make data-driven decisions.",
                icon: BarChart3,
              },
              {
                title: "Team Collaboration Hub",
                description:
                  "Assign tasks, track progress, and collaborate seamlessly with your security team.",
                icon: Users,
              },
              {
                title: "Custom Reporting",
                description:
                  "Generate executive reports with actionable insights for stakeholders.",
                icon: FileText,
              },
              {
                title: "Enterprise-Grade Security",
                description:
                  "Bank-level encryption and compliance with SOC 2, ISO 27001, and GDPR standards.",
                icon: ShieldCheck,
              },
            ].map((feature, idx) => (
              <div key={idx} className="dashboard-feature-card">
                <div className="dashboard-feature-icon">
                  <feature.icon size={24} />
                </div>
                <h4 className="dashboard-feature-title">{feature.title}</h4>
                <p className="dashboard-feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-metrics-section">
          <h3 className="dashboard-section-title">Our Impact</h3>
          <div className="dashboard-metrics-grid">
            <div className="dashboard-metric-card">
              <div className="dashboard-metric-value">{counters.companies}</div>
              <div className="dashboard-metric-label">
                Organizations Protected
              </div>
              <div className="dashboard-metric-bar">
                <div
                  className="dashboard-metric-fill"
                  style={{ width: `${(counters.companies / 500) * 100}%` }}
                />
              </div>
            </div>
            <div className="dashboard-metric-card">
              <div className="dashboard-metric-value">
                {counters.risks.toLocaleString()}
              </div>
              <div className="dashboard-metric-label">
                Risks Identified & Mitigated
              </div>
              <div className="dashboard-metric-bar">
                <div
                  className="dashboard-metric-fill"
                  style={{ width: `${(counters.risks / 50000) * 100}%` }}
                />
              </div>
            </div>
            <div className="dashboard-metric-card">
              <div className="dashboard-metric-value">
                {counters.compliance}%
              </div>
              <div className="dashboard-metric-label">
                Average Compliance Improvement
              </div>
              <div className="dashboard-metric-bar">
                <div
                  className="dashboard-metric-fill"
                  style={{ width: `${counters.compliance}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-integrations-section">
          <h3 className="dashboard-section-title">Integrations You Love</h3>
          <p className="dashboard-section-subtitle">
            CalVant works seamlessly with 100+ enterprise tools
          </p>
          <div className="dashboard-integrations-grid">
            {[
              "AWS",
              "Azure",
              "Google Cloud",
              "ServiceNow",
              "Okta",
              "Slack",
            ].map((name, idx) => (
              <div key={idx} className="dashboard-integration-card">
                <div className="dashboard-integration-logo">{name}</div>
                <div className="dashboard-integration-name">{name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-testimonials-section">
          <h3 className="dashboard-section-title">What Our Customers Say</h3>
          <div className="dashboard-testimonials-grid">
            {[
              {
                name: "Sarah Johnson",
                role: "CISO, Fortune 500 Tech",
                quote:
                  "CalVant transformed our compliance process. We reduced audit time by 70%.",
              },
              {
                name: "Michael Chen",
                role: "Risk Manager, Financial Services",
                quote:
                  "The real-time monitoring capabilities are exceptional. We catch potential risks before they become issues.",
              },
              {
                name: "Emily Rodriguez",
                role: "Compliance Officer, Healthcare",
                quote:
                  "CalVant made HIPAA compliance effortless. The automated checks save us countless hours.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="dashboard-testimonial-card">
                <div className="dashboard-testimonial-stars">★★★★★</div>
                <p className="dashboard-testimonial-quote">
                  "{testimonial.quote}"
                </p>
                <div className="dashboard-testimonial-author">
                  <div className="dashboard-testimonial-avatar">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="dashboard-testimonial-name">
                      {testimonial.name}
                    </div>
                    <div className="dashboard-testimonial-role">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-faq-section">
          <h3 className="dashboard-section-title">
            Frequently Asked Questions
          </h3>
          <div className="dashboard-faq-grid">
            {[
              {
                question: "How long does it take to implement CalVant?",
                answer:
                  "Most organizations are up and running within 2-4 weeks. Our onboarding team provides full support.",
              },
              {
                question: "Is CalVant compliant with industry standards?",
                answer:
                  "Yes! SOC 2 Type II certified, ISO 27001 compliant, GDPR ready, and supports HIPAA, NIST, and CIS frameworks.",
              },
              {
                question: "Can CalVant integrate with our existing tools?",
                answer:
                  "Absolutely. CalVant integrates with 100+ enterprise tools including AWS, Azure, ServiceNow, Okta, and Slack.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We provide 24/7 enterprise support, dedicated account managers, and regular training sessions.",
              },
              {
                question: "How is pricing structured?",
                answer:
                  "Pricing is based on the number of assets monitored and features used. Contact our sales team for a custom quote.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className={`dashboard-faq-item ${
                  expandedFaq === idx ? "expanded" : ""
                }`}
              >
                <button
                  className="dashboard-faq-question"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                >
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
                {expandedFaq === idx && (
                  <div className="dashboard-faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-trust-section">
          <h4 className="dashboard-trust-title">Enterprise-Grade Trust</h4>
          <p className="dashboard-trust-subtitle">
            Trusted by the world's leading security teams
          </p>
          <div className="dashboard-trust-badges">
            <span className="dashboard-trust-badge">🔐 SOC 2 Type II</span>
            <span className="dashboard-trust-badge">📋 ISO 27001</span>
            <span className="dashboard-trust-badge">🌍 GDPR Ready</span>
            <span className="dashboard-trust-badge">🏥 HIPAA Compliant</span>
            <span className="dashboard-trust-badge">🏛️ NIST Aligned</span>
            <span className="dashboard-trust-badge">✅ CIS Frameworks</span>
          </div>
        </section>

        <section className="dashboard-final-cta">
          <h3 className="dashboard-cta-title">
            Ready to Transform Your Compliance?
          </h3>
          <p className="dashboard-cta-subtitle">
            Join 500+ organizations managing risk smarter with CalVant
          </p>
          <div className="dashboard-cta-buttons">
            <button
              onClick={() => history.push("/login")}
              className="dashboard-cta-primary"
            >
              Get Started Today
            </button>
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        <div className="dashboard-footer-content">
          <div className="dashboard-footer-section">
            <h4>CalVant</h4>
            <p>Enterprise Risk & Compliance Management Platform</p>
          </div>
          <div className="dashboard-footer-section">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="/risk-assessment">Risk Management</a>
              </li>
              <li>
                <a href="/compliance">Compliance</a>
              </li>
              <li>
                <a href="/gap-assessment">Gap Assessment</a>
              </li>
            </ul>
          </div>
          <div className="dashboard-footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
            </ul>
          </div>
          <div className="dashboard-footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy">Privacy</a>
              </li>
              <li>
                <a href="/terms">Terms</a>
              </li>
              <li>
                <a href="/security">Security</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboard-footer-bottom">
          © {new Date().getFullYear()} CalVant. All rights reserved. Made in
          India
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
