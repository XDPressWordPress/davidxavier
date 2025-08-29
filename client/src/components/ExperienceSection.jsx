import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Rocket, Palette, GraduationCap, Wrench } from 'lucide-react';

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      key: 'xdplans',
      icon: <Rocket size={24} />,
      iconColor: 'bg-accent text-accent-foreground'
    },
    {
      key: 'hina', 
      icon: <Palette size={24} />,
      iconColor: 'bg-primary text-primary-foreground'
    },
    {
      key: 'microlins',
      icon: <GraduationCap size={24} />,
      iconColor: 'bg-secondary text-secondary-foreground'
    },
    {
      key: 'prorsoft',
      icon: <Wrench size={24} />,
      iconColor: 'bg-muted text-muted-foreground'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-accent"
          data-testid="experience-title"
        >
          {t('experience.title')}
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6"
                  data-testid={`timeline-${exp.key}`}
                >
                  <div className={`relative z-10 w-16 h-16 ${exp.iconColor} rounded-full flex items-center justify-center font-bold border-4 border-background`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1 bg-secondary rounded-xl p-6 shadow-lg border border-border">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-4">
                      <h3 className="text-xl font-bold text-foreground" data-testid={`company-${exp.key}`}>
                        {t(`experience.jobs.${exp.key}.company`)}
                      </h3>
                      <span className="text-accent font-semibold" data-testid={`period-${exp.key}`}>
                        {t(`experience.jobs.${exp.key}.period`)}
                      </span>
                    </div>
                    <p className="text-accent text-sm mb-2" data-testid={`role-${exp.key}`}>
                      {t(`experience.jobs.${exp.key}.role`)}
                    </p>
                    <p className="text-muted-foreground" data-testid={`description-${exp.key}`}>
                      {t(`experience.jobs.${exp.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
