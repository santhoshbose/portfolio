import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ====== CENTRALIZED DATA STORE (Your Professional Profile) ======
const portfolioData = {
  profile: {
    name: "Santhosh B.",
    role: "Aspiring AI/ML Engineer | Computer Science Engineering Student",
    college: "RVS College of Engineering and Technology, Coimbatore",
    bio: "First-year Computer Science and Engineering student building a career in AI and data-driven roles. Hands-on experience with Python and Pandas through self-built projects, with a strong, curiosity-driven approach to learning. Currently strengthening foundations in SQL and Data Structures & Algorithms.",
    resumeUrl: "#", // Add your local public/resume.pdf link here
    email: "santhoshbose012@gmail.com"
  },
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/santhosh-bose-1918b0382" },
    { name: "GitHub", url: "https://github.com/santhoshbose" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Twitter", url: "https://twitter.com" }
  ],
  codingProfiles: [
    { platform: "LeetCode", url: "https://leetcode.com" },
    { platform: "CodeChef", url: "https://codechef.com" }
  ],
  skills: ["Python", "C", "Pandas", "NumPy", "SQL (Basics)", "Data Structures & Algorithms", "Statistics", "Git & GitHub", "VS Code"],
  projects: [
    {
      title: "Personal Expense Tracker",
      desc: "Developed a Python-based Expense Tracker that collects, cleans, and analyzes expense data using Pandas. Implemented data cleaning techniques for handling missing values and generated spending insights through category-wise analysis and summary statistics.",
      tags: ["Python", "Pandas", "CSV Handling"],
      github: "https://github.com/santhoshbose/expense-tracker-python",
      live: "#"
    },
    {
      title: "Student Data Cleaning & Analysis",
      desc: "Cleaned and analyzed a student dataset using Python and Pandas, handling missing values and inconsistencies. Prepared raw data into a structured, analysis-ready format, applying core data-cleaning techniques.",
      tags: ["Python", "Pandas", "Data Cleaning"],
      github: "https://github.com/santhoshbose/student_data_cleaning_project",
      live: "#"
    }
  ],
  articles: [
    {
      title: "Introduction to Python — SoloLearn",
      summary: "Foundational validation course covering syntax baselines, core programmatic control flows, and object handling logic structures.",
      link: "#"
    },
    {
      title: "Python 101 for Data Science — IBM",
      summary: "Verified data analysis and script architecture baseline certification completed through Cognitive Class / Coursera.",
      link: "https://cognitiveclass.ai"
    }
  ]
};

// ====== PAGE TRANSITION VARIANTS ======
const pageVariants = {
  initial: { opacity: 0, x: "-100vw", scale: 0.95 },
  in: { opacity: 1, x: 0, scale: 1 },
  out: { opacity: 0, x: "100vw", scale: 1.05 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
};

// ====== MAIN CONTAINER APP ======
export default function App() {
  const [activeTab, setActiveTab] = useState('About');

  const tabs = ['About', 'Skills', 'Projects', 'Articles & Stats', 'Contact'];

  return (
    <div className="portfolio-app" style={styles.appContainer}>
      
      {/* GLOWING AMBIENT BACKGROUND GRADIENTS */}
      <div style={styles.glowBlob1}></div>
      <div style={styles.glowBlob2}></div>

      {/* FIXED NAVIGATION HUB */}
      <nav style={styles.navbar}>
        <div style={styles.logoGrid}>
          <span style={styles.logoText}>{portfolioData.profile.name}</span>
        </div>
        <div style={styles.navLinks}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.navBtn,
                color: activeTab === tab ? '#00e5ff' : '#9ca3af',
                borderBottom: activeTab === tab ? '2px solid #00e5ff' : '2px solid transparent'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* SEAMLESS ANIMATED PANELS CONTAINER */}
      <main style={styles.mainContent}>
        <AnimatePresence mode="wait">
          
          {/* ABOUT PANEL */}
          {activeTab === 'About' && (
            <motion.section
              key="about" initial="initial" animate="in" exit="out"
              variants={pageVariants} transition={pageTransition}
              style={styles.panel}
            >
              <h1 style={styles.h1}>Hi, I'm <span style={styles.accentText}>{portfolioData.profile.name}</span></h1>
              <h2 style={styles.h2}>{portfolioData.profile.role}</h2>
              <p style={styles.subtext}>{portfolioData.profile.college}</p>
              <p style={styles.bodyText}>{portfolioData.profile.bio}</p>
              
              <div style={styles.ctaGroup}>
                <a href={portfolioData.profile.resumeUrl} download style={styles.primaryBtn}>Downloadable Resume</a>
                <button onClick={() => setActiveTab('Contact')} style={styles.secondaryBtn}>Get In Touch</button>
              </div>
            </motion.section>
          )}

          {/* SKILLS PANEL */}
          {activeTab === 'Skills' && (
            <motion.section
              key="skills" initial="initial" animate="in" exit="out"
              variants={pageVariants} transition={pageTransition}
              style={styles.panel}
            >
              <h2 style={styles.h2}>Core Tech Matrix</h2>
              <p style={styles.bodyText}>Staggered development capabilities across programming languages and data ecosystems:</p>
              <div style={styles.skillsGrid}>
                {portfolioData.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    style={styles.skillCard}
                    whileHover={{ scale: 1.05, borderColor: '#00e5ff' }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* PROJECTS PANEL */}
          {activeTab === 'Projects' && (
            <motion.section
              key="projects" initial="initial" animate="in" exit="out"
              variants={pageVariants} transition={pageTransition}
              style={styles.panel}
            >
              <h2 style={styles.h2}>Featured Works</h2>
              <p style={styles.bodyText}>Click the card to open live instance execution panels or explore the architecture repo:</p>
              <div style={styles.projectGrid}>
                {portfolioData.projects.map(proj => (
                  <motion.div
                    key={proj.title}
                    style={styles.projectCard}
                    whileHover={{ y: -6, borderColor: '#00e5ff' }}
                    onClick={() => window.open(proj.live, '_blank')}
                  >
                    <div>
                      <h3 style={styles.projTitle}>{proj.title}</h3>
                      <p style={styles.projDesc}>{proj.desc}</p>
                      <div style={styles.tagWrap}>
                        {proj.tags.map(t => <span key={t} style={styles.tagBadge}>{t}</span>)}
                      </div>
                    </div>
                    <div style={styles.cardLinks}>
                      <span style={styles.actionText}>Launch &rarr;</span>
                      <a href={proj.github} target="_blank" rel="noreferrer" style={styles.gitBtn} onClick={(e) => e.stopPropagation()}>Code Repository</a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ARTICLES & STATS HUB */}
          {(activeTab === 'Articles' || activeTab === 'Articles & Stats') && (
            <motion.section
              key="stats" initial="initial" animate="in" exit="out"
              variants={pageVariants} transition={pageTransition}
              style={styles.panel}
            >
              <h2 style={styles.h2}>Coding Profiles & Insights</h2>
              <div style={styles.statsGrid}>
                {portfolioData.codingProfiles.map(p => (
                  <a href={p.url} target="_blank" rel="noreferrer" key={p.platform} style={styles.statCard}>
                    <h3>{p.platform}</h3>
                    <p style={{color: '#00e5ff'}}>View Metrics &rarr;</p>
                  </a>
                ))}
              </div>
              <h2 style={{ ...styles.h2, marginTop: '40px' }}>Featuring Articles & Certifications</h2>
              {portfolioData.articles.map(art => (
                <div key={art.title} style={styles.articleItem}>
                  <h3>{art.title}</h3>
                  <p style={styles.projDesc}>{art.summary}</p>
                  <a href={art.link} target="_blank" rel="noreferrer" style={styles.actionText}>Read Publication &rarr;</a>
                </div>
              ))}
            </motion.section>
          )}

          {/* CONTACT & MAIL GATEWAY */}
          {activeTab === 'Contact' && (
            <motion.section
              key="contact" initial="initial" animate="in" exit="out"
              variants={pageVariants} transition={pageTransition}
              style={styles.panel}
            >
              <h2 style={styles.h2}>Ability to Mail Me</h2>
              <p style={styles.bodyText}>Have an opportunity or backend project pipeline to discuss? Drop a communication trigger:</p>
              <div style={styles.contactContainer}>
                <a href={`mailto:${portfolioData.profile.email}`} style={styles.mailCtaButton}>
                  Launch Secure Mail Client ({portfolioData.profile.email})
                </a>
                <div style={styles.socialGrid}>
                  {portfolioData.socials.map(soc => (
                    <a key={soc.name} href={soc.url} target="_blank" rel="noreferrer" style={styles.socLink}>
                      {soc.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}

// ====== INLINE EMULATOR DESIGN ARCHITECTURE (Dark Modern Aesthetic) ======
const styles = {
  appContainer: {
    backgroundColor: '#0b0c10',
    color: '#f3f4f6',
    minHeight: '100vh',
    width: '100vw',
    overflowX: 'hidden',
    position: 'relative',
    padding: '0 20px'
  },
  glowBlob1: {
    position: 'absolute',
    width: '350px',
    height: '350px',
    top: '10%',
    left: '5%',
    background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none',
    zIndex: 0
  },
  glowBlob2: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    bottom: '15%',
    right: '5%',
    background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none',
    zIndex: 0
  },
  navbar: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #1f2833',
    position: 'relative',
    zIndex: 10
  },
  logoText: {
    fontSize: '1.4rem',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    color: '#00e5ff'
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
    overflowX: 'auto'
  },
  navBtn: {
    background: 'transparent',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease'
  },
  mainContent: {
    maxWidth: '800px',
    margin: '60px auto',
    position: 'relative',
    zIndex: 5
  },
  panel: {
    width: '100%'
  },
  h1: {
    fontSize: '3.2rem',
    fontWeight: '800',
    marginBottom: '10px',
    letterSpacing: '-0.04em'
  },
  h2: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#f3f4f6'
  },
  subtext: {
    fontSize: '1.1rem',
    color: '#9ca3af',
    marginBottom: '30px'
  },
  bodyText: {
    color: '#9ca3af',
    fontSize: '1.05rem',
    maxWidth: '650px',
    marginBottom: '40px',
    lineHeight: '1.7'
  },
  accentText: {
    color: '#00e5ff'
  },
  ctaGroup: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    background: '#00e5ff',
    color: '#0b0c10',
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '700',
    boxShadow: '0 4px 14px rgba(0, 229, 255, 0.3)',
    transition: 'transform 0.2s ease'
  },
  secondaryBtn: {
    background: 'transparent',
    color: '#f3f4f6',
    border: '1px solid #1f2833',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s ease'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
    gap: '15px'
  },
  skillCard: {
    background: '#161820',
    padding: '16px',
    borderRadius: '10px',
    textAlign: 'center',
    fontWeight: '600',
    border: '1px solid #1f2833',
    cursor: 'default'
  },
  projectGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  projectCard: {
    background: '#161820',
    padding: '28px',
    borderRadius: '12px',
    border: '1px solid #1f2833',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease'
  },
  projTitle: {
    fontSize: '1.4rem',
    marginBottom: '10px'
  },
  projDesc: {
    color: '#9ca3af',
    fontSize: '0.95rem',
    marginBottom: '20px',
    lineHeight: '1.6'
  },
  tagWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '25px'
  },
  tagBadge: {
    background: '#1f2330',
    color: '#00e5ff',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  cardLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actionText: {
    color: '#00e5ff',
    fontWeight: '700'
  },
  gitBtn: {
    background: '#1f2330',
    color: '#f3f4f6',
    textDecoration: 'none',
    padding: '6px 14px',
    borderRadius: '6px',
    fontSize: '0.88rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '40px'
  },
  statCard: {
    background: '#161820',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #1f2833',
    textDecoration: 'none',
    color: 'inherit'
  },
  articleItem: {
    background: '#161820',
    padding: '20px',
    borderRadius: '10px',
    borderLeft: '4px solid #00e5ff',
    marginBottom: '20px'
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'flex-start'
  },
  mailCtaButton: {
    background: 'linear-gradient(90deg, #00e5ff, #7c3aed)',
    color: '#f3f4f6',
    textDecoration: 'none',
    padding: '16px 32px',
    borderRadius: '10px',
    fontWeight: '700',
    fontSize: '1.1rem',
    textAlign: 'center'
  },
  socialGrid: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    marginTop: '20px'
  },
  socLink: {
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    padding: '6px 12px',
    border: '1px solid #1f2833',
    borderRadius: '6px'
  }
};