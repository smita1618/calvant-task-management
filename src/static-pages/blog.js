import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Menu,
  X,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Brain,
  Calendar,
  Tag,
  Search,
  ChevronRight,
  Download,
  Bell,
} from "lucide-react";
import "./blog.css";

const BlogPage = () => {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoggedIn] = useState(!!sessionStorage.getItem("user"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const blogPosts = [
    {
      id: 1,
      title: "ISO 27001 Gap Analysis Best Practices",
      category: "iso",
      date: "Jan 5, 2026",
      author: "Sarah Chen",
      avatar: "SC",
      readTime: "8 min",
      excerpt:
        "Learn how to conduct an effective gap analysis for ISO 27001 implementation and identify compliance gaps.",
      icon: BookOpen,
      featured: true,
      tags: ["ISO 27001", "Gap Analysis", "Compliance"],
    },
    {
      id: 2,
      title: "Risk Assessment Framework Guide",
      category: "risk",
      date: "Jan 3, 2026",
      author: "Michael Johnson",
      avatar: "MJ",
      readTime: "12 min",
      excerpt:
        "Step-by-step guide to implementing a comprehensive risk assessment process in your organization.",
      icon: TrendingUp,
      featured: true,
      tags: ["Risk Management", "Framework", "Assessment"],
    },
    {
      id: 3,
      title: "Data Protection Under GDPR & ISO 27701",
      category: "iso",
      date: "Dec 30, 2025",
      author: "Emma Wilson",
      avatar: "EW",
      readTime: "10 min",
      excerpt:
        "Understanding data protection obligations and how to implement them effectively in your systems.",
      icon: Shield,
      featured: false,
      tags: ["GDPR", "ISO 27701", "Data Protection"],
    },
    {
      id: 4,
      title: "Incident Response Planning 101",
      category: "security",
      date: "Dec 28, 2025",
      author: "James Rodriguez",
      avatar: "JR",
      readTime: "9 min",
      excerpt:
        "Create an effective incident response plan to minimize breach impact and ensure rapid recovery.",
      icon: Zap,
      featured: true,
      tags: ["Security", "Incident Response", "Planning"],
    },
    {
      id: 5,
      title: "Automation in Compliance Management",
      category: "tech",
      date: "Dec 25, 2025",
      author: "David Kumar",
      avatar: "DK",
      readTime: "11 min",
      excerpt:
        "How automation tools accelerate compliance workflows and reduce manual effort by 60%.",
      icon: Brain,
      featured: false,
      tags: ["Automation", "Technology", "Efficiency"],
    },
    {
      id: 6,
      title: "Employee Security Awareness Training",
      category: "training",
      date: "Dec 20, 2025",
      author: "Lisa Thompson",
      avatar: "LT",
      readTime: "7 min",
      excerpt:
        "Best practices for developing effective security awareness programs that engage employees.",
      icon: Users,
      featured: false,
      tags: ["Training", "Security Awareness", "Employee"],
    },
    {
      id: 7,
      title: "Zero Trust Architecture Implementation",
      category: "security",
      date: "Dec 15, 2025",
      author: "Robert Chen",
      avatar: "RC",
      readTime: "13 min",
      excerpt:
        "Deep dive into Zero Trust security model and step-by-step implementation strategy.",
      icon: Shield,
      featured: false,
      tags: ["Zero Trust", "Architecture", "Security"],
    },
    {
      id: 8,
      title: "Compliance Metrics That Matter",
      category: "iso",
      date: "Dec 10, 2025",
      author: "Amanda Foster",
      avatar: "AF",
      readTime: "10 min",
      excerpt:
        "Essential KPIs and metrics to track your compliance program's effectiveness.",
      icon: TrendingUp,
      featured: false,
      tags: ["Metrics", "KPI", "Performance"],
    },
  ];

  const categories = [
    { value: "all", label: "All Articles", count: 8 },
    { value: "iso", label: "ISO Frameworks", count: 3 },
    { value: "risk", label: "Risk Management", count: 1 },
    { value: "security", label: "Security", count: 3 },
    { value: "tech", label: "Technology", count: 1 },
    { value: "training", label: "Training", count: 1 },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className={`blog-page ${mounted ? "mounted" : ""}`}>
      {/* SEO */}
      <Helmet>
        <title>CalVant Blog - ISO, Risk Management & Security Insights</title>
        <meta
          name="description"
          content="Stay up-to-date with CalVant's expert blog on ISO 27001, ISO 27701, risk management, and cybersecurity best practices for enterprises."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://calvant.com/blog" />
      </Helmet>
      {/* HEADER */}
      <header className="blog-header">
        <div className="blog-header-content">
          <div className="blog-logo-section">
            <div className="blog-logo-icon">
              <img
                src="/favicon.png"
                alt="CalVant Logo"
                style={{ width: "70%", height: "70%", objectFit: "contain" }}
              />
            </div>
            <div>
              <h3 className="blog-logo-text">CalVant</h3>
              <p className="blog-logo-subtext">Blog & Insights</p>
            </div>
          </div>
          <nav className="blog-header-nav">
            <button
              className="blog-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {!mobileMenuOpen ? <Menu size={20} /> : <X size={20} />}
            </button>
            <ul
              className={`blog-nav-links ${
                mobileMenuOpen ? "mobile-open" : ""
              }`}
            >
              <li>
                <button className="blog-nav-link" onClick={scrollToTop}>
                  Home
                </button>
              </li>

              <a href="/about" className="blog-nav-link">
                About
              </a>

              <a href="/terms" className="blog-nav-link">
                Terms
              </a>

              {!isLoggedIn && (
                <li>
                  <a
                    href="/login"
                    className="blog-nav-link blog-nav-link-cta"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="blog-hero-section">
        <div className="blog-hero-content">
          <div className="blog-hero-badge">
            <BookOpen size={14} />
            <span>Knowledge Hub</span>
          </div>
          <h1 className="blog-hero-title">CalVant Blog</h1>
          <p className="blog-hero-subtitle">
            Expert insights on ISO 27001, compliance frameworks, risk
            management, and security best practices.
          </p>
        </div>
      </section>

      {/* SEARCH & CATEGORIES */}
      <section className="blog-search-section">
        <div className="blog-search-container">
          <div className="blog-search-wrapper">
            <Search size={18} className="blog-search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              className="blog-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="blog-categories-wrapper">
            <div className="blog-categories-scroll">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={`blog-category-btn ${
                    activeCategory === cat.value ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat.value)}
                >
                  <span>{cat.label}</span>
                  <span className="blog-category-count">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      {filteredPosts.length > 0 && (
        <section className="blog-featured-section">
          <div className="blog-section-header">
            <h2 className="blog-section-title">Featured Articles</h2>
            <p className="blog-section-subtitle">
              Most read and impactful content from our experts
            </p>
          </div>
          <div className="blog-featured-grid">
            {featuredPosts.slice(0, 3).map((post) => {
              const IconComponent = post.icon;
              return (
                <article key={post.id} className="blog-featured-card">
                  <div className="blog-featured-icon">
                    <IconComponent size={28} />
                  </div>
                  <div className="blog-featured-badge">{post.category}</div>
                  <h3 className="blog-featured-title">{post.title}</h3>
                  <p className="blog-featured-excerpt">{post.excerpt}</p>
                  <div className="blog-featured-meta">
                    <span className="blog-featured-date">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="blog-featured-time">
                      {post.readTime} read
                    </span>
                  </div>
                  <a href="#" className="blog-featured-link">
                    Read Article <ChevronRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* MAIN BLOG GRID */}
      <section className="blog-posts-section">
        <div className="blog-posts-header">
          <h2 className="blog-posts-title">All Articles</h2>
          <p className="blog-posts-subtitle">
            {filteredPosts.length} articles found
          </p>
        </div>
        {filteredPosts.length > 0 ? (
          <div className="blog-posts-grid">
            {filteredPosts.map((post) => {
              const IconComponent = post.icon;
              return (
                <article key={post.id} className="blog-post-card">
                  <div className="blog-post-header">
                    <div className="blog-post-icon">
                      <IconComponent size={20} />
                    </div>
                    <span className="blog-post-category">{post.category}</span>
                  </div>
                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-post-excerpt">{post.excerpt}</p>

                  <div className="blog-post-tags">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="blog-post-tag">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>

                  <div className="blog-post-footer">
                    <div className="blog-post-author">
                      <div className="blog-post-avatar">{post.avatar}</div>
                      <div>
                        <div className="blog-post-author-name">
                          {post.author}
                        </div>
                        <div className="blog-post-date">{post.date}</div>
                      </div>
                    </div>
                    <span className="blog-post-time">{post.readTime}</span>
                  </div>

                  <a href="#" className="blog-post-read-more">
                    Read More <ArrowRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="blog-no-results">
            <Search size={40} />
            <p>No articles found matching your search.</p>
          </div>
        )}
      </section>

      {/* RESOURCES SECTION */}
      <section className="blog-resources-section">
        <div className="blog-section-header">
          <h2 className="blog-section-title">Free Resources</h2>
          <p className="blog-section-subtitle">
            Download guides, templates, and tools to accelerate your compliance
            journey
          </p>
        </div>
        <div className="blog-resources-grid">
          <div className="blog-resource-card">
            <div className="blog-resource-icon">
              <BookOpen size={32} />
            </div>
            <h3>ISO 27001 Handbook</h3>
            <p>
              Comprehensive guide covering all 114 controls with implementation
              strategies.
            </p>
            <a href="#" className="blog-resource-link">
              <Download size={14} />
              Download PDF
            </a>
          </div>
          <div className="blog-resource-card">
            <div className="blog-resource-icon">
              <Shield size={32} />
            </div>
            <h3>Compliance Checklist</h3>
            <p>
              Ready-to-use checklist for ISO 27001 implementation and audit
              preparation.
            </p>
            <a href="#" className="blog-resource-link">
              <Download size={14} />
              Download
            </a>
          </div>
          <div className="blog-resource-card">
            <div className="blog-resource-icon">
              <TrendingUp size={32} />
            </div>
            <h3>Risk Assessment Template</h3>
            <p>
              Professional template for conducting comprehensive risk
              assessments.
            </p>
            <a href="#" className="blog-resource-link">
              <Download size={14} />
              Download
            </a>
          </div>
          <div className="blog-resource-card">
            <div className="blog-resource-icon">
              <Brain size={32} />
            </div>
            <h3>Policy Framework</h3>
            <p>Customizable security policy templates for your organization.</p>
            <a href="#" className="blog-resource-link">
              <Download size={14} />
              Download
            </a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="blog-newsletter-section">
        <div className="blog-newsletter-content">
          <div className="blog-newsletter-icon">
            <Bell size={28} />
          </div>
          <h2>Stay Updated</h2>
          <p>
            Get the latest compliance insights, security tips, and industry
            updates delivered weekly.
          </p>
          <form
            className="blog-newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="blog-newsletter-input"
              required
            />
            <button type="submit" className="blog-newsletter-btn">
              Subscribe
            </button>
          </form>
          <p className="blog-newsletter-note">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta-section">
        <div className="blog-cta-content  " style={{ color: "#ffffff" }}>
          <h2 className="blog-cta-title">Need Expert Guidance?</h2>
          <p className="blog-cta-subtitle">
            Schedule a free consultation with our compliance experts to discuss
            your organization's needs.
          </p>
          <div className="blog-cta-buttons">
            {!isLoggedIn && (
              <a href="/demo" className="blog-cta-primary">
                Book Consultation
                <ArrowRight size={16} />
              </a>
            )}
            <a href="/about" className="blog-cta-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="blog-footer">
        <div className="blog-footer-content">
          <div className="blog-footer-section">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="/iso-27001">ISO 27001</a>
              </li>
              <li>
                <a href="/iso-27701">ISO 27701</a>
              </li>
              <li>
                <a href="/risk-management">Risk Management</a>
              </li>
              <li>
                <a href="/documentation">Documentation</a>
              </li>
            </ul>
          </div>
          <div className="blog-footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="blog-footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/security">Security</a>
              </li>
            </ul>
          </div>
          <div className="blog-footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="mailto:support@calvant.com">support@calvant.com</a>
              </li>
              <li>
                <a href="tel:+918800000000">+91 8800 000 000</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blog-footer-bottom">
          © {new Date().getFullYear()} CalVant. All rights reserved. Made in
          India 🇮🇳
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
