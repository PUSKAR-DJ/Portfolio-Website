import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2016 - 2018',
      gpa: '3.8/4.0',
      achievements: [
        'Thesis: "Machine Learning Applications in Web Development"',
        'Dean\'s List for 3 consecutive semesters',
        'Research Assistant in AI Lab',
        'Teaching Assistant for Data Structures course',
      ],
      coursework: ['Advanced Algorithms', 'Machine Learning', 'Database Systems', 'Software Engineering'],
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2012 - 2016',
      gpa: '3.7/4.0',
      achievements: [
        'Graduated Magna Cum Laude',
        'President of Computer Science Society',
        'Winner of Annual Hackathon (2015, 2016)',
        'Scholarship recipient for academic excellence',
      ],
      coursework: ['Data Structures', 'Web Development', 'Computer Networks', 'Software Design'],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      level: 'Professional',
      credentialId: 'AWS-SAA-12345',
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      level: 'Professional',
      credentialId: 'GCP-PD-67890',
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: '2022',
      level: 'Associate',
      credentialId: 'MDB-DEV-11111',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      level: 'Professional',
      credentialId: 'META-RD-22222',
    },
    {
      name: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: '2021',
      level: 'Certified',
      credentialId: 'NODEJS-AD-33333',
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2021',
      level: 'Associate',
      credentialId: 'DOCKER-CA-44444',
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <GraduationCap className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl">Education</h3>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-card to-accent/5 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h4 className="text-xl mb-2">{edu.degree}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                      <div className="mb-4">
                        <Badge variant="outline" className="mb-2">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium">Key Achievements:</h5>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-3">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <Award className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl">Professional Certifications</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-card to-secondary/5 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0" />
                    <Badge variant="outline" className="text-xs">
                      {cert.date}
                    </Badge>
                  </div>
                  <h4 className="font-medium mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {cert.level}
                    </Badge>
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}