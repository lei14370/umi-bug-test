import Page from '@/components/Page';
import styles from './index.less';
const Home = () => {
  return (
    <Page title="首页">
      <div className={styles.content}>
        <img src={require('./images/home-icon.png')} alt="" />
        <span>页面开发中，敬请期待…</span>
      </div>
    </Page>
  );
};
export default Home;
