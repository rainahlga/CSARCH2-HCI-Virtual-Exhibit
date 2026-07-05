import { useState } from "react";

/*
  Later, your groupmates can create their own components inside src/components
  and import them here.

  Example:
  import PunchCardSimulator from "./PunchCardSimulator.jsx";
  import CLITerminal from "./CLITerminal.jsx";
  import MiniDesktop from "./MiniDesktop.jsx";
  import VoiceCommand from "./VoiceCommand.jsx";

  Then replace the placeholder component inside the milestones array.
*/

function PlaceholderDemo({ title, assignedTo, description }) {
  return (
    <div className="demo-box">
      <p className="demo-label">Interactive Component Slot</p>
      <h4>{title}</h4>
      <p>{description}</p>
      <p className="assigned">Assigned to: {assignedTo}</p>
    </div>
  );
}

const milestones = [
  {
    year: "1940s–1950s",
    shortTitle: "Punch Cards",
    title: "Batch Processing and Punch Cards",
    subtitle: "The earliest stage of computer interaction",
    overview:
      "During the early years of computing, users interacted with computers through punch cards and batch processing. Instructions were prepared beforehand by punching holes into cards, which were then processed in groups or batches.",
    artifact: "Featured Artifact: Punch Card",
    artifactDescription:
      "Punch cards stored instructions and data using holes. Users had to prepare the cards before submitting them to the computer.",
    topics: [
      "Punch cards",
      "Batch processing",
      "ENIAC",
      "Physical rewiring",
      "Early programming",
    ],
    demoTitle: "Punch Card Simulator",
    demoComponent: (
      <PlaceholderDemo
        title="Punch Card Simulator"
        assignedTo="Diana"
        description="Diana can replace this slot with a simulator where users type a word or number and see a simplified punch card pattern."
      />
    ),
    significance:
      "This stage shows how limited early HCI was. Users could not directly communicate with the computer in real time, but it became the foundation for future interfaces.",
  },
  {
    year: "1960s–1970s",
    shortTitle: "CLI",
    title: "Command Line Interfaces",
    subtitle: "Typing commands directly into the machine",
    overview:
      "Command Line Interfaces allowed users to interact with computers by typing text-based commands through keyboards and terminals. This gave users more direct control compared to punch cards.",
    artifact: "Featured Artifact: Computer Terminal",
    artifactDescription:
      "Terminals and keyboards allowed users to enter commands and receive computer responses through text.",
    topics: [
      "Text-based commands",
      "Keyboards",
      "Computer terminals",
      "Early Unix systems",
      "File management",
    ],
    demoTitle: "CLI Terminal Simulator",
    demoComponent: (
      <PlaceholderDemo
        title="CLI Terminal Simulator"
        assignedTo="Venice"
        description="Venice can replace this slot with a terminal-style interface where users type commands and receive preset responses."
      />
    ),
    significance:
      "CLI made interaction faster and more direct. However, users still needed to memorize commands and use the correct syntax.",
  },
  {
    year: "1968",
    shortTitle: "Mouse",
    title: "Pointing Devices",
    subtitle: "Physical movement becomes digital control",
    overview:
      "The computer mouse became a major milestone in HCI after Douglas Engelbart introduced it during the famous Mother of All Demos. It allowed users to control items on a screen through physical movement.",
    artifact: "Featured Artifact: Computer Mouse",
    artifactDescription:
      "The mouse connected physical hand movement to digital screen movement, making navigation easier.",
    topics: [
      "Computer mouse",
      "Pointing devices",
      "Light pen",
      "Joystick comparison",
      "Interactive display workstations",
    ],
    demoTitle: "Pointing Device Interaction",
    demoComponent: (
      <PlaceholderDemo
        title="Pointing Device Interaction"
        assignedTo="Raina / Optional"
        description="This slot can stay as an explanation, or later be changed into a small mouse/pointing interaction demo."
      />
    ),
    significance:
      "Pointing devices helped users point, select, and navigate visually. This supported the development of graphical user interfaces.",
  },
  {
    year: "1980s",
    shortTitle: "GUI",
    title: "Graphical User Interfaces",
    subtitle: "Windows, icons, menus, and pointers",
    overview:
      "Graphical User Interfaces became popular in the 1980s. They introduced windows, icons, menus, and pointers, allowing users to interact with visual elements instead of typing every command.",
    artifact: "Featured Artifact: Desktop Interface",
    artifactDescription:
      "The desktop interface used icons, folders, windows, and menus to make computers easier to understand.",
    topics: [
      "Windows",
      "Icons",
      "Menus",
      "Pointers",
      "Desktop metaphor",
      "Files and folders",
    ],
    demoTitle: "Mini Desktop Simulator",
    demoComponent: (
      <PlaceholderDemo
        title="Mini Desktop Simulator"
        assignedTo="Jason"
        description="Jason can replace this slot with a mini desktop simulator with clickable windows and draggable icons."
      />
    ),
    significance:
      "GUI made computers easier for non-technical users. It reduced the need to memorize commands and made computer interaction more visual and accessible.",
  },
  {
    year: "2000s",
    shortTitle: "Touch",
    title: "Touch and Mobile Interfaces",
    subtitle: "Direct interaction through tapping and swiping",
    overview:
      "Touchscreens and mobile devices changed how users interacted with technology. Users could tap, swipe, pinch, and zoom directly on the screen.",
    artifact: "Featured Artifact: Smartphone Touchscreen",
    artifactDescription:
      "Smartphones and capacitive touchscreens made interaction more direct because users could control what they saw on the screen.",
    topics: [
      "Capacitive touchscreens",
      "Multi-touch gestures",
      "Smartphones",
      "Mobile interfaces",
      "Direct manipulation",
    ],
    demoTitle: "Touch Gesture Interaction",
    demoComponent: (
      <PlaceholderDemo
        title="Touch Gesture Interaction"
        assignedTo="Optional"
        description="This slot can show a simple tap, swipe, or pinch explanation if the group decides to add one later."
      />
    ),
    significance:
      "Touch and mobile interfaces made computing more portable and intuitive. They made technology easier to use for more people.",
  },
  {
    year: "Present/Future",
    shortTitle: "Voice & Spatial",
    title: "Spatial and Voice Computing",
    subtitle: "Interaction through speech, space, and immersion",
    overview:
      "Modern HCI includes voice assistants, augmented reality, virtual reality, and spatial computing. These technologies allow users to interact through speech, gestures, and immersive spaces.",
    artifact: "Featured Artifact: Voice Assistants and AR/VR Devices",
    artifactDescription:
      "Voice assistants and spatial devices represent the current and future direction of human-computer interaction.",
    topics: [
      "Voice assistants",
      "Augmented reality",
      "Virtual reality",
      "Spatial mapping",
      "Brain-computer interfaces",
    ],
    demoTitle: "Voice Command Simulator",
    demoComponent: (
      <PlaceholderDemo
        title="Voice Command Simulator"
        assignedTo="Sofia"
        description="Sofia can replace this slot with a voice command simulator where users type a voice-style command and receive a response."
      />
    ),
    significance:
      "Modern HCI is becoming more conversational and immersive. Instead of only clicking or typing, users can interact with technology in more natural and human-centered ways.",
  },
];

const tabs = ["Overview", "Artifact", "Key Topics", "Interactive Demo", "Significance"];

export default function HCITimeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Overview");

  const selected = milestones[selectedIndex];
  const progress = ((selectedIndex + 1) / milestones.length) * 100;

  function goPrevious() {
    setSelectedIndex((current) =>
      current === 0 ? milestones.length - 1 : current - 1
    );
    setActiveTab("Overview");
  }

  function goNext() {
    setSelectedIndex((current) =>
      current === milestones.length - 1 ? 0 : current + 1
    );
    setActiveTab("Overview");
  }

  return (
    <main className="hci-site">
      <section className="hero">
        <p className="eyebrow">Historical Computing</p>
        <h1>Evolution of Human-Computer Interaction</h1>
        <p className="hero-text">
          Explore how human-computer interaction evolved from punch cards and
          command lines to graphical interfaces, touchscreens, voice assistants,
          and spatial computing.
        </p>

        <div className="group-info">
          <span>Group 8 [S02]</span>
          <span>Helaga • Lee • Maravilla • Plurad • Ramirez</span>
        </div>
      </section>

      <section className="timeline-shell">
        <div className="timeline-header">
          <div>
            <p className="section-label">Interactive Timeline</p>
            <h2>{selected.title}</h2>
            <p className="subtitle">{selected.subtitle}</p>
          </div>

          <div className="year-card">
            <span>{selected.year}</span>
          </div>
        </div>

        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="timeline-layout">
          <aside className="timeline-nav">
            {milestones.map((milestone, index) => (
              <button
                key={milestone.title}
                className={
                  selectedIndex === index
                    ? "milestone-button active"
                    : "milestone-button"
                }
                onClick={() => {
                  setSelectedIndex(index);
                  setActiveTab("Overview");
                }}
              >
                <span className="milestone-year">{milestone.year}</span>
                <span className="milestone-title">{milestone.shortTitle}</span>
              </button>
            ))}
          </aside>

          <section className="content-panel">
            <div className="tab-row">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "tab active-tab" : "tab"}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="content-card">
              {activeTab === "Overview" && (
                <>
                  <h3>Overview</h3>
                  <p>{selected.overview}</p>
                </>
              )}

              {activeTab === "Artifact" && (
                <>
                  <h3>{selected.artifact}</h3>
                  <p>{selected.artifactDescription}</p>
                </>
              )}

              {activeTab === "Key Topics" && (
                <>
                  <h3>Key Topics</h3>
                  <div className="topic-grid">
                    {selected.topics.map((topic) => (
                      <span key={topic} className="topic-pill">
                        {topic}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {activeTab === "Interactive Demo" && (
                <>
                  <h3>{selected.demoTitle}</h3>
                  {selected.demoComponent}
                </>
              )}

              {activeTab === "Significance" && (
                <>
                  <h3>Significance to HCI</h3>
                  <p>{selected.significance}</p>
                </>
              )}
            </div>

            <div className="controls">
              <button onClick={goPrevious}>← Previous Era</button>
              <button onClick={goNext}>Next Era →</button>
            </div>
          </section>
        </div>
      </section>

      <section className="member-section">
        <p className="section-label">Interactive Element Assignments</p>
        <div className="member-grid">
          <div>
            <strong>Timeline</strong>
            <span>Raina</span>
          </div>
          <div>
            <strong>Punch Card</strong>
            <span>Diana</span>
          </div>
          <div>
            <strong>CLI</strong>
            <span>Venice</span>
          </div>
          <div>
            <strong>Mini Desktop</strong>
            <span>Jason</span>
          </div>
          <div>
            <strong>Voice Command</strong>
            <span>Sofia</span>
          </div>
        </div>
      </section>

      <section className="references">
        <p className="section-label">References</p>
        <ul>
          <li>Computer History Museum. “Timeline of Computer History.”</li>
          <li>Stanford Research Institute. “Douglas Engelbart and the Mouse.”</li>
          <li>MDX Documentation. “What is MDX?”</li>
          <li>Astro Documentation. “Astro Framework.”</li>
          <li>Apple. “iPhone and Multi-Touch Interface.”</li>
        </ul>
      </section>

      <style>{`
        .hci-site {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(156, 163, 175, 0.3), transparent 30%),
            linear-gradient(135deg, #050505, #111827 55%, #020617);
          color: #f9fafb;
          padding: 2rem;
          border-radius: 24px;
        }

        .hero {
          max-width: 950px;
          margin: 0 auto 2rem auto;
          text-align: center;
          padding: 3rem 1rem 2rem;
        }

        .eyebrow,
        .section-label {
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #9ca3af;
          font-weight: 800;
          font-size: 0.85rem;
        }

        .hero h1 {
          font-size: clamp(2rem, 6vw, 4.8rem);
          line-height: 1;
          margin: 0.5rem 0 1rem;
          text-transform: uppercase;
        }

        .hero-text {
          max-width: 780px;
          margin: 0 auto;
          color: #d1d5db;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .group-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }

        .group-info span {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.7rem 1rem;
          border-radius: 999px;
          color: #e5e7eb;
        }

        .timeline-shell {
          max-width: 1200px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 28px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .timeline-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem;
        }

        .timeline-header h2 {
          font-size: clamp(1.6rem, 4vw, 3rem);
          margin: 0.3rem 0;
          text-transform: uppercase;
        }

        .subtitle {
          color: #d1d5db;
          margin: 0;
        }

        .year-card {
          background: #f9fafb;
          color: #111827;
          font-weight: 900;
          padding: 1rem 1.2rem;
          border-radius: 18px;
          min-width: 140px;
          text-align: center;
        }

        .progress-track {
          height: 10px;
          background: rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          overflow: hidden;
          margin: 0.5rem 1rem 1.5rem;
        }

        .progress-fill {
          height: 100%;
          background: #f9fafb;
          border-radius: 999px;
          transition: width 0.3s ease;
        }

        .timeline-layout {
          display: grid;
          grid-template-columns: 230px 1fr;
          gap: 1.2rem;
        }

        .timeline-nav {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .milestone-button {
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.08);
          color: #f9fafb;
          border-radius: 18px;
          padding: 1rem;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .milestone-button:hover {
          transform: translateX(4px);
          background: rgba(255, 255, 255, 0.15);
        }

        .milestone-button.active {
          background: #f9fafb;
          color: #111827;
        }

        .milestone-year,
        .milestone-title {
          display: block;
        }

        .milestone-year {
          font-weight: 900;
          font-size: 0.85rem;
          color: inherit;
          opacity: 0.75;
        }

        .milestone-title {
          font-weight: 900;
          font-size: 1rem;
          margin-top: 0.2rem;
        }

        .content-panel {
          background: #f9fafb;
          color: #111827;
          border-radius: 24px;
          padding: 1rem;
        }

        .tab-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tab {
          border: none;
          border-radius: 999px;
          padding: 0.75rem 1rem;
          background: #e5e7eb;
          color: #111827;
          font-weight: 800;
          cursor: pointer;
        }

        .tab:hover {
          background: #d1d5db;
        }

        .active-tab {
          background: #111827;
          color: #f9fafb;
        }

        .content-card {
          min-height: 280px;
          background: #ffffff;
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .content-card h3 {
          margin-top: 0;
          font-size: 1.8rem;
        }

        .content-card p {
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .topic-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .topic-pill {
          background: #111827;
          color: #f9fafb;
          padding: 0.8rem 1rem;
          border-radius: 999px;
          font-weight: 800;
        }

        .demo-box {
          border: 2px dashed #9ca3af;
          border-radius: 18px;
          padding: 1.2rem;
          margin-top: 1rem;
          background: #f3f4f6;
        }

        .demo-box h4 {
          margin: 0.4rem 0;
          font-size: 1.3rem;
        }

        .demo-label {
          margin: 0 0 0.5rem;
          font-weight: 900;
          text-transform: uppercase;
          color: #4b5563;
          letter-spacing: 2px;
          font-size: 0.8rem;
        }

        .assigned {
          font-weight: 800;
          color: #374151;
        }

        .controls {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 1rem;
        }

        .controls button {
          border: none;
          background: #111827;
          color: #f9fafb;
          padding: 0.9rem 1.2rem;
          border-radius: 999px;
          font-weight: 900;
          cursor: pointer;
        }

        .controls button:hover {
          background: #374151;
        }

        .member-section,
        .references {
          max-width: 1200px;
          margin: 2rem auto 0;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 1.5rem;
        }

        .member-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }

        .member-grid div {
          background: #f9fafb;
          color: #111827;
          border-radius: 18px;
          padding: 1rem;
        }

        .member-grid strong,
        .member-grid span {
          display: block;
        }

        .member-grid strong {
          font-size: 1rem;
        }

        .member-grid span {
          color: #4b5563;
          margin-top: 0.3rem;
        }

        .references ul {
          color: #d1d5db;
          line-height: 1.8;
        }

        @media (max-width: 850px) {
          .hci-site {
            padding: 1rem;
          }

          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .timeline-layout {
            grid-template-columns: 1fr;
          }

          .timeline-nav {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .milestone-button {
            min-width: 160px;
          }

          .member-grid {
            grid-template-columns: 1fr;
          }

          .controls {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
