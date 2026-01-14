// // import { useHistory } from "react-router-dom";

// // const IntegrationsDashboard = () => {
// //   const history = useHistory();

// //   return (
// //     <div style={styles.page}>
// //       {/* Top Header */}
// //       <header style={styles.header}>
// //         <div>
// //           <h1 style={styles.title}>Integrations</h1>
// //           <p style={styles.subtitle}>
// //             Securely connect cloud providers and services to monitor compliance
// //             and security posture.
// //           </p>
// //         </div>
// //       </header>

// //       {/* Integrations Section */}
// //       <section style={styles.section}>
// //         <div style={styles.grid}>
// //           {/* GCP Card */}
// //           <div style={styles.card}>
// //             <div style={styles.cardTop}>
// //               <div>
// //                 <h3 style={styles.cardTitle}>Google Cloud Platform</h3>
// //                 <p style={styles.cardDesc}>
// //                   Monitor IAM policies, configurations, and compliance signals
// //                   from your GCP environment.
// //                 </p>
// //               </div>

// //               <span style={styles.statusBadge}>Not Connected</span>
// //             </div>

// //             {/* Capabilities */}
// //             <ul style={styles.capabilities}>
// //               <li>✔ Read IAM & policy metadata</li>
// //               <li>✔ Detect misconfigurations</li>
// //               <li>✔ Continuous compliance visibility</li>
// //             </ul>

// //             {/* Footer */}
// //             <div style={styles.cardFooter}>
// //               <div style={styles.securityBox}>
// //                 <span style={styles.securityLabel}>Access Level</span>
// //                 <span style={styles.securityValue}>Read-Only</span>
// //               </div>

// //               <button
// //                 style={styles.primaryBtn}
// //                 onClick={() =>
// //                   history.push("/integrations/gcp/authorize")
// //                 }
// //               >
// //                 Connect GCP
// //               </button>
// //             </div>
// //           </div>

// //           {/* Placeholder for future integrations */}
// //           <div style={{ ...styles.card, opacity: 0.4 }}>
// //             <h3 style={styles.cardTitle}>More integrations coming soon</h3>
// //             <p style={styles.cardDesc}>
// //               AWS,  will be supported.
// //             </p>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // const styles = {
// //   page: {
// //     minHeight: "100vh",
// //     background: "#ffffff",
// //     padding: "40px",
// //     fontFamily: "Inter, sans-serif",
// //   },

// //   header: {
// //     marginBottom: "40px",
// //     maxWidth: "900px",
// //   },

// //   title: {
// //     fontSize: "28px",
// //     fontWeight: 600,
// //     marginBottom: "8px",
// //   },

// //   subtitle: {
// //     fontSize: "15px",
// //     color: "#6b7280",
// //     lineHeight: 1.6,
// //   },

// //   section: {
// //     maxWidth: "1100px",
// //   },

// //   grid: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
// //     gap: "28px",
// //   },

// //   card: {
// //     border: "1px solid #e5e7eb",
// //     borderRadius: "16px",
// //     padding: "28px",
// //     display: "flex",
// //     flexDirection: "column",
// //     justifyContent: "space-between",
// //     transition: "all 0.2s ease",
// //     background: "#fff",
// //   },

// //   cardTop: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "flex-start",
// //     gap: "16px",
// //   },

// //   cardTitle: {
// //     fontSize: "18px",
// //     fontWeight: 900,
// //     marginBottom: "6px",
// //     color: "black"
// //   },

// //   cardDesc: {
// //     fontSize: "14px",
// //     color: "black",
// //     lineHeight: 1.5,
// //   },

// //   statusBadge: {
// //     fontSize: "12px",
// //     padding: "6px 10px",
// //     borderRadius: "999px",
// //     background: "#fef3c7",
// //     color: "#92400e",
// //     whiteSpace: "nowrap",
// //   },

// //   capabilities: {
// //     marginTop: "20px",
// //     marginBottom: "28px",
// //     fontSize: "13px",
// //     color: "#374151",
// //     listStyle: "none",
// //     paddingLeft: 0,
// //     lineHeight: 1.8,
// //   },

// //   cardFooter: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },

// //   securityBox: {
// //     display: "flex",
// //     flexDirection: "column",
// //     fontSize: "12px",
// //   },

// //   securityLabel: {
// //     color: "#9ca3af",
// //   },

// //   securityValue: {
// //     fontWeight: 500,
// //     color: "#111827",
// //   },

// //   primaryBtn: {
// //     padding: "12px 18px",
// //     background: "#111827",
// //     color: "#ffffff",
// //     border: "none",
// //     borderRadius: "10px",
// //     fontSize: "14px",
// //     cursor: "pointer",
// //   },
// // };

// // export default IntegrationsDashboard;








// import { useHistory } from "react-router-dom";
// import { useState } from "react";

// const IntegrationsDashboard = () => {
//   const history = useHistory();
//   const [gcpConnected, setGcpConnected] = useState(false);

//   return (
//     <div style={styles.page}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>Integrations</h1>
//         <p style={styles.subtitle}>
//           Securely connect cloud providers to enable continuous compliance
//           monitoring.
//         </p>
//       </header>

//       <section style={styles.grid}>
//         {/* GCP Integration */}
//         <div
//           style={{
//             ...styles.card,
//             boxShadow: gcpConnected
//               ? "0 10px 25px rgba(16,185,129,0.25)"
//               : styles.card.boxShadow,
//           }}
//         >
//           <div style={styles.cardTop}>
//             <div>
//               <h3 style={styles.cardTitle}>Google Cloud Platform</h3>
//               <p style={styles.cardDesc}>
//                 Read-only visibility into IAM, assets, and compliance posture.
//               </p>
//             </div>

//             <span
//               style={{
//                 ...styles.statusBadge,
//                 background: gcpConnected ? "#d1fae5" : "#fef3c7",
//                 color: gcpConnected ? "#065f46" : "#92400e",
//               }}
//             >
//               {gcpConnected ? "Connected" : "Not Connected"}
//             </span>
//           </div>

//           <ul style={styles.capabilities}>
//             <li>✔ IAM & policy inspection</li>
//             <li>✔ Misconfiguration detection</li>
//             <li>✔ Continuous compliance signals</li>
//           </ul>

//           <div style={styles.cardFooter}>
//             <div>
//               <div style={styles.metaLabel}>Access Level</div>
//               <div style={styles.metaValue}>Read-Only</div>
//             </div>

//             <button
//               style={styles.primaryBtn}
//               onClick={() => history.push("/integrations/gcp/authorize")}
//             >
//               {gcpConnected ? "Manage" : "Connect GCP"}
//             </button>
//           </div>
//         </div>

//         {/* Future integrations */}
//         <div style={{ ...styles.card, opacity: 0.4 }}>
//           <h3 style={styles.cardTitle}>More integrations coming soon</h3>
//           <p style={styles.cardDesc}>AWS, Azure, GitHub</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// const styles = {
//   page: {
//     minHeight: "100vh",
//     padding: "48px",
//     background: "#ffffff",
//     fontFamily: "Inter, sans-serif",
//   },
//   header: { marginBottom: "40px", maxWidth: "900px" },
//   title: { fontSize: "28px", fontWeight: 600 },
//   subtitle: { color: "#6b7280", fontSize: "15px", marginTop: "8px" },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
//     gap: "28px",
//   },
//   card: {
//     border: "1px solid #e5e7eb",
//     borderRadius: "18px",
//     padding: "28px",
//     background: "#fff",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     transition: "all 0.25s ease",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.04)",
//   },
//   cardTop: { display: "flex", justifyContent: "space-between", gap: "16px" },
//   cardTitle: { fontSize: "18px", fontWeight: 600 },
//   cardDesc: { fontSize: "14px", color: "#374151" },
//   statusBadge: {
//     padding: "6px 12px",
//     fontSize: "12px",
//     borderRadius: "999px",
//   },
//   capabilities: {
//     marginTop: "20px",
//     fontSize: "13px",
//     lineHeight: 1.8,
//     listStyle: "none",
//     paddingLeft: 0,
//   },
//   cardFooter: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: "24px",
//   },
//   metaLabel: { fontSize: "12px", color: "#9ca3af" },
//   metaValue: { fontSize: "13px", fontWeight: 500 },
//   primaryBtn: {
//     background: "#111827",
//     color: "#fff",
//     padding: "12px 18px",
//     borderRadius: "10px",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "14px",
//   },
// };

// export default IntegrationsDashboard;

















// import { useState } from "react";


// const IntegrationsDashboard = () => {
//   // Tracks connection state
//   const [connected, setConnected] = useState(false);

//   // Stores any API data (no assumptions about structure)
//   const [apiData, setApiData] = useState(null);
//   //  const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(null);

//   // /*
//   //   Real API endpoint
//   //   ------------------
//   //   Replace this with your backend URL
//   // */
//   // const GCP_API_ENDPOINT =
//   //   "https://api.calvant.com/integrations/gcp/metadata";

//   // // Connect = fetch real API data
//   // const handleConnect = async () => {
//   //   setLoading(true);
//   //   setError(null);

//   //   try {
//   //     const response = await fetch(GCP_API_ENDPOINT, {
//   //       method: "GET",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         // Authorization header can be added later
//   //         // "Authorization": "Bearer <token>"
//   //       },
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error("Failed to fetch GCP data");
//   //     }

//   //     const data = await response.json();

//   //     setApiData(data);
//   //     setConnected(true);
//   //   } catch (err) {
//   //     setError(err.message);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // // Disconnect = reset state
//   // const handleDisconnect = () => {
//   //   setApiData(null);
//   //   setConnected(false);
//   //   setError(null);
//   // };










//   /*
//     Mock API response
//     - This can later be replaced with a real fetch() call
   
//   */
//   const MOCK_API_RESPONSE = {
//     environment: "production",
//     account: "cloud-account-001",
//     region: "asia-south1",
//     permissions: ["read", "list"],
//     lastSynced: "2026-01-12"
//   };

//   // Handle connect action
//   const handleConnect = () => {
//     setApiData(MOCK_API_RESPONSE);
//     setConnected(true);
//   };

//   // Handle disconnect action
//   const handleDisconnect = () => {
//     setApiData(null);
//     setConnected(false);
//   };

//   return (
//     <div style={styles.page}>
//       {/* Page Header */}
//       <header style={styles.header}>
//         <h1 style={styles.title}>Integrations</h1>
//         <p style={styles.subtitle}>
//           Connect cloud providers to view configuration and metadata.
//         </p>
//       </header>

//       {/* Integration Cards Grid */}
//       <section style={styles.grid}>
//         {/* Google Cloud Platform Card */}
//         <div style={styles.card}>
//           {/* Card Header */}
//           <div style={styles.cardTop}>
//             <div>
//               <h3 style={styles.cardTitle}>Google Cloud Platform</h3>
//               <p style={styles.cardDesc}>
//                 View connected cloud configuration and metadata.
//               </p>
//             </div>

//             {/* Connection Status Badge */}
//             <span
//               style={{
//                 ...styles.statusBadge,
//                 background: connected
//                   ? styles.colors.successBg
//                   : styles.colors.warningBg,
//                 color: connected
//                   ? styles.colors.successText
//                   : styles.colors.warningText,
//               }}
//             >
//               {connected ? "Connected" : "Not Connected"}
//             </span>
//           </div>

//           {/* API Data Section (shown only when connected) */}
//           {connected && (
//             <div style={styles.dataBox}>
//               <pre style={styles.pre}>
//                 {JSON.stringify(apiData, null, 2)}
//               </pre>
//             </div>
//           )}

//           {/* Card Footer Actions */}
//           <div style={styles.cardFooter}>
//             {!connected ? (
//               <button
//                 style={styles.primaryBtn}
//                 onClick={handleConnect}
//               >
//                 Connect
//               </button>
//             ) : (
//               <button
//                 style={styles.secondaryBtn}
//                 onClick={handleDisconnect}
//               >
//                 Disconnect
//               </button>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };



// const styles = {
//   colors: {
//     primary: "#2563eb",        // Blue 600
//     primaryHover: "#1d4ed8",
//     textPrimary: "black",    // Gray 900
//     textSecondary: "black",  // Gray 500
//     border: "#e5e7eb",         // Gray 200
//     background: "#f9fafb",     // Gray 50
//     cardBg: "#ffffff",

//     successBg: "#ecfdf5",      // Green 50
//     successText: "#065f46",    // Green 800

//     warningBg: "#fffbeb",      // Amber 50
//     warningText: "#92400e",    // Amber 800
//   },

//   page: {
//     minHeight: "100vh",
//     padding: "48px",
//     background: "#f9fafb",
//     fontFamily: "Inter, sans-serif",
//     color: "#111827",
//   },

//   header: {
//     marginBottom: "40px",
//     maxWidth: "900px",
//   },

//   title: {
//     fontSize: "28px",
//     fontWeight: 600,
//     color: "black"
//   },

//   subtitle: {
//     marginTop: "8px",
//     fontSize: "15px",
//     color: "#6b7280",
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
//     gap: "28px",
//   },

//   card: {
//     background: "#ffffff",
//     border: "1px solid #e5e7eb",
//     borderRadius: "16px",
//     padding: "28px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//   },

//   cardTop: {
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "16px",
//   },

//   cardTitle: {
//     fontSize: "18px",
//     fontWeight: 600,
//      color: "#111827"
//   },

//   cardDesc: {
//     fontSize: "14px",
//     color: "#374151",
//   },

//   statusBadge: {
//     padding: "6px 12px",
//     fontSize: "12px",
//     borderRadius: "999px",
//     whiteSpace: "nowrap",
//     fontWeight: 500,
//   },

//   dataBox: {
//     background: "#f9fafb",
//     border: "1px solid #e5e7eb",
//     borderRadius: "12px",
//     padding: "16px",
//     fontSize: "13px",
//   },

//   pre: {
//     margin: 0,
//     whiteSpace: "pre-wrap",
//     wordBreak: "break-word",
//     color: "white",
//   },

//   cardFooter: {
//     display: "flex",
//     justifyContent: "flex-end",
//   },

//   primaryBtn: {
//     background: "#2563eb",
//     color: "#ffffff",
//     padding: "10px 18px",
//     borderRadius: "10px",
//     border: "none",
//     fontSize: "14px",
//     cursor: "pointer",
//   },

//   secondaryBtn: {
//     background: "#ffffff",
//     color: "#374151",
//     padding: "10px 18px",
//     borderRadius: "10px",
//     border: "1px solid #e5e7eb",
//     fontSize: "14px",
//     cursor: "pointer",
//   },
// };

// export default IntegrationsDashboard;












// import React, { useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, TablePagination,
//   Paper, TextField, Chip,
//   Dialog, DialogTitle, DialogContent
// } from "@material-ui/core";
// import { CONTROL_METADATA } from "../riskAssesment/constants";

// /* ----------------------------------------------------
//    API CONFIG (REAL API READY)
// ---------------------------------------------------- */
// const API_ENDPOINT = "https://api.calvant.com/risk/controls"; // replace only URL

// /* ----------------------------------------------------
//    EXCEL-GUIDED METRIC LOGIC
//    Metric = (Passed Checks / Total Checks) * 100
// ---------------------------------------------------- */
// const calculateMetric = (checks = []) => {
//   if (!checks.length) return 0;
//   const passed = checks.filter(c => c.status === true).length;
//   return Math.round((passed / checks.length) * 100);
// };

// const deriveStatus = (score) => {
//   if (score >= 85) return { label: "Compliant", color: "#16a34a" };
//   if (score >= 60) return { label: "Partially Compliant", color: "#f59e0b" };
//   return { label: "Non-Compliant", color: "#dc2626" };
// };

// /* ----------------------------------------------------
//    MAIN COMPONENT
// ---------------------------------------------------- */
// const RiskAssessmentTable = () => {
//   const [loading, setLoading] = useState(true);
//   const [controls, setControls] = useState([]);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(0);
//   const [modalPage, setModalPage] = useState(0);
//   const [rowsPerPage] = useState(10);
//   const [modalData, setModalData] = useState(null);

//   /* ---------------- FETCH REAL API ---------------- */
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(API_ENDPOINT);
//         /*
//           Expected flexible structure:
//           [
//             {
//               controlId: "8.5",
//               checks: [{ status: true }, { status: false }],
//               users: [{...}, {...}]
//             }
//           ]
//         */

//         const processed = res.data.map(ctrl => {
//           const metric = calculateMetric(ctrl.checks);
//           const status = deriveStatus(metric);
//           const meta = CONTROL_METADATA[ctrl.controlId] || {};

//           return {
//             controlId: ctrl.controlId,
//             name: meta.name || "Unknown Control",
//             description: meta.description || "—",
//             metric,
//             score: metric,
//             status,
//             evidence: ctrl.users || []
//           };
//         });

//         setControls(processed);
//       } catch (err) {
//         console.error("API Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   /* ---------------- SEARCH ---------------- */
//   const filteredControls = useMemo(() => {
//     return controls.filter(c =>
//       c.controlId.toLowerCase().includes(search.toLowerCase()) ||
//       c.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [controls, search]);

//   /* ---------------- LOADER ---------------- */
//   if (loading) {
//     return (
//       <div style={styles.loader}>
//         <div style={styles.skeleton} />
//         <div style={styles.skeleton} />
//         <div style={styles.skeleton} />
//         <p>Calculating metrics using control logic…</p>
//       </div>
//     );
//   }

//   /* ----------------------------------------------------
//      RENDER TABLE
//   ---------------------------------------------------- */
//   return (
//     <Paper style={styles.page}>
//       <h2>Risk Assessment Controls</h2>

//       <TextField
//         label="Search Control ID or Name"
//         variant="outlined"
//         size="small"
//         fullWidth
//         style={{ marginBottom: 16 }}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Control ID</TableCell>
//               <TableCell>Control Name</TableCell>
//               <TableCell>Description</TableCell>
//               <TableCell>Metrics (%)</TableCell>
//               <TableCell>Score</TableCell>
//               <TableCell>Evidence</TableCell>
//               <TableCell>Status</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {filteredControls
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map(row => (
//                 <TableRow key={row.controlId}>
//                   <TableCell>{row.controlId}</TableCell>
//                   <TableCell>{row.name}</TableCell>
//                   <TableCell>{row.description}</TableCell>
//                   <TableCell>{row.metric}%</TableCell>
//                   <TableCell>{row.score}</TableCell>
//                   <TableCell>
//                     <span
//                       style={styles.link}
//                       onClick={() => {
//                         setModalData(row.evidence);
//                         setModalPage(0);
//                       }}
//                     >
//                       View JSON
//                     </span>
//                   </TableCell>
//                   <TableCell>
//                     <Chip
//                       label={row.status.label}
//                       style={{ background: row.status.color, color: "#fff" }}
//                       size="small"
//                     />
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <TablePagination
//         component="div"
//         count={filteredControls.length}
//         page={page}
//         onPageChange={(e, p) => setPage(p)}
//         rowsPerPage={rowsPerPage}
//         rowsPerPageOptions={[10]}
//       />

//       {/* ------------------------------------------------
//          EVIDENCE MODAL – RAW JSON + PAGINATION
//       ------------------------------------------------ */}
//       <Dialog
//         open={Boolean(modalData)}
//         onClose={() => setModalData(null)}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogTitle>User Evidence (Raw JSON)</DialogTitle>
//         <DialogContent>
//           <pre style={styles.jsonBox}>
//             {JSON.stringify(
//               modalData?.slice(modalPage * 5, modalPage * 5 + 5),
//               null,
//               2
//             )}
//           </pre>

//           <TablePagination
//             component="div"
//             count={modalData?.length || 0}
//             page={modalPage}
//             onPageChange={(e, p) => setModalPage(p)}
//             rowsPerPage={5}
//             rowsPerPageOptions={[5]}
//           />
//         </DialogContent>
//       </Dialog>
//     </Paper>
//   );
// };

// /* ----------------------------------------------------
//    STYLES
// ---------------------------------------------------- */
// const styles = {
//   page: { padding: 24, margin: 24, borderRadius: 12 },
//   link: { color: "#2563eb", cursor: "pointer", fontSize: 13 },
//   loader: { padding: 48, textAlign: "center" },
//   skeleton: {
//     height: 18, background: "#e5e7eb",
//     marginBottom: 12, borderRadius: 4
//   },
//   jsonBox: {
//     background: "#0f172a",
//     color: "#e5e7eb",
//     padding: 16,
//     borderRadius: 8,
//     maxHeight: 400,
//     overflow: "auto",
//     fontSize: 12
//   }
// };

// export default RiskAssessmentTable;














import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TextField,
  Select,
  MenuItem,
  Button,
  Paper
} from "@material-ui/core";

import { CONTROL_MAPPING } from "./controldescriptionconstants";
import { calculateMetric, getStatusFromScore } from "./metricsUtils";
import Evidence_Modal from "./evidencemodal";

const RiskAssessmentTable = () => {
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [evidenceModal, setEvidenceModal] = useState({
    open: false,
    data: []
  });

  /** REAL API CALL */
  useEffect(() => {
    axios
      .get("/api/risk-assessment")
      .then(res => setApiData(res.data))
      .catch(err => console.error(err));
  }, []);

  /**
   * Build table rows from CONSTANTS
   * Then enrich using API data matched by controlId
   */
  const processedData = useMemo(() => {
    return Object.entries(CONTROL_MAPPING).map(
      ([controlId, controlName]) => {
        // Find API entry for this control
        const apiEntry = apiData.find(
          item => item.controlId === controlId
        );

        const checks = apiEntry?.metricsChecks || [];
        const evidence = apiEntry?.evidence || [];

        const metric = calculateMetric(checks);
        const status = getStatusFromScore(metric);

        return {
          controlId,
          controlName,
          metric,
          status,
          evidence
        };
      }
    );
  }, [apiData]);

  /** SEARCH + FILTER */
  const filteredData = useMemo(() => {
    return processedData.filter(row => {
      const matchesSearch =
        row.controlId.toLowerCase().includes(search.toLowerCase()) ||
        row.controlName.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        !statusFilter || row.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [processedData, search, statusFilter]);

  return (
    <Paper style={{ width: "100%", padding: 16 }}>
      {/* Controls */}
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <TextField
          label="Search Control ID / Name"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <Select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">All Status</MenuItem>
          <MenuItem value="Non-Compliant">Non-Compliant</MenuItem>
          <MenuItem value="Partially Compliant">
            Partially Compliant
          </MenuItem>
          <MenuItem value="Largely Compliant">
            Largely Compliant
          </MenuItem>
          <MenuItem value="Fully Compliant">
            Fully Compliant
          </MenuItem>
        </Select>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Control ID</TableCell>
              <TableCell>Control Name</TableCell>
               <TableCell>Control description</TableCell>
               <TableCell>Metric</TableCell>
                <TableCell>Score</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Evidence</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.controlId}>
                  <TableCell>{row.controlId}</TableCell>
                  <TableCell>{row.controlName}</TableCell>
                  <TableCell>{row.controldescription}</TableCell>
                  <TableCell>{row.metric}</TableCell>
                  <TableCell>{row.score}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      disabled={!row.evidence.length}
                      onClick={() =>
                        setEvidenceModal({
                          open: true,
                          data: row.evidence
                        })
                      }
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={(_, p) => setPage(p)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={e => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />

      {/* Evidence Modal */}
      <Evidence_Modal
        open={evidenceModal.open}
        evidence={evidenceModal.data}
        onClose={() =>
          setEvidenceModal({ open: false, data: [] })
        }
      />
    </Paper>
  );
};

export default RiskAssessmentTable;
