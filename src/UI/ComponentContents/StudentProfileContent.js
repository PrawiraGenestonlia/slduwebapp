import React, { Component } from 'react';
import { Layout, Divider, Descriptions } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import '../../index.css';
import P9_SkillSetRadarChart from '../../datavisualisation/components/P9_SkillSetRadarChart.js';
import DynamicTable from '../../datavisualisation/components/dynamicTable';
import { P9_SkillSetRadarChart_Data } from '../../datavisualisation/sampleData';

const { Content } = Layout;
const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

const fakeData = {
  studentname: "elaine",
  matricnumber: "U1620333L",
  studenteventlist: {
    "dynamic": "y",
    "columns": [
      "EVENTNAME", "EVENTPOSITION", "EVENTSTARTDATE", "EVENTENDDATE"
    ],
    "data": [
      { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "Student A", "MATRICNUMBER": "U1512370A", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "President", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
      { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "Troller", "MATRICNUMBER": "U1512371B", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Programme", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
      { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
      { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
      { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
      { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
      { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },

      { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT83", "MATRICNUMBER": "U1512373D", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Technical", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
      {
        "TIMESTAMP": "00/00/00  0:00:00",
        "FULLNAME": "STUDENT84",
        "MATRICNUMBER": "U1512374E",
        "NTUEMAILADDRESS": "",
        "EVENTNAME": "EEE TOP 2017 ENITIO",
        "EVENTPOSITION": "Vice President Games",
        "EVENTSTARTDATE": "2017-08-08",
        "EVENTENDDATE": "2017-08-12"
      },
    ]
  },
  radarchartdata: [
    { skillset: 'Personal Development', IndividualScore: 120, max: 150 },
    { skillset: 'Professional Development', IndividualScore: 98, max: 150 },
    { skillset: 'Technical', IndividualScore: 86, max: 150 },
    { skillset: 'Communication', IndividualScore: 99, max: 150 },
    { skillset: 'Innovation', IndividualScore: 85, max: 150 },
  ]
}

export default class StudentProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //StudentProfileResponse: this.props.StudentProfileResponse
      StudentProfileResponse: fakeData
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.StudentProfileResponse !== nextProps.StudentProfileResponse)
      this.setState({ StudentProfileResponse: nextProps.StudentProfileResponse })
  }
  render() {
    return (
      <>
        SCHOOL OF ELECTRICAL AND ELECTRONIC ENGINEERING
              <Divider>Student Skillset Overview</Divider>
        <p>{}</p>
        <Descriptions title="Student Profile">
          <Descriptions.Item label="Student Name">{this.state.StudentProfileResponse.studentname}</Descriptions.Item>
          <Descriptions.Item label="Matriculation Number">{this.state.StudentProfileResponse.matricnumber}</Descriptions.Item>
        </Descriptions>
        <Divider>Skillset Distribution</Divider>
        <p>The data below represents the various skills which students have been exposed to through the events and projects participated.</p>
        <p>{}</p>
        <div style={{ fontSize: '1em' }}>
          <P9_SkillSetRadarChart data={this.state.StudentProfileResponse.radarchartdata} shouldShow={true} colors={DataVizColors} />
          <p>{}</p>
          <Divider>Events Participated</Divider>
          The table displays the events that the students have participated.
                    <p>{}</p>
          {/* <DynamicTable data={this.state.StudentProfileResponse.studenteventlist} /> */}
          <div>
            <table id="StudentProfileTable" border="1" align="left">
              <tr id="StudentProfileTableTr">{this.state.StudentProfileResponse.studenteventlist.columns.map(column => <th id="StudentProfileTableTh">{column}</th>)}</tr>
              {this.state.StudentProfileResponse.studenteventlist.data.map((data) => {
                return (
                  <tr id="StudentProfileTable">
                    {this.state.StudentProfileResponse.studenteventlist.columns.map(column => <td id="StudentProfileTableTd">{data[column]}</td>)}
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
        <p>{}</p>
      </>
    )
  }

  //   render() {
  //     return (
  //       <>

  //         SCHOOL OF ELECTRICAL AND ELECTRONIC ENGINEERING
  //               <Divider>Student Skillset Overview</Divider>
  //         <p>{}</p>
  //         <Descriptions title="Student Profile">
  //           <Descriptions.Item label="Student Name">Zhou Maomao</Descriptions.Item>
  //           <Descriptions.Item label="Matriculation Number">1810000000</Descriptions.Item>
  //         </Descriptions>
  //         <Divider>Skillset Distribution</Divider>
  //         <p>The data below represents the various skills which students have been exposed to through the events and projects participated.</p>
  //         <P9_SkillSetRadarChart data={P9_SkillSetRadarChart_Data} shouldShow={true} colors={DataVizColors} />
  //         <p>{}</p>
  //         <Divider orientation="left">Events Participated</Divider>

  //         <p>{}</p>
  //         The table displays the events that the students have participated.

  //             </>
  //     )
  //   }
}
