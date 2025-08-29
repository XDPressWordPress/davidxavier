import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, Palette, TrendingUp } from 'lucide-react';
import { SiWordpress } from 'react-icons/si';

const EducationSection = () => {
  const { t } = useLanguage();

  const courses = [
    { 
      key: 'freecodecamp', 
      icon: <GraduationCap className="text-accent text-2xl" />,
      testId: 'course-freecodecamp'
    },
    { 
      key: 'wordpress', 
      icon: <SiWordpress className="text-accent text-2xl" />,
      testId: 'course-wordpress'
    },
    { 
      key: 'marketing', 
      icon: <TrendingUp className="text-accent text-2xl" />,
      testId: 'course-marketing'
    },
    { 
      key: 'design', 
      icon: <Palette className="text-accent text-2xl" />,
      testId: 'course-design'
    }
  ];

  const languages = [
    { 
      key: 'portuguese', 
      flag: '🇧🇷',
      testId: 'language-portuguese'
    },
    { 
      key: 'english', 
      flag: '🇺🇸',
      testId: 'language-english'
    },
    { 
      key: 'spanish', 
      flag: '🇪🇸',
      testId: 'language-spanish'
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-accent"
          data-testid="education-title"
        >
          {t('education.title')}
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl p-6 shadow-lg border border-border"
              data-testid={course.testId}
            >
              <div className="flex items-center gap-4 mb-4">
                {course.icon}
                <h3 className="text-xl font-bold" data-testid={`${course.testId}-name`}>
                  {t(`education.courses.${course.key}.name`)}
                </h3>
              </div>
              <p className="text-accent mb-2" data-testid={`${course.testId}-course`}>
                {t(`education.courses.${course.key}.course`)}
              </p>
              <p className="text-muted-foreground text-sm" data-testid={`${course.testId}-duration`}>
                {t(`education.courses.${course.key}.duration`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-16">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8 text-foreground"
            data-testid="languages-title"
          >
            {t('education.languages.title')}
          </motion.h3>
          
          <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-xl p-6 text-center shadow-lg border border-border"
                data-testid={lang.testId}
              >
                <div className="text-3xl mb-4">{lang.flag}</div>
                <h4 className="font-bold mb-2" data-testid={`${lang.testId}-name`}>
                  {t(`education.languages.${lang.key}.name`)}
                </h4>
                <p className="text-muted-foreground" data-testid={`${lang.testId}-level`}>
                  {t(`education.languages.${lang.key}.level`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
