import React from "react";
import { useDispatch } from "react-redux";
import { Button, Dialog, DialogContent, Typography, Grid, useMediaQuery, Theme } from "@mui/material";
import { defaultColorPalette, setBrushWidth, setColorPallette, setDrawerOpen, setModalType } from "../../../../Redux/rootSlice";
import { Spacer } from "../../../Common/Spacer";

interface IProps {
    canvasRef: React.MutableRefObject<fabric.Canvas | null>;
}
export const ClearAllModal: React.FC<IProps> = ({ canvasRef }) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setModalType(undefined))
    };

    const handleClear = () => {
        if (!canvasRef.current) return;

        canvasRef.current.getObjects().forEach(o => {
            canvasRef.current?.remove(o);
        })

        dispatch(setColorPallette(defaultColorPalette))
        localStorage.removeItem('canvasData');
        localStorage.removeItem('colorsData');
        localStorage.removeItem('brushColor');
        localStorage.removeItem('brushWidth');
        handleClose();
        dispatch(setDrawerOpen(false));
    }

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
                        maxWidth: 400,
                        height: 'fit-content',
                        border: (theme) => `solid 4px ${theme.palette.primary.main}`,
                        borderRadius: 1.5
                    }
                }}
            >
                <DialogContent dividers sx={{ backgroundColor: (theme) => theme.palette.primary.dark }}>
                    <Typography variant={'h3'} sx={{ color: 'white' }} textAlign={isMobile ? 'center' : 'left'}>
                        Are you sure you want to reset the canvas?
                    </Typography>
                    <Spacer vertical spacing={2} />
                    <Typography variant={'body1'} sx={{ color: 'white' }} textAlign={'center'}>
                        This will completely reset the canvas, color pallette and save state
                    </Typography>
                    <Spacer vertical spacing={isMobile ? 2 : 4} />
                    <Grid container direction={'row'} justifyContent={'space-around'} alignItems={'center'}>
                        <Button variant={'contained'} color={'secondary'} disableElevation onClick={handleClose}
                            sx={{ width: 160, marginBottom: 1, borderRadius: 2, height: 56, border: 'solid 4px white' }}
                        >
                            <Typography variant={'body2'}>
                                Cancel
                            </Typography>
                        </Button>
                        <Button variant={'contained'} color={'secondary'} disableElevation onClick={handleClear}
                            sx={{ width: 160, marginBottom: 1, borderRadius: 2, height: 56, border: 'solid 4px white' }}
                        >
                            <Typography variant={'body2'}>
                                Reset
                            </Typography>
                        </Button>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}


