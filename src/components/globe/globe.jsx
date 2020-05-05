import React, { Component } from 'react';

import {geoProjection as projection } from "d3-geo";

const d3 = d3.json('https://codepen.io/frontendcharts/pen/JBprpp.js', (err, json) => {
  let geoJson = topojson.feature(json, json.objects.ne_110m_admin_0_countries) })

class globe extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          rotation: 0
        }
    }
    render() {
        let projection = d3.geoOrthographic()
      .fitSize([this.props.size, this.props.size], this.props.geoJson)
      .rotate([this.state.rotation])
    
    let geoGenerator = d3.geoPath()
      .projection(projection)
    
    let pathString = geoGenerator(this.props.geoJson)

    window.requestAnimationFrame(() => {
      this.setState({
        rotation: this.state.rotation + 0.2
      })
    })
        return (
            <div>
                <svg width={this.props.size} height={this.props.size} >
      <path d={pathString} />
    </svg>
            </div>
        );
    }
}

export default globe;

