import React from "react"
import { Grid, Button } from '@material-ui/core';
import { useDispatch } from "react-redux";
import * as commonActions from '@actions/common';
import { useRouter } from "next/router";

function NotLogin() {
    const router = useRouter();
    const dispatch = useDispatch();


    function changeRoute(key) {
        dispatch(commonActions.closeCustomModalDialog())
        router.push(key);

    }

    return <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="verification-popup">
                <div className="text-center cus-verification-icon">
                    <img src="/images/pop-verificaiton.svg" />
                </div>
                <div className="verification-con">
                    <h2>Login Required</h2>
                    <p>Please verify to proceed further.</p>
                    <div className="job-grid-actions">
                        <Button className="cus-btn" variant="outlined" color="primary" onClick={() => changeRoute("/auth/login")}>Sign up</Button>
                        <Button className="cus-btn" variant="contained" color="primary" onClick={() => changeRoute("/auth/login")}>Login</Button>
                    </div>
                </div>
            </div>
        </Grid>
    </Grid>
}

export default NotLogin