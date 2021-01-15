import React, { useEffect } from 'react';
import store from '../redux/store';
//css
import '../styles/index.scss';

import theme from '@theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '@utils';
import * as actions from '@actions/auth';
import { Container } from 'next/app';

import Head from 'next/head';
import AppWrapper from '@components/wrapper/AppWrapper';

import { AccessTokenName, WebsiteTitle } from '@constants';


function App({ Component, pageProps, router }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const dispatch = useDispatch();

  useEffect(() => {

    //Material Stuff 
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }


    let user = getData(AccessTokenName);
    if (user && user.access_token) {
      dispatch(actions.setUser(user));
    }

  }, []);


  const isAuthRoute = (router.pathname.includes('/auth') || router.pathname.includes('_error'));
  const isPublic = router.pathname.includes('hire')
  return (
    <>
      <Head>
        <title>{WebsiteTitle} - App</title>
        <meta name="viewport" content="maximum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container >

          {
            (isAuthRoute) || (isPublic) ?
              <Component {...pageProps} />
              :
              <AppWrapper>
                <Component {...pageProps} isLoggedIn={isLoggedIn} />
              </AppWrapper>
          }

          {/* <CustomModal /> */}

        </Container>
      </ThemeProvider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return {
    pageProps,
    namespacesRequired: ['common']
  }
}

export default store.withRedux(App);



