import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import TypingAnimation from './TypingAnimation';
import { Download, Mail } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // TODO: Implement actual PDF download
    alert(t('hero.downloadBtn'));
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
              data-testid="hero-title"
            >
              David <span className="text-accent">Xavier</span>
            </motion.h1>
            
            <div className="text-xl lg:text-2xl text-muted-foreground mb-8 h-16">
              <TypingAnimation 
                text={t('hero.subtitle')}
                speed={100}
                className="text-xl lg:text-2xl"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button 
                onClick={downloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                data-testid="button-download-resume"
              >
                <Download size={20} />
                {t('hero.downloadBtn')}
              </motion.button>
              
              <motion.button 
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary hover:bg-accent text-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                data-testid="button-contact"
              >
                <Mail size={20} />
                {t('hero.contactBtn')}
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="David Xavier - Full Stack Developer" 
              className="rounded-full w-80 h-80 object-cover mx-auto shadow-2xl border-4 border-accent" 
              data-testid="hero-profile-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
