//  E4_EventCrossYear.js
//  Created by Prawira Genestonlia on 23/04/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

export default class E4_EventCrossYear extends Component {
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
            <AreaChart width={500} height={400} data={this.state.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Year" />
              <YAxis dataKey="Participants" />
              <Tooltip />
              <Area type="natural" dataKey="Participants" stroke={this.state.colors[0]} fill={this.state.colors[0]} />
            </AreaChart>
          </div>
          : null}
      </div>
    )
  }
}