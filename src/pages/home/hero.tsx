import { Button } from '@/components/ui/button'; // Adjust path
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Adjust path
import { Badge } from '@/components/ui/badge'; // Adjust path
import { Code,  Mail, Github, ExternalLink, GraduationCap, Database, Server, Layers } from 'lucide-react'; // Icons from Lucide
import { motion } from 'framer-motion'; // Optional for animations; remove if not using
import { ContactDialog } from '@/components/ContactDialog/contact-dialog';


const Hero = () => {
  // Animation variants (optional)
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Education data (customize with your details)
  const education = [
    {
      degree: 'Post-Graduation (MCA)',
      institution: 'Sardar Patel University, Mandi (H.P.)',
      year: '2022-2024',
      marks: 'CGPA: 7.8/10',
      icon: GraduationCap,
    },
    {
      degree: 'Graduation (BCA)',
      institution: 'Govt. College Kullu | Distt. Kullu, Himachal Pradesh',
      year: '2018-2022',
      marks: 'CGPA: 8.2/10',
      icon: GraduationCap,
    },
    {
      degree: '12th Grade (Higher Secondary)',
      institution: 'Govt.Model Sen Sec School BAJAURA',
      year: '2017',
      marks: 'Percentage: 70%',
      icon: GraduationCap,
    },
    {
      degree: '10th Grade (Secondary)',
      institution: 'Govt.Model Sen Sec School BAJAURA',
      year: '2015',
      marks: 'Percentage: 69%',
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="container mx-auto px-4 flex justify-center items-center ">
            <img
              src="images/IMG_9441.JPG" 
              alt="My Photo"
              style={{ transform: "rotate(270deg)" }}
              className="rounded-full  w-64 h-64 object-cover object-[90%_20%]    mx-auto md:mx-0 shadow-lg"
            />
          </div>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            {...fadeInUp}
          >
            Hi, I'm <span className="text-primary">Desh Raj</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
           Full-Stack Developer (.NET & React) | Building modern, scalable web solutions with passion
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <Button size="lg" className="mr-4">
             <a href="#projects"> View My Work</a>
            </Button>
            <Button variant="outline" size="lg"> 
            <a href="#contact">  Get In Touch</a>
            </Button>
          </motion.div>
        </div>
        {/* Optional background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            {...fadeInUp}
          >

            <div className=" text-center md:text-left  justify-center items-center">
              <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
              <p className="text-muted-foreground mb-6">
                I am a .NET developer with around 1 year of hands-on experience in building
                web applications using modern technologies. I have a strong understanding
                of C#, ASP.NET Core, and SQL, and I enjoy writing clean, maintainable,
                and scalable code.

                On the frontend side, I work with React and TypeScript to build
                responsive and user-friendly interfaces. I focus on component-based
                architecture, proper state management, and clean UI practices.

                In addition, I have a basic understanding of Node.js and REST APIs,
                which helps me collaborate effectively across the full stack.
                I am continuously learning and improving my skills to become a
                well-rounded software developer.
              </p>
              {/* Tech Stack */}
              <div className="mb-6 grid justify-center">
                <h3 className="text-lg text-center  font-semibold mb-2  flex items-center justify-center">
                  <Code className="h-5 w-5 mr-2 grid text-primary " />
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    'C#', 'SQL', 'JavaScript', 'jQuery', 'CSS', 'HTML',
                    'React', 'Node.js', 'Nest.js', 'Next.js', 'Docker', 'Computer Networking'
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <Button className=" text-center  justify-center items-center" variant="outline">
                  <a href="files/Desraj ASP.NET CV.pdf" download>Download Resume</a></Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeInUp}
          >
            Education
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex items-center space-x-4">
                    <edu.icon className="h-10 w-10 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution} | {edu.year}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{edu.marks}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeInUp}
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: '.NET Core', desc: 'Backend development with C# and ASP.NET', experience: '1+ Year' },
              { icon: Database, title: 'MS SQL Server', desc: 'Relational database design, querying, and performance optimization', experience: '1+ Year' },
              { icon: Code, title: 'React', desc: 'Frontend development with hooks and state management', experience: '6+ Months' },
              { icon: Database, title: 'Docker', desc: 'Containerization and deployment', experience: 'Intermediate' },
              { icon: Server, title: 'Node.js', desc: 'Server-side JavaScript and APIs', experience: 'Intermediate' },
              { icon: Layers, title: 'Next.js', desc: 'React framework for SSR and static sites', experience: 'Intermediate' },
              { icon: Server, title: 'Nest.js', desc: 'Node.js framework for scalable apps', experience: 'Intermediate' },
              { icon: Github, title: 'Git', desc: 'Version Control', experience: '1+ Years' },
            ].map((skill, index) => (
              <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <skill.icon className="h-12 w-12 mx-auto text-primary mb-2" />
                    <CardTitle>{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-2">{skill.desc}</CardDescription>
                    <Badge variant="secondary">{skill.experience}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            {...fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'User Management Project',
                desc: 'A full-stack app with React with Nest and Postgres.',
                image: '/images/image.png', 
                link: 'https://react-usr-module-2.vercel.app/',
                tags: ['React', 'Nest.js','Postgres'],
              },
              {
                title: 'Portfolio Site',
                desc: 'This very site, built with modern tools.',
                image: '/path-to-project2.jpg',
                link: '#',
                tags: ['React', 'Tailwind'],
              },
              {
                title: 'Task Manager',
                desc: 'A productivity app with real-time updates.',
                image: '/path-to-project3.jpg',
                link: '#',
                tags: ['Next.js', 'Firebase'],
              },
            ].map((project, index) => (
              <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.1 }}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <a href={project.link} target='_blank' rel="noopener noreferrer"> <ExternalLink className="h-5 w-5 text-primary" /></a>
                    </CardTitle>
                    <CardDescription>{project.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Have a project in mind? I'd love to hear from you.
            </p>
            <Button size="lg" className="mr-4">
              <Mail className="h-5 w-5 mr-2" />
              <ContactDialog />

            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;