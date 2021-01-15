import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2867B2',
		},
		secondary: {
			//main: '#19857b',
			main:'#ff1744'
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
	},
	typography: {
		// fontFamily: 'Inter, sans-serif',
		fontFamily: 'Roboto, sans-serif',
	},
	overrides: {
		MuiTextField: {
			root: {
				fontSize: '23px'
			},
		},
	}
});

export default theme;