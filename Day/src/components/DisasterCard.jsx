function DisasterCard({ icon, title, description }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>View Details</button>
    </div>
  );
}

export default DisasterCard;