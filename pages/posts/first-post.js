import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
    return (
        <>
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


        </>

    )
};