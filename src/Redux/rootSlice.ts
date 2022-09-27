import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react';
import { Sections } from '../Components/Common/Navigation/Headings';
import { ModalType } from '../Components/Layout/ModalResolver';

export interface ISnackBar {
	message: string;
	duration?: number;
	action?: React.ReactNode;
};

export interface IAppState {
	value: number;
	height: number;
	width: number;
	SVG: string;
	walletAddress: string;
	contractAddress: string;
	tool: string;
	brushColor: string;
	isDrawingMode: boolean;
	brushWidth: number;
	shapeFill: boolean;
	objectSelection: boolean;
	colorPallette: Array<string>;
	currentColorIndex: number;
	currentTabIndex: number;
	drawerOpen: boolean;
	modal?: ModalType;
	section: Sections;
	snackbar?: ISnackBar;
}

export const defaultColorPalette = ['black', ...Array(14).fill('white')];

export const initialState: IAppState = {
	value: 0,
	height: 22,
	width: 22,
	SVG: '',
	walletAddress: '',
	contractAddress: '0x412010E39d2825Fb899391c73004d1217fa92BF5',
	tool: 'draw',
	brushColor: 'black',
	isDrawingMode: true,
	brushWidth: 14,
	shapeFill: false,
	objectSelection: false,
	colorPallette: defaultColorPalette,
	currentColorIndex: 0,
	currentTabIndex: 0,
	drawerOpen: false,
	modal: undefined,
	section: 0,
	snackbar: { message: '' }
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setSVG: (state, action: PayloadAction<string>) => {
			state.SVG = action.payload;
		},
		updateWalletAddress: (state, action: PayloadAction<string>) => {
			state.walletAddress = action.payload;
		},
		setTool: (state, action: PayloadAction<string>) => {
			state.tool = action.payload;
		},
		setBrushColor: (state, action: PayloadAction<string>) => {
			state.brushColor = action.payload;
		},
		setIsDrawingMode: (state, action: PayloadAction<boolean>) => {
			state.isDrawingMode = action.payload;
		},
		setBrushWidth: (state, action: PayloadAction<number>) => {
			state.brushWidth = action.payload;
		},
		setShapeFill: (state, action: PayloadAction<boolean>) => {
			state.shapeFill = action.payload;
		},
		setObjectSelection: (state, action: PayloadAction<boolean>) => {
			state.objectSelection = action.payload;
		},
		setColorPallette: (state, action: PayloadAction<Array<string>>) => {
			state.colorPallette = action.payload;
		},
		setCurrentColorIndex: (state, action: PayloadAction<number>) => {
			state.currentColorIndex = action.payload;
		},
		setCurrentTabIndex: (state, action: PayloadAction<number>) => {
			state.currentTabIndex = action.payload;
		},
		setDrawerOpen: (state, action: PayloadAction<boolean>) => {
			state.drawerOpen = action.payload;
		},
		setModalType: (state, action: PayloadAction<ModalType | undefined>) => {
			state.modal = action.payload;
		},
		setSection: (state, action: PayloadAction<Sections>) => {
			state.section = action.payload;
		},
		setSnackbar: (state, action: PayloadAction<ISnackBar>) => {
			state.snackbar = action.payload;
		}
	},
})

export const {
	setSVG,
	updateWalletAddress,
	setTool,
	setBrushColor,
	setIsDrawingMode,
	setBrushWidth,
	setShapeFill,
	setObjectSelection,
	setColorPallette,
	setCurrentColorIndex,
	setCurrentTabIndex,
	setDrawerOpen,
	setModalType,
	setSection,
	setSnackbar
} = appSlice.actions;

export default appSlice.reducer;