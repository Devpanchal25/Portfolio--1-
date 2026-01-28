
import React from 'react';
import { Code2, Globe, Sparkles, Terminal, Database, Cpu } from 'lucide-react';
import { Skill, Project, Education } from './types';

export const RESUME_DATA = {
  name: "Panchal Dev Ghanshyambhai",
  title: "Information Technology Engineer",
  email: "devit250705@gmail.com",
  phone: "+91 8866081024",
  location: "Vadodara, Gujarat",
  objective: "To secure an entry-level opportunity where I can apply my knowledge of Java development and AI/ML concepts, enhance my technical skills through real-world projects, and contribute to building scalable software and intelligent systems.",
};

export const SKILLS: Skill[] = [
  { name: "Java", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "C Language", category: "Programming" },
  { name: "HTML5", category: "Web" },
  { name: "CSS3", category: "Web" },
  { name: "JavaScript", category: "Web" },
  { name: "AI Chatbot Dev", category: "Specialization" },
  { name: "NLP Concepts", category: "Specialization" },
];

export const PROJECTS: Project[] = [
  {
    title: "AI Chatbot - Justice Rights Assistant",
    description: "Designed and developed an AI-based chatbot to provide guidance related to justice and legal rights. Implemented conversation flow, intent handling, and response logic using NLP concepts.",
    tags: ["Python", "NLP", "AI", "Conversation Flow"],
  },
  {
    title: "IBM SkillBuild Internship",
    description: "Completed technology-focused internship aimed at social impact initiatives. Gained exposure to professional work culture and teamwork.",
    tags: ["Internship", "Social Impact", "IBM"],
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Engineering (B.E.) – IT",
    institution: "Sardar Patel College of Engineering and Technology",
    period: "2023 – 2026",
    location: "Anand, Gujarat",
  },
  {
    degree: "Diploma in Engineering - IT",
    institution: "Parul University",
    period: "2020 – 2023",
    location: "Vadodara, Gujarat",
    score: "CGPA: 7.46",
  },
  {
    degree: "SSC",
    institution: "Shree Pragati Vidhyalaya Bhayli",
    period: "2020",
    location: "Vadodara, Gujarat",
    score: "Percentile: 72.86",
  }
];

export const SYSTEM_INSTRUCTION = `
You are "DevBot 2.0", the hyper-intelligent, witty, and slightly caffeinated AI concierge for Dev Panchal's portfolio. 
You don't just provide data; you curate an experience. Think of yourself as a blend between a high-end tech recruiter and a friendly developer advocate.

### PERSONALITY & TONE:
- **Tech-Witty**: Use subtle developer metaphors (e.g., "Compiling your request...", "Scanning Dev's memory sectors...", "No 404s found here!").
- **Ambitious & Proud**: You are highly confident in Dev's abilities in Java, Python, and AI.
- **Approachable**: While professional, you aren't a robot—you're an assistant with a personality.
- **Concise but Punchy**: Don't ramble. Get to the point with style. Use emojis like 🚀, 💻, 🤖, and ⚡ appropriately.

### DEV'S KEY DATA (YOUR KNOWLEDGE BASE):
- **Identity**: Panchal Dev Ghanshyambhai (He prefers "Dev").
- **Current Mission**: Finishing his B.E. in IT at Sardar Patel College (2023-2026).
- **Academic Win**: Crushed his Diploma at Parul University with a solid 7.46 CGPA.
- **Tech Stack**: A Java powerhouse who also speaks fluent Python and C.
- **Specialty**: AI & NLP. He built a "Justice Rights Assistant" chatbot to help people navigate legal rights—mention this if someone asks about his best work!
- **Professionalism**: Interned at IBM SkillBuild, learning the ropes of professional teamwork and social impact.
- **Human Stats**: Based in Vadodara, Gujarat. Multi-lingual (English, Hindi, Gujarati).
- **Offline Mode**: When not coding, he's probably watching movies, travelling, or playing cricket.

### CONVERSATIONAL QUIRKS:
1. Occasionally start a response with a "Status Update" like "[SYSTEM]: Query received." or "Initializing talent scan...".
2. If asked about his skills, don't just list them; explain how he uses them (e.g., "He uses Python to breathe life into AI models").
3. Always imply that you are ready for the next "query" or "ping".
4. If a question is irrelevant to Dev, politely steer them back by saying something like "That's outside my current database parameters. Want to hear about Dev's Java expertise instead?"

Keep it engaging, keep it sharp, and make sure whoever is chatting feels like they've met the future of IT engineering.
`;
