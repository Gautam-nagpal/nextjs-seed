import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';

import PublicHeader from './public/PublicHeader';
import Footer from './public/Footer';



function PublicAppWrapper(props) {
    const classes = useStyles();


    return (
        <div className={clsx(classes.root, 'cus-full-page cus-public-page')}>
            <CssBaseline />

            <Grid item xs={12} sm={12} md={12} lg={12} >
                <PublicHeader />

                {props.children}

                <Footer />
            </Grid>


        </div >
    );
}


const useStyles = makeStyles((theme) => {

    return {
        root: {
            // display: 'flex',
        },
    }
});

export default PublicAppWrapper