import { Button, Result } from 'antd';
import { FormattedMessage, formatMessage, Link } from 'umi';
import React from 'react';
import { RouteChildrenProps } from 'react-router';

import styles from './style.less';

const actions = (
  <div className={styles.actions}>
    <Link to="/user/login">
      <Button size="large" type="primary">
        <FormattedMessage id="useranduserregisterresult.login.login" />
      </Button>
    </Link>
  </div>
);

const UserRegisterResult: React.FC<RouteChildrenProps> = ({ location }) => (
  <Result
    className={styles.registerResult}
    status="success"
    title={
      <div className={styles.title}>
        <FormattedMessage
          id="useranduserregisterresult.register-result.msg"
          values={{ username: location.state ? location.state['username'] : 'AntDesign@example.com' }}
        />
      </div>
    }
    subTitle={formatMessage({ id: 'useranduserregisterresult.register-result.activation-email' })}
    extra={actions}
  />
);

export default UserRegisterResult;
