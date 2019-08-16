import React, {Component} from 'react';
import {Layout, AutoComplete,Descriptions} from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import StudentProfileContent from '../ComponentContents/StudentProfileContent';
import axios from 'axios';

const { Content } = Layout;
const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

export default class HomePageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      searchfunction: "",
      AutoCompleteValue:'',
      data:[],
      tableData: {
        dynamic: [],
        columns: '',
        data: []
      },
      skillset_data:[{max:0}],
      }
    };
  
    handleSearchDataChange= () => {}

    componentDidMount() {
      axios.get(`http://localhost:8080/api/students`)
        .then(response =>
          this.setState({ skillset_data:response.data}))
        .catch(error => console.log(error));
    }
    render(){
        return (
            <Layout>
               <Content
                style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
                }}>
            Search Student Name {""}
            <AutoComplete
            // value= {this.state.AutoCompleteValue}
            style={{ width: 200 }}
            dataSource={this.state.data}
            placeholder="Search Student Name"
            filterOption={(inputValue, option) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            onChange={this.handleSearchDataChange}
            />  
            <br/>
            <br/>
            <StudentProfileContent skillset_data={this.state.skillset_data}/>
            </Content>
            </Layout>
        )
    }
}