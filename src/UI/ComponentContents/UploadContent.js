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

          <div style={{ display: 'flex' }}>
            <div >
              <UploadDuplicate upload_text="Single Event File" apiLink={'https://server.thexdream.net/slduAPI/api/uploadeventfile'} shouldShow={true} colors={DataVizColors} />
            </div>
            <div >
              <UploadDuplicate upload_text="Student Master list" apiLink={'https://server.thexdream.net/slduAPI/api/uploadstudentmasterlist'} shouldShow={true} colors={DataVizColors} />
            </div>
            <div>
              <UploadDuplicate upload_text="Atrribute to Skillset" apiLink={'https://server.thexdream.net/slduAPI/api/uploadattribute2skillset'} shouldShow={true} colors={DataVizColors} />
            </div>
            <div>
              <UploadDuplicate upload_text="Event to Attribute" apiLink={'https://server.thexdream.net/slduAPI/api/uploadevent2attribute'} shouldShow={true} colors={DataVizColors} />
            </div>
          </div>
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