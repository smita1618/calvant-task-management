// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { Home, FolderKanban, FileText, TrendingUp, LogOut, ClipboardCheck, CheckSquare, CloudDownload } from "lucide-react";
// import { Menu } from "lucide-react";
// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const history = useHistory();

//   const rawUser = sessionStorage.getItem("user");
//   const user = rawUser ? JSON.parse(rawUser) : null;

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   const handleLogout = () => {
//     sessionStorage.clear();
//     history.push(""); // adjust if login path differs
//     closeMenu();
//   };

//   const handleNavigation = (path, state = null) => {
//     if (state) {
//       history.push(path, state);
//     } else {
//       history.push(path);
//     }
//     closeMenu();
//   };

//   const iconStyle = { marginRight: 10, verticalAlign: "middle" };

//   return (
//     <>
//       {!isOpen && (
//         <button
//           style={{
//             position: "fixed",
//             top: 10,
//             left: 10,
//             zIndex: 9999,
//             width: 40,
//             height: 40,
//             backgroundColor: "#007bff",
//             border: "none",
//             borderRadius: 8,
//             cursor: "pointer",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: 4,
//             boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//             transition: "transform 0.2s ease",
//           }}
//           onClick={toggleMenu}
//           aria-label="Open menu"
//           onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
//           onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//         >
//           <Menu />
//         </button>
//       )}

//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//       backgroundColor: "rgba(0,0,0,0.3)",  //LIGHTER BACKDROP
//     backdropFilter: "blur(2px)",        //ADD BLUR
//           display: isOpen ? "block" : "none",
//           zIndex: 998,
//         }}
//         onClick={closeMenu}
//       ></div>

//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           left: isOpen ? 0 : -300,
//           width: 280,
//           height: "100vh",
//           backgroundColor: "white",
//           boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
//           transition: "left 0.3s ease",
//           zIndex: 1000,
//           overflowY: "auto",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <div
//           style={{
//             padding: 20,
//             backgroundColor: "#007bff",
//             color: "white",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h3 style={{ margin: 0, fontSize: 18 }}>CalVant</h3>
//           <button
//             style={{
//               background: "none",
//               border: "none",
//               color: "white",
//               fontSize: 24,
//               cursor: "pointer",
//               padding: 0,
//               width: 30,
//               height: 30,
//             }}
//             onClick={closeMenu}
//             title="Close menu"
//           >
//             &times;
//           </button>
//         </div>

//         {/* HOME */}
//         <div
//           style={{
//             display: "block",
//             padding: "15px 20px",
//             color: "#333",
//             textDecoration: "none",
//             fontWeight: 500,
//             cursor: "pointer",
//             borderBottom: "1px solid #eee",
//             transition: "background-color 0.3s ease",
//           }}
//           onClick={() => handleNavigation("/")}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = "#f8f9fa")}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//         >
//           <Home style={iconStyle} size={18} /> Home
//         </div>

//         <div style={{ padding: "5px 0", flexGrow: 1 }}>
//           <div
//             style={{
//               display: "block",
//               padding: "15px 20px",
//               color: "#333",
//               textDecoration: "none",
//               fontWeight: 500,
//               cursor: "pointer",
//               borderBottom: "1px solid #eee",
//               transition: "background-color 0.3s ease",
//             }}
//             onClick={() => handleNavigation("/risk-assessment/")}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor = "#f8f9fa")
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FolderKanban style={iconStyle} size={18} /> Risk Management
//           </div>

//           <div
//             style={{
//               display: "block",
//               padding: "15px 20px",
//               color: "#333",
//               textDecoration: "none",
//               fontWeight: 500,
//               cursor: "pointer",
//               borderBottom: "1px solid #eee",
//               transition: "background-color 0.3s ease",
//             }}
//             onClick={() => handleNavigation("/documentation")}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor = "#f8f9fa")
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FileText style={iconStyle} size={18} /> Documentation
//           </div>

//           <div
//             style={{
//               display: "block",
//               padding: "15px 20px",
//               color: "#333",
//               textDecoration: "none",
//               fontWeight: 500,
//               cursor: "pointer",
//               borderBottom: "1px solid #eee",
//               transition: "background-color 0.3s ease",
//             }}
//             onClick={() => handleNavigation("/gap-assessment")}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor = "#f8f9fa")
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <ClipboardCheck style={iconStyle} size={18} /> Gap Assessment
//           </div>



//           <div
//             style={{
//               display: "block",
//               padding: "15px 20px",
//               color: "#333",
//               textDecoration: "none",
//               fontWeight: 500,
//               cursor: "pointer",
//               // borderBottom: "1px solid #eee",
//               transition: "background-color 0.3s ease",
//             }}
//             onClick={() => handleNavigation("/task-management")}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor = "#f8f9fa")
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <CheckSquare style={iconStyle} size={18} /> Task Management
//           </div>

//                       <div
//             style={{
//               display: "block",
//               padding: "15px 20px",
//               color: "#333",
//               textDecoration: "none",
//               fontWeight: 500,
//               cursor: "pointer",
//               // borderBottom: "1px solid #eee",
//               transition: "background-color 0.3s ease",
//             }}
//             onClick={() => handleNavigation("/integrations")}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor = "#f8f9fa")
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <CloudDownload style={iconStyle} size={18} /> Auto Evidence Collector
//           </div>

//           {user && (
//             <div
//               style={{
//                 // marginTop: 10,
//                 padding: "10px 20px",
//                 borderTop: "1px solid #eee",
//                 color: "#007bff",
//                 fontWeight: 600,
//               }}
//             >
//               <div>
//                 {user.name},{" "}
//                 {user.department?.name ? user.department.name : user.role}
//               </div>
//               <button
//                 onClick={handleLogout}
//                 style={{
//                   marginTop: 6,
//                   padding: "6px 14px",
//                   fontWeight: 600,
//                   borderRadius: 20,
//                   border: "none",
//                   backgroundColor: "#e74c3c",
//                   color: "white",
//                   cursor: "pointer",
//                   boxShadow: "0 3px 8px rgba(231,76,60,0.4)",
//                   transition: "background-color 0.3s ease",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 6,
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#c0392b")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#e74c3c")
//                 }
//                 title="Logout"
//               >
//                 <LogOut size={16} /> Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default HamburgerMenu;





import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Home, FolderKanban, FileText, ClipboardCheck, CheckSquare, CloudDownload, LogOut, Menu, User } from "lucide-react";

// Custom media query hook
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = (e) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

// Top spacing hook for page content
export const useNavbarHeight = () => {
  const [height, setHeight] = useState(72);
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  useEffect(() => {
    setHeight(isLargeScreen ? 72 : 0);
  }, [isLargeScreen]);

  return height;
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  const rawUser = sessionStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    sessionStorage.clear();
    history.push("");
    closeMenu();
  };

  const handleNavigation = (path) => {
    history.push(path);
    closeMenu();
  };

  // Mobile: Original hamburger menu (unchanged structure)
  if (!isLargeScreen) {
    return (
      <>
        {!isOpen && (
          <button
            style={{
              position: "fixed",
              top: 20,
              left: 20,
              zIndex: 9999,
              width: 48,
              height: 48,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              borderRadius: 12,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onClick={toggleMenu}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05) rotate(90deg)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(102, 126, 234, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(102, 126, 234, 0.3)";
            }}
          >
            <Menu size={20} color="white" />
          </button>
        )}

        {/* Backdrop */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(8px)",
            display: isOpen ? "block" : "none",
            zIndex: 998,
          }}
          onClick={closeMenu}
        />

        {/* Vertical Menu - SAME AS BEFORE */}
            <nav
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? 0 : -300,
          width: 280,
          height: "100vh",
          backgroundColor: "white",
          boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
          transition: "left 0.3s ease",
          zIndex: 1000,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: 20,
            backgroundColor: "#007bff",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0, fontSize: 18 }}>CalVant</h3>
          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: 24,
              cursor: "pointer",
              padding: 0,
              width: 30,
              height: 30,
            }}
            onClick={closeMenu}
            title="Close menu"
          >
            &times;
          </button>
        </div>

        {/* HOME */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "15px 20px",
    color: "#333",
    fontWeight: 500,
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    transition: "background-color 0.3s ease",
  }}
  onClick={() => handleNavigation("/")}
  onMouseEnter={(e) =>
    (e.currentTarget.style.backgroundColor = "#f8f9fa")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.backgroundColor = "transparent")
  }
>
  <Home size={18} style={{ flexShrink: 0 }} />
  <span>Home</span>
</div>


        <div style={{ padding: "5px 0", flexGrow: 1 }}>
          <div
            style={{
              display: "block",
              padding: "15px 20px",
              color: "#333",
              textDecoration: "none",
              fontWeight: 500,
              cursor: "pointer",
              borderBottom: "1px solid #eee",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => handleNavigation("/risk-assessment/")}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#f8f9fa")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            <FolderKanban  size={18} /> Risk Management
          </div>

          <div
            style={{
              display: "block",
              padding: "15px 20px",
              color: "#333",
              textDecoration: "none",
              fontWeight: 500,
              cursor: "pointer",
              borderBottom: "1px solid #eee",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => handleNavigation("/documentation")}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#f8f9fa")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            <FileText  size={18} /> Documentation
          </div>

          <div
            style={{
              display: "block",
              padding: "15px 20px",
              color: "#333",
              textDecoration: "none",
              fontWeight: 500,
              cursor: "pointer",
              borderBottom: "1px solid #eee",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => handleNavigation("/gap-assessment")}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#f8f9fa")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            <ClipboardCheck size={18} /> Gap Assessment
          </div>



          <div
            style={{
              display: "block",
              padding: "15px 20px",
              color: "#333",
              textDecoration: "none",
              fontWeight: 500,
              cursor: "pointer",
              borderBottom: "1px solid #eee",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => handleNavigation("/task-management")}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#f8f9fa")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            <CheckSquare  size={18} /> Task Management
          </div>

                      <div
            style={{
              display: "block",
              padding: "15px 20px",
              color: "#333",
              textDecoration: "none",
              fontWeight: 500,
              cursor: "pointer",
              // borderBottom: "1px solid #eee",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => handleNavigation("/integrations")}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#f8f9fa")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            <CloudDownload  size={18} /> Auto Evidence Collector
          </div>

          {user && (
            <div
              style={{
                // marginTop: 10,
                padding: "10px 20px",
                borderTop: "1px solid #eee",
                color: "#007bff",
                fontWeight: 600,
              }}
            >
              <div>
                {user.name},{" "}
                {user.department?.name ? user.department.name : user.role}
              </div>
              <button
                onClick={handleLogout}
                style={{
                  marginTop: 6,
                  padding: "6px 14px",
                  fontWeight: 600,
                  borderRadius: 20,
                  border: "none",
                  backgroundColor: "#e74c3c",
                  color: "white",
                  cursor: "pointer",
                  boxShadow: "0 3px 8px rgba(231,76,60,0.4)",
                  transition: "background-color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#c0392b")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e74c3c")
                }
                title="Logout"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      </>
    );
  }

  // Desktop: Horizontal Navigation WITH VISIBLE NAMES
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 72,
        background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "14px 22px",
    borderRadius: 18,
    background: "white",
  }}
>
  {/* Logo */}
  <img
    src="favicon.png"
    alt="CalVant Logo"
    style={{
      width: 42,
      height: 42,
      objectFit: "contain",
      borderRadius: 10,
      background: "white",
      padding: 6,
    }}
  />

  {/* Brand Name */}
  <span
    style={{
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: "0.5px",
      lineHeight: 1,
      display: "flex",
    }}
  >
    <span style={{ color: "#6b7280" }}>CAL</span>
    <span style={{ color: "#1e6091", marginLeft: 2 }}>VANT</span>
  </span>
</div>


      {/* Navigation Items - NAMES ALWAYS VISIBLE */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 8,
        maxWidth: "70%",
      }}>
        <HorizontalNavItem 
          icon={<Home size={20} />} 
          label="Home" 
          onClick={() => handleNavigation("/")} 
        />
        <HorizontalNavItem 
          icon={<FolderKanban size={20} />} 
          label="Risk Management" 
          onClick={() => handleNavigation("/risk-assessment/")} 
        />
        <HorizontalNavItem 
          icon={<FileText size={20} />} 
          label="Documentation" 
          onClick={() => handleNavigation("/documentation")} 
        />
        <HorizontalNavItem 
          icon={<ClipboardCheck size={20} />} 
          label="Gap Assessment" 
          onClick={() => handleNavigation("/gap-assessment")} 
        />
        <HorizontalNavItem 
          icon={<CheckSquare size={20} />} 
          label="Task Management" 
          onClick={() => handleNavigation("/task-management")} 
        />
        <HorizontalNavItem 
          icon={<CloudDownload size={20} />} 
          label="Auto Evidence Collector" 
          onClick={() => handleNavigation("/integrations")} 
        />
      </div>

      {/* User Profile */}
      {user && (
        <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 200 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <User size={20} color="white" />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b" }}>
                {user.name}
              </div>
              <div style={{ fontSize: 12, color: "#64748b" }}>
                {user.department?.name ? user.department.name : user.role}
              </div>
            </div>
          </div>
<button
  onClick={handleLogout}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#fee2e2"; // light red
    e.currentTarget.style.color = "#dc2626"; // danger red
    e.currentTarget.style.transform = "translateY(-1px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#374151"; // neutral gray
    e.currentTarget.style.transform = "translateY(0)";
  }}
  style={{
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 14px",
    borderRadius: 10,
    border: "none",
    background: "transparent",
    color: "#374151",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.25s ease",
  }}
>
  <LogOut size={18} />
  Logout
</button>

        </div>
      )}
    </nav>
  );
};

// FIXED Horizontal nav item - NAMES ALWAYS VISIBLE
// const HorizontalNavItem = ({ icon, label, onClick }) => (
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       gap: 10,
//       padding: "12px 20px",
//       cursor: "pointer",
//       borderRadius: 14,
//       transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//       whiteSpace: "nowrap",
//       fontSize: 14,
//       fontWeight: 500,
//     }}
//     onClick={onClick}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
//       e.currentTarget.style.transform = "translateY(-3px)";
//       e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.2)";
//       e.currentTarget.querySelector('.nav-icon').style.transform = "scale(1.1)";
//       e.currentTarget.querySelector('.nav-label').style.color = "#667eea";
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.background = "transparent";
//       e.currentTarget.style.transform = "translateY(0)";
//       e.currentTarget.style.boxShadow = "none";
//       e.currentTarget.querySelector('.nav-icon').style.transform = "scale(1)";
//       e.currentTarget.querySelector('.nav-label').style.color = "#475569";
//     }}
//   >
//     <span 
//       className="nav-icon"
//       style={{ 
//         color: "#667eea", 
//         transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//         flexShrink: 0,
//       }}
//     >
//       {icon}
//     </span>
//     <span 
//       className="nav-label"
//       style={{
//         color: "#475569",
//         transition: "color 0.3s ease",
//         fontWeight: 500,
//       }}
//     >
//       {label}
//     </span>
//   </div>
// );


const HorizontalNavItem = ({ icon, label, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 18px",
        borderRadius: 14,
        cursor: "pointer",
        background: hovered ? "rgba(102,126,234,0.12)" : "transparent",
        boxShadow: hovered
          ? "0 10px 30px rgba(102,126,234,0.25)"
          : "none",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        whiteSpace: "nowrap",
      }}
    >
      {/* Icon */}
      <span
        style={{
          color: "#667eea",
          display: "flex",
          alignItems: "center",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.15)" : "scale(1)",
        }}
      >
        {icon}
      </span>

      {/* Text label – appears smoothly */}
      <span
        style={{
          maxWidth: hovered ? 200 : 0,
          opacity: hovered ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.35s ease",
          color: "#334155",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        {label}
      </span>
    </div>
  );
};




// Mobile MenuItem component (same as before)
const MenuItem = ({ icon, label, onClick }) => (
  <div style={{
      display: "flex",
      alignItems: "center",
      padding: "16px 20px",
      marginBottom: 8,
      background: "rgba(255, 255, 255, 0.7)",
      borderRadius: 12,
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      border: "1px solid transparent",
    }}
    onClick={onClick}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
      e.currentTarget.style.transform = "translateX(8px)";
      e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
      e.currentTarget.style.boxShadow = "0 4px 20px rgba(102, 126, 234, 0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "rgba(255, 255, 255, 0.7)";
      e.currentTarget.style.transform = "translateX(0)";
      e.currentTarget.style.borderColor = "transparent";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <span style={{ marginRight: 16, color: "#667eea", minWidth: 20 }}>{icon}</span>
    <span style={{ fontWeight: 500, color: "#1e293b" }}>{label}</span>
  </div>
);

// Enhanced horizontal nav item with beautiful hover animation
// const HorizontalNavItem = ({ icon, label, onClick }) => {
//   const [showLabel, setShowLabel] = useState(false);

//   return (
//     <div
//       style={{
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         padding: "16px 20px",
//         cursor: "pointer",
//         borderRadius: 16,
//         transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//         margin: "0 2px",
//       }}
//       onClick={onClick}
//       onMouseEnter={(e) => {
//         setShowLabel(true);
//         e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
//         e.currentTarget.style.transform = "translateY(-4px)";
//         e.currentTarget.style.boxShadow = "0 12px 40px rgba(102, 126, 234, 0.2)";
//       }}
//       onMouseLeave={(e) => {
//         setShowLabel(false);
//         e.currentTarget.style.background = "transparent";
//         e.currentTarget.style.transform = "translateY(0)";
//         e.currentTarget.style.boxShadow = "none";
//       }}
//     >
//       {/* Icon - always visible */}
//       <span style={{ 
//         color: "#667eea", 
//         transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//         fontSize: 22,
//         filter: showLabel ? "brightness(1.2)" : "brightness(1)"
//       }}>
//         {icon}
//       </span>

//       {/* Animated Label */}
//       <span
//         style={{
//           position: "absolute",
//           left: "100%",
//           top: "50%",
//           transform: "translateX(12px) translateY(-50%) scale(0.95)",
//           opacity: 0,
//           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//           color: "white",
//           padding: "8px 16px",
//           borderRadius: 20,
//           fontSize: 13,
//           fontWeight: 600,
//           whiteSpace: "nowrap",
//           pointerEvents: "none",
//           transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//           boxShadow: "0 8px 32px rgba(102, 126, 234, 0.4)",
//           transformOrigin: "left center",
//         }}
//         className="nav-tooltip"
//       >
//         {label}
//       </span>
//     </div>
//   );
// };

export default HamburgerMenu;
