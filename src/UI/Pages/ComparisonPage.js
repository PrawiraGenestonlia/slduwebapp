import React, { Component } from 'react';
import PageHeader from '../Components/PageHeader';
import Sidebar from '../Components/Sidebar';
import ComparisonContent from '../Components/ComparisonContent';
import { Layout } from 'antd';

export default class ComparisonPage extends Component {
    render() {
        return (
            <Layout>
                <PageHeader />
                <Layout>
                    <Sidebar keys={['2']} />
                    <ComparisonContent />
                </Layout>

            </Layout>
        )
    }
}