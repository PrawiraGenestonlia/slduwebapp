import React, { Component } from 'react';
import axios from 'axios';
import { Select } from 'antd';
import E7_EventTable from '../../datavisualisation/components/E7_EventTable'
import { Input } from 'antd';
import D1_MasterDropdown from '../../datavisualisation/components/D1_MasterDropdown'
import SearchFunction from '../Widgets/SearchFunction';

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

  Search = value => {
    console.log(value);
    axios.get(`https://server.thexdream.net/slduAPI/api/students/?matricnumber=${value}`)
      .then(response =>
        this.setState({ event: response.data }))
      .catch(error => console.log(error));
  }

  SearchName = value => {
    console.log(value);
    axios.get(`https://server.thexdream.net/slduAPI/api/students/?studentname=${value}`)
      .then(response =>
        this.setState({ event: response.data }))
      .catch(error => console.log(error));
  }

  handleChange = value => {
    console.log(value);

    axios.get(`https://server.thexdream.net/slduAPI/api/events/?eventname=${value}`)
      .then(response => {

        this.setState({ event: response.data });
        console.log(response.data);

      })
      .catch(error => console.log(error));
  };


  componentDidMount() {
    /*axios.get('https://server.thexdream.net/slduAPI/api/events')
      .then(response =>
        this.setState({ Events: response.data })
      )
      .catch(error => console.log(error)); */
  }

  render() {

    let eventoptions = this.state.Events.map(events =>
      ({ label: events.TABLE_NAME, value: events.TABLE_NAME })
    );

    return (

      <div className="viewevents">
        <div ClassName="container">
          <SearchFunction />
        </div>
      </div>
    )
  }
}
