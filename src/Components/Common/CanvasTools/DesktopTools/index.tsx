import 'fabric-history';
import { ColorPicker } from "../../ColorPicker";
import { Checkbox, FormControlLabel, FormGroup, Grid, IconButton, Slider } from "@mui/material";
import React, { ChangeEvent } from "react";
import CreateIcon from '@mui/icons-material/Create';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import SquareIcon from '@mui/icons-material/Square';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { ConnectWalletAndOpenMintingButton } from '../../Buttons';
import { ColorPalette } from '../../ColorPalette';
import { Spacer } from "../../Spacer";
import { useAppSelector } from '../../../../Redux/store';
import { StyledToolTip } from '../../StyledToolTip'

interface IProps {
    handleDraw(): void;
    handleClear(): void;
    handleErase(): void;
    handleUndo(): void;
    handleRedo(): void;
    handleToSVG(): void;
    handleMint(): void;
    handleLine(): void;
    handleCircle(): void;
    handleSquare(): void;
    handleObjSelection(): void;
    handleBrushWidth(event: Event, value: number | number[]): void;
    handleShapeFill(event: ChangeEvent<HTMLInputElement>, value: boolean): void;
}

export const DesktopCanvasTools: React.FC<IProps> = ({
    handleDraw,
    handleClear,
    handleErase,
    handleUndo,
    handleRedo,
    handleToSVG,
    handleMint,
    handleLine,
    handleCircle,
    handleSquare,
    handleObjSelection,
    handleBrushWidth,
    handleShapeFill
}) => {
    const {
        tool,
        brushColor,
        brushWidth,
        objectSelection,
        shapeFill,
    } = useAppSelector(state => {
        return {
            tool: state.rootReducer.tool,
            brushColor: state.rootReducer.brushColor,
            brushWidth: state.rootReducer.brushWidth,
            objectSelection: state.rootReducer.objectSelection,
            shapeFill: state.rootReducer.shapeFill,
            colorPallette: state.rootReducer.colorPallette,
            currentColorIndex: state.rootReducer.currentColorIndex
        }
    });
    return (
        <Grid sx={{
            backgroundColor: 'black',
            height: '100vh',
            width: '100%',
            color: 'white',
            padding: '16px 16px 0 16px',
            overflowY: 'auto',
            boxSizing: 'border-box'
        }}
        >
            <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'flex-end' }}>
                <ConnectWalletAndOpenMintingButton handleMint={handleMint} />
            </div>
            <Grid container>
                <Spacer vertical spacing={7} style={{ width: '100%' }} />
                <Grid container alignItems={'flex-start'} justifyContent={'center'} spacing={6} sx={{ flexFlow: 'column' }}>
                    <Grid container item lg={12}>
                        <Grid container direction={"row"} spacing={3} justifyContent={"center"}>
                            <Grid item>
                                <StyledToolTip title={'Draw'} arrow>
                                    <IconButton sx={{ color: 'white' }} onClick={handleDraw} >
                                        <CreateIcon color={tool === 'draw' ? 'primary' : 'inherit'} fontSize={'large'} />
                                    </IconButton>
                                </StyledToolTip>
                            </Grid>
                            <Grid item>
                                <StyledToolTip title={'Erase'} arrow >
                                    <IconButton sx={{ color: 'white' }} onClick={handleErase}>
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="35px" height="35px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <path fill={tool === 'erase' ? '#5141f1' : 'white'} d="m16.24 3.56l4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.008 4.008 0 0 1-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0M4.22 15.58l3.54 3.53c.78.79 2.04.79 2.83 0l3.53-3.53l-4.95-4.95l-4.95 4.95Z" />
                                        </svg>
                                    </IconButton>
                                </StyledToolTip>
                            </Grid>
                            <Grid item>
                                <StyledToolTip title={'Clear Canvas'} arrow >
                                    <IconButton sx={{ color: 'white' }} onClick={handleClear}>
                                        <DeleteForeverIcon fontSize={'large'} />
                                    </IconButton>
                                </StyledToolTip>
                            </Grid>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '8px auto', flexFlow: 'column' }}>
                            <Slider aria-label="brush width" value={brushWidth} onChange={handleBrushWidth} valueLabelDisplay="auto" />
                        </div>
                        <Grid container direction={"row"} spacing={3} justifyContent={"center"} style={{ marginBottom: '8px' }}>
                            <Grid item>
                                <StyledToolTip title={'Undo'} arrow >
                                    <IconButton sx={{ color: 'white' }} onClick={handleUndo}>
                                        <UndoIcon fontSize={'large'} />
                                    </IconButton>
                                </StyledToolTip>
                            </Grid>
                            <Grid item>
                                <StyledToolTip title={'Redo'} arrow >
                                    <IconButton sx={{ color: 'white' }} onClick={handleRedo}>
                                        <RedoIcon fontSize={'large'} />
                                    </IconButton>
                                </StyledToolTip>
                            </Grid>
                            <Grid item>
                                <StyledToolTip title={"Select Items"} arrow >
                                    <IconButton sx={{ color: 'white' }} onClick={handleObjSelection}>
                                        <SwipeVerticalIcon color={tool === 'select' ? 'primary' : 'inherit'} fontSize={'large'} />
                                    </IconButton>
                                </StyledToolTip>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} spacing={3} justifyContent={"center"}>
                            <Grid item>
                                <StyledToolTip title={"Line"} arrow >
                                    <IconButton sx={{ color: 'white' }} onClick={handleLine}>
                                        <ShowChartIcon color={tool === 'line' ? 'primary' : 'inherit'} fontSize={'large'} />
                                    </IconButton>
                                </StyledToolTip>
                            </Grid>
                            <Grid item>
                                <StyledToolTip title={'Circle'} arrow >
                                    <IconButton sx={{ color: 'white' }} onClick={handleCircle}>
                                        {shapeFill ? <Brightness1RoundedIcon color={tool === 'circle' ? 'primary' : 'inherit'} fontSize={'large'} /> : <Brightness1OutlinedIcon color={tool === 'circle' ? 'primary' : 'inherit'} fontSize={'large'} />}
                                    </IconButton>
                                </StyledToolTip>
                            </Grid>
                            <Grid item>
                                <StyledToolTip title={'Square/Rect'} arrow >
                                    <IconButton sx={{ color: 'white' }} onClick={handleSquare}>
                                        {shapeFill ? <SquareIcon color={tool === 'square' ? 'primary' : 'inherit'} fontSize={'large'} /> : <SquareOutlinedIcon color={tool === 'square' ? 'primary' : 'inherit'} fontSize={'large'} />}
                                    </IconButton>
                                </StyledToolTip>
                            </Grid>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0', width: '100%' }}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={handleShapeFill} sx={shapeFill ? {} : { '& .MuiSvgIcon-root': { fill: 'white' } }} />} label="Fill Shapes" />
                            </FormGroup>
                        </div>
                    </Grid>
                </Grid>
                <Spacer vertical spacing={4} style={{ width: '100%' }} />
                <Grid container justifyContent={'center'}>
                    <ColorPicker color={brushColor} />
                    <ColorPalette />
                </Grid>
                <Spacer vertical spacing={6} />
            </Grid>
        </Grid >
    )
}

