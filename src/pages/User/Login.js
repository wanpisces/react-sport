import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import router from 'umi/router';
// import { Checkbox, Alert, Icon } from 'antd';
// import Login from '@/components/Login';
// import styles from './Login.less';
// const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

@connect(({ login }) => ({
  verify_img: login.verify_img,
  verify_id: login.verify_id,
}))
class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
  };
  componentWillMount() {
    this.getVeriyCode(); //获取验证码
  }
  onTabChange = type => {
    this.setState({ type });
  };
  getVeriyCode() {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/verificationCode',
      payload: {},
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { dispatch, verify_img, verify_id } = this.props;
        dispatch({
          type: 'login/login',
          payload: {
            ...values,
            verify_id: verify_id,
          },
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { verify_img, verify_id } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('user_account', {
            rules: [{ required: true, message: '请输入帐户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入帐户名"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('user_pwd', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('verify_code', {
            rules: [{ required: true, message: '请输入验证码' }],
          })(
            <div>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                placeholder="请输入验证码"
              />
              <img
                onClick={() => this.getVeriyCode()}
                src={'data:image/png;base64,' + verify_img}
              />
            </div>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(LoginPage);
