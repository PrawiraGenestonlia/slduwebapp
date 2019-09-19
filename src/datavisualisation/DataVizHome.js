/* eslint-disable react/jsx-pascal-case */
//  DataVizHome.js
//  Created by Prawira Genestonlia on 23/04/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import { Divider } from 'antd';
//
import E1_AttendanceSummary from './components/E1_AttendanceSummary.js';
import E2_EngagementSummary from './components/E2_EngagementSummary.js';
import E3_EventTimeline from './components/E3_EventTimeline.js';
import E4_EventCrossYear from './components/E4_EventCrossYear.js';
import E7_EventTable from './components/E7_EventTable.js';
//
import D1_MasterDropdown from './components/D1_MasterDropdown.js';
import D2_EventDropdown from './components/D2_EventDropdown.js';
import D3_Calendar from './components/D3_Calendar.js';
import D4_Upload from './components/D4_Upload.js';
//
import N1_SocialNetwork from './components/N1_SocialNetwork.js';
//
import P9_SkillSetRadarChart from './components/P9_SkillSetRadarChart.js';
//
import {
  E1_AttendanceSummary_Data,
  E2_EngagementSummary_Data,
  E3_EventTimeline_Data,
  E4_EventCrossYear_Data,
  E7_EventTable_Data,
  D1_MasterDropdown_Data,
  D2_EventDropdown_Data,
  P9_SkillSetRadarChart_Data,
  N1_SocialNetwork_Data,
} from './sampleData.js';


const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];
function RandomColourGenerator() {
  var index = Math.floor((Math.random() * DataVizColors.length))
  return DataVizColors[index];
}
export default class DataVizHome extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div style={{ padding: '1%', backgroundColor: 'white' }}>
        <div className='title' style={{ textAlign: 'center' }}>
          <h1>Data Visualisation</h1>
          <h3>Copyright © 2019 Prawira Genestonlia. All rights reserved.</h3>
        </div>
        <Divider type='horizontal' />

        <div style={{ backgroundColor: `${RandomColourGenerator()}` }}>
          <center><h1>E SERIES</h1></center>
        </div>

        <Divider type='horizontal' />

        <div className='E1_AttendanceSummary'>
          <h4>E1_AttendanceSummary</h4>
          <E1_AttendanceSummary data={E1_AttendanceSummary_Data} shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

        <div className='E2_EngagementSummary'>
          <h4>E2_EngagementSummary</h4>
          <E2_EngagementSummary data={E2_EngagementSummary_Data} shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

        <div className='E3_EventTimeline'>
          <h4>E3_EventTimeline</h4>
          <E3_EventTimeline data={E3_EventTimeline_Data} shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

        <div className='E4_EventCrossYear'>
          <h4>E4_EventCrossYear</h4>
          <E4_EventCrossYear data={E4_EventCrossYear_Data} shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

        <div className='E7_EventTableCrossYear'>
          <h4>E7_EventTable</h4>
          <E7_EventTable data={E7_EventTable_Data} shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

        <div style={{ backgroundColor: `${RandomColourGenerator()}` }}>
          <center><h1>D SERIES</h1></center>
        </div>
        <Divider type='horizontal' />

        <div className='D1_MasterDropdown'>
          <h4>D1_MasterDropdown</h4>
          <D1_MasterDropdown data={D1_MasterDropdown_Data} shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

        <div className='D2_EventDropdown'>
          <h4>D2_EventDropdown</h4>
          <D2_EventDropdown data={D2_EventDropdown_Data} shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

        <div className='D3_Calendar'>
          <h4>D3_Calendar</h4>
          <D3_Calendar shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

        <div className='D4_Upload'>
          <h4>D4_Upload</h4>
          <D4_Upload apiLink={'https://server.thexdream.net/slduAPI/api/uploadeventfile'} shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

        <div style={{ backgroundColor: `${RandomColourGenerator()}` }}>
          <center><h1>P SERIES</h1></center>
        </div>
        <Divider type='horizontal' />

        <div className='P9_SkillSetRadarChart'>
          <h4>P9_SkillSetRadarChart</h4>
          <P9_SkillSetRadarChart data={P9_SkillSetRadarChart_Data} shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

        <div style={{ backgroundColor: `${RandomColourGenerator()}` }}>
          <center><h1>N SERIES</h1></center>
        </div>
        <Divider type='horizontal' />

        <div className='N1_SocialNetwork'>
          <h4>N1_SocialNetwork</h4>
          <N1_SocialNetwork data={N1_SocialNetwork_Data} shouldShow={true} colors={DataVizColors} />
        </div>
        <Divider type='horizontal' />

      </div>
    )
  }
}
