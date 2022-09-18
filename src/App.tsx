
import * as React from 'react';

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from './Theme'
import { LoadingProgress } from './Components/Common/LoadingProgress';
import { LayoutResolver } from "./Components/Layout/LayoutResolver";
import { ModalResolver, ModalType } from './Components/Layout/ModalResolver';
import { useDispatch } from 'react-redux';
import { setModalType } from './Redux/rootSlice';

function App() {
	const dispatch = useDispatch();

	const renderWelcomeModal = () => {
		setTimeout(() => {
			dispatch(setModalType(ModalType.Welcome))
		}, 2000)
	}

	const c = ''

	React.useEffect(() => {
		const welcomeModalDismissed = localStorage.getItem('welcomeModalDismissed');

		if (!welcomeModalDismissed) {
			renderWelcomeModal();
		}
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<LayoutResolver />
				<ModalResolver />
			</ThemeProvider>
		</>
	);
}

export default App;
