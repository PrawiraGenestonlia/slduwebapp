import React, { Component } from 'react';
import axios from 'axios';
import { Select, AutoComplete, DatePicker, Divider, Input } from 'antd';
import { throwStatement } from '@babel/types';
import E7_EventTable from '../../datavisualisation/components/E7_EventTable';
import DynamicTable from '../../datavisualisation/components/dynamicTable';
import responsiveObserve from 'antd/lib/_util/responsiveObserve';

/*This is a search function whereby users can select how they want to search. For example, student name/matric number.*/

const { Option } = Select;
const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];
const SearchType = ['EventName', 'MatriculationNumber', 'StudentName'];
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { OptGroup } = AutoComplete;
function onChange(date, dateString) {
  console.log(date, dateString);
};

//Render title
function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );
}

export default class SearchFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      searchfunction: "",
      AutoCompleteValue: '',
      allData: [],
      data: [],
      tableData: {
        dynamic: [],
        columns: [],
        data: []
      },
      filename: [],
    };

    this.handleSearchDataChange = this.handleSearchDataChange.bind(this);

  };

  handleSearchFilename = () => {
    axios.get('https://server.thexdream.net/slduAPI/api/uploadedfiles')
      .then((response) => {
        this.setState({ data: response.data.data });
        console.log(response);
      })
  }

  handleSearchFunctionChange = value => {
    this.setState({
      searchfunction: value,
    });
    this.handleUpdateData();
    this.handlePickData(value);
  };

  handleSearchDataChange = value => {
    //this.setState({AutoCompleteValue:value});
    if (this.state.searchfunction == "EventName") {
      axios.get(`https://server.thexdream.net/slduAPI/api/events/?eventname=${value}`)
        .then((response) => {
          this.setState({
            tableData: {
              dynamic: "y",
              columns: response.data.columns,
              data: response.data.data
            }
          });
        })
        .catch(error => console.log(error));

      setTimeout(() => { console.log(this.state.tableData) }, 100); //state is updated 
    }

    else if (this.state.searchfunction == "MatriculationNumber") {
      axios.get(`https://server.thexdream.net/slduAPI/api/students/?matricnumber=${value}`)
        .then(response =>
          this.setState({
            tableData: {
              dynamic: "y",
              columns: response.data.columns,
              data: response.data.data
            }
          }))
        .catch(error => console.log(error));
    }
    else if (this.state.searchfunction == "StudentName") {
      axios.get(`https://server.thexdream.net/slduAPI/api/students/?studentname=${value}`)
        .then(response =>
          this.setState({
            tableData: {
              dynamic: "y",
              columns: response.data.columns,
              data: response.data.data
            }
          }))
        .catch(error => console.log(error));
    }

    setTimeout(() => { console.log(this.state.tableData) }, 100); // state not update outside of loop

  };

  handleUpdateData = () => {
    let { allData } = this.state;
    axios.get(`https://server.thexdream.net/slduAPI/api/events`)
      .then(response => {
        allData.EventName = response.data
      }

      ).catch(error => console.log(error));

    axios.get(`https://server.thexdream.net/slduAPI/api/students/?matricnumber`)
      .then(response =>
        allData.MatriculationNumber = response.data.data
      ).catch(error => console.log(error));

    axios.get(`https://server.thexdream.net/slduAPI/api/students/?studentname`)
      .then(response =>
        allData.StudentName = response.data.data
      ).catch(error => console.log(error));
    this.setState({ allData: allData });

  }

  handlePickData = (value) => {
    let { allData } = this.state;
    let selectedData = [];
    if (Object.keys(allData).length > 1) {
      switch (value) {
        case "EventName":
          for (let i = 0; i < allData.EventName.length; i++)
            selectedData.push(allData.EventName[i].TABLE_NAME);
          break;
        case "MatriculationNumber":
          for (let i = 0; i < allData.MatriculationNumber.length; i++)
            selectedData.push(allData.MatriculationNumber[i].MATRICNUMBER); //change tablename to the correct value
          break;
        case "StudentName":
          for (let i = 0; i < allData.StudentName.length; i++)
            selectedData.push(allData.StudentName[i].STUDENTNAME); //change tablename to the correct value
          break;
        default:
          break;
      }
      if (!selectedData.length)
        selectedData = [];
      this.setState({ data: selectedData });
      setTimeout(() => {
        console.log("data:", this.state.data);
      }, 50)
    }


  }

  componentDidMount() {
    this.handleUpdateData();
  };


  render() {

    return (
      <div>
        <p>Select a search function</p>
        <Select
          showSearch
          placeholder="Select an option"
          style={{ width: 300 }}
          onChange={this.handleSearchFunctionChange} >
          {SearchType.map(type => (
            <Option key={type}>{type}</Option>
          ))}
        </Select>
        <p>{}</p>
        <p>Search</p>
        {/* If/else case in jsx, if searchfunction has been selected, enable the search box */}
        {
          this.state.data.length ?
            <AutoComplete
              //value= {this.state.AutoCompleteValue}
              style={{ width: 200 }}
              dataSource={this.state.data}
              placeholder="Key In Here"
              filterOption={(inputValue, option) =>
                option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onChange={this.handleSearchDataChange}
            /> :
            <AutoComplete
              // value= {this.state.AutoCompleteValue}
              style={{ width: 200 }}
              dataSource={this.state.data}
              placeholder="Key In Here"
              filterOption={(inputValue, option) =>
                option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onChange={this.handleSearchDataChange} disabled={true}
            />
        }
        <p>{}</p>
        {
          this.state.tableData.data.length ? <DynamicTable data={this.state.tableData} /> : <></>
        }

        <Divider> Dynamic search fucntion</Divider>
        <p>Select Type of File</p>
        <Select
          showSearch
          placeholder="Select Type of File"
          style={{ width: 300 }}
          onChange={this.handleSearchFunctionChange}>
          {SearchType.map(type => (
            <Option key={type}>{type}</Option>
          ))}
        </Select>
      </div>
    );
  }

}

//{this.state.tableData.length ? <DynamicTable data={this.state.tableData} /> : null}

//Date selector: <MonthPicker onChange={onChange} placeholder="Select month" />
/*    <Select
          showSearch
          placeholder="Select a target"
          style={{ width: 300 }}
          onChange={this.handleSearchDataChange} >
          {this.state.data.map(data => (
            <Option key={data}>{data}</Option>
          ))}
        </Select>
*/