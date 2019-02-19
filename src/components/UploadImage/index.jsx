import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Upload, Icon, message } from 'antd';
const Dragger = Upload.Dragger;

@connect(({ publicModel }) => ({
  tokenPayload: publicModel.tokenPayload,
  url: publicModel.url,
}))
class UploadImage extends Component {
  constructor(props) {
    super(props);
  }
  getUpload(file) {
    const { dispatch } = this.props;
    const _index = file.name.lastIndexOf('.');
    const file_ext = file.name.substring(+_index + 1);
    dispatch({
      type: 'publicModel/getToken',
      payload: {
        file_ext,
      },
    }).then(() => {
      const { tokenPayload } = this.props;
      let formData = new FormData();
      formData.append('file', file);
      formData.append('token', tokenPayload.token);
      formData.append('key', tokenPayload.key);
      dispatch({
        type: 'publicModel/uploadFile',
        payload: {
          formData,
        },
      });
    });
  }
  render() {
    const props = {
      name: 'file',
      multiple: false,
      action: '.....',
      beforeUpload: file => {
        this.getUpload(file);
      },
    };
    return (
      <div style={{ marginTop: '40px' }}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">点击，或拖动文件到此区域上传</p>
        </Dragger>
      </div>
    );
  }
}
export default UploadImage;
