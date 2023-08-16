export default function ThirdPost(props) {
    console.log('ThirdPost props=', props);

    return (
        <>
            <h1>Hello {
                props.name
            }.</h1>
        </>
    )
}

export async function getStaticProps() {
    console.log('ThirdPost::getStaticProps() - invoked!');

    const response = await fetch('https://api.github.com/users/fredrikrofors');
    console.log('ThirdPost::getStaticProps() - response=', response);

    return {
        props: {
            name: 'Fred'
        }
    }
}
