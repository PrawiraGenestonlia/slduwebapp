//  E1_AttendanceSummary.js
//  Created by Prawira Genestonlia on 23/04/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import { Treemap } from 'recharts';


class CustomizedContent extends Component {
  render() {
    const {
      root, depth, x, y, width, height, index, colors, name,
    } = this.props;

    return (
      <g>
        <rect x={x} y={y} width={width} height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor(index / root.children.length * 6)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10)
          }} />
        {depth === 1 ?
          <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14} > {name} </text>
          : null}
        {depth === 1 ?
          <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9} > {index + 1} </text>
          : null}
      </g>
    );
  }
}

export default class E1_AttendanceSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      shouldShow: this.props.shouldShow,
      colors: this.props.colors,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ data: nextProps.data });
    }
  }
  render() {
    return (
      <div>
        {this.state.shouldShow ?
          <div>
            <Treemap
              width={500}
              height={300}
              data={this.state.data}
              dataKey="Participants"
              ratio={4 / 3}
              stroke="#fff"
              fill="#8884d8"
              content={<CustomizedContent colors={this.state.colors} />} />
          </div>
          : null}
      </div>
    )
  }
}

