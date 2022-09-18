import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

export const NavContainer = styled(Grid)(({ theme }) => ({
	height: '100vh',
	backgroundColor: 'black',
	color: 'white',
	boxSizing: 'border-box',
	display: 'flex',
	flexFlow: 'column',
	fontFamily: 'Roboto Slab, serif',
	padding: '16px',
	transition: 'background-color .4s linear',
	zIndex: 1,
	[theme.breakpoints.up('lg')]: {
		maxWidth: 400
	}
}));

export const Text = styled(Grid)(({ theme }) => ({
	margin: theme.spacing(3, 0)
}));

export const SectionContainer = styled(Grid)(({ theme }) => ({
	flex: 1,
	height: '100%',
	overflowY: 'auto',
}))

export const Section = styled(Grid)(({ theme }) => ({
	textAlign: 'center',
	boxSizing: 'border-box',
	display: 'flex',
	flexFlow: 'column',
	justifyContent: 'center',
	height: 'fit-content'
}))

