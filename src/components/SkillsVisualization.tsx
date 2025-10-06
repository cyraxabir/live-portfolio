import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Terminal,
  Shield,
  GitBranch,
  Database,
  Server,
  Code,
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Skill {
  name: string;
  proficiency: number;
  description?: string;
}

const SkillsVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState("tools");

  const skillCategories: SkillCategory[] = [
    {
      name: "tools",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        {
          name: "Burp Suite",
          proficiency: 95,
          description: "Web application security testing",
        },
        {
          name: "Acunetix",
          proficiency: 90,
          description: "Automated vulnerability scanner",
        },
        {
          name: "Nessus",
          proficiency: 90,
          description: "Vulnerability assessment tool",
        },
        {
          name: "Nmap",
          proficiency: 95,
          description: "Network discovery and security auditing",
        },
        {
          name: "OWASP ZAP",
          proficiency: 85,
          description: "Web application security scanner",
        },
        {
          name: "Wazuh SIEM",
          proficiency: 85,
          description: "Security information and event management",
        },
        {
          name: "SonarQube",
          proficiency: 80,
          description: "Code quality and security analysis",
        },
        {
          name: "ELK Stack",
          proficiency: 85,
          description: "Elasticsearch, Logstash, and Kibana",
        },
        {
          name: "Grafana",
          proficiency: 80,
          description: "Monitoring and observability",
        },
        {
          name: "Prometheus",
          proficiency: 75,
          description: "Systems monitoring and alerting",
        },
      ],
    },
    {
      name: "security",
      icon: <Shield className="h-5 w-5" />,
      skills: [
        {
          name: "VAPT (Web/API/Mobile)",
          proficiency: 95,
          description: "Vulnerability Assessment & Penetration Testing",
        },
        {
          name: "OWASP Top 10",
          proficiency: 95,
          description: "Web application security standards",
        },
        {
          name: "SOC Analysis",
          proficiency: 90,
          description: "Security Operations Center analysis",
        },
        {
          name: "Threat Intelligence",
          proficiency: 85,
          description: "Cyber threat analysis and response",
        },
        {
          name: "Kubernetes Security",
          proficiency: 85,
          description: "Container orchestration security",
        },
        {
          name: "WAF Configuration",
          proficiency: 80,
          description: "Web Application Firewall setup",
        },
        {
          name: "VPN Management",
          proficiency: 85,
          description: "Virtual Private Network administration",
        },
        {
          name: "OAuth 2.0 (Keycloak)",
          proficiency: 80,
          description: "Identity and access management",
        },
      ],
    },
    {
      name: "infrastructure",
      icon: <Server className="h-5 w-5" />,
      skills: [
        {
          name: "Nginx",
          proficiency: 90,
          description: "Web server and reverse proxy",
        },
        {
          name: "HAProxy",
          proficiency: 85,
          description: "Load balancer and proxy server",
        },
        {
          name: "Cloudflare",
          proficiency: 85,
          description: "CDN and security services",
        },
        {
          name: "Docker",
          proficiency: 90,
          description: "Container orchestration and deployment",
        },
        {
          name: "Kubernetes",
          proficiency: 85,
          description: "Container orchestration at scale",
        },
        {
          name: "OpenShift",
          proficiency: 75,
          description: "Enterprise Kubernetes platform",
        },
        {
          name: "VMware",
          proficiency: 80,
          description: "Virtualization platform",
        },
        {
          name: "Proxmox",
          proficiency: 75,
          description: "Open-source virtualization management",
        },
      ],
    },
    {
      name: "databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        {
          name: "MongoDB",
          proficiency: 85,
          description: "NoSQL document database",
        },
        {
          name: "CouchDB",
          proficiency: 75,
          description: "Document-oriented NoSQL database",
        },
        {
          name: "MySQL",
          proficiency: 80,
          description: "Relational database management",
        },
        {
          name: "PostgreSQL",
          proficiency: 80,
          description: "Advanced relational database",
        },
        {
          name: "Database Security",
          proficiency: 85,
          description: "Securing database systems",
        },
      ],
    },
    {
      name: "operating-systems",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        {
          name: "Kali Linux",
          proficiency: 95,
          description: "Penetration testing distribution",
        },
        {
          name: "Red Hat",
          proficiency: 85,
          description: "Enterprise Linux distribution",
        },
        {
          name: "Parrot OS",
          proficiency: 90,
          description: "Security-focused operating system",
        },
        {
          name: "Linux Administration",
          proficiency: 90,
          description: "System administration and hardening",
        },
      ],
    },
    {
      name: "programming",
      icon: <Code className="h-5 w-5" />,
      skills: [
        {
          name: "Python",
          proficiency: 90,
          description: "Automation and scripting",
        },
        {
          name: "Bash",
          proficiency: 85,
          description: "Shell scripting and automation",
        },
        {
          name: "AI Automation",
          proficiency: 80,
          description: "Co-pilot, n8n workflow automation",
        },
        {
          name: "Embedded Systems",
          proficiency: 70,
          description: "Hardware programming and IoT",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-12 bg-background" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My comprehensive skill set in cybersecurity, DevSecOps tools, and technologies
            developed through hands-on experience in high-impact projects.
          </p>
        </div>

        <Tabs
          defaultValue="tools"
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  {category.icon}
                  <span className="capitalize hidden sm:inline">
                    {category.name.replace('-', ' ')}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name}
              className="mt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in-50 duration-500">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="animate-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex justify-between items-center">
                          <span>{skill.name}</span>
                          <span className="text-sm font-normal text-primary">
                            {skill.proficiency}%
                          </span>
                        </CardTitle>
                        {skill.description && (
                          <CardDescription className="text-xs">
                            {skill.description}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="h-2 w-full mt-1">
                          <Progress
                            value={skill.proficiency}
                            className="h-2 w-full"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default SkillsVisualization;