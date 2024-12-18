import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { BsTwitter, BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };
    
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));

    try {
      const response = await fetch('https://formspree.io/f/xrbgwjyb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setLoading(false);
        setIsFormSubmitted(true);
      } else {
        console.error('Form submission failed:', response.statusText);
        setLoading(false);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setLoading(false);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   client.create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:gideonabe2020@gmail.com" className="p-text">gideonabe2020@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+(234) 7053474611" className="p-text">+(234) 7053474611</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}

      <div className="app__footer-socials">
        <a href="https://x.com/gideon_abe?t=nwfNFiDlVlbbyesdAb8QUA&s=09" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>

        <a href="https://wa.me/qr/VC223KV77QNAM1" target="_blank" rel="noopener noreferrer"><BsWhatsapp /></a>

        
        <a href="https://www.linkedin.com/in/gideon-abe-79b6ab341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>

        <a href="https://www.facebook.com/abe.ayokunle.9" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>

        <a href="https://www.instagram.com/gideon__abe?utm_source=qr&igsh=MTRqMGJsdDBpbmF1Ng==" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>

      </div>

      {/* Copyright Section */}
      <div className="app__footer-copyright">
        <p className="p-text">© {new Date().getFullYear()} Deon. All rights reserved.</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
