import React from "react";
import { Grid } from '@material-ui/core';

const NoResultFound = ({ children }) => {
    return (
        <Grid item xs={12} sm={12} md={12} lg={12} className="jobs-fallback">
            <div className="no-results-sec">
                <img src="/images/not-found.svg" />
                <h3>No results</h3>
                {children}
            </div>
        </Grid>
    )
}



export default NoResultFound;
