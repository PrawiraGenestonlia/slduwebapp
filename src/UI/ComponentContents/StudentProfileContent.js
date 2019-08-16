import React, {Component} from 'react';
import {Layout, Divider,Descriptions} from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import P9_SkillSetRadarChart from '../../datavisualisation/components/P9_SkillSetRadarChart.js';
import {P9_SkillSetRadarChart_Data} from '../../datavisualisation/sampleData';

const { Content } = Layout;
const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

export default class StudentProfileContent extends Component {
    render(){
        return (
<>

              SCHOOL OF ELECTRICAL AND ELECTRONIC ENGINEERING
              <Divider>Student Skillset Overview</Divider>
              <p>{}</p>
              <Descriptions title="Student Profile">
                  <Descriptions.Item label="Student Name">Zhou Maomao</Descriptions.Item>
                  <Descriptions.Item label="Matriculation Number">1810000000</Descriptions.Item>
              </Descriptions>
              <Divider>Skillset Distribution</Divider>
              <p>The data below represents the various skills which students have been exposed to through the events and projects participated.</p>
              <P9_SkillSetRadarChart data={this.props.skillset_data} shouldShow={true} colors={DataVizColors} />
              <p>{}</p>
              <Divider orientation="left">Events Participated</Divider>
              
              <p>{}</p>
              The table displays the events that the students have participated. 

            </>
        )
    }
}