function Emergency() {
  const contacts = [
    {
      icon: "🚓",
      title: "Police",
      number: "100"
    },
    {
      icon: "🚑",
      title: "Ambulance",
      number: "102"
    },
    {
      icon: "🚒",
      title: "Fire Brigade",
      number: "101"
    },
    {
      icon: "☎️",
      title: "National Emergency",
      number: "112"
    }
  ];

  return (
    <section className="page">
      <h1>Emergency Contacts</h1>

      <div className="cards">
        {contacts.map((contact) => (
          <div className="card" key={contact.title}>
            <div className="icon">{contact.icon}</div>

            <h2>{contact.title}</h2>

            <h3>{contact.number}</h3>

            <a href={`tel:${contact.number}`}>
              <button>Call Now</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Emergency;