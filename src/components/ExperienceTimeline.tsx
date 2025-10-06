import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  Building2,
  Award,
} from "lucide-react";

interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
  expanded?: boolean;
}

interface ExperienceTimelineProps {
  experiences?: TimelineEntry[];
  certifications?: TimelineEntry[];
}

const ExperienceTimeline = ({
  experiences = [
    {
      id: "1",
      title: "Associate Cybersecurity Engineer",
      organization: "Business Automation (High Tech Park, Rajshahi)",
      startDate: "2023-01",
      endDate: "Present",
      description:
        "Leading high-impact national, government and international projects security and infrastructure management. Conducting VAPT on BD Government projects including Hajj, Mutation/Land, BIDA, SDG. Managing SOC operations, threat intelligence, and collaborating with HPE team for international deployments. Maintaining high-traffic load balancers (millions/day), cloud architecture, and implementing DevSecOps practices with CI/CD pipeline management.",
      skills: [
        "VAPT", "SOC Analysis", "Threat Intelligence", "Load Balancer Security", 
        "Cloud Security", "DevSecOps", "CI/CD", "MLOps", "AI Integration",
        "Burp Suite", "Acunetix", "Nessus", "OWASP", "Kubernetes Security"
      ],
      expanded: false,
    },
    {
      id: "2",
      title: "Web Security Intern",
      organization: "Web Security",
      startDate: "2022-01",
      endDate: "2022-12",
      description:
        "Gained hands-on experience in web application security testing and vulnerability assessment. Participated in bug bounty programs and achieved certification in Cybersecurity Ethical Hacking. Developed foundational skills in penetration testing methodologies and security tools.",
      skills: ["Web Security", "Penetration Testing", "Bug Bounty", "Ethical Hacking", "OWASP Top 10"],
      expanded: false,
    },
    {
      id: "3",
      title: "Data Science & Machine Learning Certification",
      organization: "Sotyan Bose Science Club, BUET",
      startDate: "2020-01",
      endDate: "2020-12",
      description:
        "Completed comprehensive training in data science and machine learning. Worked on large datasets, trained various ML models, and completed multiple machine learning projects. Gained expertise in data engineering and model deployment practices.",
      skills: ["Python", "Machine Learning", "Data Engineering", "Model Training", "Large Datasets"],
      expanded: false,
    },
  ],
  certifications = [
    {
      id: "cert1",
      title: "Cybersecurity Ethical Hacking",
      organization: "Professional Certification",
      startDate: "2022-01",
      endDate: "Present",
      description:
        "Advanced certification in ethical hacking methodologies, penetration testing, and vulnerability assessment. Covers comprehensive security testing approaches for web applications, APIs, and mobile applications.",
      expanded: false,
    },
    {
      id: "cert2",
      title: "NASA Space App Challenge Participant",
      organization: "NASA",
      startDate: "2018-01",
      endDate: "2018-12",
      description:
        "Participated in NASA Space App Challenge 2018, working on real-life problem solving using large space data from NASA. Developed 'Wildfires Detection & Prediction' project utilizing satellite data and machine learning algorithms.",
      expanded: false,
    },
  ],
}: ExperienceTimelineProps) => {
  const [activeTab, setActiveTab] = useState("experience");
  const [expandedEntries, setExpandedEntries] = useState<
    Record<string, boolean>
  >({});

  // Animation variants for timeline entries
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const toggleExpand = (id: string) => {
    setExpandedEntries((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Initialize expanded state from props
  useEffect(() => {
    const initialState: Record<string, boolean> = {};

    experiences.forEach((exp) => {
      initialState[exp.id] = exp.expanded || false;
    });

    certifications.forEach((cert) => {
      initialState[cert.id] = cert.expanded || false;
    });

    setExpandedEntries(initialState);
  }, [experiences, certifications]);

  const renderTimelineEntry = (entry: TimelineEntry, index: number) => {
    const isExpanded = expandedEntries[entry.id] || false;

    return (
      <motion.div
        key={entry.id}
        variants={itemVariants}
        className="relative pl-8 pb-8 border-l border-primary/30 last:border-l-transparent"
      >
        <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl text-primary">
                  {entry.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                  {activeTab === "experience" ? (
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Award className="h-4 w-4 text-muted-foreground" />
                  )}
                  {entry.organization}
                </CardDescription>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {formatDate(entry.startDate)} - {formatDate(entry.endDate)}
                  </span>
                </div>
                <button
                  onClick={() => toggleExpand(entry.id)}
                  className="mt-2 text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                >
                  {isExpanded ? (
                    <>
                      <span>Less</span>
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span>More</span>
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div
              className={`transition-all duration-300 ${isExpanded ? "max-h-96" : "max-h-16 overflow-hidden"}`}
            >
              <p className="text-sm text-foreground/80">{entry.description}</p>

              {entry.skills && entry.skills.length > 0 && (
                <div
                  className={`flex flex-wrap gap-2 mt-4 ${!isExpanded ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                >
                  {entry.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  // Helper function to format dates
  const formatDate = (dateString: string): string => {
    if (dateString === "Present") return "Present";

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 bg-background">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Professional Journey
      </h2>

      <Tabs
        defaultValue="experience"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger
              value="experience"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Work Experience
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Certifications
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="experience" className="mt-0">
          <motion.div
            className="space-y-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experiences.map((exp, index) => renderTimelineEntry(exp, index))}
          </motion.div>
        </TabsContent>

        <TabsContent value="certifications" className="mt-0">
          <motion.div
            className="space-y-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((cert, index) =>
              renderTimelineEntry(cert, index),
            )}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExperienceTimeline;