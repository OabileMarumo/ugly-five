export function createContactForm() {
  const container = document.createElement('div');
  container.className = 'contact-container';
  
  let loading = false;
  
  container.innerHTML = `
    <div class="contact-info">
      <p>📧 <strong>Email:</strong> <a href="mailto:info@uglyfive.com">info@uglyfive.com</a></p>
      <p>📞 <strong>Phone:</strong> +267 77134077 / +267 75048446</p>
      <p>📍 <strong>Location:</strong> Kasane, Chobe, Botswana</p>
      <p>🕘 <strong>Office Hours:</strong> Mon-Sat 8am-5pm (CAT)</p>
    </div>
    
    <div class="booking-form" id="booking">
      <h3 style="margin-bottom: 1rem; color: #3b2a1f">Request a Safari Quote</h3>
      <form id="contact-form">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        
        <div class="form-group">
          <label for="tour">Preferred Safari Package *</label>
          <select id="tour" name="tour" required>
            <option value="">Select a tour</option>
            <option value="Victoria Falls day trip">Victoria Falls day trip</option>
            <option value="Chobe Day trip Safari">Chobe Day trip Safari</option>
            <option value="Private safari Experience">Private safari Experience</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="date">Preferred Date</label>
          <input type="date" id="date" name="date" />
        </div>
        
        <div class="form-group">
          <label for="guests">Number of Guests</label>
          <input type="number" id="guests" name="guests" min="1" max="20" value="1" />
        </div>
        
        <div class="form-group">
          <label for="message">Special Requests / Questions</label>
          <textarea id="message" name="message" rows="3" placeholder="Dietary restrictions, accessibility needs, etc."></textarea>
        </div>
        
        <button type="submit" id="submit-btn">Send Booking Request</button>
        <div id="status-message"></div>
      </form>
    </div>
  `;
  
  const form = container.querySelector('#contact-form');
  const statusDiv = container.querySelector('#status-message');
  const submitBtn = container.querySelector('#submit-btn');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    loading = true;
    submitBtn.disabled = true;
    statusDiv.textContent = 'Sending...';
    statusDiv.style.color = '#d68b2c';
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      tour: document.getElementById('tour').value,
      date: document.getElementById('date').value,
      guests: document.getElementById('guests').value,
      message: document.getElementById('message').value,
    };
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        statusDiv.textContent = `Thank you, ${formData.name}! We'll contact you soon.`;
        statusDiv.style.color = 'green';
        form.reset();
      } else {
        statusDiv.textContent = 'Something went wrong. Please try again.';
        statusDiv.style.color = 'red';
      }
    } catch (error) {
      console.error('Error:', error);
      statusDiv.textContent = 'Failed to send. Please try again or contact us directly.';
      statusDiv.style.color = 'red';
    } finally {
      loading = false;
      submitBtn.disabled = false;
    }
  });
  
  return container;
}
