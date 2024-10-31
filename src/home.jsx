import React, { useState, useEffect, useRef } from 'react';
import './terminal.css';
import { TypeAnimation } from 'react-type-animation';
import ResumeWindow from './ResumeWindow';
import getRepos from './githubApi';

const commandsList = [
  'help',
  'about me',
  'projects',
  'work experience',
  'clear',
  'resume',
  'course work',
  'links'
];

function Terminal() {
  const [commandHistory, setCommandHistory] = useState([]);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [repos, setRepos] = useState([]);
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchRepos = async () => {
      const data = await getRepos();
      setRepos(data);
    };
    fetchRepos();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);

    if (value) {
      const matchedCommand = commandsList.find((command) =>
        command.startsWith(value)
      );
      if (matchedCommand) {
        setSuggestion(matchedCommand);
      } else {
        setSuggestion('');
      }
    } else {
      setSuggestion('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestion) {
        setInput(suggestion);
        setSuggestion('');
      }
    } else if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const handleCommand = (command) => {
    let output = '';

    switch (command) {
      case 'course work':
        output = `
        Taken:
        EECS 203-Discrete Math
        EECS 280-Programming and Introductory Data Structures
        EECS 281-Data Structures and Algorithms
        EECS 370-Computer Organization
        EECS 441-Mobile App Development for Entrepreneurs
        EECS 445-Introduction to Machine Learning
        EECS 482-Operating Systems + EECS 498(Advanced Operating Systems Projects)
        EECS 485-Web Systems
        Math 214-Applied Linear Algebra
        PHYSICS 380- Quantum Computing
        LING 321-How ChatGPT Works
        Currently Taking:
        EECS 376- Foundations of Computer Science
        EECS 491-Distributed Systems
        `;
        break;
      case 'help':
        output = `Available commands:
 - help
 - about me
 - projects
 - work experience
 - clear
 - resume
 - course work

Visit the alternate portfolio: <a href="/alternate" class="link">Alternate Portfolio</a>`;
        break;
      case 'about me':
        output = 'I\'m James Nesbitt, I\'m a student at the University of Michigan-Ann Arbor studying Computer Science. I am interested in many aspects of this field from Machine Learning, App Development, IoT, and Fullstack Development, as well as the intersection of Computer Science and Finance. In my free time, I like to play the guitar, workout, and ';
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
 - Software Engineer Intern at Ford Motor Company
   - Developed a Chatbot using Vertex AI and Gemini to develop...`;
        break;
      case 'clear':
        setCommandHistory([]);
        setInput('');
        return;
      case 'resume':
        setIsResumeOpen(true);
        break;
      default:
        output = `Command not found: ${command}`;
    }

    setCommandHistory([...commandHistory, { input: command, output }]);
    setInput('');
    setSuggestion('');
  };

  return (
    <div className="terminal">
      <div className="terminal-content">
        <h1 className="terminal-title">
          <TypeAnimation
            sequence={["James Nesbitt's Portfolio", 1000]}
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
                <span className="terminal-prompt">ψ</span>
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
          <span className="terminal-prompt">ψ</span>
          <div className="autocomplete-wrapper">
            <input
              type="text"
              className="terminal-input-field"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              autoFocus
              ref={inputRef}
            />
            <input
              type="text"
              className="terminal-input-suggestion"
              value={suggestion}
              readOnly
            />
          </div>
        </div>

        {isResumeOpen && <ResumeWindow onClose={() => setIsResumeOpen(false)} />}
      </div>
    </div>
  );
}

export default Terminal;
