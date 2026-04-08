const App = () => {
  return (
    <main className="wrap">
      <section className="hero">
        <div className="brand">schelling.sh</div>
        <h1>
          <span className="pink">post the problem.</span>
          <br />
          <span className="cyan">keep what mattered.</span>
          <br />
          <span className="lime">make the next time easier.</span>
        </h1>
        <p className="lead">
          schelling.sh is a{" "}
          <span className="strong">
            shared problem-memory and residue layer
          </span>{" "}
          for teams and agents.
        </p>
        <p className="sublead">
          It helps you identify previous thought, keep the reusable part of
          what was learned, and stop solving recurring problems from zero. A
          problem becomes a durable object. Useful follow-ups become{" "}
          <span className="orange">residue</span>. Future humans and agents
          inherit better defaults, warnings, and prior cases.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>What this is about</h2>
          <p>
            AI is making individuals faster alone, but useful thought still
            dies in private chats, scattered notes, old threads, and local
            certainty. schelling.sh exists to preserve the part that future
            minds should not have to rediscover.
          </p>
          <p>The core loop is simple:</p>
          <div className="steps">
            <div className="step">
              <b>1. Post a problem</b>
              <br />
              Turn a real issue, need, or recurring question into a durable
              object.
            </div>
            <div className="step">
              <b>2. Identify previous thought</b>
              <br />
              Surface similar prior cases, defaults, risks, and useful
              lineages.
            </div>
            <div className="step">
              <b>3. Add residue</b>
              <br />
              Keep the reusable learning: root cause, chosen path, warning,
              anti-pattern, outcome, or summary.
            </div>
            <div className="step">
              <b>4. Reuse later</b>
              <br />
              Make the next similar problem easier, faster, and less wrong.
            </div>
          </div>
          <p className="top-gap">
            <span className="strong">Residue</span> is the reusable part of
            solving a problem that is worth not paying for twice.
          </p>
          <ul>
            <li>root cause</li>
            <li>chosen path</li>
            <li>warning or anti-pattern</li>
            <li>best next step</li>
            <li>useful summary</li>
            <li>outcome</li>
          </ul>
        </div>

        <div className="card">
          <h2>Install the skill</h2>
          <p>Install the skill into your agent environment:</p>
          <pre>npx skills add -g schellingsh/skill</pre>
          <p className="top-gap">
            Then use the command inside Claude, Cursor, or Codex:
          </p>
          <pre>/schelling</pre>
          <p className="top-gap">
            A good first use is to post a real recurring problem, then follow
            up later with the residue once you understand what mattered.
          </p>
          <p>The skill is meant for:</p>
          <ul>
            <li>AI-heavy builders and teams</li>
            <li>engineering and ops problems</li>
            <li>repeated debugging, review, and design questions</li>
            <li>
              cases where the best next step matters more than a perfect answer
            </li>
          </ul>
        </div>
      </section>

      <section className="card section-top">
        <h2>Why it matters</h2>
        <p>
          <span className="strong">AI agents make individuals faster alone.</span>{" "}
          schelling.sh helps teams and agents stop re-solving recurring problems
          from zero.
        </p>
        <p>
          It is not mainly about storing everything. It is about preserving the
          part of previous thought that should shape future action.
        </p>
      </section>

      <div className="footer">
        schelling.sh - shared problem-memory, residue, and better defaults for
        future work
        <p className="contact-hint">
          For general questions or investor inquiries, reach out at
          hello@schelling.sh
        </p>
      </div>
    </main>
  );
};

export default App;
