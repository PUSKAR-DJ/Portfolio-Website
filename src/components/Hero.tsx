import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  Github,
  Linkedin,
  Mail,
  Twitter,
};

export function Hero() {
  const [text, setText] = useState('');
  const [socialLinks, setSocialLinks] = useState([]);
  const fullText = "Building digital experiences with code and creativity";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    async function fetchSocials() {
      try {
        const response = await fetch('/contact.json');
        if (!response.ok) throw new Error('Failed to fetch socials');
        const data = await response.json();
        setSocialLinks(data.socialLinks || []);
      } catch (e) {
        setSocialLinks([]);
      }
    }
    fetchSocials();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--background)_1px,transparent_1px),linear-gradient(to_bottom,var(--background)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(circle_at_center,white,rgba(var(--chart-1-rgb),0.5),transparent_70%)]" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-chart-1 to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I'm Puskar Saha
          </motion.h1>
          
          <motion.div
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="border-r-2 border-primary animate-pulse">{text}</span>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Full-Stack Developer & Tech Enthusiast passionate about creating innovative
            web solutions that make a difference.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-primary to-chart-1 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </Button>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap] || Mail;
                return (
                  <Button key={social.label} variant="outline" size="sm" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <IconComponent className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-foreground transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-8 w-8" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}