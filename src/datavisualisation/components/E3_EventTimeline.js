//  E3_EventTimeline.js
//  Created by Prawira Genestonlia on 23/04/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import { Timeline } from 'antd';

export default class E3_EventTimeline extends Component {
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
            <Timeline>
              {this.state.data.map((data, index) => {
                return (
                  <Timeline.Item color={`${this.state.colors[index % this.state.colors.length]}`}>
                    <strong>{data.name}</strong> with {data.Participants} participants on {data.StartDate}
                  </Timeline.Item>
                )
              })}
            </Timeline>
          </div>
          : null}
      </div>
    )
  }
}

