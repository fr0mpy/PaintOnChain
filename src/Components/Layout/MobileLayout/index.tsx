
import * as React from 'react';
import Grid from "@mui/material/Grid/Grid";
import { ConnectWalletAndOpenMintingButton } from '../../Common/Buttons';
import { useDispatch } from 'react-redux';
import { setSVG, setModalType } from '../../../Redux/rootSlice';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { DrawerComponent } from '../../Common/Drawer';
import { ModalType } from '../ModalResolver';

interface IProps {
    canvas: React.ReactNode;
    canvasTools: React.ReactNode;
    canvasRef: React.RefObject<fabric.Canvas>;
};


const MobileLayout: React.FC<IProps> = ({ canvasRef, canvas, canvasTools }) => {
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

    return <div style={{ height: '100%', display: 'flex', flexFlow: 'column' }}>
        <Grid container sx={{ width: '100%', backgroundColor: 'black', height: 'fit-content', padding: 1.5, position: 'relative' }}>
            <Grid container direction={'row'} justifyContent={'space-between'} >
                <IconButton sx={{ padding: 0, marginRight: 1 }} onClick={openMenu}>
                    <MenuIcon sx={{ color: 'white', height: 46, width: 46 }} />
                </IconButton>
                <ConnectWalletAndOpenMintingButton mobileVersion handleMint={handleMint} />
            </Grid>
        </Grid>
        {canvas}
        <DrawerComponent anchor={'bottom'} children={canvasTools} />
    </div >
}

export default MobileLayout;
