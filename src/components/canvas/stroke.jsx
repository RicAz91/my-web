import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import background from './../../images/background.png'




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

    ctx.clearStroke(0, 0, 500, 500);  
        ctx.moveTo(100, 100);
        ctx.lineTo(this.state.x, this.state.y);
        ctx.stroke(); 
         

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
        return (
            <div>    
                <div>
        <canvas onMouseMove={this.handleMouseMove} ref="canvas" width={500} height={500} />
        <img ref="image" src={background} className="hidden" />
      </div>
            </div>    
        )
    }

    
}
export default Stroke