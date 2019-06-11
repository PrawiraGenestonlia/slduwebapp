import React, { Component} from 'react';
import axios from 'axios';
import {List,Button,Modal,Layout} from 'antd';
import E7_EventTable from '../../datavisualisation/components/E7_EventTable';


const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

export default class ViewUploadedFiles extends Component{
    constructor(props){
        super(props);
        this.state = {
          Files: [],
          Delete:[],
          FileContent:[],
        }
        this.DeleteFile = this.DeleteFile.bind(this);
        this.ViewFile = this.ViewFile.bind(this);
    };

    componentWillMount(){
        axios.get(`http://localhost:8080/api/uploadedfiles`)
        .then(response =>
            this.setState({Files:response.data})
        ).catch(error => console.log(error));
    };

    DeleteFile = (item, index) => {
    
    console.log(index);
    
    axios.put(`http://localhost:8080/api/droptables/?tablename=${item}`)
    .then(response => {
        axios.get(` /api/uploadedfiles`)
        .then(response => console.log(response))
    });
   
        let Filedb = [ ...this.state.Files];
        //Remove element
        Filedb.splice(index,1);
        //Decrement greater indexes
        for(let i= index; i<Filedb.length; i++){
        Filedb[i].index-=1;
        }
        //Update State
        this.setState({
        Files: Filedb
        });
    };
    
    //Update files in database

    update = (value) => {

        axios.get(`http://localhost:8080/api/uploadedfiles`)
        .then(response =>
            this.setState({Files:response.data})
        ).catch(error => console.log(error));

    }

    //Preview of file

    ViewFile = (item, index) =>{

        axios.get(`http://localhost:8080/api/uploadedfiles/?filename=${item}`)
        .then(response => {
            console.log(response.data);
            this.setState({FileContent: response.data})}
        ).catch(error => console.log(error))

        console.log(item);

        this.setState({
            visible: true,
        });

        };

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    render(){

        return(
            <Layout>
                 
            <List
            size="large"
            header={[<div>Uploaded Files</div>,<br/>,<Button onClick={this.update}>Update</Button>]}
            bordered
            dataSource={this.state.Files.map(data => (data.Tables_in_mydb))}
            renderItem={(item,index) => (
                <List.Item
                index = {index}
                 //actions = {[<a>delete</a>]}
                 actions = {[<Button onClick={this.DeleteFile.bind(this, item, index)}>Delete</Button>, <Button onClick={this.ViewFile.bind(this,item)}>View File</Button>]}
                >{item}</List.Item>
            )
            }   
            />

            <Modal
                title="File Content"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width = "500"
            >
                <E7_EventTable data={this.state.FileContent} shouldShow={true} colors={DataVizColors} />
            </Modal>

            </Layout>
        );
    }
}