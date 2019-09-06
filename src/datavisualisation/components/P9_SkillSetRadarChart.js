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
      max: 10
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ data: nextProps.data });
      this.setState({ max: this.state.data[0].max });
    }
  }

  render() {
    return (
      <>
        {this.state.shouldShow ?
          <div style={{ height: '100%', width: '700px' }}>
            <RadarChart cx={300} cy={250} outerRadius={150} width={700} height={420} data={this.state.data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skillset" />
              <PolarRadiusAxis angle={0} domain={[0, 100]} />
              {/* <Radar name="ClassAverage" dataKey="ClassAverage" stroke={this.props.colors[2]} fill={this.props.colors[2]} fillOpacity={0.6} /> */}
              <Radar name="IndividualScore" dataKey="IndividualScore" stroke={this.props.colors[0]} fill={this.props.colors[0]} fillOpacity={0.6} />
              {/* <Legend /> */}
            </RadarChart>
          </div>
          : null}
      </>
    )
  }
}