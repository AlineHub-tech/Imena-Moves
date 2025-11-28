import React, { useState } from "react";
import "../styles/InfoPage.css";
// import { AppProvider } from '../Context/AppContext'; // optional - if your AppContext provides addMessage

export default function Contact(){
  const { addMessage } = useApp?.() ?? {}; // safe if context not present
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = { id: crypto.randomUUID(), name, email, message, date: new Date().toISOString() };

    // if context provided -> use it, otherwise localStorage
    if (typeof addMessage === "function"){
      addMessage(msg.message || "Contact message"); // if your context expects a simple string adjust
    } else {
      const arr = JSON.parse(localStorage.getItem("contacts")||"[]");
      arr.unshift(msg);
      localStorage.setItem("contacts", JSON.stringify(arr));
    }

    alert("Message sent — thank you!");
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <div className="info-root">
      <div className="info-hero">
        <div className="hero-icon">CT</div>
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>Ufite ikibazo cyangwa ushaka ko abana bahabwa amahugurwa? Twandikire hano hasi.</p>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Our Office</h3>
          <p>Kigali, Rwanda</p>
          <p>Email: info@imenamoves.rw</p>
          <p>Phone: +250 788 000 000</p>
          <hr style={{margin:"12px 0"}}/>
          <h4>Follow us</h4>
          <p>Instagram / Facebook / YouTube</p>
        </div>

        <div className="form-card">
          <h3>Send a message</h3>
          <form onSubmit={handleSubmit}>
            <input placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required/>
            <input placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} required/>
            <textarea placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} rows={6} required/>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

