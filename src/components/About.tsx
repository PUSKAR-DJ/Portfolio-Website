import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies Mastered', value: '15+' },
    { label: 'Happy Clients', value: '30+' },
  ];

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
                  <h3 className="text-2xl mb-4">Hello, I'm Puskar Saha</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a passionate full-stack developer with over 5 years of experience 
                    building modern web applications. My journey in tech started with curiosity 
                    and has evolved into a deep love for creating digital solutions that solve 
                    real-world problems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I specialize in React, Node.js, and modern web technologies, with a strong 
                    focus on user experience and performance optimization. When I'm not coding, 
                    you can find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="mb-4">My Motto</h4>
                  <blockquote className="text-lg italic text-primary border-l-4 border-primary pl-4">
                    "Code is poetry in motion, and every line should tell a story of innovation."
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
                  src="https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTY0MTYzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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