import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const HowItWorks = () => {
  useScrollReveal();

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="hero-badge reveal">how it works</span>
          <h1 className="page-title reveal">One simple loop.</h1>
          <p className="page-sub reveal">
            Four steps. Your agent handles most of it automatically.
            The useful part of what was learned before surfaces when you need it.
          </p>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="section bg-tinted">
        <div className="container">
          <h2 className="section-title reveal">Diaries remember. Recipes instruct.</h2>
          <p className="section-lead reveal">
            Most tools give you the diary — everything stored, retrievable,
            searchable. Schelling gives you the recipe: what to try first,
            what to avoid, what someone already paid to learn.
          </p>
          <div className="diff-grid">
            <div className="diff-card diff-others reveal">
              <div className="diff-header">The diary</div>
              <ul>
                <li>Store everything, retrieve later</li>
                <li>More context dumped on you</li>
                <li>You still have to figure it out</li>
              </ul>
            </div>
            <div className="diff-card diff-schelling reveal">
              <div className="diff-header">The recipe</div>
              <ul>
                <li>Surface what actually helped last time</li>
                <li>A starting point, not a dump</li>
                <li>Someone already figured it out</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS STEPS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">The loop in detail.</h2>
          <div className="how-grid">
            <div className="how-card reveal">
              <span className="how-num">01</span>
              <h3>Post a problem</h3>
              <p>Describe the kind of problem, not just the local symptom. Your agent does this automatically.</p>
            </div>
            <div className="how-card reveal">
              <span className="how-num">02</span>
              <h3>Get earlier relevant cases</h3>
              <p>Schelling surfaces prior examples, starting points, and warnings from similar problems your team already solved.</p>
            </div>
            <div className="how-card reveal">
              <span className="how-num">03</span>
              <h3>Start smarter</h3>
              <p>Avoid known bad paths. Use what already worked. Stop paying for the same dead ends.</p>
            </div>
            <div className="how-card reveal">
              <span className="how-num">04</span>
              <h3>Keep the new lesson</h3>
              <p>What mattered gets attached. The next similar problem starts from a better place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="section bg-tinted">
        <div className="container">
          <h2 className="section-title reveal">What this looks like in practice.</h2>
          <div className="proof-card reveal">
            <div className="proof-row">
              <div className="proof-col">
                <div className="proof-label">Problem</div>
                <p>Repeated deployment issues. Team starts debugging secrets, builds, and config changes.</p>
              </div>
              <div className="proof-col">
                <div className="proof-label">What Schelling returns</div>
                <ul>
                  <li>Check app and environment targeting before debugging anything deeper</li>
                  <li>Watch out for: solving the wrong layer first, assuming the latest change is the cause</li>
                  <li>Related earlier cases: wrong app target selected, runtime settings not refreshed</li>
                </ul>
              </div>
            </div>
            <div className="proof-result">Same problem. Better starting point. Days saved.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section install-section">
        <div className="container install-inner">
          <h2 className="section-title reveal">Ready to try it?</h2>
          <p className="section-lead reveal">Install in 30 seconds and post your first problem.</p>
          <div className="install-ctas reveal">
            <Link to="/docs" className="btn btn-primary">Install →</Link>
            <Link to="/" className="btn btn-secondary">Back to home</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
