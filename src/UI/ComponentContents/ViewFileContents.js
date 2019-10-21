import React, { Component } from 'react';
import axios from 'axios';
import { Select, Button } from 'antd';
import E7_EventTable from '../../datavisualisation/components/E7_EventTable';
import { Input, Layout, Row, Col } from 'antd';
import DynamicTable from '../../datavisualisation/components/dynamicTable';
import { timeout } from 'q';

const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];
const Option = Select.Option;

const Search = Input.Search;

export default class ViewEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Files: [],
      selected_files: '',
      DynamicFile: {
        dynamic: [],
        columns: '',
        data: []
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.sortSN = this.sortSN.bind(this);
  }

  handleChange = value => {
    console.log(value);
    this.setState({ selected_files: value });
    axios.get(`http://${window.location.hostname}:8002/api/uploadedfiles/?filename=${value}`)
      .then((response) => {
        this.setState({
          DynamicFile: {
            dynamic: "y",
            columns: response.data.columns,
            data: response.data.data
          }
        });
        console.log(response.data);
      })
      .catch(error => console.log(error));
    setTimeout(() => { console.log(this.state.DynamicFile) }, 100);
  }

  sortSN = value => {
    console.log(value);
    axios.get(`http://${window.location.hostname}:8002/api/events/?eventname=${value}&sortstudentname=1`)
      .then((response) => {
        this.setState({
          DynamicFile: {
            dynamic: "y",
            columns: response.data.columns,
            data: response.data.data
          }
        });
        console.log(response.data);
      })
      .catch(error => console.log(error));
    setTimeout(() => { console.log(this.state.DynamicFile) }, 100);
  }

  sortMN = value => {
    console.log(value);
    axios.get(`http://${window.location.hostname}:8002/api/events/?eventname=${value}&sortmatricnumber=1`)
      .then((response) => {
        this.setState({
          DynamicFile: {
            dynamic: "y",
            columns: response.data.columns,
            data: response.data.data
          }
        });
        console.log(response.data);
      })
      .catch(error => console.log(error));
    setTimeout(() => { console.log(this.state.DynamicFile) }, 100);
  }

  componentDidMount() {
    axios.get(`http://${window.location.hostname}:8002/api/uploadedfiles`)
      .then(response => {
        this.setState({ Files: response.data });
        console.log(response.data)
      }
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
            style={{ width: 300 }}
            placeholder="Select a File"
            optionFilterProp="children"
            onChange={this.handleChange}>
            {SelectFile.map(opt => {
              return (<Option value={opt.value}>{opt.label}</Option>
              )
            })}
          </Select>
          {/* <p>{}</p>
          {
            this.state.selected_files ?
              <>
                <Button onClick={() => { this.sortSN(this.state.selected_files) }}>Sort Student Name</Button>
                <Button onClick={() => { this.sortMN(this.state.selected_files) }}>Sort Matriculation Number</Button>
              </>
              :
              <>
                <Button disabled onClick={() => { this.sortSN(this.state.selected_files) }}>Sort Student Name</Button>
                <Button disabled>Sort Matriculation Number</Button>
              </>
          }
          <p>{}</p> */}
          <p>{}</p>
          <p>{}</p>
          <DynamicTable data={this.state.DynamicFile} />
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

          <E7_EventTable data={this.state.event} shouldShow={true} colors={DataVizColors} />

          */