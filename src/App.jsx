import React, {Component} from 'react';
import background from './images/background.gif';
import './App.scss';
import Zoom from 'react-reveal/Zoom';
import Stroke from './components/canvas/stroke.jsx'

class App extends Component {
  constructor() {
    super()
    this.state={
       
    }
   
}
render() {
  return (
    <div className="App">
      <Zoom>{/*Using Zoom Effect*/}
          <header className="App-header">
            {/* <img src={background} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1> */}
            <Stroke />
          </header>
        </Zoom>
      <div className='App-header-over'>
      
         <div >
           <h1>About me</h1>
         </div>
       
         <div>
           {/* <h1>My Work</h1> */}
         </div>
              
         <div>
           {/* <h1>Contact</h1> */}
         </div>
       </div>
    </div>
  )
}
}

export default App;
