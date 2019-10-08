import React from 'react';
import Helmet from 'react-helmet';
import viewmodel from '../json';
import GoogleMaps from './GoogleMaps';
import Navigation from './Navigation';

const DefaultLayout = ({ children, showGoogleMaps }) => {
  return (
    <div>
      <Helmet
        title={viewmodel.meta.title}
        meta={[
          {
            name: 'description',
            content: viewmodel.meta.description,
          },
          { name: 'keywords', content: viewmodel.meta.description },
        ]}>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navigation />
      {children}
      {showGoogleMaps && <GoogleMaps />}
    </div>
  );
};

export default DefaultLayout;
