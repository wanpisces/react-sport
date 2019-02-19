import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Table, Button, Pagination, Layout, Input, Select } from 'antd';
import PaginationWrapper from '@/components/PaginationWrapper/index.jsx';
import Link from 'umi/link';
import styles from './content.less';

const { Header, Content } = Layout;
const Option = Select.Option;
@connect(({ content, user }) => ({
  dataList: content.dataList,
  total_num: content.total_num,
  accountList: user.accountList,
}))
class BannerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
      page_size: 5,
      editor_id: '',
      current_page: 1,
      selectedRowKeys: [],
    };
  }
  componentWillMount() {
    this.getAccount();
    this.getData();
  }
  //获取用户列表
  getAccount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/getAccount',
    });
  }
  //获取列表数据
  getData() {
    const { dispatch } = this.props;
    const { status, page_size, current_page, editor_id } = this.state;
    let payload = {
      status,
      page_size,
      current_page,
      editor_id,
    };
    for (let i in payload) {
      if (payload[i] === '') {
        delete payload[i];
      }
    }
    dispatch({
      type: 'content/bannerList',
      payload: payload,
    });
  }
  //每页显示条数
  onShowSizeChange(current_page, page_size) {
    this.setState(
      {
        page_size,
        current_page,
      },
      () => {
        this.getData();
      }
    );
  }
  //选择几页
  onChange(current_page) {
    this.setState(
      {
        current_page,
      },
      () => {
        this.getData();
      }
    );
  }
  //改变tab切换
  changeTab(status) {
    this.setState(
      {
        status: status,
        page_size: 5,
        current_page: 1,
        selectedRowKeys: [],
      },
      () => {
        this.getData();
      }
    );
  }
  //改变上下线
  changeState(item) {
    const { dispatch } = this.props;
    dispatch({
      type: 'content/bannerState',
      payload: {
        banner_id: item.banner_id,
      },
    }).then(() => {
      this.getData();
    });
  }
  //删除
  deleteList() {
    const { dispatch } = this.props;
    const { selectedRowKeys } = this.state;
    let banner_id = '';
    selectedRowKeys.forEach(item => {
      banner_id = banner_id + ',' + item;
    });
    dispatch({
      type: 'content/bannerDelete',
      payload: {
        banner_id: banner_id,
      },
    }).then(() => {
      this.getData();
    });
  }
  //选择列表
  selectedFn = selectedRowKeys => {
    this.setState({
      selectedRowKeys: selectedRowKeys,
    });
  };
  //选择账号
  selectChange(value) {
    this.setState({
      editor_id: value,
    });
  }
  render() {
    const { selectedRowKeys } = this.state;
    const { dataList, total_num } = this.props;
    const columns = [
      {
        title: '轮播标题',
        dataIndex: 'banner_title',
        key: 'banner_title',
      },
      {
        title: '轮播图',
        dataIndex: 'banner_pic',
        key: 'banner_pic',
        render: banner_pic => (
          <img
            className="banner-img"
            style={{ width: '150px', height: '80px' }}
            src={banner_pic}
            alt=""
          />
        ),
      },
      {
        title: '跳转方式',
        dataIndex: 'banner_mini_run',
        width: 100,
        key: 'banner_mini_run',
        render: banner_mini_run => (
          <div>{banner_mini_run == 1 ? <span>小程序</span> : <span>不跳转</span>}</div>
        ),
      },
      {
        title: '跳转内容',
        dataIndex: 'banner_mini_url',
        key: 'banner_mini_url',
        render: banner_mini_url => (
          <div>{banner_mini_url ? <span>{banner_mini_url}</span> : <span>--</span>}</div>
        ),
      },
      {
        title: '编辑人',
        dataIndex: 'editor_name',
        key: 'editor_name',
      },
      {
        title: '发布时间',
        width: 140,
        dataIndex: 'update_time',
        key: 'update_time',
      },
      {
        title: '操作',
        width: 100,
        dataIndex: 'action',
        render: (text, item) => (
          <div>
            {item.status == 1 ? (
              <span onClick={() => this.changeState(item)} className="yellow-text pointer">
                下线
              </span>
            ) : (
              <div>
                <span onClick={() => this.changeState(item)} className="yellow-text pointer">
                  上线
                </span>
                <span className="yellow-text pointer">编辑</span>
                <span className="yellow-text pointer" onClick={() => this.deleteList()}>
                  删除
                </span>
              </div>
            )}
          </div>
        ),
      },
    ];
    const rowSelection = {
      selectedRowKeys,
      onChange: this.selectedFn,
    };
    return (
      <div>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div className="search-wrap-common clearfix">
              {/* <div className="search-list-common">
                <Input style={{ width: 220 }} placeholder="Basic usage" />
              </div> */}
              <div className="search-list-common">
                编辑人：
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="请选择编辑人"
                  optionFilterProp="children"
                  onChange={value => this.selectChange(value)}
                >
                  <Option value="">全部</Option>
                  {this.props.accountList.map((item, index) => {
                    return (
                      <Option key={index} value={item.account_id}>
                        {item.admin_name}
                      </Option>
                    );
                  })}
                </Select>
              </div>
              <Button
                type="primary"
                onClick={() => {
                  this.getData();
                }}
              >
                搜索
              </Button>
            </div>
          </Header>
          <Content style={{ background: '#fff', padding: '20px', marginTop: '20px' }}>
            <div className="clearfix">
              <div className="button_wrap_common lf">
                <Button type="danger" disabled={this.state.selectedRowKeys.length ? false : true}>
                  删除
                </Button>
                <Button
                  onClick={() => this.changeTab(1)}
                  type={this.state.status == 1 ? 'primary' : ''}
                >
                  已上线
                </Button>
                <Button
                  onClick={() => this.changeTab(2)}
                  type={this.state.status == 2 ? 'primary' : ''}
                >
                  已下线
                </Button>
              </div>
              <div className="rt">
                <Button type="primary" icon="plus-circle">
                  <Link to="/content/bannerAdd" style={{ color: '#fff', marginLeft: '5px' }}>
                    新建轮播
                  </Link>
                </Button>
              </div>
            </div>
            <Table
              style={{ marginTop: '20px' }}
              columns={columns}
              rowSelection={rowSelection}
              dataSource={dataList}
              bordered
              rowKey="banner_id"
              pagination={false}
            />
            <PaginationWrapper
              onChange={page => this.onChange(page)}
              onShowSizeChange={(current, pageSize) => this.onShowSizeChange(current, pageSize)}
              total={total_num}
              pageSize={this.state.page_size}
              current={this.state.current_page}
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default BannerList;
