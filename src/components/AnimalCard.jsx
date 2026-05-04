export default function AnimalCard({ animal }) {
  return (
    <div
      className="card animal-card"
      style={{ backgroundImage: `url(${animal.image})` }}
      tabIndex={0}
      onClick={() => alert(`${animal.name}: ${animal.fact}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          alert(`${animal.name}: ${animal.fact}`);
        }
      }}
    >
      <span>{animal.name}</span>
    </div>
  );
}
