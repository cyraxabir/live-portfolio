import React from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Code, ChevronDown, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectShowcase from "./ProjectShowcase";
import SkillsVisualization from "./SkillsVisualization";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-green-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-green-500" />
            <span className="text-xl font-mono font-bold">Nafiul Hafiz</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button
            variant="outline"
            className="md:hidden border-green-500 text-green-500"
          >
            <Terminal className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block p-2 bg-green-500/10 rounded-lg mb-4">
              <Terminal className="h-8 w-8 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-green-500">$</span> DevSecOps Engineer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Securing pipelines, automating deployments, and building resilient
              infrastructure
            </p>
            <div className="flex justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                View Projects
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-green-500" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-green-500">~/</span> About Me
              </h2>

              {/* Profile Image */}
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="relative">
                  <img
                    src="/images/casual.jpg"
                    alt="Nafiul Hafiz"
                    className="w-48 h-48 rounded-full object-cover border-4 border-green-500/30 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-green-500/10"></div>
                </div>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a DevSecOps Engineer with expertise in building secure,
                  automated CI/CD pipelines and infrastructure. With a
                  background in both development and security, I bridge the gap
                  between rapid delivery and robust protection.
                </p>
                <p>
                  My approach integrates security at every stage of the
                  development lifecycle, ensuring that applications are not only
                  delivered quickly but also with confidence in their security
                  posture.
                </p>
                <p>
                  When I'm not securing pipelines, you'll find me contributing
                  to open source security tools, participating in CTF
                  competitions, and staying current with the latest in cloud
                  security practices.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500/10"
                >
                  <Code className="mr-2 h-4 w-4" /> Tech Stack
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500/10"
                >
                  <Shield className="mr-2 h-4 w-4" /> Security Focus
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="bg-black p-6 rounded-lg border border-green-500/20 font-mono">
                <div className="flex items-center mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-400 text-sm">terminal</span>
                </div>
                <div className="text-green-500">
                  <p className="mb-2">$ whoami</p>
                  <p className="text-white mb-4">
                    Nafiul Hafiz | DevSecOps Engineer
                  </p>

                  <p className="mb-2">$ cat skills.txt</p>
                  <p className="text-white mb-4">
                    Kubernetes | Docker | AWS | infrastructure | CI/CD | SOC |
                    Security Automation
                  </p>

                  <p className="mb-2">$ uptime</p>
                  <p className="text-white mb-4">
                    2+ years in DevOps and Cybersecurity
                  </p>

                  <p className="mb-2">$ ping -c 1 availability</p>
                  <p className="text-white mb-4">
                    PING availability: 56 data bytes
                  </p>
                  <p className="text-white mb-4">
                    64 bytes from availability: icmp_seq=1 ttl=64 time=0.1 ms
                  </p>
                  <p className="text-white">
                    Ready for new challenges and opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-500">~/</span> Experience &
            Certifications
          </h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-500">~/</span> Project Showcase
          </h2>
          <ProjectShowcase />
        </div>
      </section>

      {/* Skills Visualization Section */}
      <section id="skills" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-500">~/</span> Skills & Expertise
          </h2>
          <SkillsVisualization />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-green-500">~/</span> Get In Touch
          </h2>
          <Card className="bg-black border border-green-500/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4 text-green-500">
                    Contact Information
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p className="flex items-center">
                      <span className="inline-block w-24 text-green-500">
                        Email:
                      </span>
                      contact@devsecops.dev
                    </p>
                    <p className="flex items-center">
                      <span className="inline-block w-24 text-green-500">
                        Location:
                      </span>
                      San Francisco, CA
                    </p>
                    <p className="flex items-center">
                      <span className="inline-block w-24 text-green-500">
                        GitHub:
                      </span>
                      github.com/devsecops
                    </p>
                    <p className="flex items-center">
                      <span className="inline-block w-24 text-green-500">
                        LinkedIn:
                      </span>
                      linkedin.com/in/devsecops
                    </p>
                  </div>
                  <div className="mt-8">
                    <p className="text-gray-300 mb-4">
                      Interested in collaborating or have a question about my
                      work? Fill out the form and I'll get back to you as soon
                      as possible.
                    </p>
                    <div className="flex items-center">
                      <GitBranch className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-green-500">
                        Open to new opportunities
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <ContactForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-green-500/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-green-500" />
              <span className="text-lg font-mono font-bold">Nafiul Hafiz</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} | Designed & Built with Security in
              Mind
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-green-500 hover:text-green-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-green-500 hover:text-green-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-green-500 hover:text-green-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-green-500 hover:text-green-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 15h-2v-6h2v6zm-1-7a1 1 0 100-2 1 1 0 000 2zm8 7h-2v-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v-6h2v1.24c.67-.72 1.62-1.24 2.5-1.24 1.64.01 2.5 1.16 2.5 2.8V17z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
