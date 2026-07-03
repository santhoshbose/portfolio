import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { portfolioContent } from '../../data/portfolioData';
import HeroCanvas from './HeroCanvas';
import ResumeButton from '../Resume/ResumeButton';
import './Hero.css';

const { profile, socials } = portfolioContent;

/* Social icon map */
const socialLinks = [
  { icon: FaGithub, url: socials.github, label: 'GitHub' },
  { icon: FaLinkedin, url: socials.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, url: socials.instagram, label: 'Instagram' },
  { icon: FaYoutube, url: socials.youtube, label: 'YouTube' },
  { icon: FaTwitter, url: socials.twitter, label: 'Twitter' },
];

/* Stagger animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const actionsVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left — Text Block */}
        <div className="hero-text">
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hello, I&apos;m 👋
          </motion.p>

          <motion.h1 className="hero-name" variants={itemVariants}>
            {profile.name}
          </motion.h1>

          <motion.p className="hero-role" variants={itemVariants}>
            {profile.role}
          </motion.p>

          <motion.p className="hero-bio" variants={itemVariants}>
            {profile.bio}
          </motion.p>

          <motion.div className="hero-actions" variants={actionsVariant}>
            <ResumeButton />
            <div className="hero-socials">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label={label}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — 3D Canvas */}
        <HeroCanvas />
      </motion.div>
    </section>
  );
}
