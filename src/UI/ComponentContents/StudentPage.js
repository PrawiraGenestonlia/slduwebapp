import React, { Component } from 'react';
import axios from 'axios';
import StudentProfileContent from '../ComponentContents/StudentProfileContent';

//TODO: allows student name input - wira
export default class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPrintButton: true,
      isPrinting: false,
      studentMatricNo: this.props.match.params.matricnumber,
      StudentProfileResponse: {},
    }
  }
  componentWillMount() {
    axios.get(`https://server.thexdream.net/slduAPI/api/skillset?matricnumber=${this.state.studentMatricNo}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          studentProfileResponse: { ...response.data }
        });
      }
      )
      .catch(error => console.log(error));
  }
  componentDidUpdate() {
    if (Object.keys(this.state.StudentProfileResponse).length !== 4) {
      // axios.get(`https://server.thexdream.net/slduAPI/api/skillset?matricnumber=${this.state.studentMatricNo}`)
      //   .then(response =>
      //     this.setState({
      //       studentProfileResponse: { ...response.data }
      //     }
      //     ))
      //   .catch(error => console.log(error));
    }

  }
  render() {
    return (
      <>
        {this.state.studentProfileResponse ?
          <StudentProfileContent StudentProfileResponse={this.state.studentProfileResponse} />
          :
          <div>The student does not exist</div>}
      </>

    )
  }
}
