export interface Person {
  id: string;
  name: string;
  bio: string;
  email: string;
  phone: string;
  profileImage: string;
  education: string;
  skills: string;
  hobbies: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  projects: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
  achievements: {
    id: string;
    title: string;
    description: string;
    image: string;
  }[];
  activities: {
    id: string;
    caption: string;
    image: string;
  }[];
}

export const portfolioData: Record<string, Person> = {
  "seanella-rose-cuenco": {
    id: "seanella-rose-cuenco",
    name: "Seanella Rose V. Cuenco",
    bio: "Passionate creative professional dedicated to bringing innovative ideas to life through design and technology.",
    email: "seanella.cuenco@example.com",
    phone: "+1 (555) 123-4567",
    profileImage: "https://i.postimg.cc/zGS1Y0B9/seya.jpg",
    education:
      "Bachelor of Science in Computer Science, University Name, 2024",
    skills:
      "Web Development, UI/UX Design, JavaScript, React, Figma",
    hobbies: "Photography, Reading, Traveling, Music",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    projects: [
      {
        id: "p1",
        title: "E-Commerce Platform",
        description:
          "A modern online shopping platform with advanced filtering and seamless checkout experience.",
        image:
          "https://images.unsplash.com/photo-1532072983668-720aad098512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "p2",
        title: "Portfolio Website",
        description:
          "Minimalist portfolio showcasing creative work with smooth animations and responsive design.",
        image:
          "https://images.unsplash.com/photo-1700451761309-656bd9439443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "p3",
        title: "Mobile App Design",
        description:
          "User-centric mobile application with intuitive navigation and modern interface.",
        image:
          "https://images.unsplash.com/photo-1532072983668-720aad098512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
    achievements: [
      {
        id: "a1",
        title: "Best Web Design Award",
        description:
          "Received recognition for outstanding web design and user experience in 2024.",
        image:
          "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "a2",
        title: "Developer Certification",
        description:
          "Certified in Advanced React and Modern Web Development Practices.",
        image:
          "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
    activities: Array.from({ length: 30 }, (_, i) => ({
      id: `activity-${i + 1}`,
      caption: `Activity ${i + 1} - Capturing memorable moments and creative endeavors`,
      image:
        "https://images.unsplash.com/photo-1700451761309-656bd9439443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    })),
  },
  "froilan-johanan-balanon": {
    id: "froilan-johanan-balanon",
    name: "Froilan Johanan A. Balanon",
    bio: "Innovative developer with a passion for creating scalable solutions and exceptional user experiences.",
    email: "froilan.balanon@example.com",
    phone: "+1 (555) 234-5678",
    profileImage: "https://i.postimg.cc/7YwFMSmw/yuhan.jpg",
    education:
      "Bachelor of Science in Information Technology, University Name, 2024",
    skills:
      "Full-Stack Development, Python, Node.js, Database Design, Cloud Computing",
    hobbies: "Gaming, Coding, Tech Blogging, Hiking",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    projects: [
      {
        id: "p1",
        title: "Task Management System",
        description:
          "Collaborative platform for team productivity with real-time updates and analytics.",
        image:
          "https://images.unsplash.com/photo-1532072983668-720aad098512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "p2",
        title: "API Gateway",
        description:
          "Robust API management system with authentication and rate limiting capabilities.",
        image:
          "https://images.unsplash.com/photo-1700451761309-656bd9439443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "p3",
        title: "Dashboard Analytics",
        description:
          "Data visualization dashboard with interactive charts and real-time insights.",
        image:
          "https://images.unsplash.com/photo-1532072983668-720aad098512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
    achievements: [
      {
        id: "a1",
        title: "Hackathon Winner",
        description:
          "First place in National Tech Hackathon 2024 for innovative solution.",
        image:
          "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "a2",
        title: "Cloud Architect Certification",
        description:
          "AWS Certified Solutions Architect - Professional Level.",
        image:
          "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
    activities: Array.from({ length: 30 }, (_, i) => ({
      id: `activity-${i + 1}`,
      caption: `Activity ${i + 1} - Professional development and creative pursuits`,
      image:
        "https://images.unsplash.com/photo-1700451761309-656bd9439443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    })),
  },
  "joecel-hann-labosta": {
    id: "joecel-hann-labosta",
    name: "Joecel Hann R. Labosta",
    bio: "Creative designer and developer focused on crafting beautiful digital experiences that inspire and engage.",
    email: "joecel.labosta@example.com",
    phone: "+1 (555) 345-6789",
    profileImage: "https://i.postimg.cc/x1tnb62P/joecell.jpg",
    education:
      "Bachelor of Arts in Digital Media, University Name, 2024",
    skills:
      "Graphic Design, Animation, Video Editing, 3D Modeling, Adobe Creative Suite",
    hobbies: "Photography, Digital Art, Film Making, Travel",
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    projects: [
      {
        id: "p1",
        title: "Brand Identity Design",
        description:
          "Complete brand identity package including logo, colors, and marketing materials.",
        image:
          "https://images.unsplash.com/photo-1532072983668-720aad098512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "p2",
        title: "Motion Graphics Project",
        description:
          "Dynamic motion graphics for social media campaigns and advertisements.",
        image:
          "https://images.unsplash.com/photo-1700451761309-656bd9439443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "p3",
        title: "Website Redesign",
        description:
          "Modern redesign of corporate website with focus on user experience.",
        image:
          "https://images.unsplash.com/photo-1532072983668-720aad098512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
    achievements: [
      {
        id: "a1",
        title: "Design Excellence Award",
        description:
          "Recognized for exceptional design work in digital media category.",
        image:
          "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "a2",
        title: "Adobe Certified Expert",
        description:
          "Advanced certification in Adobe Creative Cloud applications.",
        image:
          "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
    activities: Array.from({ length: 30 }, (_, i) => ({
      id: `activity-${i + 1}`,
      caption: `Activity ${i + 1} - Creative exploration and design projects`,
      image:
        "https://images.unsplash.com/photo-1700451761309-656bd9439443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    })),
  },
  "curein-paul-tegan": {
    id: "curein-paul-tegan",
    name: "Curein Paul W. Tegan",
    bio: "Technology enthusiast dedicated to solving complex problems through code and creative thinking.",
    email: "curein.tegan@example.com",
    phone: "+1 (555) 456-7890",
    profileImage: "https://i.postimg.cc/L69WZ28F/paul.jpg",
    education:
      "Bachelor of Science in Software Engineering, University Name, 2024",
    skills:
      "Software Architecture, Java, C++, Machine Learning, Data Structures",
    hobbies: "Chess, Reading Sci-Fi, Robotics, Cycling",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    projects: [
      {
        id: "p1",
        title: "Machine Learning Model",
        description:
          "Predictive analytics model for business forecasting with 95% accuracy.",
        image:
          "https://images.unsplash.com/photo-1532072983668-720aad098512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "p2",
        title: "Inventory System",
        description:
          "Automated inventory management system with barcode scanning integration.",
        image:
          "https://images.unsplash.com/photo-1700451761309-656bd9439443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "p3",
        title: "Mobile Payment App",
        description:
          "Secure mobile payment application with biometric authentication.",
        image:
          "https://images.unsplash.com/photo-1532072983668-720aad098512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
    achievements: [
      {
        id: "a1",
        title: "Programming Competition Award",
        description:
          "Gold medal in International Collegiate Programming Contest.",
        image:
          "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "a2",
        title: "Research Publication",
        description:
          "Published paper on optimization algorithms in IEEE conference.",
        image:
          "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
    activities: Array.from({ length: 30 }, (_, i) => ({
      id: `activity-${i + 1}`,
      caption: `Activity ${i + 1} - Technical workshops and innovation projects`,
      image:
        "https://images.unsplash.com/photo-1700451761309-656bd9439443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    })),
  },
  "mc-criyun-pagnas": {
    id: "mc-criyun-pagnas",
    name: "Mc Criyun V. Pagnas",
    bio: "Dynamic professional combining technical expertise with creative vision to deliver impactful solutions.",
    email: "mc.pagnas@example.com",
    phone: "+1 (555) 567-8901",
    profileImage: "https://i.postimg.cc/wMHG2d5v/maki.jpg",
    education:
      "Bachelor of Science in Computer Science, University Name, 2024",
    skills:
      "Web Development, Mobile Apps, Database Design, UI/UX, Project Management",
    hobbies: "Music Production, Fitness, Basketball, Traveling",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    projects: [
      {
        id: "p1",
        title: "Social Network Platform",
        description:
          "Community-driven social platform with real-time messaging and content sharing.",
        image:
          "https://images.unsplash.com/photo-1532072983668-720aad098512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "p2",
        title: "Fitness Tracking App",
        description:
          "Mobile application for tracking workouts and nutrition with AI recommendations.",
        image:
          "https://images.unsplash.com/photo-1700451761309-656bd9439443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "p3",
        title: "Content Management System",
        description:
          "Custom CMS solution for enterprise content and workflow management.",
        image:
          "https://images.unsplash.com/photo-1532072983668-720aad098512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
    achievements: [
      {
        id: "a1",
        title: "Innovation Award",
        description:
          "Recognized for innovative approach to solving business challenges.",
        image:
          "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        id: "a2",
        title: "Leadership Certificate",
        description:
          "Completed advanced leadership and project management certification.",
        image:
          "https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
    ],
    activities: Array.from({ length: 30 }, (_, i) => ({
      id: `activity-${i + 1}`,
      caption: `Activity ${i + 1} - Team collaboration and innovative projects`,
      image:
        "https://images.unsplash.com/photo-1700451761309-656bd9439443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    })),
  },
};