import React, { useState } from 'react';
import './home.css';
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
          output = `Available commands: \n - help\n - about me\n - projects\n - work experience\n - clear\n\nVisit the alternate portfolio: <a href="/alternate" style="color: #00aaff;">Alternate Portfolio</a>`;
          break;
        case 'about me':
          output = `James Nesbitt: CS Major, AI enthusiast, Options Trader, WSB alumni.`;
          break;
        case 'projects':
          output = `Projects: \n - Portfolio website\n - AI-based stock predictor\n - Chatbot with React`;
          break;
        case 'work experience':
          output = `Work Experience: \n - Software Developer Intern at XYZ Corp.\n - AI Research Assistant at ABC University`;
          break;
        case 'clear':
          setCommandHistory([]);
          e.target.value = ''; // Clear the input box
          return;
        case 'resume':
          setIsResumeOpen(true);
          break;
        default:
          output = `Command not found: ${input}`;
      }

      setCommandHistory([...commandHistory, { input, output }]);
      e.target.value = ''; // Clear the input
    }
  };

  return (
    <div className="terminal">
      <div className="indexTitle">
        <TypeAnimation 
          sequence={['James Nesbitt\'s Portfolio', 1000]}
          wrapper="span"
          speed={50}
          style={{fontFamily:'Source Code Pro', fontSize: '2.5em', display: 'block' }}
          cursor={false}
        />
      </div>
      
      <div className="subheading">
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
          style={{fontFamily:'Source Code Pro', fontSize: '1.5em', display: 'block' }}
          repeat={Infinity}
        />
        <br/>
        <TypeAnimation
          sequence={[
            2000,
            'Type help for commands',
          ]}
          wrapper="span"
          speed={50}
          style={{fontFamily:'Source Code Pro', fontSize: '1.2em', display: 'block', color: '#00aaff' }}
          cursor={true}
        />
      </div>
      
      <div className="command-output">
        {commandHistory.map((entry, index) => (
          <div key={index}>
            <div className="command-line">
              <label className="decorator">[Ψ ~]$</label>
              <span className="command-input">{entry.input}</span>
            </div>
            <pre className="command-output-text" dangerouslySetInnerHTML={{ __html: entry.output }}></pre>
          </div>
        ))}
      </div>

      <div className="input-line">
        <label className="decorator">[Ψ ~]$</label>
        <input 
          id="cmd" 
          className="Cmd" 
          onKeyDown={handleCommand}
          autoFocus
        />
      </div>

      {isResumeOpen && <ResumeWindow />}
    </div>
  );
}

export default Terminal;