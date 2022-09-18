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
import { ToolButton } from '../../Buttons';
import { ColorPalette } from '../../ColorPalette';
import { useAppSelector } from '../../../../Redux/store';

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

export const TabletCanvasTools: React.FC<IProps> = ({
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
            backgroundColor: '#0e0e0e',
            height: '100%',
            width: '100%',
            padding: (theme) => theme.spacing(2, 2, 3, 2),
            overflowY: 'auto',
            boxSizing: 'border-box',
        }}
        >
            <Grid container alignItems={'flex-start'} justifyContent={'center'} sx={{ flexFlow: 'row', height: 'fit-content' }}>
                <Grid container item sm={6} justifyContent={'center'} alignItems={'center'} sx={{ minHeight: 310 }}>
                    <div>
                        <Grid container direction={"row"} spacing={3} justifyContent={"center"} style={{ marginBottom: '16px', width: 'fit-content' }}>
                            <Grid item>
                                <IconButton sx={{ color: 'white' }} onClick={handleDraw} title={"Draw"}>
                                    <CreateIcon color={tool === 'draw' ? 'primary' : 'inherit'} fontSize={'large'} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: 'white' }} onClick={handleErase} title={"Erase"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="35px" height="35px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path fill={tool === 'erase' ? '#5141f1' : 'white'} d="m16.24 3.56l4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.008 4.008 0 0 1-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0M4.22 15.58l3.54 3.53c.78.79 2.04.79 2.83 0l3.53-3.53l-4.95-4.95l-4.95 4.95Z" />
                                    </svg>
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: 'white' }} onClick={handleClear} title={'Clear Canvas'}>
                                    <DeleteForeverIcon fontSize={'large'} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} spacing={3} justifyContent={"center"} style={{ marginBottom: '16px', width: 'fit-content' }}>
                            <Grid item>
                                <IconButton sx={{ color: 'white' }} onClick={handleUndo} title={'Undo'}>
                                    <UndoIcon fontSize={'large'} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: 'white' }} onClick={handleRedo} title={'Redo'}>
                                    <RedoIcon fontSize={'large'} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: 'white' }} onClick={handleObjSelection} title={"Select Items"} >
                                    <SwipeVerticalIcon color={tool === 'select' ? 'primary' : 'inherit'} fontSize={'large'} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container direction={"row"} spacing={3} justifyContent={"center"} style={{ marginBottom: '16px', width: 'fit-content' }}>
                            <Grid item>
                                <IconButton sx={{ color: 'white' }} onClick={handleLine} title={"Line"}>
                                    <ShowChartIcon color={tool === 'line' ? 'primary' : 'inherit'} fontSize={'large'} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: 'white' }} onClick={handleCircle} title={'Circle'}>
                                    {shapeFill ? <Brightness1RoundedIcon color={tool === 'circle' ? 'primary' : 'inherit'} fontSize={'large'} /> : <Brightness1OutlinedIcon color={tool === 'circle' ? 'primary' : 'inherit'} fontSize={'large'} />}
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ color: 'white' }} onClick={handleSquare} title={'Square/Rect'}>
                                    {shapeFill ? <SquareIcon color={tool === 'square' ? 'primary' : 'inherit'} fontSize={'large'} /> : <SquareOutlinedIcon color={tool === 'square' ? 'primary' : 'inherit'} fontSize={'large'} />}
                                </IconButton>
                            </Grid>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0', color: 'white' }}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={handleShapeFill} sx={shapeFill ? {} : { '& .MuiSvgIcon-root': { fill: 'white' } }} />} label="Fill Shapes" />
                            </FormGroup>
                        </div>
                    </div>
                </Grid>
                <Grid container item sm={6} justifyContent={'center'}>
                    <ColorPicker color={brushColor} />
                    <Grid item xs={10}>
                        <ColorPalette />
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

