// // src/modules/gapAssessment/pages/NewAssessment.js
// import React, { useEffect, useState } from "react";
// import { ISO_27001_CLAUSES, ISO_27001_CONTROL } from "../constant";
// import {
//   Upload,
//   X,
//   ClipboardCheck,
//   ShieldCheck,
//   Trash,
//   Eye,
// } from "lucide-react";
// import gapService from "../services/gapService";

// const NewAssessment = () => {
//   const [rows, setRows] = useState([]);
//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [user, setUser] = useState(null);
//   const [userRole, setUserRole] = useState("employee");

//   // Load logged-in user
//   useEffect(() => {
//     const rawUser = sessionStorage.getItem("user");
//     if (rawUser) {
//       const parsedUser = JSON.parse(rawUser);
//       setUser(parsedUser);
//       setUserRole(parsedUser.isAuditor || false);
//     }
//   }, []);

//   const isAuditor = userRole;

//   // Build rows from constants filtered by department
//   useEffect(() => {
//     if (!user) return;

//     const combined = [...ISO_27001_CLAUSES, ...ISO_27001_CONTROL];
//     const filtered = combined
//       .flatMap((item) =>
//         item.auditQuestions.map((q) => ({
//           clause: item.clause,
//           standardRequirement: item.standardRequirement,
//           question: typeof q === "string" ? q : q.text || q,
//           departments:
//             item.departments?.map((d) =>
//               typeof d === "string" ? d : d.name
//             ) || [],
//           documentEvidence: null,
//           practiceEvidence: null,
//           practiceNotes: "",
//           documentNotes: "",
//           docScore: "",
//           practiceScore: "",
//           totalScore: 0,
//           docRemarks: "",
//           practiceRemarks: "",
//           gapId: null,
//         }))
//       )
//       .filter((row) =>
//         !user?.department?.name
//           ? true
//           : row.departments.includes(user.department.name)
//       );

//     setRows(filtered);
//   }, [user]);

//   // Fetch gaps from backend
//   useEffect(() => {
//     if (!user) return;

//     const fetchGaps = async () => {
//       try {
//         const gaps = await gapService.getGaps();
//         const filteredGaps = gaps.filter(
//           (g) => g.organization === user.organization
//         );

//         setRows((prev) =>
//           prev.map((row) => {
//             const gap = filteredGaps.find(
//               (g) => g.clause === row.clause && g.question === row.question
//             );
//             return gap
//               ? {
//                   ...row,
//                   documentEvidence: gap.documentURL || null,
//                   practiceEvidence: gap.practiceEvidence || null,
//                   practiceNotes: gap.practiceNotes || "",
//                   documentNotes: gap.documentNotes || "",
//                   docScore: gap.docScore || "",
//                   practiceScore: gap.practiceScore || "",
//                   totalScore:
//                     (gap.docScore ? parseInt(gap.docScore) : 0) +
//                     (gap.practiceScore ? parseInt(gap.practiceScore) : 0),
//                   docRemarks: gap.docRemarks || "",
//                   practiceRemarks: gap.practiceRemarks || "",
//                   gapId: gap._id,
//                 }
//               : row;
//           })
//         );
//       } catch (err) {
//         console.error("Failed to fetch gaps:", err);
//       }
//     };

//     fetchGaps();
//   }, [user]);

//   // Generic input handler
//   const handleInputChange = (i, field, value) => {
//     setRows((prev) => {
//       const updated = [...prev];
//       updated[i][field] = value;

//       if (field === "docScore" || field === "practiceScore") {
//         const doc = updated[i].docScore ? parseInt(updated[i].docScore) : 0;
//         const practice = updated[i].practiceScore
//           ? parseInt(updated[i].practiceScore)
//           : 0;
//         updated[i].totalScore = doc + practice;
//       }

//       return updated;
//     });
//   };

//   // File upload handler
//   const handleFileChange = async (i, file, field) => {
//     if (!file) return;
//     try {
//       const { url } = await gapService.uploadFile(file);
//       const newRow = { ...rows[i], [field]: url };

//       setRows((prev) => {
//         const updated = [...prev];
//         updated[i] = newRow;
//         return updated;
//       });

//       const payload = {
//         clause: newRow.clause,
//         question: newRow.question,
//         standardRequirement: newRow.standardRequirement,
//         documentURL: newRow.documentEvidence || "",
//         documentNotes: newRow.documentNotes || "",
//         practiceEvidence: newRow.practiceEvidence || "",
//         practiceNotes: newRow.practiceNotes || "",
//         docScore: newRow.docScore || "",
//         practiceScore: newRow.practiceScore || "",
//         totalScore: newRow.totalScore || 0,
//         docRemarks: newRow.docRemarks || "",
//         practiceRemarks: newRow.practiceRemarks || "",
//         createdBy: user?.id || "",
//         department: user?.department?.name || "",
//         organization: user?.organization || "",
//       };

//       const saved = await gapService.saveEntry(payload);
//       handleInputChange(i, "gapId", saved._id);
//     } catch (err) {
//       console.error(err);
//       alert("Upload failed");
//     }
//   };

//   // Delete file
//   const handleDeleteFile = async (i, field) => {
//     const row = rows[i];
//     const fileUrl = row[field];
//     if (!fileUrl) return;
//     if (!window.confirm("Are you sure you want to delete this file?")) return;

//     const backendFieldMap = {
//       documentEvidence: "documentURL",
//       practiceEvidence: "practiceEvidence",
//     };
//     const backendField = backendFieldMap[field];
//     if (!backendField) return console.error("Unknown field:", field);

//     try {
//       await gapService.deleteDocumentByUrl(fileUrl, backendField);
//       setRows((prev) => {
//         const updated = [...prev];
//         updated[i][field] = null;
//         return updated;
//       });
//       alert("File deleted successfully");
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Error deleting file");
//     }
//   };

//   // Save practice/document notes on blur
//   const handleNotesBlur = async (i) => {
//     const r = rows[i];
//     if (!r.practiceNotes && !r.documentNotes) return;

//     try {
//       const saved = await gapService.saveEntry({
//         ...r,
//         createdBy: user?.id,
//         organization: user?.organization || "",
//       });

//       handleInputChange(i, "gapId", saved._id);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Auditor score/remark updates
//   const handleAuditorChange = async (i, field, value) => {
//     setRows((prev) => {
//       const updated = [...prev];
//       const row = { ...updated[i], [field]: value };

//       const doc = parseInt(row.docScore || 0);
//       const practice = parseInt(row.practiceScore || 0);
//       row.totalScore = doc + practice;

//       updated[i] = row;
//       return updated;
//     });

//     const row = { ...rows[i], [field]: value };
//     row.totalScore =
//       parseInt(row.docScore || 0) + parseInt(row.practiceScore || 0);

//     let gapId = row.gapId;
//     if (!gapId) {
//       try {
//         const created = await gapService.saveEntry({
//           clause: row.clause,
//           question: row.question,
//           standardRequirement: row.standardRequirement,
//           documentURL: row.documentEvidence || "",
//           documentNotes: row.documentNotes || "",
//           practiceEvidence: row.practiceEvidence || "",
//           practiceNotes: row.practiceNotes || "",
//           docScore: row.docScore || "",
//           practiceScore: row.practiceScore || "",
//           totalScore: row.totalScore,
//           docRemarks: row.docRemarks || "",
//           practiceRemarks: row.practiceRemarks || "",
//           createdBy: user?.id,
//           department: user?.department?.name || "",
//           organization: user?.organization || "",
//         });

//         gapId = created._id;

//         setRows((prev) => {
//           const updated = [...prev];
//           updated[i].gapId = gapId;
//           return updated;
//         });
//       } catch (err) {
//         console.error("Failed to create gap for auditor:", err);
//         return;
//       }
//     }

//     try {
//       await gapService.updateEntry(gapId, {
//         clause: row.clause,
//         question: row.question,
//         standardRequirement: row.standardRequirement,
//         documentURL: row.documentEvidence || "",
//         documentNotes: row.documentNotes || "",
//         practiceEvidence: row.practiceEvidence || "",
//         practiceNotes: row.practiceNotes || "",
//         docScore: row.docScore || "",
//         practiceScore: row.practiceScore || "",
//         totalScore: row.totalScore,
//         docRemarks: row.docRemarks || "",
//         practiceRemarks: row.practiceRemarks || "",
//         verifiedBy: user?.id,
//       });
//     } catch (err) {
//       console.error("Failed to update gap:", err);
//     }
//   };

//   const saveAuditorUpdate = async (row) => {
//     if (!row.gapId) return;

//     try {
//       await gapService.updateEntry(row.gapId, {
//         clause: row.clause,
//         question: row.question,
//         standardRequirement: row.standardRequirement,
//         documentURL: row.documentEvidence || "",
//         practiceEvidence: row.practiceEvidence || "",
//         practiceNotes: row.practiceNotes || "",
//         docScore: row.docScore || "",
//         practiceScore: row.practiceScore || "",
//         totalScore: row.totalScore,
//         docRemarks: row.docRemarks || "",
//         practiceRemarks: row.practiceRemarks || "",
//         verifiedBy: user?.id,
//       });
//     } catch (err) {
//       console.error("Failed to update gap:", err);
//     }
//   };

//   // Group rows by clause
//   const grouped = rows.reduce((acc, r, idx) => {
//     if (!acc[r.clause]) acc[r.clause] = [];
//     acc[r.clause].push({ ...r, idx });
//     return acc;
//   }, {});

//   // Calculate final clause score (%)
//   const clauseScores = Object.keys(grouped).reduce((acc, clause) => {
//     const answered = grouped[clause].filter(
//       (q) => q.docScore !== "" || q.practiceScore !== ""
//     );
//     const total = answered.reduce((sum, q) => sum + (q.totalScore || 0), 0);
//     const maxTotal = answered.length * 4;
//     acc[clause] =
//       maxTotal > 0 ? ((total / maxTotal) * 100).toFixed(2) : "Yet to Calculate";
//     return acc;
//   }, {});

//   return (
//     <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
//         <div className="flex items-center gap-2 sm:gap-3">
//           <ShieldCheck className="text-blue-600" size={24} />
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//             New Assessment
//           </h2>
//         </div>
//         <div className="bg-blue-50 px-3 py-2 rounded-lg text-xs sm:text-sm text-gray-700">
//           <div>
//             Logged in as:{" "}
//             <span className="font-semibold">{user?.name || "Unknown"}</span>
//           </div>
//           <div>
//             Role:{" "}
//             <span className="font-semibold capitalize">
//               {userRole ? "Evaluator" : "Assessor"}
//             </span>{" "}
//             | Dept:{" "}
//             <span className="font-semibold">
//               {user?.department?.name || "N/A"}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Table container */}
//       <div className="rounded-xl shadow border border-gray-200 bg-white">
//         {Object.keys(grouped).map((clause, i) => (
//           <div key={i} className="mb-4 last:mb-0">
//             {/* Scroll container for header + table together */}
//             <div className="overflow-x-auto">
//               {/* Inner block shares same min-width as table */}
//               <div className={isAuditor ? "min-w-[720px]" : "w-full"}>
//                 {/* Clause header spanning full table width */}
//                 <div className="bg-blue-100 px-3 sm:px-4 py-2 border-b border-gray-200">
//                   <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
//                     {clause}
//                   </h3>
//                   <span className="block text-xs sm:text-sm text-gray-600">
//                     {grouped[clause][0].standardRequirement}
//                   </span>
//                 </div>

//                 {/* Scrollable table */}
//                 <table
//                   className={`${
//                     isAuditor ? "min-w-[720px]" : "w-full"
//                   } text-xs sm:text-sm border-collapse`}
//                 >
//                   <thead className="bg-gray-50 sticky top-0 z-10">
//                     <tr>
//                       <th className="border px-2 sm:px-3 py-2 text-left">
//                         Question
//                       </th>
//                       <th className="border px-2 sm:px-3 py-2">
//                         Document Evidence
//                       </th>
//                       <th className="border px-2 sm:px-3 py-2">
//                         Practice Evidence
//                       </th>
//                       {userRole && (
//                         <>
//                           <th className="border px-2 sm:px-3 py-2">
//                             Doc Score
//                           </th>
//                           <th className="border px-2 sm:px-3 py-2">
//                             Practice Score
//                           </th>
//                           <th className="border px-2 sm:px-3 py-2">
//                             Total Score
//                           </th>
//                           <th className="border px-2 sm:px-3 py-2">
//                             Doc Remarks
//                           </th>
//                           <th className="border px-2 sm:px-3 py-2">
//                             Practice Remarks
//                           </th>
//                         </>
//                       )}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {grouped[clause].map((row) => (
//                       <tr
//                         key={row.idx}
//                         className="hover:bg-blue-50 transition-colors"
//                       >
//                         <td className="border px-2 sm:px-3 py-2 align-top font-medium">
//                           {row.question}
//                         </td>

//                         {/* Document Evidence */}
//                         <td className="border px-2 sm:px-3 py-2 align-top">
//                           {!userRole && (
//                             <label className="cursor-pointer text-blue-600 hover:underline text-[11px] sm:text-xs">
//                               <Upload size={14} className="inline mr-1" />
//                               Upload
//                               <input
//                                 type="file"
//                                 className="hidden"
//                                 onChange={(e) =>
//                                   handleFileChange(
//                                     row.idx,
//                                     e.target.files[0],
//                                     "documentEvidence"
//                                   )
//                                 }
//                               />
//                             </label>
//                           )}
//                           {row.documentEvidence && (
//                             <div className="mt-1 space-x-1">
//                               <button
//                                 onClick={() =>
//                                   setSelectedDoc(row.documentEvidence)
//                                 }
//                                 className="text-[11px] sm:text-xs text-blue-600 hover:underline"
//                               >
//                                 <Eye size={14} className="inline mr-1" />
//                                 View
//                               </button>
//                               <button
//                                 onClick={() =>
//                                   handleDeleteFile(row.idx, "documentEvidence")
//                                 }
//                                 className="text-[11px] sm:text-xs text-red-500 hover:underline"
//                               >
//                                 <Trash size={14} className="inline mr-1" />
//                                 Delete
//                               </button>
//                             </div>
//                           )}
//                           <textarea
//                             className="w-full border rounded mt-2 px-1 py-0.5 text-[11px] sm:text-xs"
//                             rows={2}
//                             value={row.documentNotes || ""}
//                             placeholder="Document notes..."
//                             onChange={(e) =>
//                               handleInputChange(
//                                 row.idx,
//                                 "documentNotes",
//                                 e.target.value
//                               )
//                             }
//                             onBlur={() => handleNotesBlur(row.idx)}
//                           />
//                         </td>

//                         {/* Practice Evidence */}
//                         <td className="border px-2 sm:px-3 py-2 align-top">
//                           {!userRole && (
//                             <label className="cursor-pointer text-green-600 hover:underline text-[11px] sm:text-xs">
//                               <Upload size={14} className="inline mr-1" />
//                               Upload
//                               <input
//                                 type="file"
//                                 className="hidden"
//                                 onChange={(e) =>
//                                   handleFileChange(
//                                     row.idx,
//                                     e.target.files[0],
//                                     "practiceEvidence"
//                                   )
//                                 }
//                               />
//                             </label>
//                           )}
//                           {row.practiceEvidence && (
//                             <div className="mt-1 space-x-1">
//                               <button
//                                 onClick={() =>
//                                   setSelectedDoc(row.practiceEvidence)
//                                 }
//                                 className="text-[11px] sm:text-xs text-green-600 hover:underline"
//                               >
//                                 <Eye size={14} className="inline mr-1" />
//                                 View
//                               </button>
//                               <button
//                                 onClick={() =>
//                                   handleDeleteFile(row.idx, "practiceEvidence")
//                                 }
//                                 className="text-[11px] sm:text-xs text-red-500 hover:underline"
//                               >
//                                 <Trash size={14} className="inline mr-1" />
//                                 Delete
//                               </button>
//                             </div>
//                           )}
//                           <textarea
//                             className="w-full border rounded mt-2 px-1 py-0.5 text-[11px] sm:text-xs"
//                             rows={2}
//                             value={row.practiceNotes || ""}
//                             placeholder="Practice notes..."
//                             onChange={(e) =>
//                               handleInputChange(
//                                 row.idx,
//                                 "practiceNotes",
//                                 e.target.value
//                               )
//                             }
//                             onBlur={() => handleNotesBlur(row.idx)}
//                           />
//                         </td>

//                         {/* Scores and remarks (auditor) */}
//                         {userRole && (
//                           <>
//                             <td className="border px-2 sm:px-3 py-2 align-top">
//                               <select
//                                 value={row.docScore}
//                                 onChange={(e) =>
//                                   handleAuditorChange(
//                                     row.idx,
//                                     "docScore",
//                                     e.target.value
//                                   )
//                                 }
//                                 className="w-full border rounded text-[11px] sm:text-xs"
//                               >
//                                 <option value="">NA</option>
//                                 <option value="0">0 - Non Compliant</option>
//                                 <option value="1">1 - Partial</option>
//                                 <option value="2">2 - Compliant</option>
//                               </select>
//                             </td>

//                             <td className="border px-2 sm:px-3 py-2 align-top">
//                               <select
//                                 value={row.practiceScore}
//                                 onChange={(e) =>
//                                   handleAuditorChange(
//                                     row.idx,
//                                     "practiceScore",
//                                     e.target.value
//                                   )
//                                 }
//                                 className="w-full border rounded text-[11px] sm:text-xs"
//                               >
//                                 <option value="">NA</option>
//                                 <option value="0">0 - Non Compliant</option>
//                                 <option value="1">1 - Partial</option>
//                                 <option value="2">2 - Compliant</option>
//                               </select>
//                             </td>

//                             <td className="border px-2 sm:px-3 py-2 align-middle text-center font-semibold text-xs">
//                               {row.totalScore}
//                             </td>

//                             <td className="border px-2 sm:px-3 py-2 align-top">
//                               <textarea
//                                 value={row.docRemarks}
//                                 onChange={(e) =>
//                                   handleAuditorChange(
//                                     row.idx,
//                                     "docRemarks",
//                                     e.target.value
//                                   )
//                                 }
//                                 className="w-full border rounded text-[11px] sm:text-xs"
//                                 rows={2}
//                                 placeholder="Doc remarks..."
//                               />
//                             </td>

//                             <td className="border px-2 sm:px-3 py-2 align-top">
//                               <textarea
//                                 value={row.practiceRemarks}
//                                 onChange={(e) =>
//                                   handleAuditorChange(
//                                     row.idx,
//                                     "practiceRemarks",
//                                     e.target.value
//                                   )
//                                 }
//                                 className="w-full border rounded text-[11px] sm:text-xs"
//                                 rows={2}
//                                 placeholder="Practice remarks..."
//                               />
//                             </td>
//                           </>
//                         )}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Clause Score (can stay full-width, outside scroll) */}
//             <div className="text-right pr-3 sm:pr-4 py-2 text-xs sm:text-sm font-semibold text-gray-700">
//               Section Score: {clauseScores[clause]} %
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Document Modal */}
//       {selectedDoc && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-2"
//           onClick={() => setSelectedDoc(null)}
//         >
//           <div
//             className="bg-white rounded-lg p-3 sm:p-4 w-full max-w-lg md:max-w-2xl relative shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-center mb-3 border-b pb-2">
//               <h3 className="font-semibold text-base sm:text-lg text-gray-800 flex items-center gap-2">
//                 <ClipboardCheck className="text-blue-600" size={18} />
//                 Uploaded Document
//               </h3>
//               <button
//                 onClick={() => setSelectedDoc(null)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <X size={20} />
//               </button>
//             </div>
//             <iframe
//               src={
//                 selectedDoc.startsWith("http")
//                   ? selectedDoc
//                   : `process.env.REACT_APP_SP/gap-service${selectedDoc}`
//               }
//               className="w-full h-72 sm:h-96 border rounded-md"
//               title="Document Preview"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewAssessment;







// src/modules/gapAssessment/pages/NewAssessment.js
import React, { useEffect, useState } from "react";
import { ISO_27001_CLAUSES, ISO_27001_CONTROL } from "../constant";
import {
  Upload,
  X,
  ClipboardCheck,
  ShieldCheck,
  Trash,
  Eye,
} from "lucide-react";
import { useHistory } from "react-router-dom"; // ✅ added
import gapService from "../services/gapService";

const NewAssessment = () => {
  const history = useHistory(); // ✅ added

  const [rows, setRows] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState("employee");

  // Load logged-in user
  useEffect(() => {
    const rawUser = sessionStorage.getItem("user");
    if (rawUser) {
      const parsedUser = JSON.parse(rawUser);
      setUser(parsedUser);
      setUserRole(parsedUser.isAuditor || false);
    }
  }, []);

  const isAuditor = userRole;

  // Build rows from constants filtered by department
  useEffect(() => {
    if (!user) return;

    const combined = [...ISO_27001_CLAUSES, ...ISO_27001_CONTROL];
    const filtered = combined
      .flatMap((item) =>
        item.auditQuestions.map((q) => ({
          clause: item.clause,
          standardRequirement: item.standardRequirement,
          question: typeof q === "string" ? q : q.text || q,
          departments:
            item.departments?.map((d) =>
              typeof d === "string" ? d : d.name
            ) || [],
          documentEvidence: null,
          practiceEvidence: null,
          practiceNotes: "",
          documentNotes: "",
          docScore: "",
          practiceScore: "",
          totalScore: 0,
          docRemarks: "",
          practiceRemarks: "",
          gapId: null,
        }))
      )
      .filter((row) =>
        !user?.department?.name
          ? true
          : row.departments.includes(user.department.name)
      );

    setRows(filtered);
  }, [user]);

  // Fetch gaps from backend
  useEffect(() => {
    if (!user) return;

    const fetchGaps = async () => {
      try {
        const gaps = await gapService.getGaps();
        const filteredGaps = gaps.filter(
          (g) => g.organization === user.organization
        );

        setRows((prev) =>
          prev.map((row) => {
            const gap = filteredGaps.find(
              (g) => g.clause === row.clause && g.question === row.question
            );
            return gap
              ? {
                  ...row,
                  documentEvidence: gap.documentURL || null,
                  practiceEvidence: gap.practiceEvidence || null,
                  practiceNotes: gap.practiceNotes || "",
                  documentNotes: gap.documentNotes || "",
                  docScore: gap.docScore || "",
                  practiceScore: gap.practiceScore || "",
                  totalScore:
                    (gap.docScore ? parseInt(gap.docScore) : 0) +
                    (gap.practiceScore ? parseInt(gap.practiceScore) : 0),
                  docRemarks: gap.docRemarks || "",
                  practiceRemarks: gap.practiceRemarks || "",
                  gapId: gap._id,
                }
              : row;
          })
        );
      } catch (err) {
        console.error("Failed to fetch gaps:", err);
      }
    };

    fetchGaps();
  }, [user]);

  // Generic input handler
  const handleInputChange = (i, field, value) => {
    setRows((prev) => {
      const updated = [...prev];
      updated[i][field] = value;

      if (field === "docScore" || field === "practiceScore") {
        const doc = updated[i].docScore ? parseInt(updated[i].docScore) : 0;
        const practice = updated[i].practiceScore
          ? parseInt(updated[i].practiceScore)
          : 0;
        updated[i].totalScore = doc + practice;
      }

      return updated;
    });
  };

  // File upload handler
  const handleFileChange = async (i, file, field) => {
    if (!file) return;
    try {
      const { url } = await gapService.uploadFile(file);
      const newRow = { ...rows[i], [field]: url };

      setRows((prev) => {
        const updated = [...prev];
        updated[i] = newRow;
        return updated;
      });

      const payload = {
        clause: newRow.clause,
        question: newRow.question,
        standardRequirement: newRow.standardRequirement,
        documentURL: newRow.documentEvidence || "",
        documentNotes: newRow.documentNotes || "",
        practiceEvidence: newRow.practiceEvidence || "",
        practiceNotes: newRow.practiceNotes || "",
        docScore: newRow.docScore || "",
        practiceScore: newRow.practiceScore || "",
        totalScore: newRow.totalScore || 0,
        docRemarks: newRow.docRemarks || "",
        practiceRemarks: newRow.practiceRemarks || "",
        createdBy: user?.id || "",
        department: user?.department?.name || "",
        organization: user?.organization || "",
      };

      const saved = await gapService.saveEntry(payload);
      handleInputChange(i, "gapId", saved._id);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  // Delete file
  const handleDeleteFile = async (i, field) => {
    const row = rows[i];
    const fileUrl = row[field];
    if (!fileUrl) return;
    if (!window.confirm("Are you sure you want to delete this file?")) return;

    const backendFieldMap = {
      documentEvidence: "documentURL",
      practiceEvidence: "practiceEvidence",
    };
    const backendField = backendFieldMap[field];
    if (!backendField) return console.error("Unknown field:", field);

    try {
      await gapService.deleteDocumentByUrl(fileUrl, backendField);
      setRows((prev) => {
        const updated = [...prev];
        updated[i][field] = null;
        return updated;
      });
      alert("File deleted successfully");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Error deleting file");
    }
  };

  // Save practice/document notes on blur
  const handleNotesBlur = async (i) => {
    const r = rows[i];
    if (!r.practiceNotes && !r.documentNotes) return;

    try {
      const saved = await gapService.saveEntry({
        ...r,
        createdBy: user?.id,
        organization: user?.organization || "",
      });

      handleInputChange(i, "gapId", saved._id);
    } catch (err) {
      console.error(err);
    }
  };

  // Auditor score/remark updates
  const handleAuditorChange = async (i, field, value) => {
    setRows((prev) => {
      const updated = [...prev];
      const row = { ...updated[i], [field]: value };

      const doc = parseInt(row.docScore || 0);
      const practice = parseInt(row.practiceScore || 0);
      row.totalScore = doc + practice;

      updated[i] = row;
      return updated;
    });

    const row = { ...rows[i], [field]: value };
    row.totalScore =
      parseInt(row.docScore || 0) + parseInt(row.practiceScore || 0);

    let gapId = row.gapId;
    if (!gapId) {
      try {
        const created = await gapService.saveEntry({
          clause: row.clause,
          question: row.question,
          standardRequirement: row.standardRequirement,
          documentURL: row.documentEvidence || "",
          documentNotes: row.documentNotes || "",
          practiceEvidence: row.practiceEvidence || "",
          practiceNotes: row.practiceNotes || "",
          docScore: row.docScore || "",
          practiceScore: row.practiceScore || "",
          totalScore: row.totalScore,
          docRemarks: row.docRemarks || "",
          practiceRemarks: row.practiceRemarks || "",
          createdBy: user?.id,
          department: user?.department?.name || "",
          organization: user?.organization || "",
        });

        gapId = created._id;

        setRows((prev) => {
          const updated = [...prev];
          updated[i].gapId = gapId;
          return updated;
        });
      } catch (err) {
        console.error("Failed to create gap for auditor:", err);
        return;
      }
    }

    try {
      await gapService.updateEntry(gapId, {
        clause: row.clause,
        question: row.question,
        standardRequirement: row.standardRequirement,
        documentURL: row.documentEvidence || "",
        documentNotes: row.documentNotes || "",
        practiceEvidence: row.practiceEvidence || "",
        practiceNotes: row.practiceNotes || "",
        docScore: row.docScore || "",
        practiceScore: row.practiceScore || "",
        totalScore: row.totalScore,
        docRemarks: row.docRemarks || "",
        practiceRemarks: row.practiceRemarks || "",
        verifiedBy: user?.id,
      });
    } catch (err) {
      console.error("Failed to update gap:", err);
    }
  };

  const saveAuditorUpdate = async (row) => {
    if (!row.gapId) return;

    try {
      await gapService.updateEntry(row.gapId, {
        clause: row.clause,
        question: row.question,
        standardRequirement: row.standardRequirement,
        documentURL: row.documentEvidence || "",
        practiceEvidence: row.practiceEvidence || "",
        practiceNotes: row.practiceNotes || "",
        docScore: row.docScore || "",
        practiceScore: row.practiceScore || "",
        totalScore: row.totalScore,
        docRemarks: row.docRemarks || "",
        practiceRemarks: row.practiceRemarks || "",
        verifiedBy: user?.id,
      });
    } catch (err) {
      console.error("Failed to update gap:", err);
    }
  };

  // Group rows by clause
  const grouped = rows.reduce((acc, r, idx) => {
    if (!acc[r.clause]) acc[r.clause] = [];
    acc[r.clause].push({ ...r, idx });
    return acc;
  }, {});

  // Calculate final clause score (%)
  const clauseScores = Object.keys(grouped).reduce((acc, clause) => {
    const answered = grouped[clause].filter(
      (q) => q.docScore !== "" || q.practiceScore !== ""
    );
    const total = answered.reduce((sum, q) => sum + (q.totalScore || 0), 0);
    const maxTotal = answered.length * 4;
    acc[clause] =
      maxTotal > 0 ? ((total / maxTotal) * 100).toFixed(2) : "Yet to Calculate";
    return acc;
  }, {});

  return (
    <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 max-w-7xl mx-auto">
      {/* Back to Dashboard button (same position style, responsive) */}
      <div className="mb-3">
        <button
          onClick={() => history.push("/gap-assessment")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white text-xs sm:text-sm font-semibold shadow-sm hover:bg-blue-700 transition-transform duration-200 hover:-translate-y-0.5"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <ShieldCheck className="text-blue-600" size={24} />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            New Assessment
          </h2>
        </div>
        <div className="bg-blue-50 px-3 py-2 rounded-lg text-xs sm:text-sm text-gray-700">
          <div>
            Logged in as:{" "}
            <span className="font-semibold">{user?.name || "Unknown"}</span>
          </div>
          <div>
            Role:{" "}
            <span className="font-semibold capitalize">
              {userRole ? "Evaluator" : "Assessor"}
            </span>{" "}
            | Dept:{" "}
            <span className="font-semibold">
              {user?.department?.name || "N/A"}
            </span>
          </div>
        </div>
      </div>

      {/* Table container */}
      <div className="rounded-xl shadow border border-gray-200 bg-white">
        {Object.keys(grouped).map((clause, i) => (
          <div key={i} className="mb-4 last:mb-0">
            {/* Scroll container for header + table together */}
            <div className="overflow-x-auto">
              {/* Inner block shares same min-width as table */}
              <div className={isAuditor ? "min-w-[720px]" : "w-full"}>
                {/* Clause header spanning full table width */}
                <div className="bg-blue-100 px-3 sm:px-4 py-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {clause}
                  </h3>
                  <span className="block text-xs sm:text-sm text-gray-600">
                    {grouped[clause][0].standardRequirement}
                  </span>
                </div>

                {/* Scrollable table */}
                <table
                  className={`${
                    isAuditor ? "min-w-[720px]" : "w-full"
                  } text-xs sm:text-sm border-collapse`}
                >
                  <thead className="bg-gray-50 sticky top-0 z-10">
                    <tr>
                      <th className="border px-2 sm:px-3 py-2 text-left">
                        Question
                      </th>
                      <th className="border px-2 sm:px-3 py-2">
                        Document Evidence
                      </th>
                      <th className="border px-2 sm:px-3 py-2">
                        Practice Evidence
                      </th>
                      {userRole && (
                        <>
                          <th className="border px-2 sm:px-3 py-2">
                            Doc Score
                          </th>
                          <th className="border px-2 sm:px-3 py-2">
                            Practice Score
                          </th>
                          <th className="border px-2 sm:px-3 py-2">
                            Total Score
                          </th>
                          <th className="border px-2 sm:px-3 py-2">
                            Doc Remarks
                          </th>
                          <th className="border px-2 sm:px-3 py-2">
                            Practice Remarks
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {grouped[clause].map((row) => (
                      <tr
                        key={row.idx}
                        className="hover:bg-blue-50 transition-colors"
                      >
                        <td className="border px-2 sm:px-3 py-2 align-top font-medium">
                          {row.question}
                        </td>

                        {/* Document Evidence */}
                        <td className="border px-2 sm:px-3 py-2 align-top">
                          {!userRole && (
                            <label className="cursor-pointer text-blue-600 hover:underline text-[11px] sm:text-xs">
                              <Upload size={14} className="inline mr-1" />
                              Upload
                              <input
                                type="file"
                                className="hidden"
                                onChange={(e) =>
                                  handleFileChange(
                                    row.idx,
                                    e.target.files[0],
                                    "documentEvidence"
                                  )
                                }
                              />
                            </label>
                          )}
                          {row.documentEvidence && (
                            <div className="mt-1 space-x-1">
                              <button
                                onClick={() =>
                                  setSelectedDoc(row.documentEvidence)
                                }
                                className="text-[11px] sm:text-xs text-blue-600 hover:underline"
                              >
                                <Eye size={14} className="inline mr-1" />
                                View
                              </button>
                              <button
                                onClick={() =>
                                  handleDeleteFile(row.idx, "documentEvidence")
                                }
                                className="text-[11px] sm:text-xs text-red-500 hover:underline"
                              >
                                <Trash size={14} className="inline mr-1" />
                                Delete
                              </button>
                            </div>
                          )}
                          <textarea
                            className="w-full border rounded mt-2 px-1 py-0.5 text-[11px] sm:text-xs"
                            rows={2}
                            value={row.documentNotes || ""}
                            placeholder="Document notes..."
                            onChange={(e) =>
                              handleInputChange(
                                row.idx,
                                "documentNotes",
                                e.target.value
                              )
                            }
                            onBlur={() => handleNotesBlur(row.idx)}
                          />
                        </td>

                        {/* Practice Evidence */}
                        <td className="border px-2 sm:px-3 py-2 align-top">
                          {!userRole && (
                            <label className="cursor-pointer text-green-600 hover:underline text-[11px] sm:text-xs">
                              <Upload size={14} className="inline mr-1" />
                              Upload
                              <input
                                type="file"
                                className="hidden"
                                onChange={(e) =>
                                  handleFileChange(
                                    row.idx,
                                    e.target.files[0],
                                    "practiceEvidence"
                                  )
                                }
                              />
                            </label>
                          )}
                          {row.practiceEvidence && (
                            <div className="mt-1 space-x-1">
                              <button
                                onClick={() =>
                                  setSelectedDoc(row.practiceEvidence)
                                }
                                className="text-[11px] sm:text-xs text-green-600 hover:underline"
                              >
                                <Eye size={14} className="inline mr-1" />
                                View
                              </button>
                              <button
                                onClick={() =>
                                  handleDeleteFile(row.idx, "practiceEvidence")
                                }
                                className="text-[11px] sm:text-xs text-red-500 hover:underline"
                              >
                                <Trash size={14} className="inline mr-1" />
                                Delete
                              </button>
                            </div>
                          )}
                          <textarea
                            className="w-full border rounded mt-2 px-1 py-0.5 text-[11px] sm:text-xs"
                            rows={2}
                            value={row.practiceNotes || ""}
                            placeholder="Practice notes..."
                            onChange={(e) =>
                              handleInputChange(
                                row.idx,
                                "practiceNotes",
                                e.target.value
                              )
                            }
                            onBlur={() => handleNotesBlur(row.idx)}
                          />
                        </td>

                        {/* Scores and remarks (auditor) */}
                        {userRole && (
                          <>
                            <td className="border px-2 sm:px-3 py-2 align-top">
                              <select
                                value={row.docScore}
                                onChange={(e) =>
                                  handleAuditorChange(
                                    row.idx,
                                    "docScore",
                                    e.target.value
                                  )
                                }
                                className="w-full border rounded text-[11px] sm:text-xs"
                              >
                                <option value="">NA</option>
                                <option value="0">0 - Non Compliant</option>
                                <option value="1">1 - Partial</option>
                                <option value="2">2 - Compliant</option>
                              </select>
                            </td>

                            <td className="border px-2 sm:px-3 py-2 align-top">
                              <select
                                value={row.practiceScore}
                                onChange={(e) =>
                                  handleAuditorChange(
                                    row.idx,
                                    "practiceScore",
                                    e.target.value
                                  )
                                }
                                className="w-full border rounded text-[11px] sm:text-xs"
                              >
                                <option value="">NA</option>
                                <option value="0">0 - Non Compliant</option>
                                <option value="1">1 - Partial</option>
                                <option value="2">2 - Compliant</option>
                              </select>
                            </td>

                            <td className="border px-2 sm:px-3 py-2 align-middle text-center font-semibold text-xs">
                              {row.totalScore}
                            </td>

                            <td className="border px-2 sm:px-3 py-2 align-top">
                              <textarea
                                value={row.docRemarks}
                                onChange={(e) =>
                                  handleAuditorChange(
                                    row.idx,
                                    "docRemarks",
                                    e.target.value
                                  )
                                }
                                className="w-full border rounded text-[11px] sm:text-xs"
                                rows={2}
                                placeholder="Doc remarks..."
                              />
                            </td>

                            <td className="border px-2 sm:px-3 py-2 align-top">
                              <textarea
                                value={row.practiceRemarks}
                                onChange={(e) =>
                                  handleAuditorChange(
                                    row.idx,
                                    "practiceRemarks",
                                    e.target.value
                                  )
                                }
                                className="w-full border rounded text-[11px] sm:text-xs"
                                rows={2}
                                placeholder="Practice remarks..."
                              />
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Clause Score (can stay full-width, outside scroll) */}
            <div className="text-right pr-3 sm:pr-4 py-2 text-xs sm:text-sm font-semibold text-gray-700">
              Section Score: {clauseScores[clause]} %
            </div>
          </div>
        ))}
      </div>

      {/* Document Modal */}
      {selectedDoc && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-2"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="bg-white rounded-lg p-3 sm:p-4 w-full max-w-lg md:max-w-2xl relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-3 border-b pb-2">
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 flex items-center gap-2">
                <ClipboardCheck className="text-blue-600" size={18} />
                Uploaded Document
              </h3>
              <button
                onClick={() => setSelectedDoc(null)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src={
                selectedDoc.startsWith("http")
                  ? selectedDoc
                  : `process.env.REACT_APP_SP/gap-service${selectedDoc}`
              }
              className="w-full h-72 sm:h-96 border rounded-md"
              title="Document Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewAssessment;
