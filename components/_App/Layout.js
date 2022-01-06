import Head from "next/head";
import { Container } from "react-bootstrap";
import Header from "./Header";

function Layout({ children }) {

  return (
    <>
      <Head>
        <title>Dan Murciano</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div class="wrapper">
        <Header/>
        <Container fluid class="page">
          {children}
        </Container>
      </div>
    </>
  );
}

export default Layout;
