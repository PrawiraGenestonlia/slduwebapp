//  D4_Upload.js
//  Created by Prawira Genestonlia on 06/05/19.
//  Copyright © 2019 Prawira Genestonlia. All rights reserved.

import React, { Component } from 'react';
import { Upload, Icon, message } from 'antd';
import axios from 'axios';

const Dragger = Upload.Dragger;

var props = {
  name: 'uploadfile',
  multiple: false,
  action: '',
  customRequest({ onProgress, onError, onSuccess, data, filename, file, withCredentials, action, headers }) {
    let formData = new FormData();
    if (data) {
      Object.keys(data).map((key) => {
        return formData.append(key, data[key]);
      });

    }
    formData.append(filename, file);
    // console.log('>> formData >> ', formData);
    console.log(filename);
    // You should have a server side REST API 
    axios.post(action,
      formData, {
      withCredentials,
      headers,
      onUploadProgress: e => {
        onProgress({ percent: (e.loaded / e.total) * 100 });
      },
    }
    ).then(function (response) {
      onSuccess(response, file);
      message.success(`${response.data.file.originalname} file uploaded successfully.`);
    })
      .catch(function (error) {
        console.log(error);
        onError(error, file);
        message.error(`file upload failed.`);
      });
  }
};

export default class D4_Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      shouldShow: this.props.shouldShow,
      colors: this.props.colors,
      apiLink: this.props.apiLink,
      upload_text: this.props.upload_text || "Upload",
    };
  }
  componentWillMount() {
    props.action = this.state.apiLink;
  }
  render() {
    return (
      <div>
        {this.state.shouldShow ?
          <div style={{ padding: '10px' }}>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">{this.state.upload_text}</p>
              <p className="ant-upload-hint">Click or drag file to this area to upload</p>
            </Dragger>
          </div>
          : null}
      </div>
    )
  }
}