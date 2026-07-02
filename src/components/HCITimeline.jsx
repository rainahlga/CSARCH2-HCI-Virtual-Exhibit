import { useState } from "react";

const milestones = [
  {
    year: "1940s–1950s",
    title: "Batch Processing and Punch Cards",
    artifact:
      "Punch cards were used as one of the earliest ways to give instructions and data to computers.",
    topics: [
      "Punch cards",
      "Batch processing",
      "ENIAC",
      "Physical rewiring",
      "Early programming",
    ],
    media:
      "Imagine preparing a stack of punched cards first, then submitting them to the computer for processing.",
    significance:
      "This stage shows how limited early human-computer interaction was. Users could not directly talk to the computer in real time, but this became the foundation for future interfaces.",
  },
  {
    year: "1960s–1970s",
    title: "Command Line Interfaces",
    artifact:
      "Terminals and keyboards allowed users to type commands directly into the computer.",
    topics: [
      "Text-based commands",
      "Keyboards",
      "Computer terminals",
      "Early Unix systems",
      "File management",
    ],
    media:
      "A command-line interface uses typed commands instead of buttons, icons, or touch gestures.",
    significance:
      "CLI made interaction faster and more direct compared to punch cards. However, users still needed to memorize commands and use the correct syntax.",
  },
  {
    year: "1968",
    title: "Pointing Devices",
    artifact:
      "Douglas Engelbart introduced the computer mouse during the famous Mother of All Demos.",
    topics: [
      "Computer mouse",
      "Pointing devices",
      "Light pen",
      "Joystick comparison",
      "Interactive display workstations",
    ],
    media:
      "The mouse connected physical hand movement to movement on a digital screen.",
    significance:
      "Pointing devices made computers easier to control because users could point, select, and navigate visually instead of only typing commands.",
  },
  {
    year: "1980s",
    title: "Graphical User Interfaces",
    artifact:
      "Graphical User Interfaces introduced windows, icons, menus, and pointers.",
    topics: [
      "Windows",
      "Icons",
      "Menus",
      "Pointers",
      "Desktop metaphor",
      "Files and folders",
    ],
    media:
      "Users could click visual elements on the screen instead of typing every instruction.",
    significance:
      "GUI made computers easier for non-technical users. It reduced the need to memorize commands and made interaction more visual and user-friendly.",
  },
  {
    year: "2000s",
    title: "Touch and Mobile Interfaces",
    artifact:
      "Touchscreens allowed users to tap, swipe, pinch, and zoom directly on the screen.",
    topics: [
      "Capacitive touchscreens",
      "Multi-touch gestures",
      "Smartphones",
      "Mobile interfaces",
      "Direct manipulation",
    ],
    media:
      "Touch interaction made digital devices feel more natural because users could directly control what they saw.",
    significance:
      "Touch and mobile interfaces made computing more portable, accessible, and intuitive for many users.",
  },
  {
    year: "Present",
    title: "Spatial and Voice Computing",
    artifact:
      "Voice assistants, AR, VR, and spatial computing are modern forms of human-computer interaction.",
    topics: [
      "Voice assistants",
      "Augmented reality",
      "Virtual reality",
      "Spatial mapping",
      "Brain-computer interfaces",
    ],
    media:
      "Users can now speak commands, use gestures, and interact with digital objects in immersive spaces.",
    significance:
      "Modern HCI is becoming more conversational and immersive. Instead of only clicking or typing, users can interact with technology in more natural ways.",
  },
];

const tabs = ["Featured Artifact", "Key Topics", "Media", "Significance"];

export default function HCITimeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Featured Artifact");

  const selectedMilestone = milestones[selectedIndex];

  return (
    <section className="hci-timeline">
      <div className="timeline-nav">
        {milestones.map((milestone, index) => (
          <button
            key={milestone.year}
            className={
              selectedIndex === index
                ? "timeline-button active"
                : "timeline-button"
            }
            onClick={() => {
              setSelectedIndex(index);
              setActiveTab("Featured Artifact");
            }}
          >
            {milestone.year}
          </button>
        ))}
      </div>

      <div className="timeline-card">
        <p className="timeline-label">Human-Computer Interaction</p>
        <h2>{selectedMilestone.title}</h2>
        <p className="timeline-year">{selectedMilestone.year}</p>

        <div className="tabs">
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

        <div className="tab-content">
          {activeTab === "Featured Artifact" && (
            <p>{selectedMilestone.artifact}</p>
          )}

          {activeTab === "Key Topics" && (
            <ul>
              {selectedMilestone.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          )}

          {activeTab === "Media" && <p>{selectedMilestone.media}</p>}

          {activeTab === "Significance" && (
            <p>{selectedMilestone.significance}</p>
          )}
        </div>
      </div>

      <style>{`
        .hci-timeline {
          display: flex;
          gap: 2rem;
          background: #0f0f0f;
          padding: 2rem;
          border-radius: 18px;
          margin: 2rem 0;
        }

        .timeline-nav {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-width: 145px;
          border-left: 3px solid #9ca3af;
          padding-left: 1rem;
        }

        .timeline-button {
          border: none;
          border-radius: 999px;
          padding: 0.8rem 1rem;
          background: #9ca3af;
          color: #111;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .timeline-button:hover {
          background: #ffffff;
          transform: scale(1.03);
        }

        .timeline-button.active {
          background: #ffffff;
          outline: 4px solid #6b7280;
        }

        .timeline-card {
          flex: 1;
          background: #ffffff;
          color: #111;
          border-radius: 18px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .timeline-label {
          margin: 0;
          color: #a1a1aa;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .timeline-card h2 {
          margin: 0.3rem 0;
          font-size: 2rem;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .timeline-year {
          font-weight: 700;
          color: #4b5563;
        }

        .tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .tab {
          border: none;
          border-radius: 12px 12px 0 0;
          padding: 0.8rem 1rem;
          background: #000000;
          color: #ffffff;
          font-weight: 700;
          cursor: pointer;
        }

        .tab:hover {
          background: #333333;
        }

        .active-tab {
          background: #9ca3af;
          color: #111111;
        }

        .tab-content {
          background: #9ca3af;
          padding: 1.5rem;
          border-radius: 0 14px 14px 14px;
          min-height: 150px;
          line-height: 1.6;
        }

        .tab-content ul {
          margin: 0;
          padding-left: 1.2rem;
        }

        @media (max-width: 700px) {
          .hci-timeline {
            flex-direction: column;
          }

          .timeline-nav {
            flex-direction: row;
            overflow-x: auto;
            border-left: none;
            border-bottom: 3px solid #9ca3af;
            padding-left: 0;
            padding-bottom: 1rem;
          }

          .timeline-button {
            min-width: 120px;
          }

          .timeline-card h2 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
