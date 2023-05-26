import React, { useState, useEffect } from 'react';
import Button from '../../styles/GlobalComponents/Button';
import emailjs from "@emailjs/browser";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const ContactMe = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_kq386h5',
        'template_dp8duig',
        e.target,
        '-VAsM2labWKSHJUfM'
      )
      .then(
        (result) => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible!');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Oops! Something went wrong.');
        }
      );
  };

  return (
    <Section nopadding id="contactme">
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={{ marginRight: isMobile ? '0' : '40px', marginBottom: isMobile ? '40px' : '0' }}>
          <img src="/images/me.png" alt="Your Image" style={{ width: '200px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
        <div>
          <SectionTitle>Contact Me</SectionTitle>
          <p>
            <strong>Email:</strong> brandonlu3556@gmail.com
          </p>
          <br />

          <p>
            <strong>LinkedIn:</strong> www.linkedin.com/in/brandon-lu14
          </p>
          <br />

          <p>
            <strong>GitHub:</strong> https://github.com/Brandonnl
          </p>
        </div>
      </div>
      <br />
      <SectionDivider />
      <br />
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={{ marginRight: isMobile ? '0' : '40px', width: isMobile ? '100%' : '400px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                style={{
                  marginBottom: '16px',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '100%',
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                style={{
                  marginBottom: '16px',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '100%',
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                style={{
                  marginBottom: '16px',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '100%',
                  height: '120px',
                }}
              ></textarea>
              <Button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
