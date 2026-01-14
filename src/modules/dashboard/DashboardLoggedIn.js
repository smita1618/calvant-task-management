import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { 
  BarChart3, ClipboardCheck, FileText, CheckSquare, ShieldCheck,
  User, ChevronDown, Settings, Key, LogOut, Users
} from "lucide-react";
import Joyride, { STATUS, ACTIONS, EVENTS } from "react-joyride";
import "./Dashboard.css";

const DashboardLoggedIn = () => {
  const history = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [run, setRun] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);

  const user = JSON.parse(sessionStorage.getItem("user")) || {
    name: "Arghya Bandopadhyay",
    department: { name: "Finance" },
    email: "arghya@calvant.com"
  };

  const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);

  // Mock data
  const stats = {
    risk: { total: 24, low: 8, medium: 10, high: 5, open: 16 },
    gap: { total: 156, closed: 89, open: 67 },
    doc: { total: 42, uploaded: 28, pending: 14 },
    task: { total: 35, myTasks: 12, completed: 22 }
  };

  const steps = [
    { target: "#navbar-profile", content: "Your profile & settings" },
    { target: "#risk-module", content: "Manage department risks" },
    { target: "#gap-module", content: "Track gap assessments" },
    { target: "#doc-module", content: "Upload documents" },
    { target: "#task-module", content: "Complete tasks" }
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const handleMenuClick = (path) => {
    setDropdownOpen(false);
    if (path) history.push(path);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    history.push("/");
  };

  if (loading) {
    return (
      <div style={{ 
        background: '#f8fafc', 
        minHeight: '100vh', 
        padding: '120px 24px', 
        textAlign: 'center' 
      }}>
        <div style={{ 
          fontSize: '18px', 
          color: '#64748b',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '12px',
          marginBottom: '16px'
        }}>
          <div style={{ 
            width: '24px', 
            height: '24px', 
            border: '2px solid #e2e8f0', 
            borderTop: '2px solid #3498db', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite' 
          }} />
          Loading dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container" style={{ 
      background: '#f8fafc', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      
      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* NAVBAR - LOGGED IN VERSION */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <nav className="dashboard-navbar" style={{
        background: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '0 24px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #e2e8f0'
      }}>
        
        {/* LEFT: Logo + Name */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '18px',
          color: '#1e293b'
        }} 
        onClick={() => history.push('/')}
        id="navbar-logo"
        >
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #3498db, #2980b9)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '14px'
          }}>
            CV
          </div>
          CalVant
        </div>

        {/* RIGHT: Profile Avatar + Dropdown */}
        <div className="profile-dropdown" ref={dropdownRef} id="navbar-profile">
          <div 
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {initials}
          </div>

          {dropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '50px',
              right: 0,
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              border: '1px solid #e2e8f0',
              minWidth: '220px',
              zIndex: 2000,
              animation: 'slideDown 0.2s ease-out'
            }}>
              {/* User Info */}
              <div style={{
                padding: '16px 20px 12px',
                borderBottom: '1px solid #f1f5f9'
              }}>
                <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '15px' }}>
                  {user.name}
                </div>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
                  {user.email}
                </div>
              </div>

              {/* Menu Items */}
              <div style={{ padding: '8px 0' }}>
                <div className="dropdown-item" onClick={() => handleMenuClick('/framework')}>
                  <Users size={18} className="dropdown-icon" />
                  <span>Framework</span>
                </div>
                <div className="dropdown-item" onClick={() => handleMenuClick('/templates')}>
                  <FileText size={18} className="dropdown-icon" />
                  <span>Templates</span>
                </div>
                <div className="dropdown-item" onClick={() => handleMenuClick('/profile')}>
                  <Settings size={18} className="dropdown-icon" />
                  <span>Profile</span>
                </div>
                <div className="dropdown-item" onClick={() => handleMenuClick('/change-password')}>
                  <Key size={18} className="dropdown-icon" />
                  <span>Change Password</span>
                </div>
                <hr style={{ margin: '8px 0', border: 'none', height: '1px', background: '#f1f5f9' }} />
                <div className="dropdown-item" onClick={handleLogout} style={{ color: '#ef4444' }}>
                  <LogOut size={18} className="dropdown-icon" />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* WELCOME + 2x2 MODULES */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <main style={{ padding: '40px 24px 80px', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Welcome Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 12px 0',
            lineHeight: '1.2'
          }}>
            Welcome back, {user.name.split(' ')[0]}
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Quick overview of your compliance activities across all CalVant modules
          </p>
        </div>

        {/* 2x2 MODULE GRID - PERFECTLY RESPONSIVE */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          
          {/* RISK MANAGEMENT */}
          <div 
            className="module-card"
            id="risk-module"
            onClick={() => history.push('/risk-assessment')}
            style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '32px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '5px solid #3498db'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(52,152,219,0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(52,152,219,0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <BarChart3 size={24} color="#3498db" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>
                  Risk Management
                </h3>
                <div style={{ fontSize: '13px', color: '#9ca3af' }}>
                  {user.department.name} Department
                </div>
              </div>
            </div>
            <div style={{ fontSize: '40px', fontWeight: '700', color: '#1e293b', margin: '12px 0' }}>
              {stats.risk.total}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
              fontSize: '14px',
              color: '#64748b'
            }}>
              <div>{stats.risk.low} Low</div>
              <div>{stats.risk.medium} Medium</div>
              <div style={{ color: '#ef4444' }}>{stats.risk.high} High</div>
              <div>{stats.risk.open} Open</div>
            </div>
          </div>

          {/* GAP ASSESSMENT */}
          <div 
            className="module-card"
            id="gap-module"
            onClick={() => history.push('/gap-assessment')}
            style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '32px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '5px solid #27ae60'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(46,204,113,0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(46,204,113,0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ClipboardCheck size={24} color="#27ae60" />
              </div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>
                Gap Assessment
              </h3>
            </div>
            <div style={{ fontSize: '40px', fontWeight: '700', color: '#1e293b', margin: '12px 0' }}>
              {stats.gap.total}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
              fontSize: '14px',
              color: '#64748b'
            }}>
              <div style={{ color: '#10b981' }}>{stats.gap.closed} Assessed</div>
              <div style={{ color: '#ef4444' }}>{stats.gap.open} Left</div>
            </div>
          </div>

          {/* DOCUMENTATION */}
          <div 
            className="module-card"
            id="doc-module"
            onClick={() => history.push('/documentation')}
            style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '32px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '5px solid #8b5cf6'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(139,92,246,0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(139,92,246,0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FileText size={24} color="#8b5cf6" />
              </div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>
                Documentation
              </h3>
            </div>
            <div style={{ fontSize: '40px', fontWeight: '700', color: '#1e293b', margin: '12px 0' }}>
              {stats.doc.total}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
              fontSize: '14px',
              color: '#64748b'
            }}>
              <div style={{ color: '#10b981' }}>{stats.doc.uploaded} Uploaded</div>
              <div style={{ color: '#ef4444' }}>{stats.doc.pending} Pending</div>
            </div>
          </div>

          {/* TASK MANAGEMENT */}
          <div 
            className="module-card"
            id="task-module"
            onClick={() => history.push('/task-management')}
            style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '32px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '5px solid #f59e0b'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(245,158,11,0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(245,158,11,0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CheckSquare size={24} color="#f59e0b" />
              </div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>
                Task Management
              </h3>
            </div>
            <div style={{ fontSize: '40px', fontWeight: '700', color: '#1e293b', margin: '12px 0' }}>
              {stats.task.myTasks}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
              fontSize: '14px',
              color: '#64748b'
            }}>
              <div>{stats.task.total} Total</div>
              <div style={{ color: '#10b981' }}>{stats.task.completed} Done</div>
            </div>
          </div>
        </div>

        {/* TOUR BUTTON */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <button
            onClick={() => {
              setRun(false);
              setTimeout(() => setRun(true), 100);
            }}
            style={{
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(52,152,219,0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            👋 Take Quick Tour
          </button>
        </div>

      </main>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FOOTER - Full Info (Sprinto Style) */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <footer style={{
        background: 'white',
        borderTop: '1px solid #e2e8f0',
        padding: '48px 24px 24px',
        marginTop: 'auto'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px'
        }}>
          <div>
            <h4 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              fontSize: '18px',
              fontWeight: '600',
              color: '#1e293b'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #3498db, #2980b9)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
                fontWeight: '700'
              }}>CV</div>
              CalVant
            </h4>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '14px' }}>
              Comprehensive compliance platform built for ISO 27001. 
              Manage risks, gaps, documentation, and tasks in one place.
            </p>
          </div>
          
          <div>
            <h5 style={{ marginBottom: '16px', fontWeight: '600', color: '#1e293b' }}>Product</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><a href="/risk-assessment" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Risk Management</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/gap-assessment" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Gap Assessment</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/documentation" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Documentation</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/iso-27001" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>ISO 27001</a></li>
            </ul>
          </div>
          
          <div>
            <h5 style={{ marginBottom: '16px', fontWeight: '600', color: '#1e293b' }}>Tasks</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><a href="/task-management" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>My Tasks</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/task-management/departmenttasks" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Team Tasks</a></li>
            </ul>
          </div>
          
          <div>
            <h5 style={{ marginBottom: '16px', fontWeight: '600', color: '#1e293b' }}>Company</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}><a href="/about" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>About</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/privacy" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Privacy</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/terms" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Terms</a></li>
              <li style={{ marginBottom: '8px' }}><a href="/support" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px' }}>Support</a></li>
            </ul>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: '24px',
          marginTop: '32px',
          textAlign: 'center',
          color: '#9ca3af',
          fontSize: '14px'
        }}>
          © 2026 CalVant. All rights reserved. | Built for ISO 27001 Compliance
        </div>
      </footer>

      <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        scrollToFirstStep
        styles={{
          options: {
            primaryColor: "#3498db",
            zIndex: 10000,
          },
        }}
        callback={(data) => {
          const { status } = data;
          const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
          if (finishedStatuses.includes(status)) {
            setRun(false);
          }
        }}
        scrollToFirstStep
        showProgress
        showSkipButton
      />

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .module-card:hover {
          transform: translateY(-4px) !important;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          cursor: pointer;
          font-size: 14px;
          transition: background 0.2s ease;
        }
        .dropdown-item:hover {
          background: #f8fafc;
          color: #1e293b;
        }
        .dropdown-icon {
          color: #9ca3af;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .dashboard-navbar {
            padding: 0 16px !important;
          }
          .dashboard-container main {
            padding: 24px 16px 60px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardLoggedIn;
