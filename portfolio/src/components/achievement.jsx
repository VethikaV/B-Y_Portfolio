import React from 'react';
import './CSS/style.css';

const Achievement = () => {
  return (
    <section className="achievement-section" id="achievement">
      <div className="achievement-inner">

        {/* Header */}
        <div className="achievement-header sr">
          <span className="s-eyebrow">Recognition</span>
          <h2 className="s-title">ACHIEVEMENTS</h2>
          <div className="s-rule"></div>
        </div>

        {/* Achievements */}
        <div className="ach-block sr">
          <div className="ach-block-label">Achievements</div>
          <div className="ach-list">

            <div className="ach-item">
              <div className="ach-item-icon">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p><strong>GeeksforGeeks Campus Mantri</strong> — St. Joseph's Institute of Technology (2024–2025). Organized and hosted two coding events — "St. Joseph's × GeeksforGeeks" with 200+ participants.</p>
            </div>

            <div className="ach-item">
              <div className="ach-item-icon">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p>Solved <strong>150+</strong> problems on LeetCode, <strong>1000+</strong> on Skillrack, and <strong>100+</strong> on GeeksforGeeks.</p>
            </div>

            <div className="ach-item">
              <div className="ach-item-icon">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p>Participated in the Finals of the <strong>AI Innovate Hackathon</strong> conducted by <strong>Sri Eshwar THIRAN 2025</strong> on February 20, 2025.</p>
            </div>

            <div className="ach-item">
              <div className="ach-item-icon">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p>Served as the <strong>Media Team Head</strong> for the event <strong>AiZen 2k25</strong> conducted on August 30, 2025.</p>
            </div>

            <div className="ach-item">
              <div className="ach-item-icon">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p>Contributed as a <strong>Media Team Member</strong> for the event <strong>AiZen 2k24</strong> conducted on September 28, 2024.</p>
            </div>

          </div>
        </div>

        {/* Certifications */}
        <div className="ach-block sr">
          <div className="ach-block-label">Certifications</div>
          <div className="cert-list">


            <div className="cert-item">
              <span className="cert-num">01</span>
              <div className="cert-body">
                <span className="cert-tag">Paper</span>
                <span className="cert-name">Presented LLM-Powered Code Generation Using RAG Framework with LLaMA 3 at RV College of Engineering, Bengaluru — Nov 21, 2025</span>
              </div>
            </div>

            <div className="cert-item">
              <span className="cert-num">02</span>
              <div className="cert-body">
                <span className="cert-tag">Cambridge</span>
                <span className="cert-name">English Linguaskill Business Test — B2 CEFR Level, Score 161</span>
              </div>
            </div>

            <div className="cert-item">
              <span className="cert-num">03</span>
              <div className="cert-body">
                <span className="cert-tag">NPTEL</span>
                <span className="cert-name">Introduction to Operating Systems</span>
                <span className="cert-grade">Elite</span>
              </div>
            </div>

            <div className="cert-item">
              <span className="cert-num">04</span>
              <div className="cert-body">
                <span className="cert-tag">NPTEL</span>
                <span className="cert-name">Python for Data Science</span>
                <span className="cert-grade">Elite</span>
              </div>
            </div>

            <div className="cert-item">
              <span className="cert-num">05</span>
              <div className="cert-body">
                <span className="cert-tag">NPTEL</span>
                <span className="cert-name">Data Mining</span>
                <span className="cert-grade">Elite</span>
              </div>
            </div>

            <div className="cert-item">
              <span className="cert-num">06</span>
              <div className="cert-body">
                <span className="cert-tag">NPTEL</span>
                <span className="cert-name">Database Management Systems</span>
              </div>
            </div>

            <div className="cert-item">
              <span className="cert-num">07</span>
              <div className="cert-body">
                <span className="cert-tag">NPTEL</span>
                <span className="cert-name">Introduction to Machine Learning</span>
                <span className="cert-grade">Elite</span>
              </div>
            </div>

            

            <div className="cert-item">
              <span className="cert-num">08</span>
              <div className="cert-body">
                <span className="cert-tag">Govt.</span>
                <span className="cert-name">Typewriting Senior — English &amp; Tamil (First Class)</span>
              </div>
            </div>

            

          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievement;
