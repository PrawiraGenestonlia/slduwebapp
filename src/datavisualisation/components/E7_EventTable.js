//  E7_EventTable.js
//  Created by Prawira Genestonlia on 23/04/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import { Table, } from 'antd';

const columns = [{
  title: 'Timestamp',
  dataIndex: 'TIMESTAMP',
  key: 'TIMESTAMP',
  render: text => <font>{text}</font>,
}, {
  title: 'Full Name',
  dataIndex: 'STUDENTNAME',
  key: 'STUDENTNAME',
  width: '20%',
  render: text => <font>{text}</font>,
  onFilter: (value, record) => record.FULLNAME.indexOf(value) === 0,
  sorter: (a, b) => a.FULLNAME.length - b.FULLNAME.length,
  sortDirections: ['descend'],
}, {
  title: 'Matric Number',
  dataIndex: 'MATRICNUMBER',
  key: 'MATRICNUMBER',
  render: text => <font>{text}</font>,
}, {
  title: 'NTU Email Address',
  dataIndex: 'NTUEMAILADDRESS',
  key: 'NTUEMAILADDRESS',
  render: text => <font>{text}</font>,
}, {
  title: 'Event Name',
  dataIndex: 'EVENTNAME',
  key: 'EVENTNAME',
  render: text => <font>{text}</font>,
}, {
  title: 'Event Position',
  dataIndex: 'EVENTPOSITION',
  key: 'EVENTPOSITION',
  width: '20%',
  render: text => <font>{text}</font>,
}, {
  title: 'Event Start Date',
  dataIndex: 'EVENTSTARTDATE',
  key: 'EVENTSTARTDATE',
  render: text => <font>{text}</font>,
},
];

export default class E7_EventTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      shouldShow: this.props.shouldShow,
      colors: this.props.colors,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ data: nextProps.data });
    }
  }
  render() {
    return (
      <div>
        {this.state.shouldShow ?
          <div>
            <Table columns={columns} dataSource={this.state.data} />
          </div>
          : null}
      </div>
    )
  }
}