import React from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import "../styles/FooterSimple.css";

export default function FooterSimple(){
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <img src="/logo.png" alt="Imena Moves" className="footer-logo" />
          <p className="muted">Imena Moves — Talent. Discipline. Movement.</p>
        </div>
        {/* <div className="footer-links">
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div> */}
        <div className="footer-social">
          <a href="https://www.youtube.com/channel/UCsjwZMUfPwkM-5lk0QA-QSA" target="_blank" rel="noreferrer"><FaYoutube/></a>
          <a href="https://www.instagram.com/imenamoves" target="_blank" rel="noreferrer"><FaInstagram/></a>
          <a href="https://web.facebook.com/share/17N54HU5e1/" target="_blank" rel="noreferrer"><FaFacebook/></a>
          <a href="https://www.tiktok.com/@imenamovies" target="_blank" rel="noreferrer"><FaTiktok/></a>
        </div>
      </div>
      <div className="footer-bottom">© 2025 Imena Moves — All Rights Reserved</div>
    </footer>
  );

}
