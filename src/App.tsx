import React from 'react';
import './App.css';
import HelloWorld from './components/app';

import InViewElement from './components/inview';
import Nav from './components/nav';
import Projects from './components/projects';

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
      
      </div>
      <div className='about'>
  <InViewElement>
    <div className='About Intrests'>
      Hello, my name is James Nesbitt and I am a Computer Science major at the University of Michigan-Ann Arbor. I enjoy working out, listening to music, and hanging out with my friends. I have many interests within the realm of Computer Science, including Machine Learning (I love spending time on Kaggle) as well as building web apps.
    </div>
  </InViewElement>
  <InViewElement>
    <div className=' About Hobbies'>
      When I am not coding or taking classes, I love to work out at the Gym, listen to music, watch sports(I am an avid supporter of every sports team in Georgia), and hanging with friends
    </div>
  </InViewElement>
</div>
<div className='Proj'>
    <Projects/>

</div>


      
    </div>
  );
}

export default App;
