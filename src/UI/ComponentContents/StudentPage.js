import React, { Component } from 'react';

export default class StudentProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPrintButton: true,
      isPrinting: false,
      studentMatricNo: this.props.match.params.matricnumber,
      StudentProfileResponse: this.props.StudentProfileResponse
    }
  }
  componentDidUpdate() {

  }
  componentWillReceiveProps(nextProps) {
    if (this.props.StudentProfileResponse !== nextProps.StudentProfileResponse)
      this.setState({ StudentProfileResponse: nextProps.StudentProfileResponse })
  }
  printingService = () => {
    if (this.state.isPrinting) {
      setTimeout(() => { window.print() }, 200);
      this.setState({ isPrinting: false });
    }
  }
  render() {
    return (
      <>
        <div><h1>{this.state.studentMatricNo}</h1></div>
      </>

    )
  }
}
