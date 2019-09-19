import React, { Component } from 'react';
import { Layout, Divider, Descriptions, Button, Icon } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import '../../index.css';
import P9_SkillSetRadarChart from '../../datavisualisation/components/P9_SkillSetRadarChart.js';
import DynamicTable from '../../datavisualisation/components/dynamicTable';
import { P9_SkillSetRadarChart_Data } from '../../datavisualisation/sampleData';
import Logo from '../../UI/Images/Logo.png';

const { Content } = Layout;
const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

const fakeData = {
    studentname: "elaine",
    matricnumber: "U1620333L",
    studenteventlist: {
        "dynamic": "y",
        "columns": [
            "EVENTNAME", "SKILLSET", "EVENTPOSITION", "EVENTSTARTDATE", "EVENTENDDATE"
        ],
        "data": [
            { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "Student A", "MATRICNUMBER": "U1512370A", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "SKILLSET": "PERSONAL DEVELOPMENT", "EVENTPOSITION": "President", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
            { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "Troller", "MATRICNUMBER": "U1512371B", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "SKILLSET": "COMMUNICATION", "EVENTPOSITION": "Vice President Programme", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
            { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "SKILLSET": "INNOVATION", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
            { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "SKILLSET": "COMMUNICATION", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
            { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "SKILLSET": "COMMUNICATION", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
            { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "SKILLSET": "COMMUNICATION", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
            { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "SKILLSET": "COMMUNICATION", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },

            { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT83", "MATRICNUMBER": "U1512373D", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "SKILLETSET": "TECHNICAL", "EVENTPOSITION": "Vice President Technical", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
            {
                "TIMESTAMP": "00/00/00  0:00:00",
                "FULLNAME": "STUDENT84",
                "MATRICNUMBER": "U1512374E",
                "NTUEMAILADDRESS": "",
                "EVENTNAME": "EEE TOP 2017 ENITIO",
                "SKILLSET": "PERSONAL DEVELOPMENT",
                "EVENTPOSITION": "Vice President Games",
                "EVENTSTARTDATE": "2017-08-08",
                "EVENTENDDATE": "2017-08-12"
            },
        ]
    },
    radarchartdata: [
        { skillset: 'Personal Development', IndividualScore: 90, max: 100 },
        { skillset: 'Professional Development', IndividualScore: 80, max: 100 },
        { skillset: 'Technical', IndividualScore: 65, max: 100 },
        { skillset: 'Communication', IndividualScore: 77, max: 100 },
        { skillset: 'Innovation', IndividualScore: 85, max: 100 },
    ]
}

export default class StudentProfileContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPrintButton: window.location.pathname == '/StudentProfile' ? true : false,
            isPrinting: false,
            //StudentProfileResponse: this.props.StudentProfileResponse
            StudentProfileResponse: fakeData
        }
    }
    componentDidUpdate() {

    }
    componentWillReceiveProps(nextProps) {
        if (this.props.StudentProfileResponse !== nextProps.StudentProfileResponse)
            this.setState({ StudentProfileResponse: nextProps.StudentProfileResponse })
    }
    printingService = () => {
        if (this.state.isPrinting) {
            setTimeout(() => { window.print() }, 200);
            this.setState({ isPrinting: false });
        }
    }
    render() {
        return (
            <>
                <div id="StudentProfilePage">
                    {
                        this.state.showPrintButton ?
                            <Button type="primary" style={{ margin: '1%' }} onClick={() => { this.setState({ showPrintButton: false, isPrinting: true }) }}>
                                <Icon align="right" type="printer" />Click here to print
                            </Button> : null
                    }
                    <img style={{ maxWidth: '400px' }} src={Logo} align="left"></img>
                    {this.printingService()}
                    <>
                        {/* Break between header and paragraph */}
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </>
                    <p>{}</p>
                    <Descriptions title="SKILLSET DEVELOPMENT OVERVIEW">
                        <Descriptions.Item label="Student Name">{this.state.StudentProfileResponse.studentname}</Descriptions.Item>
                        <Descriptions.Item>{}</Descriptions.Item>
                        <Descriptions.Item label="Matriculation Number">{this.state.StudentProfileResponse.matricnumber}</Descriptions.Item>
                    </Descriptions>
                    <header><b>Skillset Distribution</b></header>
                    <line />
                    <p>The data below shows the skills distribution based on your participation in workshops and events.</p>
                    <div style={{ fontSize: '1em' }}>
                        <P9_SkillSetRadarChart data={this.state.StudentProfileResponse.radarchartdata} shouldShow={true} colors={DataVizColors} />
                        <p>{}</p>
                        <header><b>Events Participated</b></header>
                        <line />
                        The table displays the events that you have participated.
                    <p>{}</p>
                        {/* <DynamicTable data={this.state.StudentProfileResponse.studenteventlist} /> */}
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
                    <p>{}</p>
                </div>
            </>

        )
    }
}
