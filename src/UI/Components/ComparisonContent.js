import React, { Component } from 'react';
import { Button, Select, Layout, List, Divider } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import axios from 'axios';
import { resolve } from 'url';
import { thisExpression } from '@babel/types';
import Student from '../Student';
import DynamicTable from '../../datavisualisation/components/dynamicTable';


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
      SelectedEvent2: [],
      selected_num: 0,
      selected_event_to_be_compared: [],
      selected_num_arr: [],
      compared_results_common_participants: {},
      compared_results_common_absentees: {},
      isCommonPart: 1,
      commonPart: {
        dynamic: [],
        columns: [],
        data: []
      },
      commonAbs: {
        dynamic: [],
        columns: [],
        data: []
      },
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

  handleNumOfEvents = (num) => {
    console.log(num);
    let temp_arr = [];
    for (let i = 0; i < num; i++) {
      temp_arr.push(i);
    }
    this.setState({ selected_num: num });
    // this.setState({ selected_num_arr: temp_arr });
    this.setState({
      selected_num_arr: temp_arr
    })
    let emptyArr = [];
    this.setState({
      selected_event_to_be_compared: [...emptyArr]
    })
    console.log(this.state.selected_num_arr);
  }

  handleSelectEvents = (event, index) => {
    let curr_selected = this.state.selected_event_to_be_compared;
    curr_selected[index] = event;
    // console.log(event, index);
    this.setState({ selected_event_to_be_compared: [...curr_selected] });
  }

  handleCompareCommonParticipants = (events_arr) => {
    this.setState({ isCommonPart: 1 });
    axios.post("http://localhost:8080/api/commonparticipants", { Events: events_arr })
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          // this.setState({ compared_results_common_participants: { ...response.data } });
          this.setState({
            commonPart: {
              dynamic: "y",
              columns: [...Object.keys(response.data.commonparticipants[0])],
              data: [...response.data.commonparticipants]
            }
          }, () => { console.log(this.state.commonAbs) });
        }

      })
      .catch(error => console.log(error));
  }

  handleCompareCommonAbsentees = (events_arr) => {
    this.setState({ isCommonPart: 0 });
    axios.post("http://localhost:8080/api/commonabsentees", { Events: events_arr })
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          // this.setState({ compared_results_common_absentees: { ...response.data } });
          this.setState({
            commonAbs: {
              dynamic: "y",
              columns: [...Object.keys(response.data.common_absentees[0])],
              data: [...response.data.common_absentees]
            }
          }, () => { console.log(this.state.commonAbs) });
        }
      })
      .catch(error => console.log(error));
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
    console.log(this.state.selected_event_to_be_compared);
    let SelectFile = this.state.Events.map(files =>
      ({ label: files.FILENAME, value: files.FILENAME })
    );
    let NumberOfEvents = [];
    this.state.Events && this.state.Events.forEach((v, i) => { NumberOfEvents.push(i + 1) });

    return (
      <Layout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, }}>
          <p>Compare between events</p>
          <p>Number of Events: &nbsp;
          <Select showSearch
              style={{ width: 100 }}
              placeholder="number"
              optionFilterProp="children"
              onChange={(e) => this.handleNumOfEvents(e)}>
              {NumberOfEvents.map(opt => {
                return (<Option value={opt} >{opt}</Option>
                )
              })}
            </Select>
          </p>
          <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {
              this.state.selected_num_arr.map((arr, index) => {
                return <Select showSearch
                  // value={this.state.selected_event_to_be_compared(index)}
                  style={{ width: 250, margin: '5px' }}
                  placeholder="Select a File"
                  optionFilterProp="children"
                  value={this.state.selected_event_to_be_compared[index]}
                  onChange={e => this.handleSelectEvents(e, index)}>
                  {SelectFile.map(opt => {
                    return (<Option value={opt.value} disabled={this.state.selected_event_to_be_compared.includes(opt.value)} >{opt.label}</Option>
                    )
                  })}
                </Select>
              })
            }
          </div>
          <div style={{ marginTop: '5px', display: 'flex' }}>
            <div>
              {
                this.state.selected_event_to_be_compared.length > 1 ?
                  <Button type="primary" onClick={() => { this.handleCompareCommonParticipants(this.state.selected_event_to_be_compared) }}>Compare Common Participants</Button>
                  :
                  <Button type="primary" disabled onClick={() => { this.handleCompareCommonParticipants(this.state.selected_event_to_be_compared) }}>Compare Common Participants</Button>
              }
            </div>
            <div style={{ marginLeft: '5px' }}>
              {
                this.state.selected_event_to_be_compared.length > 1 ?
                  <Button type="primary" onClick={() => { this.handleCompareCommonAbsentees(this.state.selected_event_to_be_compared) }}>Compare Common Absentees</Button>
                  :
                  <Button type="primary" disabled onClick={() => { this.handleCompareCommonAbsentees(this.state.selected_event_to_be_compared) }}>Compare Common Absentees</Button>
              }
            </div>
          </div>

          <div>
            {
              Object.keys(this.state.commonPart).length && this.state.isCommonPart ?
                <>
                  <Divider type='horizontal' />
                  <p>Participated in the above events</p>
                  <DynamicTable data={this.state.commonPart} />
                  {/* <table id="StudentProfileTable" border="1" align="left">
                    <tr id="StudentProfileTableTr">
                      <th>STUDENT NAME</th>
                      <th>MATRIC NO</th>
                    </tr>
                    {this.state.compared_results_common_participants.commonparticipants.map((data) => {
                      return (
                        <tr id="StudentProfileTable">
                          <td>{data.STUDENTNAME}</td>
                          <td><Student matricnumber={data.MATRICNUMBER} /></td>
                        </tr>
                      )
                    })}
                  </table> */}
                </>
                :
                <></>
            }
          </div>

          <div>
            {
              Object.keys(this.state.commonAbs).length && !this.state.isCommonPart ?
                <>
                  <Divider type='horizontal' />
                  <p>Absent from the above events</p>
                  <DynamicTable data={this.state.commonAbs} />
                  {/* <table id="StudentProfileTable" border="1" align="left">
                    <tr id="StudentProfileTableTr">
                      <th>STUDENT NAME</th>
                      <th>MATRIC NO</th>
                    </tr>
                    {this.state.compared_results_common_absentees.common_absentees.map((data) => {
                      return (
                        <tr id="StudentProfileTable">
                          <td>{data.STUDENTNAME}</td>
                          <td><Student matricnumber={data.MATRICNUMBER} /></td>
                        </tr>
                      )
                    })}
                  </table> */}
                </>
                :
                <></>
            }
          </div>
        </Content>

      </Layout>
    );
  }
}

