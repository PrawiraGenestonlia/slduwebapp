//  D1_MasterDropdown.js
//  Created by Prawira Genestonlia on 06/05/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message, } from 'antd';

export default class D2_EventDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      shouldShow: this.props.shouldShow,
      colors: this.props.colors,
      value: "Master List",
    };
  }
  handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
    for (let i = 0; i < this.state.data.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (e.key == i) {
        this.setState({ value: this.state.data[i].name });
        break;
      }

    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ data: nextProps.data });
    }
  }
  render() {
    const menu = (
      <Menu onClick={e => { this.handleMenuClick(e) }}>
        {
          this.state.data.map((data, index) => {
            return (
              <Menu.Item key={index}><Icon type="file" />
                {data.name}
              </Menu.Item>
            )
          })
        }
      </Menu>
    );
    return (
      <div>
        {this.state.shouldShow ?
          <div style={{}}>
            <Dropdown overlay={menu}>
              <Button>
                {this.state.value} <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
          : null}
      </div>
    )
  }
}