//  D3_Calendar.js
//  Created by Prawira Genestonlia on 06/05/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
const { RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';
export default class D3_Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      data: this.props.data,
      shouldShow: this.props.shouldShow,
      colors: this.props.colors,
      chosenStartDate: '',
      chosenEndDate: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ data: nextProps.data });
    }
  }
  handleSetDate = (e, selectedDate) => {
    this.setState({
      chosenStartDate: selectedDate[0],
      chosenEndDate: selectedDate[1],
    }, this.setState({ refresh: false }));
  }
  render() {
    return (
      <div>
        {this.state.shouldShow ?
          <div>
            <RangePicker
              defaultValue={[moment(today, dateFormat), moment(today, dateFormat)]}
              format={dateFormat}
              onChange={(e, selectedDate) => { this.handleSetDate(e, selectedDate) }} />
          </div>
          : null}
      </div>
    )
  }
}