import React, {Component} from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import ViewFileContents from '../ComponentContents/ViewFileContents'

const { Content } = Layout;

export default class ViewContent extends Component {
    render(){
        return (
          <Layout>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#ffffff', minHeight: 280,}}>
            <ViewFileContents />
            </Content>
          </Layout>
        )
    }
}