import React, { Component } from 'react';
import { Select, Layout, List } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import Axios from 'axios';


const { Content } = Layout;

const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

export default class ComparisonContent extends Component {

    componenetDidMount(){
     
    }

    render() {
        return (
            <Layout>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, }}>
                    Compare between 2 files
                </Content>

            </Layout>
        );
    }
}