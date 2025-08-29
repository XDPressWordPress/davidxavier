import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {  const { currentLang, switchLanguage, t } = useLanguage();

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

        {/* Language Toggle */}
 <div className="flex justify-center items-center gap-2 mt-4">
 <button
 onClick={switchLanguage}
 className="text-muted-foreground hover:text-accent transition-colors duration-300"
 data-testid="language-toggle">
 {currentLang.toUpperCase()}
 </button>
 </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
