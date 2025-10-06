import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Code, GitBranch, Lock, Server, Terminal } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  securityDetails: string;
  cicdDetails: string;
  technologies: string[];
}

const ProjectShowcase = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const categories = ["all", "security", "ci/cd", "infrastructure"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <div className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Projects</h2>
          <p className="text-muted-foreground text-center max-w-2xl mb-8">
            Explore my DevSecOps projects showcasing security implementations
            and CI/CD pipelines
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category === "all" ? "All Projects" : category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-card border-border"
              onClick={() => handleProjectClick(project)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="outline" className="capitalize">
                    {project.category}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          {selectedProject && (
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <Badge variant="outline" className="capitalize">
                    {selectedProject.category}
                  </Badge>
                </div>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-md mb-6"
                />

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Tabs defaultValue="security" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                      value="security"
                      className="flex items-center gap-2"
                    >
                      <Lock className="h-4 w-4" />
                      Security Implementation
                    </TabsTrigger>
                    <TabsTrigger
                      value="cicd"
                      className="flex items-center gap-2"
                    >
                      <GitBranch className="h-4 w-4" />
                      CI/CD Pipeline
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="security" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lock className="h-5 w-5" />
                          Security Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose dark:prose-invert max-w-none">
                          <div className="bg-muted p-4 rounded-md mb-4 flex items-start">
                            <Terminal className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-mono text-sm whitespace-pre-wrap">
                                {selectedProject.securityDetails}
                              </p>
                            </div>
                          </div>

                          <div className="bg-muted p-4 rounded-md">
                            <h4 className="text-sm font-semibold mb-2 flex items-center">
                              <Code className="h-4 w-4 mr-2" />
                              Security Implementation Code Snippet
                            </h4>
                            <pre className="bg-black text-green-400 p-4 rounded-md overflow-x-auto text-xs">
                              <code>{`# Example security configuration
rules:
  - id: secure-headers
    enabled: true
    config:
      X-Frame-Options: DENY
      X-XSS-Protection: 1; mode=block
      Content-Security-Policy: default-src 'self'

# Authentication middleware
auth:
  required: true
  methods:
    - jwt
    - oauth2`}</code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="cicd" className="mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <GitBranch className="h-5 w-5" />
                          CI/CD Pipeline Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose dark:prose-invert max-w-none">
                          <div className="bg-muted p-4 rounded-md mb-4 flex items-start">
                            <Server className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-mono text-sm whitespace-pre-wrap">
                                {selectedProject.cicdDetails}
                              </p>
                            </div>
                          </div>

                          <div className="bg-muted p-4 rounded-md">
                            <h4 className="text-sm font-semibold mb-2 flex items-center">
                              <Code className="h-4 w-4 mr-2" />
                              CI/CD Pipeline Configuration
                            </h4>
                            <pre className="bg-black text-green-400 p-4 rounded-md overflow-x-auto text-xs">
                              <code>{`name: DevSecOps Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run SAST
        run: |
          docker run --rm -v \$(pwd):/src owasp/sonarqube
          
  build-and-deploy:
    needs: security-scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build and push Docker image
        run: |
          docker build -t myapp:latest .
          docker push myapp:latest`}</code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "MinIO Multinode Object Storage",
    description:
      "Deployed and configured a highly available MinIO multinode cluster with comprehensive monitoring, OAuth 2.0 integration, and enterprise security features.",
    category: "infrastructure",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    securityDetails:
      "The MinIO deployment implemented enterprise-grade security:\\n\\n- OAuth 2.0 integration with OIDC providers (Keycloak, Auth0)\\n- TLS encryption for all client and server communications\\n- IAM policies with fine-grained access controls\\n- Bucket-level encryption with KMS integration\\n- Network segmentation and firewall rules\\n- Regular security audits and vulnerability assessments\\n- LDAP/AD integration for user management\\n- Multi-factor authentication enforcement",
    cicdDetails:
      "The deployment pipeline automated the entire infrastructure:\\n\\n- Infrastructure as Code with Terraform/Ansible\\n- Automated cluster provisioning and configuration\\n- Health checks and monitoring setup\\n- Backup and disaster recovery automation\\n- Performance benchmarking and optimization\\n- Automated certificate management and renewal\\n- Configuration drift detection and remediation\\n- Blue-green deployment strategies for updates",
    technologies: [
      "MinIO",
      "Kubernetes",
      "OAuth 2.0",
      "Prometheus",
      "Grafana",
      "Terraform",
      "Ansible",
      "TLS/SSL",
      "OIDC",
      "KMS"
    ],
  },
  {
    id: "2",
    title: "SOC Analyst Security Operations",
    description:
      "Established and operated a Security Operations Center with 24/7 monitoring, incident response, threat hunting, and comprehensive security analytics.",
    category: "security",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    securityDetails:
      "The SOC implementation provided comprehensive security operations:\\n\\n- 24/7 security monitoring and alerting\\n- SIEM integration with multiple data sources\\n- Threat intelligence feeds and correlation\\n- Incident response playbooks and automation\\n- Threat hunting and behavioral analysis\\n- Vulnerability management and remediation\\n- Security metrics and KPI reporting\\n- Compliance monitoring and audit support",
    cicdDetails:
      "The SOC automation and tooling included:\\n\\n- SOAR platform for incident orchestration\\n- Automated threat detection and response\\n- Security tool integration and API automation\\n- Custom dashboard and reporting automation\\n- Incident ticketing and workflow management\\n- Threat intelligence platform integration\\n- Security awareness training automation\\n- Compliance reporting and evidence collection",
    technologies: [
      "Splunk",
      "QRadar",
      "Phantom SOAR",
      "MISP",
      "TheHive",
      "Cortex",
      "ELK Stack",
      "YARA",
      "Suricata",
      "MITRE ATT&CK"
    ],
  },
  {
    id: "3",
    title: "Kafka CDC Data Pipeline",
    description:
      "Implemented a real-time Change Data Capture (CDC) pipeline using Apache Kafka for streaming database changes with security controls and monitoring.",
    category: "infrastructure",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    securityDetails:
      "The Kafka CDC pipeline implemented comprehensive security:\\n\\n- SASL/SCRAM authentication for all clients\\n- TLS encryption for data in transit\\n- ACL-based authorization for topic access\\n- Schema registry with authentication\\n- Data masking for sensitive fields\\n- Audit logging for all data access\\n- Network isolation and firewall rules\\n- Regular security assessments and penetration testing",
    cicdDetails:
      "The CDC pipeline deployment included:\\n\\n- Infrastructure as Code with Terraform\\n- Automated Kafka cluster provisioning\\n- Schema evolution management\\n- Connector deployment automation\\n- Performance monitoring and alerting\\n- Automated backup and recovery\\n- Blue-green deployment for updates\\n- Integration testing automation",
    technologies: [
      "Apache Kafka",
      "Kafka Connect",
      "Debezium",
      "Schema Registry",
      "KSQL",
      "Prometheus",
      "Grafana",
      "Docker",
      "Kubernetes"
    ],
  },
  {
    id: "4",
    title: "OWASP Dependency Tracker",
    description:
      "Deployed and configured OWASP Dependency-Track for continuous monitoring of software supply chain vulnerabilities across multiple projects.",
    category: "security",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    securityDetails:
      "The OWASP Dependency-Track implementation provided:\n\n- Software Bill of Materials (SBOM) generation\n- Continuous vulnerability monitoring\n- Policy-based risk assessment\n- Integration with vulnerability databases\n- Automated security notifications\n- License compliance tracking\n- Supply chain risk analysis\n- API security for integrations",
    cicdDetails:
      "The CI/CD integration included:\n\n- Automated SBOM generation in build pipelines\n- Vulnerability scanning on every commit\n- Policy gates for deployment approval\n- Integration with existing CI/CD tools\n- Automated reporting and dashboards\n- Webhook notifications for critical vulnerabilities\n- Compliance reporting automation\n- Historical trend analysis",
    technologies: [
      "OWASP Dependency-Track",
      "CycloneDX",
      "SPDX",
      "Jenkins",
      "GitLab CI",
      "Docker",
      "PostgreSQL",
      "REST API",
      "LDAP"
    ],
  },
  {
    id: "5",
    title: "Nextcloud Self-Hosted Platform",
    description:
      "Deployed a secure, self-hosted Nextcloud instance with enterprise features, encryption, and comprehensive backup strategies.",
    category: "infrastructure",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    securityDetails:
      "The Nextcloud deployment implemented enterprise security:\n\n- End-to-end encryption for all data\n- LDAP/AD integration for user management\n- Two-factor authentication enforcement\n- Brute force protection and rate limiting\n- File access control and sharing policies\n- Audit logging and monitoring\n- SSL/TLS encryption with HSTS\n- Regular security updates and hardening",
    cicdDetails:
      "The deployment pipeline included:\n\n- Infrastructure as Code with Ansible\n- Automated installation and configuration\n- Database setup and optimization\n- SSL certificate automation with Let's Encrypt\n- Backup and restore automation\n- Performance monitoring setup\n- Update management automation\n- Disaster recovery testing",
    technologies: [
      "Nextcloud",
      "PHP",
      "MySQL",
      "Redis",
      "Apache/Nginx",
      "Let's Encrypt",
      "Ansible",
      "Docker",
      "LDAP"
    ],
  },
  {
    id: "6",
    title: "n8n Workflow Automation",
    description:
      "Implemented n8n workflow automation platform for DevSecOps processes with secure integrations and monitoring capabilities.",
    category: "ci/cd",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    securityDetails:
      "The n8n automation platform security included:\n\n- Encrypted credential storage\n- OAuth 2.0 integration for external services\n- Webhook security with signature validation\n- Network isolation and access controls\n- Audit logging for all workflow executions\n- Secret management integration\n- Role-based access control\n- Regular security assessments",
    cicdDetails:
      "The automation workflows included:\n\n- Incident response automation\n- Security alert processing\n- Compliance reporting automation\n- Infrastructure provisioning triggers\n- Monitoring and alerting workflows\n- Integration with ticketing systems\n- Automated documentation generation\n- Performance metrics collection",
    technologies: [
      "n8n",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "Webhook",
      "OAuth 2.0",
      "REST API"
    ],
  },
  {
    id: "7",
    title: "OpenTelemetry Observability",
    description:
      "Implemented comprehensive observability solution using OpenTelemetry for distributed tracing, metrics, and logging across microservices.",
    category: "infrastructure",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    securityDetails:
      "The OTEL observability implementation secured:\n\n- Encrypted telemetry data transmission\n- Authentication for all collector endpoints\n- Sensitive data filtering and redaction\n- Access controls for observability data\n- Audit trails for data access\n- Compliance with data retention policies\n- Network segmentation for telemetry traffic\n- Regular security reviews of collected data",
    cicdDetails:
      "The observability pipeline included:\n\n- Automated instrumentation deployment\n- Collector configuration management\n- Dashboard and alerting automation\n- Performance baseline establishment\n- SLI/SLO monitoring setup\n- Incident response integration\n- Capacity planning automation\n- Cost optimization monitoring",
    technologies: [
      "OpenTelemetry",
      "Jaeger",
      "Prometheus",
      "Grafana",
      "Elasticsearch",
      "Fluentd",
      "Kubernetes",
      "Docker",
      "Go"
    ],
  },
  {
    id: "8",
    title: "Secure Kubernetes Deployment",
    description:
      "Implemented a secure Kubernetes deployment with Pod Security Policies, Network Policies, and RBAC for a financial services application.",
    category: "security",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    securityDetails:
      "This project focused on hardening a Kubernetes cluster for a financial services application. Key security implementations included:\n\n- Pod Security Policies to restrict container privileges\n- Network Policies for micro-segmentation\n- RBAC with least privilege principles\n- Secret management with HashiCorp Vault\n- Runtime security with Falco\n- Regular vulnerability scanning with Trivy",
    cicdDetails:
      "The CI/CD pipeline was built with GitLab CI and included:\n\n- Automated security scanning with SAST tools\n- Container image scanning before deployment\n- Infrastructure as Code validation\n- Automated testing and deployment\n- Compliance checks and audit logging",
    technologies: [
      "Kubernetes",
      "RBAC",
      "Network Policies",
      "HashiCorp Vault",
      "Falco",
      "Trivy",
      "GitLab CI",
    ],
  },
  {
    id: "9",
    title: "Zero-Trust Pipeline Architecture",
    description:
      "Designed and implemented a zero-trust CI/CD pipeline with comprehensive security controls and verification at each stage.",
    category: "ci/cd",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    securityDetails:
      "The zero-trust pipeline architecture implemented:\n\n- Multi-factor authentication for all pipeline access\n- Signed commits and verification\n- Ephemeral build environments\n- Artifact provenance and attestation\n- Least privilege access controls\n- Comprehensive audit logging",
    cicdDetails:
      "The pipeline was built with GitHub Actions and included:\n\n- Branch protection rules\n- Required code reviews\n- Automated security scanning\n- Dependency verification\n- SLSA Level 3 compliance\n- Automated deployment with approval gates",
    technologies: [
      "GitHub Actions",
      "Sigstore",
      "SLSA",
      "OPA",
      "Artifact Analysis",
      "Policy as Code",
    ],
  },
  {
    id: "10",
    title: "Infrastructure as Code Security",
    description:
      "Developed a secure Infrastructure as Code framework with automated security scanning, policy enforcement, and compliance validation.",
    category: "infrastructure",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
    securityDetails:
      "The IaC security framework included:\n\n- Static analysis of Terraform code\n- Policy as Code with OPA/Rego\n- Automated compliance checks for CIS benchmarks\n- Secret detection and prevention\n- Drift detection\n- Least privilege IAM configurations",
    cicdDetails:
      "The CI/CD pipeline for infrastructure included:\n\n- Pre-commit hooks for local validation\n- Automated plan and apply with approval gates\n- Security scanning with tfsec and checkov\n- Cost estimation\n- Documentation generation\n- State file encryption and secure storage",
    technologies: [
      "Terraform",
      "AWS",
      "OPA/Rego",
      "tfsec",
      "checkov",
      "CIS Benchmarks",
      "GitOps",
    ],
  },
  {
    id: "11",
    title: "Container Security Platform",
    description:
      "Built a comprehensive container security platform with vulnerability scanning, runtime protection, and compliance enforcement.",
    category: "security",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
    securityDetails:
      "The container security platform provided:\n\n- Image vulnerability scanning\n- Base image verification\n- Runtime security monitoring\n- Network segmentation\n- Compliance enforcement\n- Incident response automation",
    cicdDetails:
      "The CI/CD integration included:\n\n- Pre-build security checks\n- In-pipeline vulnerability scanning\n- Automated policy enforcement\n- Build-time secrets management\n- Signed container images\n- Deployment gates based on security posture",
    technologies: [
      "Docker",
      "Trivy",
      "Sysdig Falco",
      "OPA/Gatekeeper",
      "Notary",
      "Clair",
      "Jenkins",
    ],
  },
  {
    id: "12",
    title: "Automated Compliance Pipeline",
    description:
      "Created an automated compliance pipeline that continuously validates infrastructure and applications against regulatory requirements.",
    category: "ci/cd",
    image:
      "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&q=80",
    securityDetails:
      "The compliance automation included:\n\n- Continuous compliance scanning\n- Policy as Code for regulatory requirements\n- Automated evidence collection\n- Compliance reporting\n- Remediation workflows\n- Audit trail generation",
    cicdDetails:
      "The pipeline architecture featured:\n\n- Compliance as Code implementation\n- Automated testing against compliance benchmarks\n- Integration with GRC tools\n- Continuous validation\n- Compliance dashboards\n- Automated documentation generation",
    technologies: [
      "InSpec",
      "Chef Compliance",
      "AWS Config",
      "CloudFormation Guard",
      "Terraform Sentinel",
      "OSCAL",
    ],
  },
  {
    id: "13",
    title: "Cloud Security Posture Management",
    description:
      "Implemented a comprehensive cloud security posture management solution with real-time monitoring, automated remediation, and compliance reporting.",
    category: "infrastructure",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    securityDetails:
      "The CSPM solution provided:\n\n- Multi-cloud security posture assessment\n- Automated remediation for common misconfigurations\n- Compliance mapping to major frameworks\n- Risk scoring and prioritization\n- Continuous monitoring\n- Security drift detection",
    cicdDetails:
      "The implementation pipeline included:\n\n- Infrastructure as Code deployment\n- Automated configuration and integration\n- Continuous validation\n- Alerting and notification setup\n- Dashboard deployment\n- Integration with existing security tools",
    technologies: [
      "AWS Security Hub",
      "Azure Security Center",
      "GCP Security Command Center",
      "Terraform",
      "CloudFormation",
      "Pulumi",
    ],
  },
];

export default ProjectShowcase;