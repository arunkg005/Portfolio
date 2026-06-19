import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="animate-on-scroll mb-32">
      <div className="contact-box-container bg-[var(--card-bg)] p-8 md:p-12 rounded-2xl border border-[var(--card-border)] shadow-[var(--card-shadow)] max-w-[1060px] mx-auto transition-all duration-300 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Info & Socials */}
        <div className="contact-info-panel flex flex-col justify-center items-center text-center md:text-left md:items-start gap-8">
          <div>
            <h2 className="font-headline-lg text-[var(--primary)] text-3xl font-bold">Get In Touch</h2>
            <p className="font-body-md text-[var(--on-surface-variant)] mt-4 max-w-[400px] leading-relaxed">
              I am open to new opportunities and professional connections. Feel free to reach out via the form or my social networks!
            </p>
          </div>

          <div className="contact-socials flex gap-4 mt-2">
            <a
              className="social-circle-link w-12 h-12 rounded-full bg-[var(--surface-container)] shadow-[var(--neu-ext)] flex items-center justify-center text-[var(--on-surface-variant)] transition-all duration-300 hover:text-[var(--primary)] hover:shadow-[var(--neu-ext-hover)] hover:-translate-y-0.5 active:shadow-[var(--neu-sun)] active:translate-y-0.5"
              href="https://www.linkedin.com/in/arun-kumar-gupta-446748267/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              className="social-circle-link w-12 h-12 rounded-full bg-[var(--surface-container)] shadow-[var(--neu-ext)] flex items-center justify-center text-[var(--on-surface-variant)] transition-all duration-300 hover:text-[var(--primary)] hover:shadow-[var(--neu-ext-hover)] hover:-translate-y-0.5 active:shadow-[var(--neu-sun)] active:translate-y-0.5"
              href="https://github.com/arunkg005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              className="social-circle-link w-12 h-12 rounded-full bg-[var(--surface-container)] shadow-[var(--neu-ext)] flex items-center justify-center text-[var(--on-surface-variant)] transition-all duration-300 hover:text-[var(--primary)] hover:shadow-[var(--neu-ext-hover)] hover:-translate-y-0.5 active:shadow-[var(--neu-sun)] active:translate-y-0.5"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=akgindian55@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <span className="material-symbols-outlined flex items-center justify-center leading-none" style={{ fontSize: '20px' }}>
                mail
              </span>
            </a>
          </div>
        </div>

        {/* Right Side: Working Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col w-full text-left" noValidate>
          <div className="form-group mb-6">
            <label htmlFor="name" className="font-mono text-xs font-semibold tracking-wider text-[var(--primary)] ml-4 mb-2 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`form-input w-full bg-[rgba(0,0,0,0.2)] border rounded-full px-6 py-4 outline-none font-sans text-sm text-[var(--primary)] transition-all duration-300 placeholder-[rgba(195,199,198,0.5)] focus:bg-[rgba(0,0,0,0.3)] focus:border-[var(--secondary)] focus:shadow-[0_0_0_2px_rgba(182,201,219,0.2)] ${
                errors.name ? 'border-[var(--error)] shadow-[0_0_0_2px_rgba(255,180,171,0.25)]' : 'border-[rgba(182,201,219,0.15)]'
              }`}
            />
            {errors.name && (
              <span className="error-msg visible font-mono text-[11px] text-[var(--error)] mt-1.5 ml-4 block">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-group mb-6">
            <label htmlFor="email" className="font-mono text-xs font-semibold tracking-wider text-[var(--primary)] ml-4 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className={`form-input w-full bg-[rgba(0,0,0,0.2)] border rounded-full px-6 py-4 outline-none font-sans text-sm text-[var(--primary)] transition-all duration-300 placeholder-[rgba(195,199,198,0.5)] focus:bg-[rgba(0,0,0,0.3)] focus:border-[var(--secondary)] focus:shadow-[0_0_0_2px_rgba(182,201,219,0.2)] ${
                errors.email ? 'border-[var(--error)] shadow-[0_0_0_2px_rgba(255,180,171,0.25)]' : 'border-[rgba(182,201,219,0.15)]'
              }`}
            />
            {errors.email && (
              <span className="error-msg visible font-mono text-[11px] text-[var(--error)] mt-1.5 ml-4 block">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group mb-6">
            <label htmlFor="message" className="font-mono text-xs font-semibold tracking-wider text-[var(--primary)] ml-4 mb-2 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              className={`form-input w-full bg-[rgba(0,0,0,0.2)] border rounded-2xl px-6 py-4 outline-none font-sans text-sm text-[var(--primary)] transition-all duration-300 placeholder-[rgba(195,199,198,0.5)] resize-none min-h-[120px] focus:bg-[rgba(0,0,0,0.3)] focus:border-[var(--secondary)] focus:shadow-[0_0_0_2px_rgba(182,201,219,0.2)] ${
                errors.message ? 'border-[var(--error)] shadow-[0_0_0_2px_rgba(255,180,171,0.25)]' : 'border-[rgba(182,201,219,0.15)]'
              }`}
            />
            {errors.message && (
              <span className="error-msg visible font-mono text-[11px] text-[var(--error)] mt-1.5 ml-4 block">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`btn-submit w-full py-4 rounded-full shadow-[var(--neu-ext)] bg-[var(--surface-container-highest)] text-[var(--primary)] border-none cursor-pointer font-mono text-xs font-semibold tracking-wider transition-all duration-300 mt-4 hover:bg-[var(--surface-bright)] hover:shadow-[var(--neu-ext-hover)] hover:-translate-y-0.5 active:shadow-[var(--neu-sun)] active:translate-y-0.5 disabled:opacity-50 ${
              status === 'success' ? 'success bg-[rgba(76,175,80,0.3)] text-[#a5d6a7]' : ''
            }`}
          >
            {status === 'idle' && 'Send Message'}
            {status === 'submitting' && 'Sending...'}
            {status === 'success' && '✓ Message Sent Successfully!'}
          </button>
        </form>
      </div>
    </section>
  );
}
