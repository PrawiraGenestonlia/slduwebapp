//  N1_SocialNetwork.js
//  Created by Prawira Genestonlia on 06/05/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import { } from 'antd';
import { Graph } from 'react-d3-graph';



// graph event callbacks
const onClickNode = function (nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function (source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

export default class D4_Upload extends Component {
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
    const myConfig = {
      nodeHighlightBehavior: true,
      "automaticRearrangeAfterDropNode": true,
      "collapsible": true,
      "directed": true,
      "d3": {
        "alphaTarget": 0.05,
        "gravity": -250,
        "linkLength": 120,
        "linkStrength": 2
      },
      node: {
        color: `${this.state.colors[0]}`,
        size: 120,
        highlightStrokeColor: `${this.state.colors[1]}`,
        "highlightFontSize": 8,
        "highlightFontWeight": "normal",
        "labelProperty": "label",
        "mouseCursor": "pointer",
        "opacity": 1,
        "renderLabel": true,
        "semanticStrokeWidth": true,
        "strokeWidth": 3
      },
      link: {
        highlightColor: `${this.state.colors[2]}`
      }
    };
    return (
      <div>
        {this.state.shouldShow ?
          <div>
            <Graph
              id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
              data={this.state.data}
              config={myConfig}
              onClickNode={onClickNode}
              onClickLink={onClickLink} />
          </div>
          : null}
      </div>
    )
  }
}