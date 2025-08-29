import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPhp, 
  SiWordpress, 
  SiMysql, 
  SiMongodb, 
  SiFirebase, 
  SiGit 
} from 'react-icons/si';
import { Search, ShoppingCart } from 'lucide-react';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-yellow-400" />, testId: 'skill-javascript' },
    { name: 'React.js', icon: <SiReact className="text-4xl text-cyan-400" />, testId: 'skill-react' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-4xl text-green-500" />, testId: 'skill-nodejs' },
    { name: 'React Native', icon: <SiReact className="text-4xl text-blue-400" />, testId: 'skill-react-native' },
    { name: 'PHP', icon: <SiPhp className="text-4xl text-purple-500" />, testId: 'skill-php' },
    { name: 'WordPress', icon: <SiWordpress className="text-4xl text-blue-600" />, testId: 'skill-wordpress' },
    { name: 'WooCommerce', icon: <ShoppingCart className="text-4xl text-accent" />, testId: 'skill-woocommerce' },
    { name: 'MySQL', icon: <SiMysql className="text-4xl text-orange-500" />, testId: 'skill-mysql' },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-600" />, testId: 'skill-mongodb' },
    { name: 'Firebase', icon: <SiFirebase className="text-4xl text-yellow-500" />, testId: 'skill-firebase' },
    { name: 'Git', icon: <SiGit className="text-4xl text-red-500" />, testId: 'skill-git' },
    { name: 'SEO', icon: <Search className="text-4xl text-accent" />, testId: 'skill-seo' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-accent"
          data-testid="skills-title"
        >
          {t('skills.title')}
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="skill-icon bg-secondary rounded-xl p-6 text-center shadow-lg border border-border cursor-pointer"
                data-testid={skill.testId}
              >
                <div className="mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <p className="text-sm font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
