import React, { Component } from 'react';
import PageHeader from '../ContentComponents/PageHeader';
import Sidebar from '../ContentComponents/Sidebar';
import ViewContent from '../ContentComponents/ViewContent';
import {Layout} from 'antd';

export default class ViewFiles extends Component {
  render(){
    return (
      <Layout>
        <PageHeader />
        <Layout>
            <Sidebar keys={['3']}/> 
            <ViewContent />
        </Layout>
        
      </Layout>
    )
}
}