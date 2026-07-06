import React from 'react';
import './CSS/style.css';

import codegenerator from "../assets/Code_generator.jpeg"
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


const Project = () => {
  return (
    <section className="project section" id="project">
      <div className="project__container">
        <h2 className="project__title"> PROJECTS</h2>

        <div className="project__grid">

         <div className="project__card">
  <img
    src={codegenerator}
    alt="Code Generator RAG"
    className="project__image"
  />

  <div className="project__content">
    <h3>Code Generator RAG</h3>

    <p>
      An AI-powered code generation system using Retrieval-Augmented Generation
      (RAG) that combines document retrieval with LLMs to generate accurate,
      context-aware code solutions.
    </p>

    <ul>
      <li>
        <b>Tech Stack:</b> Python (Flask), LangChain, ChromaDB, Streamlit,
        OpenAI API
      </li>

      <li>
        <b>Modules:</b> Document Ingestion, Vector Search, Code Generation
      </li>

      <li>
        <b>Features:</b> File ingestion, contextual retrieval, intelligent code
        generation, semantic search
      </li>
    </ul>

    <div className="project__buttons">
      <a
        href="https://github.com/VethikaV/Code_Generator_RAG"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        GitHub
      </a>
    </div>
  </div>
</div>


          {/* Clarity Vision */}
<div className="project__card">
  <img
    src={clarityVisionImg}
    alt="Clarity Vision"
    className="project__image"
  />

  <div className="project__content">
    <h3>Clarity Vision</h3>

    <p>
      An AI-powered healthcare system that analyzes medical images, clinical
      reports, and patient data to assist in the early detection of blood
      cancer and autoimmune diseases. The platform combines computer vision,
      OCR, and machine learning techniques to provide diagnostic insights and
      clinical recommendations.
    </p>

    <ul>
      <li>
        <b>Tech Stack:</b> Python (Flask), CNN, Scikit-learn, OpenCV,
        Tesseract OCR, Deep Translator
      </li>

      <li>
        <b>Modules:</b> Medical Image Analysis, OCR Report Processing,
        Disease Prediction
      </li>

      <li>
        <b>Features:</b> Blood cancer image classification, OCR-based report
        analysis, disease prediction, clinical recommendations
      </li>
    </ul>

    <div className="project__buttons">
      <a
        href="https://github.com/VethikaV/Clarity_Vision"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        GitHub
      </a>

      <a
    href=" https://youtu.be/7Sg-_2uD5go?si=yQPc0J4alYpm4fcF"
    target="_blank"
    rel="noopener noreferrer"
    className="project__link project__live"
  >
    YouTube Link
  </a>
     
    </div>
  </div>
</div>

{/* AI Powered interive prepartion */}
<div className="project__card">
 <img src={interviewprep} alt="Interview Preparation Platform" />

<div className="project__content">
  <h3>AI-Powered Interview Preparation Platform</h3>

  <p>
    A full-stack web application designed to help students prepare for technical
    interviews through AI-generated quizzes, personalized assessments, and
    performance tracking. The platform provides topic-based practice questions,
    evaluates user responses, and offers insights to improve interview readiness.
  </p>

  <ul>
    <li>
      <b>Tech Stack:</b> React.js, Flask, Python, MongoDB, Openrouter API, JWT
    </li>

    <li>
      <b>Modules:</b> User Authentication, Quiz Generation, Assessment Engine,
      Performance Dashboard, AI Interview Assistant
    </li>

    <li>
      <b>Features:</b> AI-generated interview questions, topic and difficulty
      selection, real-time quiz evaluation, score tracking, personalized
      feedback, secure login and user progress management
    </li>
  </ul>

  <div className="project__buttons">
  <a
    href="https://github.com/VethikaV/Interview_preparation_platform.git"
    target="_blank"
    rel="noopener noreferrer"
    className="project__link"
  >
    GitHub
  </a>
</div>
</div>
</div>

         {/* Claims Fraud Detection */}
<div className="project__card">
 <img src={claimsFraud} alt="Claims Fraud Detection" />

  <div className="project__content">
    <h3>Claims Fraud Detection</h3>

    <p>
      A machine learning system designed to identify fraudulent healthcare
      insurance claims using predictive analytics and classification models.
      The platform analyzes claim patterns, detects anomalies, and helps reduce
      financial losses caused by fraudulent activities.
    </p>

    <ul>
      <li>
        <b>Tech Stack:</b> Flask, Pandas, NumPy, Scikit-learn, Joblib,
        Matplotlib
      </li>

      <li>
        <b>Models:</b> XGBoost, Random Forest, Logistic Regression
      </li>

      <li>
        <b>Features:</b> Fraud prediction, Risk scoring, Data visualization,
        Model comparison dashboard
      </li>
    </ul>

    <div className="project__buttons">
  <a
    href="https://github.com/VethikaV/Claims-Fraud-Detection-Analysis"
    target="_blank"
    rel="noopener noreferrer"
    className="project__link"
  >
    GitHub
  </a>

  <a
    href="https://youtu.be/Ysy9vYl2ThU?si=e_N1Q4F4kTqSMaaF"
    target="_blank"
    rel="noopener noreferrer"
    className="project__link project__live"
  >
    YouTube Link
  </a>
</div>
  </div>
</div>

          
         {/* Facial Emotion Recognition */}
<div className="project__card">
  <img
    src={facialEmotionImg}
    alt="Facial Emotion Recognition"
    className="project__image"
  />

  <div className="project__content">
    <h3>Facial Emotion Recognition</h3>

    <p>
      A real-time computer vision application that detects human faces and
      identifies emotions from live webcam video streams. The system leverages
      DeepFace and OpenCV to classify emotions such as happy, sad, angry,
      surprised, and neutral with instant visual feedback.
    </p>

    <ul>
      <li>
        <b>Tech Stack:</b> Python, OpenCV, DeepFace, Haarcascade XML
      </li>

      <li>
        <b>Modules:</b> Face Detection, Emotion Classification,
        Real-Time Video Processing
      </li>

      <li>
        <b>Features:</b> Real-time emotion detection, emotion labeling,
        live video streaming, facial recognition analytics
      </li>
    </ul>

    <div className="project__buttons">
      <a
        href="https://github.com/VethikaV/Facial_Emotion_Detection"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        GitHub
      </a>
    </div>
  </div>
</div>


<div className="project__card">
  <img
    src={safetyDetectionImg}
    alt="Safety Detection YOLOv8"
    className="project__image"
  />

  <div className="project__content">
    <h3>Safety Detection YOLOv8</h3>

    <p>
      A real-time computer vision application that detects personal protective
      equipment (PPE) such as helmets, masks, gloves, and safety vests using
      the YOLOv8 object detection model to improve workplace safety compliance.
    </p>

    <ul>
      <li>
        <b>Tech Stack:</b> Python, OpenCV, YOLOv8, Ultralytics
      </li>

      <li>
        <b>Modules:</b> PPE Detection, Object Tracking, Real-Time Monitoring
      </li>

      <li>
        <b>Features:</b> Helmet detection, mask detection, safety compliance
        monitoring, real-time alerts
      </li>
    </ul>

    <div className="project__buttons">
      <a
        href="https://github.com/VethikaV/Safety-Detection-YOLOv8"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        GitHub
      </a>
    </div>
  </div>
</div>
<div className="project__card">
  <img
    src={portfolioImg}
    alt="Portfolio Website"
    className="project__image"
  />

  <div className="project__content">
    <h3>Portfolio Website</h3>

    <p>
      A modern personal portfolio website developed using React and Vite to
      showcase projects, technical skills, achievements, certifications, and
      contact information in a professional manner.
    </p>

    <ul>
      <li>
        <b>Tech Stack:</b> React, Vite, CSS3
      </li>

      <li>
        <b>Modules:</b> Home, About, Projects, Achievements, Contact
      </li>

      <li>
        <b>Features:</b> Responsive design, smooth navigation, project
        showcase, modern UI
      </li>
    </ul>

    <div className="project__buttons">
      <a
        href="https://github.com/VethikaV/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        GitHub
      </a>

      <a
        href="https://portfolio-iota-one-93.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link project__live"
      >
        Live Demo
      </a>
    </div>
  </div>
</div>

<div className="project__card">
  <img
    src={housePriceImg}
    alt="House Price Prediction"
    className="project__image"
  />

  <div className="project__content">
    <h3>House Price Prediction</h3>

    <p>
      A machine learning regression model that predicts house prices based on
      factors such as location, area, number of bedrooms, and property
      characteristics using supervised learning techniques.
    </p>

    <ul>
      <li>
        <b>Tech Stack:</b> Python, Pandas, NumPy, Matplotlib, Scikit-learn
      </li>

      <li>
        <b>Models:</b> Linear Regression, Decision Tree, Random Forest
      </li>

      <li>
        <b>Features:</b> Price prediction, data visualization, model
        evaluation, feature analysis
      </li>
    </ul>

    <div className="project__buttons">
      <a
        href="https://github.com/VethikaV/House-Price-Prediction"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        GitHub
      </a>
    </div>
  </div>
</div>


<div className="project__card">
  <img
    src={todoListImg}
    alt="Todo App"
    className="project__image"
  />

  <div className="project__content">
    <h3>Todo App</h3>

    <p>
      A responsive task management application that allows users to organize,
      track, and manage daily tasks with an intuitive interface and progress
      tracking features.
    </p>

    <ul>
      <li>
        <b>Tech Stack:</b> HTML, CSS, JavaScript
      </li>

      <li>
        <b>Modules:</b> Task Management, Progress Tracking, Theme Control
      </li>

      <li>
        <b>Features:</b> Add/delete tasks, progress tracking, dark mode,
        responsive design
      </li>
    </ul>

    <div className="project__buttons">
      <a
        href="https://github.com/VethikaV/TodoList"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        GitHub
      </a>
      <a
        href="https://youtu.be/k68UcywwnFs"
        target="_blank"
        rel="noopener noreferrer"
       className="project__link project__live"
       >
        YouTube Link
       </a>
    </div>
  </div>
</div>


<div className="project__card">
  <img
    src={snakeGameImg}
    alt="Snake Game"
    className="project__image"
  />

  <div className="project__content">
    <h3>Snake Game (Java AWT)</h3>

    <p>
      A classic Snake Game developed using Java AWT featuring dynamic gameplay,
      score tracking, food collection mechanics, and obstacle-based challenges.
    </p>

    <ul>
      <li>
        <b>Tech Stack:</b> Java, AWT, TimerTask
      </li>

      <li>
        <b>Modules:</b> Game Loop, Collision Detection, Score Management
      </li>

      <li>
        <b>Features:</b> Keyboard controls, score tracking, dynamic gameplay,
        obstacle challenges
      </li>
    </ul>

    <div className="project__buttons">
      <a
        href="https://github.com/VethikaV/SnakeGame"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        GitHub
      </a>
    </div>
  </div>
</div>

<div className="project__card">
  <img
    src={typingSpeedImg}
    alt="Typing Speed Test"
    className="project__image"
  />

  <div className="project__content">
    <h3>Typing Speed Test</h3>

    <p>
      A web-based application that evaluates typing speed and accuracy in real
      time, helping users improve their keyboard skills through timed typing
      challenges.
    </p>

    <ul>
      <li>
        <b>Tech Stack:</b> React, JavaScript, CSS3
      </li>

      <li>
        <b>Modules:</b> Speed Calculation, Accuracy Tracking, Timer
      </li>

      <li>
        <b>Features:</b> Real-time WPM calculation, accuracy tracking,
        countdown timer, responsive interface
      </li>
    </ul>

    <div className="project__buttons">
      <a
        href="https://github.com/VethikaV/TypingSpeedTest"
        target="_blank"
        rel="noopener noreferrer"
        className="project__link"
      >
        GitHub
      </a>
      <a
        href="https://youtu.be/2rX1cORgJjc"
        target="_blank"
        rel="noopener noreferrer"
       className="project__link project__live"
       >
        YouTube Link
       </a>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default Project;
