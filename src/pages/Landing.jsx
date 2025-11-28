import React from "react";
import { Link } from 'react-router-dom';
import { FaUsers, FaDumbbell, FaHandshake, FaMusic, FaCamera, FaStar } 
from "react-icons/fa";
import FooterSimple from "../components/FooterSimple";
import "../styles/LandingPage.css";
import Logo from "../assets/Logo.png";
export default function Landing(){
  return (
    <div className="lp-root">
      <nav className="lp-navbar">
        <div className="lp-brand">
          <img src={Logo} alt="Imena Moves" />
          <span>Imena Moves</span>
        </div>
        <ul className="lp-menu">
          <li><Link to='/signup'>Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
         </ul>
      </nav>

      <section className="lp-hero">
        <div className="lp-hero-inner">
          <h1 className="lp-title">Talent. <span className="lp-animated">Discipline.</span> Movement.</h1>
          <p className="lp-sub">Join a vibrant performing community reshaping motion arts in Rwanda.</p>
          <div className="lp-ctas">
            <a href="/userdashboard" className="btn primary">User Dashboard</a>
            <a href="/learn" className="btn ghost">Learn More</a>
          </div>

          <div className="lp-highlights">
            <div className="hp">
              <FaUsers className="hp-icon"/><span>Active Crew</span>
            </div>
            <div className="hp">
              <FaStar className="hp-icon"/><span>Workshops</span>
            </div>
            <div className="hp">
              <FaMusic className="hp-icon"/><span>Music Partners</span>
            </div>
          </div>
        </div>

        <div className="lp-hero-art">
          <img src="/dance-hero.png" alt="dancers" />
          <div className="floating-circles">
            <span className="circle c1"></span>
            <span className="circle c2"></span>
            <span className="circle c3"></span>
          </div>
        </div>
      </section>

      <section id="features" className="lp-features">
        <h2>What We Do</h2>
        <div className="features-grid">
          <article className="feature">
            <FaUsers className="ficon"/><h3>Dance Choreography</h3>
            <p>Crafted routines for stage, film and events.</p>
          </article>

          <article className="feature">
            <FaDumbbell className="ficon"/><h3>Fitness & Body Control</h3>
            <p>Conditioning programs for dancers and performers.</p>
          </article>

          <article className="feature">
            <FaHandshake className="ficon"/><h3>Collaboration & Shows</h3>
            <p>Partnering with brands and artists for live events.</p>
          </article>

          <article className="feature">
            <FaMusic className="ficon"/><h3>Music & DJing</h3>
            <p>Sound design and music partnerships for performances.</p>
          </article>

          <article className="feature">
            <FaCamera className="ficon"/><h3>Media & Promotion</h3>
            <p>Photography, videography and social promotion.</p>
          </article>

          <article className="feature">
            <FaStar className="ficon"/><h3>Talent Development</h3>
            <p>Trainings, coaching and talent scouting programs.</p>
          </article>
        </div>
      </section>

      <section id="about" className="lp-about">
        <h2>About Imena Moves</h2>
        <p>
          Imena Moves is a community of performers dedicated to raising the bar
          in motion arts across Rwanda. We run workshops, collaborate on creative
          projects, and produce shows that celebrate talent and discipline.
        </p>
      </section>

      <FooterSimple />
    </div>
  );
}