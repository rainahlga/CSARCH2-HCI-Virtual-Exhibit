import { useState } from "react";

/*
  HOW GROUPMATES CAN ADD FEATURES LATER:

  1. Create their component in src/components
     Example:
     PunchCardSimulator.jsx
     CLITerminal.jsx
     MiniDesktop.jsx
     VoiceCommand.jsx

  2. Import it here:
     import PunchCardSimulator from "./PunchCardSimulator.jsx";

  3. Replace the placeholder in the correct era:
     interactiveComponent: <PunchCardSimulator />,

  This keeps the whole website as an interactive timeline while still letting
  each member add their own interactive part per era.
*/

function PlaceholderFeature({ title, text }) {
  return (
    <div className="feature-placeholder">
      <p className="feature-label">Interactive Feature Slot</p>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

const milestones = [
  {
    year: "1940s–1950s",
    shortTitle: "Punch Cards",
    title: "Batch Processing and Punch Cards",
    subtitle: "Early computing through prepared input",
    overview:
      "During the early years of computing, users interacted with computers through punch cards and batch processing. Instructions were prepared beforehand by punching holes into cards, which were then processed in groups or batches.",
    artifactTitle: "Punch Card",
    artifactText:
      "Punch cards stored instructions and data using holes. Users had to prepare the cards before submitting them to the computer.",
    topics: [
      "Punch Cards",
      "Batch Processing",
      "ENIAC",
      "Physical Rewiring",
      "Early Programming",
    ],
    media:
      "This section can show a punch card visual or simulator to demonstrate how early computers received instructions.",
    significance:
      "This stage shows how limited early human-computer interaction was. Users could not communicate with the computer in real time, but this became the foundation for future interfaces.",
    interactiveComponent: (
      <PlaceholderFeature
        title="Punch Card Simulator"
        text="A simulator can be placed here where users type a short word or number and see a simplified punch card pattern."
      />
    ),
  },
  {
    year: "1960s–1970s",
    shortTitle: "CLI",
    title: "Command Line Interfaces",
    subtitle: "Interaction through typed commands",
    overview:
      "Command Line Interfaces allowed users to interact with computers by typing text-based commands through keyboards and terminals. This gave users more direct control compared to punch cards.",
    artifactTitle: "Computer Terminal",
    artifactText:
      "Terminals and keyboards allowed users to enter commands and receive computer responses through text.",
    topics: [
      "Text-Based Commands",
      "Keyboards",
      "Computer Terminals",
      "Early Unix Systems",
      "File Management",
    ],
    media:
      "This section can show a terminal-style interface where users type commands and receive preset responses.",
    significance:
      "CLI made computer interaction faster and more direct. However, users still needed to memorize commands and use the correct syntax.",
    interactiveComponent: (
      <PlaceholderFeature
        title="CLI Terminal Simulator"
        text="A terminal simulator can be placed here where users enter simple commands and receive system-like responses."
      />
    ),
  },
  {
    year: "1968",
    shortTitle: "Mouse",
    title: "Pointing Devices",
    subtitle: "Physical movement becomes digital control",
    overview:
      "The computer mouse became a major milestone in HCI after Douglas Engelbart introduced it during the famous Mother of All Demos. It allowed users to control items on a screen through physical movement.",
    artifactTitle: "Computer Mouse",
    artifactText:
      "The mouse connected hand movement to digital screen movement, making navigation easier and more visual.",
    topics: [
      "Computer Mouse",
      "Pointing Devices",
      "Light Pen",
      "Joystick Comparison",
      "Interactive Display Workstations",
    ],
    media:
      "This section can show the early computer mouse and how pointing devices changed computer navigation.",
    significance:
      "Pointing devices helped users point, select, and navigate visually instead of only typing commands. This supported the development of graphical user interfaces.",
    interactiveComponent: (
      <PlaceholderFeature
        title="Pointing Device Interaction"
        text="A small mouse or pointing interaction can be added here if the group wants to expand this era."
      />
    ),
  },
  {
    year: "1980s",
    shortTitle: "GUI",
    title: "Graphical User Interfaces",
    subtitle: "Windows, icons, menus, and pointers",
    overview:
      "Graphical User Interfaces became popular in the 1980s. They introduced windows, icons, menus, and pointers, allowing users to interact with visual elements instead of typing every command.",
    artifactTitle: "Desktop Interface",
    artifactText:
      "The desktop interface used icons, folders, windows, and menus to make computers easier to understand.",
    topics: [
      "Windows",
      "Icons",
      "Menus",
      "Pointers",
      "Desktop Metaphor",
      "Files and Folders",
    ],
    media:
      "This section can show a mini desktop simulator inspired by early graphical user interfaces.",
    significance:
      "GUI made computers easier for non-technical users. It reduced the need to memorize commands and made computer interaction more visual and accessible.",
    interactiveComponent: (
      <PlaceholderFeature
        title="Mini Desktop Simulator"
        text="A mini desktop simulator can be placed here with clickable windows and draggable icons."
      />
    ),
  },
  {
    year: "2000s",
    shortTitle: "Touch",
    title: "Touch and Mobile Interfaces",
    subtitle: "Direct interaction through touch",
    overview:
      "Touchscreens and mobile devices changed how users interacted with technology. Users could tap, swipe, pinch, and zoom directly on the screen.",
    artifactTitle: "Smartphone Touchscreen",
    artifactText:
      "Smartphones and capacitive touchscreens made interaction more direct because users could control what they saw on the screen.",
    topics: [
      "Capacitive Touchscreens",
      "Multi-Touch Gestures",
      "Smartphones",
      "Mobile Interfaces",
      "Direct Manipulation",
    ],
    media:
      "This section can show examples of common touch gestures such as tapping, swiping, pinching, and zooming.",
    significance:
      "Touch and mobile interfaces made computing more portable and intuitive. They made technology easier to use for more people.",
    interactiveComponent: (
      <PlaceholderFeature
        title="Touch Gesture Interaction"
        text="A touch gesture demo can be added here if the group wants to include an extra feature for this era."
      />
    ),
  },
  {
    year: "Present/Future",
    shortTitle: "Voice & Spatial",
    title: "Spatial and Voice Computing",
    subtitle: "Interaction through speech and space",
    overview:
      "Modern HCI includes voice assistants, augmented reality, virtual reality, and spatial computing. These technologies allow users to interact through speech, gestures, and immersive spaces.",
    artifactTitle: "Voice Assistants and AR/VR Devices",
    artifactText:
      "Voice assistants and spatial devices represent the current and future direction of human-computer interaction.",
    topics: [
      "Voice Assistants",
      "Augmented Reality",
      "Virtual Reality",
      "Spatial Mapping",
      "Brain-Computer Interfaces",
    ],
    media:
      "This section can show a voice command simulation where users type a voice-style command and receive a response.",
    significance:
      "Modern HCI is becoming more conversational and immersive. Instead of only clicking or typing, users can interact with technology in more natural and human-centered ways.",
    interactiveComponent: (
      <PlaceholderFeature
        title="Voice Command Simulator"
        text="A voice command simulator can be placed here where users type a command and receive a response."
      />
    ),
  },
];

const tabs = ["Featured Artifact", "Key Topics", "Media", "Significance"];

export default function HCITimeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Featured Artifact");

  const selected = milestones[selectedIndex];

  function goPrevious() {
    setSelectedIndex((current) =>
      current === 0 ? milestones.length - 1 : current - 1
    );
    setActiveTab("Featured Artifact");
  }

  function goNext() {
    setSelectedIndex((current) =>
      current === milestones.length - 1 ? 0 : current + 1
    );
    setActiveTab("Featured Artifact");
  }

  return (
    <main className="timeline-page">
      <section className="timeline-layout">
        <aside className="timeline-sidebar">
          <div className="line"></div>

          {milestones.map((milestone, index) => (
            <button
              key={milestone.title}
              className={
                selectedIndex === index ? "era-button active" : "era-button"
              }
              onClick={() => {
                setSelectedIndex(index);
                setActiveTab("Featured Artifact");
              }}
            >
              <span className="era-year">{milestone.year}</span>
              <span className="era-name">{milestone.shortTitle}</span>
            </button>
          ))}
        </aside>

        <section className="main-panel">
          <div className="top-row">
            <div>
              <p className="small-title">Human Computer Interaction:</p>
              <h1>{selected.title}</h1>
              <p className="subtitle">{selected.subtitle}</p>
            </div>

            <div className="year-box">{selected.year}</div>
          </div>

          <div className="overview-box">
            <p>{selected.overview}</p>
          </div>

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

          <div className="content-box">
            {activeTab === "Featured Artifact" && (
              <>
                <h2>{selected.artifactTitle}</h2>
                <p>{selected.artifactText}</p>
                {selected.interactiveComponent}
              </>
            )}

            {activeTab === "Key Topics" && (
              <>
                <h2>Key Topics</h2>
                <div className="topic-list">
                  {selected.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
              </>
            )}

            {activeTab === "Media" && (
              <>
                <h2>Media</h2>
                <p>{selected.media}</p>
              </>
            )}

            {activeTab === "Significance" && (
              <>
                <h2>Significance to HCI</h2>
                <p>{selected.significance}</p>
              </>
            )}
          </div>

          <div className="nav-controls">
            <button onClick={goPrevious}>← Previous</button>
            <button onClick={goNext}>Next →</button>
          </div>
        </section>
      </section>

      <style>{`
        .timeline-page {
          min-height: 100vh;
          background: #ffffff;
          color: #111111;
          padding: 2rem;
          font-family: Arial, Helvetica, sans-serif;
        }

        .timeline-layout {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 210px 1fr;
          gap: 2rem;
          align-items: start;
        }

        .timeline-sidebar {
          position: sticky;
          top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem 0 1.5rem 1.2rem;
          min-height: 650px;
        }

        .line {
          position: absolute;
          left: 0.45rem;
          top: 2rem;
          bottom: 2rem;
          width: 4px;
          background: #111111;
          border-radius: 999px;
        }

        .era-button {
          position: relative;
          z-index: 1;
          border: 3px solid #111111;
          background: #d9d9d9;
          color: #111111;
          border-radius: 999px;
          padding: 0.9rem 1rem;
          text-align: left;
          cursor: pointer;
          transition: 0.2s ease;
          box-shadow: 4px 4px 0 #111111;
        }

        .era-button:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #111111;
          background: #ffffff;
        }

        .era-button.active {
          background: #111111;
          color: #ffffff;
        }

        .era-year {
          display: block;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .era-name {
          display: block;
          font-size: 1rem;
          font-weight: 900;
          text-transform: uppercase;
          margin-top: 0.2rem;
        }

        .main-panel {
          border: 4px solid #111111;
          border-radius: 22px;
          padding: 2rem;
          background: #ffffff;
          box-shadow: 8px 8px 0 #111111;
        }

        .top-row {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .small-title {
          margin: 0;
          color: #777777;
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        h1 {
          font-size: clamp(2rem, 5vw, 4.2rem);
          line-height: 0.95;
          text-transform: uppercase;
          margin: 0.4rem 0;
          max-width: 760px;
        }

        .subtitle {
          font-size: 1.05rem;
          color: #444444;
          font-weight: 700;
          margin-top: 0.7rem;
        }

        .year-box {
          min-width: 150px;
          background: #111111;
          color: #ffffff;
          border-radius: 18px;
          padding: 1rem;
          font-weight: 900;
          text-align: center;
          border: 3px solid #111111;
        }

        .overview-box {
          margin: 1.5rem 0;
          background: #e6e6e6;
          border: 3px solid #111111;
          border-radius: 18px;
          padding: 1.2rem;
          line-height: 1.7;
          font-weight: 600;
        }

        .tab-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .tab {
          border: 3px solid #111111;
          background: #111111;
          color: #ffffff;
          padding: 0.9rem 1.1rem;
          border-radius: 14px 14px 0 0;
          font-weight: 900;
          cursor: pointer;
        }

        .tab:hover {
          background: #333333;
        }

        .active-tab {
          background: #bcbcbc;
          color: #111111;
          border-bottom-color: #bcbcbc;
        }

        .content-box {
          background: #bcbcbc;
          border: 3px solid #111111;
          border-radius: 0 18px 18px 18px;
          padding: 1.5rem;
          min-height: 260px;
          line-height: 1.7;
        }

        .content-box h2 {
          margin-top: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .content-box p {
          font-size: 1.05rem;
          font-weight: 600;
        }

        .topic-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .topic-list span {
          display: inline-block;
          background: #ffffff;
          border: 3px solid #111111;
          border-radius: 999px;
          padding: 0.8rem 1rem;
          font-weight: 900;
          box-shadow: 3px 3px 0 #111111;
        }

        .feature-placeholder {
          background: #ffffff;
          border: 3px dashed #111111;
          border-radius: 18px;
          padding: 1.2rem;
          margin-top: 1.2rem;
        }

        .feature-label {
          margin: 0;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #555555;
          font-weight: 900;
        }

        .feature-placeholder h4 {
          margin: 0.4rem 0;
          font-size: 1.3rem;
          text-transform: uppercase;
        }

        .nav-controls {
          display: flex;
          justify-content: space-between;
          margin-top: 1.5rem;
          gap: 1rem;
        }

        .nav-controls button {
          border: 3px solid #111111;
          background: #ffffff;
          color: #111111;
          border-radius: 999px;
          padding: 0.9rem 1.2rem;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 4px 4px 0 #111111;
        }

        .nav-controls button:hover {
          background: #111111;
          color: #ffffff;
        }

        @media (max-width: 850px) {
          .timeline-page {
            padding: 1rem;
          }

          .timeline-layout {
            grid-template-columns: 1fr;
          }

          .timeline-sidebar {
            position: static;
            min-height: auto;
            flex-direction: row;
            overflow-x: auto;
            padding: 1rem 0 1rem 0;
          }

          .line {
            display: none;
          }

          .era-button {
            min-width: 160px;
          }

          .top-row {
            flex-direction: column;
          }

          .year-box {
            min-width: auto;
          }

          .main-panel {
            padding: 1.2rem;
            box-shadow: 5px 5px 0 #111111;
          }

          h1 {
            font-size: 2rem;
          }

          .nav-controls {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
