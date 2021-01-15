import { Grid, Container } from '@material-ui/core';

export default ({ children, img }) => {

	return (
		<Grid container className="auth-wrapper">
			<Container>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<div className="logo">
						{/* <img className="cur-pointer" onClick={() => window.open(LIVE_LINK, "_parent")} src="/images/logo.png" /> */}
					</div>
				</Grid>
				<Grid container className="align-center cus-mid-form">
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<div className="form">
							<div className="main">
								{children}
							</div>
						</div>
					</Grid>
				</Grid>
			</Container>
		</Grid >
	)
}