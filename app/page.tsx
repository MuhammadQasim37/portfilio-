import { profile, skillGroups, projects, journey, approach } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";

const links = [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Journey", "journey"], ["Approach", "approach"], ["Contact", "contact"]];

const jsonLd = {
  "@context": "https://schema.org", "@type": "Person", name: profile.name,
  jobTitle: "Junior Software Associate", email: profile.email, sameAs: [profile.linkedin, profile.github],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#top">{profile.name}</a>
          <nav aria-label="Primary">{links.map(([l, id]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        </div>
      </header>
      <main id="top">
        <section className="hero">
          <div className="wrap">
            <h1>{profile.name}</h1>
            <p className="role">{profile.title}</p>
            <p className="tag">{profile.tagline}</p>
            <div className="btns">
              <a className="btn primary" href="#projects">View projects</a>
              <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>

        <section className="section" id="about"><div className="wrap">
          <h2>About me</h2>
          {profile.about.map((p) => <p key={p} className="lead">{p}</p>)}
          <ul className="chips" aria-label="Interests">{profile.interests.map((i) => <li key={i}>{i}</li>)}</ul>
        </div></section>

        <section className="section" id="skills"><div className="wrap">
          <h2>Technical skills</h2>
          <p className="lead">The technologies I work with, grouped by area.</p>
          <div className="grid">
            {skillGroups.map((g) => (
              <div className="card" key={g.title}>
                <h3>{g.title}</h3>
                <ul className="chips">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div></section>

        <section className="section" id="projects"><div className="wrap">
          <h2>Featured projects</h2>
          <p className="lead">Python backends, AI features and business automation. Each project shows its real status.</p>
          <div className="grid">{projects.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
        </div></section>

        <section className="section" id="journey"><div className="wrap">
          <h2>Professional journey</h2>
          <p className="lead">My education, training and current role.</p>
          <ol className="timeline">{journey.map((j) => <li key={j.title}>
              <p className="period">{j.period}</p>
              <h3>{j.title}</h3>
              {j.place && <p>{j.place}</p>}
              {j.text && <p>{j.text}</p>}
            </li>)}</ol>
        </div></section>

        <section className="section" id="approach"><div className="wrap">
          <h2>Development approach</h2>
          <div className="grid" style={{ marginTop: 28 }}>
            {approach.map((a) => <div className="card" key={a.title}><h3>{a.title}</h3><p>{a.text}</p></div>)}
          </div>
        </div></section>

        <section className="section" id="contact"><div className="wrap">
          <h2>Contact</h2>
          <p className="lead">Looking for a Python or AI automation developer? Send me a message.</p>
          <div className="contact-grid">
            <ContactForm />
            <ul>
              <li>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">Muhammad Qasim</a></li>
              <li>GitHub: <a href={profile.github} target="_blank" rel="noopener noreferrer">MuhammadQasim37</a></li>
            </ul>
          </div>
        </div></section>
      </main>
      <footer><div className="wrap">© {new Date().getFullYear()} {profile.name}</div></footer>
    </>
  );
}
