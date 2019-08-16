import React, {Component} from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';

const { Content } = Layout;

export default class HomePageContent extends Component {
    render(){
        return (
            <Layout>
               <Content
                style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
                }}>

              SCHOOL OF ELECTRICAL AND ELECTRONIC ENGINEERING
              <p style={{
                  padding: 50,
              }}>{}</p>
              STUDENT SKILLSET OVERVIEW
              <p>{}</p>
              STUDENT PROFILE
              <p>{}</p>
              Name:                 Matriculation Number:
              <p>{}</p>
              SKILLS DISTRIBUTION
              <p>{}</p>
              The data below represents the various skills which students have been exposed to through the events and projects participated. 
              


              </Content>
            </Layout>
        )
    }
}