import Header1 from '../component/header';
import Footer1 from '../component/footer';
import Head from 'next/head';
const Layout = (props) => (
    <div>
        <Head>
            <title>DESSERTINAJA</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" herf="/css/bulma.css" />
        </Head>

        <Header1 />
        {props.childen}
        <Footer1 />
    </div>
)

export default Layout;