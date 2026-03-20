import React from 'react';
import './CSS/style.css';

const Achievement = () => {
  return (
    <div className="achievement">
      <h2>ACHIEVEMENTS & CERTIFICATIONS</h2>

      {/* Achievements Section */}
      <div className="achievement__container">
        <h3>Achievements</h3>
        <ul className="achievement__list">
          <li>
            <strong>GeeksforGeeks Campus Mantri</strong> — St. Joseph’s Institute of Technology (2024–2025)
          </li>
          <li>
            Organized and hosted two coding events — <strong>“St. Joseph’s × GeeksforGeeks”</strong> with 200+ participants
          </li>
          <li>
            
            Solved <strong>150+</strong> problems on LeetCode, <strong>1000+</strong> on Skillrack, and <strong>100+</strong> on GeeksforGeeks
            </li>
         <li>
            Participated in the Finals of the <strong>AI Innovate Hackathon</strong> conducted by <strong>Sri Eshwar THIRAN 2025</strong> on February 20, 2025.
      </li>
       <li>
         Served as the <strong>Media Team Head</strong> for the event <strong>AiZen 2k25</strong> conducted on August 30, 2025.
       </li>
        <li>
          Contributed as a <strong>Media Team Member</strong> for the event <strong>AiZen 2k24</strong> conducted on September 28, 2024.
        </li>

        </ul>
      </div>

      {/* Certifications Section */}
      <div className="achievement__container">
        <h3>Certifications</h3>
        <ol className="achievement__list">
          <li>NPTEL: Introduction to Operating Systems (Elite)</li>
          <li>NPTEL: Python for Data Science (Elite)</li>
          <li>NPTEL: Data Mining (Elite)</li>
          <li>NPTEL: Database Management Systems</li>
          <li>NPTEL: Introduction to Machine Learning (Elite)</li>
          <li>Typewriting Senior — English & Tamil (First Class)</li>
          <li>Achieved a score of 161 (B2 CEFR Level) in the Cambridge English Linguaskill Business Test,
             demonstrating strong proficiency in business communication.</li>
          <li>Presented LLM-Powered Code Generation Using RAG Framework with LLaMA 3 at RV College of Engineering, Bengaluru on 21 November 2025</li>
           
        </ol>
      </div>
    </div>
  );
};

export default Achievement;
