import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-8 bg-secondary border-t border-border"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground" data-testid="footer-copyright">
          {t('footer.copyright')}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
