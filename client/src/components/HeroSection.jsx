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
  src="https://scontent.fcgh12-1.fna.fbcdn.net/v/t39.30808-6/492004616_2236795813442956_2367005914220249827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGkZTkkRcTfI8VaV06bwdlH5HETDgVI3U7kcRMOBUjdTmAtVTAtwBNq0ZeMYzdTNJObBHD0NzdXdTTH1MpPep1-&_nc_ohc=K7lS27qYBLsQ7kNvwHLn_o_&_nc_oc=AdlA9GroH7s4SLnM1I4ZBiZ2dq0wQI11g2ZyiQD1XGjTkxu5QMPB8j4abcEHtKotsGs_R6_7ESN12kYgR9su_9T5&_nc_zt=23&_nc_ht=scontent.fcgh12-1.fna&_nc_gid=lO0rES3YckBN0tgqgUxeuQ&oh=00_AfXT2bp0ZfsuQV47d95LqQga01xgJmgzO9uvv1fKEqyAtg&oe=68B73347"
  alt="David Xavier - Full Stack Developer"
  className="rounded-full w-80 h-80 object-cover mx-auto shadow-2xl border-4 border-accent"
/>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
