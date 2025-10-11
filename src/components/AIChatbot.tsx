import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Nafiul's AI assistant. Ask me about his experience, skills, or projects!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("skill") || lowerMessage.includes("tech")) {
      return "Nafiul specializes in DevSecOps with expertise in Cybersecurity, VAPT, Kubernetes, Docker, CI/CD, AWS, Secure Infrastucture and Security Automation. He has 2+ years of experience in DevOps and Cybersecurity.";
    } else if (lowerMessage.includes("experience") || lowerMessage.includes("work")) {
      return "Nafiul has 2+ years of experience in DevOps and Cybersecurity. He focuses on building secure, automated CI/CD pipelines and infrastructure. Check out the Experience section for detailed timeline!";
    } else if (lowerMessage.includes("project")) {
      return "Nafiul has worked on various security implementations and CI/CD pipeline projects. You can explore detailed case studies in the Projects section of this portfolio!";
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("email")) {
      return "You can reach Nafiul at hafiz15-5760@diu.edu.bd or fill out the contact form at the bottom of the page. He's open to new opportunities!";
    } else if (lowerMessage.includes("location") || lowerMessage.includes("where")) {
      return "Nafiul is based in HIGH-TECH Park, Rajshahi and is open to remote opportunities.";
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! How can I help you learn more about Nafiul's DevSecOps expertise?";
    } else if (lowerMessage.includes("hobby") || lowerMessage.includes("hobbies")) {
      return "He loves football, badminton, and gaming. He’s always up for new adventures and enjoys travelling to explore different cultures and experiences!";
    } else if (lowerMessage.includes("project")) {
      return "Nafiul has worked on various high-impact projects including: SOC operations management, OWASP Dependency Tracker, VAPT assessments for BD Government projects (Hajj, Mutation/Land, BIDA, SDG), MinIO multinode cluster deployment. Check out the Projects section for detailed case studies!";
    } else if (lowerMessage.includes("soc") || lowerMessage.includes("threat")) {
      return "Nafiul manages SOC (Security Operations Center) operations with 90% proficiency. He handles threat intelligence, incident response, security event analysis, and uses SIEM tools like Wazuh. He monitors security alerts, investigates incidents, and implements threat mitigation strategies.";
    } else if (lowerMessage.includes("devops") || lowerMessage.includes("infrastructure") || lowerMessage.includes("kubernetes") || lowerMessage.includes("docker")) {
      return "Nafiul has strong DevSecOps expertise with proficiency in Docker, Kubernetes and experience with OpenShift. He manages high-traffic load balancers (millions/day), implements CI/CD pipelines, and has deployed MinIO multinode clusters, Kafka CDC pipelines, and comprehensive monitoring with Prometheus/Grafana.";
    } else if (lowerMessage.includes("security") || lowerMessage.includes("vapt") || lowerMessage.includes("penetration")) {
      return "Nafiul specializes in VAPT (Vulnerability Assessment & Penetration Testing) for web, API, and mobile applications. He's an expert in SOC Analysis, Threat Intelligence, and uses tools like Burp Suite, Acunetix, Nessus, and OWASP ZAP. He conducts security assessments for government projects and manages SOC operations.";
    } else if (lowerMessage.includes("cert") || lowerMessage.includes("qualification")) {
      return "Nafiul holds certifications in Cybersecurity Ethical Hacking and has completed Data Science & ML certification at BUET (2020). He's also a NASA Space App Challenge participant and has extensive hands-on experience in DevSecOps and security operations.";
    } else {
      return "That's a great question! For more detailed information, feel free to explore the different sections of the portfolio or reach out via the contact form.";
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/50"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="bg-black border-2 border-green-500/30 shadow-2xl shadow-green-500/20 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-white" />
                  <span className="font-mono font-bold text-white">
                    AI Assistant
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-800"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-900">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                          message.sender === "user"
                            ? "bg-green-600"
                            : "bg-gray-700 border border-green-500/30"
                        }`}
                      >
                        {message.sender === "user" ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-green-500" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.sender === "user"
                            ? "bg-green-600 text-white"
                            : "bg-gray-800 text-gray-100 border border-green-500/20"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-gray-700 border border-green-500/30">
                        <Bot className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="rounded-lg p-3 bg-gray-800 border border-green-500/20">
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 bg-green-500 rounded-full animate-bounce"></div>
                          <div className="h-2 w-2 bg-green-500 rounded-full animate-bounce delay-100"></div>
                          <div className="h-2 w-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 bg-black border-t border-green-500/30">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="bg-gray-900 border-green-500/30 text-white placeholder:text-gray-500 focus:border-green-500"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
