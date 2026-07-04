function App() {
  const projects = [
    { name: "Project One", desc: "Short one-line description", year: "2026" },
    { name: "Project Two", desc: "Short one-line description", year: "2025" },
    { name: "Project Three", desc: "Short one-line description", year: "2025" },
  ]

  return (
    <div className="container">
      <nav>
        <strong>Nam Tran</strong>
        <div className="links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Hey, my name is Nam<br /></h1>
        <p>I'm an inspiring UX designer, researcher</p>
      </section>

      <section id="work">
        <h2>Selected Work</h2>
        {projects.map((p) => (
          <div className="project" key={p.name}>
            <h3>{p.name}</h3>
            <span>{p.year}</span>
          </div>
        ))}
      </section>

      <section id="about">
        <h2>About</h2>
        <p>A short paragraph about your background, what you're focused on right now, and what kind of work you're looking for.</p>
      </section>

      <footer id="contact">
        <p>Get in touch — ntran180@uw.edu</p>
      </footer>
    </div>
  )
}

export default App