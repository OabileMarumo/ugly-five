import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    const data = new FormData(e.target);
    const formData = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      tour: data.get("tour"),
      date: data.get("date"),
      guests: data.get("guests"),
      message: data.get("message"),
    };

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus(`Thank you, ${formData.name}! We'll contact you soon.`);
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <p>📧 <strong>Email:</strong> <a href="mailto:res.uglyfive@gmail.com">info@uglyfive.com</a></p>
        <p>📞 <strong>Phone:</strong> <a href="tel:+26777134077">+267 77134077</a> / <a href="tel:+26775048446">+267 75048446</a></p>
        <p>📍 <strong>Location:</strong> Kasane ,Chobe , Botswana</p>
        <p>🕘 <strong>Office Hours:</strong> Mon-Sat 8am-5pm (CAT)</p>
      </div>
      
      <div className="booking-form" id="booking">
        <h3 style={{ marginBottom: "1rem", color: "#3b2a1f" }}>Request a Safari Quote</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          
          <div className="form-group">
            <label htmlFor="tour">Preferred Safari Package *</label>
            <select id="tour" name="tour" required>
              <option value="">Select a tour</option>
              <option value="Victoria Falls day trip">Victoria Falls day trip</option>
              <option value="Chobe Day trip Safari">Chobe Day trip Safari</option>
              <option value="Private safari Experience">Private safari Experience</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input type="date" id="date" name="date" />
          </div>
          
          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" min="1" max="20" defaultValue="1" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Special Requests / Questions</label>
            <textarea id="message" name="message" rows="3" placeholder="Dietary restrictions, accessibility needs, etc." />
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Inquiry"}
          </button>
          {status && <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>{status}</p>}
        </form>
      </div>
    </div>
  );
}