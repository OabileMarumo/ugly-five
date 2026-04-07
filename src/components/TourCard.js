export function createTourCard(tour) {
  const card = document.createElement('div');
  card.className = 'card animal-card';
  card.style.backgroundImage = `url(${tour.image})`;
  card.tabIndex = 0;
  card.innerHTML = `<span>${tour.name}</span>`;
  
  const handleClick = () => alert(tour.fact);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      alert(tour.fact);
    }
  };
  
  card.addEventListener('click', handleClick);
  card.addEventListener('keydown', handleKeyDown);
  
  return card;
}
