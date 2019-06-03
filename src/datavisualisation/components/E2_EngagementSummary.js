//  E2_EngagementSummary.js
//  Created by Prawira Genestonlia on 23/04/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import CountUp from 'react-countup';

export default class E2_EngagementSummary extends Component {
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '500px', textAlign: 'center' }}>
            <div>
              <h2>Events</h2>
              <CountUp
                start={0}
                end={this.state.data.NumEvent}
                duration={4}
                separator=" "
                decimals={0}
                decimal="."
                prefix=""
                suffix=""
                onEnd={() => { }}
                onStart={() => { }}
                style={{ fontSize: 70, color: `${this.state.colors[0]}` }} />
            </div>
            <div>
              <h2>Participation Rate</h2>
              <CountUp
                start={0}
                end={(this.state.data.TotalParticipants / this.state.data.TotalActiveStudent) * 100}
                duration={4}
                separator=" "
                decimals={1}
                decimal="."
                prefix=""
                suffix="%"
                onEnd={() => { }}
                onStart={() => { }}
                style={{ fontSize: 70, color: `${this.state.colors[2]}` }} />
            </div>
          </div>
          : null}
      </div>
    )
  }
}

