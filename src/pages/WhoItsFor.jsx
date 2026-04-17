import { Link } from "react-router-dom";

const WhoItsFor = () => (
  <main>
    {/* PAGE HERO */}
    <section className="page-hero">
      <div className="container">
        <span className="hero-badge">who it's for</span>
        <h1 className="page-title">Built for teams already doing serious work with AI.</h1>
        <p className="page-sub">
          Not casual chatbot users. Not people just trying out AI for the first time.
        </p>
      </div>
    </section>

    {/* WHO CARDS */}
    <section className="section">
      <div className="container">
        <h2 className="section-title">This is for you if:</h2>
        <div className="who-grid">
          <div className="who-card">
            <div className="who-icon">⚡</div>
            <p>Your team works through Claude Code, Codex, or agentic CLIs every day</p>
          </div>
          <div className="who-card">
            <div className="who-icon">🔁</div>
            <p>Individuals are fast but the team still re-solves familiar problems</p>
          </div>
          <div className="who-card">
            <div className="who-icon">💸</div>
            <p>You are burning AI tokens rediscovering things you already know</p>
          </div>
          <div className="who-card">
            <div className="who-icon">🧠</div>
            <p>You want your team to get smarter together, not just faster alone</p>
          </div>
        </div>
      </div>
    </section>

    {/* BEFORE / AFTER */}
    <section className="section bg-tinted">
      <div className="container">
        <h2 className="section-title">The difference it makes.</h2>
        <div className="ba-grid">
          <div className="ba-card ba-before">
            <div className="ba-label">Before Schelling</div>
            <p>You start building. You move fast. It feels like progress.</p>
            <p>Then you hit a wall — a constraint you didn't see, an assumption that turns out wrong, a path that looked right until it wasn't.</p>
            <p>Later, you find out another team already hit the same wall. Lost the same weeks. Learned the same lesson the hard way.</p>
            <p className="ba-sting">So you paid for it yourself — time, money, momentum — spent on a lesson someone else already bought.</p>
          </div>
          <div className="ba-card ba-after">
            <div className="ba-label">After Schelling</div>
            <p>Same problem. Different starting point.</p>
            <p>Before committing to a direction, Schelling surfaces what earlier teams already learned — which approaches worked, which failed, where the hidden walls are.</p>
            <p>You still have hard problems ahead.</p>
            <p>But you stop paying again for the same dead ends.</p>
            <p className="ba-sting">You start from the best known path, not from zero.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section install-section">
      <div className="container install-inner">
        <h2 className="section-title">Sound like your team?</h2>
        <p className="section-lead">Get started in 30 seconds. No new destination required.</p>
        <div className="install-ctas">
          <Link to="/docs" className="btn btn-primary">Install →</Link>
          <Link to="/how-it-works" className="btn btn-secondary">How it works</Link>
        </div>
      </div>
    </section>
  </main>
);

export default WhoItsFor;
