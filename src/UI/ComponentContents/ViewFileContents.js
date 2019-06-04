import React, { Component } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import E7_EventTable from '../../datavisualisation/components/E7_EventTable';
import { Input,Layout,Row,Col } from 'antd';
import DynamicTable from '../../datavisualisation/components/dynamicTable';

const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];
const Option = Select.Option;

const Search = Input.Search; 

export default class ViewEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Files: [],
      EventTable: [],
      event: [],
    };
    this.handleChange = this.handleChange.bind(this);
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
    axios.get('http://localhost:8080/api/uploadedfiles')
      .then(response =>
        this.setState({ Files: response.data })
      )
      .catch(error => console.log(error));
  }

  render() {

    let SelectFile = this.state.Files.map(files =>
      ({ label: files.Tables_in_mydb, value: files.Tables_in_mydb })
    );

    return (
          <div>
            <Row>
            <p>Select File</p>
              <Select showSearch
              style={{ width: 200 }}
              placeholder="Select a File"
              optionFilterProp="children"
              onChange={this.handleChange}>
              {SelectFile.map(opt => {
                return (<Option value={opt.value}>{opt.label}</Option>
                )
              })}
              </Select>
              <p>{}</p>
              <E7_EventTable data={this.state.event} shouldShow={true} colors={DataVizColors} />
              <p>{}</p>
              
            </Row>
          </div>
    )
  }
}

/*<select>
          <option>Select an Event</option>
          {this.state.Events.map(events => <option key={events.TABLE_NAME}>{events.TABLE_NAME}</option>)}
          </select>
          
          
          */