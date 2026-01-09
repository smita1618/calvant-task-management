import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./loginPage.css";
import HamburgerMenu from "../../../components/navigations/HamburgerMenu";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");

  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    title: "",
    message: "",
  });

  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const history = useHistory();

  const openInfoModal = (title, message) => {
    setInfoModal({ isOpen: true, title, message });
  };

  const closeInfoModal = () => {
    setInfoModal({ ...infoModal, isOpen: false });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !region) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SP}/user-service/api/users/login`
,
        { email, password, region }
      );

      if (res.data.token) sessionStorage.setItem("token", res.data.token);
      const { token, ...user } = res.data;
      if (user) sessionStorage.setItem("user", JSON.stringify(user));

      history.push("/");
    } catch (err) {
      sessionStorage.clear();
      setError(err.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword((prev) => !prev);
    setOtpSent(false);
    setForgotEmail("");
    setOtp("");
  };

  const sendOtp = async () => {
    if (!forgotEmail) {
      openInfoModal("Error", "Please enter your email address.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
       `${process.env.REACT_APP_CFTB}/api/users/forgot-password`,
        { email: forgotEmail },
        { withCredentials: true }
      );
      setOtpSent(true);
      openInfoModal("Success", "OTP sent to your email.");
    } catch (err) {
      openInfoModal(
        "Error",
        err.response?.data?.error || "Failed to send OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      openInfoModal("Error", "Please enter the OTP.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        `${process.env.REACT_APP_CFTB}/api/users/verify-otp`,
        { email: forgotEmail, otp },
        { withCredentials: true }
      );
      openInfoModal("Success", "OTP verified. Redirecting...");
      setTimeout(() => {
        history.push(
          "/change-password?email=" + encodeURIComponent(forgotEmail)
        );
      }, 1500);
    } catch (err) {
      openInfoModal(
        "Error",
        err.response?.data?.error || "Invalid OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* PERFECT HEADER - EXACT DemoPage style */}
      <header className="login-header">
        <div className="login-logo">CalVant</div>
        <nav className="login-nav">
          <button onClick={() => history.push("/")} className="login-nav-link">
            Home
          </button>
          <button onClick={() => history.push("/demo")} className="login-nav-link-demo">
            Schedule Demo
          </button>
        </nav>
      </header>

      <main className="login-main">
        {/* LEFT - LOGIN FORM WITH ORBIT */}
        <section className="login-left">
          <div className="login-left-inner">
            <div className="login-pulse-icon" />
            
            <div className="login-content">
              <h1 className="login-title">Welcome back!</h1>
              <p className="login-subtitle">
                Sign in with your work email to access CalVant risk, compliance,
                and documentation tools.
              </p>

              {error && <div className="login-error">{error}</div>}

              <form className="login-form" onSubmit={handleLogin}>
                <div className="login-field-group">
                  <label className="login-label">
                    Work email <span>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    autoComplete="username"
                    className="login-input"
                  />
                </div>

                <div className="login-field-group">
                  <label className="login-label">
                    Region <span>*</span>
                  </label>
                  <input
                    type="text"
                    list="region-list"
                    placeholder="Select or type your region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    required
                    disabled={loading}
                    className="login-input"
                  />
                </div>

                <datalist id="region-list">
                  <option value="India" />
                  <option value="EU" />
                  <option value="US" />
                </datalist>

                <div className="login-field-group">
                  <label className="login-label">
                    Password <span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    autoComplete="current-password"
                    className="login-input"
                  />
                </div>

                <div className="login-remember-row">

                  <button
                    type="button"
                    className="login-forgot-btn"
                    onClick={handleForgotPasswordClick}
                    disabled={loading}
                  >
                    {showForgotPassword ? "Hide reset options" : "Forgot password?"}
                  </button>
                </div>

                <button type="submit" className="login-submit" disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </form>

              {showForgotPassword && (
                <div className="login-forgot-block">
                  {!otpSent ? (
                    <>
                      <input
                        type="email"
                        placeholder="Enter your work email"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        disabled={loading}
                        className="login-input"
                      />
                      <button onClick={sendOtp} disabled={loading} className="login-otp-btn">
                        Send OTP
                      </button>
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        disabled={loading}
                        className="login-input"
                      />
                      <button onClick={verifyOtp} disabled={loading} className="login-otp-btn">
                        Verify OTP
                      </button>
                    </>
                  )}
                </div>
              )}

              {/* ✅ YOUR ORIGINAL SIGNUP PROMPT */}
              <div className="login-signup-row">
                <span>New to CalVant?</span>
                <button 
                  type="button" 
                  className="login-signup-btn"
                  onClick={() =>   openInfoModal(
      "Account Creation Disabled",
      "Account creation is managed by your organization. Please contact your system administrator or IT team to get access to CalVant."
    )
  }
>
                  Create account
                </button>
              </div>

              {/* ✅ YOUR ORIGINAL FOOTER LINKS */}
              <div className="login-footer-links">
                <button className="login-footer-link">Terms of Service</button>
                <span className="login-footer-separator">|</span>
                <button className="login-footer-link">Privacy Policy</button>
                <span className="login-footer-separator">|</span>
                <button className="login-footer-link">Contact</button>
              </div>

              {/* ✅ YOUR ORIGINAL COPYRIGHT */}
              <div className="login-footer-copy">
                © CalVant 2025. All Rights Reserved.
              </div>
            </div>
          </div>

          {/* LEFT ORBIT EFFECT */}
          <div className="login-orbit-left">
            <div className="login-orbit-sphere" />
            <div className="login-orbit-ring" />
          </div>
        </section>

        {/* RIGHT - MARKETING WITH ORBIT */}
        <section className="login-right">
          <div className="login-right-inner">
            <div className="login-badge">#1 Compliance Automation Tool</div>
            <h2 className="login-right-title">Stay one step ahead of risk.</h2>
            <p className="login-right-text">
              CalVant helps security and compliance teams monitor risk in
              real-time, automate checks, and keep every audit-ready report in
              one secure place.
            </p>

            <div className="login-features">
              <div className="login-feature">
                <span className="login-feature-label">Continuous</span>
                <span className="login-feature-title">Risk monitoring</span>
                <p>Track vulnerabilities across your organization.</p>
              </div>
              <div className="login-feature">
                <span className="login-feature-label">Automated</span>
                <span className="login-feature-title">Compliance checks</span>
                <p>Generate audit evidence in just a few clicks.</p>
              </div>
              <div className="login-feature">
                <span className="login-feature-label">Real-time</span>
                <span className="login-feature-title">Threat detection</span>
                <p>Get notified before incidents impact business.</p>
              </div>
              <div className="login-feature">
                <span className="login-feature-label">Team</span>
                <span className="login-feature-title">Collaboration</span>
                <p>Assign owners and close gaps faster.</p>
              </div>
            </div>

            <div className="login-trust">Trusted by security teams worldwide.</div>
          </div>

          {/* RIGHT ORBIT EFFECT */}
          <div className="login-orbit-right">
            <div className="login-orbit-sphere-right" />
            <div className="login-orbit-ring-right" />
          </div>
        </section>
      </main>

      {/* INFO MODAL */}
      {infoModal.isOpen && (
        <div className="login-modal-backdrop">
          <div className="login-modal">
            <h3 className="login-modal-title">{infoModal.title}</h3>
            <p className="login-modal-message">{infoModal.message}</p>
            <button className="login-modal-btn" onClick={closeInfoModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

