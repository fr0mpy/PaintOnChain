import React from "react";
import { useDispatch } from "react-redux";
import { Button, Dialog, DialogContent, Typography, Checkbox, FormControlLabel, FormGroup, Grid, ListItem, ListItemText, ListItemIcon, useMediaQuery, Theme } from "@mui/material";
import { setModalType } from "../../../../Redux/rootSlice";
import { Spacer } from "../../../Common/Spacer";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CircleIcon from '@mui/icons-material/Circle';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const WelcomeModal = () => {
    const [dontShowAgain, setDontShowAgain] = React.useState<boolean>(false);
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setModalType(undefined))

        if (dontShowAgain) {
            localStorage.setItem('welcomeModalDismissed', 'true')
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, show: boolean) => {
        setDontShowAgain(show);
    };

    return (
        <>
            <Dialog
                onClose={handleClose}
                open
                PaperProps={{
                    sx: {
                        margin: { xs: 1, sm: 2 },
                        backgroundColor: (theme) => theme.palette.primary.light,
                        width: '100%',
                        maxWidth: '500px',
                        height: 'fit-content',
                        border: (theme) => `solid 4px ${theme.palette.primary.main}`,
                        borderRadius: 1.5
                    }
                }}
                TransitionComponent={Transition}
            >
                <DialogContent dividers sx={{ backgroundColor: (theme) => theme.palette.primary.dark }}>
                    <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ color: 'white' }}>
                        Hello! And welcome to Paint On Chain ✌️
                    </Typography>
                    <Spacer vertical spacing={isMobile ? 2 : 4} />
                    <ListItem sx={{ color: 'white', padding: 0, '& .MuiListItemIcon-root': { minWidth: 32, alignSelf: 'flex-start', position: 'relative', top: 7 } }}>
                        <ListItemIcon>
                            <CircleIcon sx={{ height: 18, width: 18, fill: (theme) => theme.palette.primary.light, marginRight: 1 }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Connect your wallet"
                        />
                    </ListItem>
                    <ListItem sx={{ color: 'white', padding: 0, '& .MuiListItemIcon-root': { minWidth: 32, alignSelf: 'flex-start', position: 'relative', top: 7 } }}>
                        <ListItemIcon>
                            <CircleIcon sx={{ height: 18, width: 18, fill: (theme) => theme.palette.primary.light, marginRight: 1 }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Paint your NFT - using a range of tools and colors"
                        />
                    </ListItem>
                    <ListItem sx={{ color: 'white', padding: 0, '& .MuiListItemIcon-root': { minWidth: 32, alignSelf: 'flex-start', position: 'relative', top: 7 } }}>
                        <ListItemIcon>
                            <CircleIcon sx={{ height: 18, width: 18, fill: (theme) => theme.palette.primary.light, marginRight: 1 }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Add your custom metadata - name, description & traits"
                        />
                    </ListItem>
                    <ListItem sx={{ color: 'white', padding: 0, '& .MuiListItemIcon-root': { minWidth: 32, alignSelf: 'flex-start', position: 'relative', top: 7 } }}>
                        <ListItemIcon>
                            <CircleIcon sx={{ height: 18, width: 18, fill: (theme) => theme.palette.primary.light, marginRight: 1 }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Mint your token to your or a friends wallet, with the image data stored on the Ethereum Blockchain!"
                        />
                    </ListItem>
                    <Spacer vertical spacing={2} />
                    <Typography variant={'body1'} sx={{ fontSize: 12, color: 'white' }} textAlign={'center'}>
                        This is the beta version of the project. If there is anything you see which can be improved, please reach out.
                    </Typography>
                    <Spacer vertical spacing={isMobile ? 2 : 4} />
                    <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Button variant={'contained'} color={'secondary'} disableElevation onClick={handleClose} sx={{ width: 140, height: 48, border: 'solid 4px white' }}>
                            <Typography variant={'body1'}>
                                Okay, cool
                            </Typography>
                        </Button>
                        <Spacer vertical spacing={2} />
                        <FormGroup>
                            <FormControlLabel sx={{ color: 'white' }} control={<Checkbox onChange={handleChange} sx={{ '& .MuiSvgIcon-root': { fill: 'white' } }} />} label="Don't show me this again" />
                        </FormGroup>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}



