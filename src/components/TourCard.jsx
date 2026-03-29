export default function TourCard({ tour }) {
  return (
    <div
      className="card animal-card"
      style={{ backgroundImage: `url(${tour.image})` }}
      tabIndex={0}
      onClick={() => alert(tour.fact)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          alert(tour.fact);
        }
      }}
    >
      <span>{tour.name}</span>
    </div>
  );
}