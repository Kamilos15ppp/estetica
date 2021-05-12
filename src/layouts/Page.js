import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AboutPage from '../pages/AboutPage';
import PricesListPage from '../pages/PricesListPage';
import CategoryPage from '../pages/CategoryPage';
import InfoPage from '../pages/InfoPage';
import VoucherPage from '../pages/VoucherPage';
import GalleryPage from '../pages/GalleryPage';
import ContactPage from '../pages/ContactPage';
import ScrollToTop from '../components/ScrollToTop';
import ArrowBackToTop from '../components/ArrowBackToTop';

import '../styles/Page.css';

const Page = () => {
  return (
    <>
      <ScrollToTop />
      <ArrowBackToTop />
      <Switch>
        <Route path='/' component={AboutPage} exact />
        <Route path='/cennik' component={PricesListPage} />
        <Route path='/kategoria/:id' component={CategoryPage} />
        <Route path='/info' component={InfoPage} />
        <Route path='/voucher' component={VoucherPage} />
        <Route path='/galeria' component={GalleryPage} />
        <Route path='/kontakt' component={ContactPage} />
        <Redirect from='*' to='/' />
      </Switch>
    </>
  );
}

export default Page;