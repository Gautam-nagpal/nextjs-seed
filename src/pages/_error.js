import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { WebsiteTitle } from '@constants';

export default function () {
    const router = useRouter();
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} className="p-5">
                <Head>
                    <title>{WebsiteTitle} - 404 Not Found!</title>
                    <link rel="icon" href="/images/favicon.png" />
                </Head>
                <h1>Sorry</h1>
                <p>The page you are looking for doesn't exists</p>
                <Button onClick={() => router.push('/')} variant="outlined" color="primary">Back to Home</Button>
            </Grid>
        </Grid>
    )
}