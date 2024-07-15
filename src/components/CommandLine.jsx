import React, { useState } from 'react';
import './styles/Commandline.css';

function CommandLine() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const handleCommand = (command) => {
    let newOutput = [...output];
    newOutput.push(`> ${command}`);
    switch (command.toLowerCase()) {
      case 'help':
        newOutput.push('Available commands: projects, education');
        break;
      case 'projects':
        newOutput.push('Here are my projects...');
        break;
      case 'education':
        newOutput.push('Here is my education...');
        break;
      default:
        newOutput.push(`Command not found: ${command}`);
    }
    setOutput(newOutput);
  };

  return (
    <div className="command-line">
      <div className="output">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <span className="prompt"></span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}

export default CommandLine;
