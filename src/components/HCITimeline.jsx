import { useState } from "react";

/*
  FAST + MODULAR VERSION

  Groupmates can add their actual interactive components later.

  Example:
  import PunchCardSimulator from "./PunchCardSimulator.jsx";
  import CLITerminal from "./CLITerminal.jsx";
  import MiniDesktop from "./MiniDesktop.jsx";
  import VoiceCommand from "./VoiceCommand.jsx";

  Then inside renderFeaturedArtifact(), replace the placeholder for the correct era.
*/

const milestones = [
  {
    id: "punch",
    year: "1940s",
    marker: "1940s",
    title: "Batch Processing and Punch Cards",
    tryIt: "Punching a Punch Card",
    overview:
      "During the early years of computing, users interacted with computers through punch cards and batch processing. Instructions were prepared beforehand by punching holes into cards, which were then processed in groups or batches.",
    artifactTitle: "Punch Card",
    artifactText:
      "Punch cards stored instructions and data using holes. Users had to prepare the cards before submitting them to the computer.",
    topics: ["Punch Cards", "Batch Processing", "ENIAC", "Physical Rewiring", "Early Programming"],
    media:
      "This section can show a punch card visual or simulator to demonstrate how early computers received instructions.",
    significance:
      "This stage shows how limited early HCI was. Users could not directly communicate with the computer in real time, but it became the foundation for future interfaces.",
  },
  {
    id: "cli",
    year: "1960s",
    marker: "1960s",
    title: "Command Line Interface",
    tryIt: "Command Line Interface",
    overview:
      "Command Line Interfaces allowed users to interact with computers by typing text-based commands through keyboards and terminals. This gave users more direct control compared to punch cards.",
    artifactTitle: "Computer Terminal",
    artifactText:
      "Terminals and keyboards allowed users to enter commands and receive computer responses through text.",
    topics: ["Text-Based Commands", "Keyboards", "Computer Terminals", "Early Unix Systems", "File Management"],
    media:
      "This section can show a terminal-style interface where users type commands and receive preset responses.",
    significance:
      "CLI made computer interaction faster and more direct. However, users still needed to memorize commands and use the correct syntax.",
  },
  {
    id: "mouse",
    year: "1968",
    marker: "1968",
    title: "Pointing Devices",
    tryIt: "Pointing Device Interaction",
    overview:
      "The computer mouse became a major milestone in HCI after Douglas Engelbart introduced it during the famous Mother of All Demos. It allowed users to control items on a screen through physical movement.",
    artifactTitle: "Computer Mouse",
    artifactText:
      "The mouse connected hand movement to digital screen movement, making navigation easier and more visual.",
    topics: ["Computer Mouse", "Pointing Devices", "Light Pen", "Joystick Comparison", "Interactive Display Workstations"],
    media:
      "This section can show the early computer mouse and how pointing devices changed computer navigation.",
    significance:
      "Pointing devices helped users point, select, and navigate visually instead of only typing commands. This supported the development of graphical user interfaces.",
  },
  {
    id: "gui",
    year: "1980s",
    marker: "1980s",
    title: "Graphical User Interface",
    tryIt: "Mini Desktop",
    overview:
      "Graphical User Interfaces became popular in the 1980s. They introduced windows, icons, menus, and pointers, allowing users to interact with visual elements instead of typing every command.",
    artifactTitle: "Desktop Interface",
    artifactText:
      "The desktop interface used icons, folders, windows, and menus to make computers easier to understand.",
    topics: ["Windows", "Icons", "Menus", "Pointers", "Desktop Metaphor", "Files and Folders"],
    media:
      "This section can show a mini desktop simulator inspired by early graphical user interfaces.",
    significance:
      "GUI made computers easier for non-technical users. It reduced the need to memorize commands and made computer interaction more visual and accessible.",
  },
  {
    id: "touch",
    year: "2000s",
    marker: "2000s",
    title: "Touch and Mobile Interface",
    tryIt: "Touch Interaction",
    overview:
      "Touchscreens and mobile devices changed how users interacted with technology. Users could tap, swipe, pinch, and zoom directly on the screen.",
    artifactTitle: "Smartphone Touchscreen",
    artifactText:
      "Smartphones and capacitive touchscreens made interaction more direct because users could control what they saw on the screen.",
    topics: ["Capacitive Touchscreens", "Multi-Touch Gestures", "Smartphones", "Mobile Interfaces", "Direct Manipulation"],
    media:
      "This section can show examples of common touch gestures such as tapping, swiping, pinching, and zooming.",
    significance:
      "Touch and mobile interfaces made computing more portable and intuitive. They made technology easier to use for more people.",
  },
  {
    id: "voice",
    year: "Present",
    marker: "Present",
    title: "Spatial and Voice",
    tryIt: "Voice Command",
    overview:
      "Modern HCI includes voice assistants, augmented reality, virtual reality, and spatial computing. These technologies allow users to interact through speech, gestures, and immersive spaces.",
    artifactTitle: "Voice Assistants and AR/VR Devices",
    artifactText:
      "Voice assistants and spatial devices represent the current and future direction of human-computer interaction.",
    topics: ["Voice Assistants", "Augmented Reality", "Virtual Reality", "Spatial Mapping", "Brain-Computer Interfaces"],
    media:
      "This section can show a voice command simulation where users type a voice-style command and receive a response.",
    significance:
      "Modern HCI is becoming more conversational and immersive. Instead of only clicking or typing, users can interact with technology in more natural and human-centered ways.",
  },
];

const tabs = ["Featured Artifact", "Key Topics", "Media", "Significance"];

function renderFeaturedArtifact(selected) {
  if (selected.id === "punch") {
    return (
      <div className="demo-area punch-demo">
        <div className="punch-card">
          {Array.from({ length: 72 }).map((_, index) => (
            <span
              key={index}
              className={
                [2, 7, 8, 14, 21, 33, 46, 55].includes(index)
                  ? "hole punched"
                  : "hole"
              }
            />
          ))}
        </div>

        <div className="keypad">
          {["R", "S", "X", "-", "O", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map(
            (key) => (
              <span key={key}>{key}</span>
            )
          )}
        </div>
      </div>
    );
  }

  if (selected.id === "cli") {
    return (
      <div className="demo-area cli-demo">
        <p>C:\Users\admin&gt;</p>
        <span className="cursor">_</span>
      </div>
    );
  }

  if (selected.id === "mouse") {
    return (
      <div className="demo-area mouse-demo">
        <div className="mouse-shape">
          <div className="mouse-line"></div>
        </div>
        <p>Physical movement → digital selection</p>
      </div>
    );
  }

  if (selected.id === "gui") {
    return (
      <div className="demo-area desktop-demo">
        <div className="desktop-window">
          <div className="window-bar">Classic Desktop</div>
          <div className="desktop-icons">
            <span>Files</span>
            <span>Apps</span>
            <span>Trash</span>
          </div>
          <div className="start-menu">
            <p>Programs</p>
            <p>Documents</p>
            <p>Settings</p>
            <p>Shut Down...</p>
          </div>
        </div>
      </div>
    );
  }

  if (selected.id === "touch") {
    return (
      <div className="demo-area touch-demo">
        <div className="phone">
          <span>Tap</span>
          <span>Swipe</span>
          <span>Pinch</span>
          <span>Zoom</span>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-area voice-demo">
      <div className="voice-input">Type your command here.</div>
      <div className="voice-output">Visual output will appear here.</div>
    </div>
  );
}

export default function HCITimeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Featured Artifact");

  const selected = milestones[selectedIndex];

  function chooseEra(index) {
    setSelectedIndex(index);
    setActiveTab("Featured Artifact");
  }

  return (
    <main className="hci-wrapper">
      <aside className="left-timeline">
        <div className="timeline-line"></div>

        {milestones.map((milestone, index) => (
          <button
            key={milestone.id}
            className={selectedIndex === index ? "year-dot active" : "year-dot"}
            onClick={() => chooseEra(index)}
            aria-label={`Open ${milestone.title}`}
          >
            <span>{milestone.marker}</span>
          </button>
        ))}
      </aside>

      <section className="exhibit-card">
        <header className="exhibit-header">
          <p>Human-Computer Interaction:</p>
          <h1>{selected.title}</h1>
          <p className="intro">{selected.overview}</p>
        </header>

        <section className="try-section">
          <strong>Try It: {selected.tryIt}</strong>
          {renderFeaturedArtifact(selected)}
        </section>

        <nav className="tab-row" aria-label="Timeline content tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "tab active-tab" : "tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <section className="info-panel">
          {activeTab === "Featured Artifact" && (
            <>
              <h2>{selected.artifactTitle}</h2>
              <p>{selected.artifactText}</p>
            </>
          )}

          {activeTab === "Key Topics" && (
            <>
              <h2>Key Topics</h2>
              <div className="topic-grid">
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
              <h2>Significance to Human-Computer Interaction</h2>
              <p>{selected.significance}</p>
            </>
          )}
        </section>
      </section>

      <aside className="right-rail"></aside>

      <style>{`
        .hci-wrapper {
          display: grid;
          grid-template-columns: 90px minmax(0, 940px) 42px;
          gap: 0;
          max-width: 1120px;
          margin: 0 auto;
          background: #000;
          color: #111;
          min-height: 760px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .left-timeline,
        .right-rail {
          background: #000;
        }

        .left-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          top: 3rem;
          bottom: 3rem;
          left: 50%;
          width: 3px;
          background: #777;
          transform: translateX(-50%);
        }

        .year-dot {
          position: relative;
          z-index: 2;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 0;
          background: #8f959c;
          color: #111;
          font-size: 0.62rem;
          font-weight: 900;
          cursor: pointer;
        }

        .year-dot span {
          display: block;
          transform: scale(0.95);
        }

        .year-dot.active {
          width: 68px;
          height: 68px;
          background: #fff;
          outline: 6px solid #d9dce1;
        }

        .exhibit-card {
          background: #fff;
          padding: 2.2rem 2.5rem;
          min-height: 760px;
        }

        .exhibit-header p:first-child {
          margin: 0;
          color: #d8d8d8;
          text-transform: uppercase;
          font-weight: 900;
          font-size: clamp(1.1rem, 3vw, 2.2rem);
          letter-spacing: 2px;
        }

        .exhibit-header h1 {
          margin: 0.2rem 0 0.8rem;
          color: #000;
          text-transform: uppercase;
          font-size: clamp(2rem, 5vw, 3.4rem);
          letter-spacing: 8px;
          line-height: 1;
        }

        .intro {
          max-width: 820px;
          line-height: 1.55;
          font-size: 0.98rem;
          margin: 0;
        }

        .try-section {
          margin-top: 1.4rem;
        }

        .try-section strong {
          display: block;
          margin-bottom: 0.8rem;
          font-size: 1rem;
        }

        .demo-area {
          min-height: 170px;
          background: #f1f1f1;
          border-radius: 16px;
          padding: 1rem;
        }

        .punch-demo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          background: #eee6c9;
        }

        .punch-card {
          display: grid;
          grid-template-columns: repeat(12, 22px);
          gap: 4px;
          padding: 12px;
          background: #ddd2a8;
          border: 6px solid #d4c89b;
          border-radius: 8px;
        }

        .hole {
          width: 22px;
          height: 18px;
          background: rgba(255,255,255,0.45);
          border: 1px solid rgba(255,255,255,0.8);
        }

        .hole.punched {
          background: #000;
          border-radius: 3px;
        }

        .keypad {
          display: grid;
          grid-template-columns: repeat(3, 40px);
          gap: 9px;
          padding: 14px;
          background: #8f959c;
          border-radius: 16px;
        }

        .keypad span {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          font-weight: 900;
        }

        .cli-demo {
          background: #000;
          color: #00ff37;
          font-family: Consolas, monospace;
          font-size: 1.1rem;
        }

        .cli-demo p {
          margin: 0;
        }

        .cursor {
          display: inline-block;
          margin-top: 0.5rem;
        }

        .mouse-demo,
        .touch-demo {
          display: grid;
          place-items: center;
          text-align: center;
        }

        .mouse-shape {
          width: 85px;
          height: 130px;
          border: 6px solid #333;
          border-radius: 45px;
          background: #ddd;
        }

        .mouse-line {
          width: 5px;
          height: 30px;
          background: #333;
          margin: 16px auto 0;
          border-radius: 99px;
        }

        .desktop-demo {
          background: #d9cfaa;
          display: grid;
          place-items: center;
        }

        .desktop-window {
          width: min(520px, 100%);
          height: 210px;
          background: #3a73a7;
          border: 6px solid #cfc092;
          position: relative;
        }

        .window-bar {
          background: #d9d9d9;
          padding: 6px;
          font-weight: 900;
          font-size: 0.8rem;
        }

        .desktop-icons {
          display: flex;
          gap: 10px;
          padding: 10px;
        }

        .desktop-icons span {
          color: white;
          font-size: 0.75rem;
          background: rgba(255,255,255,0.18);
          padding: 8px;
          border-radius: 6px;
        }

        .start-menu {
          position: absolute;
          left: 12px;
          bottom: 12px;
          width: 150px;
          background: #eee;
          border: 2px solid #888;
          font-size: 0.75rem;
        }

        .start-menu p {
          margin: 0;
          padding: 5px 8px;
        }

        .voice-demo {
          background: #fff;
          display: grid;
          gap: 1rem;
        }

        .voice-input,
        .voice-output {
          background: #000;
          color: #fff;
          padding: 1rem;
          min-height: 48px;
          font-weight: 800;
        }

        .phone {
          width: 190px;
          height: 290px;
          border: 8px solid #333;
          border-radius: 28px;
          background: #111;
          display: grid;
          gap: 8px;
          padding: 24px;
        }

        .phone span {
          background: #f5f5f5;
          border-radius: 999px;
          padding: 10px;
          font-weight: 900;
        }

        .tab-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: 1.3rem;
        }

        .tab {
          border: 0;
          background: #000;
          color: #fff;
          padding: 1rem 0.5rem;
          border-radius: 12px 12px 0 0;
          font-weight: 900;
          cursor: pointer;
        }

        .tab.active-tab {
          background: #8f959c;
          color: #000;
        }

        .info-panel {
          background: #8f959c;
          min-height: 170px;
          padding: 1.4rem;
          border-radius: 0 0 18px 18px;
        }

        .info-panel h2 {
          margin-top: 0;
          font-size: 1.35rem;
        }

        .info-panel p {
          line-height: 1.6;
          font-size: 0.98rem;
        }

        .topic-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .topic-grid span {
          background: #fff;
          padding: 0.7rem 0.9rem;
          border-radius: 999px;
          font-weight: 900;
        }

        @media (max-width: 850px) {
          .hci-wrapper {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .left-timeline {
            flex-direction: row;
            justify-content: flex-start;
            gap: 1rem;
            overflow-x: auto;
            padding: 1rem;
          }

          .timeline-line,
          .right-rail {
            display: none;
          }

          .year-dot,
          .year-dot.active {
            min-width: 58px;
            min-height: 58px;
          }

          .exhibit-card {
            padding: 1.4rem;
            min-height: auto;
          }

          .exhibit-header h1 {
            letter-spacing: 3px;
          }

          .tab-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .punch-demo {
            flex-direction: column;
          }

          .punch-card {
            grid-template-columns: repeat(8, 22px);
          }
        }
      `}</style>
    </main>
  );
}
