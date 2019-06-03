import React from 'react';
import { Divider } from 'antd';
//
import { dynamicTableData } from './sampleData.js';
//
import DynamicTable from './components/dynamicTable.js';

export default function DataVisualisationHomePage(props) {
    return (
        <div style={{ padding: '10px' }}>
            <h1>Dynamic Table</h1>
            <DynamicTable data={dynamicTableData} />
            <Divider type='horizontal' />
        </div>
    )
}