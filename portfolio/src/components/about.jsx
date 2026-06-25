import './CSS/style.css';
import vethika from '../assets/Vethika.jpeg';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">

        {/* Header */}
        <div className="about-header sr">
          <span className="s-eyebrow">About Me</span>
          <h2 className="s-title">ABOUT ME</h2>
          <div className="s-rule"></div>
        </div>

        {/* Photo + Bio */}
        <div className="about-top-grid sr">
          <div className="about-photo-wrap">
            <img src={vethika} alt="Vethika V" className="about-photo" />
          </div>
          <div className="about-bio-col">
            <p>
              I am a passionate and detail-oriented <strong>Software Developer</strong> with a strong
              foundation in software engineering, data structures, algorithms, and full-stack development.
              I have hands-on experience in building scalable web applications using React.js, Node.js,
              Express.js, and MongoDB, along with proficiency in Java, Python, and C for problem-solving
              and application development. I am skilled in developing responsive user interfaces, designing
              RESTful APIs, and working with databases such as MySQL and MongoDB. Additionally, I have
              experience with Git, GitHub, and modern development workflows, enabling me to build efficient,
              maintainable, and user-focused software solutions while continuously learning new technologies
              and industry best practices.
            </p>
            <div className="about-skills-label">Core Skills</div>
            <div className="about-skills-grid">
              <div className="s-tag"><span className="s-tag-dot"></span>Java &amp; C</div>
              <div className="s-tag"><span className="s-tag-dot"></span>Git &amp; Github</div>
              <div className="s-tag"><span className="s-tag-dot"></span>LLMs &amp; RAG</div>
              <div className="s-tag"><span className="s-tag-dot"></span>Machine Learning</div>
              <div className="s-tag"><span className="s-tag-dot"></span>React.js &amp; Node.js</div>
              <div className="s-tag"><span className="s-tag-dot"></span>MySQL &amp; Excel</div>
              <div className="s-tag"><span className="s-tag-dot"></span>HTML &amp; CSS </div>
              <div className="s-tag"><span className="s-tag-dot"></span>Python &amp; JavaScript</div>
              <div className="s-tag"><span className="s-tag-dot"></span>AWS EC2(basics) &amp; ADF(basics) </div>
                <div className="s-tag"><span className="s-tag-dot"></span>Figma &amp; Canva </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="about-block sr">
          <div className="about-block-header">
            <span className="s-eyebrow">Academic Background</span>
            <h3 className="about-block-title">EDUCATION</h3>
            <div className="s-rule"></div>
          </div>
          <div className="edu-list">
            <div className="edu-row">
              <div className="edu-yr">2022–2026</div>
              <div className="edu-info">
                <h4>B.Tech — Artificial Intelligence &amp; Data Science</h4>
                <p>St. Joseph's Institute of Technology</p>
                <span className="edu-grade">CGPA: 8.83</span>
              </div>
            </div>
            <div className="edu-row">
              <div className="edu-yr">2022</div>
              <div className="edu-info">
                <h4>12th — Bio-Math</h4>
                <p>Alwin Memorial Public School</p>
                <span className="edu-grade">90%</span>
              </div>
            </div>
            <div className="edu-row">
              <div className="edu-yr">2020</div>
              <div className="edu-info">
                <h4>10th — General</h4>
                <p>Alwin Memorial Public School</p>
                <span className="edu-grade">91%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Internships */}
        <div className="about-block sr">
          <div className="about-block-header">
            <span className="s-eyebrow">Experience</span>
            <h3 className="about-block-title">INTERNSHIPS</h3>
            <div className="s-rule"></div>
          </div>
          <div className="internship-list">


            <div className="internship-item">
            <div className="internship-item-head">
           <div className="internship-item-role">Machine Learning Intern</div>
                <span className="internship-item-date">June 2026 – Present</span>
            </div>
                  <div className="internship-item-org">Asyncronix (ITNT)</div>
                       <p>
                         Contributed to the prototype development of an intelligent exoskeleton system. Worked on Radxa ROCK 5B and
                         Raspberry Pi 5to integrating computer vision, joint sensor data, and Reinforcement Learning (RL) techniques
                         to analyze gait patterns and enable real-time posture recognition.
                        </p>
                  </div>
          
           <div className="internship-item">
          <div className="internship-item-head">
              <div className="internship-item-role">Programmer Trainee</div>
               <span className="internship-item-date">Feb – Apr 2026</span>
             </div>
           <div className="internship-item-org">Cognizant </div>
             <p>Worked on Azure fundamentals with hands-on experience in Azure Data Factory and Power BI. Built data pipelines and implemented Medallion Architecture (Bronze, Silver, Gold) using Dataflow for processing 3 months of sample data and calculated customer churn prediction and loyality score.</p>
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
                <div className="internship-item-role">AI Research Intern</div>
                <span className="internship-item-date">Apr – May 2025</span>
              </div>
              <div className="internship-item-org">Sri Gurubhyo Technologies — Remote</div>
              <p>Automated employee data integration with Python scripts for large Excel datasets. Designed a multilingual OCR &amp; translation pipeline (Tesseract + Deep Translator, 116+ languages) and a Flask backend for image upload, language detection, and API handling.</p>
            </div>


            <div className="internship-item">
              <div className="internship-item-head">
                <div className="internship-item-role">Student Technology Empowerment Program</div>
                <span className="internship-item-date">Jan 2025</span>
              </div>
              <div className="internship-item-org">CDW</div>
              <p>Hands-on training in LLMs, prompt engineering, and AI automation. Built a RAG project integrating external knowledge with LLaMA for context-aware outputs and explored AI agent pipelines.</p>
            </div>

  
            <div className="internship-item">
              <div className="internship-item-head">
                <div className="internship-item-role">Industrial Intern</div>
                <span className="internship-item-date">Jun – Jul 2024</span>
              </div>
              <div className="internship-item-org">Engine Factory</div>
              <p>Practical exposure to large-scale defense manufacturing: engine components, assembly, heat treatment, precision machining, and quality control in high-stakes environments.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
