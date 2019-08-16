import React, { Component } from 'react';
import PageHeader from '../Components/PageHeader.js';
import Sidebar from '../Components/Sidebar';
import HomePageContent from '../ComponentContents/HomePageContent';
import { Layout } from 'antd';

export default class HomePage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader />
        <Layout>
          <Sidebar keys={['1']} />
          <HomePageContent style={{ width: '100%' }} />
        </Layout>

      </Layout>
    )
  }
}

//<h1>This is the homepage</h1>
        //<p>Enjoy learning about this!</p>
        //<p>Let me know if you need anything / stuck :D</p>
        //<a href='/data'>Click here to go to data page</a>
        //<p><a href='/dataviz'>Click here to go to data viz page</a></p> 