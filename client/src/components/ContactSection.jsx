import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, Github, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t('contact.form.successMessage'),
        description: "Obrigado pelo contato! / Thank you for reaching out!"
      });
      setFormData({ name: '', email: '', message: '' });
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: () => {
      toast({
        title: t('contact.form.errorMessage'),
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      contactMutation.mutate(formData);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      key: 'phone',
      icon: <Phone className="text-accent-foreground" />,
      label: t('contact.phone'),
      value: t('contact.info.phone'),
      testId: 'contact-phone'
    },
    {
      key: 'email',
      icon: <Mail className="text-accent-foreground" />,
      label: 'Email',
      value: t('contact.info.email'),
      testId: 'contact-email'
    },
    {
      key: 'github',
      icon: <Github className="text-accent-foreground" />,
      label: 'GitHub',
      value: t('contact.info.github'),
      testId: 'contact-github'
    },
    {
      key: 'instagram',
      icon: <Instagram className="text-accent-foreground" />,
      label: 'Instagram',
      value: t('contact.info.instagram'),
      testId: 'contact-instagram'
    },
    {
      key: 'linkedin',
      icon: <Linkedin className="text-accent-foreground" />,
      label: 'LinkedIn',
      value: t('contact.info.linkedin'),
      testId: 'contact-linkedin'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-accent"
          data-testid="contact-title"
        >
          {t('contact.title')}
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.key}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
                data-testid={info.testId}
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold">{info.label}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-xl p-8 shadow-2xl border border-border"
          >
            <h3 className="text-xl font-bold mb-6" data-testid="contact-form-title">
              {t('contact.form.title')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.form.nameLabel')}
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full"
                  required
                  data-testid="input-contact-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.form.emailLabel')}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full"
                  required
                  data-testid="input-contact-email"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.form.messageLabel')}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={4}
                  className="w-full resize-none"
                  required
                  data-testid="textarea-contact-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={contactMutation.isPending}
                data-testid="button-submit-contact"
              >
                {contactMutation.isPending ? 
                  (t('currentLang') === 'pt' ? 'Enviando...' : 'Sending...') : 
                  t('contact.form.submitBtn')
                }
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
