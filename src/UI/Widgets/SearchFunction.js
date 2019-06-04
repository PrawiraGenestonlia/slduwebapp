import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Select, message } from 'antd';
import axios from 'axios';

const onClick = ({ key }) => {
  message.info(`Search by ${key}`);
};

const { Option } = Select;
const SearchType = ['Student Name', 'Event Name'];

var SearchData = {
  'Student Name': ['Hangzhou', 'Ningbo', 'Wenzhou'],
  'Event Name': [],
};



export default class SearchFunction extends Component {
    state = {
        search: SearchData[SearchType[0]],
        data: SearchData[SearchType[0]][0],
      };
    
      handleSearchChange = value => {
        this.setState({
          search: SearchData[value],
          //data: SearchData[value][0],
        });
        if ( SearchData[value] === 'Event Name'){
            axios.get('http://localhost:8080/api/events')
            .then(response =>
            this.setState({ 'Event Name': response.data })
            )   
            .catch(error => console.log(error));
        }

      };
    
      onSearchData = value => {
        this.setState({
          data: value,
        });
      };
    
      render() {
        const { search } = this.state;
        return (
          <div>
            <p> Search Function </p>
            <p>{}</p>

            <Select
              defaultValue={SearchType[0]}
              style={{ width: 200 }}
              onChange={this.handleSearchChange}
            >
              {SearchType.map(type => (
                <Option key={type}>{type}</Option>
              ))}
            </Select>

            <p>{}</p>
            <Select
              style={{ width: 200 }}
              value={this.state.data}
              onChange={this.onSearchData}
            >
              {search.map(city => (
                <Option key={city}>{city}</Option>
              ))}
            </Select>
          </div>
        );
      }
    }