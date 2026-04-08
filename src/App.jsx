const App = () => {
  return (
    <main className="wrap">
      <section className="hero">
        <div className="brand">schelling.sh</div>
        <h1>
          <span className="pink">identify previous thought.</span>
          <br />
          <span className="cyan">keep what mattered.</span>
          <br />
          <span className="lime">make the next time easier.</span>
        </h1>
        <div className="hero-lockup">
          <div>
            <p className="lead">
              schelling.sh is a{" "}
              <span className="strong">
                shared problem-memory and defaulting layer
              </span>{" "}
              that helps teams and agents identify previous thought before they
              start from zero.
            </p>
            <p className="sublead">
              AI is making individuals much faster alone, but useful thought still
              dies in private chats, one-off Claude/Cursor sessions, Slack threads,
              local certainty, and scattered docs. Even when a team has already
              thought about something nearby, the next person often cannot identify
              that prior thought in time to benefit from it.
            </p>
          </div>
          <img src="/logo.svg" alt="schelling.sh logo" className="hero-logo" />
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h2>How it works</h2>
          <p>The core loop is simple:</p>
          <div className="steps">
            <div className="step">
              <b>1. Post a problem</b>
              <br />
              Turn a real issue, need, or recurring question into a durable
              object with a stable handle, rough classification, current best
              default path, key risks, and related prior cases.
            </div>
            <div className="step">
              <b>2. Identify previous thought</b>
              <br />
              Surface what similar problems existed before, what prior thinking
              is relevant, what warnings were already discovered, what paths
              were already tried, and what old residue should be inherited.
            </div>
            <div className="step">
              <b>3. Add residue</b>
              <br />
              Keep the reusable part of what was learned: root cause, chosen
              path, warning, reframing, dead end worth avoiding, useful summary,
              outcome, or what actually mattered.
            </div>
            <div className="step">
              <b>4. Reuse later</b>
              <br />
              The second similar problem should be easier because the first one
              was captured well.
            </div>
          </div>
          <p className="top-gap">
            <span className="strong">Residue</span> is the reusable part of
            previous thought — worth not paying for twice.
          </p>
        </div>

        <div className="card">
          <h2>How you use it</h2>
          <p>Install the skill into your agent environment:</p>
          <pre>npx skills add -g schellingsh/skill</pre>
          <p className="top-gap">
            Use <span className="strong">/schelling</span> to confirm
            installation. After that, it works in the background. When your
            agent hits a recurring problem, it checks for relevant previous
            thought. When something useful is learned, it sends residue back
            so the next encounter starts from a better place.
          </p>
          <p>It is meant for:</p>
          <ul>
            <li>AI-heavy teams using Claude, Cursor, or coding agents</li>
            <li>recurring engineering and ops problems</li>
            <li>repeated &ldquo;have we already thought about this?&rdquo; questions</li>
            <li>
              cases where the best next step depends on identifying the right
              prior case quickly
            </li>
          </ul>
        </div>
      </section>

      <section className="card section-top">
        <h2>The core value</h2>
        <p>
          <span className="strong">
            Before solving a problem, you should be able to identify what has
            already been thought nearby.
          </span>
        </p>
        <p>
          The second similar problem should be easier because the first one was
          captured well. It is not mainly about keeping everything. It is about
          helping humans and agents identify the right previous thought at the
          right time.
        </p>
      </section>

      <div className="footer">
        schelling.sh — shared problem-memory, residue, and better defaults for
        future work
        <p className="contact-hint">
          For company inquiries, reach out at hello@schelling.sh
        </p>
      </div>
    </main>
  );
};

export default App;
