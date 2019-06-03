import React, {Component} from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';

const { Content } = Layout;

export default class HomePageContent extends Component {
    render(){
        return (
            <Layout>
               <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            Content
          </Content>
            </Layout>
        )
    }
}