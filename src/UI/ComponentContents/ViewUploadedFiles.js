import React, { Component } from 'react';
import axios from 'axios';
import { List, Button, Modal, Layout, Icon } from 'antd';
import E7_EventTable from '../../datavisualisation/components/E7_EventTable';
import DynamicTable from '../../datavisualisation/components/dynamicTable';
import { thisTypeAnnotation } from '@babel/types';

const DataVizColors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];
const { confirm } = Modal;

export default class ViewUploadedFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Files: [],
      Delete: [],
      FileContent: [],
      selected_file: "",
      tableData: {
        dynamic: [],
        columns: [],
        data: []
      },
    }
    this.DeleteFile = this.DeleteFile.bind(this);
    this.ViewFile = this.ViewFile.bind(this);
  };

  componentWillMount() {
    axios.get(`http://localhost:8080/api/uploadedfiles`)
      .then(response => {
        this.setState({ Files: response.data });
        console.log("files", this.state.Files);
      }
      ).catch(error => console.log(error));

  };

  DeleteFile = (item, index) => {

    console.log(index);

    axios.put(`http://localhost:8080/api/droptables/?tablename=${item}`)
      .then(response => {
        axios.get(` /api/uploadedfiles`)
          .then(response => console.log(response))
      });

    let Filedb = [...this.state.Files];
    //Remove element
    Filedb.splice(index, 1);
    //Decrement greater indexes
    for (let i = index; i < Filedb.length; i++) {
      Filedb[i].index -= 1;
    }
    //Update State
    this.setState({
      Files: Filedb,

    });

  };

  //Confirm delete files  

  showConfirm(item, index) {

    confirm({
      title: `Do you want to delete  ${item}.csv? `,
      content: 'Click ok to delete this file',
      onOk: this.DeleteFile.bind(this, item, index),
      onCancel() { },
    });
  };

  // componentDidUpdate() {
  //   this.update();
  // }
  componentDidMount() {
    setInterval(() => {
      this.update();
    }, 100);
  }

  //Update files in database
  update = (value) => {

    axios.get(`http://localhost:8080/api/uploadedfiles`)
      .then(response =>
        //network server error
        this.setState({ Files: response.data })
      ).catch(error => console.log(error));

  }

  //Preview of file

  ViewFile = (item, index) => {

    axios.get(`http://localhost:8080/api/uploadedfiles/?filename=${item}`)
      .then(response => {
        this.setState({ selected_file: item });
        this.setState({
          tableData: {
            dynamic: "y",
            columns: response.data.columns,
            data: response.data.data
          }
        });
      }
      ).catch(error => console.log(error))

    console.log(item);

    this.setState({
      visible: true,
    });

  };

  handleFileContent = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleFileDelete = e => {
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

  render() {
    let modalTitle = `${this.state.selected_file} (${this.state.tableData.data.length} rows)`;
    return (
      <Layout>

        <List
          size="large"
          header={[<h2>Uploaded Files</h2>, <br />]}
          bordered
          dataSource={this.state.Files.map(data => (data.Tables_in_mydb))}
          renderItem={(item, index) => (
            <List.Item
              index={index}
              //actions = {[<a>delete</a>]}
              actions={[<Button onClick={this.showConfirm.bind(this, item, index)}>Delete</Button>, <Button onClick={this.ViewFile.bind(this, item)}>View File</Button>]}
            >{item}</List.Item>
          )
          }
        />

        <Modal
          title={modalTitle}
          visible={this.state.visible}
          onOk={this.handleFileContent}
          onCancel={this.handleCancel}
          width="500"
        >

          <DynamicTable data={this.state.tableData} />
        </Modal>

      </Layout>
    );
  }
}
