function Home({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Disaster Response System</h1>

        <p>
          Stay informed, report disasters and find emergency support quickly.
        </p>

        <button onClick={() => onNavigate("Report")}>
          Report Disaster
        </button>
      </div>

      <div className="stats">
        <div>
          <h2>24/7</h2>
          <p>Emergency Support</p>
        </div>

        <div>
          <h2>6+</h2>
          <p>Disaster Types</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Awareness</p>
        </div>
      </div>
    </section>
  );
}

export default Home;