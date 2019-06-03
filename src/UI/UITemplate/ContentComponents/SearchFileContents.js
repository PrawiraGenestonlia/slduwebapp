import React, { Component } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import E7_EventTable from '../../DataViz/Components/E7_EventTable'
import { Input } from 'antd';

const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];
const Option = Select.Option;

const Search = Input.Search; 

export default class SearchFileContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Events: [],
      EventTable: [],
      event: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  Search = value =>{
    console.log(value);
    axios.get(`http://localhost:8080/api/students/?matricnumber=${value}`)
      .then(response =>
        this.setState({event: response.data}))
      .catch(error => console.log(error));
  }

  SearchName = value =>{
    console.log(value);
    axios.get(`http://localhost:8080/api/students/?studentname=${value}`)
      .then(response =>
        this.setState({event: response.data}))
      .catch(error => console.log(error));
  }

  handleChange = value => {
    console.log(value);

    axios.get(`http://localhost:8080/api/events/?eventname=${value}`)
      .then(response => {
        
        this.setState({ event: response.data });
        console.log(response.data);

      })
      .catch(error => console.log(error));
  };


  componentDidMount() {
    axios.get('http://localhost:8080/api/events')
      .then(response =>
        this.setState({ Events: response.data })
      )
      .catch(error => console.log(error));
  }

  render() {

    let eventoptions = this.state.Events.map(events =>
      ({ label: events.TABLE_NAME, value: events.TABLE_NAME })
    );

    return (
      <div className="viewevents">
        <div ClassName="container">
          <p>Select File</p>
          <Select showSearch
            style={{ width: 200 }}
            placeholder="Select a File"
            optionFilterProp="children"
            onChange={this.handleChange}>
            {eventoptions.map(opt => {
              return (<Option value={opt.value}>{opt.label}</Option>
              )
            })}
          </Select>
          <p>{}</p>
          <p>Search Matriculation Number from Student Master List</p>
            <Input placeholder="matriculation number" onChange={value=>this.Search(value.target.value)} onPressEnter={value=>this.Search(value.target.value)} allowClear />
            <p>{}</p>
            
          <E7_EventTable data={this.state.event} shouldShow={true} colors={DataVizColors} />
        </div>
      </div>
    )
  }
}
