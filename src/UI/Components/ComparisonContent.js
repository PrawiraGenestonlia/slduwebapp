import React, { Component } from 'react';
import { Button, Select, Layout, List, Divider } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import axios from 'axios';
import { resolve } from 'url';


const { Content } = Layout;
const Option = Select.Option;
const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

export default class ComparisonContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Events: [],
      DynamicFileOne: [],
      DynamicFileTwo: [],
      Absentees: "",
      SelectedEvent1: [],
      SelectedEvent2: []
    };
  }

  Event1 = value => {
    console.log(value);
    this.setState({ SelectedEvent1: value });
    axios.get(`http://localhost:8080/api/uploadedfiles/?filename=${value}`)
      .then((response) => {
        this.setState({
          DynamicFileOne: response.data
        });
        console.log(response.data);
      })
      .catch(error => console.log(error));
    setTimeout(() => { console.log(this.state.DynamicFile) }, 100);
  }

  Event2 = value => {
    console.log(value);
    this.setState({ SelectedEvent2: value });
    axios.get(`http://localhost:8080/api/uploadedfiles/?filename=${value}`)
      .then((response) => {
        this.setState({
          DynamicFileTwo: response.data
        });
        console.log(this.state.DynamicFileTwo);
      })
      .catch(error => console.log(error));
    setTimeout(() => { console.log(this.state.DynamicFile) }, 100);
  }

  FindAbsentee = (event1, event2) => {
    // console.log(event1);
    // console.log(event2);
    axios.get(`http://localhost:8080/api/compare_absentees2events?event1=${event1}&event2=${event2}`)
      .then(response => {
        this.setState({
          Absentees: response.data
        });
        console.log(response.data)
      })
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/events")
      .then(response => {
        this.setState({ Events: response.data });
        console.log(response.data)
      })
      .catch(error => console.log(error));
  }

  render() {

    let SelectFile = this.state.Events.map(files =>
      ({ label: files.TABLE_NAME, value: files.TABLE_NAME })
    );
    return (
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, }}>
          <p>Compare between 2 files</p>
          <p>Select Event 1</p>
          <Select showSearch
            style={{ width: 300 }}
            placeholder="Select a File"
            optionFilterProp="children"
            onChange={this.Event1}>
            {SelectFile.map(opt => {
              return (<Option value={opt.value} disabled={opt.value === this.state.SelectedEvent2 ? true : false}>{opt.label}</Option>
              )
            })}
          </Select>
          <p>{}</p>
          <p>Select Event 2</p>

          <Select showSearch
            style={{ width: 300 }}
            placeholder="Select a File"
            optionFilterProp="children"
            onChange={this.Event2}>
            {SelectFile.map(opt => {
              return (<Option value={opt.value} disabled={opt.value === this.state.SelectedEvent1 ? true : false} >{opt.label}</Option>
              )
            })}
          </Select>
          <p>{}</p>
          <Button onClick={() => { this.FindAbsentee(this.state.SelectedEvent1, this.state.SelectedEvent2) }}>Submit</Button>
          {/*  */}
          <div>
            {
              this.state.Absentees.absent2events ?
                <>
                  <Divider type='horizontal' />
                  {this.state.Absentees.absent2events.length ? <><Divider type='horizontal' /> <p>list of participants that absent from both events</p> </> : null}
                  {this.state.Absentees.absent2events.map(data => <ol>{data}</ol>)}
                </>
                : null
            }
          </div>
          <div>
            {
              this.state.Absentees.absentevent1 ?
                <>
                  <Divider type='horizontal' />
                  <p>Absenteees for <font style={{ color: 'red' }}>{this.state.SelectedEvent1}</font></p>
                  <p>numberofabsentees: {this.state.Absentees.absentevent1.numberofabsentees}</p>
                  <table id="StudentProfileTable" border="1" align="left">
                    <tr id="StudentProfileTableTr">
                      <th>STUDENT NAME</th>
                      <th>MATRIC NO</th>
                    </tr>
                    {this.state.Absentees.absentevent1.event1_absentees.map((data) => {
                      return (
                        <tr id="StudentProfileTable">
                          <td>{data.studentname}</td>
                          <td>{data.matricnumber}</td>
                        </tr>
                      )
                    })}
                  </table>
                </>
                :
                <></>
            }
          </div>
          <div>
            {
              this.state.Absentees.absentevent2 ?
                <>
                  <Divider type='horizontal' />
                  <p>Absenteees for <font style={{ color: 'red' }}>{this.state.SelectedEvent2}</font></p>
                  <p>numberofabsentees: {this.state.Absentees.absentevent2.numberofabsentees}</p>
                  <table id="StudentProfileTable" border="1" align="left">
                    <tr id="StudentProfileTableTr">
                      <th>STUDENT NAME</th>
                      <th>MATRIC NO</th>
                    </tr>
                    {this.state.Absentees.absentevent2.event2_absentees.map((data) => {
                      return (
                        <tr id="StudentProfileTable">
                          <td>{data.studentname}</td>
                          <td>{data.matricnumber}</td>
                        </tr>
                      )
                    })}
                  </table>

                </>
                :
                <></>
            }
          </div>
          <div>
            {
              this.state.Absentees.attendbothevents ?
                <>
                  <Divider type='horizontal' />
                  <p>Students that attended both events</p>
                  <p>number: {this.state.Absentees.attendbothevents.number}</p>
                  <p>numberofabsentees: {this.state.Absentees.attendbothevents.numberofabsentees}</p>
                  {this.state.Absentees.attendbothevents.attendboth.map(data => <ol>{data}</ol>)}
                </> : null
            }
          </div>

        </Content>

      </Layout>
    );
  }
}

