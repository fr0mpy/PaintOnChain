
import * as React from 'react';
import Grid from "@mui/material/Grid/Grid";
import { ConnectWalletAndOpenMintingButton } from '../../Common/Buttons';
import { useDispatch } from 'react-redux';
import { setSVG, setModalType } from '../../../Redux/rootSlice';
import Typography from '@mui/material/Typography/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { SocialLinks } from '../../Common/SocialLinks';
import { ModalType } from '../ModalResolver';
import { Headings } from '../../Common/Navigation/Headings';
import { MenuSections } from '../../Common/MenuSections';
import IconButton from '@mui/material/IconButton/IconButton';
import { DrawerComponent } from '../../Common/Drawer';
import Box from '@mui/material/Box/Box';

interface IProps {
	canvas?: React.ReactNode;
	tools?: React.ReactNode;
	canvasRef: React.RefObject<fabric.Canvas>;
};


const TabletLayout: React.FC<IProps> = ({ canvasRef, canvas, tools }) => {
	const dispatch = useDispatch();
	const handleToSVG = () => {
		if (!canvasRef.current) return;
		const trimmedSVG = canvasRef.current.toSVG().split('>').slice(2, canvasRef.current.toSVG().split('>').length).join('>');
		dispatch(setSVG(trimmedSVG));
	};

	const handleMint = () => {
		handleToSVG();
		dispatch(setModalType(ModalType.Mint));
	};

	const openMenu = () => dispatch(setModalType(ModalType.Menu));
	return (
		<div style={{ height: '100%', color: 'white', display: 'flex', flexFlow: 'column' }}>
			<Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ backgroundColor: 'black', width: '100%', height: 96, padding: (theme) => theme.spacing(1.5) }}>
				<Grid container direction={'row'} sx={{ width: 'fit-content' }}>
					<IconButton sx={{ padding: 0, marginRight: 4 }} onClick={openMenu}>
						<MenuIcon sx={{ color: 'white', height: 46, width: 46 }} />
					</IconButton>
					<Typography variant={'h4'} textAlign={'center'} sx={{ height: 'fit-content' }}>
						PAINT ON CHAIN
					</Typography>
				</Grid>
				<ConnectWalletAndOpenMintingButton handleMint={handleMint} />
			</Grid>
			<Grid container direction={'row'} sx={{ height: '100%' }}>
				{canvas}
			</Grid>
			<DrawerComponent anchor={'bottom'}>
				{tools}
			</DrawerComponent>
		</div>
	)
}

export default TabletLayout;
