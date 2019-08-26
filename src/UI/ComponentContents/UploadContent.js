import React, { Component } from 'react';
import { Layout, List } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import UploadDuplicate from '../../UI/Widgets/UploadDuplicate';
import axios from 'axios';
import ViewUploadedFiles from './ViewUploadedFiles';

const { Content } = Layout;

const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

export default class UploadContent extends Component {

    render() {
        return (
            <Layout>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, }}>
                    <p>Upload Event File</p>
                    <UploadDuplicate apiLink={'http://localhost:8080/api/uploadeventfile'} shouldShow={true} colors={DataVizColors} />
                    <p>{}</p>
                    <p>Upload Student Master list</p>
                    <UploadDuplicate apiLink={'http://localhost:8080/api/uploadstudentmasterlist'} shouldShow={true} colors={DataVizColors} />
                    <p>{}</p>
                    <p>Upload Skillset Master ist</p>
                    <UploadDuplicate apiLink={'/api/uploadattribute2skillset'} shouldShow={true} colors={DataVizColors} />
                    <p>{}</p>
                    <p>Upload Event List</p>
                    <UploadDuplicate apiLink={'/api/uploadevent2attribute'} shouldShow={true} colors={DataVizColors} />
                </Content>
                <ViewUploadedFiles />
            </Layout>
        );
    }
}

/* <

 <List
              header={<div>Uploaded Files</div>}
              bordered
              dataSource={this.state.Files.map(data => ({title: data.Tables_in_mydb}))}
              renderItem={item => <List.Item>{item.title}</List.Item>}
              />
*/