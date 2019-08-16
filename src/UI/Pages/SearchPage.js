import React, { Component } from 'react';
import PageHeader from '../Components/PageHeader';
import Sidebar from '../Components/Sidebar';
import SearchContent from '../Components/SearchContent';
import { Layout } from 'antd';

export default class SearchPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader />
        <Layout>
          <Sidebar keys={['2']} />
          <SearchContent style={{ width: '100%' }} />
        </Layout>

      </Layout>
    )
  }
}