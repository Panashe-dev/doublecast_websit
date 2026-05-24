import { useState } from "react";

const services = [
  "Tendering & Quantity Surveying",
  "Site Clearance & Excavation",
  "Substructure & Brickwork",
  "Roofing & Structural Works",
  "Electrical Works & Tubing",
  "Building Finishes",
  "Renovations & Refurbishment",
  "Pavement & Civil Works",
  "Full Construction Project",
  "Other",
];

const Pin = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
  </svg>
);
const Phone = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.05z" />
  </svg>
);
const Mail = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState({
    label: "Send Enquiry",
    sending: false,
    sent: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status.sending) return;
    setStatus({ label: "Sending…", sending: true, sent: false });
    setTimeout(() => {
      setStatus({ label: "✓ Message Sent", sending: false, sent: true });
      e.target.reset();
      setTimeout(
        () => setStatus({ label: "Send Enquiry", sending: false, sent: false }),
        3000,
      );
    }, 1400);
  };

  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="contact-left reveal-left">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let&apos;s plan your build.</h2>
          <p className="section-sub">
            Share a few details about your project and we&apos;ll get back to
            you within one working day.
          </p>
          <div className="contact-info">
            <p>
              <Pin /> 19446 Damafalls, Harare, Zimbabwe
            </p>
            <p>
              <Phone />
              <span>
                +263 77 116 5810
                <br />
                +263 78 291 5280
                <br />
                +263 77 870 1389
              </span>
            </p>
            <p>
              <Mail /> doublecastconstruction@gmail.com
            </p>
          </div>
        </div>
        <div className="contact-right reveal-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fname">First name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="John"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last name</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone / WhatsApp</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+263 ..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service required</label>
              <select id="service" name="service" defaultValue="">
                <option value="">— Select a service —</option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                placeholder="Location, scope, timeline, budget — the more detail the better..."
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-solid"
              disabled={status.sending}
              style={{
                alignSelf: "flex-start",
                padding: "15px 32px",
                background: status.sent ? "#22c55e" : undefined,
                borderColor: status.sent ? "#22c55e" : undefined,
              }}>
              {status.label}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
