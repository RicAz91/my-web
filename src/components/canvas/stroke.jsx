import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import background from './../../images/background.png'
import './style.scss';




class Stroke extends Component{
    constructor(props) {
        super(props);
        //added state 
        this.state = {
          x : 0,
          y : 0
        }
       this.handleMouseMove = this.handleMouseMove.bind(this)
       this.draw = this.draw.bind(this)
    }
    
    // componentDidMount() {
    //     const canvas = this.refs.canvas
    // const ctx = canvas.getContext("2d")
    // const img = this.refs.image
      
    // img.onload = () => {
        
    //     ctx.font = "40px Courier"
    //     ctx.fillText(this.props.text, 210, 75)
    //     ctx.fillRect(10, 10, 100, 100)
    //     ctx.moveTo(0, 0);
    //     ctx.lineTo(this.state.x, this.state.y);
    //     ctx.stroke(); 
    //   }
    //   }

draw(){
  
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    
    const img = this.refs.image

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, 1000, 1000)
    ctx.beginPath()
    ctx.strokeStyle = 'blue'
    ctx.moveTo(canvas.width/2, canvas.height/2)
    ctx.lineTo(this.state.x, this.state.y)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = 'green'
    ctx.bezierCurveTo(canvas.width/2, canvas.height/2, this.state.y, -canvas.height/2, this.state.x, this.state.y)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = 'red'
    //ctx.moveTo(canvas.width/2, canvas.height/2)
    //ctx.bezierCurveTo(canvas.width/2, canvas.height/2, 100, 100, this.state.x/2, this.state.y/2)
    ctx.bezierCurveTo(canvas.width/2, canvas.height/2, this.state.y, canvas.height/2, this.state.x, this.state.y)
    //ctx.lineTo(this.state.x, this.state.y)
    ctx.stroke()
      

    //ctx.closePath()
    
    // ctx.moveTo(100, 100);
        // ctx.lineTo(this.state.x, this.state.y);
        // ctx.stroke(); 
         

}
      handleMouseMove = e => {
        this.setState({
          x: e.clientX,
          y: e.clientY
        });
        this.draw()
      }
      
    render() {
        console.log('x',this.state.x)
        console.log('y',this.state.y)
        return (
            <div>    
                <div className='canvas'>
        <canvas onMouseMove={this.handleMouseMove} ref="canvas" />
        {/* <img ref="image" src={background} className="hidden" /> */}
      </div>
            </div>    
        )
    }

    
}
export default Stroke