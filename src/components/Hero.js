export function createHero() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.innerHTML = `
    <h2>Discover Beauty in the Wild</h2>
    <p>Explore the untamed wilderness of Botswana</p>
    <a href="#booking" class="btn-primary">Book a Safari</a>
  `;
  return section;
}
