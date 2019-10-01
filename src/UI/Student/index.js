import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StudentProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const url = `/student/${this.props.matricnumber}`;
    return (
      <>
        <Link to={url}>
          <span>{this.props.matricnumber}</span>
        </Link>
      </>

    )
  }
}