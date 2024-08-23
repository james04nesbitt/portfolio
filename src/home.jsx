import React, { useState, useEffect } from 'react';
import './terminal.css';
import { TypeAnimation } from 'react-type-animation';
import ResumeWindow from './ResumeWindow';
import getRepos from './githubApi';

function Terminal() {
  const [commandHistory, setCommandHistory] = useState([]);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const data = await getRepos();
      setRepos(data);
    };
    fetchRepos();
  }, []);

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
            output = (
              <div>
                <h2>My Projects</h2>
                <ul>
                  {repos.map((repo) => (
                    <li key={repo.id}>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <span className="repo-title">{repo.name}</span>
                      </a>
                      <p className="repo-description">{repo.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
            break;
        case 'work experience':
          output = `Work Experience:
 - Software Engineer Intern at Ford Motor Company`
    ;
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
              1500,
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
                <span className="terminal-prompt">$</span>
                <span className="terminal-input">{entry.input}</span>
              </div>
              {typeof entry.output === 'string' ? (
                <pre
                  className="terminal-result"
                  dangerouslySetInnerHTML={{ __html: entry.output }}
                />
              ) : (
                <div className="terminal-result">{entry.output}</div>
              )}
            </div>
          ))}
        </div>

        <div className="terminal-input-line">
          <span className="terminal-prompt">$</span>
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