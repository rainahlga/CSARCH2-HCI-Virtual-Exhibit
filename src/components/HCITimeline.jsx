import { useState } from "react";

/*
  Final HCI Interactive Timeline

  This follows the proposal vision:
  - Left vertical timeline
  - Clickable milestones
  - Active milestone highlighting
  - Dynamic content switching
  - Tabs for Featured Artifact, Key Topics, Media, and Significance
  - Faster design with lighter CSS and client:idle in the MDX file

  Groupmates can later replace the sample demo visuals with their actual components.
*/

const milestones = [
  {
    id: "punch",
    marker: "1940s",
    title: "Batch Processing and Punch Cards",
    tryIt: "Punching a Punch Card",
    overview:
      "During the early years of computing, users interacted with computers through punch cards and batch processing. Instructions were prepared beforehand by punching holes into cards, which were then processed in groups or batches.",
    artifactTitle: "Punch Card",
    artifactText:
      "Punch cards stored instructions and data using holes. Users had to prepare the cards before submitting them to the computer. This made early computing slow, but it became one of the first ways people gave instructions to machines.",
    topics: [
      "Punch Cards",
      "Batch Processing",
      "ENIAC",
      "Physical Rewiring",
      "Early Programming",
    ],
    media:
      "This era is represented through a simplified punch card visual. The holes show how early data and instructions were encoded before being processed by a computer.",
    significance:
      "This stage shows how limited early human-computer interaction was. Users could not communicate with the computer in real time, but punch cards helped create the foundation for future interfaces.",
  },
  {
    id: "cli",
    marker: "1960s",
    title: "Command Line Interface",
    tryIt: "Command Line Interface",
    overview:
      "Command Line Interfaces allowed users to interact with computers by typing text-based commands through keyboards and terminals. This gave users more direct control compared to punch cards.",
    artifactTitle: "Computer Terminal",
    artifactText:
      "Computer terminals and keyboards allowed users to enter commands and receive responses through text. This made interaction faster because users no longer had to wait for punched cards to be processed.",
    topics: [
      "Text-Based Commands",
      "Keyboards",
      "Computer Terminals",
      "Early Unix Systems",
      "File Management",
    ],
    media:
      "This era is represented through a terminal-style screen where commands are typed using a keyboard.",
    significance:
      "CLI made computer interaction faster and more direct. However, users still needed to memorize commands and use the correct syntax, which made it difficult for beginners.",
  },
  {
    id: "mouse",
    marker: "1968",
    title: "Pointing Devices",
    tryIt: "Pointing Device Interaction",
    overview:
      "The computer mouse became a major milestone in HCI after Douglas Engelbart introduced it during the famous Mother of All Demos. It allowed users to control items on a screen through physical movement.",
    artifactTitle: "Computer Mouse",
    artifactText:
      "The mouse connected hand movement to digital screen movement. It allowed users to point, select, and navigate visually instead of relying only on typed commands.",
    topics: [
      "Computer Mouse",
      "Pointing Devices",
      "Light Pen",
      "Joystick Comparison",
      "Interactive Display Workstations",
    ],
    media:
      "This era is represented through a simple mouse visual showing how physical motion became digital control.",
    significance:
      "Pointing devices helped make computers easier to navigate. They supported the shift toward graphical interfaces and more visual forms of interaction.",
  },
  {
    id: "gui",
    marker: "1980s",
    title: "Graphical User Interface",
    tryIt: "Mini Desktop",
    overview:
      "Graphical User Interfaces became popular in the 1980s. They introduced windows, icons, menus, and pointers, allowing users to interact with visual elements instead of typing every command.",
    artifactTitle: "Desktop Interface",
    artifactText:
      "The desktop interface used icons, folders, windows, menus, and pointers to make computers easier to understand and use.",
    topics: [
      "Windows",
      "Icons",
      "Menus",
      "Pointers",
      "Desktop Metaphor",
      "Files and Folders",
    ],
    media:
      "This era is represented through a mini desktop layout inspired by early graphical user interfaces.",
    significance:
      "GUI made computers easier for non-technical users. It reduced the need to memorize commands and made interaction more visual, intuitive, and accessible.",
  },
  {
    id: "touch",
    marker: "2000s",
    title: "Touch and Mobile Interface",
    tryIt: "Touch Interaction",
    overview:
      "Touchscreens and mobile devices changed how users interacted with technology. Users could tap, swipe, pinch, and zoom directly on the screen.",
    artifactTitle: "Smartphone Touchscreen",
    artifactText:
      "Smartphones and capacitive touchscreens allowed users to directly control what they saw on the screen through touch gestures.",
    topics: [
      "Capacitive Touchscreens",
      "Multi-Touch Gestures",
      "Smartphones",
      "Mobile Interfaces",
      "Direct Manipulation",
    ],
    media:
      "This era is represented through a phone-style visual showing common touch gestures such as tap, swipe, pinch, and zoom.",
    significance:
      "Touch and mobile interfaces made computing more portable and intuitive. They helped make digital technology easier to use for more people.",
  },
  {
    id: "voice",
    marker: "Present",
    title: "Spatial and Voice",
    tryIt: "Voice Command",
    overview:
      "Modern HCI includes voice assistants, augmented reality, virtual reality, and spatial computing. These technologies allow users to interact through speech, gestures, and immersive spaces.",
    artifactTitle: "Voice Assistants and AR/VR Devices",
    artifactText:
      "Voice assistants and spatial computing devices represent the current and future direction of human-computer interaction.",
    topics: [
      "Voice Assistants",
      "Augmented Reality",
      "Virtual Reality",
      "Spatial Mapping",
      "Brain-Computer Interfaces",
    ],
    media:
      "This era is represented through a voice command interface where a user gives a command and receives visual feedback.",
    significance:
      "Modern HCI is becoming more conversational and immersive. Instead of only clicking or typing, users can interact with technology in more natural and human-centered ways.",
  },
];

const tabs = ["Featured Artifact", "Key Topics", "Media", "Significance"];

function renderFeaturedArtifact(selected) {
  if (selected.id === "punch") {
    return (
      <div className="demo-area punch-demo">
        <div className="punch-card" aria-label="Punch card visual">
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

        <div className="keypad" aria-label="Punch card keypad visual">
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
          grid-template-columns: 92px minmax(0, 940px) 42px;
          max-width: 1120px;
          margin: 0 auto;
          background: #000;
          color: #111;
          min-height: 760px;
          font-family:
            "Segoe UI",
            Arial,
            Helvetica,
            sans-serif;
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
          background: #7c8188;
          transform: translateX(-50%);
        }

        .year-dot {
          position: relative;
          z-index: 2;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 0;
          background: #858b93;
          color: #111;
          font-size: 0.58rem;
          font-weight: 900;
          cursor: pointer;
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            color 0.18s ease,
            outline 0.18s ease;
        }

        .year-dot span {
          display: block;
          transform: scale(0.95);
          letter-spacing: 0.2px;
        }

        .year-dot:hover {
          background: #ffffff;
          transform: scale(1.12);
          outline: 4px solid #d9dce1;
        }

        .year-dot.active {
          width: 68px;
          height: 68px;
          background: #ffffff;
          color: #111;
          outline: 6px solid #d9dce1;
          font-size: 0.68rem;
          animation: activePulse 1.8s ease-in-out infinite;
        }

        @keyframes activePulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.35);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }

        .exhibit-card {
          background: #ffffff;
          padding: 2.3rem 2.6rem;
          min-height: 760px;
        }

        .exhibit-header p:first-child {
          margin: 0;
          color: #d6d6d6;
          text-transform: uppercase;
          font-weight: 900;
          font-size: clamp(1.3rem, 3vw, 2.35rem);
          letter-spacing: 1.5px;
          line-height: 1;
        }

        .exhibit-header h1 {
          margin: 0.25rem 0 0.9rem;
          color: #000;
          text-transform: uppercase;
          font-size: clamp(2rem, 4.8vw, 3.45rem);
          letter-spacing: 7px;
          line-height: 0.98;
          font-weight: 950;
        }

        .intro {
          max-width: 820px;
          line-height: 1.6;
          font-size: 1rem;
          margin: 0;
          color: #333;
          font-weight: 500;
        }

        .try-section {
          margin-top: 1.4rem;
        }

        .try-section strong {
          display: block;
          margin-bottom: 0.8rem;
          font-size: 1.02rem;
          font-weight: 900;
          letter-spacing: 0.2px;
        }

        .demo-area {
          min-height: 170px;
          background: #f1f1f1;
          border-radius: 16px;
          padding: 1rem;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .demo-area:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
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
          font-size: 0.82rem;
          transition:
            transform 0.15s ease,
            background 0.15s ease;
        }

        .keypad span:hover {
          transform: scale(1.12);
          background: #eeeeee;
        }

        .cli-demo {
          background: #000;
          color: #00ff37;
          font-family: Consolas, "Courier New", monospace;
          font-size: 1.1rem;
        }

        .cli-demo p {
          margin: 0;
          font-weight: 700;
        }

        .cursor {
          display: inline-block;
          margin-top: 0.5rem;
          animation: blink 1s steps(2, start) infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .mouse-demo,
        .touch-demo {
          display: grid;
          place-items: center;
          text-align: center;
        }

        .mouse-demo p {
          font-weight: 800;
          color: #333;
        }

        .mouse-shape {
          width: 85px;
          height: 130px;
          border: 6px solid #333;
          border-radius: 45px;
          background: #ddd;
          transition: transform 0.2s ease;
        }

        .mouse-shape:hover {
          transform: translateX(8px);
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
          overflow: hidden;
        }

        .window-bar {
          background: #d9d9d9;
          padding: 6px;
          font-weight: 900;
          font-size: 0.82rem;
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
          transition:
            transform 0.18s ease,
            background 0.18s ease;
        }

        .desktop-icons span:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.28);
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
          transition: background 0.15s ease;
        }

        .start-menu p:hover {
          background: #d1d5db;
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
          border-radius: 2px;
        }

        .voice-input:hover {
          outline: 3px solid #8f959c;
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
          transition:
            transform 0.16s ease,
            background 0.16s ease;
        }

        .phone span:hover {
          transform: scale(1.08);
          background: #d9dce1;
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
          font-size: 0.9rem;
          cursor: pointer;
          letter-spacing: 0.2px;
          transition:
            background 0.18s ease,
            color 0.18s ease,
            transform 0.18s ease;
        }

        .tab:hover {
          background: #2c2c2c;
          transform: translateY(-4px);
        }

        .tab.active-tab {
          background: #8f959c;
          color: #000;
          transform: translateY(-4px);
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
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-panel p {
          line-height: 1.65;
          font-size: 1rem;
          font-weight: 550;
          color: #161616;
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
          font-size: 0.88rem;
          transition:
            transform 0.16s ease,
            background 0.16s ease;
        }

        .topic-grid span:hover {
          transform: translateY(-3px);
          background: #eeeeee;
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
            font-size: clamp(1.8rem, 9vw, 2.6rem);
          }

          .exhibit-header p:first-child {
            font-size: 1.15rem;
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

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
