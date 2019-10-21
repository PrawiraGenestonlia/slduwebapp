import React, { Component } from 'react';
import { Table, Button, Icon } from 'antd';
import Student from '../../UI/Student';

const pagination = { position: 'none' };

const staticColumns = [{
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
}];

// function columnsBuilder(columnsArr) {
//   const builtDynamicColumns = [];
//   for (let i = 0; i < columnsArr.length; i++) {
//     builtDynamicColumns.push({
//       title: columnsArr[i],
//       dataIndex: columnsArr[i],
//       key: columnsArr[i],
//       render: text => columnsArr[i] == 'MATRICNUMBER' ? <Student matricnumber={text} /> : <font>{text}</font>,
//       width: `${80 / columnsArr.length}%`,
//       sorter: (a, b) => sorter(columnsArr[i]),
//       defaultSortOrder: 'ascend',
//     })
//   }
//   return builtDynamicColumns;
// }

export default class DynamicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.data,
      shouldDynamic: this.props.data.dynamic,
      columnsArr: this.props.data.columns,
      columns: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ data: nextProps.data.data });
      this.setState({ shouldDynamic: nextProps.data.dynamic });
      this.setState({ columnsArr: nextProps.data.columns });
    }
    setTimeout(() => { this.setState({ columns: this.columnsBuilder(this.state.columnsArr) }) }, 20);
  }
  componentWillMount() {
    if ((this.state.shouldDynamic == "y" || this.state.shouldDynamic == "Y"))
      this.setState({ columns: this.columnsBuilder(this.state.columnsArr) });
    else
      this.setState({ columns: staticColumns });
  }
  columnsBuilder = (columnsArr) => {
    const builtDynamicColumns = [];
    for (let i = 0; i < columnsArr.length; i++) {
      builtDynamicColumns.push({
        title: columnsArr[i],
        dataIndex: columnsArr[i],
        key: columnsArr[i],
        render: text => columnsArr[i] == 'MATRICNUMBER' ? <Student matricnumber={text} /> : <font>{text}</font>,
        width: `${80 / columnsArr.length}%`,
        sorter: (a, b) => this.sorter(a, b, columnsArr[i]),
        defaultSortOrder: 'ascend',
      })
    }
    return builtDynamicColumns;
  }
  sorter = (a, b, columns) => {
    const A = a[columns].toUpperCase();
    const B = b[columns].toUpperCase();

    return ((A > B) ? 1 : -1);
  }
  render() {
    return (
      <div>
        <Table pagination={false} columns={this.state.columns} dataSource={this.state.data} />
        {console.log("dynamic columns:", this.state.columns)}
      </div>
    )
  }
}