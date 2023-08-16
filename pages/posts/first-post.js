import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import useSWR from 'swr';

import Layout from '../../components/layout';
import styles from '../../styles/first-post.module.css';

// Runs on every request
export async function getServerSideProps(context) {
    console.log('getServerSideProps executed! context=', context);

    return {
        props: {
            querystring: context.query
        }
    };
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FirstPost(props) {
    const {data, error, isLoading} = useSWR('https://api.github.com/users/fredrikrofors', fetcher);

    console.log('first-post:: props.querystring=', JSON.stringify(props.querystring));
    console.log('data fetched from API=', data);
    console.log('isLoading=', isLoading);

    return (
        <Layout> {
            isLoading ? <div>Loading data...</div> : <div>
                <img src={
                    data.avatar_url
                }></img>
            </div>
        }

            {/* <div className={
                styles.container
            }>
                <Head>
                    <title>First blog post</title>
                </Head>
                <h1>First post</h1>
                <h2>
                    <Link href="/">Back to home</Link>
                    <br></br>
                    <a href="">Back to home (with HTML a tag)</a>
                </h2>
                <img src="/images/profile.jpg"></img>
                <Image src="/images/profile.jpg"
                    height={144}
                    width={144}
                    alt="Your Name"/>


            </div> */} </Layout>


    )
};
