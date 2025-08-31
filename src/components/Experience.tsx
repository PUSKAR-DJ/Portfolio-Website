import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: [
        'Led development of scalable web applications serving 100K+ users',
        'Architected microservices infrastructure reducing response time by 40%',
        'Mentored junior developers and established coding best practices',
        'Implemented CI/CD pipelines improving deployment efficiency by 60%',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupHub Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      type: 'Full-time',
      description: [
        'Developed and maintained multiple client projects using modern web technologies',
        'Collaborated with design team to implement pixel-perfect user interfaces',
        'Optimized application performance resulting in 50% faster load times',
        'Built RESTful APIs and integrated third-party services',
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Vue.js', 'Python', 'Django'],
    },
    {
      title: 'Frontend Developer',
      company: 'WebCraft Agency',
      location: 'Remote',
      period: '2019 - 2020',
      type: 'Contract',
      description: [
        'Created responsive web applications for diverse client portfolio',
        'Implemented modern UI/UX designs with focus on accessibility',
        'Collaborated with backend teams to integrate APIs and services',
        'Delivered projects on time with 98% client satisfaction rate',
      ],
      technologies: ['JavaScript', 'React', 'Tailwind CSS', 'Git', 'Figma'],
    },
    {
      title: 'Junior Web Developer',
      company: 'CodeStart Solutions',
      location: 'New York, NY',
      period: '2018 - 2019',
      type: 'Full-time',
      description: [
        'Developed responsive websites using HTML, CSS, and JavaScript',
        'Assisted in debugging and testing web applications',
        'Learned modern development workflows and version control',
        'Contributed to team projects and gained valuable industry experience',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through the world of software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-1 to-primary hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:col-start-2'}>
                  <Card className="p-6 bg-gradient-to-br from-card to-accent/5 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {exp.type}
                        </Badge>
                        <h3 className="text-xl mb-2">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 text-muted-foreground">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}