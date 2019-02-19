import React, { Component, Suspense } from 'react';
import { Pagination } from 'antd';
class PaginationWrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <Pagination
          showSizeChanger
          onShowSizeChange={this.props.onShowSizeChange}
          onChange={this.props.onChange}
          pageSizeOptions={['5', '10', '15', '20']}
          total={this.props.total}
          pageSize={this.props.pageSize}
          current={this.props.current}
        />
      </div>
    );
  }
}
export default PaginationWrapper;
