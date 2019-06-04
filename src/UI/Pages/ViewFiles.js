import React, { Component } from 'react';
import PageHeader from '../Components/PageHeader';
import Sidebar from '../Components/Sidebar';
import ViewContent from '../Components/ViewContent';
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