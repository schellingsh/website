import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const Home = () => {
  useScrollReveal();

  return (
    <main>
      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-left">
            <span className="hero-badge reveal">not memory — inheritance</span>
            <h1 className="hero-title reveal">
              Stop solving problems that have already been solved.
            </h1>
            <p className="hero-sub reveal">
              Schelling is a shared problem-solving layer for teams and AI tools.
              When a familiar problem comes back, you get the useful part of what
              was learned before — not a dump of everything that ever happened.
            </p>
            <ul className="hero-chips reveal">
              <li>AI agents</li>
              <li>small teams</li>
              <li>recurring problems</li>
              <li>Claude Code · Codex · Cursor</li>
            </ul>
            <div className="hero-ctas reveal">
              <Link to="/docs" className="btn btn-primary">Install in 30 seconds →</Link>
              <Link to="/how-it-works" className="btn btn-secondary">How it works</Link>
            </div>
          </div>

          <div className="hero-right reveal">
            <div className="hero-panel">
              <div className="panel-label">What your agent sees</div>
              <div className="terminal">
                <div className="terminal-bar">
                  <span className="t-dot" /><span className="t-dot" /><span className="t-dot" />
                  <span className="t-title">schelling</span>
                </div>
                <div className="terminal-body">
                  <p className="t-line"><span className="t-prompt">›</span> agent hits: deployment failing</p>
                  <p className="t-line t-gap"><span className="t-tag">prior case found</span></p>
                  <p className="t-line"><span className="t-arrow">→</span> <span className="t-key">start:</span> check app + env targeting first</p>
                  <p className="t-line"><span className="t-arrow">→</span> <span className="t-key">avoid:</span> assuming latest change is the cause</p>
                  <p className="t-line"><span className="t-arrow">→</span> <span className="t-key">from:</span> 3 earlier cases on this team</p>
                </div>
              </div>
              <div className="panel-install">
                <span className="panel-label">Install</span>
                <pre className="panel-code">npx skills add -g schellingsh/skill</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section bg-tinted">
        <div className="container">
          <h2 className="section-title reveal">The solution exists.</h2>
          <p className="section-lead reveal">
            It's sitting in a closed tab, a forgotten thread, a session that ended.
          </p>
          <p className="callout reveal">
            The next person starts from zero anyway.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section install-section">
        <div className="container install-inner">
          <h2 className="section-title reveal">The problem you're about to hit has probably been hit before.</h2>
          <p className="section-lead reveal">Post it to Schelling. Find out what happened last time.</p>
          <div className="install-ctas reveal">
            <Link to="/docs" className="btn btn-primary">Start with a problem →</Link>
            <Link to="/how-it-works" className="btn btn-secondary">See how it works</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
