import { createNavbar } from './components/Navbar.js';
import { createHero } from './components/Hero.js';
import { createAnimalCard } from './components/AnimalCard.js';
import { createTourCard } from './components/TourCard.js';
import { createContactForm } from './components/ContactForm.js';
import { animals } from './data/animals.js';
import { tours } from './data/tours.js';

export function createApp() {
  const container = document.createElement('fragment');
  
  // Navbar
  const navbar = createNavbar();
  
  // Hero
  const hero = createHero();
  
  // About Section
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
  aboutSection.innerHTML = `
    <h2>About Us</h2>
    <div class="about-text">
      <p>
        Located in Chobe National Park, we offer unique safari experiences
        focused on the often-overlooked "Ugly Five" animals of Africa.
        Witness raw wilderness, authentic guided tours, and the true
        heartbeat of the savanna. Our conservation-focused approach brings
        you closer to nature's misunderstood marvels.
      </p>
      <p style="margin-top: 1rem">
        All tours led by certified local guides with deep knowledge of
        Chobe's ecosystem.
      </p>
    </div>
  `;
  
  // Animals Section
  const animalsSection = document.createElement('section');
  animalsSection.id = 'animals';
  const header2 = document.createElement('h2');
  header2.textContent = 'The Ugly Five';
  animalsSection.appendChild(header2);
  
  const cardsDiv = document.createElement('div');
  cardsDiv.className = 'cards';
  animals.forEach((animal) => {
    cardsDiv.appendChild(createAnimalCard(animal));
  });
  animalsSection.appendChild(cardsDiv);
  
  // Tours Section
  const toursSection = document.createElement('section');
  toursSection.id = 'tours';
  const header3 = document.createElement('h2');
  header3.textContent = 'Safari Packages';
  toursSection.appendChild(header3);
  
  const toursCardsDiv = document.createElement('div');
  toursCardsDiv.className = 'cards';
  tours.forEach((tour) => {
    toursCardsDiv.appendChild(createTourCard(tour));
  });
  toursSection.appendChild(toursCardsDiv);
  
  const note = document.createElement('div');
  note.style.textAlign = 'center';
  note.style.marginTop = '2rem';
  note.innerHTML = `
    <span style="background: #d68b2c20; padding: 0.4rem 1.2rem; border-radius: 40px;">
      🌍 All trips include expert guides, refreshments & park fees
    </span>
  `;
  toursSection.appendChild(note);
  
  // Contact Section
  const contactSection = document.createElement('section');
  contactSection.id = 'contact';
  const header4 = document.createElement('h2');
  header4.textContent = 'Contact Us & Book Your Adventure';
  contactSection.appendChild(header4);
  contactSection.appendChild(createContactForm());
  
  // Footer
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>
      © 2026 The Ugly Five Safari | Botswana | Chobe National Park Heritage
    </p>
  `;
  
  // Assemble into fragment
  const fragment = document.createDocumentFragment();
  fragment.appendChild(navbar);
  fragment.appendChild(hero);
  fragment.appendChild(aboutSection);
  fragment.appendChild(animalsSection);
  fragment.appendChild(toursSection);
  fragment.appendChild(contactSection);
  fragment.appendChild(footer);
  
  return fragment;
}
