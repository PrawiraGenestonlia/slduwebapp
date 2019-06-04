import React, {Component} from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import D4_Upload from '../../datavisualisation/components/D4_Upload';

const { Content } = Layout;

const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

export default class UploadContent extends Component {
    render(){
        return (
            <Layout>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,}}>
              <p>Upload Event File</p>
              <D4_Upload apiLink={'http://localhost:8080/api/uploadeventfile'} shouldShow={true} colors={DataVizColors} />
              <p>{}</p>
              <p>Upload Masterlist</p>
              <D4_Upload apiLink={'http://localhost:8080/api/uploadstudentmasterlist'} shouldShow={true} colors={DataVizColors} />
              </Content>
            </Layout>
        )
    }
}