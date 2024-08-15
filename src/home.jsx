import React, { useState } from 'react';
import './terminal.css';
import { TypeAnimation } from 'react-type-animation';
import ResumeWindow from './ResumeWindow';

function Terminal() {
  const [commandHistory, setCommandHistory] = useState([]);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const input = e.target.value.trim().toLowerCase();
      let output = '';

      switch (input) {
        case 'help':
          output = `Available commands:
 - help
 - about me
 - projects
 - work experience
 - clear
 - resume

Visit the alternate portfolio: <a href="/alternate" class="link">Alternate Portfolio</a>`;
          break;
        case 'about me':
          output = 'James Nesbitt: CS Major, AI enthusiast, Options Trader, WSB alumni.';
          break;
        case 'projects':
          output = `Projects:
 - Portfolio website
 - AI-based stock predictor
 - Chatbot with React`;
          break;
        case 'work experience':
          output = `Work Experience:
 - Software Developer Intern at XYZ Corp.
 - AI Research Assistant at ABC University`;
          break;
        case 'clear':
          setCommandHistory([]);
          e.target.value = '';
          return;
        case 'resume':
          setIsResumeOpen(true);
          break;
        default:
          output = `Command not found: ${input}`;
      }

      setCommandHistory([...commandHistory, { input, output }]);
      e.target.value = '';
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-content">
        <h1 className="terminal-title">
          <TypeAnimation
            sequence={['James Nesbitt\'s Portfolio', 1000]}
            wrapper="span"
            speed={50}
            cursor={false}
          />
        </h1>

        <div className="terminal-subtitle">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              'CS Major',
              1000,
              'AI enthusiast',
              1000,
              'Options Trader',
              1000,
              'WSB alumni',
              500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            
          />
        </div>

        <p className="terminal-help">
          <TypeAnimation
            sequence={[
              2000,
              'Type help for commands',
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
          />
        </p>

        <div className="terminal-output">
          {commandHistory.map((entry, index) => (
            <div key={index} className="terminal-entry">
              <div className="terminal-command">
                <span className="terminal-prompt">Ψ::&gt;&gt;</span>
                <span className="terminal-input">{entry.input}</span>
              </div>
              <pre className="terminal-result" dangerouslySetInnerHTML={{ __html: entry.output }}></pre>
            </div>
          ))}
        </div>

        <div className="terminal-input-line">
          <span className="terminal-prompt">Ψ::&gt;&gt;</span>
          <input
            type="text"
            className="terminal-input-field"
            onKeyDown={handleCommand}
            autoFocus
          />
        </div>

        {isResumeOpen && <ResumeWindow />}
      </div>
    </div>
  );
}

export default Terminal;