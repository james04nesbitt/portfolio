import React from 'react';
import './home.css';
import { TypeAnimation } from 'react-type-animation';


function Terminal() {
  

  return (
    <div className="terminal">
      <TypeAnimation className='indexTitle'
      sequence={[

        // Same substring at the start will only be typed out once, initially
        'James Nesbitt\'s Portfolio',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{fontFamily:'monospace', fontSize: '2em', display: 'inline-block' }}
      cursor={false}
    />
    <br/>
    <label htmlFor="cmd">Hello</label>
    <input className='Cmd'>
    </input>
</div>
  );
}


export default Terminal;
