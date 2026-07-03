import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { portfolioContent } from '../../data/portfolioData';
import './Articles.css';

const { articles } = portfolioContent;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

export default function Articles() {
  return (
    <section className="articles-section">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Articles
        </motion.h2>
        <motion.div className="section-divider" initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Thoughts, tutorials, and technical deep-dives
        </motion.p>

        <div className="articles-grid">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="article-title">{article.title}</h3>
              <p className="article-summary">{article.summary}</p>
              <span className="article-link">
                Read Article <FaArrowRight />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
