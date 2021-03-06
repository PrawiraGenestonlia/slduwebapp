import React, { Component } from 'react';
import axios from 'axios';
import { Select, AutoComplete, DatePicker, Divider, Input, Spin, Icon } from 'antd';
import { throwStatement } from '@babel/types';
import E7_EventTable from '../../datavisualisation/components/E7_EventTable';
import DynamicTable from '../../datavisualisation/components/dynamicTable';
import responsiveObserve from 'antd/lib/_util/responsiveObserve';

/*This is a search function whereby users can select how they want to search. For example, student name/matric number.*/

const { Option } = Select;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];
const SearchType = ['EventName', 'MatriculationNumber', 'StudentName', 'NTUEmailAddress', 'EventEndYear', 'EventStartYear', 'EventPosition'];
SearchType.sort();
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { OptGroup } = AutoComplete;
function onChange(date, dateString) {
  console.log(date, dateString);
};
const emptyObj = {};
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
      isLoading: false,
      tableData: {
        dynamic: [],
        columns: [],
        data: []
      },
      filename: [],
      current_response: '',
      last_current_response: '',
      search_value: '',
    };

    this.handleSearchDataChange = this.handleSearchDataChange.bind(this);

  };

  handleSearchFilename = () => {
    axios.get(`http://${window.location.hostname}:8002/api/uploadedfiles`)
      .then((response) => {
        this.setState({ data: response.data.data });
        console.log(response);
      })
  }

  handleSearchFunctionChange = value => {
    //
    this.setState({
      searchfunction: value,
    }, () => {
      this.setState({ search_value: '' })
    });
    this.handleUpdateData();
    console.log(this.state.allData);
    this.handlePickData(value);
  };

  //TODO: USE THIS ONE
  handleSearchDataChange = value => {
    this.setState({ search_value: value });
    this.setState({ isLoading: true });
    let current_searchfunction = this.state.searchfunction;
    switch (current_searchfunction) {
      case "EventName":
        axios.get(`http://${window.location.hostname}:8002/api/search/event?eventname=${value}`)
          .then(response => this.updateTableData(response)).catch(error => console.log(error));
        break;
      case "MatriculationNumber":
        axios.get(`http://${window.location.hostname}:8002/api/search/matricnumber?matricnumber=${value}`)
          .then(response => this.updateTableData(response)).catch(error => console.log(error));
        break;
      case "StudentName":
        axios.get(`http://${window.location.hostname}:8002/api/search/studentname?studentname=${value}`)
          .then(response => this.updateTableData(response)).catch(error => console.log(error));
        break;
      case "NTUEmailAddress":
        axios.get(`http://${window.location.hostname}:8002/api/search/ntuemailaddress?ntuemailaddress=${value}`)
          .then(response => this.updateTableData(response)).catch(error => console.log(error));
        break;
      case "EventEndYear":
        axios.get(`http://${window.location.hostname}:8002/api/search/eventendyear?eventendyear=${value}`)
          .then(response => this.updateTableData(response)).catch(error => console.log(error));
        break;
      case "EventStartYear":
        axios.get(`http://${window.location.hostname}:8002/api/search/eventstartyear?eventstartyear=${value}`)
          .then(response => this.updateTableData(response)).catch(error => console.log(error));
        break;
      case "EventPosition":
        axios.get(`http://${window.location.hostname}:8002/api/search/eventposition?eventposition=${value}`)
          .then(response => this.updateTableData(response)).catch(error => console.log(error));
        break;
      default:
        break;
    }
  };

  updateTableData = (response) => {
    // console.log(response);
    this.setState({ isLoading: false });
    if (response.data.data) {
      this.setState({
        tableData: {
          dynamic: "y",
          columns: [...response.data.columns],
          data: [...response.data.data]
        }
      });
    } else {
      this.setState({
        tableData: {
          dynamic: "y",
          columns: [],
          data: []
        }
      });
    }

  }

  handleUpdateData = () => {
    let { allData } = this.state;
    axios.get(`http://${window.location.hostname}:8002/api/search/event?eventname=`)
      .then(response => allData.EventName = response.data.data
      ).catch(error => console.log(error));
    axios.get(`http://${window.location.hostname}:8002/api/search/matricnumber?matricnumber=`)
      .then(response => allData.MatriculationNumber = response.data.data)
      .catch(error => console.log(error));
    axios.get(`http://${window.location.hostname}:8002/api/search/studentname?studentname=`)
      .then(response => allData.StudentName = response.data.data)
      .catch(error => console.log(error));
    axios.get(`http://${window.location.hostname}:8002/api/search/ntuemailaddress?ntuemailaddress=`)
      .then(response => allData.NTUEmailAddress = response.data.data)
      .catch(error => console.log(error));
    axios.get(`http://${window.location.hostname}:8002/api/search/eventendyear?eventendyear=`)
      .then(response => allData.EventEndYear = response.data.data)
      // .then(response => console.log(response.data.data))
      .catch(error => console.log(error));
    axios.get(`http://${window.location.hostname}:8002/api/search/eventstartyear?eventstartyear=`)
      .then(response => allData.EventStartYear = response.data.data)
      .catch(error => console.log(error));
    axios.get(`http://${window.location.hostname}:8002/api/search/eventposition?eventposition=`)
      .then(response => allData.EventPosition = response.data.data)
      .catch(error => console.log(error));
    this.setState({ allData: allData });
  }

  handlePickData = (value) => {
    let { allData } = this.state;
    let selectedData = new Set();
    if (Object.keys(allData).length > 2) {
      switch (value) {
        case "EventName":
          for (let i = 0; i < allData.EventName.length; i++)
            selectedData.add(allData.EventName[i]['EVENT/WORKSHOPNAME']);
          break;
        case "MatriculationNumber":
          for (let i = 0; i < allData.MatriculationNumber.length; i++)
            selectedData.add(allData.MatriculationNumber[i].MATRICNUMBER); //change tablename to the correct value
          break;
        case "StudentName":
          for (let i = 0; i < allData.StudentName.length; i++)
            selectedData.add(allData.StudentName[i].STUDENTNAME); //change tablename to the correct value
          break;
        case "NTUEmailAddress":
          for (let i = 0; i < allData.NTUEmailAddress.length; i++)
            selectedData.add(allData.NTUEmailAddress[i].NTUEMAILADDRESS); //change tablename to the correct value
          break;
        case "EventEndYear":
          for (let i = 0; i < allData.EventEndYear.length; i++) {
            var date = new Date(allData.EventEndYear[i].ENDDATE);
            if (date.getFullYear().toString().length === 4) selectedData.add(date.getFullYear().toString()); //change tablename to the correct value
          }

          break;
        case "EventStartYear":
          for (let i = 0; i < allData.EventStartYear.length; i++) {
            var date2 = new Date(allData.EventEndYear[i].STARTDATE);
            if (date2.getFullYear().toString().length === 4) selectedData.add(date2.getFullYear().toString()); //change tablename to the correct value
          }
          break;
        case "EventPosition":
          for (let i = 0; i < allData.EventPosition.length; i++)
            selectedData.add(allData.EventPosition[i].POSITION); //change tablename to the correct value
          break;
        default:
          break;
      }
      //const SearchType = ['EventName', 'MatriculationNumber', 'StudentName', 'NTUEmailAddress', 'EventEndYear', 'EventStartYear', 'EventPosition'];

      if (!selectedData.size)
        selectedData = [];
      const sortedData = [...selectedData];
      sortedData.sort();
      this.setState({ data: [...sortedData] });
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
              value={this.state.search_value}
              style={{ width: 200 }}
              dataSource={this.state.data}
              placeholder="Key In Here"
              filterOption={(inputValue, option) =>
                option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onChange={this.handleSearchDataChange}
            /> :
            <AutoComplete
              value={this.state.search_value}
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
          this.state.isLoading ? <div><Spin indicator={antIcon} /></div> :
            <div>{this.state.tableData.data.length ? <DynamicTable data={this.state.tableData} /> : <></>}</div>
        }

      </div>
    );
  }

}