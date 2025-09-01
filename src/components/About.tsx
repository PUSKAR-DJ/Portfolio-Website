import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const [stats, setStats] = useState([]);
  const [motto, setMotto] = useState('');
  const [biography, setBiography] = useState({ title: '', paragraphs: [] });

  useEffect(() => {
    async function fetchAboutData() {
      try {
        const response = await fetch('/about.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStats(data.stats);
        setMotto(data.motto);
        setBiography(data.biography);
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      }
    }
    fetchAboutData();
  }, []);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-card to-accent/10 border-0 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl mb-4">{biography.title}</h3>
                  {biography.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <h4 className="mb-4">My Motto</h4>
                  <blockquote className="text-lg italic text-primary border-l-4 border-primary pl-4">
                    "{motto}"
                  </blockquote>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-chart-1/10 p-8">
                <ImageWithFallback
                  src="https://media.licdn.com/dms/image/v2/D5603AQEw1-tpQQxlhQ/profile-displayphoto-shrink_400_400/B56ZWgE_6EGUAo-/0/1742147421645?e=1759363200&v=beta&t=RDhyBdiQF9zu4vfbGC9PXHd73Iqw7ap3msCeSrxdcV8"
                  alt="Puskar Saha"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center bg-gradient-to-br from-card to-secondary/10 border-0 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-2xl font-semibold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}