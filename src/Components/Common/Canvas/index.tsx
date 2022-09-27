/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'
import { fabric } from 'fabric';
import { useDispatch } from 'react-redux';
import { setBrushColor, setBrushWidth, setColorPallette } from '../../../Redux/rootSlice';
import Grid from '@mui/material/Grid/Grid';
import { useAppSelector } from '../../../Redux/store';
import Typography from '@mui/material/Typography/Typography';

interface IProps {
	canvasRef: React.MutableRefObject<fabric.Canvas | null>,
	objRef: React.MutableRefObject<fabric.Line | fabric.Triangle | fabric.Circle | fabric.Rect | null>,
	objOriginRef: React.MutableRefObject<{ x: number, y: number }>,
	mousedownRef: React.MutableRefObject<boolean>;
	drawingObjRef: React.MutableRefObject<boolean>;
}

const Canvas: React.FC<IProps> = ({ canvasRef, drawingObjRef, mousedownRef, objOriginRef, objRef }) => {
	const dispatch = useDispatch();
	const erasedItems = React.useRef<Array<any>>([]);
	const [{ canvasHeight, canvasWidth }, setCanvasSize] = React.useState<{ canvasHeight: number, canvasWidth: number }>({ canvasHeight: 0, canvasWidth: 0 });
	const [loaded, setLoaded] = React.useState<boolean>(false);

	const calculateCanvasSize = () => {

		const container = document.getElementById('canvasContainer');
		const canvasContainerHeight = (Math.max(container?.clientHeight || 0));
		const canvasContainerWidth = (Math.max(container?.clientWidth || 0));

		return {
			canvasHeight: canvasContainerHeight,
			canvasWidth: canvasContainerWidth
		};
	}

	const {
		tool,
		isDrawingMode,
		brushWidth,
		objectSelection,
		brushColor,
		shapeFill,
		colorPallette,
	} = useAppSelector(state => {
		return {
			tool: state.rootReducer.tool,
			isDrawingMode: state.rootReducer.isDrawingMode,
			brushWidth: state.rootReducer.brushWidth,
			objectSelection: state.rootReducer.objectSelection,
			brushColor: state.rootReducer.brushColor,
			shapeFill: state.rootReducer.shapeFill,
			colorPallette: state.rootReducer.colorPallette,
		}
	});

	React.useEffect(() => {
		if (!canvasHeight || !canvasWidth) {

			setCanvasSize(calculateCanvasSize());
		}
	})

	React.useEffect(() => {
		if (canvasHeight && canvasWidth) {

			setCanvas();
			if (canvasRef.current && !loaded) {
				canvasRef.current.isDrawingMode = isDrawingMode;
				handleLoadCanvas();
				handleLoadColors()
				handleLoadBrushColor();
				handleLoadBrushWidth();
				setLoaded(true);

			}

		}

	}, [
		canvasRef,
		tool,
		brushWidth,
		brushColor,
		shapeFill,
		canvasHeight,
		canvasWidth,
		// isDrawingMode,
		// objectSelection
	]);

	React.useEffect(() => {
		return () => {
			canvasRef.current = null
		};
	}, [])

	const setCanvas = () => {
		if (!canvasRef.current) {
			canvasRef.current = new fabric.Canvas('canvas', { backgroundColor: 'white', height: canvasHeight, width: canvasWidth });
			canvasRef.current.renderAll();
		}

		canvasRef.current.forEachObject(o => {
			// check is in eerased items
			o.selectable = objectSelection; o.evented = objectSelection
		});
		canvasRef.current.freeDrawingBrush.width = brushWidth;
		canvasRef.current.freeDrawingBrush.color = tool === 'erase' ? 'white' : brushColor;

		canvasRef.current.on('mouse:down', (e) => {

			if (!canvasRef.current) return;
			mousedownRef.current = true;

			switch (tool) {
				case 'draw':
					canvasRef.current.isDrawingMode = true;
					break;

				case 'erase':
					console.log(canvasRef.current.item(0))
					erasedItems.current.push(canvasRef.current.item(0));
					break;
				case 'line':
					if (!e.pointer || !drawingObjRef.current) return;
					canvasRef.current.isDrawingMode = false;

					canvasRef.current.selection = objectSelection;

					objRef.current = new fabric.Line(
						[e.pointer?.x, e.pointer?.y, e.pointer?.x, e.pointer.y],
						{ stroke: brushColor, strokeWidth: brushWidth, selectable: objectSelection, evented: objectSelection, fill: shapeFill ? brushColor : '' }
					)
					canvasRef.current.add(objRef.current);
					canvasRef.current.renderAll();
					break;
				case 'circle':
					if (!e.pointer || !drawingObjRef.current || !objOriginRef.current) return;
					canvasRef.current.isDrawingMode = false;
					canvasRef.current.selection = objectSelection;
					objOriginRef.current = { x: e.pointer.x, y: e.pointer.y };

					objRef.current = new fabric.Circle(
						{
							left: objOriginRef.current.x,
							top: objOriginRef.current.y,
							originX: 'left',
							originY: 'top',
							radius: e.pointer.x - objOriginRef.current.x,
							angle: 0,
							fill: shapeFill ? brushColor : '',
							stroke: brushColor,
							strokeWidth: brushWidth,
							selectable: objectSelection,
							evented: objectSelection
						}
					)
					canvasRef.current.add(objRef.current);
					canvasRef.current.renderAll();
					break;
				case 'square':
					if (!e.pointer || !drawingObjRef.current || !objOriginRef.current) return;
					canvasRef.current.isDrawingMode = false;
					canvasRef.current.selection = objectSelection;
					objOriginRef.current = { x: e.pointer.x, y: e.pointer.y };

					objRef.current = new fabric.Rect({
						left: objOriginRef.current.x,
						top: objOriginRef.current.y,
						originX: 'left',
						originY: 'top',
						width: e.pointer.x - objOriginRef.current.x,
						height: e.pointer.y - objOriginRef.current.y,
						angle: 0,
						fill: shapeFill ? brushColor : '',
						transparentCorners: false,
						stroke: brushColor,
						strokeWidth: brushWidth,
						selectable: objectSelection,
						evented: objectSelection
					});
					canvasRef.current.add(objRef.current);
					break;
				case 'select':
					canvasRef.current.isDrawingMode = false;
					break;
				default:
					return;
			}

		});

		canvasRef.current.on('mouse:move', (e) => {
			if (!mousedownRef.current) return;
			switch (tool) {
				case 'draw':
					break;
				case 'erase':
					break;
				case 'line':
					if (!canvasRef.current || !objRef.current || !e.pointer || !drawingObjRef.current) return;
					(objRef.current as fabric.Line).set({
						x2: e.pointer.x,
						y2: e.pointer.y
					});
					objRef.current.setCoords();
					canvasRef.current.renderAll();
					break;
				case 'circle':
					if (!canvasRef.current || !e.pointer || !objRef.current) return;

					let radius = Math.abs(objOriginRef.current.y - e.pointer.y) / 2;
					if (objRef.current.strokeWidth && radius > objRef.current.strokeWidth) {
						radius -= objRef.current.strokeWidth / 2;
					}

					(objRef.current as fabric.Circle).set({ radius: radius });

					canvasRef.current.renderAll();
					break;
				case 'square':
					if (!canvasRef.current || !e.pointer || !objRef.current) return;

					(objRef.current as fabric.Rect).set({ width: Math.abs(objOriginRef.current.x - e.pointer.x) });
					(objRef.current as fabric.Rect).set({ height: Math.abs(objOriginRef.current.y - e.pointer.y) });

					canvasRef.current.renderAll();
					break;
				case 'select':
					break;
				default:
					if (!canvasRef.current) return;
			}
		});
		canvasRef.current.on('mouse:up', () => {

			mousedownRef.current = false;
			objRef.current = null;
			handleSave();
			objOriginRef.current = { x: 0, y: 0 };
		});
	};

	const handleLoadBrushColor = () => {
		dispatch(setBrushColor(colorPallette[0]));
	}

	const handleLoadBrushWidth = () => {
		const loadedBrushWidth = Number(localStorage.getItem('brushWidth'));

		if (!loadedBrushWidth) return;

		dispatch(setBrushWidth(loadedBrushWidth));
	}

	const handleSave = () => {
		if (!canvasRef.current) return;
		const canvasDataJSON = JSON.stringify(canvasRef.current);
		localStorage.setItem('canvasData', canvasDataJSON);
	};

	const handleLoadCanvas = () => {
		const loadedData = localStorage.getItem('canvasData');
		if (!loadedData || !canvasRef.current) return;
		canvasRef.current.loadFromJSON(loadedData, () => canvasRef.current?.renderAll());

	};

	const handleLoadColors = () => {
		const colorsData = localStorage.getItem('colorsData');

		if (!colorsData) return setLoaded(true);
		const loadedColors = colorPallette.map((_: any, i: number) => JSON.parse(colorsData)[i])

		dispatch(setColorPallette(loadedColors));
	}

	return (
		<Grid
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#dfd9d9',
				height: {
					xs: '100%',
					sm: '100%',
					md: '100%',
					lg: '100vh'
				},
				width: '100%',
			}}
			id={'canvasContainer'}
		>
			{!canvasHeight || !canvasWidth ? <Typography variant={'body2'}>Loading Canvas...</Typography> : null}
			<div style={!canvasHeight || !canvasWidth ? { position: 'absolute', left: -10000 } : { width: 'fit-content', height: 'fit-content' }}>
				<canvas id={'canvas'} />
			</div>
		</Grid >
	)
}

export default Canvas;
