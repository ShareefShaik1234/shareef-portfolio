import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Github, Linkedin,
  Mail, Phone, Code2, Database, Globe, Terminal, Layers3, GraduationCap,
  BriefcaseBusiness, Award, ExternalLink, CheckCircle2, FileText, Sparkles
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Shaik Baba Shareef',
  role: 'Java Full Stack Developer',
  email: 'shareefshaik63411@gmail.com',
  phone: '8143525023',
  github: 'https://github.com/ShareefShaik1234',
  linkedin: '', // Add the exact LinkedIn profile URL before publishing.
  resume: '/ShareefShaik_NEW.pdf',
  demo: 'https://resume-job-matcher-qciy.onrender.com/',
  repo: 'https://github.com/ShareefShaik1234/resume-job-matcher'
};

const skills = [
  { title: 'Languages', icon: Code2, items: ['Java', 'JavaScript', 'Python', 'SQL'] },
  { title: 'Backend', icon: Layers3, items: ['Spring Boot', 'Spring Data JPA', 'JDBC', 'REST APIs'] },
  { title: 'Frontend', icon: Globe, items: ['React.js', 'HTML5', 'CSS3'] },
  { title: 'Data & Tools', icon: Database, items: ['MySQL', 'Git', 'GitHub', 'Postman', 'Jira', 'VS Code', 'IntelliJ IDEA'] },
  { title: 'Core concepts', icon: Terminal, items: ['OOP', 'Data Structures & Algorithms', 'CRUD', 'Debugging', 'API Testing'] }
];

const projects = [
  {
    number: '01', type: 'PYTHON · NLP / PRODUCTIVITY', title: 'Resume Job Matcher',
    description: 'A practical tool that compares a resume with a job description to surface relevant skills and help applicants understand their fit.',
    tags: ['Python', 'Streamlit', 'Resume analysis'],
    featured: true, demo: profile.demo, repo: profile.repo, visual: 'matcher'
  },
  {
    number: '02', type: 'FULL STACK · BOOKING', title: 'Online Booking System',
    description: 'A full-stack web application built with Java, Spring Boot, and MySQL, connecting backend services with database operations for booking workflows.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
    repo: '', demo: '', visual: 'booking'
  },
  {
    number: '03', type: 'BACKEND · REST API', title: 'E-Commerce Backend System',
    description: 'Backend services and database operations built with Spring Boot and Spring Data JPA, with REST endpoints tested using Postman.',
    tags: ['Spring Boot', 'Spring Data JPA', 'MySQL'],
    repo: '', demo: '', visual: 'commerce'
  }
];

const experience = [
  { date: 'MAY 2026 — JUL 2026', title: 'Java Full Stack — Academic Internship', org: 'Ethnotech Academy', mode: 'Internship', bullets: [
    'Developed a Social Media Management System using Java and Spring Boot.',
    'Implemented CRUD operations with Spring Data JPA and MySQL.',
    'Built REST APIs and integrated frontend and backend services.'
  ]},
  { date: 'MAY 2026 — JUN 2026', title: 'ServiceNow Virtual Intern', org: 'ServiceNow University / SmartBridge (AICTE)', mode: 'Virtual', bullets: [
    'Completed hands-on ServiceNow labs and practical assignments.',
    'Practiced Flow Designer, ATF, Reports, and ITSM tasks.',
    'Completed learning modules and CSA preparation.'
  ]}
];

const education = [
  { years: '2023 — 2027', degree: 'B.Tech, Computer Science & Engineering', school: 'Madanapalle Institute of Technology & Science', result: 'CGPA 9.08' },
  { years: '2021 — 2023', degree: 'Intermediate', school: 'Narayana Junior College, Kadapa', result: '96.3%' },
  { years: '2020 — 2021', degree: 'SSC', school: 'Z P High School Boys, Vempalle', result: '98.8%' }
];

const certifications = [
  'Microsoft Certified: Azure AI Fundamentals',
  'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
  'Java (Basics) — HackerRank',
  'Microsoft Certified: SQL AI Developer Associate',
  'Advanced Data Structures using Java — RAMPeX',
  'Agentic AI Certified Foundations Associate',
  'JavaScript Essentials 1 — Cisco Networking Academy',
  'Oracle Java Foundations'
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']];

  return <div className="site-shell">
    <div className="topline"><span>PORTFOLIO / 2026</span><span><span className="status-dot"/> OPEN TO OPPORTUNITIES</span></div>
    <header className="nav-wrap">
      <a href="#home" className="wordmark" onClick={closeMenu}><span className="mark">S.</span><span>SHAREEF<span className="wordmark-muted"> / DEVELOPER</span></span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="resume-link" href={profile.resume} download>Resume <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line"/> SOFTWARE DEVELOPER · CSE '27</p>
          <h1>Building useful<br/>things with <em>code.</em></h1>
          <p className="hero-lede">I’m {profile.name}, a Computer Science and Engineering undergraduate focused on Java backend development and full-stack applications.</p>
          <p className="hero-sub">I enjoy turning practical problems into clear, dependable software with Java, Spring Boot, React, and MySQL.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a>
            <a className="button button-secondary" href={profile.resume} download><FileText size={16}/> Download resume</a>
          </div>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
            <a href={`mailto:${profile.email}`}><Mail size={16}/> Email <ArrowUpRight size={13}/></a>
            <span className="social-note">Madanapalle, Andhra Pradesh</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Decorative code-inspired graphic">
          <div className="art-grid"/>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="code-card">
            <div className="code-card-top"><span/><span/><span/><small>developer.java</small></div>
            <div className="code-lines">
              <p><b>01</b> <span className="syntax-purple">public class</span> <span className="syntax-green">Developer</span> {'{'}</p>
              <p><b>02</b> &nbsp; <span className="syntax-purple">String</span> focus = <span className="syntax-yellow">"building"</span>;</p>
              <p><b>03</b> &nbsp; <span className="syntax-purple">String</span> stack = <span className="syntax-yellow">"Java + Web"</span>;</p>
              <p><b>04</b> &nbsp; <span className="syntax-purple">boolean</span> learning = <span className="syntax-green">true</span>;</p>
              <p><b>05</b> {'}'}</p>
            </div>
            <div className="code-card-bottom"><span className="pulse"/> AVAILABLE FOR OPPORTUNITIES</div>
          </div>
          <div className="floating-chip chip-top"><Code2 size={16}/> <span>Java / Spring Boot</span></div>
          <div className="floating-chip chip-bottom"><Database size={16}/> <span>Data-driven apps</span></div>
          <div className="art-caption">CURIOUS BY DEFAULT. BUILT TO LEARN.</div>
        </div>
        <a href="#about" className="scroll-cue"><span/> SCROLL TO EXPLORE <ArrowDownRight size={14}/></a>
      </section>

      <section id="about" className="about section-wrap section-block">
        <div className="section-label"><span>01</span> ABOUT</div>
        <div className="about-content">
          <h2>Good software starts<br/>with <em>clear thinking.</em></h2>
          <div className="about-text"><p>I’m a CSE undergraduate graduating in 2027 with hands-on experience building web applications through projects and internships. My work spans Java and Spring Boot services, REST APIs, database integration, and frontend development.</p><p>I value readable code, thoughtful debugging, and testing real user flows. I’m looking for opportunities to contribute to product teams, keep learning from experienced developers, and grow as a full-stack engineer.</p>
          <div className="stat-strip"><div><strong>9.08</strong><span>B.Tech CGPA</span></div><div><strong>140+</strong><span>LeetCode challenges</span></div><div><strong>3</strong><span>Featured projects</span></div></div></div>
        </div>
      </section>

      <section id="skills" className="skills section-wrap section-block">
        <div className="section-heading"><div><div className="section-label"><span>02</span> TOOLKIT</div><h2>Skills I work <em>with.</em></h2></div><p>A practical toolkit for building, connecting, and testing web applications.</p></div>
        <div className="skills-grid">{skills.map((group, i) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-head"><span className="skill-icon"><Icon size={19}/></span><span className="mono">0{i + 1}</span></div><h3>{group.title}</h3><div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></article> })}</div>
      </section>

      <section id="projects" className="projects section-wrap section-block">
        <div className="section-heading"><div><div className="section-label"><span>03</span> SELECTED WORK</div><h2>Projects with a <em>purpose.</em></h2></div><p>Hands-on projects where I practice solving useful problems and connecting the pieces of an application.</p></div>
        <div className="project-list">{projects.map((project) => <article className={`project-card ${project.featured ? 'project-featured' : ''}`} key={project.number}>
          <div className={`project-visual ${project.visual}`}>
            {project.visual === 'matcher' && <div className="matcher-ui"><div className="mini-window"><div className="mini-top"><i/><i/><i/><span>match_report.py</span></div><div className="mini-doc"><div className="doc-icon"><FileText size={24}/></div><div><b>Resume analysis</b><small>Skills matched to job needs</small></div></div><div className="match-bar"><span>SKILL ALIGNMENT</span><div><i/></div></div><div className="mini-pills"><i>Java</i><i>Spring Boot</i><i>SQL</i></div></div><span className="visual-index">PROJECT / 01</span></div>}
            {project.visual === 'booking' && <div className="booking-ui"><div className="booking-head"><span>BOOK / IT</span><span>✳</span></div><div className="booking-title">Your next<br/><em>reservation.</em></div><div className="booking-options"><span>01&nbsp; Movie</span><span>02&nbsp; Travel</span><span>03&nbsp; Stay</span></div><span className="visual-index">PROJECT / 02</span></div>}
            {project.visual === 'commerce' && <div className="commerce-ui"><div className="commerce-orbit"><div className="commerce-core"><Layers3 size={34}/></div><span className="node node-a">API</span><span className="node node-b">DB</span><span className="node node-c">REST</span></div><div className="commerce-caption">SERVICE LAYER <span>→</span> DATA LAYER</div><span className="visual-index">PROJECT / 03</span></div>}
          </div>
          <div className="project-info"><div className="project-meta"><span>{project.number} / 03</span><span>{project.type}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list project-tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div><div className="project-links">
            {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15}/></a>}
            {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">GitHub repo <Github size={15}/></a>}
            {!project.demo && !project.repo && <span className="link-unavailable">Repository link not provided</span>}
          </div></div>
        </article>)}</div>
      </section>

      <section id="experience" className="experience section-wrap section-block">
        <div className="section-heading"><div><div className="section-label"><span>04</span> EXPERIENCE</div><h2>Learning by <em>building.</em></h2></div><p>Internship experience focused on application development, platform workflows, and practical implementation.</p></div>
        <div className="experience-layout"><div className="experience-intro"><BriefcaseBusiness size={25}/><p>Professional experience</p><span>INTERNSHIPS & PRACTICAL LEARNING</span></div><div className="timeline">{experience.map((item, i) => <article className="timeline-item" key={item.org}><div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div><div className="timeline-main"><div className="timeline-meta"><span>{item.date}</span><span className="role-pill">{item.mode}</span></div><h3>{item.title}</h3><p className="company">{item.org}</p><ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></article>)}</div></div>
      </section>

      <section id="education" className="education section-wrap section-block">
        <div className="section-heading"><div><div className="section-label"><span>05</span> EDUCATION</div><h2>The foundation <em>behind it.</em></h2></div><p>Academic grounding in computer science, backed by consistent performance.</p></div>
        <div className="education-list">{education.map((item, i) => <article className="education-item" key={item.school}><div className="education-icon"><GraduationCap size={20}/></div><div className="education-main"><span className="mono">{item.years}</span><h3>{item.degree}</h3><p>{item.school}</p></div><strong>{item.result}</strong></article>)}</div>
      </section>

      <section className="certifications section-wrap section-block">
        <div className="section-heading"><div><div className="section-label"><span>06</span> CONTINUOUS LEARNING</div><h2>Certifications & <em>milestones.</em></h2></div><p>Credentials and achievements listed in my resume.</p></div>
        <div className="cert-layout"><div className="cert-list">{certifications.map((cert, i) => <div className="cert-row" key={cert}><span className="cert-number">{String(i + 1).padStart(2, '0')}</span><span>{cert}</span><CheckCircle2 size={16}/></div>)}</div><aside className="achievement-card"><Award size={28}/><span className="mono">HIGHLIGHT</span><strong>140+</strong><h3>coding challenges solved</h3><p>LeetCode practice across algorithmic problem-solving topics.</p><div className="achievement-rule"/></aside></div>
      </section>

      <section id="contact" className="contact section-wrap section-block">
        <div className="contact-panel"><div className="contact-deco">LET’S BUILD<br/>SOMETHING<br/><em>USEFUL.</em></div><div className="contact-content"><div className="section-label"><span>07</span> CONTACT</div><h2>Have an opportunity<br/>or a good problem?</h2><p>I’m interested in opportunities where I can contribute, learn, and build software that makes a difference.</p><a className="button button-primary contact-button" href={`mailto:${profile.email}?subject=${encodeURIComponent('Professional opportunity')}`}>Let’s talk <ArrowUpRight size={17}/></a><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}</a><a href={`tel:${profile.phone}`}><Phone size={16}/>{profile.phone}</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/>GitHub profile <ArrowUpRight size={13}/></a>{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn <ArrowUpRight size={13}/></a>}</div></div></div>
      </section>
    </main>

    <footer className="footer section-wrap"><a href="#home" className="wordmark"><span className="mark">S.</span><span>SHAIK BABA SHAREEF</span></a><span>DESIGNED WITH INTENTION · BUILT WITH REACT</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
