import React, { Component } from 'react';
import PageHeader from '../Components/PageHeader';
import Sidebar from '../Components/Sidebar';
import UploadContent from '../ComponentContents/UploadContent';
import { Layout } from 'antd';

export default class UploadFiles extends Component {
  render() {
    return (
      <Layout>
        <PageHeader />
        <Layout>
          <Sidebar keys={['5']} />
          <UploadContent style={{ width: '100%' }} />
        </Layout>

      </Layout>
    )
  }
}