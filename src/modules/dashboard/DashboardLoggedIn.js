// import React, { useState, useEffect, useRef } from "react";
// import { useHistory } from "react-router-dom";
// import { 
//   BarChart3, ClipboardCheck, FileText, CheckSquare,
//   Settings, Key, LogOut, Users
// } from "lucide-react";
// import Joyride, { STATUS } from "react-joyride";

// const DashboardLoggedIn = () => {
//   const history = useHistory();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const dropdownRef = useRef(null);

//   const user = JSON.parse(sessionStorage.getItem("user")) || {
//     name: "Arghya Bandopadhyay",
//     department: { name: "Finance" },
//     email: "arghya@calvant.com"
//   };

//   const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);

//   const stats = {
//     risk: { total: 24, low: 8, medium: 10, high: 5, open: 16 },
//     gap: { total: 156, closed: 89, open: 67 },
//     doc: { total: 42, uploaded: 28, pending: 14 },
//     task: { total: 35, myTasks: 12, completed: 22 }
//   };

//   const steps = [
//     { target: "#navbar-profile", content: "Your profile & settings" },
//     { target: "#risk-module", content: "Manage department risks" },
//     { target: "#gap-module", content: "Track gap assessments" },
//     { target: "#doc-module", content: "Upload documents" },
//     { target: "#task-module", content: "Complete tasks" }
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 800);
//   }, []);

//   const handleMenuClick = (path) => {
//     setDropdownOpen(false);
//     if (path) history.push(path);
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem("user");
//     history.push("/");
//   };

//   if (loading) {
//     return (
//       <div style={{ 
//         background: '#f8fafc', 
//         minHeight: '100vh', 
//         padding: '120px 24px', 
//         textAlign: 'center',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '16px'
//       }}>
//         <div style={{ 
//           width: '40px', 
//           height: '40px', 
//           border: '3px solid #e2e8f0', 
//           borderTop: '3px solid #3b82f6', 
//           borderRadius: '50%', 
//           animation: 'spin 1s linear infinite' 
//         }} />
//         <div style={{ fontSize: '16px', color: '#64748b', fontWeight: 500 }}>
//           Loading dashboard...
//         </div>
//       </div>
//     );
//   }

//   // FIXED HEIGHT FOR ALL CARDS - PERFECTLY EQUAL
//   const cardStyleBase = {
//     background: 'white',
//     border: '1px solid #e2e8f0',
//     borderRadius: '12px',
//     cursor: 'pointer',
//     boxShadow: '0 2px 4px -1px rgba(0, 0,0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
//     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//     height: '260px', // FIXED HEIGHT - ALL CARDS SAME SIZE
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '24px'
//   };

//   const hoverStyle = {
//     boxShadow: '0 12px 20px -4px rgba(0, 0,0, 0.12), 0 6px 8px -4px rgba(0, 0, 0, 0.08)',
//     transform: 'translateY(-2px)'
//   };

//   return (
//     <div style={{ 
//       background: '#f8fafc', 
//       minHeight: '100vh', 
//       fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
//     }}>
      
//       {/* NAVBAR */}
//       <nav style={{
//         background: 'white',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//         padding: '0 24px',
//         height: '64px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         position: 'sticky',
//         top: 0,
//         zIndex: 1000,
//         borderBottom: '1px solid #e2e8f0'
//       }}>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '12px',
//           cursor: 'pointer',
//           fontWeight: '600',
//           fontSize: '18px',
//           color: '#1e293b'
//         }} 
//         onClick={() => history.push('/')}
//         >
//        <img 
//   src="/favicon.png" 
//   alt="CalVant Logo" 
//   style={{
//     marginLeft: '25px',
//     width: '32px',
//     height: '32px',
//     objectFit: 'contain',
//     borderRadius: '6px'
//   }} 
// />
// <span style={{ marginLeft: '1px', fontWeight: '600', fontSize: '18px', color: '#1e293b' }}>
//   CalVant
// </span>

//         </div>
//         <div ref={dropdownRef} id="navbar-profile" style={{ position: 'relative' }}>
//           <div 
//             style={{
//               width: '36px',
//               height: '36px',
//               background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               color: 'white',
//               fontWeight: '700',
//               fontSize: '12px',
//               cursor: 'pointer',
//               transition: 'all 0.2s ease'
//             }}
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//             onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
//           >
//             {initials}
//           </div>

//           {dropdownOpen && (
//             <div style={{
//               position: 'absolute',
//               top: '46px',
//               right: 0,
//               background: 'white',
//               borderRadius: '10px',
//               boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
//               border: '1px solid #e2e8f0',
//               minWidth: '200px',
//               zIndex: 2000
//             }}>
//               <div style={{
//                 padding: '14px 16px 10px',
//                 borderBottom: '1px solid #f1f5f9'
//               }}>
//                 <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>
//                   {user.name}
//                 </div>
//                 <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
//                   {user.email}
//                 </div>
//               </div>
//               <div style={{ padding: '4px 0' }}>
//                 <div style={{
//                   display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px',
//                   cursor: 'pointer', fontSize: '13px', transition: 'background 0.2s ease'
//                 }} onClick={() => handleMenuClick('/framework')} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
//                   <Users size={16} style={{ color: '#9ca3af' }} />
//                   <span>Framework</span>
//                 </div>
//                 <div style={{
//                   display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px',
//                   cursor: 'pointer', fontSize: '13px', transition: 'background 0.2s ease'
//                 }} onClick={() => handleMenuClick('/templates')} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
//                   <FileText size={16} style={{ color: '#9ca3af' }} />
//                   <span>Templates</span>
//                 </div>
               
//                 <div style={{
//                   display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px',
//                   cursor: 'pointer', fontSize: '13px', transition: 'background 0.2s ease'
//                 }} onClick={() => handleMenuClick('/change-password')} onMouseEnter={(e) => e.target.style.background = '#f8fafc'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
//                   <Key size={16} style={{ color: '#9ca3af' }} />
//                   <span>Change Password</span>
//                 </div>
//                 <hr style={{ margin: '6px 0', border: 'none', height: '1px', background: '#f1f5f9' }} />
//                 <div style={{
//                   display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px',
//                   cursor: 'pointer', fontSize: '13px', color: '#ef4444'
//                 }} onClick={handleLogout} onMouseEnter={(e) => e.target.style.background = '#fef2f2'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
//                   <LogOut size={16} style={{ color: '#ef4444' }} />
//                   <span>Logout</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* MAIN CONTENT */}
//       <main style={{ 
//         padding: '32px 20px 60px', 
//         maxWidth: '1200px', 
//         margin: '0 auto' 
//       }}>
        
//         {/* WELCOME */}
//         <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//           <h1 style={{
//             fontSize: 'clamp(24px, 4vw, 32px)',
//             fontWeight: '700',
//             color: '#1e293b',
//             margin: '0 0 12px 0',
//             lineHeight: '1.2'
//           }}>
//             Welcome back, {user.name.split(' ')[0]}
//           </h1>
//           <p style={{
//             fontSize: '16px',
//             color: '#64748b',
//             maxWidth: '500px',
//             margin: '0 auto',
//             lineHeight: '1.6'
//           }}>
//             Quick overview of your compliance activities across all CalVant modules
//           </p>
//         </div>

//         {/* PERFECTLY EQUAL 2-COLUMN LAYOUT */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '20px',
//           height: '540px', // FIXED HEIGHT FOR PERFECT ALIGNMENT
//           alignItems: 'stretch'
//         }}>
          
//           {/* LEFT COLUMN */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
//             {/* RISK - FIXED SIZE */}
//             <div 
//               id="risk-module"
//               style={{
//                 ...cardStyleBase,
//                 borderLeft: '4px solid #3b82f6'
//               }}
//               onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.boxShadow = '0 2px 4px -1px rgba(0, 0,0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.04)';
//                 e.currentTarget.style.transform = 'translateY(0)';
//               }}
//               onClick={() => history.push('/risk-assessment')}
//             >
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 marginBottom: '16px'
//               }}>
//                 <div style={{
//                   width: '44px',
//                   height: '44px',
//                   background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
//                   borderRadius: '10px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}>
//                   <BarChart3 size={20} color="white" />
//                 </div>
//                 <div>
//                   <h3 style={{ 
//                     margin: 0, 
//                     fontSize: '16px', 
//                     fontWeight: '600', 
//                     color: '#1e293b',
//                     lineHeight: '1.3'
//                   }}>
//                     Risk Management
//                   </h3>
//                   <div style={{ 
//                     fontSize: '13px', 
//                     color: '#6b7280', 
//                     fontWeight: '500',
//                     marginTop: '2px'
//                   }}>
//                     {user.department.name} Department
//                   </div>
//                 </div>
//               </div>
//               <div style={{ 
//                 fontSize: '36px', 
//                 fontWeight: '700', 
//                 color: '#1e293b', 
//                 marginBottom: '16px',
//                 lineHeight: '1'
//               }}>
//                 {stats.risk.total}
//               </div>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(2, 1fr)',
//                 gap: '8px',
//                 fontSize: '14px',
//                 fontWeight: '500'
//               }}>
//                 <div style={{ color: '#10b981' }}>{stats.risk.low} Low</div>
//                 <div style={{ color: '#f59e0b' }}>{stats.risk.medium} Medium</div>
//                 <div style={{ color: '#ef4444' }}>{stats.risk.high} High</div>
//                 <div style={{ color: '#6b7280' }}>{stats.risk.open} Open</div>
//               </div>
//             </div>

//             {/* GAP - SAME FIXED SIZE */}
//             <div 
//               id="gap-module"
//               style={{
//                 ...cardStyleBase,
//                 borderLeft: '4px solid #10b981'
//               }}
//               onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.boxShadow = '0 2px 4px -1px rgba(0, 0,0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.04)';
//                 e.currentTarget.style.transform = 'translateY(0)';
//               }}
//               onClick={() => history.push('/gap-assessment')}
//             >
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 marginBottom: '16px'
//               }}>
//                 <div style={{
//                   width: '44px',
//                   height: '44px',
//                   background: 'linear-gradient(135deg, #10b981, #059669)',
//                   borderRadius: '10px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}>
//                   <ClipboardCheck size={20} color="white" />
//                 </div>
//                 <h3 style={{ 
//                   margin: 0, 
//                   fontSize: '16px', 
//                   fontWeight: '600', 
//                   color: '#1e293b',
//                   lineHeight: '1.3'
//                 }}>
//                   Gap Assessment
//                 </h3>
//               </div>
//               <div style={{ 
//                 fontSize: '36px', 
//                 fontWeight: '700', 
//                 color: '#1e293b', 
//                 marginBottom: '16px',
//                 lineHeight: '1'
//               }}>
//                 {stats.gap.total}
//               </div>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(2, 1fr)',
//                 gap: '8px',
//                 fontSize: '14px',
//                 fontWeight: '500'
//               }}>
//                 <div style={{ color: '#10b981' }}>{stats.gap.closed} Assessed</div>
//                 <div style={{ color: '#ef4444' }}>{stats.gap.open} Left</div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
//             {/* TASK - SAME FIXED SIZE */}
//             <div 
//               id="task-module"
//               style={{
//                 ...cardStyleBase,
//                 borderLeft: '4px solid #f59e0b'
//               }}
//               onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.boxShadow = '0 2px 4px -1px rgba(0, 0,0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.04)';
//                 e.currentTarget.style.transform = 'translateY(0)';
//               }}
//               onClick={() => history.push('/task-management')}
//             >
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 marginBottom: '16px'
//               }}>
//                 <div style={{
//                   width: '44px',
//                   height: '44px',
//                   background: 'linear-gradient(135deg, #f59e0b, #d97706)',
//                   borderRadius: '10px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}>
//                   <CheckSquare size={20} color="white" />
//                 </div>
//                 <h3 style={{ 
//                   margin: 0, 
//                   fontSize: '16px', 
//                   fontWeight: '600', 
//                   color: '#1e293b',
//                   lineHeight: '1.3'
//                 }}>
//                   Task Management
//                 </h3>
//               </div>
//               <div style={{ 
//                 fontSize: '36px', 
//                 fontWeight: '700', 
//                 color: '#1e293b', 
//                 marginBottom: '16px',
//                 lineHeight: '1'
//               }}>
//                 {stats.task.myTasks}
//               </div>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(2, 1fr)',
//                 gap: '8px',
//                 fontSize: '14px',
//                 fontWeight: '500'
//               }}>
//                 <div style={{ color: '#6b7280' }}>{stats.task.total} Total</div>
//                 <div style={{ color: '#10b981' }}>{stats.task.completed} Done</div>
//               </div>
//             </div>

//             {/* DOCUMENTATION - SAME FIXED SIZE */}
//             <div 
//               id="doc-module"
//               style={{
//                 ...cardStyleBase,
//                 borderLeft: '4px solid #8b5cf6'
//               }}
//               onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.boxShadow = '0 2px 4px -1px rgba(0, 0,0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.04)';
//                 e.currentTarget.style.transform = 'translateY(0)';
//               }}
//               onClick={() => history.push('/documentation')}
//             >
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '12px',
//                 marginBottom: '16px'
//               }}>
//                 <div style={{
//                   width: '44px',
//                   height: '44px',
//                   background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
//                   borderRadius: '10px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center'
//                 }}>
//                   <FileText size={20} color="white" />
//                 </div>
//                 <h3 style={{ 
//                   margin: 0, 
//                   fontSize: '16px', 
//                   fontWeight: '600', 
//                   color: '#1e293b',
//                   lineHeight: '1.3'
//                 }}>
//                   Documentation
//                 </h3>
//               </div>
//               <div style={{ 
//                 fontSize: '36px', 
//                 fontWeight: '700', 
//                 color: '#1e293b', 
//                 marginBottom: '16px',
//                 lineHeight: '1'
//               }}>
//                 {stats.doc.total}
//               </div>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(2, 1fr)',
//                 gap: '8px',
//                 fontSize: '14px',
//                 fontWeight: '500'
//               }}>
//                 <div style={{ color: '#10b981' }}>{stats.doc.uploaded} Uploaded</div>
//                 <div style={{ color: '#ef4444' }}>{stats.doc.pending} Pending</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* FOOTER */}
//       <footer style={{
//         background: 'white',
//         borderTop: '1px solid #e2e8f0',
//         padding: '40px 20px 20px',
//         marginTop: 'auto'
//       }}>
//         <div style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//           gap: '28px'
//         }}>
//           <div>
//             <h4 style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '10px',
//               marginBottom: '12px',
//               fontSize: '16px',
//               fontWeight: '600',
//               color: '#1e293b'
//             }}>
//               <div style={{
//                 width: '28px',
//                 height: '28px',
//                 background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
//                 borderRadius: '6px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 fontSize: '11px',
//                 fontWeight: '700'
//               }}>CV</div>
//               CalVant
//             </h4>
//             <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '13px' }}>
//               Comprehensive compliance platform built for ISO 27001.
//             </p>
//           </div>
//           <div>
//             <h5 style={{ marginBottom: '12px', fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>Product</h5>
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//               <li style={{ marginBottom: '6px' }}><a href="/risk-assessment" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Risk Management</a></li>
//               <li style={{ marginBottom: '6px' }}><a href="/gap-assessment" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Gap Assessment</a></li>
//               <li style={{ marginBottom: '6px' }}><a href="/documentation" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Documentation</a></li>
//               <li style={{ marginBottom: '6px' }}><a href="/iso-27001" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>ISO 27001</a></li>
//             </ul>
//           </div>
//           <div>
//             <h5 style={{ marginBottom: '12px', fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>Tasks</h5>
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//               <li style={{ marginBottom: '6px' }}><a href="/task-management" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>My Tasks</a></li>
//               <li style={{ marginBottom: '6px' }}><a href="/task-management/departmenttasks" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Team Tasks</a></li>
//             </ul>
//           </div>
//           <div>
//             <h5 style={{ marginBottom: '12px', fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>Company</h5>
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//               <li style={{ marginBottom: '6px' }}><a href="/about" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>About</a></li>
//               <li style={{ marginBottom: '6px' }}><a href="/privacy" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Privacy</a></li>
//               <li style={{ marginBottom: '6px' }}><a href="/terms" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Terms</a></li>
//               <li style={{ marginBottom: '6px' }}><a href="/support" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Support</a></li>
//             </ul>
//           </div>
//         </div>
//         <div style={{
//           borderTop: '1px solid #e2e8f0',
//           paddingTop: '20px',
//           marginTop: '24px',
//           textAlign: 'center',
//           color: '#9ca3af',
//           fontSize: '13px'
//         }}>
//           © 2026 CalVant. All rights reserved.
//         </div>
//       </footer>

//       <Joyride
//         steps={steps}
//         run={false}
//         continuous
//         showSkipButton
//         scrollToFirstStep
//         styles={{
//           options: {
//             primaryColor: "#3b82f6",
//             zIndex: 10000,
//           },
//         }}
//         callback={(data) => {
//           const { status } = data;
//           const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
//           if (finishedStatuses.includes(status)) {}
//         }}
//       />

//       <style>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//         @media (max-width: 1100px) {
//           main > div {
//             grid-template-columns: 1fr !important;
//             height: auto !important;
//           }
//         }
//         @media (max-width: 768px) {
//           main {
//             padding: 24px 16px 48px !important;
//           }
//           nav {
//             padding: 0 16px !important;
//             height: 60px !important;
//           }
//         }
//         @media (max-width: 480px) {
//           main > div > div > div {
//             height: 240px !important;
//             padding: 20px 16px !important;
//           }
//           main > div > div > div div[style*="fontSize: 36px"] {
//             font-size: 32px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DashboardLoggedIn;










import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { 
  BarChart3, ClipboardCheck, FileText, CheckSquare,
  Key, LogOut, Users, ChevronDown
} from "lucide-react";

const DashboardLoggedIn = () => {
  const history = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [frameworkOpen, setFrameworkOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);

  const user = JSON.parse(sessionStorage.getItem("user")) || {
    name: "Arghya Bandopadhyay",
    department: { name: "Finance" },
    email: "arghya@calvant.com"
  };

  const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);

  const stats = {
    risk: { total: 24, low: 8, medium: 10, high: 5, open: 16 },
    gap: { total: 156, closed: 89, open: 67 },
    doc: { total: 42, uploaded: 28, pending: 14 },
    task: { total: 35, myTasks: 12, completed: 22 }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setFrameworkOpen(false);
        setTemplatesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const handleNavClick = (path) => {
    setDropdownOpen(false);
    setFrameworkOpen(false);
    setTemplatesOpen(false);
    if (path) history.push(path);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    history.push("/");
  };

  // Base card style - responsive height
  const cardStyleBase = {
    background: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px -1px rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.04)',
    transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    height: '100%',
    minHeight: '260px'
  };

  const hoverStyle = {
    boxShadow: '0 12px 20px -4px rgba(0,0,0,0.12), 0 6px 8px -4px rgba(0,0,0,0.08)',
    transform: 'translateY(-2px)'
  };

  if (loading) {
    return (
      <div style={{ 
        background: '#f8fafc', 
        minHeight: '100vh', 
        padding: '120px 24px', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          border: '3px solid #e2e8f0', 
          borderTop: '3px solid #3b82f6', 
          borderRadius: '50%', 
          animation: 'spin 1s linear infinite' 
        }} />
        <div style={{ fontSize: '16px', color: '#64748b', fontWeight: 500 }}>
          Loading dashboard...
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      background: '#f8fafc', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      
      {/* NAVBAR */}
      <nav style={{
        background: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '0 max(16px, 4vw)',
        height: 'clamp(60px, 8vh, 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: 'clamp(16px, 3vw, 18px)',
          color: '#1e293b'
        }} 
        onClick={() => history.push('/')}
        >
          <img 
            src="/favicon.png" 
            alt="CalVant Logo" 
            style={{
              width: '32px',
              height: '32px',
              objectFit: 'contain',
              borderRadius: '6px'
            }} 
          />
          <span style={{ fontWeight: '600' }}>CalVant</span>
        </div>

        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <div 
            style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {initials}
          </div>

          {dropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '46px',
              right: 0,
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              border: '1px solid #e2e8f0',
              minWidth: '220px',
              zIndex: 2000,
              animation: 'slideDown 0.2s ease-out'
            }}>
              <div style={{
                padding: '14px 16px 10px',
                borderBottom: '1px solid #f1f5f9'
              }}>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>
                  {user.name}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                  {user.email}
                </div>
              </div>
              
              <div style={{ padding: '4px 0' }}>
                {/* FRAMEWORK DROPDOWN */}
                <div style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  gap: '10px', 
                  padding: '10px 16px',
                  cursor: 'pointer', 
                  fontSize: '13px', 
                  transition: 'background 0.2s ease'
                }} 
                onClick={() => setFrameworkOpen(!frameworkOpen)}
                onMouseEnter={(e) => e.target.style.background = '#f8fafc'} 
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  <Users size={16} style={{ color: '#9ca3af' }} />
                  <span>Framework</span>
                  <ChevronDown 
                    size={16} 
                    style={{ 
                      color: '#9ca3af',
                      transition: 'transform 0.2s ease',
                      transform: frameworkOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} 
                  />
                </div>
                
                {frameworkOpen && (
                  <div style={{
                    paddingLeft: '42px',
                    background: '#f8fafc',
                    borderRadius: '6px',
                    margin: '4px 12px'
                  }}>
                    <div style={{
                      padding: '8px 8px 8px 0',
                      fontSize: '13px',
                      cursor: 'pointer',
                      color: '#1e293b'
                    }} 
                    onClick={() => handleNavClick('/iso-27001')}
                    onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                    onMouseLeave={(e) => e.target.style.color = '#1e293b'}
                    >
                      ISO 27001
                    </div>
                    <div style={{
                      padding: '8px 8px 8px 0',
                      fontSize: '13px',
                      cursor: 'pointer',
                      color: '#1e293b'
                    }} 
                    onClick={() => handleNavClick('/iso-27701')}
                    onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                    onMouseLeave={(e) => e.target.style.color = '#1e293b'}
                    >
                      ISO 27701
                    </div>
                  </div>
                )}

                {/* TEMPLATES DROPDOWN */}
                <div style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  gap: '10px', 
                  padding: '10px 16px',
                  cursor: 'pointer', 
                  fontSize: '13px', 
                  transition: 'background 0.2s ease'
                }} 
                onClick={() => setTemplatesOpen(!templatesOpen)}
                onMouseEnter={(e) => e.target.style.background = '#f8fafc'} 
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  <FileText size={16} style={{ color: '#9ca3af' }} />
                  <span>Templates</span>
                  <ChevronDown 
                    size={16} 
                    style={{ 
                      color: '#9ca3af',
                      transition: 'transform 0.2s ease',
                      transform: templatesOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} 
                  />
                </div>
                
                {templatesOpen && (
                  <div style={{
                    paddingLeft: '42px',
                    background: '#f8fafc',
                    borderRadius: '6px',
                    margin: '4px 12px'
                  }}>
                    <div style={{
                      padding: '8px 8px 8px 0',
                      fontSize: '13px',
                      cursor: 'pointer',
                      color: '#1e293b'
                    }} 
                    onClick={() => handleNavClick('/policies')}
                    onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                    onMouseLeave={(e) => e.target.style.color = '#1e293b'}
                    >
                      Policies
                    </div>
                    <div style={{
                      padding: '8px 8px 8px 0',
                      fontSize: '13px',
                      cursor: 'pointer',
                      color: '#1e293b'
                    }} 
                    onClick={() => handleNavClick('/procedures')}
                    onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                    onMouseLeave={(e) => e.target.style.color = '#1e293b'}
                    >
                      Procedures
                    </div>
                  </div>
                )}

                <div style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  padding: '10px 16px',
                  cursor: 'pointer', 
                  fontSize: '13px'
                }} 
                onClick={() => handleNavClick('/change-password')}
                onMouseEnter={(e) => e.target.style.background = '#f8fafc'} 
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  <Key size={16} style={{ color: '#9ca3af' }} />
                  <span>Change Password</span>
                </div>
                
                <hr style={{ margin: '6px 0', border: 'none', height: '1px', background: '#f1f5f9' }} />
                
                <div style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  padding: '10px 16px',
                  cursor: 'pointer', 
                  fontSize: '13px', 
                  color: '#ef4444'
                }} 
                onClick={handleLogout}
                onMouseEnter={(e) => e.target.style.background = '#fef2f2'} 
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  <LogOut size={16} style={{ color: '#ef4444' }} />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main style={{ 
        padding: 'clamp(24px, 5vw, 32px) clamp(16px, 4vw, 20px) 60px', 
        maxWidth: '1400px', 
        margin: '0 auto' 
      }}>
        {/* WELCOME */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 40px)' }}>
          <h1 style={{
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 12px 0',
            lineHeight: '1.2'
          }}>
            Welcome back, {user.name.split(' ')[0]}
          </h1>
          <p style={{
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            color: '#64748b',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Quick overview of your compliance activities across all CalVant modules
          </p>
        </div>

        {/* RESPONSIVE CARDS GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(16px, 3vw, 20px)',
          alignItems: 'stretch'
        }}>
          
          {/* RISK CARD */}
          <div 
            id="risk-module"
            style={{
              ...cardStyleBase,
              borderLeft: '4px solid #3b82f6'
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.04)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('/risk-assessment')}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <BarChart3 size={20} color="white" />
              </div>
              <div>
                <h3 style={{ 
                  margin: 0, 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  color: '#1e293b',
                  lineHeight: '1.3'
                }}>
                  Risk Management
                </h3>
                <div style={{ 
                  fontSize: '13px', 
                  color: '#6b7280', 
                  fontWeight: '500',
                  marginTop: '2px'
                }}>
                  {user.department.name} Department
                </div>
              </div>
            </div>
            <div style={{ 
              fontSize: 'clamp(28px, 8vw, 36px)', 
              fontWeight: '700', 
              color: '#1e293b', 
              marginBottom: '16px',
              lineHeight: '1'
            }}>
              {stats.risk.total}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '500',
              marginTop: 'auto'
            }}>
              <div style={{ color: '#10b981' }}>{stats.risk.low} Low</div>
              <div style={{ color: '#f59e0b' }}>{stats.risk.medium} Medium</div>
              <div style={{ color: '#ef4444' }}>{stats.risk.high} High</div>
              <div style={{ color: '#6b7280' }}>{stats.risk.open} Open</div>
            </div>
          </div>

          {/* GAP CARD */}
          <div 
            id="gap-module"
            style={{
              ...cardStyleBase,
              borderLeft: '4px solid #10b981'
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.04)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('/gap-assessment')}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ClipboardCheck size={20} color="white" />
              </div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '16px', 
                fontWeight: '600', 
                color: '#1e293b',
                lineHeight: '1.3'
              }}>
                Gap Assessment
              </h3>
            </div>
            <div style={{ 
              fontSize: 'clamp(28px, 8vw, 36px)', 
              fontWeight: '700', 
              color: '#1e293b', 
              marginBottom: '16px',
              lineHeight: '1'
            }}>
              {stats.gap.total}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '500',
              marginTop: 'auto'
            }}>
              <div style={{ color: '#10b981' }}>{stats.gap.closed} Assessed</div>
              <div style={{ color: '#ef4444' }}>{stats.gap.open} Left</div>
            </div>
          </div>

          {/* TASK CARD */}
          <div 
            id="task-module"
            style={{
              ...cardStyleBase,
              borderLeft: '4px solid #f59e0b'
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.04)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('/task-management')}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CheckSquare size={20} color="white" />
              </div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '16px', 
                fontWeight: '600', 
                color: '#1e293b',
                lineHeight: '1.3'
              }}>
                Task Management
              </h3>
            </div>
            <div style={{ 
              fontSize: 'clamp(28px, 8vw, 36px)', 
              fontWeight: '700', 
              color: '#1e293b', 
              marginBottom: '16px',
              lineHeight: '1'
            }}>
              {stats.task.myTasks}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '500',
              marginTop: 'auto'
            }}>
              <div style={{ color: '#6b7280' }}>{stats.task.total} Total</div>
              <div style={{ color: '#10b981' }}>{stats.task.completed} Done</div>
            </div>
          </div>

          {/* DOC CARD */}
          <div 
            id="doc-module"
            style={{
              ...cardStyleBase,
              borderLeft: '4px solid #8b5cf6'
            }}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 4px -1px rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.04)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => handleNavClick('/documentation')}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FileText size={20} color="white" />
              </div>
              <h3 style={{ 
                margin: 0, 
                fontSize: '16px', 
                fontWeight: '600', 
                color: '#1e293b',
                lineHeight: '1.3'
              }}>
                Documentation
              </h3>
            </div>
            <div style={{ 
              fontSize: 'clamp(28px, 8vw, 36px)', 
              fontWeight: '700', 
              color: '#1e293b', 
              marginBottom: '16px',
              lineHeight: '1'
            }}>
              {stats.doc.total}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '500',
              marginTop: 'auto'
            }}>
              <div style={{ color: '#10b981' }}>{stats.doc.uploaded} Uploaded</div>
              <div style={{ color: '#ef4444' }}>{stats.doc.pending} Pending</div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{
        background: 'white',
        borderTop: '1px solid #e2e8f0',
        padding: 'clamp(32px, 6vw, 40px) clamp(16px, 4vw, 20px) clamp(16px, 3vw, 20px)',
        marginTop: 'auto'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(20px, 4vw, 28px)'
        }}>
          <div>
            <h4 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '12px',
              fontSize: 'clamp(14px, 2vw, 16px)',
              fontWeight: '600',
              color: '#1e293b'
            }}>
              <div style={{
                width: '28px',
                height: '28px',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '11px',
                fontWeight: '700'
              }}>CV</div>
              CalVant
            </h4>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '13px' }}>
              Comprehensive compliance platform built for ISO 27001.
            </p>
          </div>
          <div>
            <h5 style={{ marginBottom: '12px', fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>Product</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '6px' }}><a href="/risk-assessment" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Risk Management</a></li>
              <li style={{ marginBottom: '6px' }}><a href="/gap-assessment" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Gap Assessment</a></li>
              <li style={{ marginBottom: '6px' }}><a href="/documentation" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Documentation</a></li>
              <li style={{ marginBottom: '6px' }}><a href="/iso-27001" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>ISO 27001</a></li>
            </ul>
          </div>
          <div>
            <h5 style={{ marginBottom: '12px', fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>Tasks</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '6px' }}><a href="/task-management" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>My Tasks</a></li>
              <li style={{ marginBottom: '6px' }}><a href="/task-management/departmenttasks" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Team Tasks</a></li>
            </ul>
          </div>
          <div>
            <h5 style={{ marginBottom: '12px', fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>Company</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '6px' }}><a href="/about" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>About</a></li>
              <li style={{ marginBottom: '6px' }}><a href="/privacy" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Privacy</a></li>
              <li style={{ marginBottom: '6px' }}><a href="/terms" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Terms</a></li>
              <li style={{ marginBottom: '6px' }}><a href="/support" style={{ color: '#64748b', textDecoration: 'none', fontSize: '13px' }}>Support</a></li>
            </ul>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: '20px',
          marginTop: '24px',
          textAlign: 'center',
          color: '#9ca3af',
          fontSize: '13px'
        }}>
          © 2026 CalVant. All rights reserved.
        </div>
      </footer>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          main div[style*="grid"] {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="minHeight: 260px"] {
            min-height: 240px !important;
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardLoggedIn;
