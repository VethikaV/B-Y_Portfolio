import React from 'react';
import './CSS/style.css';

const Project = () => {
  return (
    <section className="project section" id="project">
      <div className="project__container">
        <h2 className="project__title"> PROJECTS</h2>

        <div className="project__grid">

          {/* Code Generator RAG */}
          <div className="project__card">
            <h3>Code Generator RAG</h3>
            <p>
              An AI-powered code generation system using Retrieval-Augmented Generation (RAG)
              for context-aware and efficient code creation.
            </p>
            <ul>
              <li><b>Tech Stack:</b> Python (Flask), LangChain, ChromaDB, Streamlit, OpenAI API</li>
              <li><b>Features:</b> File ingestion, contextual retrieval, intelligent code generation</li>
            </ul>
            <a
              href="https://github.com/VethikaV/Code_Generator_RAG.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              View on GitHub
            </a>
          </div>

          {/* Claims Fraud Detection */}
          <div className="project__card">
            <h3>Claims Fraud Detection</h3>
            <p>
              A machine learning system designed to detect fraudulent healthcare insurance
              claims using advanced classification algorithms.
            </p>
            <ul>
              <li><b>Tech Stack:</b> Flask, Pandas, NumPy, Scikit-learn, Joblib, Matplotlib, OpenPyXL</li>
              <li><b>Models:</b> XGBoost, Random Forest, Logistic Regression</li>
            </ul>
            <a
              href="https://github.com/VethikaV/Claims-Fraud-Detection-Analysis.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              View on GitHub
            </a>
          </div>

          {/* Facial Emotion Recognition */}
          <div className="project__card">
            <h3>Facial Emotion Recognition</h3>
            <p>
              A real-time emotion recognition system using OpenCV and DeepFace for face detection
              and emotion analysis in live video streams.
            </p>
            <ul>
              <li><b>Tech Stack:</b> Python, OpenCV, DeepFace, Haarcascade XML</li>
              <li><b>Features:</b> Real-time detection, emotion labeling, live streaming</li>
            </ul>
            <a
              href="https://github.com/VethikaV/Facial_Emotion_Detection.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              View on GitHub
            </a>
          </div>

          {/* Safety Detection YOLOv8 */}
          <div className="project__card">
            <h3>Safety Detection YOLOv8</h3>
            <p>
              A real-time computer vision project that identifies essential PPE such as helmets,
              masks, vests, and gloves using the YOLOv8 model.
            </p>
            <ul>
              <li><b>Tech Stack:</b> Python, Ultralytics YOLOv8</li>
              <li><b>Features:</b> Real-time detection, compliance tracking, pre-trained model</li>
            </ul>
            <a
              href="https://github.com/VethikaV/Safety-Detection-YOLOv8.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              View on GitHub
            </a>
          </div>

          {/* Snake Game in Java */}
          <div className="project__card">
            <h3>Snake Game (Java AWT)</h3>
            <p>
              A classic Snake Game built using Java AWT with colorful food items, bombs,
              and dynamic scoring for an engaging experience.
            </p>
            <ul>
              <li><b>Tech Stack:</b> Java AWT, Threading, TimerTask</li>
              <li><b>Features:</b> Keyboard controls, real-time gameplay, game loop</li>
            </ul>
            <a
              href="https://github.com/VethikaV/SnakeGame.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              View on GitHub
            </a>
          </div>

          {/* Todo App */}
          <div className="project__card">
            <h3>Todo App</h3>
            <p>
              A responsive and minimalistic Todo App with a modern UI, theme toggle,
              and live task progress tracking.
            </p>
            <ul>
              <li><b>Tech Stack:</b> HTML, CSS, JavaScript</li>
              <li><b>Features:</b> Dark/Light mode, progress bar, task tracking</li>
            </ul>
            <a
              href="https://github.com/VethikaV/TodoList.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              View on GitHub
            </a>
          </div>

          {/* Portfolio Website */}
          <div className="project__card">
            <h3>Portfolio Website</h3>
            <p>
              A modern personal portfolio website showcasing projects and achievements,
              built using React and Vite.
            </p>
            <ul>
              <li><b>Tech Stack:</b> React, Vite, CSS3</li>
              <li><b>Features:</b> Responsive design, smooth navigation, modular UI</li>
            </ul>
            <a
              href="https://github.com/VethikaV/Portfolio.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              View on GitHub
            </a>
          </div>
          {/* Typing Speed Test */}
<div className="project__card">
  <h3>Typing Speed Test</h3>
  <p>
    A web-based typing speed test application that measures typing speed and
    accuracy in real time, designed to improve users' typing skills.
  </p>
  <ul>
    <li><b>Tech Stack:</b> React, JavaScript, CSS3</li>
    <li>
      <b>Features:</b> Real-time WPM calculation, accuracy tracking,
      timer-based test, responsive UI
    </li>
  </ul>
  <a
    href="https://github.com/VethikaV/TypingSpeedTest.git"
    target="_blank"
    rel="noopener noreferrer"
    className="project__link"
  >
    View on GitHub
  </a>
</div>


            {/* House Price Prediction */}
          <div className="project__card">
            <h3>House Price Prediction</h3>
            <p>
              A regression-based machine learning project that predicts house prices using
              features such as location, area, and number of rooms.
            </p>
            <ul>
              <li><b>Tech Stack:</b> Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn</li>
              <li><b>Models:</b> Linear Regression, Decision Tree, Random Forest</li>
            </ul>
            <a
              href="https://github.com/VethikaV/House-Price-Prediction.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project__link"
            >
              View on GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Project;
