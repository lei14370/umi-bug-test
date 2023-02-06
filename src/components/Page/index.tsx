import styles from './index.less';
import { PropsWithChildren } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
type Props = {
  title: string;
  back?: boolean;
};
const Home = (props: PropsWithChildren<Props>) => {
  const { title, children, back = false } = props;
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        {back ? (
          <Button style={{ marginRight: 10 }} onClick={() => history.back()}>
            返回
          </Button>
        ) : null}
        {title}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export default Home;
