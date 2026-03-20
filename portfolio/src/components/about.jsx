import './CSS/style.css';
import vethika from '../assets/Vethika.jpeg';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">

        {/* Header */}
        <div className="about-header sr">
          <span className="s-eyebrow">About Me</span>
          <h2 className="s-title">ABOUT <em>Me</em></h2>
          <div className="s-rule"></div>
        </div>

        {/* Photo + Bio */}
        <div className="about-top-grid sr">
          <div className="about-photo-wrap">
            <img src={vethika} alt="Vethika V" className="about-photo" />
          </div>
          <div className="about-bio-col">
            <p className="about-bio">
              I am a passionate and detail-oriented <strong>Data Analyst</strong> with a strong
              foundation in Artificial Intelligence and Machine Learning. I have hands-on experience
              in data handling and analysis using Excel and MySQL, along with proficiency in Java, C,
              and Python for problem-solving and software development. I also possess front-end
              development skills in React.js and Node.js, and expertise in design tools such as
              Figma, Adobe Illustrator, and Canva for creating visually engaging and user-centric designs.
            </p>
            <div className="about-skills-label">Core Skills</div>
            <div className="about-skills-grid">
              <div className="s-tag"><span className="s-tag-dot"></span>Python &amp; Data Analysis</div>
              <div className="s-tag"><span className="s-tag-dot"></span>Machine Learning</div>
              <div className="s-tag"><span className="s-tag-dot"></span>React.js &amp; Node.js</div>
              <div className="s-tag"><span className="s-tag-dot"></span>MySQL &amp; Excel</div>
              <div className="s-tag"><span className="s-tag-dot"></span>LLMs &amp; RAG</div>
              <div className="s-tag"><span className="s-tag-dot"></span>Flask &amp; REST APIs</div>
              <div className="s-tag"><span className="s-tag-dot"></span>Java &amp; C</div>
              <div className="s-tag"><span className="s-tag-dot"></span>Git &amp; Github</div>
              <div className="s-tag"><span className="s-tag-dot"></span>AWS EC2(basics) &amp; Manual Testing (basics)</div>
                <div className="s-tag"><span className="s-tag-dot"></span>Figma &amp; Illustrator</div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="about-block sr">
          <div className="about-block-header">
            <span className="s-eyebrow">Academic Background</span>
            <h3 className="about-block-title">EDUCA<em>tion</em></h3>
            <div className="s-rule"></div>
          </div>
          <div className="edu-list">
            <div className="edu-row">
              <div className="edu-yr">2022–2026</div>
              <div className="edu-info">
                <h4>B.Tech — Artificial Intelligence &amp; Data Science</h4>
                <p>St. Joseph's Institute of Technology</p>
                <span className="edu-grade">CGPA: 8.78</span>
              </div>
            </div>
            <div className="edu-row">
              <div className="edu-yr">2022</div>
              <div className="edu-info">
                <h4>12th — Bio-Math</h4>
                <p>Alwin Memorial Public School</p>
                <span className="edu-grade">90.2%</span>
              </div>
            </div>
            <div className="edu-row">
              <div className="edu-yr">2020</div>
              <div className="edu-info">
                <h4>10th — General</h4>
                <p>Alwin Memorial Public School</p>
                <span className="edu-grade">91.8%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Internships */}
        <div className="about-block sr">
          <div className="about-block-header">
            <span className="s-eyebrow">Experience</span>
            <h3 className="about-block-title">INTERN<em>ships</em></h3>
            <div className="s-rule"></div>
          </div>
          <div className="internship-list">

            <div className="internship-item">
              <div className="internship-item-head">
                <div className="internship-item-role">AI Research Intern</div>
                <span className="internship-item-date">Apr – May 2025</span>
              </div>
              <div className="internship-item-org">Sri Gurubhyo Technologies — Remote</div>
              <p>Automated employee data integration with Python scripts for large Excel datasets. Designed a multilingual OCR &amp; translation pipeline (Tesseract + Deep Translator, 116+ languages) and a Flask backend for image upload, language detection, and API handling.</p>
            </div>

            <div className="internship-item">
              <div className="internship-item-head">
                <div className="internship-item-role">AI Technologies Trainee — CDW Program</div>
                <span className="internship-item-date">Jan 2025</span>
              </div>
              <div className="internship-item-org">Student Technology Empowerment Program</div>
              <p>Hands-on training in LLMs, prompt engineering, and AI automation. Built a RAG project integrating external knowledge with LLaMA for context-aware outputs and explored AI agent pipelines.</p>
            </div>

            <div className="internship-item">
              <div className="internship-item-head">
                <div className="internship-item-role">Data Engineer Intern</div>
                <span className="internship-item-date">Jun 2025</span>
              </div>
              <div className="internship-item-org">Vebbox Software Solution</div>
              <p>Backend and data engineering for ed-tech platforms. SQL optimization, data migration, QA testing, and cross-functional debugging before production deployments.</p>
            </div>

            

            <div className="internship-item">
              <div className="internship-item-head">
                <div className="internship-item-role">Industrial Intern</div>
                <span className="internship-item-date">Jun – Jul 2024</span>
              </div>
              <div className="internship-item-org">Engine Factory, Avadi — Defense Manufacturing</div>
              <p>Practical exposure to large-scale defense manufacturing: engine components, assembly, heat treatment, precision machining, and quality control in high-stakes environments.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
