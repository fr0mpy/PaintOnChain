
import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/system";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setIsDrawingMode, setTool, setBrushColor, setSVG, setModalType, setObjectSelection, setBrushWidth, setShapeFill } from "../../../Redux/rootSlice";
import { useAppSelector } from "../../../Redux/store";
import { ModalType } from "../../Layout/ModalResolver";
import { DesktopCanvasTools } from './DesktopTools'
import { MobileCanvasTools } from "./MobileTools";
import { TabletCanvasTools } from "./TabletTools";

interface IProps {
	canvasRef: React.MutableRefObject<fabric.Canvas | null>,
	objRef: React.MutableRefObject<fabric.Line | fabric.Triangle | fabric.Circle | fabric.Rect | null>,
	objOriginRef: React.MutableRefObject<{ x: number, y: number }>,
	mousedownRef: React.MutableRefObject<boolean>;
	drawingObjRef: React.MutableRefObject<boolean>;
}

export const CanvasTools: React.FC<IProps> = ({ canvasRef, objOriginRef, objRef, mousedownRef, drawingObjRef }) => {

	const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'lg'));
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	const dispatch = useDispatch();

	const {
		tool,
		brushColor,
		objectSelection,
	} = useAppSelector(state => {
		return {
			tool: state.rootReducer.tool,
			brushColor: state.rootReducer.brushColor,
			objectSelection: state.rootReducer.objectSelection,
		}
	});

	const handleDraw = () => {

		if (!canvasRef.current) return;
		drawingObjRef.current = false;
		if (tool === 'draw') {
			dispatch(setIsDrawingMode(false));
			dispatch(setTool(''));
		}

		else {
			dispatch(setIsDrawingMode(true));
			objRef.current = null;
			dispatch(setBrushColor(brushColor));
			dispatch(setTool('draw'));
		}
	};

	const handleClear = () => {

		const isConfirmed = window.confirm('Are you sure? This will completely reset the canvas, color pallette and save state');

		if (!canvasRef.current || !isConfirmed) return;

		else if (isConfirmed) {
			canvasRef.current.getObjects().forEach(o => {
				canvasRef.current?.remove(o);
			})

			localStorage.removeItem('canvasData');
			localStorage.removeItem('colorsData');
			localStorage.removeItem('brushColor');
		}
	};

	const handleErase = () => {
		if (!canvasRef.current) return;
		drawingObjRef.current = false;
		if (tool === 'erase') {

			canvasRef.current.isDrawingMode = false;
			dispatch(setIsDrawingMode)
			dispatch(setTool(''));
			setBrushColor(brushColor);
		}

		else {
			canvasRef.current.isDrawingMode = true;
			dispatch(setTool('erase'));
		}
	};

	const handleUndo = () => {
		if (!canvasRef.current) return;
		(canvasRef.current as any).undo();
	};

	const handleRedo = () => {
		if (!canvasRef.current) return;
		(canvasRef.current as any).redo();
	};

	const handleToSVG = () => {
		if (!canvasRef.current) return;
		const trimmedSVG = canvasRef.current.toSVG().split('>').slice(2, canvasRef.current.toSVG().split('>').length).join('>');
		dispatch(setSVG(trimmedSVG));
	};

	const handleMint = () => {
		handleToSVG();
		dispatch(setModalType(ModalType.Mint));
	};

	const handleLine = () => {
		dispatch(setObjectSelection(false));
		if (!canvasRef.current) return;
		canvasRef.current.isDrawingMode = false;

		if (tool === 'line') {
			dispatch(setTool(''))
			drawingObjRef.current = false;

		}

		else {
			dispatch(setBrushColor(brushColor));
			dispatch(setTool('line'));
			drawingObjRef.current = true;
		}
	};

	const handleCircle = () => {
		dispatch(setObjectSelection(false));
		if (!canvasRef.current) return;
		canvasRef.current.isDrawingMode = false;

		if (tool === 'circle') {
			dispatch(setTool(''));
			drawingObjRef.current = false;
		}

		else {
			dispatch(setBrushColor(brushColor));
			dispatch(setTool('circle'));
			drawingObjRef.current = true;
		}
	}

	const handleSquare = () => {
		dispatch(setObjectSelection(false));
		if (!canvasRef.current) return;
		canvasRef.current.isDrawingMode = false;

		if (tool === 'square') {
			dispatch(setTool(''));
			drawingObjRef.current = false;
		}

		else {
			dispatch(setBrushColor(brushColor));
			dispatch(setTool('square'));
			drawingObjRef.current = true;
		}
	};

	const handleObjSelection = () => {
		if (!canvasRef.current) return;
		canvasRef.current.isDrawingMode = false;
		drawingObjRef.current = false;

		if (objectSelection) {
			dispatch(setObjectSelection(false));
			dispatch(setTool(''));
		} else {
			dispatch(setTool('select'));
			dispatch(setObjectSelection(true));
		}
	};

	const handleBrushWidth = (event: Event, value: number | number[]) => {
		dispatch(setBrushWidth(value as number));
		localStorage.setItem('brushWidth', value.toString());
	};

	const handleShapeFill = (event: ChangeEvent<HTMLInputElement>, fill: boolean) => {
		dispatch(setShapeFill(fill));
	};

	return (
		<>
			{isDesktop
				? <DesktopCanvasTools
					handleDraw={handleDraw}
					handleClear={handleClear}
					handleErase={handleErase}
					handleUndo={handleUndo}
					handleRedo={handleRedo}
					handleToSVG={handleToSVG}
					handleMint={handleMint}
					handleLine={handleLine}
					handleCircle={handleCircle}
					handleSquare={handleSquare}
					handleObjSelection={handleObjSelection}
					handleBrushWidth={handleBrushWidth}
					handleShapeFill={handleShapeFill}
				/>
				: null}
			{isTablet
				? <TabletCanvasTools
					handleDraw={handleDraw}
					handleClear={handleClear}
					handleErase={handleErase}
					handleUndo={handleUndo}
					handleRedo={handleRedo}
					handleToSVG={handleToSVG}
					handleMint={handleMint}
					handleLine={handleLine}
					handleCircle={handleCircle}
					handleSquare={handleSquare}
					handleObjSelection={handleObjSelection}
					handleBrushWidth={handleBrushWidth}
					handleShapeFill={handleShapeFill}
				/>
				: null}
			{isMobile
				? <MobileCanvasTools
					handleDraw={handleDraw}
					handleClear={handleClear}
					handleErase={handleErase}
					handleUndo={handleUndo}
					handleRedo={handleRedo}
					handleToSVG={handleToSVG}
					handleMint={handleMint}
					handleLine={handleLine}
					handleCircle={handleCircle}
					handleSquare={handleSquare}
					handleObjSelection={handleObjSelection}
					handleBrushWidth={handleBrushWidth}
					handleShapeFill={handleShapeFill}
				/>
				: null}
		</>
	)
}