import { useState } from "react";
import DisasterCard from "../components/DisasterCard";

function Disasters() {
  const [search, setSearch] = useState("");

  const disasters = [
    {
      icon: "🌊",
      title: "Flood",
      description: "Flood safety information and preventive measures."
    },
    {
      icon: "🌎",
      title: "Earthquake",
      description: "Safety guidelines for before, during and after earthquakes."
    },
    {
      icon: "⛰️",
      title: "Landslide",
      description: "Information about landslide risks and safety."
    },
    {
      icon: "🔥",
      title: "Fire",
      description: "Fire prevention and emergency safety information."
    },
    {
      icon: "🌧️",
      title: "Heavy Rainfall",
      description: "Safety information during heavy rainfall."
    },
    {
      icon: "⚡",
      title: "Lightning",
      description: "Safety tips to protect yourself from lightning."
    }
  ];

  const filteredDisasters = disasters.filter((disaster) =>
    disaster.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="page">
      <h1>Disaster Information</h1>

      <input
        className="search"
        type="text"
        placeholder="Search disaster..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cards">
        {filteredDisasters.map((disaster) => (
          <DisasterCard
            key={disaster.title}
            icon={disaster.icon}
            title={disaster.title}
            description={disaster.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Disasters;