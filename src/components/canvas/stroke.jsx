import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import background from './../../images/background.png'
import './style.scss';
import raio from './../../images/raio.png'




class Stroke extends Component{
    constructor(props) {
        super(props);
        //added state 
        this.state = {
          x : 0,
          y : 0,
          quadratic : 0,
          lightning : [],
          lightTimeCurrent : 0,
          lightTimeTotal : 0,
          w : 0,
          h : 0
        }
       this.handleMouseMove = this.handleMouseMove.bind(this)
       this.draw = this.draw.bind(this)
       this.random=this.random.bind(this)
       this.animateLightning=this.animateLightning.bind(this)
    }
    
    componentDidMount() {

      this.setState({
        w : window.innerWidth,
        h : window.innerHeight
      })
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
      }

  random(min, max) {
      return Math.random() * (max - min + 1) + min;
    }


    
  createLightning() {
      var x = this.random(0, this.state.w / 4);
      var y = this.random(0, this.state.h / 4);
     var ranX;
     var ranY;
if(ranX === undefined){
     if (this.state.x > this.state.w/2 && this.state.y > this.state.h/2){

      ranX = this.state.x/30
      ranY = this.state.y/30  

    }
    else if(this.state.x < this.state.w/2 && this.state.y > this.state.h/2){
      ranX = -(this.state.w/2 - this.state.x)/10;
      ranY =  this.state.y/30
    }
    else if(this.state.x > this.state.w/2 && this.state.y < this.state.h/2){
      ranX = this.state.x/30;
      ranY = -(this.state.h/2 - this.state.y)/10
    }
    else {
      ranX =  -(this.state.w/2 - this.state.x)/10;
      ranY =  -(this.state.h/2 - this.state.y)/10
    }
  }
      var createCount = this.random(1, 3);
      for (var i = 0; i < createCount; i++) {
        let single = {
          x: this.state.w/2,
          y: this.state.h/2,
          xRange: ranX ,
          yRange: ranY,
          path: [{
            x: this.state.w/2,
            y: this.state.h/2
          }],
          pathLimit: this.random(10, 20)
        };
        this.state.lightning.push(single);
      }

      



  };


draw(){

  console.log('here', this.refs)
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    //const img = this.refs.image
    //const light = new Image();
  // light.src=raio
     ctx.canvas.width  = window.innerWidth;
     ctx.canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, this.state.w,this.state.y)
    // ctx.beginPath()
    // ctx.strokeStyle = 'blue'
    // ctx.moveTo(canvas.width/2, canvas.height/2)
    // ctx.lineTo(this.state.x, this.state.y)
    // ctx.stroke()

    // ctx.beginPath()
    //     ctx.strokeStyle = 'green'
        
    // ctx.bezierCurveTo(canvas.width/2 +15, canvas.height/2 + 15, this.state.y -15 , -canvas.height/2 -15, this.state.x, this.state.y)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.strokeStyle = 'red'
    // ctx.moveTo(canvas.width/2, canvas.height/2)
    // //ctx.bezierCurveTo(canvas.width/2, canvas.height/2, 100, 100, this.state.x/2, this.state.y/2)
    // ctx.quadraticCurveTo(2, 2, this.state.x, this.state.y)
    // //ctx.lineTo(this.state.x, this.state.y)
    // ctx.stroke()
      

    // //ctx.closePath()
    
    // // ctx.moveTo(100, 100);
    //     // ctx.lineTo(this.state.x, this.state.y);
    //     // ctx.stroke(); 
    //     ctx.beginPath()
    //     ctx.strokeStyle = 'red'
    //     ctx.moveTo(canvas.width/2, canvas.height/2);
    //     ctx.bezierCurveTo(canvas.width/2, canvas.height/2, this.state.y, -canvas.height/10, canvas.width/2 + this.state.x*(1/10), canvas.height/ 2+ this.state.y*(1/10))
    //     ctx.bezierCurveTo(canvas.width/2 + this.state.x*(1/10), canvas.height/ 2+ this.state.y*(1/10), this.state.y, -canvas.height/10, canvas.width/2 + this.state.x*(2/10), canvas.height/2 + this.state.y*(2/10))
    //     ctx.stroke();      
        
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
 
    for (var i = 0; i < this.state.lightning.length; i++) {
      var light = this.state.lightning[i];
 console.log('this', light.path)
      light.path.push({
        x: light.path[light.path.length - 1].x + (this.random(4, light.xRange)),
        y: light.path[light.path.length - 1].y + (this.random(4, light.yRange))
      });
  
      if (light.path.length > light.pathLimit) {
        this.state.lightning.splice(i, 1);
      }
  
      
      ctx.lineWidth = 1;
       ctx.beginPath();
      //ctx.moveTo(500, 500);
      for (var pc = 0; pc < light.path.length; pc++) {

        if(pc%4 === 0){
          ctx.lineWidth = 2;
          ctx.strokeStyle = 'rgba(100,192,203)';
          ctx.lineTo(light.path[pc].x, light.path[pc].y);
        }
        else if(pc%3 === 0){
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = 'rgba(200,152,200)';
          ctx.lineTo(light.path[pc].x, light.path[pc].y);
        }
        else{
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(200,20,203)';
          ctx.lineTo(light.path[pc].x, light.path[pc].y);
        }
      }
      // if (Math.floor(this.random(0, 30)) === 1) { //to fos apo piso
      //   ctx.fillStyle = 'rgba(255, 255, 255, ' + this.random(1, 3) / 100 + ')';
      //   ctx.fillRect(0, 0, this.state.w, this.state.h);
      // }
      ctx.lineJoin = 'miter';
      ctx.stroke();
    }
    
  }

    animateLightning() {
      
     // this.setState({
     //   lightTimeCurrent: this.state.lightTimeCurrent + 1
    //  })
      
     // if (this.state.lightTimeCurrent >= this.state.lightTimeTotal) {
        this.createLightning();

     //   this.setState({
//lightTimeCurrent : 0,
     //   lightTimeTotal : 200
     //   })
          //rand(100, 200)
      //}
      this.draw();
    }


      handleMouseMove = e => {
        let z = (Math.sqrt(Math.pow(this.state.x,2)+Math.pow(this.state.y,2))-500)
        this.setState({
          x: e.clientX,
          y: e.clientY,
          quadratic: z
        });
       // requestAnimationFrame(this.animateLightning)
       this.animateLightning()
      }
      
    render() {
      console.log('here', this.state.lightning)
      
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