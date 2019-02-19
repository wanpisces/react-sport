import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
// import { Row, Col, Icon, Menu, Dropdown } from 'antd';

// import GridContent from '@/components/PageHeaderWrapper/GridContent';
// import { getTimeDistance } from '@/utils/utils';

// import styles from './Analysis.less';
// import PageLoading from '@/components/PageLoading';

// const IntroduceRow = React.lazy(() => import('./IntroduceRow'));
// const SalesCard = React.lazy(() => import('./SalesCard'));
// const TopSearch = React.lazy(() => import('./TopSearch'));
// const ProportionSales = React.lazy(() => import('./ProportionSales'));
// const OfflineData = React.lazy(() => import('./OfflineData'));

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
class MatchList extends Component {
  render() {
    return <div>sdfdsfs</div>;
  }
}

export default MatchList;
