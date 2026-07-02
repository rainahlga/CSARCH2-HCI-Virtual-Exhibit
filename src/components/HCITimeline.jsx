import { useState } from "react";

const milestones = [
  {
    year: "1940s–1950s",
    title: "Batch Processing and Punch Cards",
    overview:
      "During the early years of computing, users interacted with computers through punch cards and batch processing. Instructions were prepared beforehand by punching holes into cards, which were then processed in groups or batches.",
    artifact:
      "Punch cards were used as one of the earliest ways to store instructions and data for computers.",
    topics: [
      "Punch cards",
      "Batch processing",
      "ENIAC",
      "Physical rewiring",
      "Early programming",
    ],
    media:
      "This era can be represented through an image or simulation of a punch card to show how data was encoded using holes.",
    significance:
      "This stage shows how limited early human-computer interaction was. Users could not directly communicate with the computer in real time, but punch cards helped build the foundation for future computer interfaces.",
  },
  {
    year: "1960s–1970s",
    title: "Command Line Interfaces",
    overview:
      "Command Line Interfaces allowed users to interact with computers by typing text-based commands through keyboards and terminals. This gave users more direct control compared to punch cards.",
    artifact:
      "Computer terminals and keyboards became important tools for entering commands directly into a computer system.",
    topics: [
      "Text-based commands",
      "Keyboards",
      "Computer terminals",
      "Early Unix systems",
      "File management",
    ],
    media:
      "This era can be shown through a terminal-style interface where users type simple commands and receive preset responses.",
    significance:
      "CLI made computer interaction faster and more direct. However, users still needed to memorize commands and use the correct syntax, which made it difficult for beginners.",
  },
  {
    year: "1968",
    title: "Pointing Devices",
    overview:
      "The computer mouse became a major milestone in HCI after Douglas Engelbart introduced it during the famous Mother of All Demos. It allowed users to control items on a screen through physical movement.",
    artifact:
      "The computer mouse became a key pointing device that connected hand movement to digital screen movement.",
    topics: [
      "Computer mouse",
      "Pointing devices",
      "Light pen",
      "Joystick comparison",
      "Interactive display workstations",
    ],
    media:
      "This era can include an image or video reference of the early computer mouse and pointing-device demonstrations.",
    significance:
      "Pointing devices helped users point, select, and navigate visually instead of only typing commands. This supported the development of graphical user interfaces.",
  },
  {
    year: "1980s",
    title: "Graphical User Interfaces",
    overview:
      "Graphical User Interfaces became popular in the 1980s. They introduced windows, icons, menus, and pointers, allowing users to interact with visual elements instead of typing every command.",
    artifact:
      "The desktop interface became a major artifact of this era, using icons, folders, menus, and windows.",
    topics: [
      "Windows",
      "Icons",
      "Menus",
      "Pointers",
      "Desktop metaphor",
      "Files and folders",
    ],
    media:
      "This era can be represented through a mini desktop simulator inspired by early graphical interfaces.",
    significance:
      "GUI made computers easier for non-technical users. It reduced the need to memorize commands and made computer interaction more visual, intuitive, and accessible.",
  },
  {
    year: "2000s",
    title: "Touch and Mobile Interfaces",
    overview:
      "Touchscreens and mobile devices changed how users interacted with technology. Users could tap, swipe, pinch, and zoom directly on the screen.",
    artifact:
      "Smartphones and capacitive touchscreens became important artifacts of touch-based interaction.",
    topics: [
      "Capacitive touchscreens",
      "Multi-touch gestures",
      "Smartphones",
      "Mobile interfaces",
      "Direct manipulation",
    ],
    media:
      "This era can include examples of touch gestures like tapping, swiping, pinching, and zooming.",
    significance:
      "Touch and mobile interfaces made computing more portable and natural. Users could directly control what they saw on the screen, making technology easier to use.",
  },
  {
    year: "Present",
    title: "Spatial and Voice Computing",
    overview:
      "Modern HCI includes voice assistants, augmented reality, virtual reality, and spatial computing. These technologies allow users to interact through speech, gestures, and immersive spaces.",
    artifact:
      "Voice assistants, AR/VR devices, and spatial computing systems represent the current and future direction of HCI.",
    topics: [
      "Voice assistants",
      "Augmented reality",
      "Virtual reality",
      "Spatial mapping",
      "Brain-computer interfaces",
    ],
    media:
      "This era can be represented through a voice command simulation where users type a voice-style command and receive a response.",
    significance:
      "Modern HCI is becoming more conversational and immersive. Instead of only clicking or typing, users can interact with technology in more natural and human-centered ways.",
  },
];

const tabs = ["Overview", "Featured Artifact", "Key Topics", "Media", "Significance"];

export default function HCITimeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Overview");

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
              setActiveTab("Overview");
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
          {activeTab === "Overview" && <p>{selectedMilestone.overview}</p>}

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
