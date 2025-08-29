import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-accent"
          data-testid="about-title"
        >
          {t('about.title')}
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-xl p-8 shadow-2xl border border-border"
          >
            <p className="text-lg leading-relaxed text-muted-foreground" data-testid="about-content">
              {t('about.content')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
