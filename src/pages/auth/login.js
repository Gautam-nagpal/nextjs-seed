import React from 'react';
import Layout from '@components/layout';

import AuthWrapper from '@components/wrapper/AuthWrapper';
import Login from '@components/app/auth/Login';

function LoginPage() {

	return (
		<Layout pageTitle="login">
			<AuthWrapper>
				<Login />
			</AuthWrapper>
		</Layout >
	)
}

LoginPage.getInitialProps = async () => {
	return {
		namespacesRequired: ['common']
	}
};

export default LoginPage;
