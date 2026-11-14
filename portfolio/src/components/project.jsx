
import React from "react";
import "./CSS/style.css";

// Project Images
import codegenerator from "../assets/Code_generator.jpeg";
import claimsFraud from "../assets/claims_fraud.jpeg";
import clarityVisionImg from "../assets/clairty_vision.jpeg";
import facialEmotionImg from "../assets/face_emotion_detection.jpeg";
import housePriceImg from "../assets/House_price_prediction.jpg";
import portfolioImg from "../assets/portfolio.jpeg";
import safetyDetectionImg from "../assets/safety_detection.jpg";
import snakeGameImg from "../assets/snake_game.png";
import solarSystemImg from "../assets/Solar_System.jpeg";
import todoListImg from "../assets/to_do_list.jpg";
import typingSpeedImg from "../assets/type_writing_speed_test.jpg";
import interviewprep from "../assets/Interview_preparation_platform.jpeg";
import varaikolImg from "../assets/Varaikol.jpeg";


/* ============================================================
   PROJECT DATA
   ============================================================ */

const projects = [
  {
    title: "Varaikol (வரைகோல்)",
    category: "Generative AI / Computer Vision",
    subtitle: "AI-Powered Drawing Assistant",
    image: varaikolImg,

    description:
      "An AI-powered drawing assistant designed to help beginners improve their drawing skills. It combines generative AI, computer vision, and retrieval-augmented generation to generate drawing references, convert photographs into sketches, and provide personalized drawing feedback.",

    tech: [
      "React.js",
      "Python",
      "Flask",
      "PyTorch",
      "Hugging Face",
      "SigLIP",
      "OpenCV",
      "LangChain",
      "ChromaDB",
      "Stability AI API"
    ],

    features: [
      {
      
        title: "What Can I Draw",
        description:
          "Generates three drawing reference images at Easy, Medium, and Hard difficulty levels based on user prompts.",
        type: "Drawing Generation"
      },
      {
        
        title: "Photo to Sketch",
        description:
          "Converts uploaded photographs into pencil-style outline sketches using image processing techniques.",
        type: "Image Processing"
      },
      {
      
        title: "Analyze Drawing",
        description:
          "Uses a custom-trained SigLIP model and a RAG-based knowledge base to analyze drawings and provide personalized feedback.",
        type: "Image Analysis"
      }
    ],

    github: "https://github.com/VethikaV/Varaikol.git"
  },

  {
    title: "Code Generator RAG",
    category: "LLM & RAG Based",
    subtitle: "Retrieval-Augmented Code Generation",

    image: codegenerator,

    description:
      "A code generation application that combines large language models with retrieval-augmented generation to generate code based on relevant contextual information retrieved from a knowledge base.",

    tech: [
      "Python",
      "Streamlit",
      "LangChain",
      "ChromaDB",
      "LLama 3",
      "RAG",
      "Langsmith"
    ],

    features: [
      {
    
        title: "Code Generation",
        description:
          "Generates code based on user-provided requirements and prompts.",
        type: "AI Generation"
      },
      {
  
        title: "Context Retrieval",
        description:
          "Retrieves relevant information from the knowledge base to provide context-aware responses.",
        type: "RAG"
      },
      {
      title: "Interactive Interface",
      description:
      "Built an interactive Streamlit interface that allows users to submit prompts and view AI-generated code.",
       type: "Application"
       }
    ],

    github: "https://github.com/VethikaV/Code_Generator_RAG"
  },

  {
    title: "Clarity Vision",
    category: "AI / Medical Image Analysis",
    subtitle: "AI-Based Medical Image and Report Analysis",

    image: clarityVisionImg,

    description:
      "An AI-based healthcare application focused on blood cell image analysis, autoimmune identification, and medical report processing. It combines computer vision and OCR-based text extraction to support medical data analysis.",

    tech: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "OCR",
      "XGBoost",
      "Random Forest",
      "Data Transformation"
    ],

    features: [
      {
        title: "Blood Cell Analysis",
        description:
          "Analyzes blood cell images to support blood-related cancer detection.",
        type: "Image Classification"
      },
      {
        title: "ANA Identification",
        description:
          "Supports the identification of antinuclear antibody patterns for autoimmune analysis.",
        type: "Medical AI"
      },
      {
        title: "Medical Report Processing",
        description:
          "Extracts text from medical reports using OCR and supports multilingual translation.",
        type: "OCR"
      }
    ],

    github: "https://github.com/VethikaV/Clarity_Vision",
    live: "https://www.youtube.com/watch?v=7Sg-_2uD5go"
  },

  {
    title: "AI-Powered Interview Preparation Platform",
    category: "AI / Full Stack Development",
    subtitle: "Interactive Interview Preparation Application",

    image: interviewprep,

    description:
      "An AI-powered interview preparation platform designed to help candidates practice technical interviews, prepare for questions, and improve their interview readiness through an interactive application.",

    tech: [
      "React.js",
      "Python",
      "Flask",
      "Open Router API",
      "REST API",
      "MongoDB"
    ],

   features: [
  {
    title: "Resume Analysis & ATS Scoring",
    description:
      "Analyzes resumes against the selected job role and job description to generate an ATS compatibility score and help candidates improve their applications.",
    type: "Analysis"
  },
  {
    title: "Adaptive MCQ Practice",
    description:
      "Generates 10 unique multiple-choice questions for selected technical topics such as DBMS and SQL, with Easy, Medium, and Hard difficulty levels.",
    type: "Practice"
  },
  {
    title: "Performance History & Tracking",
    description:
      "Stores previous MCQ practice scores, allowing candidates to track their performance and monitor improvement across multiple attempts.",
    type: "Tracking"
  }
],
    github: "https://github.com/VethikaV/Interview_preparation_platform"
  },

  {
    title: "Claims Fraud Detection",
    category: "Machine Learning",
    subtitle: "Fraud Detection System",

    image: claimsFraud,

    description:
      "A machine learning-based application developed to identify potentially fraudulent claims. The project integrates a prediction workflow with a Flask web application and deployment on an AWS Ubuntu environment.",

    tech: [
      "Python",
      "Machine Learning",
      "Flask",
      "AWS EC2",
      "Ubuntu"
    ],

    features: [
  {
    title: "Fraudulent Claim Detection",
    description:
      "Uses a machine learning model to analyze insurance claim details and predict potentially fraudulent claims.",
    type: "Machine Learning"
  },
  {
    title: "Interactive Web Interface",
    description:
      "Developed a user-friendly frontend using HTML and CSS, integrated with a Flask backend to submit claim details and display prediction results.",
    type: "Web Development"
  },
  {
    title: "AWS Cloud Deployment",
    description:
      "Deployed the Flask-based fraud detection application on an AWS EC2 Ubuntu instance for cloud-based access and execution.",
    type: "Cloud Deployment"
  }
],

    github: "https://github.com/VethikaV/Claims-Fraud-Detection-Analysis"
  },

  {
    title: "Facial Emotion Recognition",
    category: "Computer Vision ",
    subtitle: "Facial Expression Classification",

    image: facialEmotionImg,

    description:
      "A computer vision project that analyzes facial expressions from images or camera input to recognize emotions using deep learning techniques.",

    tech: [
      "Python",
      "OpenCV",
      "Deep Learning",
      "Machine Learning"
    ],

    features: [
      {
        
        title: "Face Detection",
        description:
          "Detects facial regions from visual input for further analysis.",
        type: "Computer Vision"
      },
      {
        
        title: "Emotion Recognition",
        description:
          "Classifies facial expressions into emotion categories.",
        type: "Deep Learning"
      },
      {
        title: "Visual Processing",
        description:
          "Processes image input for facial expression analysis.",
        type: "Image Processing"
      }
    ],

    github: "https://github.com/VethikaV/Facial_Emotion_Detection"
  },

  {
    title: "Safety Detection using YOLOv8",
    category: "Object Detection",
    subtitle: "AI-Based Safety Monitoring",

    image: safetyDetectionImg,

    description:
      "A computer vision application that uses the YOLOv8 object detection model to identify safety-related objects and conditions from visual input.",

    tech: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Computer Vision",
      "Deep Learning"
    ],

     features: [
      {
        
        title: "Object Detection",
        description:
          "Uses YOLOv8 to detect and identify objects in images or video input.",
        type: "Object Detection"
      },
      {
        
        title: "Visual Monitoring",
        description:
          "Processes visual input for safety-related detection.",
        type: "Computer Vision"
      },
      {
        
        title: "Safety Identification",
        description:
          "Identifies safety-related conditions based on the detection model.",
        type: "AI Monitoring"
      }
    ],

    github: "https://github.com/VethikaV/Safety-Detection-YOLOv8.git"
  },

  {
    title: "Portfolio Website",
    category: "Frontend ",
    subtitle: "Personal Developer Portfolio",

    image: portfolioImg,

    description:
      "A personal portfolio website showcasing technical skills, projects, internships, achievements, and professional experience through a responsive web interface.",

    tech: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Vite"
    ],

    features: [
      {
        
        title: "About & Skills",
        description:
          "Presents personal information, technical skills, and professional background.",
        type: "Profile"
      },
      {
        
        title: "Project Showcase",
        description:
          "Displays projects with descriptions, technology stacks, and relevant links.",
        type: "Projects"
      },
      {
        
        title: "Contact Section",
        description:
          "Provides visitors with ways to connect and explore professional profiles.",
        type: "Communication"
      }
    ],

    github: "https://github.com/VethikaV/Portfolio.git",
    live: "https://portfolio-iota-one-93.vercel.app/"
  },

  {
    title: "House Price Prediction",
    category: "Machine Learning",
    subtitle: "Predictive House Price Analysis",

    image: housePriceImg,

    description:
      "A machine learning project that uses housing-related data to predict property prices based on selected input features.",

    tech: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn"
    ],

    features: [
      {
        
        title: "Price Prediction",
        description:
          "Predicts estimated house prices using a trained machine learning model.",
        type: "Prediction"
      },
      {
        
        title: "Data Processing",
        description:
          "Processes housing data and prepares features for model training.",
        type: "Data Analysis"
      },
      {
        
        title: "Model Evaluation",
        description:
          "Evaluates model performance using machine learning evaluation techniques.",
        type: "Model Analysis"
      }
    ],

    github: "https://github.com/VethikaV/House-Price-Prediction"
  },

  {
    title: "Todo App",
    category: "Frontend Development",
    subtitle: "Task Management Application",

    image: todoListImg,

    description:
      "A simple task management application that helps users organize daily activities and keep track of tasks through an interactive interface.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    features: [
      {
        
        title: "Add Tasks",
        description:
          "Allows users to add new tasks to their task list.",
        type: "Task Management"
      },
      {
      
        title: "Task Tracking",
        description:
          "Helps users manage and track their daily tasks.",
        type: "Productivity"
      },
      {
        
        title: "Task Management",
        description:
          "Provides controls to manage tasks in the application.",
        type: "User Interface"
      }
    ],

    github: "https://github.com/VethikaV/TodoList.git",
    live:"https://youtu.be/k68UcywwnFs?si=AvRq4mwVqOgQ0Kom"
  },

  {
    title: "Snake Game",
    category: "Java Development",
    subtitle: " Snake Game using Java AWT",

    image: snakeGameImg,

    description:
      "A desktop-based implementation of the classic Snake game developed using Java AWT, featuring keyboard-based controls and interactive gameplay.",

    tech: [
      "Java",
      "Java AWT",
      "Object-Oriented Programming"
    ],

    features: [
  {
    title: "Snake Movement & Growth",
    description:
      "Implements keyboard-controlled snake movement with dynamic body growth whenever the snake collects food.",
    type: "Game Logic"
  },
  {
    title: "Food Collection & Scoring",
    description:
      "Features color-coded food items that the snake can collect to increase its length and earn points.",
    type: "Gameplay"
  },
  {
    title: "Bomb & Penalty Mechanism",
    description:
      "Introduces white-colored bomb items that reduce the player's score when collected, adding an extra challenge to the gameplay.",
    type: "Game Mechanics"
  }
],

    github: "https://github.com/VethikaV/SnakeGame.git"
  },

  {
    title: "Solar System",
    category: "Frontend ",
    subtitle: "Interactive Solar System Visualization",

    image: solarSystemImg,

    description:
      "A visual project representing the solar system and its planetary arrangement through an interactive or animated interface.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    features: [
      {
        
        title: "Solar System View",
        description:
          "Presents a visual representation of the solar system.",
        type: "Visualization"
      },
      {
        
        title: "Planetary Display",
        description:
          "Displays planets as part of the solar system visualization.",
        type: "Visual Design"
      },
      {
    
        title: "Interactive Experience",
        description:
          "Provides a visual interface for exploring the solar system.",
        type: "Frontend"
      }
    ],

    github: "https://github.com/VethikaV/Solar_System.git"
  },

  {
    title: "Typing Speed Test",
    category: "Frontend Development",
    subtitle: "Typing Speed and Accuracy Application",

    image: typingSpeedImg,

    description:
      "A typing speed test application designed to help users measure their typing performance by tracking typing speed and accuracy through timed exercises.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    features: [
  {
    title: "Multi-Level Typing Practice",
    description:
      "Offers three difficulty levels: Easy with randomly generated words, Medium with short sentences, and Hard with full paragraphs to improve typing skills.",
    type: "Practice"
  },
  {
    title: "Time & Accuracy Tracking",
    description:
      "Tracks the time taken to complete each exercise and evaluates typing accuracy by identifying correctly and incorrectly typed words.",
    type: "Performance"
  },
  {
    title: "Typing Speed Analysis",
    description:
      "Calculates Words Per Minute (WPM) and accuracy percentage to help users evaluate their typing speed and monitor improvement.",
    type: "Results"
  }
],

    github: "https://github.com/VethikaV/TypingSpeedTest.git",
    live:"https://youtu.be/2rX1cORgJjc?si=arb-vdgNEs33vn1Y"
  }
];


/* ============================================================
   REUSABLE PROJECT SHOWCASE
   ============================================================ */

const ProjectShowcase = ({ project, index }) => (
  <article className="project-showcase">

    {/* Project Image */}
    <div className="project-showcase__image">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
      />

      {/*<span className="project-showcase__label">
        PROJECT {String(index + 1).padStart(2, "0")}
      </span>*/}
    </div> 

    {/* Project Details */}
    <div className="project-showcase__body">

      {/* Heading */}
      <div className="project-showcase__heading">
        <div>
          <span className="project-showcase__eyebrow">
            {project.category}
          </span>

          <h3>{project.title}</h3>

          <p className="project-showcase__subtitle">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="project-showcase__description">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="project-tech">
        <h4>TECH STACK</h4>

        <div className="project-tech__list">
          {project.tech.map((item, i) => (
            <span className="project-tech__tag" key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="project-features">
        <h4>KEY FEATURES</h4>

        <div className="project-features__grid">
          {project.features.map((feature, i) => (
            <div className="project-feature" key={i}>

             {/* <span className="project-feature__number">
                {String(i + 1).padStart(2, "0")}
              </span>
              */}

              <div className="project-feature__icon">
                {feature.icon || "✦"}
              </div>

              <h5>{feature.title}</h5>

              <p>{feature.description}</p>

              {feature.type && (
                <span className="project-feature__type">
                  {feature.type}
                </span>
              )}

            </div>
          ))}
        </div>
      </div>

      {/* Footer and Links */}
      <div className="project-showcase__footer">

        <span>
          
        </span>

        <div className="project-showcase__links">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-showcase__link"
            >
              GitHub 
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-showcase__link"
            >
               Demo Link
            </a>
          )}

        </div>
      </div>

    </div>
  </article>
);


/* ============================================================
   PROJECT SECTION
   ============================================================ */

const Project = () => {
  return (
    <section className="project__container" id="projects">

      <h2 className="project__title">
        PROJECTS
      </h2>

      <div className="project__list">
        {projects.map((project, index) => (
          <ProjectShowcase
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>

    </section>
  );
};

export default Project;
