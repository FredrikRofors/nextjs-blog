import styles from '../../styles/second-post.module.css';
import Layout from '../../components/layout';

export default function SecondPost() {
    return (
        <Layout>
            <div className={
                styles.container
            }>
                Second post
            </div>
        </Layout>
    );
}
