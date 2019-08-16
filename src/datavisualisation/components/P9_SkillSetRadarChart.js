//  P9_SkillSetRadarChart.js
//  Created by Prawira Genestonlia on 06/05/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import { } from 'antd';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

export default class P9_SkillSetRadarChart extends Component {
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
            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={600} data={this.state.data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skillset" />
              <PolarRadiusAxis angle={30} domain={[0, this.state.data[0].max]} />
              {/* <Radar name="ClassAverage" dataKey="ClassAverage" stroke={this.props.colors[2]} fill={this.props.colors[2]} fillOpacity={0.6} /> */}
              <Radar name="IndividualScore" dataKey="IndividualScore" stroke={this.props.colors[0]} fill={this.props.colors[0]} fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </div>
          : null}
      </div>
    )
  }
}