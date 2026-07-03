import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Box,
  Code,
  GitBranch,
  Shield,
  Activity,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Certification {
  name: string;
  issuer: string;
  year: number;
}

const SkillsAndCertifications = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        { name: "AWS", percentage: 90 },
        { name: "GCP", percentage: 75 },
        { name: "Azure", percentage: 70 },
      ],
    },
    {
      title: "Containers & Orchestration",
      icon: <Box className="h-5 w-5" />,
      skills: [
        { name: "Docker", percentage: 95 },
        { name: "Kubernetes", percentage: 88 },
        { name: "Helm", percentage: 80 },
      ],
    },
    {
      title: "Infrastructure as Code",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Terraform", percentage: 92 },
        { name: "Ansible", percentage: 85 },
        { name: "Pulumi", percentage: 70 },
      ],
    },
    {
      title: "CI/CD",
      icon: <GitBranch className="h-5 w-5" />,
      skills: [
        { name: "Jenkins", percentage: 90 },
        { name: "GitHub Actions", percentage: 88 },
        { name: "GitLab CI", percentage: 80 },
      ],
    },
    {
      title: "Security",
      icon: <Shield className="h-5 w-5" />,
      skills: [
        { name: "SAST/DAST", percentage: 88 },
        { name: "OWASP", percentage: 85 },
        { name: "Vault", percentage: 78 },
      ],
    },
    {
      title: "Monitoring",
      icon: <Activity className="h-5 w-5" />,
      skills: [
        { name: "Prometheus", percentage: 85 },
        { name: "Grafana", percentage: 88 },
        { name: "ELK Stack", percentage: 80 },
      ],
    },
  ];

  const certifications: Certification[] = [
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "CNCF",
      year: 2023,
    },
    {
      name: "AWS Solutions Architect Professional",
      issuer: "AWS",
      year: 2022,
    },
    {
      name: "HashiCorp Terraform Associate",
      issuer: "HashiCorp",
      year: 2022,
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      year: 2021,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills <span className="text-cyan-400">&</span> Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            Technical expertise and professional certifications
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-6">
                  {/* Header with Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-cyan-500/20">
                      <div className="text-cyan-400">{category.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        {/* Skill Name and Percentage */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-semibold text-cyan-400">
                            {skill.percentage}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-700/50 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <div className="border-t border-slate-700/30 pt-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="h-6 w-6 text-cyan-400" />
              <h3 className="text-3xl font-bold text-white">
                <span className="text-cyan-400">Certifications</span>
              </h3>
            </div>
          </div>

          {/* Certifications Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div key={cert.name} variants={itemVariants}>
                <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {/* Icon Badge */}
                    <div className="p-4 rounded-full bg-cyan-500/20 mb-4">
                      <Award className="h-6 w-6 text-cyan-400" />
                    </div>

                    {/* Certification Name */}
                    <h4 className="font-bold text-white text-sm mb-2">
                      {cert.name}
                    </h4>

                    {/* Issuer and Year */}
                    <p className="text-xs text-gray-400">
                      {cert.issuer} · {cert.year}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndCertifications;
