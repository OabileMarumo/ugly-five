export function createAnimalCard(animal) {
  const card = document.createElement('div');
  card.className = 'card animal-card';
  card.style.backgroundImage = `url(${animal.image})`;
  card.tabIndex = 0;
  card.innerHTML = `<span>${animal.name}</span>`;
  
  const handleClick = () => alert(`${animal.name}: ${animal.fact}`);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      alert(`${animal.name}: ${animal.fact}`);
    }
  };
  
  card.addEventListener('click', handleClick);
  card.addEventListener('keydown', handleKeyDown);
  
  return card;
}
