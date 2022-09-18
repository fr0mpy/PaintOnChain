import TabletLayout from "../TabletLayout"
import React from "react";
import DesktopLayout from "../DesktopLayout";
import MobileLayout from "../MobileLayout";

import Navigation from "../../Common/Navigation";
import Canvas from "../../Common/Canvas";
import { CanvasTools } from "../../Common/CanvasTools/";
import { Typography, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/system";

export const LayoutResolver = () => {

	const canvasRef = React.useRef<fabric.Canvas | null>(null);
	const objRef = React.useRef<fabric.Line | fabric.Triangle | fabric.Circle | fabric.Rect | null>(null);
	const objOriginRef = React.useRef<{ x: number, y: number }>({ x: 0, y: 0 });

	const mousedownRef = React.useRef<boolean>(false);
	const drawingObjRef = React.useRef<boolean>(false);
	const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'lg'));
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	if (isDesktop) {
		return (
			<DesktopLayout
				navigation={<Navigation />}
				canvas={<Canvas
					canvasRef={canvasRef}
					objRef={objRef}
					objOriginRef={objOriginRef}
					mousedownRef={mousedownRef}
					drawingObjRef={drawingObjRef}
				/>}
				tools={<CanvasTools
					canvasRef={canvasRef}
					objRef={objRef}
					objOriginRef={objOriginRef}
					mousedownRef={mousedownRef}
					drawingObjRef={drawingObjRef}
				/>}
			/>
		)
	}

	if (isTablet) {
		return (
			<TabletLayout
				canvasRef={canvasRef}
				canvas={<Canvas
					canvasRef={canvasRef}
					objRef={objRef}
					objOriginRef={objOriginRef}
					mousedownRef={mousedownRef}
					drawingObjRef={drawingObjRef}
				/>}
				tools={<CanvasTools
					canvasRef={canvasRef}
					objRef={objRef}
					objOriginRef={objOriginRef}
					mousedownRef={mousedownRef}
					drawingObjRef={drawingObjRef}
				/>}
			/>
		)
	}

	if (isMobile) {
		return (
			<MobileLayout
				canvasRef={canvasRef}
				canvas={
					<Canvas
						canvasRef={canvasRef}
						objRef={objRef}
						objOriginRef={objOriginRef}
						mousedownRef={mousedownRef}
						drawingObjRef={drawingObjRef}
					/>
				}
				canvasTools={
					<CanvasTools
						canvasRef={canvasRef}
						objRef={objRef}
						objOriginRef={objOriginRef}
						mousedownRef={mousedownRef}
						drawingObjRef={drawingObjRef}
					/>
				}
			/>
		)
	}

	else return <></>
}