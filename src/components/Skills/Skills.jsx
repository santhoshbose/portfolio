import { motion } from 'framer-motion';
import { portfolioContent } from '../../data/portfolioData';
import './Skills.css';

const { skills } = portfolioContent;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  }
};

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills &amp; Technologies
        </motion.h2>
        <motion.div className="section-divider" initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Technologies I work with to bring ideas to life
        </motion.p>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="skill-badge"
              variants={badgeVariants}
              whileHover={{
                scale: 1.08,
                boxShadow: '0 0 20px rgba(102, 252, 241, 0.25)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
