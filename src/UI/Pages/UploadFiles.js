import React, { Component } from 'react';
import PageHeader from '../ContentComponents/PageHeader';
import Sidebar from '../ContentComponents/Sidebar';
import UploadContent from '../ContentComponents/UploadContent';
import {Layout} from 'antd';

export default class UploadFiles extends Component {
  render(){
    return (
      <Layout>
        <PageHeader />
        <Layout>
            <Sidebar keys={['4']}/> 
            <UploadContent />
        </Layout>
        
      </Layout>
    )
}
}