import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

export default function ProjectCard({ title, desc, tags, github, live, index }) {
  const handleCardClick = () => {
    if (live) window.open(live, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="project-card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -8 }}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
    >
      {/* Header */}
      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>
        {live && <span className="live-dot" title="Live" />}
      </div>

      {/* Description */}
      <p className="project-desc">{desc}</p>

      {/* Tags */}
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      {/* Action Links */}
      <div className="project-links">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub /> Source
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
