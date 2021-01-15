import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination as Mpagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Pagination({ onChange = () => { }, count = 1, page = 0, ...restProps }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Mpagination
                color="primary"
                count={count}
                disabled={count <= 1}
                page={page}
                onChange={(e, nextPage) => onChange(nextPage)}
                {...restProps}
            />
        </div>
    );
}