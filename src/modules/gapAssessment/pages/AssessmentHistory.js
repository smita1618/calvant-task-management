// import React, { useEffect, useState } from "react";
// import gapService from "../services/gapService";
// import { useHistory } from "react-router-dom";
// import {
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   PolarRadiusAxis,
// } from "recharts";
// import { History as HistoryIcon } from "lucide-react";

// const AssessmentHistory = () => {
//   const [gaps, setGaps] = useState([]);
//   const history = useHistory();

//   /** Fetch gaps */
//   useEffect(() => {
//     const fetchGaps = async () => {
//       try {
//         const user = JSON.parse(sessionStorage.getItem("user"));
//         const data = await gapService.getGaps();

//         // 🔥 Filter only gaps belonging to the logged in user's org
//         const filtered = data.filter(
//           (g) => g.organization === user.organization
//         );

//         setGaps(filtered || []);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchGaps();
//   }, []);

//   /** Group gaps by clause */

//   const grouped = gaps.reduce((acc, g) => {
//     if (!acc[g.clause]) acc[g.clause] = [];
//     acc[g.clause].push(g);
//     return acc;
//   }, {});

//   /** Radar chart data: percentage per clause */
//   // Radar chart data
//   const extractClauseNumber = (clause) => clause.split(" ")[0];

//   const radarData = Object.keys(grouped).map((clause) => {
//     const arr = grouped[clause];
//     const answered = arr.filter(
//       (q) => q.docScore !== "" || q.practiceScore !== ""
//     );
//     const total = answered.reduce(
//       (sum, x) => sum + Number(x.totalScore || 0),
//       0
//     );
//     const maxTotal = answered.length * 4;
//     const compliance = maxTotal > 0 ? (total / maxTotal) * 100 : 0;

//     return {
//       clause: extractClauseNumber(clause), // <-- FIXED
//       compliance,
//       fullMark: 100,
//     };
//   });

//   return (
//     <div style={container}>
//       {/* Back button */}
//       <button style={backBtn} onClick={() => history.push("/gap-assessment")}>
//         ← Back to Dashboard{" "}
//       </button>
//       {/* Header */}
//       <div style={headerBox}>
//         <h1 style={headerTitle}>
//           <HistoryIcon size={22} /> Assessment Result
//         </h1>
//         <p style={subText}>
//           View previously reviewed documents and their final statuses.
//         </p>
//       </div>
//       {/* Radar Chart */}
//       {radarData.length > 0 && (
//         <div style={chartContainer}>
//           <h3 style={{ textAlign: "center", marginBottom: 10 }}>
//             Compliance Overview (Per Clause)
//           </h3>

//           <RadarChart
//             cx={390}
//             cy={210}
//             outerRadius={150}
//             width={600}
//             height={450}
//             data={radarData}
//           >
//             {/* Spider-web style grid */}
//             <PolarGrid
//               gridType="polygon"
//               radialLines={true}
//               stroke="#555" // darker grid lines
//               strokeWidth={1.2}
//             />

//             {/* Clause labels */}
//             <PolarAngleAxis
//               dataKey="clause"
//               tick={{ fontSize: 12, fill: "#333" }}
//             />

//             {/* Circular levels / rings */}
//             <PolarRadiusAxis
//               angle={90}
//               domain={[0, 100]}
//               tickCount={6} // creates spider-web rings
//               axisLine={false} // cleaner style
//               tick={{
//                 fill: "#222", // darker label text
//                 fontSize: 7,
//                 fontWeight: "bold",
//               }}
//               stroke="#444"
//             />

//             {/* Actual radar shape */}
//             <Radar
//               name="Compliance"
//               dataKey="compliance"
//               stroke="#005FCC"
//               fill="#005FCC"
//               fillOpacity={0.6}
//               dot={true}
//             />
//           </RadarChart>
//         </div>
//       )}
//       {/* Grouped remarks by clause */}
//       <div style={{ marginTop: 30 }}>
//         {Object.keys(grouped).map((clause) => (
//           <div key={clause} style={clauseBox}>
//             <h2 style={clauseTitle}>{clause}</h2>

//             {grouped[clause].map((item) => (
//               <div key={item._id} style={remarkRow}>
//                 <p>
//                   <strong>Question:</strong> {item.question}
//                 </p>
//                 <p>
//                   <strong>Doc Remark:</strong> {item.docRemarks || "-"}
//                 </p>
//                 <p>
//                   <strong>Practice Remark:</strong>{" "}
//                   {item.practiceRemarks || "-"}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// /* --------------------- Styles ---------------------- */
// const container = {
//   margin: "60px auto 0",
//   padding: 15,
//   maxWidth: 900,
// };

// const backBtn = {
//   position: "sticky",
//   top: 0,
//   margin: "10px",
//   padding: "10px 24px",
//   borderRadius: 8,
//   background: "#005FCC",
//   border: "none",
//   color: "#fff",
//   fontWeight: 500,
//   fontSize: 14,
//   cursor: "pointer",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   zIndex: 999,
// };

// const headerBox = {
//   background: "white",
//   borderRadius: 12,
//   padding: 20,
//   marginBottom: 20,
//   boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
//   border: "1px solid #e9ecef",
//   textAlign: "center",
// };

// const headerTitle = {
//   color: "#2c3e50",
//   fontSize: 22,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   gap: "8px",
// };

// const subText = { color: "#7f8c8d", fontSize: 14 };

// const chartContainer = {
//   background: "white",
//   borderRadius: 12,
//   padding: 20,
//   boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
//   border: "1px solid #e9ecef",
//   marginBottom: 30,
// };

// const clauseBox = {
//   background: "white",
//   padding: 20,
//   borderRadius: 12,
//   marginBottom: 20,
//   border: "1px solid #e9ecef",
//   boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
// };

// const clauseTitle = {
//   fontSize: 18,
//   fontWeight: 700,
//   marginBottom: 10,
// };

// const remarkRow = {
//   padding: "10px 0",
//   borderBottom: "1px solid #f0f0f0",
// };

// export default AssessmentHistory;



import React, { useEffect, useState } from "react";
import gapService from "../services/gapService";
import { useHistory } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { History as HistoryIcon } from "lucide-react";

const AssessmentHistory = () => {
  const [gaps, setGaps] = useState([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const history = useHistory();

  /** Get window dimensions */
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /** Fetch gaps */
  useEffect(() => {
    const fetchGaps = async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem("user"));
        const data = await gapService.getGaps();

        // 🔥 Filter only gaps belonging to the logged in user's org
        const filtered = data.filter(
          (g) => g.organization === user.organization
        );

        setGaps(filtered || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGaps();
  }, []);

  /** Group gaps by clause */
  const grouped = gaps.reduce((acc, g) => {
    if (!acc[g.clause]) acc[g.clause] = [];
    acc[g.clause].push(g);
    return acc;
  }, {});

  /** Radar chart data: percentage per clause */
  // Radar chart data
  const extractClauseNumber = (clause) => clause.split(" ")[0];

  const radarData = Object.keys(grouped).map((clause) => {
    const arr = grouped[clause];
    const answered = arr.filter(
      (q) => q.docScore !== "" || q.practiceScore !== ""
    );
    const total = answered.reduce(
      (sum, x) => sum + Number(x.totalScore || 0),
      0
    );
    const maxTotal = answered.length * 4;
    const compliance = maxTotal > 0 ? (total / maxTotal) * 100 : 0;

    return {
      clause: extractClauseNumber(clause), // <-- FIXED
      compliance,
      fullMark: 100,
    };
  });

  // Responsive dimensions
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width < 1024;
  
  const chartWidth = Math.min(windowSize.width - 40, 900);
  const chartHeight = isMobile ? 300 : isTablet ? 400 : 450;
  const chartCx = chartWidth / 2;
  const chartCy = chartHeight / 2;
  const outerRadius = isMobile ? 100 : isTablet ? 130 : 150;

  return (
    <div style={container(windowSize.width)}>
      {/* Back button */}
      <button style={backBtn(isMobile)} onClick={() => history.push("/gap-assessment")}>
        ← Back to Dashboard
      </button>
      
      {/* Header */}
      <div style={headerBox(isMobile)}>
        <h1 style={headerTitle(isMobile)}>
          <HistoryIcon size={isMobile ? 20 : 22} /> Assessment Result
        </h1>
        <p style={subText(isMobile)}>
          View previously reviewed documents and their final statuses.
        </p>
      </div>

      {/* Radar Chart */}
      {radarData.length > 0 && (
        <div style={chartContainer(isMobile)}>
          <h3 style={chartTitle(isMobile)}>
            Compliance Overview (Per Clause)
          </h3>

          <ResponsiveContainer width="100%" height={chartHeight}>
            <RadarChart
              cx={chartCx}
              cy={chartCy}
              outerRadius={outerRadius}
              data={radarData}
            >
              {/* Spider-web style grid */}
              <PolarGrid
                gridType="polygon"
                radialLines={true}
                stroke="#555"
                strokeWidth={1.2}
              />

              {/* Clause labels */}
              <PolarAngleAxis
                dataKey="clause"
                tick={{ 
                  fontSize: isMobile ? 10 : 12, 
                  fill: "#333",
                  textAnchor: "middle"
                }}
              />

              {/* Circular levels / rings */}
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tickCount={6}
                axisLine={false}
                tick={{
                  fill: "#222",
                  fontSize: isMobile ? 6 : 7,
                  fontWeight: "bold",
                }}
                stroke="#444"
              />

              {/* Actual radar shape */}
              <Radar
                name="Compliance"
                dataKey="compliance"
                stroke="#005FCC"
                fill="#005FCC"
                fillOpacity={0.6}
                dot={true}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Grouped remarks by clause */}
      <div style={remarksContainer(isMobile)}>
        {Object.keys(grouped).map((clause) => (
          <div key={clause} style={clauseBox(isMobile)}>
            <h2 style={clauseTitle(isMobile)}>{clause}</h2>

            {grouped[clause].map((item) => (
              <div key={item._id} style={remarkRow(isMobile)}>
                <div style={questionRow(isMobile)}>
                  <strong style={labelStyle}>Question:</strong>
                  <span>{item.question}</span>
                </div>
                <div style={questionRow(isMobile)}>
                  <strong style={labelStyle}>Doc Remark:</strong>
                  <span>{item.docRemarks || "-"}</span>
                </div>
                <div style={questionRow(isMobile)}>
                  <strong style={labelStyle}>Practice Remark:</strong>
                  <span>{item.practiceRemarks || "-"}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/* --------------------- Responsive Styles ---------------------- */
// const container = (width) => ({
//   margin: width < 768 ? "40px 10px 0" : "60px auto 0",
//   padding: width < 768 ? "10px" : "15px",
//   maxWidth: 900,
//   width: "100%",
//   boxSizing: "border-box",
// });

const container = (width) => ({
  margin: "0 auto 20px",
  padding: width < 768 ? "10px" : "15px",
  maxWidth: 900,
  width: "100%",
  boxSizing: "border-box",
});


const backBtn = (isMobile) => ({
  position: "sticky",
  top: 0,
  margin: isMobile ? "10px 10px 15px" : "10px",
  padding: isMobile ? "12px 20px" : "10px 24px",
  borderRadius: 8,
  background: "#005FCC",
  border: "none",
  color: "#fff",
  fontWeight: 500,
  fontSize: isMobile ? 13 : 14,
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  zIndex: 999,
  width: isMobile ? "calc(100% - 20px)" : "auto",
});

const headerBox = (isMobile) => ({
  background: "white",
  borderRadius: 12,
  padding: isMobile ? "20px 15px" : "20px",
  marginBottom: 20,
  boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
  border: "1px solid #e9ecef",
  textAlign: "center",
});

const headerTitle = (isMobile) => ({
  color: "#2c3e50",
  fontSize: isMobile ? 20 : 22,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  margin: "0 0 8px 0",
});

const subText = (isMobile) => ({
  color: "#7f8c8d",
  fontSize: isMobile ? 13 : 14,
  margin: 0,
  lineHeight: 1.5,
});

const chartContainer = (isMobile) => ({
  background: "white",
  borderRadius: 12,
  padding: isMobile ? "15px" : "20px",
  boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
  border: "1px solid #e9ecef",
  marginBottom: 25,
});

const chartTitle = (isMobile) => ({
  textAlign: "center",
  marginBottom: isMobile ? 12 : 10,
  fontSize: isMobile ? 16 : 18,
  fontWeight: 600,
  color: "#2c3e50",
});

const remarksContainer = (isMobile) => ({
  marginTop: isMobile ? 20 : 30,
});

const clauseBox = (isMobile) => ({
  background: "white",
  padding: isMobile ? "15px" : "20px",
  borderRadius: 12,
  marginBottom: 20,
  border: "1px solid #e9ecef",
  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
});

const clauseTitle = (isMobile) => ({
  fontSize: isMobile ? 16 : 18,
  fontWeight: 700,
  marginBottom: isMobile ? 12 : 10,
  color: "#2c3e50",
});

const remarkRow = (isMobile) => ({
  padding: isMobile ? "12px 0" : "10px 0",
  borderBottom: "1px solid #f0f0f0",
});

const questionRow = (isMobile) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  gap: isMobile ? "4px" : "8px",
  marginBottom: isMobile ? "6px" : "4px",
  alignItems: isMobile ? "flex-start" : "center",
});

const labelStyle = {
  minWidth: "100px",
  fontWeight: 600,
  color: "#2c3e50",
};

export default AssessmentHistory;
