import 'fabric-history';
import { Checkbox, FormControlLabel, FormGroup, Grid, IconButton, Input, Slider, TextField, Typography } from "@mui/material";
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

import { ColorPalette } from '../../ColorPalette';
import { ColorPicker } from "../../ColorPicker";
import { TabsComponent } from "../../TabPanel";
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
    handleBrushWidthInput(event: React.ChangeEvent<HTMLInputElement>): void;
    handleInputBlur(): void;
    handleShapeFill(event: ChangeEvent<HTMLInputElement>, checked: boolean): void;
}

export const MobileCanvasTools: React.FC<IProps> = ({
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
    handleShapeFill,
    handleBrushWidthInput,
    handleInputBlur
}) => {

    const {
        tool,
        brushWidth,
        shapeFill,
        colorPallette,
        currentColorIndex,
        brushColor
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
        <TabsComponent tabs={
            [
                {
                    tabLabel: 'Tools', tabItem: <Grid
                        container
                        direction={'row'}
                        justifyContent={'center'}
                        sx={{
                            backgroundColor: 'background-color: #222222',
                            height: 'fit-content',
                            width: '100%',
                            padding: '8px 8px 0 8px',
                            overflowY: 'auto',
                            boxSizing: 'border-box',
                            flexFlow: 'row'
                        }}
                    >
                        <Grid container direction={'row'} justifyContent={'space-around'} alignItems={'center'} sx={{ width: 230, marg4nTop: 2, color: 'white' }}>
                            <Grid container direction={"row"} spacing={4} justifyContent={"center"} style={{ marginBottom: '16px', width: 'fit-content' }}>
                                <Grid item>
                                    <IconButton sx={{ color: 'white' }} onClick={handleDraw} title={"Draw"}>
                                        <CreateIcon color={tool === 'draw' ? 'primary' : 'inherit'} fontSize={'large'} />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton sx={{ color: 'white' }} onClick={handleErase} title={"Erase"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="35px" height="35px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                            <path fill={tool === 'erase' ? '#e579b9' : 'white'} d="m16.24 3.56l4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.008 4.008 0 0 1-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0M4.22 15.58l3.54 3.53c.78.79 2.04.79 2.83 0l3.53-3.53l-4.95-4.95l-4.95 4.95Z" />
                                        </svg>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton sx={{ color: 'white' }} onClick={handleClear} title={'Clear Canvas'}>
                                        <DeleteForeverIcon fontSize={'large'} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container direction={"row"} spacing={4} justifyContent={"center"} style={{ marginBottom: '16px', width: 'fit-content' }}>
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
                            <Grid container direction={"row"} spacing={4} justifyContent={"center"} style={{ marginBottom: '16px', width: 'fit-content' }}>
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
                            <div style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '8px auto', flexFlow: 'row'
                            }}>
                                <Slider aria-label="brush width" value={brushWidth} onChange={handleBrushWidth} sx={{ width: 140, marginRight: 2 }} />
                                <Input
                                    value={brushWidth}
                                    size="small"
                                    onChange={handleBrushWidthInput}
                                    onBlur={handleInputBlur}
                                    inputProps={{
                                        step: 1,
                                        min: 1,
                                        max: 100,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider'
                                    }}
                                    sx={{
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        '& input': {
                                            padding: 0,
                                            borderBottom: 'none',
                                        },
                                        '&: after': {
                                            borderBottom: 'none'
                                        },
                                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                            display: "none",
                                        },
                                        "& input[type=number]": {
                                            MozAppearance: "textfield",
                                        },
                                        padding: (theme) => theme.spacing(.5, 0, .5, .5),
                                        height: 34,
                                        width: 34
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0', width: 'fit-content' }}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox onChange={handleShapeFill} sx={shapeFill ? {} : { '& .MuiSvgIcon-root': { fill: 'white' } }} />} label="Fill Shapes" />
                                </FormGroup>
                            </div>
                        </Grid>
                    </Grid >
                },
                { tabLabel: 'Colors', tabItem: <div style={{ padding: '0 8px 8px 8px' }}><ColorPicker color={brushColor} /><ColorPalette /></div> }
            ]
        } />

    )
}

