import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/app';
import Profile from './components/image';
import Subheading from './components/subheading';
import InViewElement from './components/inview';
import Nav from './components/nav';

// git add .
// git commit -m "m" 
// git push -u origin main

const App = () => {
  return (
    <div className="App">
      <div className='links'>
    <Nav/>
  </div>
      <div className="landing text">
      <HelloWorld />
      {/* <Profile/> */}
      <br/><br/>
      <Subheading/>
      </div>
      <div className='about'>
  <InViewElement>
    <div className='About'>
      Hello, my name is James Nesbitt and I am a Computer Science major at the University of Michigan-Ann Arbor. I enjoy working out, listening to music, and hanging out with my friends. I have many interests within the realm of Computer Science, including Machine Learning (I love spending time on Kaggle) as well as building web apps.
    </div>
  </InViewElement>
</div>


      
    </div>
  );
}

export default App;
