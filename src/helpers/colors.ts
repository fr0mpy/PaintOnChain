import chroma from "chroma-js";

export const componentToHex = (c: string) => {
	var hex = parseInt(c, 16);
	return hex.toString().length === 1 ? "0" + hex : hex;
};

export const rgbToHex = (r: string, g: string, b: string) => {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const getPixelHexCode = (currentX: number, currentY: number, context: CanvasRenderingContext2D): string => {
	if (!context) return '';

	const data = context.getImageData(currentX, currentY, 1, 1).data;
	const hex = rgbToHex(data[0].toString(), data[1].toString(), data[2].toString());

	return hex;
};

export const generateRandomColor = () => `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;

export const createColorPalette = () => {
	const randomTertiaryColors = [...Array(6)].map(r => generateRandomColor());
	return chroma.scale(randomTertiaryColors).colors(16);
}