import React, { useState } from 'react';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';



function AppWrapper(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(true);


	return (
		<div className={cn(classes.root, 'cus-full-page')}>
			<CssBaseline />

			<main className={cn(classes.content, 'right-main-sec')}>
				<Grid item xs={12} sm={12} md={12} lg={12} >
					<div className={cn(classes.toolbar, 'sidebar-logo-wrapper', { 'closed': open })} />
					{props.children}
				</Grid>
			</main>




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

export default AppWrapper