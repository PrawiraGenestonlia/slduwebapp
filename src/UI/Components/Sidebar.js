import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';

const { Sider } = Layout;


export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: this.props.keys,
    };
  }



  render() {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          selectedKeys={this.props.keys}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >

          {/* <Menu.Item key="1">
            <Icon type="user" />
            <span>Student Profile</span>
            <a href="/">Search</a>
          </Menu.Item> */}

          <Menu.Item key="2">
            <Icon type="interaction" />
            <span>Comparison</span>
            <a href="/Comparison">Search</a>
          </Menu.Item>

          <Menu.Item key="3">
            <Icon type="file" />
            <span>Search Function</span>
            <a href="/Search">Search</a>
          </Menu.Item>

          <Menu.Item key="4">
            <Icon type="eye" />
            <span>View Files</span>
            <a href="/ViewFiles">Search</a>
          </Menu.Item>

          <Menu.Item key="5">
            <Icon type="upload" />
            <span>Upload</span>
            <a href="/UploadFiles">Search</a>
          </Menu.Item>


        </Menu>
      </Sider>
    )
  }
}