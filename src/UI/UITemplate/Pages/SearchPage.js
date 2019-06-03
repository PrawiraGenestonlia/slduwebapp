import React, { Component } from 'react';
import PageHeader from '../ContentComponents/PageHeader';
import Sidebar from '../ContentComponents/Sidebar';
import SearchContent from '../ContentComponents/SearchContent';
import {Layout} from 'antd';

export default class SearchPage extends Component {
  render(){
    return (
      <Layout>
        <PageHeader />
        <Layout>
            <Sidebar keys={['2']}/> 
            <SearchContent />
        </Layout>
        
      </Layout>
    )
}
}