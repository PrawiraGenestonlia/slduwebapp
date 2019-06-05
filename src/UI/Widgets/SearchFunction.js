import React, {Component} from 'react';
import axios from 'axios';
import {Select} from 'antd';

/*This is a search function whereby users can select how they want to search. For example, student name/matric number.*/

const {Option} = Select;
const SearchType = ['EventName','MatriculationNumber','StudentName'];

//I need to convert this variable into a state 
var SearchData = {
        EventName: [],
        MatriculationNumber: [],
        StudentName: []
};

export default class SearchFunction extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchfunction: SearchData[SearchType[0]],
            data: SearchData[SearchType[0]],
        }
    };
    
    handleSearchFunctionChange = value =>{

    this.setState({
            searchfunction: SearchData[value],
            data: SearchData[SearchType[value][0]]
        });
    };

    handSearchDataChange = value => {
        this.setState({
            data: value,
        });
    };

    componentDidMount(){
        axios.get(`localhost:8080/api/events`)
        .then(response => 
            this.setState({EventName: response.data})
        ).catch(error => console.log(error));
    
        axios.get(`http://localhost:8080/api/students/?matricnumber`)
        .then(response =>
            this.setState({MatriculationNumber: response.data})
        ).catch(error => console.log(error));
        
        axios.get(`http://localhost:8080/api/students/?studentname`)
        .then(response =>
            this.setState({StudentName: response.data})
        ).catch(error => console.log(error));

    };
    
    render(){
        const{searchfunction} = this.state;
        return(
            <div>
                <Select
                    defaultValue={SearchType[0]}
                    style={{ width:120}}
                    onChange={this.handleSearchFunctionChange}
                >
                    {SearchType.map(type=> (
                        <Option key={type}>{type}</Option>
                    ))}
                </Select>

                <Select
                    value={this.state.data}
                    style={{ width:120}}
                    onChange={this.handleSearchDataChange}
                >
                    {searchfunction.map(data=> (
                        <Option key={data}>{data}</Option>
                    ))}
                </Select>
            </div>
        );
    }

}