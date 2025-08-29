import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { currentLang, switchLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#hero", key: "nav.home" },
    { href: "#about", key: "nav.about" },
    { href: "#experience", key: "nav.experience" },
    { href: "#skills", key: "nav.skills" },
    { href: "#education", key: "nav.education" },
    { href: "#contact", key: "nav.contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <motion.button 
          onClick={switchLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary hover:bg-accent text-foreground px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg"
          data-testid="language-toggle"
        >
          <Globe size={16} />
          <span>{currentLang.toUpperCase()}</span>
        </motion.button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 navbar-blur border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-accent"
              data-testid="navbar-logo"
            >
              David Xavier
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  data-testid={`nav-${item.href.slice(1)}`}
                >
                  {t(item.key)}
                </motion.button>
              ))}
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0 
          }}
          className={`md:hidden bg-background border-t border-border overflow-hidden`}
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-muted-foreground hover:text-accent transition-colors duration-300"
                data-testid={`mobile-nav-${item.href.slice(1)}`}
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
