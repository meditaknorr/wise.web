import React from 'react';
import Header from '../../Components/Header/index';
import Main from '../../Components/Main/index';
import Footer from '../../Components/Footer/index';
import { Helmet } from 'react-helmet';
export default function() {

  return (
    <React.Fragment>
      <Helmet>
        <title>Página Inicial, WISE LDA</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  )
}
