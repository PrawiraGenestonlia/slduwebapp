import React, { Component } from 'react';
import { Button, Divider, Select, Layout, AutoComplete, Descriptions } from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import StudentProfileContent from '../ComponentContents/StudentProfileContent';
import axios from 'axios';

const { Content } = Layout;
const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];
const { Option } = Select;
const SearchType = ['MatriculationNumber', 'StudentName'];


export default class HomePageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      data: [],
      allData: [],
      searchfunction: "",
      studentProfileResponse: false,
    }
  };


  onSelect = value => {
    console.log('onSelect', value);
  }


  handleSearchFunctionChange = value => {
    this.setState({
      searchfunction: value,
    });
    this.handleUpdateData();
    this.handlePickData(value);
  };

  handleSearchDataChange = value => {
    if (this.state.searchfunction == "MatriculationNumber") {
      axios.get(`http://${window.location.hostname}:8002/api/skillset?matricnumber=${value}`)
        .then(response =>
          this.setState({
            studentProfileResponse: response.data
          }
          ))
        .catch(error => console.log(error));
    }
    else if (this.state.searchfunction == "StudentName") {
      axios.get(`http://${window.location.hostname}:8002/api/students/?studentname=${value}`)
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

  handleStudentProfileSearch = (value) => {
    axios.get(`new_api_url${value}`)
      .then(response =>
        this.setState({
          studentProfileResponse: response.data
        }))
      .catch(error => console.log(error));
  }

  handleUpdateData = () => {
    let { allData } = this.state;

    axios.get(`http://${window.location.hostname}:8002/api/students/?matricnumber`)
      .then(response =>
        allData.MatriculationNumber = response.data.data
      ).catch(error => console.log(error));

    axios.get(`http://${window.location.hostname}:8002/api/students/?studentname`)
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
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}>
          Select Search Function {" "}
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
          Search
            {"  "}
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
                onSelect={this.onSelect}
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
          <br />
          <p>{}</p>
          {this.state.studentProfileResponse ?
            <>

              <Divider type="horizontal" />
              <Button href="/StudentProfile" target="_blank">Click here for the printable Page</Button>
              <Divider type="horizontal" />
              <StudentProfileContent StudentProfileResponse={this.state.studentProfileResponse} />
            </> : <></>
          }
        </Content>
      </Layout>
    )
  }
}