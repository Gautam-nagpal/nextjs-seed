import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getData } from '@utils';
import { AccessTokenId } from '@constants';
import Head from 'next/head';

import cn from 'classnames';

function Layout({ children, authRequired = false, isLoading = false, pageTitle = "" }) {
  const router = useRouter();
  const [hasAccess, setAccess] = useState(false);

  useEffect(() => {

    if (!getData(AccessTokenId) && authRequired) {
      router.push('/auth/login')
    } else {
      setAccess(true);
    }

  }, [])


  //While loading & checking auth show this fallback/loading UI.
  if (authRequired && !hasAccess) {
    return <div className="loading-wrapper-custom">
      <div className="loader">
        {/* <img src="/images/logo.png" alt="" /> */}
      </div>
    </div>
  }

  return (
    <>
      <Head>
        <title>{pageTitle} </title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="__app_container__">
        <div className={cn("__global_loader__", { 'showing': !isLoading })}>
          <div>
            {/* <img src="/images/loader.gif" /> */}
          </div>
        </div>

        <div className={cn({ 'blur': isLoading })}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout