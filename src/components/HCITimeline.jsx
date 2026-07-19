import { useState } from "react";
import myMusicTrack from "../assets/Elevator Music.mp3";
import CLITerminal from "./CLITerminal.jsx";
import PunchCardSimulator from "./PunchCardSimulator.jsx";
import GUISimulator from "./MiniDesktop.jsx";

const milestones = [
  {
    id: "punch",
    marker: "1940s",
    eraName: "Batch Processing Era",
    title: "Batch Processing and Punch Cards",
    tryIt: "Punching a Punch Card",
    overview:
      "During the early years of computing, users interacted with computers through punch cards and batch processing. Instructions were prepared beforehand by punching holes into cards, which were then processed in groups or batches.",
    artifactTitle: "Punch Card",
    artifactText:
      "Punch cards stored instructions and data using holes. Users had to prepare the cards before submitting them to the computer. This made early computing slow, but it became one of the first ways people gave instructions to machines.",
    citations: [],
      topics: [
      //ibahin niyo nalang yung links
      {
        name: "Punch Cards",
        link: "https://www.sciencedirect.com/topics/computer-science/voice-assistant"
      },
      {
        name: "Batch Processing",
        link: "https://www.ibm.com/think/topics/augmented-reality"
      },
      {
        name: "ENIAC",
        link: "https://www.britannica.com/technology/virtual-reality"
      },
      {
        name: "Physical Rewiring",
        link: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/spatial-mapping"
      },
      {
        name: "Early Programming",
        link: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/spatial-mapping"
      }
    ],
    media:[
      {
        type: "image",
        url: "https://youtu.be/rh6e-mW_y5E?si=anJ5FabJKzyflXgh", //palitan niyo nalang
        caption: "This era is represented through a simplified punch card visual. The holes show how early data and instructions were encoded before being processed by a computer."
      }
    ],
    significance:
      "This stage shows how limited early human-computer interaction was. Users could not communicate with the computer in real time, but punch cards helped create the foundation for future interfaces.",
  },
  {
    id: "cli",
    marker: "1960s",
    eraName: "Text Command Era",
    title: "Command Line Interface",
    tryIt: "Command Line Interface",
    overview:
      "Command Line Interfaces allowed users to interact with computers by typing text-based commands through keyboards and terminals. This gave users more direct control compared to punch cards.",
    artifactTitle: "Computer Terminal",
    artifactText:
      "Computer terminals and keyboards allowed users to enter commands and receive responses through text. This made interaction faster because users no longer had to wait for punched cards to be processed.",
    citations: [],
      topics: [
      //ibahin niyo nalang yung links
      {
        name: "Text-Based Commands",
        link: "https://www.sciencedirect.com/topics/computer-science/voice-assistant"
      },
      {
        name: "Keyboards",
        link: "https://www.ibm.com/think/topics/augmented-reality"
      },
      {
        name: "Computer Terminals",
        link: "https://www.britannica.com/technology/virtual-reality"
      },
      {
        name: "Early Unix Systems",
        link: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/spatial-mapping"
      },
      {
        name: "File Management",
        link: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/spatial-mapping"
      }
    ],
    media:[
      {
        type: "image",
        url: "https://youtu.be/rh6e-mW_y5E?si=anJ5FabJKzyflXgh", //palitan niyo nalang
        caption: "This era is represented through a terminal-style screen where commands are typed using a keyboard."
      }
    ],
    significance:
      "CLI made computer interaction faster and more direct. However, users still needed to memorize commands and use the correct syntax, which made it difficult for beginners.",
  },
  {
    id: "mouse",
    marker: "1968",
    eraName: "Pointing Device Era",
    title: "Pointing Devices",
    tryIt: "Pointing Device Interaction",
    overview:
      "The computer mouse became a major milestone in HCI after Douglas Engelbart introduced it during the famous Mother of All Demos. It allowed users to control items on a screen through physical movement.",
    artifactTitle: "Computer Mouse",
    artifactText:
      "The mouse connected hand movement to digital screen movement. It allowed users to point, select, and navigate visually instead of relying only on typed commands.",
    citations: [],
      topics: [
      //ibahin niyo nalang yung links
      {
        name: "Computer Mouse",
        link: "https://www.sciencedirect.com/topics/computer-science/voice-assistant"
      },
      {
        name: "Pointing Devices",
        link: "https://www.ibm.com/think/topics/augmented-reality"
      },
      {
        name: "Light Pen",
        link: "https://www.britannica.com/technology/virtual-reality"
      },
      {
        name: "Joystick Comparison",
        link: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/spatial-mapping"
      },
      {
        name: "Interactive Display Workstations",
        link: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/spatial-mapping"
      }
    ],
    media: [
        {
        type: "image",
        url: "https://youtu.be/rh6e-mW_y5E?si=anJ5FabJKzyflXgh", //palitan niyo nalang
        caption: "This era is represented through a simple mouse visual showing how physical motion became digital control."
      }
    ],
    significance:
      "Pointing devices helped make computers easier to navigate. They supported the shift toward graphical interfaces and more visual forms of interaction.",
  },
  {
    id: "gui",
    marker: "1980s",
    eraName: "Graphical Interface Era",
    title: "Graphical User Interface",
    tryIt: "Mini Desktop",
    overview:
      "Graphical User Interfaces became popular in the 1980s. They introduced windows, icons, menus, and pointers, allowing users to interact with visual elements instead of typing every command.",
    artifactTitle: "Desktop Interface",
    artifactText:
      "The desktop interface used icons, folders, windows, menus, and pointers to make computers easier to understand and use.",
    citations: [],
      topics: [
      //ibahin niyo nalang yung links
      {
        name: "Windows",
        link: "https://www.sciencedirect.com/topics/computer-science/voice-assistant"
      },
      {
        name: "Icons",
        link: "https://www.ibm.com/think/topics/augmented-reality"
      },
      {
        name: "Menus",
        link: "https://www.britannica.com/technology/virtual-reality"
      },
      {
        name: "Pointers",
        link: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/spatial-mapping"
      },
      {
        name: "Desktop Metaphor",
        link: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/spatial-mapping"
      },
      {
        name: "Files and Folders",
        link: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/spatial-mapping"
      }
    ],
    media: [
      {
        type: "image",
        url: "https://youtu.be/rh6e-mW_y5E?si=anJ5FabJKzyflXgh", //palitan niyo nalang
        caption: "This era is represented through a mini desktop layout inspired by early graphical user interfaces."
      }
    ],
    significance:
      "GUI made computers easier for non-technical users. It reduced the need to memorize commands and made interaction more visual, intuitive, and accessible.",
  },
  {
    id: "touch",
    marker: "2000s",
    eraName: "Touch Interaction Era",
    title: "Touch and Mobile Interface",
    tryIt: "Touch Interaction",
    overview:
      "Touchscreens and mobile devices changed how users interacted with technology. Users could tap, swipe, pinch, and zoom directly on the screen.",
    artifactTitle: "Smartphone Touchscreen",
    artifactText:
      `Mobile devices wouldn't be that portable if it was not for the ability to interact with a display that acted both as the input and the output. Touchscreens came to life in 1965 by E.A. Johnson at the Royal Radar Establishment in Malvern, United Kingdom. Soon, the resistive touchscreen was accidentally discovered by Dr. G. Samuel Hurst in 1970. This specific type of touchscreen allows the user to interact with the machine using pressure. It detects pressure by how much the resistive top and bottom layers conduct. This change in voltage and current tells the machine that the user is interacting with the interface, mapping the location of the interaction and executing the command accordingly. It is cheaper than other types, works with wet and moist environments and can be used by any object that applies pressure on its top layer. For its cons, resistive touchscreens does not support multi-touch, meaning it could only process one input command at a time. 

      Capacitive touchscreens, on the other hand, was invented later in early 2000s that relies on its indium tin oxide top layer, a conductive material when touched by a finger, disrupts the screen's electrostatic field. The interaction is also mapped accordingly by its software to determine what command the user would like to execute. It is relatively more sensitive and responsive than resistive touchscreens, and supports multi-touch. Additionally, it has higher clarity due to the lack of multiple layers resistive screens require. Its named flaws are it does not work with non-conductive objects and is susceptible to electromagnetic interference.

      Infrared touchscreens are used in military grade equipment where it sustains harsh climates with its notable durable. It can detect any type of object touching the screen, though, it is very expensive to manufacture and direct sunlight can interfere with the user's interaction. There are two notable types. Infrared beams are used to sense when a user presses on the interface with its sensors when the finger obstructs the infrared beams. The second type involves internal reflection within the device where the light traveling is divided to travel out of the lens and back into the device. Cameras are used to measure light diffusion when the user interacts with the screen.`,
    citations: [
      {
        id: 1,
        text: `Dang, Q. (2018, October 30). Touchscreen: an Engineered Harmony between Humans and Machines. Illumin Magazine. https://illumin.usc.edu/touchscreen-an-engineered-harmony-between-humans-and-machines/`
      },
      {
        id: 2,
        text: `Hope, T., & Kozak, J. (2010). Touch Screens: A Pressing Technology. In Tenth Annual Freshman Conference. University of Pittsburgh.`
      },
      {
        id: 3,
        text: `Hoy, M. B. (2016). Alexa, Siri, Cortana, and More: An Introduction to Voice Assistants. Medical Reference Services Quarterly, 37(1), 81–88.`
      }
    ],
    topics: [
    //ibahin niyo nalang yung links
      {
      name: "Capacitive Touchscreens",
      link: "https://www.rocktech.com.hk/rocktech-blog/how-capacitive-touchscreens-work-principles-and-applications/"
    },
    {
      name: "Multi-Touch Gestures",
      link: "https://hci-museum.lisn.upsaclay.fr/multi-touch-gestures"
    },
    {
      name: "Smartphones",
      link: "https://www.britannica.com/technology/smartphone"
    },
    {
      name: "Mobile Interfaces",
      link: "https://www.netguru.com/glossary/mobile-user-interface"
    },
    {
      name: "Direct Manipulation",
      link: "https://www.nngroup.com/articles/direct-manipulation/"
    }
  ],
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/4mPdNV_smWg", //palitan niyo nalang
        caption: "Branch Education explains the synergy between the layers of a smartphone's touchscreen and how touch is mapped and calculated by the device's software. The electronics behind the screen sweeps through its capacitive sensors and reconstructs a grid to measure the multiple touches the user may apply."
      }
    ],
    significance:
      "Touchscreens made devices more portable, allowing technology to be easily accessed with an ease of a swipe. The technology behind touchscreens allow users to interact with content with multi-touch gestures. Direct manipulation and mobile interfaces makes interactions and input commands more intuitive from dragging and dropping, to easy to understand menu selections and button presses.",
  },
  {
    id: "voice",
    marker: "Present",
    eraName: "Spatial and Voice Era",
    title: "Spatial and Voice Computing",
    tryIt: "Voice Command",
    overview:
      "Modern HCI includes voice assistants, augmented reality, virtual reality, and spatial computing. These technologies allow users to interact through speech, gestures, and immersive spaces.",
    artifactTitle: "Siri: Apple's Voice Assistant",
    artifactText:
      `Before Siri, the iconic female-voiced voice assistant and artificial intelligence program by Apple, its origins came from its founders' ingenuity in  Defense Department on the Cognitive Assistant That Learns and Organizes (CALO) and was funded by Defense Advanced Research Projects (DARPA). From Stanford Research Institute (SRI) International, Dag Kittlaus, Adam Cheyer, and Tom Gruber were the minds who pushed Siri to Apple's App Store as a standalone application on February 2011 before Apple bought the assets for $200 million. Being one of its kind, Apple monopolized the voice assistant and integrated it to other Apple products before gradually losing its edge since 2016 when competitors like Amazon's Alexa and Google's Google Assistant were introduced.

      Debuting in October 2011 on the iPhone 4s, Siri was integrated as one of the phone's newest features. Siri came with three initial accents: American, British and Australian. Various voice actors were not aware they became the voices of Siri namely Susan Bennett who voiced the American accent, Karen Jacobsen who voiced the Australian accent, and Jon Briggs, who voiced the first male-voiced version of Siri. Its voiced evolved and the once human voices were replaced with computer-generated speech, or speech synthesis. Through data modelling and developing deep neural networks in cloud computing networks, voice assistants are woken up to life with a keyword like "Hey, Siri".`,
    citations: [
      {
        id: 1,
        text: `Hoy, M. B. (2016). Alexa, Siri, Cortana, and More: An Introduction to Voice Assistants. Medical Reference Services Quarterly, 37(1), 81-88.`
      },
      {
        id: 2,
        text: `McDonough, M. (2026). Siri. Britannica. https://www.britannica.com/technology/Siri`
      },
      {
        id: 3,
        text: `Orner, R. (2023). Siri(computer program). EBSCO. https://www.ebsco.com/research-starters/computer-science/siri-computer-program`
      }
    ],
    topics: [
      {
        name: "Voice Assistants",
        link: "https://www.sciencedirect.com/topics/computer-science/voice-assistant"
      },
      {
        name: "Augmented Reality",
        link: "https://www.ibm.com/think/topics/augmented-reality"
      },
      {
        name: "Virtual Reality",
        link: "https://www.britannica.com/technology/virtual-reality"
      },
      {
        name: "Spatial Mapping",
        link: "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/spatial-mapping"
      }
    ],
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/rh6e-mW_y5E",
        caption: `The TED Talks seminar above, presented by Dr. Sylvia Xueni Pan, discusses how Virtual Reality (VR) effects social interaction. In its early stages, VR becomes a hub of full-body human social interaction in the comfort of our own homes and with animosity. Conversations and interactions become complete and comprehensive when all unconscious body language is involved.`
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/4nwQ36m9aDE",
        caption: "From Reddam House school in Berkshire, England, Reuters managed to quickly document the experience of learning in the virtual world. Students navigated through the subjects of science while their teachers explained the history, parts and significance of the topic."
      }
    ],
    significance:
      "Modern HCI is becoming more conversational and immersive. Instead of only clicking or typing, users can interact with technology in more natural and human-centered ways. Voice assistants allows users to interact with their devices through their voice with a simple keyword, and even control the environment of their own homes and personal spaces. When human interaction becomes inconvenient, scarce and socially stressful, virtual reality provides a safe space behind avatars but retaining the full context of human interaction and conversations through full-body language. Additionally, VR begins to be an essential teaching tool through personal immersion and interaction with the subject when it debuted in metaverse schools.",
  },
];

const tabs = ["Featured Artifact", "Key Topics", "Media", "Significance"];

function renderFeaturedArtifact(selected) {
  if (selected.id === "punch") {
    return (
      <div className="demo-area punch-demo">
        <PunchCardSimulator />
      </div>
    );
  }

  if (selected.id === "cli") {
    return (
      <div className="demo-area cli-demo-wrapper">
        <CLITerminal />
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
        <GUISimulator />
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

  if (selected.id === "voice") {
    const handleMicrophoneListen = () => {
      const statusEl = document.getElementById("voice-demo-status");
      const textEl = document.getElementById("voice-detected-text");
      const visualActionEl = document.getElementById("voice-visual-action");

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        if (statusEl) statusEl.innerText = "Speech recognition not supported.";
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.start();

      if (statusEl) statusEl.innerText = "Listening...";

      recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript.toLowerCase();
        if (textEl) textEl.innerText = `"${event.results[0][0].transcript}"`;

        const audioPlayer = document.getElementById("voice-audio-player");
        // Check if the music player is currently locked
        const isMusicLocked = visualActionEl?.getAttribute("data-music-locked") === "true";

        if (statusEl) statusEl.innerText = "Processing command...";

        setTimeout(() => {
          // RULE 1: If music is locked, ONLY allow the stop command
          if (isMusicLocked) {
            if (speechToText.includes("stop") || speechToText.includes("pause") || speechToText.includes("turn off")) {
              if (statusEl) statusEl.innerText = "Music stopped. Interface unlocked.";
              if (audioPlayer) {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
              }
              if (visualActionEl) {
                visualActionEl.className = "action-display idle";
                visualActionEl.setAttribute("data-music-locked", "false"); // Unlock
              }
            } else {
              // Ignore any other command
              if (statusEl) statusEl.innerText = "Mode Locked: Saying anything other than 'Stop' is ignored while music plays.";
            }
            return; // Exit early so no other commands trigger
          }

          // RULE 2: Standard behavior if music is NOT locked
          if (speechToText.includes("light") && speechToText.includes("turn on")) {
            if (statusEl) statusEl.innerText = "Action performed: Lights turned on.";
            if (visualActionEl) visualActionEl.className = "action-display light-on";
          } else if (speechToText.includes("lights") && speechToText.includes("turn off")) {
            if (statusEl) statusEl.innerText = "Action performed: Lights turned off.";
            if (visualActionEl) visualActionEl.className = "action-display matrix-theme";
          } else if (speechToText.includes("music") || speechToText.includes("play")) {
            if (statusEl) statusEl.innerText = "Action performed: Playing music. Interface locked to 'Stop' command.";
            if (audioPlayer) {
              audioPlayer.volume = 1.0;
              audioPlayer.load();
              audioPlayer.play().catch(err => {
                console.error("Browser media policy blocked autoplay:", err);
              });
            }
            if (visualActionEl) {
              visualActionEl.className = "action-display music-playing";
              visualActionEl.setAttribute("data-music-locked", "true"); // Lock it down!
            }
          } else if (
            (speechToText.includes("tell") && speechToText.includes("yourself")) ||
            (speechToText.includes("who") && speechToText.includes("you")) ||
            (speechToText.includes("what") && speechToText.includes("are you")) ||
              speechToText.includes("introduce yourself")
          ) {
            const response =
              "I am a voice-activated assistant, ready to help once you press the button!";

            if (statusEl) statusEl.innerText = response;

            const utterance = new SpeechSynthesisUtterance(response);
            utterance.lang = "en-US";
            speechSynthesis.speak(utterance);

            if (visualActionEl)
              visualActionEl.className = "action-display assistant-speaking";
          } else {
            if (statusEl) statusEl.innerText = `Unknown command: "${speechToText}"`;
            const response = "Sorry, I did not catch that.";
            const utterance = new SpeechSynthesisUtterance(response);
            utterance.lang = "en-US";
            speechSynthesis.speak(utterance);
            if (visualActionEl) visualActionEl.className = "action-display unknown";
          }
        }, 1000);
      };
    };

    return (
      <div className="demo-area voice-demo">
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <button
            onClick={handleMicrophoneListen}
            className="voice-act-btn"
            style={{
              background: "#ef4444",
              color: "#fff",
              border: "none",
              padding: "0.8rem 2rem",
              fontWeight: "900",
              borderRadius: "999px",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 4px 12px rgba(239, 68, 68, 0.4)"
            }}
          >
            🎙️ Click to Speak
          </button>
          <p style={{ fontSize: "0.85rem", margin: "8px 0 0", color: "#666" }}>
            Say "Turn on the lights" to change lighten up the feedback view, and "Turn off the lights" darken it.
          </p>
          <p style={{ fontSize: "0.85rem", margin: "8px 0 0", color: "#666" }}>
            Say "Play music" to play music, and "Stop music" or "Pause music" to stop.
          </p>
          <p style={{ fontSize: "0.85rem", margin: "8px 0 0", color: "#666" }}>
            You cannot turn on and off the lights while music is playing!
          </p>
          <p style={{ fontSize: "0.85rem", margin: "8px 0 0", color: "#666" }}>
            Ask "Who are you?" and expect a reply.
          </p>
        </div>

        <div className="voice-status-box">
          <span className="status-label">Status:</span>
          <div id="voice-demo-status" style={{ fontWeight: "700" }}>Ready.</div>
        </div>

        <div className="voice-status-box">
          <span className="status-label">Heard text:</span>
          <div id="voice-detected-text" style={{ fontStyle: "italic", color: "#444" }}>...</div>
        </div>

        {/* Note the data-music-locked attribute initialization here */}
        <div id="voice-visual-action" className="action-display idle" data-music-locked="false">
          <div className="smart-bulb"></div>
          <div className="audio-visualizer">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <span className="action-text">Interface Feedback View</span>
        </div>
        <audio
          id="voice-audio-player"
          src={myMusicTrack}
          loop
        />
      </div>
    );
  }
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
            className={selectedIndex === index ? "era-button active" : "era-button"}
            onClick={() => chooseEra(index)}
            aria-label={`Open ${milestone.title}`}
          >
            <span className="era-marker">{milestone.marker}</span>
            <span className="era-title">{milestone.eraName}</span>
          </button>
        ))}
      </aside>

      <section className="exhibit-card">
        <header className="exhibit-header">
          <div className="header-top">
            <div>
              <p className="museum-label">Historical Computing Exhibit</p>
              <p className="hci-label">Human-Computer Interaction</p>
            </div>

            <div className="era-count">
              <span>{String(selectedIndex + 1).padStart(2, "0")}</span>
              <small>/ {String(milestones.length).padStart(2, "0")}</small>
            </div>
          </div>

          <div className="title-box">
            <p className="era-name">{selected.eraName}</p>
            <h1>{selected.title}</h1>
            <p className="intro">{selected.overview}</p>
          </div>
        </header>

        <section className="try-section">
          {selected.id !== "mouse" && selected.id !== "touch" && (
            <strong>Try It: {selected.tryIt}</strong>
          )}
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
              <p style={{ whiteSpace: "pre-line" }}>{selected.artifactText}</p>
              <h3>References</h3>

              <ol className="reference-list">
                {selected.citations.map((citation) => (
                  <li key={citation.id}>
                    <a
                      href={citation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {citation.text}
                    </a>
                  </li>
                ))}
              </ol>
            </>
          )}

          {activeTab === "Key Topics" && (
            <>
              <h2>Key Topics</h2>
              <div className="topic-grid">
                <div className="topic-grid">
                  {selected.topics.map((topic) => (
                    <a
                      key={topic.name}
                      href={topic.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="topic-button"
                    >
                      {topic.name}
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "Media" && (
            <>
              <h2>Media</h2>
              {selected.media.map((item, index) => (
                <div key={index}>
                  {item.type === "image" && (
                    <img src={item.url} alt={item.caption} />
                  )}

                  {item.type === "video" && (
                      <iframe
                        width="100%"
                        height="400"
                        src={item.url}
                        title={item.caption}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                  )}

                  <p>{item.caption}</p>
                </div>
              ))}
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
          grid-template-columns: 170px minmax(0, 940px) 42px;
          max-width: 1180px;
          margin: 0 auto;
          background: #000;
          color: #111;
          min-height: 760px;
          font-family:
            "Segoe UI",
            Arial,
            Helvetica,
            sans-serif;
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.35);
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
          align-items: stretch;
          padding: 2rem 1rem;
          gap: 0.75rem;
        }

        .timeline-line {
          position: absolute;
          top: 3rem;
          bottom: 3rem;
          left: 1.6rem;
          width: 3px;
          background: #72767d;
        }

        .era-button {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 46px 1fr;
          align-items: center;
          gap: 0.55rem;
          border: none;
          background: transparent;
          color: #9ca3af;
          text-align: left;
          cursor: pointer;
          padding: 0.4rem 0;
        }

        .era-marker {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #858b93;
          color: #111;
          font-size: 0.62rem;
          font-weight: 900;
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            outline 0.18s ease;
        }

        .era-title {
          display: block;
          font-size: 0.76rem;
          font-weight: 900;
          line-height: 1.15;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          opacity: 0.75;
          transition:
            color 0.18s ease,
            opacity 0.18s ease,
            transform 0.18s ease;
        }

        .era-button:hover .era-marker {
          background: #ffffff;
          transform: scale(1.08);
          outline: 4px solid #d9dce1;
        }

        .era-button:hover .era-title {
          color: #ffffff;
          opacity: 1;
          transform: translateX(3px);
        }

        .era-button.active .era-marker {
          width: 60px;
          height: 60px;
          background: #ffffff;
          color: #111;
          outline: 6px solid #d9dce1;
          transform: translateX(-7px);
        }

        .era-button.active .era-title {
          color: #ffffff;
          opacity: 1;
          transform: translateX(2px);
        }

        .exhibit-card {
          background: #ffffff;
          padding: 2rem 2.4rem 2.3rem;
          min-height: 760px;
        }

        .exhibit-header {
          position: relative;
          border-radius: 24px;
          padding: 1.3rem;
          background:
            linear-gradient(135deg, #f5f5f5 0%, #ffffff 45%, #e9eaec 100%);
          border: 1px solid #d8d8d8;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.8),
            0 14px 28px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .exhibit-header::before {
          content: "";
          position: absolute;
          right: -90px;
          top: -90px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.055);
        }

        .exhibit-header::after {
          content: "";
          position: absolute;
          right: 36px;
          bottom: 26px;
          width: 120px;
          height: 120px;
          border: 18px solid rgba(0, 0, 0, 0.04);
          border-radius: 50%;
        }

        .header-top,
        .title-box {
          position: relative;
          z-index: 1;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .museum-label {
          margin: 0;
          color: #5f646b;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 2px;
          font-weight: 900;
        }

        .hci-label {
          margin: 0.2rem 0 0;
          color: #c9c9c9;
          text-transform: uppercase;
          font-size: clamp(1rem, 2.5vw, 1.8rem);
          letter-spacing: 1.5px;
          font-weight: 900;
        }

        .era-count {
          min-width: 88px;
          background: #111;
          color: #fff;
          border-radius: 18px;
          padding: 0.65rem 0.8rem;
          text-align: center;
          box-shadow: 5px 5px 0 #c7c7c7;
        }

        .era-count span {
          font-size: 1.5rem;
          font-weight: 900;
          line-height: 1;
        }

        .era-count small {
          font-size: 0.78rem;
          color: #cfcfcf;
          font-weight: 800;
        }

        .era-name {
          display: inline-block;
          margin: 0 0 0.55rem;
          padding: 0.35rem 0.7rem;
          background: #111;
          color: #fff;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .exhibit-header h1 {
          margin: 0.1rem 0 0.9rem;
          color: #000;
          text-transform: uppercase;
          font-size: clamp(2rem, 4.5vw, 3.35rem);
          letter-spacing: 5px;
          line-height: 0.98;
          font-weight: 900;
          max-width: 760px;
        }

        .intro {
          max-width: 810px;
          line-height: 1.6;
          font-size: 0.98rem;
          margin: 0;
          color: #333;
          font-weight: 500;
        }

        .try-section {
          margin-top: 1.35rem;
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

        .cli-demo-wrapper {
          background: transparent;
          padding: 0;
        }

        .cli-demo-wrapper:hover {
          transform: none;
          box-shadow: none;
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
          background: transparent;
          padding: 0;
          min-height: auto;
          border-radius: 12px;
          overflow: hidden;
        }

        .voice-status-box {
        background: #e5e7eb;
        padding: 0.6rem 1rem;
        border-radius: 6px;
        font-size: 0.9rem;
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .status-label {
        font-weight: 900;
        color: #111;
        text-transform: uppercase;
        font-size: 0.75rem;
        background: #cbd5e1;
        padding: 2px 6px;
        border-radius: 4px;
      }

      /* Base Interface Action Display */
      .action-display {
        min-height: 120px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: all 0.4s ease;
        border: 2px dashed #9ca3af;
      }

      .action-display.idle {
        background: #fafafa;
        color: #6b7280;
      }

      .action-display .smart-bulb {
        width: 30px;
        height: 30px;
        background: #9ca3af;
        border-radius: 50%;
        transition: all 0.4s ease;
      }

      /* Visual Action: Turn on the lights */
      .action-display.light-on {
        background: #fef08a;
        border-color: #eab308;
        color: #854d0e;
      }
      .action-display.light-on .smart-bulb {
        background: #eab308;
        box-shadow: 0 0 20px #eab308;
      }

      /* Visual Action: Change Theme */
      .action-display.matrix-theme {
        background: #064e3b;
        border-color: #10b981;
        color: #a7f3d0;
      }
      .action-display.matrix-theme .smart-bulb {
        background: #10b981;
      }

      /* Visual Action: Error/Unknown command */
      .action-display.unknown {
        background: #fee2e2;
        border-color: #ef4444;
        color: #991b1b;
      }

      .audio-visualizer {
        display: none;
        gap: 4px;
        align-items: flex-end;
        height: 40px;
        margin: 10px 0;
      }

      .audio-visualizer span {
        width: 6px;
        height: 100%;
        background: #3b82f6;
        border-radius: 3px;
      }

      .action-display.music-playing {
        background: #eff6ff;
        border-color: #3b82f6;
        color: #1e3a8a;
      }

      .action-display.music-playing .smart-bulb {
        display: none; 
      }

      .action-display.music-playing .audio-visualizer {
        display: flex; 
      }

      .action-display.music-playing .audio-visualizer span {
        animation: bounceVisualizer 0.6s ease infinite alternate;
      }
      .action-display.music-playing .audio-visualizer span:nth-child(2) { animation-delay: 0.1s; animation-duration: 0.4s; }
      .action-display.music-playing .audio-visualizer span:nth-child(3) { animation-delay: 0.2s; animation-duration: 0.7s; }
      .action-display.music-playing .audio-visualizer span:nth-child(4) { animation-delay: 0.15s; animation-duration: 0.5s; }
      .action-display.music-playing .audio-visualizer span:nth-child(5) { animation-delay: 0.3s; animation-duration: 0.6s; }

      @keyframes bounceVisualizer {
        0% { height: 10%; }
        100% { height: 100%; }
      }

        .voice-input:hover {
          outline: 3px solid #8f959c;
        }

        .voice-act-btn:hover {
          background: #dc2626;
          box-shadow: 0 6px 16px rgba(220, 38, 38, 0.6);
          transform: scale(1.05);
        }

        .voice-act-btn {
          transition: all 0.2s ease;
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
          font-weight: 900;
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

        .topic-button {
          background: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 10px 18px;
          min-height: 42px;

          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;

          color: #2b2b2b;

          padding: 0.3rem 0.9rem;
          border-radius: 999px;
          font-weight: 900;
          font-size: 0.88rem;
          transition:
            transform 0.16s ease,
            background 0.16s ease;
        }

        .topic-button:hover {
          transform: translateY(-3px);
          background: #eeeeee;
        }

        @media (max-width: 900px) {
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

          .era-button {
            min-width: 150px;
            grid-template-columns: 46px 1fr;
          }

          .era-button.active .era-marker {
            transform: none;
          }

          .exhibit-card {
            padding: 1.2rem;
            min-height: auto;
          }

          .header-top {
            flex-direction: column;
          }

          .exhibit-header h1 {
            letter-spacing: 3px;
            font-size: clamp(1.8rem, 9vw, 2.6rem);
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
