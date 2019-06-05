import React, { Component } from 'react';
import { Table, } from 'antd';

const staticColumns = [{
    title: 'Timestamp',
    dataIndex: 'TIMESTAMP',
    key: 'TIMESTAMP',
    render: text => <font>{text}</font>,
}, {
    title: 'Full Name',
    dataIndex: 'FULLNAME',
    key: 'FULLNAME',
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

function columnsBuilder(columnsArr) {
    const builtDynamicColumns = [];
    for (let i = 0; i < columnsArr.length; i++) {
        builtDynamicColumns.push({
            title: columnsArr[i],
            dataIndex: columnsArr[i],
            key: columnsArr[i],
            render: text => <font>{text}</font>,
            width: `${100 / columnsArr.length}%`,
        })
    }
    return builtDynamicColumns;
}

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
    }
    componentWillMount() {
        if ((this.state.shouldDynamic === "y" || this.state.shouldDynamic === "Y"))
            this.setState({ columns: columnsBuilder(this.state.columnsArr) });
        else
            this.setState({ columns: staticColumns });
    }
    componentWillMount() {
        if ((this.state.shouldDynamic === "y" || this.state.shouldDynamic === "Y"))
            this.setState({ columns: columnsBuilder(this.state.columnsArr) });
        else
            this.setState({ columns: staticColumns });
    }
    render() {
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}