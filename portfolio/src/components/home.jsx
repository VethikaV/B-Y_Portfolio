import React from 'react';
import './CSS/style.css';
import resume from '../assets/Vethika.pdf';
import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiDownloadLine,
  RiArrowRightLine
} from 'react-icons/ri';

const Home = () => {
  return (
    <section className="hero section" id="home">

      {/* Ghost background text */}
      <div className="hero__bg-text">Learner</div>

      {/* Sidebar socials */}
      <div className="hero__social">
        <a href="https://github.com/VethikaV" target="_blank" rel="noopener noreferrer" className="hero__social-link" title="GitHub">
          <RiGithubFill size={15} />
        </a>
        <a href="https://www.linkedin.com/in/vethika-venkatraman-106082210/" target="_blank" rel="noopener noreferrer" className="hero__social-link" title="LinkedIn">
          <RiLinkedinBoxFill size={15} />
        </a>
        <a href="https://www.instagram.com/_vethika__/" target="_blank" rel="noopener noreferrer" className="hero__social-link" title="Instagram">
          <RiInstagramLine size={15} />
        </a>
      </div>

      <div className="hero__content">

        {/* Name block */}
        <div className="hero__name-block">
          <span className="hero__big">Vethika V</span>
        </div>

        {/* Meta row */}
        <div className="hero__meta">
          <p className="hero__desc">
            I am a curious and passionate student with a strong enthusiasm for learning new technologies and exploring innovative ideas. 
           </p>
          
          <div className="hero__ctas">
            <a href="#project" className="hero__btn hero__btn--gold">
              <RiArrowRightLine size={14} /> View Projects
            </a>
            <a href={resume} download className="hero__btn hero__btn--outline">
              <RiDownloadLine size={14} /> Resume
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">8.83</span>
            <span className="hero__stat-label">CGPA</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">4+</span>
            <span className="hero__stat-label">Internships</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">9+</span>
            <span className="hero__stat-label">Projects</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">5</span>
            <span className="hero__stat-label">NPTEL Certs</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
